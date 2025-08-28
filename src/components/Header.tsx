"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: "Company", href: "#company" },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources", hasDropdown: true },
];

const inter = Inter({ subsets: ["latin"] });

// Dropdown arrow SVG component
const DropdownArrow = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4 lg:py-[15px]">
        <div
          className="flex items-center justify-between bg-white rounded-[50px] px-3 sm:px-4 lg:px-[15px] py-2 sm:py-2.5"
          style={{
            boxShadow:
              "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.15)",
          }}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center px-3 sm:px-4 lg:px-5 py-0 h-[35px]">
            <Image 
              src="/header/logo.svg" 
              alt="Sprk" 
              width={98} 
              height={35} 
              priority 
              className="w-[80px] sm:w-[90px] lg:w-[98px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`${inter.className} hidden lg:flex items-center justify-center flex-1 gap-0`}>
            {navItems.map((item) => (
              <div key={item.label} className="flex items-center px-3 lg:px-[15px] py-2.5">
                <Link 
                  href={item.href} 
                  className="flex items-center gap-1 lg:gap-[5px] text-[12px] sm:text-[13px] lg:text-[14px] font-semibold leading-[1.1] text-[#141414] hover:opacity-80 transition-opacity"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <div className="w-2.5 h-1.5 flex items-center justify-center">
                      <DropdownArrow />
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className={`${inter.className} hidden lg:flex items-center gap-3`}>
            <Link
              href="#login"
              className="flex justify-center items-center w-[85px] px-6 py-2.5 rounded-[30px] text-white text-[14px] font-semibold leading-[1.1] bg-[#115056] hover:bg-opacity-90 transition-all"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="inline-flex justify-center items-center min-w-[153px] whitespace-nowrap px-6 py-2.5 rounded-[30px] text-[14px] font-semibold leading-[1.1] bg-white border border-[#115056] text-[#115056] hover:bg-gray-50 transition-all"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="lg:hidden inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md border border-black/10 text-[#141414] hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span aria-hidden className="text-lg">{mobileOpen ? "✕" : "≡"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen ? (
          <div className={`${inter.className} lg:hidden mt-3 rounded-2xl border border-black/10 bg-white p-4 shadow-lg`}> 
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="flex items-center justify-between py-3 px-2 text-[14px] sm:text-[15px] font-semibold text-[#141414] hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <div className="w-2.5 h-1.5 flex items-center justify-center">
                      <DropdownArrow />
                    </div>
                  )}
                </Link>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 pt-4 border-t border-gray-100">
                <Link
                  href="#login"
                  className="flex-1 flex justify-center items-center px-4 py-3 sm:py-2 rounded-[30px] text-white text-[14px] font-semibold leading-[1.1] bg-[#115056] hover:bg-opacity-90 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="#signup"
                  className="flex-1 inline-flex justify-center items-center whitespace-nowrap px-4 py-3 sm:py-2 rounded-[30px] text-[14px] font-semibold leading-[1.1] bg-white border border-[#115056] text-[#115056] hover:bg-gray-50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}


