import React from "react";
import { Search, ShoppingCartIcon, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-[#1A1A1A] border-b border-zinc-800 px-10 flex items-center justify-between">
      {/* Logo + Links */}
      <div className="flex items-center gap-10">
        <h1 className="text-3xl font-semibold tracking-wider text-[#F5F5F5]">
          SUKOI
        </h1>

        <div className="flex items-center gap-8 text-sm uppercase tracking-wide">
          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
          >
            Home
          </a>

          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
          >
            Categories
          </a>

          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
          >
            About Us
          </a>

          <a
            href="#"
            className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
          >
            Customer Support
          </a>
        </div>
      </div>

      {/* Search + Icons */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 w-72 h-10 px-4 rounded-md bg-[#0A0A0A] border border-zinc-800">
          <Search size={18} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-[#F5F5F5] placeholder:text-zinc-500 outline-none"
          />
        </div>

        <ShoppingCartIcon
          size={20}
          className="cursor-pointer text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
        />

        <User
          size={20}
          className="cursor-pointer text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
        />
      </div>
    </nav>
  );
};

export default Navbar;
