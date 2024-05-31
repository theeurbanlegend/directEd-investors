const Investor = require("../models/investorSchema");
const bcrypt = require("bcrypt");
const jwtSign = require("../auth/jwtSign");
const Investment = require("../models/investmentSchema");

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
module.exports = {
  loginHandler,
  signupHandler,
  updateHandler,
  resetHandler,
  addInvestment,
  getInvestorDetails,
};
