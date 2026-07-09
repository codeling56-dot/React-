import React from "react";

const Footer = () => {
  return (
    <section className=" bg-[#0C0F0F]  px-16 py-20">
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="w-1/3 flex flex-col gap-5">
          <h2 className="font-heading text-4xl font-bold text-neutral">
            SUKOI
          </h2>

          <p className="font-body text-sm text-zinc-400 leading-6 max-w-xs">
            © 2024 SUKOI. All Rights Reserved.
            <br />
            Quiet Luxury Defined.
          </p>
        </div>

        {/* Center */}
        <div className="w-1/3 flex flex-col items-center">
          <p className="font-label uppercase tracking-[0.2em] text-xs text-secondary font-semibold mb-5">
            Follow Us
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-zinc-400 hover:text-secondary transition-colors duration-300"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-zinc-400 hover:text-secondary transition-colors duration-300"
            >
              Twitter
            </a>

            <a
              href="#"
              className="text-zinc-400 hover:text-secondary transition-colors duration-300"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/3 flex flex-col items-end gap-4">
          <a
            href="#"
            className="text-sm text-neutral hover:text-secondary transition-colors duration-300"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-sm text-neutral hover:text-secondary transition-colors duration-300"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="text-sm text-neutral hover:text-secondary transition-colors duration-300"
          >
            Shipping & Returns
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
