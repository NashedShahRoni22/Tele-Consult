"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Shield, CheckCircle, ArrowRight, ArrowLeft
} from 'lucide-react';

const AuthPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [countdown, setCountdown] = useState(0);
  
  const [formData, setFormData] = useState({
    email: '',
    otp: ['', '', '', '', '', '']
  });

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });
      
      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSendOtp = () => {
    // API call to send OTP
    console.log('Sending OTP to:', formData.email);
    setCountdown(60);
    setCurrentStep(2);
    
    // API: POST /api/auth/send-otp
    // Body: { email: formData.email }
    // Response: { success: true, message: 'OTP sent' }
  };

  const handleVerifyOtp = () => {
    const otp = formData.otp.join('');
    console.log('Verifying OTP:', otp, 'for email:', formData.email);
    
    // API call to verify OTP
    // If user exists -> Login
    // If new user -> Auto create account & Login
    
    // API: POST /api/auth/verify-otp
    // Body: { email: formData.email, otp: otp }
    // Response: { success: true, token: 'jwt_token', isNewUser: true/false }
    
    // On success: 
    // localStorage.setItem('token', token);
    // router.push('/dashboard');
  };

  const handleResendOtp = () => {
    if (countdown === 0) {
      setCountdown(60);
      console.log('OTP resent to:', formData.email);
      
      // API: POST /api/auth/resend-otp
      // Body: { email: formData.email }
    }
  };

  const steps = [
    { number: 1, title: 'Email', icon: Mail },
    { number: 2, title: 'Verify', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">TCP</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">TeleConsult Pro</h1>
                  <p className="text-gray-600">Healthcare at your fingertips</p>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Your <span className="text-primary">Health Journey</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Access quality healthcare from verified doctors, anytime, anywhere.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: Shield, text: 'Secure & Private' },
                  { icon: CheckCircle, text: '500+ Verified Doctors' },
                  { icon: Mail, text: '24/7 Consultation' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Auth Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
          >
            {/* Stepper */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                          currentStep > step.number
                            ? 'bg-primary text-white'
                            : currentStep === step.number
                            ? 'bg-primary text-white ring-4 ring-green-100'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle size={24} />
                        ) : (
                          <step.icon size={24} />
                        )}
                      </div>
                      <span className={`text-sm font-medium mt-2 ${
                        currentStep >= step.number ? 'text-primary' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-4 rounded transition-all ${
                        currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <AnimatePresence mode="sync">
              {/* Step 1: Email */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Welcome!
                    </h3>
                    <p className="text-gray-600">
                      Enter your email to get started
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      We'll send a verification code to this email
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendOtp}
                    disabled={!formData.email || !/\S+@\S+\.\S+/.test(formData.email)}
                    className={`w-full py-4 rounded-xl font-semibold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
                      formData.email && /\S+@\S+\.\S+/.test(formData.email)
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Send Verification Code
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: OTP Verification */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Check Your Email
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We've sent a 6-digit verification code to
                    </p>
                    <p className="font-semibold text-gray-900 mb-4">{formData.email}</p>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-primary text-sm hover:underline"
                    >
                      Change email?
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 text-center">
                      Enter Verification Code
                    </label>
                    <div className="flex gap-2 justify-center">
                      {formData.otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength="1"
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    {countdown > 0 ? (
                      <p className="text-gray-600">
                        Didn't receive the code?{' '}
                        <span className="font-semibold text-gray-400">
                          Resend in {countdown}s
                        </span>
                      </p>
                    ) : (
                      <button
                        onClick={handleResendOtp}
                        className="text-primary font-semibold hover:text-primary-dark transition-colors"
                      >
                        Resend Verification Code
                      </button>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setCurrentStep(1);
                        setFormData({ ...formData, otp: ['', '', '', '', '', ''] });
                      }}
                      className="flex-1 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={20} />
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleVerifyOtp}
                      disabled={formData.otp.some(digit => !digit)}
                      className={`flex-1 py-4 rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-2 ${
                        formData.otp.every(digit => digit)
                          ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Verify & Continue
                      <CheckCircle size={20} />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Terms */}
            <p className="text-center text-sm text-gray-500 mt-8">
              By continuing, you agree to our{' '}
              <a href="#" className="text-primary hover:underline font-medium">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;