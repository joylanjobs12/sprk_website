"use client";

import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import CTA from "@/components/CTA";
import AboutSprk from "@/components/AboutSprk";
import HowItWorksSection from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import ScrollAnimations from "@/components/ScrollAnimations";
import SelectRole from "@/components/SelectRole";
import ButtonsType from "@/components/ButtonsType";



export default function Home() {
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
          <h1
            className="fade-up text-center mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6 text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium"
            style={{
              textAlign: "center",
              fontFamily: '"Aeonik Pro", sans-serif',
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "var(--Primary-Color, #115056)" }}>Solar Simplified.</span>{" "}<br />
            <span style={{ color: "var(--Text-Title, #141414)" }}>Real Estate Ready.</span>
          </h1>
          <strong
            className="fade-up max-w-xl sm:max-w-2xl mx-auto opacity-80 px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              color: "rgba(0,0,0,0.66)",
            }}
          >
            The trusted platform to connect, understand, value, inspect, and transfer solar homes with confidence and clarity.
          </strong>
        </div>

        <SelectRole 
          onRoleSelect={(roleId) => {
            // Handle role selection - you can add navigation logic here
            console.log('Selected role:', roleId);
          }}
        />
      </section>

      {/* Section 2 */}
      <section className="section-2 box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 font-medium"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Why Sprk Exists
              </h2>
            </div>
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h4
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 font-medium"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Solar is valuable but misunderstood. Sprk bridges the gap.
                </h4>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <p
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] text-center px-4 sm:px-0"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  <strong
                    className="fade-up max-w-xl sm:max-w-2xl mx-auto opacity-80 px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] animate-in font-normal"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.66)",
                    }}
                  >We bring together the professionals who serve solar homeowners with the reports,referrals, and training needed to simplify complex solar real estate.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 items-center justify-start relative shrink-0 w-full">
            {/* Standardized Reports Card */}
            <div className="card card-flip bg-white h-auto min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer">
              <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative size-full">
                <div className="bg-gray-50 box-border content-stretch flex h-[200px] sm:h-[300px] md:h-[318px] items-center justify-center overflow-clip pb-0 pl-4 sm:pl-10 pr-0 pt-4 sm:pt-10 relative shrink-0 w-full">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[273px] md:h-[273px] rounded-tl-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.08)] shrink-0 w-full sm:w-[368px]"
                    style={{ backgroundImage: `url('/home-page/section 2/standardized-reports-new.png')` }}
                  />
                  <div className="absolute bg-[#f1fafa] box-border content-stretch flex items-center justify-center left-[19px] px-2.5 py-[5px] rounded-[5px] top-4">
                    <div className="absolute border border-[#a5dcdf] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_2px_20px_0px_rgba(65,188,195,0.25)]" />
                    <div
                      className="leading-[1.2] not-italic relative shrink-0 text-[#41bcc3] text-[16px] text-center text-nowrap"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                      }}
                    >
                      Reports
                    </div>
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-[22px] items-start justify-start pb-6 sm:pb-10 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full flex-1">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium text-center"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Standardized Reports
                    </h5>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] text-center"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)",
                      }}
                    >
                      Make solar and energy data visible and valuation-ready.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>

            {/* Role-Specific Training Card */}
            <div className="card card-flip bg-white h-auto min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer">
              <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative size-full">
                <div className="bg-white content-stretch flex h-[200px] sm:h-[300px] md:h-[318px] items-start justify-center overflow-clip relative shrink-0 w-full">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[318px] shrink-0 w-full"
                    style={{ backgroundImage: `url('/home-page/section 2/role-specific-training-new.png')` }}
                  />
                </div>
                <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-[22px] items-start justify-start pb-6 sm:pb-10 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full flex-1">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium text-center"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Role-Specific Training
                    </h5>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] text-center"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)",
                      }}
                    >
                      Equip professionals with the tools to lead confident solar transactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>

            {/* Smart Connections Card */}
            <div className="card card-flip bg-white h-auto min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer">
              <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative size-full">
                <div className="bg-white content-stretch flex h-[200px] sm:h-[300px] md:h-[318px] items-start justify-center overflow-clip relative shrink-0 w-full">
                  <div
                    className="bg-center bg-contain bg-no-repeat h-[200px] sm:h-[318px] shrink-0 w-full"
                    style={{ backgroundImage: `url('/home-page/section 2/smart-connections-new.png')` }}
                  />
                </div>
                <div
                  className="basis-0 bg-center bg-cover bg-no-repeat content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px opacity-50 relative shrink-0"
                  style={{ backgroundImage: `url('/home-page/section 2/smart-connections-bg.png')` }}
                >
                </div>
                <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-[22px] items-start justify-start pb-6 sm:pb-10 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full flex-1">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium text-center"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Smart Connections
                    </h5>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] text-center"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)",
                      }}
                    >
                      Sprk connects buyers, sellers, agents, inspectors, and solar pros to support support smooth, informed home transfers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section className="section-3 box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start pb-12 sm:pb-16 lg:pb-20 xl:pb-[100px] pt-8 sm:pt-10 lg:pt-12 xl:pt-[50px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[94px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
              <h2
                className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Sprk Reports
              </h2>
            </div>
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
              <h4
                className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Built for real estate. Backed by data. Trusted by professionals.
              </h4>
            </div>
          </div>
        </div>
       {/* Cards Grid */}
<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-6 items-stretch">
    {/* System Size & Capacity Card */}
    <div className="card-flip w-full bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
        <div className="w-full flex flex-col items-center justify-start">
            {/* Icon Section */}
            <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                <div className="flex items-center justify-start gap-[30px]">
                    <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                        <img
                            src="/evaluating-solar-system/section 3/systemsize.svg"
                            alt="Solar panel system icon"
                            className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                <div className="w-full flex items-start justify-start px-[30px]">
                    <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                     text-[25px] leading-[120%] font-medium text-black
                     sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                     md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                     lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                     xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                     2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                        System Size & Capacity
                    </h3>
                </div>
                <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                    <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                     text-[16px] leading-[120%] font-normal text-black
                     sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                     md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                     lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                     xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                     2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                        How much energy the system can produce.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Production & Performance Card */}
    <div className="card-flip w-full bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
        <div className="w-full flex flex-col items-center justify-start">
            {/* Icon Section */}
            <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                <div className="flex items-center justify-start gap-[30px]">
                    <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                        <img
                            src="/evaluating-solar-system/section 3/production.svg"
                            alt="Performance gauge icon"
                            className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                <div className="w-full flex items-start justify-start px-[30px]">
                    <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                     text-[25px] leading-[120%] font-medium text-black
                     sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                     md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                     lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                     xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                     2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                        Production & Performance
                    </h3>
                </div>
                <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                    <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                     text-[16px] leading-[120%] font-normal text-black
                     sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                     md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                     lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                     xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                     2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                        Actual vs. expected electricity generation.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Energy Costs Avoided Card */}
    <div className="card-flip w-full bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
        <div className="w-full flex flex-col items-center justify-start">
            {/* Icon Section */}
            <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                <div className="flex items-center justify-start gap-[30px]">
                    <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                        <img
                            src="/evaluating-solar-system/section 3/energy.svg"
                            alt="Utility tower icon"
                            className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                <div className="w-full flex items-start justify-start px-[30px]">
                    <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                     text-[25px] leading-[120%] font-medium text-black
                     sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                     md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                     lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                     xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                     2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                        Energy Costs Avoided
                    </h3>
                </div>
                <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                    <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                     text-[16px] leading-[120%] font-normal text-black
                     sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                     md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                     lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                     xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                     2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                        What you would have paid to the utility without solar.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Remaining Useful Life Card */}
    <div className="card-flip w-full bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group lg:col-span-1 lg:col-start-2">
        <div className="w-full flex flex-col items-center justify-start">
            {/* Icon Section */}
            <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                <div className="flex items-center justify-start gap-[30px]">
                    <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                        <img
                            src="/evaluating-solar-system/section 3/remaining.svg"
                            alt="Calendar icon"
                            className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                <div className="w-full flex items-start justify-start px-[30px]">
                    <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                     text-[25px] leading-[120%] font-medium text-black
                     sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                     md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                     lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                     xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                     2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                        Remaining Useful Life
                    </h3>
                </div>
                <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                    <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                     text-[16px] leading-[120%] font-normal text-black
                     sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                     md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                     lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                     xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                     2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                        How many years of benefit are left.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Documentation Card */}
    <div className="card-flip w-full bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group lg:col-span-1 lg:col-start-2">
        <div className="w-full flex flex-col items-center justify-start">
            {/* Icon Section */}
            <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                <div className="flex items-center justify-start gap-[30px]">
                    <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                        <img
                            src="/evaluating-solar-system/section 3/documentation.svg"
                            alt="Documentation icon"
                            className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            {/* Content Section */}
            <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                <div className="w-full flex items-start justify-start px-[30px]">
                    <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                     text-[25px] leading-[120%] font-medium text-black
                     sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                     md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                     lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                     xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                     2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                        Documentation
                    </h3>
                </div>
                <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                    <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                     text-[16px] leading-[120%] font-normal text-black
                     sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                     md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                     lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                     xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                     2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                        Ownership, warranties, and utility agreements.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
      </section>


      {/* Section 4 */}
      <HowItWorksSection
        title="How Sprk Works"
        subtitle="Three simple steps to get clear solar insights and confident decisions."
        step1={{
          icon: "/home-page/section 4/input-home-info.svg",
          label: "Input Home Info",
          description: "Use a Sprk Certified Pro or become one to evaluate solar and home energy upgrades using the Sprk Pro app."
        }}
        step2={{
          icon: "/home-page/section 4/generate-sprk-report.svg",
          label: "Generate Sprk Report",
          description: "We compile data into a standardized, easy-to-read report in minutes."
        }}
        step3={{
          icon: "/home-page/section 4/solar-clarity.svg",
          label: "Get Solar Clarity",
          description: "Share with clients or keep for reference—act with confidence."
        }}
      />

      {/* Section 5 */}
      <section className="section-5 bg-[#115056] box-border ">
        <div className="mx-auto content-stretch flex flex-col items-center justify-start px-0 py-[100px] relative size-full max-w-[1440px] ">
          <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start px-0 py-[50px] relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center text-white"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Solar is Growing!
              </h2>
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <div
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <strong 
                  className="mb-0 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  More than 5 million U.S. homeowners have already gone solar, and we&apos;re just getting started.
                </strong>
                <br />
                <strong 
                  className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Use the map to explore solar adoption rates and market size across all 50 states.
                </strong>
              </div>
            </div>
          </div>
          <div className="bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            {/* Mobile Map */}
            <div className="block md:hidden w-full px-4 py-4">
              <div
                className="map-zoom bg-center bg-contain bg-no-repeat h-[400px] sm:h-[450px] w-full rounded-lg"
                style={{ backgroundImage: `url('/home-page/section 5/map-mobile.svg')` }}
              />
            </div>

            {/* Tablet and Desktop Map */}
            <div className="hidden md:block w-full">
              <div
                className="map-zoom bg-center bg-contain bg-no-repeat h-[600px] lg:h-[800px] xl:h-[900px] 2xl:h-[1031px] w-full"
                style={{ backgroundImage: `url('/home-page/section 5/solar-home-map.svg')` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <AboutSprk
        title="Why Choose Sprk Certified Pros?"
        cards={[
          {
            icon: "/home-page/section 6/inspectors.svg",
            label: "Certified Inspectors",
            text: "Trained to understand solar—not just work around it"
          },
          {
            icon: "/home-page/section 6/agents.svg",
            label: "Certified Agents",
            text: "Certified in energy, disclosure, and valuation practices"
          },
          {
            icon: "/home-page/section 6/solar-pros.svg",
            label: "Certified Solar Pros",
            text: "Use Sprk Reports to document, explain, and protect solar investments"
          },
          {
            icon: "/home-page/section 6/reports.svg",
            label: "Certified Reports",
            text: "Trusted by agents, buyers, sellers, and lenders"
          }
        ]}

      />

      {/* Section 7 */}
      <section className="section-7 box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <h1
              className="fade-up basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                fontWeight: 500,
              }}
            >
              Connect with Confidence
            </h1>
          </div>
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <h4
              className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                fontWeight: 500,
              }}
            >
              Refer and connect with professionals who have the knowledge and tools to deliver.
            </h4>
          </div>
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div
              className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                color: "rgba(0,0,0,0.66)",
              }}
            >
              <strong 
                className="mb-0 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.66)",
                }}
              >
                Sprk connects agents, inspectors, solar pros, and homeowners with Certified Professionals trained to simplify and support solar transactions.
              </strong>
            </div>
          </div>
        </div>
        <div className="testimonial-card bg-white relative rounded-[10px] shrink-0 w-full max-w-[1248px]">
          <div className="content-start flex flex-col lg:flex-row gap-0 items-start justify-center overflow-clip relative w-full">
            <div className="image-slide-left content-stretch flex flex-col items-start justify-start relative shrink-0 w-full lg:w-1/2">
              <div
                className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[400px] lg:h-[500px] min-w-[350px] shrink-0 w-full"
                style={{ backgroundImage: `url('/home-page/section 7/profile.svg')` }}
              />
            </div>
            <div className="testimonial-content basis-0 box-border content-stretch flex flex-col grow h-auto lg:h-[500px] items-start justify-between  overflow-clip p-6 sm:p-8 lg:p-[50px] relative shrink-0">
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                <strong
                  className="quote-fade basis-0 grow  min-w-px not-italic relative shrink-0 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  &quot;Sprk helped us connect our installed customers with the Ramsey team. They&apos;re all Solar Certified and backed by Sprk. Andrea and the team have helped several of our customers maximize their home&apos;s resale value.&quot;
                </strong>
              </div>
              <div className="author-info content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                  <h5
                    className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Trey S.
                  </h5>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                  <p
                    className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.66)",
                    }}
                  >
                    Fusion Power
                  </p>
                </div>
              </div>
              <div className="cta-button content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                <ButtonsType type={2} label="Learn about the Sprk Referrals Network" link="/agents" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 8 - Testimonials */}
      <Testimonials
        data={[
          {
            image: "/home-page/section 8/profile.svg",
            text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
            name: "Trey S.",
            company: "Fusion Power"
          },
           {
            image: "/home-page/section 8/profile.svg",
            text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
            name: "Trey S.",
            company: "Fusion Power"
          },
          {
            image: "/home-page/section 8/profile.svg",
            text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
            name: "Trey S.",
            company: "Fusion Power"
          },
          {
            image: "/home-page/section 8/profile.svg",
            text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
            name: "Trey S.",
            company: "Fusion Power"
          }
        ]}
      />


      {/* Section 9 - CTA */}
      <CTA
        title="Bring clarity to solar homes."
        description="Whether you're listing, inspecting, financing, or buying—Sprk gives you the tools and data to move solar real estate with confidence."
        buttons={[
          { label: "Learn About Solar", link: "/identifysolarproblems" },
          { label: "Find a Certified Pro", link: "/findsolarpro" },
          { label: "Get Sprk Certified", link: "/professionalsolartraining" }
        ]}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}
