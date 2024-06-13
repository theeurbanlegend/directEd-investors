const Investor = require("../models/investorSchema");
const bcrypt = require("bcrypt");
const jwtSign = require("../auth/jwtSign");
const nodemailer = require('nodemailer');
const Investment = require("../models/investmentSchema");
const jwt=require('jsonwebtoken')

const loginHandler = async (req, res) => {
  const { investor_email, password } = req.body;
  if (!investor_email || !password) {
    return res.status(400).json({ msg: "Email or passowrd are required" });
  }
  const loginUser = await Investor.findOne({ investor_email })
    .populate("investments")
    .populate("pools_invested.pool_id")
    .populate("pools_invested.students_selected");
  if (!loginUser) {
    return res.status(404).json({ msg: "Not found!" });
  }
  //password check
  const isValidPass = await bcrypt.compare(password, loginUser.password);
  if (!isValidPass) return res.status(403).json({ msg: "Unauthorised!" });
  const accessToken = jwtSign(
    loginUser._id,
    loginUser.investor_name,
    loginUser.investor_email,
    loginUser?.profile[0]?.url
  );
  return res.status(200).json({ accessToken: accessToken, inv: loginUser });
};
const signupHandler = async (req, res) => {
  const { investor_name, investor_email, password, profile, bio } = req.body;
  if (!investor_name || !investor_email || !password) {
    return res.status(400).json({ msg: "Email or password are required" });
  }
  const userExists = await Investor.findOne({ investor_email });
  if (userExists) {
    return res.status(409).json({ msg: "User already exists" });
  }
  const hashed = await bcrypt.hash(password, 10);
  const newUser = new Investor({
    investor_name,
    investor_email,
    profile,
    bio,
    password: hashed,
    pools_invested: [],
    investments: [],
  });
  await newUser.save();
  const accessToken = jwtSign(
    newUser._id,
    newUser.investor_name,
    newUser.investor_email,
    newUser?.profile[0]?.url
  );
  return res.status(201).json({ accessToken: accessToken });
};
const updateHandler = async (req, res) => {
  //profile will come later
  const {
    investor_name,
    investor_email,
    newemail,
    bio,
    password,
    newpassword,
  } = req.body;
  if (!investor_email || !password) {
    return res.status(400).json({ msg: "Email or passowrd are required" });
  }
  const updateUser = await Investor.findOne({ investor_email: investor_email });
  if (!updateUser) {
    return res.status(404).json({ msg: "Not found!" });
  }
  //password check
  const isValidPass = await bcrypt.compare(password, updateUser.password);
  if (!isValidPass) return res.status(403).json({ msg: "Unauthorised!" });
  if (newemail) updateUser.investor_email = newemail;
  if (bio) updateUser.bio = bio;
  if (investor_name) updateUser.investor_name = investor_name;
  if (newpassword) {
    const hashed = await bcrypt.hash(newpassword, 10);
    updateUser.password = newpassword;
  }
  await updateUser.save();
  const accessToken = jwtSign(
    updateUser._id,
    updateUser.investor_name,
    updateUser.investor_email,
    updateUser?.profile[0]?.url
  );
  return res.status(201).json({ accessToken: accessToken });
};
const resetHandler = async (req, res) => {
  const { investor_email, password } = req.body;
  if (!investor_email || !password) {
    return res.status(400).json({ msg: "Email or password are required" });
  }
  const loginUser = await Investor.findOne({ investor_email });
  if (!loginUser) {
    return res.status(404).json({ msg: "Not found!" });
  }
  //password check
  const hashed = await bcrypt.hash(password, 10);
  return res.status(200).json({ status: "Password reset! Please login again" });
};
const addInvestment = async (
  pool_id,
  investor_email,
  investor_id,
  amount_total,
  createdAt
) => {
  if (!investor_email || !pool_id) {
    throw new Error("Email and id required!");
  }
  const investor = await Investor.findOne({ investor_email });
  if (!investor) {
    throw new Error("Investor not found");
  }
  const poolInvested = investor.pools_invested.find(
    (pool) => pool.pool_id == pool_id
  );
  if (poolInvested) {
    console.log("Pool already invested");
    return;
  }
  const investment = new Investment({
    investor: investor_id,
    pool_invested: pool_id,
    tokens_invested: amount_total,
    investment_date: createdAt,
    investment_status: "active",
    potential_returns: "20%",
  });
  await investment.save();
  investor.investments.push(investment._id);
  investor.pools_invested.push({
    pool_id: pool_id,
    students_selected: [],
  });
  await investor.save();
};
const getInvestorDetails = async (req, res) => {
  const { id } = req.params;
  const investor = await Investor.findById(id)
    .populate("investments")
    .populate("pools_invested.pool_id")
    .populate("pools_invested.students_selected");
  if (!investor) {
    return res.status(404).json({ msg: "Investor not found" });
  }
  return res.status(200).json({ inv: investor });
};

const email = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: email,
    pass: emailPassword
  },
});


const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Find investor by email
    const investor = await Investor.findOne({ investor_email: email });
    if (!investor) {
      return res.status(404).json({ message: 'Investor not found' });
    }

    // Generate reset token
    const resetToken = jwt.sign({ id: investor._id }, process.env.ACCESS_SECRET, { expiresIn: '1h' });

    // Update investor with reset token and expiration
    investor.resetPasswordToken = resetToken;
    investor.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await investor.save();

    // Send email with the reset token
    const mailOptions = {
      to: investor.investor_email,
      from: process.env.EMAIL,
      subject: 'Password Reset',
      html: `
      <p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
      <p>Please click on the following link, or paste this into your browser to complete the process:</p>
      <p><a href=" http://localhost:5173/reset-password/${resetToken}">Reset Password</a></p>
      <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
    `,
    };

    await transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
    res.status(200).json({ message: 'Password reset email sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error in sending email' });
  }
}

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);

    // Check if the token has expired
    if (decoded.exp < Date.now() / 1000) {
      return res.status(400).json({ message: 'Token has expired' });
    }

    // Find investor by decoded ID
    const investor = await Investor.findById(decoded.id);
    if (!investor) {
      return res.status(404).json({ message: 'Investor not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update investor's password
    investor.password = hashedPassword;
    await investor.save();

    // Optionally clear reset token fields (if not needed anymore)
    investor.resetPasswordToken = undefined;
    investor.resetPasswordExpires = undefined;
    await investor.save();

    // Send success response
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ message: 'Failed to reset password' });
  }
}

module.exports = {
  loginHandler,
  signupHandler,
  updateHandler,
  resetHandler,
  addInvestment,
  getInvestorDetails,
  forgotPassword,
  resetPassword
};

// DirectEdDevelopment1