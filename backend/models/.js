// front end
import React, { useRef, useEffect, useState } from 'react';

const VerificationAccount = ({ email, otp, onClose, onSuccess }) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const codeRefs = useRef([]);

  useEffect(() => {
    if (codeRefs.current[0]) {
      codeRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (e, idx) => {
    const inputValue = e.target.value;

    if (!isNaN(inputValue) && inputValue.length <= 1) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[idx] = inputValue;
      setVerificationCode(newVerificationCode);

      if (idx < 5 && codeRefs.current[idx + 1]) {
        codeRefs.current[idx + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      e.preventDefault();

      const newVerificationCode = [...verificationCode];
      newVerificationCode[idx] = '';
      setVerificationCode(newVerificationCode);

      if (idx > 0 && codeRefs.current[idx - 1]) {
        codeRefs.current[idx - 1].focus();
      }
    }
  };

  const handleVerify = () => {
    const enteredOTP = verificationCode.join(''); // Concatenate the entered OTP code
    if (enteredOTP === otp) {
      onSuccess(); // Call the onSuccess callback to handle successful verification
    } else {
      alert('Incorrect OTP. Please try again.'); // Display an error message
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        backdropFilter: 'blur(10px)', // Apply blur effect to the background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999, // Ensure the overlay is on top of other content
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ color: '#333' }}>Verify Your Account</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          We emailed you the six-digit code to your email address
          <br />
          Enter the code below to confirm your email address
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          {verificationCode.map((value, idx) => (
            <input
              key={idx}
              ref={(el) => (codeRefs.current[idx] = el)}
              type="text"
              maxLength={1}
              value={value}
              className="code"
              placeholder="0"
              onChange={(e) => handleInputChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              style={{
                width: '40px',
                height: '40px',
                fontSize: '24px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                textAlign: 'center',
                marginRight: '8px',
                outline: 'none',
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={handleVerify}
          style={{
            minWidth: '200px',
            padding: '12px',
            fontSize: '16px',
            backgroundColor: '#9861c2',
            color: '#fff',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            outline: 'none',
          }}
        >
          Verify
        </button>
        <small style={{ color: '#888', marginTop: '20px', display: 'block' }}>
          If you didn't receive a code! <strong>RESEND</strong>
        </small>
        <button
          type="button"
          onClick={onClose}
          style={{
            marginTop: '20px',
            padding: '12px',
            fontSize: '16px',
            backgroundColor: '#ccc',
            color: '#333',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            outline: 'none',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VerificationAccount;

SENDGRID_API_KEY='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'

// OTP.jSx

const express = require('express');
const router = express.Router();
const speakeasy = require('speakeasy');
const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with your API key
sgMail.setApiKey('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');

// Generate and send OTP to the user's email
router.post('/generate-otp', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const otp = speakeasy.totp({
    secret: speakeasy.generateSecret({ length: 20 }).base32,
    encoding: 'base32'
  });

  // Send OTP to user's email using SendGrid
  const msg = {
    to: email,
    from: 'raymondezra276@gmail.com',
    subject: 'Your OTP for Login',
    text: `Your OTP (One-Time Password) for login is: ${otp}`,
  };

  sgMail.send(msg)
    .then(() => {
      console.log('OTP sent to', email);
      res.status(200).json({
        message: 'OTP generated and sent successfully to your email',
        otp: otp
      });
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      res.status(500).json({ error: 'Failed to send OTP via email' });
    });
});

module.exports = router;


//server.js

require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
//const corsOptions = require('./config/corsOptions')
const { default: mongoose } = require('mongoose')
const AddRecipient = require('./routes/recipientadd')
const TransactionRouter = require('./routes/NewT')
const DataRouter = require('./routes/Transaction')
const UserRouter = require('./routes/userRoutes')
const AuthRouter = require('./routes/AuthRoutes')
const CsvRouter = require('./routes/CsvTransaction')
const bodyParser = require('body-parser');
const otpRoutes = require('./routes/Otp');

//app routes
app.use(logger)
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))

app.use(errorHandler)

//routes
app.use('/auth',AuthRouter)
app.use('/api',TransactionRouter)
app.use('/api',AddRecipient)
app.use('/api',DataRouter)
app.use('/users',UserRouter)
app.use('/api',CsvRouter)
app.use('/api/otp', otpRoutes)



//db connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to MongoDB')
        console.log('Server listening to port', process.env.PORT)
    })
})
.catch((err) => {
    console.error('Error connecting to database:', err.message)
    process.exit(1)
})

