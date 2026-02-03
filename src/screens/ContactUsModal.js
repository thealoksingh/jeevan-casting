import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { emailKeys } from "../keys/key";
import { LottieAlert } from "../components/lottie/LottieAlert";

function ContactUsModal({ isOpen, onClose }) {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailKeys.serviceId, emailKeys.templateId, form.current, {
        publicKey: emailKeys.publicKey,
      })
      .then(
        () => {
          console.log("Message sent successfully!");
          form.current.reset();
          setLoading(false);
          setShowSuccessAlert(true);
          onClose();
        },
        (error) => {
          setShowFailureAlert(true);
          setLoading(false);
          console.log("Failed to send: " + error.text);
        },
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm pt-12 px-4 mt-10">
      <div className="relative w-full max-w-md mx-auto rounded-sm border border-[var(--brand-secondary)] border-[0.2px] shadow-lg p-4 md:p-6 text-white backdrop-blur-md bg-gradient-to-br from-yellow-400/10 via-[var(--brand-accent)]/5 to-transparent">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-300 hover:text-white text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-[var(--brand-secondary)] text-center">
          Submit Your Profile
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <div className="flex flex-row gap-2">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-300">Phone</label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            />
          </div>

          <div className="flex flex-row gap-2">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Height</label>
              <input
                type="height"
                name=""
                placeholder="Enter Height"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Age</label>
              <input
                type="Age"
                name=""
                placeholder="Enter Age"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Gender</label>
              <input
                type="Gender"
                name=""
                placeholder="Enter Gender"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Weight</label>
              <input
                type="Weight"
                name=""
                placeholder="Enter Weight"
                required
                className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
              />
            </div>
          </div>
          <div className="pb-4">
            <label className="block text-sm mb-1 text-gray-300">Location</label>
            <input
              type=""
              name=""
              placeholder="Enter Location E.g Country, State, City"
              className="w-full px-3 py-2 rounded-sm bg-white/5 border border-gray-500/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            />
          </div>

          {loading ? (
            <div className="w-full flex items-center justify-center gap-2 py-2 rounded-sm bg-[var(--brand-secondary)]/80 text-[var(--brand-primary)] font-semibold shadow-md">
              <svg
                className="animate-spin h-5 w-5 text-[var(--brand-primary)]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span>Submitting...</span>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-2   rounded-sm bg-[var(--brand-secondary)] hover:bg-[var(--brand-secondary-hover)] transition-all text-[var(--brand-primary)] font-semibold shadow-md"
            >
              Submit
            </button>
          )}
        </form>
        {showSuccessAlert && (
          <LottieAlert
            type="success"
            message="Message submitted successfully 🎉"
            onClose={() => setShowSuccessAlert(false)}
            autoClose={true}
            loop={false}
          />
        )}
        {showFailureAlert && (
          <LottieAlert
            type="failure"
            message="ohh !! Failed to Send Try again 🥹"
            onClose={() => setShowFailureAlert(false)}
            autoClose={true}
            loop={true}
          />
        )}
      </div>
    </div>
  );
}

export default ContactUsModal;
