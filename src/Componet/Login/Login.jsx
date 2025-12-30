import React, { useState } from 'react';
import { auth } from '../../Firebase/Firebase.init';
import { signInWithEmailAndPassword, sendPasswordResetEmail, confirmPasswordReset } from 'firebase/auth';
import { Link } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // new password state
  const [showResetModal, setShowResetModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [resetStep, setResetStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {  
    e.preventDefault();  
    setError(""); 
    setSuccessMessage("");
    setLoading(true); 

    // sign with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        alert("Login successful!");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setLoading(false);
        
        if (error.code === "auth/invalid-email") {
          setError("Invalid email format");
        } else if (error.code === "auth/user-not-found") {
          setError("No user found with this email");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many attempts. Please try again later");
        } else {
          setError("Login failed. Please check your credentials");
        }
      });
  };

  // email and forgot password 
  const handleForgotPassword = () => {                
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    
    setLoading(true);
    setError("");
    setSuccessMessage("");
    
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Password reset email sent! Check your inbox for the reset link.");
        setResetStep(2);
        setShowResetModal(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setLoading(false);
        if (error.code === "auth/user-not-found") {
          setError("No user found with this email");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email address");
        } else {
          setError("Failed to send reset email");
        }
      });
  };

  // new pass set 
  const handleResetPassword = () => {
    setError("");
    setSuccessMessage("");
    
    if (!resetCode) {
      setError("Please enter the reset code from your email");
      return;
    }
    
    if (!newPassword) {
      setError("Please enter new password");
      return;
    }
    
    if (newPassword.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    setLoading(true);
    
    confirmPasswordReset(auth, resetCode, newPassword)
      .then(() => {
        setSuccessMessage("Password reset successfully! You can now login with your new password.");
        setLoading(false);
        
        // 3 second por modal bondo hoiae jabe 
        setTimeout(() => {
          setShowResetModal(false);
          setResetStep(1);
          setNewPassword("");
          setConfirmPassword("");
          setResetCode("");
        }, 3000);
      })
      .catch((error) => {
        console.log("Reset error:", error.code, error.message);
        setLoading(false);
        if (error.code === "auth/invalid-action-code") {
          setError("Invalid or expired reset code");
        } else if (error.code === "auth/weak-password") {
          setError("Password is too weak");
        } else {
          setError("Failed to reset password");
        }
      });
  };

  // modal bondo korun 
  const closeResetModal = () => {
    setShowResetModal(false);
    setResetStep(1);
    setNewPassword("");
    setConfirmPassword("");
    setResetCode("");
    setError("");
    setSuccessMessage("");
  };

  return (
    <div>
      <div className="hero bg-[#fa90a0] h-[500px]">
        <div className="hero-content flex-col lg:flex-row-reverse ml-20 gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#3B3B3B]">Login now!</h1>
            <p className="py-6 text-[#525252]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>

          <div className="card bg-[#faa8b4] w-full max-w-sm shrink-0 shadow-2xl ml-30">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label text-black text-lg">Email</label>
                  <input 
                    type="email" 
                    className="input text-black text-lg bg-[#f7bfc8]" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />

                  <label className="label text-black text-lg">Password</label>
                  <input 
                    type="password" 
                    className="input text-black text-lg bg-[#f7bfc8]" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                  />

                  <div className="mt-2">
                    <button 
                      type='button' 
                      onClick={handleForgotPassword} 
                      className='link link-hover text-black'
                    >
                      Forgot password?
                    </button>
                  </div>
                  
                  {error && <p className='text-red-600 mt-2'>{error}</p>}
                  {successMessage && <p className='text-green-600 mt-2'>{successMessage}</p>}
                  
                  <button 
                    type="submit" 
                    className="btn bg-[#d3909a] mt-4 text-black w-full"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>

                  <div className='flex justify-center'>
                     {/* <a className='text-blue-700'>Register Now</a> */}
                     <Link to='/Register' className='text-blue-700'>Register Now</Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Password Reset Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-[#fa90a0] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#faa8b4] p-6 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-black">Reset Password</h2>
            
            {resetStep === 1 && (
              <div>
                <p className="mb-4 text-black">We've sent a reset email to {email}. Please check your inbox.</p>
                <button
                  onClick={closeResetModal}
                  className="btn btn-primary w-full"
                >
                  OK
                </button>
              </div>
            )}
            
            {resetStep === 2 && (
              <div>
                <p className="mb-4 text-black">Enter the reset code from your email and your new password:</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="label text-black">Reset Code</label>
                    <input
                      type="text"
                      className="input input-bordered w-full bg-[#f7bfc8] text-black"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                      placeholder="Enter reset code"
                    />
                  </div>
                  
                  <div>
                    <label className="label text-black">New Password</label>
                    <input
                      type="password"
                      className="input input-bordered w-full bg-[#f7bfc8] text-black"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New password (min 6 characters)"
                    />
                  </div>
                  
                  <div>
                    <label className="label text-black ">Confirm Password</label>
                    <input
                      type="password"
                      className="input input-bordered w-full bg-[#f7bfc8] text-black"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={closeResetModal}
                    className="btn btn-ghost flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleResetPassword}
                    disabled={loading}
                    className="btn btn-primary flex-1"
                  >
                    {loading ? "Resetting..." : "Reset Password"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;