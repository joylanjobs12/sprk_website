import Image from "next/image";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSprk from "@/components/AboutSprk";

const inter = Inter({ subsets: ["latin"] });

export default function FindSolarProPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[150px] pb-[40px] sm:pb-[50px] lg:pb-[60px]">
        <div className="flex flex-col items-center text-center gap-[30px] sm:gap-[40px] lg:gap-[50px]">
          {/* Header Container */}
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start px-2.5 py-0 w-full">
              <h1 className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[48px] leading-[1.1] text-center w-full">
                <span className="text-[#141414]">Find a </span>
                <span className="text-[#115056]">Sprk Certified Professional </span>
                <span className="text-[#141414]">Near You</span>
              </h1>
              
              <div className="flex items-center justify-center px-2.5 py-0 w-full">
                <p className={`${inter.className} font-normal text-[1rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] max-w-[600px]`}>
                  Search for home inspectors, real estate agents, or solar professionals who are trained and certified to work with solar-powered homes.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-[10px] sm:gap-[15px] items-center justify-center w-full">
              <button className="bg-[#115056] flex gap-2 h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] items-center justify-center px-[20px] sm:px-[25px] md:px-[30px] py-2.5 rounded-[30px] shrink-0 hover:opacity-90 transition-opacity">
                <span className="font-['Aeonik_Pro'] font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] leading-[1.1] text-white whitespace-nowrap">
                  Join Sprk
                </span>
              </button>
              <button className="flex gap-2 h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] items-center justify-center px-[20px] sm:px-[25px] md:px-[30px] py-2.5 rounded-[30px] shrink-0 border border-[#115056] bg-white hover:bg-[#115056] hover:text-white transition-all duration-200">
                <span className="font-['Aeonik_Pro'] font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[25px] leading-[1.1] text-[#115056] hover:text-white whitespace-nowrap">
                  Watch a Demo
                </span>
              </button>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] items-center justify-start w-full">
            <div className="flex gap-2.5 items-center justify-center">
              <p className={`${inter.className} font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] text-center text-black`}>
                Trusted by:
              </p>
            </div>
            
            <div className="flex gap-[15px] sm:gap-[20px] lg:gap-[25px] items-center justify-center overflow-clip">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[25px] sm:h-[30px] lg:h-[33px] opacity-50 w-[45px] sm:w-[55px] lg:w-[60px] bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600"
                >
                  Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Directory Section */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[50px] sm:py-[75px] lg:py-[100px]">
        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[50px] items-center justify-start w-full">
          {/* Header with Filter/Sort */}
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] items-start lg:items-center justify-between w-full">
            <div className="flex flex-col gap-[10px] sm:gap-[15px] items-start justify-start flex-1">
              <div className="flex items-start justify-center w-full lg:justify-start">
                <h2 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] leading-[1.1] text-[#141414] text-center lg:text-left">
                  Available Professional Near you
                </h2>
              </div>
              <div className="flex items-start justify-center w-full lg:justify-start">
                <p className={`${inter.className} font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center lg:text-left`}>
                  Showing 100+ Available Professionals
                </p>
              </div>
            </div>
            
            <div className="flex gap-[10px] sm:gap-[15px] items-center justify-center lg:justify-start w-full lg:w-auto">
              <button className="bg-gray-50 border border-[rgba(0,0,0,0.2)] flex gap-2 items-center justify-center px-[20px] sm:px-[25px] py-[8px] sm:py-[10px] rounded-[50px] shrink-0 hover:bg-gray-100 transition-colors">
                <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[#141414] whitespace-nowrap`}>
                  Filter
                </span>
                <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <button className="bg-gray-50 border border-[rgba(0,0,0,0.2)] flex gap-2 items-center justify-center px-[20px] sm:px-[25px] py-[8px] sm:py-[10px] rounded-[50px] shrink-0 hover:bg-gray-100 transition-colors">
                <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[#141414] whitespace-nowrap`}>
                  Sort By
                </span>
                <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="flex items-start gap-[24px] self-stretch w-full">
            {/* Professional List */}
            <div className="flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[25px] items-start justify-start w-full">
              {/* Featured Professional - Currently Viewing */}
              <div className="bg-[#f6ffff] border border-[#80c0c0] rounded-[5px] w-full overflow-hidden">
                <div className="flex flex-col items-start justify-center w-full">
                  {/* Top Row */}
                  <div className="flex items-start justify-start w-full">
                    <div className="flex-1 flex gap-[15px] items-center justify-start px-5 py-[15px]">
                      <div className="bg-[#138978] rounded-[50px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] flex items-center justify-center overflow-hidden">
                        <Image
                          src="/find-solar-pro/section 2/profile.svg"
                          alt="Cory Vanderpool"
                          width={50}
                          height={50}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-center">
                        <h3 className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.1] text-[#141414] whitespace-nowrap">
                          Cory Vanderpool
                        </h3>
                        <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] whitespace-nowrap`}>
                          Profession type
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[15px] items-center justify-center px-5 py-[15px]">
                      <button className="bg-[#115056] flex items-center justify-center px-5 py-2.5 rounded-[5px] hover:opacity-90 transition-opacity">
                        <span className={`${inter.className} font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-center text-white whitespace-nowrap`}>
                          Currently Viewing
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex items-start justify-start w-full border-t border-[#caeeee]">
                    <div className="flex-1 flex gap-[15px] items-center justify-start px-5 py-[15px] border-r border-[#caeeee]">
                      <div className="flex flex-col gap-[5px] items-start justify-center">
                        <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                          Company
                        </p>
                        <p className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                          A Better Home Inspection
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[15px] items-center justify-start px-5 py-[15px] min-w-[107px]">
                      <div className="flex flex-col gap-[5px] items-start justify-center">
                        <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                          ZIP code
                        </p>
                        <p className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                          85001
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[15px] items-center justify-start px-5 py-[15px] min-w-[208px] border-l border-[#caeeee]">
                      <div className="flex flex-col gap-[5px] items-start justify-center">
                        <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                          Contact
                        </p>
                        <a href="tel:+14809659011" className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap hover:text-[#115056] transition-colors`}>
                          +1 480-965-9011
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Professional Cards */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white border border-[#d2d2d2] rounded-[5px] w-full overflow-hidden hover:border-[#115056] transition-colors cursor-pointer">
                  <div className="flex flex-col items-start justify-center w-full">
                    {/* Top Row */}
                    <div className="flex items-start justify-start w-full">
                      <div className="flex-1 flex gap-[15px] items-center justify-start px-5 py-[15px]">
                        <div className="bg-[#138978] rounded-[50px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] flex items-center justify-center overflow-hidden">
                          <Image
                            src="/find-solar-pro/section 2/profile.svg"
                            alt="Cory Vanderpool"
                            width={50}
                            height={50}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <h3 className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.1] text-[#141414] whitespace-nowrap">
                            Cory Vanderpool
                          </h3>
                          <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] whitespace-nowrap`}>
                            Profession type
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[15px] items-center justify-center px-5 py-[15px]">
                        <button className="border border-[#141414] flex items-center justify-center px-5 py-2.5 rounded-[5px] hover:bg-[#141414] hover:text-white transition-all duration-200">
                          <span className={`${inter.className} font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-center whitespace-nowrap`}>
                            View Profile
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-start justify-start w-full border-t border-[#e8e8e8]">
                      <div className="flex-1 flex gap-[15px] items-center justify-start px-5 py-[15px] border-r border-[#e8e8e8]">
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                            Company
                          </p>
                          <p className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                            A Better Home Inspection
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[15px] items-center justify-start px-5 py-[15px] min-w-[107px]">
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                            ZIP code
                          </p>
                          <p className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                            85001
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-[15px] items-center justify-start px-5 py-[15px] min-w-[208px] border-l border-[#e8e8e8]">
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <p className={`${inter.className} font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                            Contact
                          </p>
                          <a href="tel:+14809659011" className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap hover:text-[#115056] transition-colors`}>
                            +1 480-965-9011
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Profile Detail */}
            <div className="flex items-center justify-center w-full">
              <div className="bg-white border border-[rgba(0,0,0,0.2)] rounded-[10px] p-[20px] sm:p-[25px] lg:p-[30px] w-full max-w-[715px] h-full flex flex-col justify-between">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] items-start justify-start w-full">
                  <div className="bg-[#138978] rounded-[10px] w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <Image
                      src="/find-solar-pro/section 2/profile.svg"
                      alt="Cory Vanderpool"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-between h-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start pb-[15px] w-full">
                      <h3 className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] whitespace-nowrap">
                        Cory Vanderpool
                      </h3>
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)] whitespace-nowrap`}>
                        Profession type
                      </p>
                    </div>
                    <div className="w-full h-px border-b border-[rgba(0,0,0,0.2)] my-[15px]"></div>
                    <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] items-start justify-start w-full">
                      <div className="flex flex-col gap-[5px] items-start justify-start">
                        <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)] whitespace-nowrap`}>
                          Sprk Certification
                        </p>
                        <p className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] whitespace-nowrap">
                          2461971
                        </p>
                      </div>
                      <div className="flex-1 flex items-center justify-start">
                        <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[85px] lg:h-[85px] bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
                          Badge
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full border-t border-b border-[rgba(0,0,0,0.2)] py-[20px] sm:py-[25px] lg:py-[30px]">
                  <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] items-start justify-start w-full">
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        Company
                      </p>
                      <p className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414]">
                        A Better Home Inspection
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        ZIP Code
                      </p>
                      <p className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414]">
                        85001
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] items-start justify-start w-full">
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        Contact
                      </p>
                      <a href="tel:+14809659011" className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] hover:text-[#115056] transition-colors">
                        +1 480-965-9011
                      </a>
                    </div>
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        Email
                      </p>
                      <a href="mailto:sprk@gmail.com" className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] hover:text-[#115056] transition-colors">
                        sprk@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Connect Button */}
                <div className="flex gap-6 items-start justify-start w-full">
                  <button className="flex-1 bg-[#115056] flex items-center justify-center gap-2 px-[15px] py-[10px] sm:py-[12px] lg:py-[15px] rounded-[5px] hover:opacity-90 transition-opacity">
                    <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                      Connect with this Inspector
                    </span>
                    <div className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                      <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[50px] sm:py-[70px] lg:py-[100px]">
        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[50px] items-center justify-start w-full">
          {/* Header Content */}
          <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
            <div className="flex items-start justify-start w-full">
              <h2 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] 2xl:text-[56px] leading-[1.1] text-[#141414] text-center">
                No Results or Still Looking?
              </h2>
            </div>
            <div className="flex items-start justify-start w-full">
              <div className="text-center">
                <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[25px] leading-[1.1] text-[rgba(0,0,0,0.66)] mb-0`}>
                  If no results show up in your area—or you're looking for a specific type of support—we're happy to help.
                </p>
                <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[25px] leading-[1.1] text-[rgba(0,0,0,0.66)]`}>
                  Let us know what you need, and we'll do our best to connect you with a Sprk Certified Pro in your area.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
            <div className="flex items-center justify-start w-full">
              <button className="bg-[#115056] flex items-center justify-center gap-2 px-[20px] sm:px-[25px] py-[10px] sm:py-[12px] lg:py-[15px] rounded-[5px] w-full max-w-[500px] hover:opacity-90 transition-opacity">
                <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                  Request Help Finding a Certified Pro
                </span>
                <div className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-stretch w-full">
          {/* Left Sidebar - Teal Background */}
          <div className="bg-[#115056] flex flex-col gap-6 items-start justify-start px-4 sm:px-6 lg:px-24 py-[50px] sm:py-[70px] lg:py-[100px] w-full lg:w-[550px] lg:flex-shrink-0">
            <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
              <div className="flex items-start justify-start w-full">
                <h2 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[45px] 2xl:text-[56px] leading-[1.1] text-white">
                  Need Help Finding a Sprk Certified Pro?
                </h2>
              </div>
              <div className="flex items-start justify-start w-full">
                <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(255,255,255,0.8)]`}>
                  Let us know what you're looking for and we'll try to connect you.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
              <div className="flex items-start justify-start w-full">
                <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(255,255,255,0.8)]`}>
                  Powered by Sprk
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="flex flex-col gap-6 items-start justify-start px-4 sm:px-6 lg:px-[50px] lg:pr-24 py-[50px] sm:py-[70px] lg:py-[100px] w-full flex-grow">
            {/* Form Header */}
            <div className="flex items-center justify-center w-full lg:justify-start">
              <h3 className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-black">
                Input Details
              </h3>
            </div>

            {/* Form Fields Row 1 */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-start w-full">
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] px-[15px] py-5 w-full flex-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent font-['Aeonik_Pro'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none"
                />
              </div>
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] px-[15px] py-5 w-full flex-1">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent font-['Aeonik_Pro'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none"
                />
              </div>
            </div>

            {/* Form Fields Row 2 */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-start w-full">
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] px-[15px] py-5 w-full flex-1">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent font-['Aeonik_Pro'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none"
                />
              </div>
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] px-[15px] py-5 w-full flex-1">
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full bg-transparent font-['Aeonik_Pro'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none"
                />
              </div>
            </div>

            {/* Professional Type Selection */}
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col w-full">
                {/* Selected Tags */}
                <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] border-b-0 rounded-t-[10px] px-[15px] py-[15px] w-full flex items-center justify-between">
                  <div className="flex gap-[5px] items-center justify-start flex-wrap">
                    <div className="bg-[#115056] flex gap-2 items-center justify-start px-2.5 py-[5px] rounded-[5px]">
                      <span className="font-['Aeonik_Pro'] text-[14px] leading-[1.1] text-white">
                        Real Estate Agent
                      </span>
                      <div className="w-[15px] h-[15px] flex items-center justify-center">
                        <Image
                          src="/find-solar-pro/section 4/icon.svg"
                          alt="Remove"
                          width={15}
                          height={15}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="bg-[#115056] flex gap-2 items-center justify-start px-2.5 py-[5px] rounded-[5px]">
                      <span className="font-['Aeonik_Pro'] text-[14px] leading-[1.1] text-white">
                        Home Inspector
                      </span>
                      <div className="w-[15px] h-[15px] flex items-center justify-center">
                        <Image
                          src="/find-solar-pro/section 4/icon.svg"
                          alt="Remove"
                          width={15}
                          height={15}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="bg-[#115056] flex gap-2 items-center justify-start px-2.5 py-[5px] rounded-[5px]">
                      <span className="font-['Aeonik_Pro'] text-[14px] leading-[1.1] text-white">
                        Solar Professional
                      </span>
                      <div className="w-[15px] h-[15px] flex items-center justify-center">
                        <Image
                          src="/find-solar-pro/section 4/icon.svg"
                          alt="Remove"
                          width={15}
                          height={15}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[5px] items-center justify-start">
                    <div className="bg-[#115056] flex gap-2 items-center justify-start px-2.5 py-[5px] rounded-[5px]">
                      <span className="font-['Aeonik_Pro'] text-[14px] leading-[1.1] text-white">
                        3
                      </span>
                    </div>
                    <button className="bg-[rgba(0,0,0,0.25)] p-[2px] rounded-[5px]">
                      <div className="w-[15px] h-[15px] flex items-center justify-center">
                        <Image
                          src="/find-solar-pro/section 4/icon.svg"
                          alt="Clear all"
                          width={15}
                          height={15}
                          className="w-full h-full"
                        />
                      </div>
                    </button>
                    <button className="p-[2px] rounded-[5px]">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Dropdown Options */}
                <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] border-t-0 rounded-b-[10px] w-full flex flex-col">
                  <div className="flex gap-[15px] items-center justify-start px-[15px] py-3 w-full">
                    <div className="bg-[#115056] w-[15px] h-[15px] rounded-[5px] flex items-center justify-center">
                      <Image
                        src="/find-solar-pro/section 4/icon.svg"
                        alt="Selected"
                        width={15}
                        height={15}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="font-['Aeonik_Pro'] text-[16px] sm:text-[18px] leading-[1.1] text-[rgba(0,0,0,0.66)]">
                      Real Estate Agent
                    </span>
                  </div>
                  <div className="flex gap-[15px] items-center justify-start px-[15px] py-3 w-full">
                    <div className="bg-[#115056] w-[15px] h-[15px] rounded-[5px] flex items-center justify-center">
                      <Image
                        src="/find-solar-pro/section 4/icon.svg"
                        alt="Selected"
                        width={15}
                        height={15}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="font-['Aeonik_Pro'] text-[16px] sm:text-[18px] leading-[1.1] text-[rgba(0,0,0,0.66)]">
                      Home Inspector
                    </span>
                  </div>
                  <div className="flex gap-[15px] items-center justify-start px-[15px] py-3 w-full">
                    <div className="bg-[#115056] w-[15px] h-[15px] rounded-[5px] flex items-center justify-center">
                      <Image
                        src="/find-solar-pro/section 4/icon.svg"
                        alt="Selected"
                        width={15}
                        height={15}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="font-['Aeonik_Pro'] text-[16px] sm:text-[18px] leading-[1.1] text-[rgba(0,0,0,0.66)]">
                      Solar Professional
                    </span>
                  </div>
                  <div className="flex gap-[15px] items-center justify-start px-[15px] py-3 w-full border-t border-[rgba(0,0,0,0.2)]">
                    <div className="w-[15px] h-[15px] border border-[#115056] rounded-[5px]"></div>
                    <span className="font-['Aeonik_Pro'] text-[16px] sm:text-[18px] leading-[1.1] text-[rgba(0,0,0,0.66)]">
                      Not sure – guide me
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex gap-6 items-start justify-start w-full">
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] p-[15px] w-full h-[200px]">
                <textarea
                  placeholder="Explain what your looking to do..."
                  className="w-full h-full bg-transparent font-['Aeonik_Pro'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-6 items-center justify-start w-full">
              <button className="bg-[#115056] flex items-center justify-center gap-2 px-[20px] sm:px-[25px] py-[10px] sm:py-[12px] lg:py-[15px] rounded-[5px] w-full hover:opacity-90 transition-opacity">
                <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                  Send My Request
                </span>
                <div className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Success Message */}
            <div className="flex gap-6 items-center justify-center w-full">
              <div className="bg-[#f3faf2] border border-[#56cd45] rounded-[10px] px-[15px] py-2.5 w-full flex items-center justify-center gap-2.5">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/find-solar-pro/section 4/icon.svg"
                    alt="Success"
                    width={40}
                    height={40}
                    className="w-full h-full"
                  />
                </div>
                <span className="font-['Aeonik_Pro'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[#56cd45]">
                  Request sent!
                </span>
              </div>
            </div>

            {/* Footer Message */}
            <div className="flex gap-6 items-center justify-center w-full">
              <div className="text-center">
                <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[rgba(0,0,0,0.45)] mb-0`}>
                  Sprk will notify you via email once your request has been
                </p>
                <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[rgba(0,0,0,0.45)]`}>
                  received by a certified professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <AboutSprk
        title="Why Choose Sprk Certified Pros?"
        cards={[
          {
            icon: "/find-solar-pro/section 5/inspectors.svg",
            label: "Certified <br/> Inspectors",
            text: "Trained to understand solar—not just work around it"
          },
          {
            icon: "/find-solar-pro/section 5/agents.svg",
            label: "Certified <br/> Agents",
            text: "Certified in energy, disclosure, and valuation practices"
          },
          {
            icon: "/find-solar-pro/section 5/solar-pros.svg",
            label: "Certified <br/> Solar Pros",
            text: "Use Sprk Reports to document, explain, and protect solar investments"
          },
          {
            icon: "/find-solar-pro/section 5/reports.svg",
            label: "Certified <br/> Reports",
            text: "Trusted by agents, buyers, sellers, and lenders"
          }
        ]}
      
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
