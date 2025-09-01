"use client";
import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSprk from "@/components/AboutSprk";
import ScrollAnimations from "@/components/ScrollAnimations";
import ButtonsType from "@/components/ButtonsType";
import TrustedBy from "@/components/TrustedBy";

const inter = Inter({ subsets: ["latin"] });

export default function FindSolarProPage() {
  const [selectedProIdx, setSelectedProIdx] = useState<number | null>(null);
  const professionals = Array.from({ length: 3 }).map(() => ({
    name: "Cory Vanderpool",
    professionType: "Profession type",
    company: "A Better Home Inspection",
    zip: "85001",
    phone: "+1 480-965-9011",
    email: "sprk@gmail.com",
    image: "/find-solar-pro/section 2/profile.svg",
  }));
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />
      {/* Hero Section */}
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[150px] pb-[40px] sm:pb-[50px] lg:pb-[60px]">
        <div className="flex flex-col items-center text-center gap-[30px] sm:gap-[40px] lg:gap-[50px]">
          {/* Header Container */}
          <div className="fade-up flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start px-2.5 py-0 w-full">
              <h1 
                className="fade-up font-['Aeonik_Pro'] font-medium text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] text-center w-full transition-all duration-300 ease-in-out"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                <span className="text-[#141414]">Find a </span>
                <span className="text-[#115056]">Sprk Certified Professional </span>
                <span className="text-[#141414]">Near You</span>
              </h1>
              
              <div className="text-reveal flex items-center justify-center px-2.5 py-0 w-full">
                <strong 
                  className="max-w-xl sm:max-w-2xl mx-auto opacity-80 px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Search for home inspectors, real estate agents, or solar professionals who are trained and certified to work with solar-powered homes.
                </strong>
              </div>
            </div>
            <div className="slide-up-cards bg-white flex flex-col justify-center items-center sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-[22px] items-stretch pb-6 sm:pb-8 md:pb-10 pt-0 px-[20px] sm:px-[25px] md:px-[30px] w-full">
              <div className="flex flex-col md:flex-row gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
                <div className="w-full ">
                  <ButtonsType type={9} label="Join Sprk" isShowArrow={false}  />
                </div>
                <div className="w-full ">
                  <ButtonsType type={10} label="Watch a Demo" isShowArrow={false} />
                </div>
              </div>
            </div>
            
       
          </div>

          {/* Trusted By Section */}
          <TrustedBy 
            logoSrc="/inspector-page/section1/trusted-by.svg"
            logoAlt="Trusted inspector partner"
          />
        </div>
      </section>

      {/* Professional Directory Section */}
      <section className="section-2 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[50px] sm:py-[75px] lg:py-[100px]">
        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[50px] items-center justify-start w-full">
          {/* Header with Filter/Sort */}
          <div className="text-reveal flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] items-start lg:items-center justify-between w-full">
            <div className="bounce-in w-full flex flex-col gap-[10px] sm:gap-[15px] items-start justify-start flex-1">
              <div className="flex items-start justify-center w-full lg:justify-start">
                <h4 
                  className="font-medium text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-[#141414] text-center lg:text-left"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Available Professional Near you
                </h4>
              </div>
              <div className="flex items-start justify-center w-full lg:justify-start">
                <p 
                  className="font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] text-center lg:text-left"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Showing 100+ Available Professionals
                </p>
              </div>
            </div>
            
            <div className="slide-up-cards flex gap-[10px] sm:gap-[15px] items-center justify-center lg:justify-start w-full lg:w-auto">
              <button className="group bg-gray-50 border border-[rgba(0,0,0,0.2)] flex gap-2 items-center justify-center px-[20px] sm:px-[25px] py-[8px] sm:py-[10px] rounded-[50px] shrink-0 hover:bg-[#115056] hover:text-white hover:border-[#115056] hover:scale-105 transition-all duration-300 ease-in-out">
                <span 
                  className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[#141414] group-hover:text-white whitespace-nowrap transition-colors duration-300"
                  style={{ fontFamily: 'Inter' }}
                >
                  Filter
                </span>
                <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <button className="group bg-gray-50 border border-[rgba(0,0,0,0.2)] flex gap-2 items-center justify-center px-[20px] sm:px-[25px] py-[8px] sm:py-[10px] rounded-[50px] shrink-0 hover:bg-[#115056] hover:text-white hover:border-[#115056] hover:scale-105 transition-all duration-300 ease-in-out">
                <span 
                  className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[#141414] group-hover:text-white whitespace-nowrap transition-colors duration-300"
                  style={{ fontFamily: 'Inter' }}
                >
                  Sort By
                </span>
                <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="card-flip flex flex-col md:flex-col lg:flex-row xl:flex-row items-start gap-[24px] self-stretch w-full">
            {/* Professional List */}
            <div className={`flex flex-col gap-[15px] sm:gap-[20px] lg:gap-[25px] items-start justify-start w-full ${selectedProIdx !== null ? 'hidden lg:flex' : ''}`}>
            

              {/* Regular Professional Cards */}
              {professionals.map((pro, index) => (
                <div key={index} className="card-slide-right bg-white border border-[#d2d2d2] rounded-[5px] w-full overflow-hidden hover:border-[#115056] hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                  style={{
                    borderColor: "rgba(17, 80, 86, 0.20)",
                    boxShadow: "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)",
                  }}
                  onClick={() => setSelectedProIdx(index)}
                >
                  <div className="flex flex-col items-start justify-center w-full">
                    {/* Top Row */}
                    <div className="flex items-start justify-start w-full">
                      <div className="flex-1 flex gap-[15px] items-center justify-start px-4 sm:px-5 py-3 sm:py-[15px]">
                        <div className="bg-[#138978] rounded-[50px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] lg:w-[50px] lg:h-[50px] flex items-center justify-center overflow-hidden">
                          <Image
                            src={pro.image}
                            alt={pro.name}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <h3 className="font-medium text-[25px] sm:text-[25px] md:text-[25px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-[#141414] whitespace-nowrap" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>
                            {pro.name}
                          </h3>
                          <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] text-[rgba(0,0,0,0.66)] whitespace-nowrap`}>
                            {pro.professionType}
                          </p>
                        </div>
                      </div>
                      <div className="hidden lg:flex gap-[15px] items-center justify-center px-4 sm:px-5 py-3 sm:py-[15px]">
                        <button
                          aria-pressed={selectedProIdx === index}
                          className={`${selectedProIdx === index
                            ? 'bg-[#115056] border border-[#115056] text-white hover:bg-white hover:text-[#115056] hover:scale-105 hover:shadow-md'
                            : 'border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-white'} flex items-center justify-center px-5 py-2.5 rounded-[5px] transition-all duration-200`}
                        >
                          <span className={`${inter.className} font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.2] text-center whitespace-nowrap`}>
                            {selectedProIdx === index ? 'Currently Viewing' : 'View Profile'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Mobile/Tablet Button Row */}
                    <div className="flex lg:hidden items-start justify-start w-full border-t border-[#e8e8e8]">
                      <div className="w-full px-4 sm:px-5 py-3 sm:py-[15px]">
                        <button
                          aria-pressed={selectedProIdx === index}
                          onClick={(e) => { e.stopPropagation(); setSelectedProIdx(index); }}
                          className={`${selectedProIdx === index
                            ? 'bg-[#115056] border border-[#115056] text-white hover:bg-white hover:text-[#115056] hover:shadow-md'
                            : 'bg-white border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-white'} w-full flex items-center justify-between gap-2 px-5 py-3 rounded-[10px] transition-all duration-200`}
                        >
                          <span className={`${inter.className} font-medium text-[18px] leading-[1.2]`}>
                            {selectedProIdx === index ? 'Currently Viewing' : 'View Profile'}
                          </span>
                          <div className="w-[20px] h-[20px] flex items-center justify-center">
                            <svg width="16" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="currentColor" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="hidden lg:flex items-start justify-start w-full border-t border-[#e8e8e8]">
                      <div className="flex-1 flex gap-[15px] items-center justify-start px-4 sm:px-5 py-3 sm:py-[15px] border-r border-[#e8e8e8]">
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                            Company
                          </p>
                          <h3 className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                            {pro.company}
                          </h3>
                        </div>
                      </div>
                      <div className="flex gap-[15px] items-center justify-start px-4 sm:px-5 py-3 sm:py-[15px] min-w-[107px]">
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                            ZIP code
                          </p>
                          <h3 className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                            {pro.zip}
                          </h3>
                        </div>
                      </div>
                      <div className="flex gap-[15px] items-center justify-start px-4 sm:px-5 py-3 sm:py-[15px] min-w-[208px] border-l border-[#e8e8e8]">
                        <div className="flex flex-col gap-[5px] items-start justify-center">
                          <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] text-[rgba(0,0,0,0.66)] text-center whitespace-nowrap`}>
                            Contact
                          </p>
                          <h3 className={`${inter.className} font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.1] text-[#141414] whitespace-nowrap`}>
                            <a href={`tel:${pro.phone.replace(/[^+\d]/g, '')}`} className="hover:text-[#115056] transition-colors">{pro.phone}</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Profile Detail */}
            {selectedProIdx !== null ? (
            <div className="card-zoom-in flex items-center justify-center w-full">
              <div 
                className="bg-white border rounded-[10px] p-[20px] sm:p-[25px] lg:p-[30px] w-full max-w-[715px] h-full flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
                style={{
                  borderColor: "rgba(17, 80, 86, 0.20)",
                  boxShadow: "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)",
                }}
              >
                {/* Mobile Back Button */}
                <div className="flex lg:hidden items-center justify-start w-full mb-3">
                  <button
                    onClick={() => setSelectedProIdx(null)}
                    className="group bg-white border border-[#115056] text-[#115056] flex items-center gap-2 px-4 py-2 rounded-[5px] hover:bg-[#115056] hover:text-white transition-all duration-200"
                  >
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.41421 1.58579C6.80474 1.19526 6.80474 0.561097 6.41421 0.170573C6.02369 -0.219951 5.38952 -0.219951 4.99899 0.170573L0.292893 4.87668C-0.0976311 5.2672 -0.0976311 5.90137 0.292893 6.29189L4.99899 10.998C5.38952 11.3885 6.02369 11.3885 6.41421 10.998C6.80474 10.6075 6.80474 9.97328 6.41421 9.58276L3.83145 7H16.5C17.0523 7 17.5 6.55228 17.5 6C17.5 5.44772 17.0523 5 16.5 5H3.83145L6.41421 2.41724C6.80474 2.02671 6.80474 1.39255 6.41421 1.00202V1.58579Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className={`${inter.className} font-medium text-[14px] leading-[1.2]`}>
                      Back to Professional List
                    </span>
                  </button>
                </div>
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px] items-start justify-start w-full">
                  <div className="bg-[#138978] rounded-[10px] w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <Image
                      src={professionals[selectedProIdx].image}
                      alt={professionals[selectedProIdx].name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-between h-full">
                    <div className="flex flex-col gap-[5px] items-start justify-start pb-[15px] w-full">
                      <h3 className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] whitespace-nowrap">
                        {professionals[selectedProIdx].name}
                      </h3>
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)] whitespace-nowrap`}>
                        {professionals[selectedProIdx].professionType}
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
                        {professionals[selectedProIdx].company}
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        ZIP Code
                      </p>
                      <p className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414]">
                        {professionals[selectedProIdx].zip}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] items-start justify-start w-full">
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        Contact
                      </p>
                      <a href={`tel:${professionals[selectedProIdx].phone.replace(/[^+\d]/g, '')}`} className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] hover:text-[#115056] transition-colors">
                        {professionals[selectedProIdx].phone}
                      </a>
                    </div>
                    <div className="flex-1 flex flex-col gap-[5px] items-start justify-start">
                      <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)]`}>
                        Email
                      </p>
                      <a href={`mailto:${professionals[selectedProIdx].email}`} className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] lg:text-[35px] leading-[1.1] text-[#141414] hover:text-[#115056] transition-colors">
                        {professionals[selectedProIdx].email}
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
            ) : (
            <div className="card-zoom-in flex items-center justify-center w-full">
              <div 
                className="bg-gray-50 border-2 border-dashed border-[rgba(0,0,0,0.25)] rounded-[10px] p-[20px] sm:p-[25px] lg:p-[30px] w-full max-w-[715px] h-full flex flex-col items-center justify-center text-center"
              >
                <div className="bg-[#e6f4f4] rounded-full w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] flex items-center justify-center overflow-hidden mb-4">
                 
                </div>
                <h3 
                  className="font-medium text-[25px] sm:text-[28px] lg:text-[32px] leading-[110%] text-[#141414] mb-2"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  No professional selected
                </h3>
                <p 
                  className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[120%] text-[rgba(0,0,0,0.66)] max-w-[520px] mb-4"
                  style={{ fontFamily: 'Inter' }}
                >
                  Select a professional from the list to view details here.
                </p>
                <div className="flex items-center justify-center">
                  <button 
                    className="bg-white text-[#115056] border border-[#115056] px-4 py-2 rounded-[5px] cursor-default"
                    aria-disabled="true"
                  >
                    Waiting for selection
                  </button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-3 bg-gray-50 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[50px] sm:py-[70px] lg:py-[100px]">
        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[50px] items-center justify-start w-full">
          {/* Header Content */}
          <div className="bounce-in flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
            <div className="flex items-start justify-start w-full">
              <h2 
                className="font-medium text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-[#141414] text-center w-full"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                No Results or Still Looking?
              </h2>
            </div>
            <div className="text-reveal flex items-start justify-start w-full">
              <div className="text-center w-full">
                <strong 
                  className="font-normal text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0 block"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  If no results show up in your area—or you&apos;re looking for a specific type of support—we&apos;re happy to help.
                </strong>
                <strong 
                  className="font-normal text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] block"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Let us know what you need, and we&apos;ll do our best to connect you with a Sprk Certified Pro in your area.
                </strong>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="slide-up-cards flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
            <div className="flex items-center justify-center w-full">
              <button className="group bg-[#115056] flex items-center justify-center gap-2 px-[20px] sm:px-[25px] py-[10px] sm:py-[12px] lg:py-[15px] rounded-[5px] w-full max-w-[500px] hover:bg-white hover:text-[#115056] hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out border border-[#115056]">
                <span 
                  className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white group-hover:text-[#115056] flex-1 transition-colors duration-300"
                  style={{ fontFamily: 'Inter' }}
                >
                  Request Help Finding a Certified Pro
                </span>
                <div className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="currentColor"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4 mx-auto w-full max-w-[1440px] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-stretch w-full">
          {/* Left Sidebar - Teal Background */}
          <div className="image-slide-left bg-[#115056] flex flex-col gap-6 items-start justify-start px-4 sm:px-6 lg:px-24 py-[50px] sm:py-[70px] lg:py-[100px] w-full lg:w-[550px] lg:flex-shrink-0">
            <div className="fade-up flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
              <div className="flex items-start justify-start w-full">
                <h2 
                  className="font-medium text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-white"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Need Help Finding a Sprk Certified Pro?
                </h2>
              </div>
              <div className="flex items-start justify-start w-full">
                <strong 
                  className="font-normal text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Let us know what you&apos;re looking for and we&apos;ll try to connect you.
                </strong>
              </div>
            </div>
            <div className="text-reveal flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] items-start justify-start w-full">
              <div className="flex items-start justify-start w-full">
                <p 
                  className="font-normal text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Powered by Sprk
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="testimonial-content flex flex-col gap-6 items-start justify-start px-4 sm:px-6 lg:px-[50px] lg:pr-24 py-[50px] sm:py-[70px] lg:py-[100px] w-full flex-grow">
            {/* Form Header */}
            <div className="bounce-in flex items-center justify-center w-full lg:justify-start">
              <h3 
                className="font-medium text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-black"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Input Details
              </h3>
            </div>

            {/* Form Fields Row 1 */}
            <div className="slide-up-cards flex flex-col sm:flex-row gap-6 items-center justify-start w-full">
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] px-[15px] py-5 w-full flex-1 hover:border-[#115056] hover:shadow-md transition-all duration-300 ease-in-out">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none focus:text-[#115056] transition-colors duration-300"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                />
              </div>
              <div className="bg-gray-50 border border-[rgba(0,0,0,0.25)] rounded-[10px] px-[15px] py-5 w-full flex-1 hover:border-[#115056] hover:shadow-md transition-all duration-300 ease-in-out">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] text-[rgba(0,0,0,0.35)] placeholder-[rgba(0,0,0,0.35)] border-none outline-none focus:text-[#115056] transition-colors duration-300"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
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

      {/* Section 5 - AboutSprk */}
      <section className="section-5">
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
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
