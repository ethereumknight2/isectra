"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  Sparkles,
  Clock,
  Shield,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Contact Form",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage(data.message);
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setResponseMessage(data.error || "Failed to submit form");
        setIsSuccess(false);
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-10 blur-2xl" />

      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header section with gradient */}
        <div className="relative px-8 py-10 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-10 blur-2xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Free Consultation
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Get Your Free IT Assessment
            </h3>
            <p className="text-slate-600 text-lg">
              Fill out the form below and we'll get back to you within 48 hours
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>48-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span>Free Month Trial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form section */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="group">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                First Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 hover:bg-white"
                  placeholder="John"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 hover:bg-white"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 hover:bg-white"
                placeholder="john@company.com"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="group">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 hover:bg-white"
                  placeholder="(904) 555-0100"
                />
              </div>
            </div>

            <div className="group">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Company Name
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 hover:bg-white"
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              How Can We Help? *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none bg-slate-50 hover:bg-white"
                placeholder="Tell us about your IT challenges or what services you're interested in..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center overflow-hidden"
          >
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative flex items-center gap-2">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </span>
          </button>

          {/* Response Message */}
          {responseMessage && (
            <div
              className={`p-4 rounded-xl flex items-start gap-3 animate-fadeIn ${
                isSuccess
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {isSuccess && (
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}
              <p className="text-sm">{responseMessage}</p>
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-600 text-sm text-center">
            By submitting this form, you agree to our{" "}
            <a
              href="/privacy"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              privacy policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              terms of service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
