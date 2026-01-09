import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#faf7f2] border-t border-gray-200 min-h-screen">
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-2">

        {/* LEFT — CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Contact
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed mb-10">
            For product questions, support, or collaboration inquiries,
            you can reach us using the details below.
          </p>

          <div className="space-y-6 text-sm">

            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📧</span>
              <div>
                <p className="text-gray-500">Email</p>
                <a
                  href="mailto:rohit.pokhariya123@gmail.com"
                  className="text-gray-900 font-medium hover:text-black transition"
                >
                  rohit.pokhariya123@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📍</span>
              <div>
                <p className="text-gray-500">Location</p>
                <a
                  href="https://www.google.com/maps/place/Dehradun,+Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:text-black transition"
                >
                  Dehradun, Uttarakhand, India
                </a>
              </div>
            </div>

            {/* Support hours */}
            <div className="flex items-start gap-4">
              <span className="text-xl">⏰</span>
              <div>
                <p className="text-gray-500">Support Hours</p>
                <p className="text-gray-900 font-medium">
                  Mon – Sat · 10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — CTA CARD */}
        <div className="bg-[#fffdfa] border border-gray-200 rounded-2xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in touch
          </h3>

          <p className="text-gray-600 leading-relaxed mb-8">
            If you have any questions about our products or services,
            feel free to email us. We usually respond within one business day.
          </p>

          <a
            href="mailto:rohit.pokhariya123@gmail.com"
            className="inline-flex items-center justify-center bg-black text-white px-7 py-3 rounded-full text-sm font-medium
            hover:bg-gray-800 transition active:scale-95"
          >
            Send email
          </a>

          <p className="text-xs text-gray-400 mt-6">
            Your information is never shared.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} eTrade. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
