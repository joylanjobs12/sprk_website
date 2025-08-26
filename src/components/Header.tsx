"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Company", href: "#company" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div
          className="flex items-center justify-between"
          style={{
            padding: "10px 15px",
            borderRadius: 50,
            background: "#FFF",
            boxShadow:
              "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.15)",
          }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo/logo.svg" alt="Sprk" width={96} height={28} priority />
          </Link>

          <nav className={`${inter.className} hidden md:flex items-center gap-6 text-[14px] font-semibold leading-[110%] text-[color:var(--Text-Title,#141414)]`}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="hover:opacity-80">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={`${inter.className} hidden md:flex items-center gap-3`}>
            <Link
              href="#login"
              className="flex justify-center items-start w-[85px] px-6 py-[10px] rounded-[30px] text-white text-[14px] font-semibold leading-[110%] bg-[var(--Primary-Color,#115056)]"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="inline-flex justify-center items-start min-w-[153px] whitespace-nowrap px-6 py-[10px] rounded-[30px] text-[14px] font-semibold leading-[110%] bg-white border border-[color:var(--Primary-Color,#115056)] text-[color:var(--Primary-Color,#115056)]"
            >
              Create Account
            </Link>
          </div>

          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 text-[color:var(--Text-Title,#141414)]"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span aria-hidden>{mobileOpen ? "✕" : "≡"}</span>
          </button>
        </div>

        {mobileOpen ? (
          <div className={`${inter.className} md:hidden mt-3 rounded-2xl border border-black/10 bg-white p-4`}> 
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="py-2">
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <Link
                  href="#login"
                  className="flex-1 flex justify-center items-start px-4 py-2 rounded-[30px] text-white text-[14px] font-semibold leading-[110%] bg-[var(--Primary-Color,#115056)]"
                >
                  Login
                </Link>
                <Link
                  href="#signup"
                  className="flex-1 inline-flex justify-center items-start whitespace-nowrap px-4 py-2 rounded-[30px] text-[14px] font-semibold leading-[110%] bg-white border border-[color:var(--Primary-Color,#115056)] text-[color:var(--Primary-Color,#115056)]"
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


