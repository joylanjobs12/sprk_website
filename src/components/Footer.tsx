import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 w-full">
          <div className="flex flex-col gap-4 sm:gap-6">
            <Image src="/logo/logo.svg" alt="Sprk" width={96} height={28} className="w-[80px] sm:w-[96px] h-auto" />
            <h2
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[56px] xl:text-[80px] leading-[1.1] font-medium px-4 sm:px-0"
              style={{
                color: "#141414",
                fontFamily: '"Aeonik Pro", sans-serif',
              }}
            >
              Still Have Questions?
            </h2>
            <div className="flex items-center px-6 sm:px-8 lg:px-[50px] py-3 sm:py-4 rounded-[50px] border border-[rgba(0,0,0,0.66)] w-full">
              <input
                type="email"
                placeholder="Email Us"
                className="w-full bg-transparent outline-none text-[16px] sm:text-[20px] lg:text-[32px] text-[rgba(0,0,0,0.66)] placeholder:text-[rgba(0,0,0,0.66)]"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                }}
              />
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-[53px]">
          {/* Resources */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[38px]">
            <h3
              className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1] font-medium"
              style={{
                color: "#141414",
                fontFamily: '"Aeonik Pro", sans-serif',
              }}
            >
              RESOURCES
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4 lg:gap-[15px]">
              <li
                className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] font-normal text-[rgba(0,0,0,0.66)]`}
              >
                Sprk Blog
              </li>
              <li
                className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] font-normal text-[rgba(0,0,0,0.66)]`}
              >
                Ebook - My Energy Efficient Home
              </li>
            </ul>
          </div>

          {/* Who We Serve */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[38px]">
            <h3
              className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1] font-medium"
              style={{
                color: "#141414",
                fontFamily: '"Aeonik Pro", sans-serif',
              }}
            >
              WHO WE SERVE
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4 lg:gap-[15px]">
              <li
                className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] font-normal text-[rgba(0,0,0,0.66)]`}
              >
                Homeowners
              </li>
              <li
                className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] font-normal text-[rgba(0,0,0,0.66)]`}
              >
                Pros
              </li>
              <li
                className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] font-normal text-[rgba(0,0,0,0.66)]`}
              >
                About Sprk
              </li>
              <li
                className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] font-normal text-[rgba(0,0,0,0.66)]`}
              >
                Contact Us
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[38px]">
            <h3
              className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1] font-medium"
              style={{
                color: "#141414",
                fontFamily: '"Aeonik Pro", sans-serif',
              }}
            >
              DOWNLOAD THE APP
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
              <Image 
                src="/footer/app-store.png" 
                alt="Download on the App Store" 
                width={140} 
                height={46} 
                className="w-[120px] sm:w-[130px] lg:w-[140px] h-auto"
              />
              <Image 
                src="/footer/google-play.svg" 
                alt="Get it on Google Play" 
                width={140} 
                height={46} 
                className="w-[120px] sm:w-[130px] lg:w-[140px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[30px] items-start sm:items-center justify-between w-full">
            <span
              className={`${inter.className} text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.1] font-normal text-[rgba(0,0,0,0.66)]`}
            >
              SprkHome © 2025. All rights reserved.
            </span>
            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-[15px] items-center">
              {[
                "Privacy Policy",
                "Privacy Policy",
                "Trust Center",
                "Acceptable Use Guidelines",
                "Legal & Compliance",
                "Your Privacy Choices",
                "Cookies"
              ].map((link, index) => (
                <span
                  key={index}
                  className={`${inter.className} text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.1] font-normal text-[rgba(0,0,0,0.66)] cursor-pointer hover:text-[rgba(0,0,0,0.8)] transition-colors`}
                >
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Brand Watermark */}
          <div className="w-full text-center">
            <div
              className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] font-medium select-none"
              style={{
                color: "rgba(0, 0, 0, 0.15)",
                fontFamily: '"Aeonik Pro", sans-serif',
              }}
            >
              SprkHome
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


