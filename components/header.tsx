"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoIcon from "./svg/LogoIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent pt-3">
      <div className="flex h-20 max-w-7xl mx-auto items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            {/* OPTION FOR LOGO IMAGE */}
            {/* <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain "
              priority
            /> */}
            <LogoIcon />
          </div>
          <span className="text-[18px] font-manrope font-bold text-[#635BFF] pb-1">
            Your logo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-manrope text-[#0A2540] font-semibold transition-colors hover:text-[#635BFF]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="w-full px-4 py-2.5 font-manrope rounded-[8px] bg-[#DDDBFF] 
              text-[#635BFF] font-medium cursor-pointer leading-6 font-sm hover:bg-[#635BFF] hover:text-white  transition-all duration-400 ease-in-out"
          >
            Get Started
          </button>
          <button
            className="px-4 font-manrope font-medium py-2 rounded-[8px] border-2 border-[#635BFF] 
          text-[#635BFF] text-sm  hover:bg-[#635BFF] hover:text-white transition-all duration-400 ease-in-out leading-6 cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#2D3142]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-xl 
        border-b border-gray-100 md:hidden animate-in slide-in-from-top duration-300"
        >
          <div className="flex flex-col p-6 gap-3 md:gap-4 lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-semibold text-[#2D3142] hover:text-[#5F63F2]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <button
                className="w-full px-4 py-2.5 font-manrope rounded-[8px] bg-[#DDDBFF] 
              text-[#635BFF] font-medium transition-colors cursor-pointer leading-6 font-sm"
              >
                Get Started
              </button>
              <button className="w-full py-3 rounded-lg border-2 border-[#5F63F2] text-[#5F63F2] font-bold">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
