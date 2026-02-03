import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer  className="bg-[var(--brand-primary)] text-[var(--neutral-bg-light)] pt-14">
      
      <div  className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* LOGO + ABOUT */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <img src="./logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            </div>
            <h2 className="text-xl font-bold tracking-wide">Jeevan Casting</h2>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed">
            Jeevan Casting connects fresh talent with real opportunities in films,
            advertisements, web series, and television. We help aspiring artists
            step into the spotlight and support production teams with the perfect cast.
          </p>
        </div>

        {/* OFFICE */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)]">
            Office
          </h3>

          <p className="mt-3 text-sm hover:text-[var(--brand-secondary)] transition">
            <a href="mailto:castingjeevan@gmail.com">
              castingjeevan@gmail.com
            </a>
          </p>

          <p className="mt-2 text-sm leading-relaxed">
            435, 4th Floor, Ashiana Trade Center,  
            Adityapur, Jamshedpur 831013
          </p>

          <p className="mt-2 text-sm">
            +91 7360802196
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div 
          className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[var(--brand-secondary)]">
            Follow Us
          </h3>

          <p className="mt-3 text-sm text-neutral-400">
            Stay updated with casting calls, auditions, and success stories.
            Follow us on social media.
          </p>

          <div
          
          className="flex gap-4 mt-5 justify-center md:justify-start">
            
            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaFacebookF />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaXTwitter />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaYoutube />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-white/10 py-5">
        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Jeevan Casting. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
