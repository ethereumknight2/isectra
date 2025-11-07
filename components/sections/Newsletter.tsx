"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsSuccess(true);
        setEmail("");
        setFirstName("");
      } else {
        setMessage(data.error || "Failed to subscribe");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-xl">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Stay Updated with IT Insights
        </h3>
        <p className="text-blue-100 mb-6">
          Subscribe to our newsletter for IT tips, security updates, and
          industry news.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none transition-colors duration-200"
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-white focus:outline-none transition-colors duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>Subscribe Now</>
            )}
          </button>

          {message && (
            <div
              className={`mt-4 p-4 rounded-lg flex items-center justify-center ${
                isSuccess
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isSuccess && <CheckCircle className="w-5 h-5 mr-2" />}
              {message}
            </div>
          )}
        </form>

        <p className="text-blue-100 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
