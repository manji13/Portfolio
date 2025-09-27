"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_tss2vlq",      // Your Service ID
        "template_t66dhtj",     // Your Template ID
        templateParams,
        "d20P7iMlg2dck3qv7"    // Your Public Key
      );

      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
            Let's Work Together
          </h1>
          
        </div>

        {/* Form Container */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          
          {/* Main form */}
          <form 
            onSubmit={handleSubmit} 
            className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl space-y-6"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">First Name</label>
                <div className="relative">
                  <Input
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 px-4 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Last Name</label>
                <div className="relative">
                  <Input
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 px-4 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 pl-12 pr-4 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 block">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <Input
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 pl-12 pr-4 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Service Required</label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 focus:ring-purple-500/20 rounded-xl h-12 transition-all duration-300">
                  <SelectValue placeholder="Choose the service you need" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectGroup>
                    <SelectLabel className="text-gray-300">Available Services</SelectLabel>
                    <SelectItem value="Web Development" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Web Development</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Full Stack Development" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Full Stack Development</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="Software Engineer" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Software Engineer</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">Your Message</label>
              <Textarea
                name="message"
                placeholder="Tell me about your project, requirements, timeline, or any questions you have..."
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl min-h-[120px] resize-none transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              )}
            </Button>

            {/* Status Messages */}
            {success === true && (
              <div className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {success === false && (
              <div className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-red-400 font-medium">Failed to send message. Please try again or contact me directly.</p>
              </div>
            )}
          </form>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Or reach out to me directly via email or social media
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;