import React from "react";
import logo from "../assests/images/logo.png";
function Footer() {
  return (
    <footer className="bg-[var(--brand-primary)] text-[var(--neutral-bg-light)] pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center  ">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
            </div>
            <h2 className="text-xl font-bold tracking-wide">Curves & Codes</h2>
          </div>
          <p className="text-sm text-neutral-400">
            At Curves & Codes, we deliver innovative technology solutions—from
            AI analytics and intelligent surveillance to IT infrastructure and
            custom digital applications.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)]">
            Jamshedpur Office
          </h3>
          <p className="mt-2 text-sm hover:text-[var(--brand-secondary)] transition-colors">
            <a href="mailto:info@curvesandcodes.com">info@curvesandcodes.com</a>
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            435, 4th Floor, Ashiana Trade Center, Adityapur, Jamshedpur 831013
          </p>
          <p className="mt-2 text-sm">0657-2383110, 7004611986</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)]">
            New Delhi Office
          </h3>
          <p className="mt-2 text-sm hover:text-[var(--brand-secondary)] transition-colors">
            <a href="mailto:sales@curvesandcodes.com">
              sales@curvesandcodes.com
            </a>
          </p>

          <p className="mt-2 text-sm leading-relaxed">
            Chhatarpur Enclave Phase 1, Chattarpur, New Delhi 110074
          </p>
          <p className="mt-2 text-sm">9871165827</p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 py-4">
        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Curves & Codes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
