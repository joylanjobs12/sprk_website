import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import HowToGetStarted from "@/components/HowToGetStarted";
import ScrollAnimations from "@/components/ScrollAnimations";
import HowItWorksSection from "@/components/HowItWorksSection";
import ButtonsType from "@/components/ButtonsType";

const inter = Inter({ subsets: ["latin"] });

export default function SolarProPage() {
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />

      {/* Section 1 - Hero */}
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[100px] pb-[50px] sm:pb-[60px] lg:pb-[80px] xl:pb-[100px]">
          <h1
            className="fade-up text-center mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6 text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium"
            style={{
              textAlign: "center",
              fontFamily: '"Aeonik Pro", sans-serif',
              fontStyle: "normal",
              fontWeight: 500,
              color: "#000",
            }}
          >
            <span style={{ color: "var(--Primary-Color, #115056)" }}>Do More Than Get Solar</span>{" "}<br className="hidden xs:inline sm:inline" />
            <span style={{ color: "var(--Text-Title, #141414)" }}>on Their Roof</span>
          </h1>

          <p
            className="fade-up mx-auto mt-[30px] mb-[50px] opacity-80 px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px]text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              color: "#000",
            }}
          >
            Sprk equips solar professionals with tools to sell smarter, support longer, and help homeowners understand their system now and years from now.
          </p>

          <div className="slide-up-cards bg-white flex flex-col justify-center items-center sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-[22px] items-stretch pb-6 sm:pb-8 md:pb-10 pt-0 px-[20px] sm:px-[25px] md:px-[30px] w-full">
              <div className="flex flex-col md:flex-row gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
                <div className="w-full ">
                  <ButtonsType type={9} label="Get Solar Certified" isShowArrow={false} />
                </div>
                <div className="w-full ">
                  <ButtonsType type={10} label="Use the Solar Estimator" isShowArrow={false} />
                </div>
              </div>
            </div>

          
        </div>
      </section>
      {/* Section 2 */}
      <section className="section-2 box-border content-stretch flex flex-col gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-6 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-[20px] sm:gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 font-medium mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%]"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Why Solar Professionals Choose Sprk
              </h2>
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h4
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Sprk Helps You Stand Out in a Market That&apos;s Changing
              </h4>
            </div>
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <p
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  Most solar companies stop at the install. But the homeowners you serve deserve more.
                  <br />
                  Sprk helps you become the kind of solar partner that stays relevant long after the panels go up.
                </p>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-full">
            <div className="card-flip bg-white h-auto md:h-[500px] lg:h-[500px] xl:h-[500px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer overflow-hidden">
              <div className="content-stretch flex flex-col lg:flex-row gap-0 items-start justify-start relative size-full">
                <div className="image-slide-left bg-gray-50 content-stretch flex flex-col items-start justify-start relative shrink-0 w-full lg:w-1/2">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[300px] lg:h-[500px] min-w-[350px] shrink-0 w-full"
                    style={{ backgroundImage: `url('/solar-pro-page/section 2/solar-professionals.svg')` }}
                  />
                </div>
                <div className="testimonial-content bg-white box-border content-stretch flex flex-col gap-[25px] sm:gap-[35px] h-auto lg:h-[500px] items-start justify-start min-w-full lg:min-w-[350px] overflow-clip p-4 sm:p-6 md:p-8 lg:p-[30px] relative shrink-0 flex-1">
                  <div className="quote-fade flex items-start justify-start w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%]"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      What Sprk Does for Solar Companies
                    </h5>
                  </div>
                  <div className="author-info flex flex-col gap-[5px] items-start w-full">
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Attract new leads with a homeowner-facing Solar Calculator
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Create proposals that include energy upgrades, solar, and batteries
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Sell and install using Sprk&apos;s real estate-ready reports
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Give clients a mobile app to store solar and resale documents
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Connect clients with solar-trained real estate agents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      <HowToGetStarted
        title="How It Works"
        subtitle="Professional Tools That Power the Better Solar Companies"
        steps={[
          {
            icon: "/solar-pro-page/section 3/find-wtih.svg",
            label: "Find with the Solar Calculator",
            description: "Use the Sprk Solar Calculator to give homeowners a free way to explore how much solar they might need—giving you direct access to usage data and interest level."
          },
          {
            icon: "/solar-pro-page/section 3/sell-with.svg",
            label: "Sell with the Home Energy Report",
            description: "Diagnose the home's efficiency issues when quoting solar. Help homeowners understand what could be improved along with adding solar and batteries."
          },
          {
            icon: "/solar-pro-page/section 3/install-wtih.svg",
            label: "Install with the Solar Inspection Report",
            description: "Show your clients you install to the highest standards. Leave every homeowner with documentation and confidence that their system was done right."
          },
          {
            icon: "/solar-pro-page/section 3/support-with.svg",
            label: "Support with the Solar Listing Report",
            description: "Make sure your customers are ready when it's time to sell. Provide warranty docs, ownership details, and transfer-ready info to protect the value of your install."
          }
        ]}
      />
      {/* Section 4 - Sprk Reports */}
      <section className="section-4 bg-[#115056] box-border content-stretch flex flex-col gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-16 lg:py-20 xl:py-[100px] relative size-full">
        <div className="mx-auto w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-6 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full">
            {/* Header */}
            <div className="content-stretch flex flex-col gap-[20px] sm:gap-[30px] items-center justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h2
                  className="fade-up basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 font-medium mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] transition-all duration-300 ease-in-out"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  Sprk Reports
                </h2>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h4
                  className="fade-up basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] transition-all duration-300 ease-in-out"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  Built for real estate. Backed by data. Trusted by professionals.
                </h4>
              </div>
            </div>

            {/* Report Cards */}
            <div className="content-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start justify-start relative shrink-0 w-full">
              {/* Home Energy Report Card */}
              <div className="slide-up-cards report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group">
                <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[20px] sm:p-[30px] relative shrink-0 w-full group-hover:bg-gray-50 transition-colors duration-300">
                    <div className="content-stretch flex items-center justify-start relative shrink-0">
                      <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                        <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                          <Image src="/home-page/section 3/home-energy-report.svg" alt="Home Energy Report" width={60} height={62} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                      <h6
                        className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] transition-colors duration-300 group-hover:text-[#115056]"
                        style={{
                          fontFamily: '"Aeonik Pro", sans-serif',
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        Home Energy Report
                      </h6>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex items-start justify-center p-[20px] sm:p-[30px] relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-[110px] min-w-px not-italic relative shrink-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "#000",
                      }}
                    >
                      Uncover hidden efficiency issues, estimate utility savings, and lay the groundwork for accurate system design and battery sizing.
                    </p>
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#115056] group-hover:border-2 transition-all duration-300" />
              </div>

              {/* Solar Inspection Report Card */}
              <div className="slide-up-cards report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group">
                <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[20px] sm:p-[30px] relative shrink-0 w-full group-hover:bg-gray-50 transition-colors duration-300">
                    <div className="content-stretch flex items-center justify-start relative shrink-0">
                      <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                        <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                          <Image src="/home-page/section 3/solar-inspection-report.svg" alt="Solar Inspection Report" width={60} height={62} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                      <h6
                        className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] transition-colors duration-300 group-hover:text-[#115056]"
                        style={{
                          fontFamily: '"Aeonik Pro", sans-serif',
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        Solar Inspection Report
                      </h6>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex items-start justify-center p-[20px] sm:p-[30px] relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-[110px] min-w-px not-italic relative shrink-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "#000",
                      }}
                    >
                      Verify system health post-install, confirm performance, and give the homeowner a certified record of quality installation.
                    </p>
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#115056] group-hover:border-2 transition-all duration-300" />
              </div>

              {/* Solar Listing Report Card */}
              <div className="slide-up-cards report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer group">
                <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[20px] sm:p-[30px] relative shrink-0 w-full group-hover:bg-gray-50 transition-colors duration-300">
                    <div className="content-stretch flex items-center justify-start relative shrink-0">
                      <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                        <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                          <Image src="/home-page/section 3/solar-listing-report.svg" alt="Solar Listing Report" width={60} height={62} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                      <h6
                        className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] transition-colors duration-300 group-hover:text-[#115056]"
                        style={{
                          fontFamily: '"Aeonik Pro", sans-serif',
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        Solar Listing Report
                      </h6>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex items-start justify-center p-[20px] sm:p-[30px] relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-[110px] min-w-px not-italic relative shrink-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "#000",
                      }}
                    >
                      Help your customers prepare for the future. This report ensures their solar investment is fully documented and transferable when they go to sell their solar home.
                    </p>
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px] group-hover:border-[#115056] group-hover:border-2 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Long-Term Value for Your Clients */}
      <section className="section-5 box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 font-medium"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Long-Term Value for Your Clients
              </h2>
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h4
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 font-medium"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Solar That Pays Off for Years to Come
              </h4>
            </div>
          </div>

          {/* Content Card */}
          <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-full">
            <div className="slide-up-cards bg-white h-auto md:h-[500px] lg:h-[500px] xl:h-[500px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer overflow-hidden">
              <div className="content-stretch flex flex-col lg:flex-row gap-0 items-start justify-start relative size-full">
                {/* Image Section */}
                <div className="image-slide-left bg-gray-50 content-stretch flex flex-col items-start justify-start relative shrink-0 w-full lg:w-1/2">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[300px] lg:h-[500px] min-w-[350px] shrink-0 w-full"
                    style={{ backgroundImage: `url('/solar-pro-page/section 5/long-term.svg')` }}
                  />
                </div>

                {/* Content Section */}
                <div className="testimonial-content bg-white box-border content-stretch flex flex-col gap-[25px] sm:gap-[35px] h-auto lg:h-[500px] items-start justify-start min-w-full lg:min-w-[350px] overflow-clip p-4 sm:p-6 md:p-8 lg:p-[30px] relative shrink-0 flex-1">
                  {/* Main Description */}
                  <div className="quote-fade flex items-start justify-start w-full">
                    <h6
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%]"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      Sprk helps you deliver more than a solar quote. It helps you support the homeowner&apos;s full energy story. With our tools, you&apos;re empowering homeowners to:
                    </h6>
                  </div>

                  {/* Checklist Items */}
                  <div className="author-info flex flex-col gap-[5px] items-start w-full">
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Understand their energy use
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Fix energy waste before oversizing their system
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Feel confident in the value of their investment
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Avoid issues when refinancing or selling
                      </p>
                    </div>
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <div className="relative w-6 h-6 flex-shrink-0">
                        <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                      </div>
                      <p
                        className="flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        Get connected with agents and inspectors who truly understand solar
                      </p>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="cta-button flex flex-col gap-[5px] items-start w-full">
                    <div className="flex gap-[5px] items-center justify-start w-full">
                      <p
                        className="flex-1 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal"
                        style={{
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        The result? Happier clients, better referrals, and stronger long-term brand equity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - What Sprk Certified Means */}
      <section className="section-6 box-border content-stretch flex flex-col gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-[30px] sm:gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[20px] sm:gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="card-slide-left text-center w-full font-medium mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%]"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                What Sprk Certified Means
              </h2>
            </div>
            <div className="flex items-start justify-center w-full">
              <h4
                className="card-slide-left text-center w-full font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Sprk Certified Means Solar Done Right
              </h4>
            </div>
          </div>

          {/* Content Card */}
          <div className="flex flex-col gap-[30px] sm:gap-[50px] items-center w-full max-w-[1248px]">
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              <div className="bg-white h-auto rounded-[10px] w-full border border-[rgba(0,0,0,0.15)] overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-0 h-auto items-start justify-start w-full">
                  {/* Badge Section */}
                  <div className="bg-gray-50 flex flex-col items-start justify-start w-full lg:w-1/2">
                    <div
                      className="h-[300px] lg:h-[500px] min-w-[350px] w-full bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('solar-pro-page/section 6/what-sprk.svg')`,
                        backgroundSize: "59.5% 74.25%",
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="bg-white flex flex-col gap-[25px] sm:gap-[35px] h-auto items-start justify-start min-w-[350px] p-4 sm:p-6 md:p-8 lg:p-[30px] flex-1 overflow-clip">
                    {/* Main Description */}
                    <div className="flex items-start justify-start w-full">
                      <h6
                        className="font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%]"
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontStyle: "normal",
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        When your organization becomes Sprk Certified, you&apos;re signaling to homeowners and agents, that you care about the full lifecycle of solar:
                      </h6>
                    </div>

                    {/* Checklist Items */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img
                              alt=""
                              className="block max-w-none w-full h-full"
                              src="/icons/check-box.svg"
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000",
                          }}
                        >
                          You offer documented inspections
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img
                              alt=""
                              className="block max-w-none w-full h-full"
                              src="/icons/check-box.svg"
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000",
                          }}
                        >
                          You provide energy reports, not just panel quotes
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img
                              alt=""
                              className="block max-w-none w-full h-full"
                              src="/icons/check-box.svg"
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000",
                          }}
                        >
                          You help your clients prepare for future resale
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img
                              alt=""
                              className="block max-w-none w-full h-full"
                              src="/icons/check-box.svg"
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000",
                          }}
                        >
                          You connect them with the right support team
                        </p>
                      </div>
                    </div>

                    {/* Description Text */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <p
                          className={`${inter.className} flex-1 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                          style={{
                            fontFamily: "Inter",
                            fontStyle: "normal",
                            fontWeight: 400,
                            color: "#000",
                          }}
                        >
                          Sprk Certification isn&apos;t just a stamp, it&apos;s a commitment to quality, clarity, and client education.
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <ButtonsType type={2} label="Get Solar Certified" isShowArrow={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Solar Calculator Lead Gen Tool */}
      <section className="section-7 box-border content-stretch flex flex-col gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-[30px] sm:gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[20px] sm:gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="testimonial-slide text-center w-full font-medium mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%]"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                Solar Calculator Lead Gen Tool
              </h2>
            </div>
            <div
                className="bg-center bg-cover bg-no-repeat h-[300px] lg:h-[700px] min-w-[350px] shrink-0 w-full"
                style={{ backgroundImage: `url('/solar-pro-page/section 7/solar-calculator.svg')` }}
              />
          </div>

          {/* Calculator Showcase */}
          <div className="flex flex-col gap-[30px] sm:gap-[50px] items-center w-full max-w-[1248px]">
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              <div className="bg-white h-auto rounded-[10px] w-full border border-[rgba(0,0,0,0.15)] overflow-hidden">
                <div className="flex flex-col h-auto items-start justify-start w-full">
                  {/* Calculator Image */}
                  <div className="bg-white flex gap-[5px] items-start justify-start w-full flex-1">
                    <div
                      className="h-full min-w-[350px] w-full bg-center bg-contain bg-no-repeat flex-1"
                      style={{
                        backgroundImage: `url('solar-pro-page/section 7/solar-calculator.svg')`,
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="bg-white flex flex-col gap-[25px] sm:gap-[35px] items-start justify-start min-w-[350px] p-4 sm:p-6 md:p-8 lg:p-[30px] w-full overflow-clip">
                    {/* Title */}
                    <div className="flex items-start justify-center w-full">
                      <h2
                        className="text-center w-full font-medium mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%]"
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontStyle: "normal",
                          fontWeight: 500,
                          color: "#000",
                        }}
                      >
                        More Leads. Better Conversations.
                      </h2>
                    </div>

                    {/* Two Column Content */}
                    <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-6 lg:gap-0">
                      {/* Left Column */}
                      <div className="flex flex-col gap-[5px] items-start justify-start px-0 lg:px-5 py-2.5 flex-1 border-r-0 lg:border-r border-[rgba(0,0,0,0.2)]">
                        <div className="w-full">
                          <p
                            className={`${inter.className} mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                            style={{
                              fontFamily: "Inter",
                              fontStyle: "normal",
                              fontWeight: 400,
                              color: "#000",
                            }}
                          >
                            Sprk gives you access to a clean, easy-to-use Solar Calculator that you can:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Embed on your website
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Share in email or during consultations
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Use in social media content and paid ad campaigns
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col gap-[5px] items-start justify-start px-0 lg:px-5 py-2.5 flex-1">
                        <div className="w-full">
                          <p
                            className={`${inter.className} mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                            style={{
                              fontFamily: "Inter",
                              fontStyle: "normal",
                              fontWeight: 400,
                              color: "#000",
                            }}
                          >
                            It helps you:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Attract qualified solar leads
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Start the conversation with data, not pressure
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Show energy savings based on real utility rates and home profiles
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] font-normal`}
                                style={{
                                  fontFamily: "Inter",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  color: "#000",
                                }}
                              >
                                Send a Sprk Home Energy Report as part of your follow-up package
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start justify-start w-full">
                      <ButtonsType type={2} label="Get Sprk Certified" isShowArrow={true} />

                      <ButtonsType type={6} label="Try the Solar Estimator" isShowArrow={true} />

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Section 3 */}
      <HowItWorksSection
        title="How Sprk Works"
        subtitle="Lead Gen with Solar Calculator"
        step1={{
          icon: '/solar-pro-page/section 7/homeowner-fills.svg',
          label: "Homeowner fills out 1 min energy form",
          description: "Complete Sprk's on-demand certification and learn how to inspect solar and energy systems with ease.",
        }}
        step2={{
          icon: '/solar-pro-page/section 7/homeowner-views.svg',
          label: "Homeowner views Interactive energy report",
          description: "Use the Sprk Pro app to collect data and generate polished reports in minutes right from your phone or tablet."
        }}
        step3={{
          icon: '/solar-pro-page/section 7/solar-company.svg',
          label: "Solar company receives Homeowner info",
          description: "Offer more value to your clients, stand out with agents, and increase your profitability per job."
        }}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
