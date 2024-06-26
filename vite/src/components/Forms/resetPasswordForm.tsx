import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "../../common/button";
import { Input } from "../../common/input";
import { toast } from 'react-toastify'; // If you are using toast notifications
import { baseURL } from '../../api/api';
// import PasswordInput from "../../common/PasswordInput";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Extract token from URL params using useParams

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    try {
      const response = await fetch(`${baseURL}/api/inv/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      if (response.ok) {
        toast.success("Password reset successfully");
        // Redirect to login page or another appropriate page
        navigate('/login');
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen c">
      <div className='mb-20'> <a href="/" className="font-bold md:text-2xl">
          <img
            src="/images/directEd-horizontal.png"
            width={"200px"}
            alt="DirectEd logo"
          />
        </a></div>
      <div className="max-w-md w-full px-6">
        <h2 className="text-3xl font-bold mb-6">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />
          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
