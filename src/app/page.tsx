import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import CTA from "@/components/CTA";
import AboutSprk from "@/components/AboutSprk";
import HowItWorksSection from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import ScrollAnimations from "@/components/ScrollAnimations";

function RoleCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div
      className="card flex w-full min-h-auto md:min-h-[360px] lg:min-h-[400px] xl:min-h-[380px] 2xl:min-h-[420px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-8 2xl:p-10 flex-col justify-between items-center text-center rounded-[10px] border bg-white hover:shadow-lg hover:scale-105 cursor-pointer"
      style={{
        borderColor: "rgba(17, 80, 86, 0.20)",
        boxShadow:
          "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)",
      }}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6 xl:mb-4 2xl:mb-6">
        <div 
          className="flex p-[20px] items-center rounded-[10px] border"
          style={{
            border: "1px solid var(--Primary-Color, #115056)",
            background: "var(--Card-Blue, #F1FAFA)"
          }}
        >
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] xl:w-[85px] xl:h-[85px] 2xl:w-[110px] 2xl:h-[110px] flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Title Section */}
      <div className="flex-1 flex flex-col justify-center mb-4">
        <h3
          className="text-center text-[32px] sm:text-[32px] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] leading-[110%] sm:leading-[110%] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.4] 2xl:leading-[1.4] font-medium"
          style={{
            color: "var(--Text-Title, #141414)",
            fontFamily: 'Inter, "Aeonik Pro", sans-serif',
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {title}
        </h3>
      </div>
      
      {/* Subtitle Section */}
      {subtitle ? (
        <div className="mb-4">
          <p 
            className="opacity-70 text-center text-[1rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.5] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        </div>
      ) : null}
      
      {/* Button Section */}
      <div className="w-full">
        <button
          className="group flex justify-center items-center gap-2 px-4 py-3 sm:px-4 sm:py-3 md:px-6 md:py-4 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4 w-full rounded-[5px] border bg-[var(--Card-Blue,#F1FAFA)] text-center min-h-[44px] sm:min-h-[48px] md:min-h-[52px] xl:min-h-[48px] 2xl:min-h-[52px] touch-manipulation hover:bg-[#115056] hover:text-white hover:scale-105 hover:shadow-md transition-all duration-200 text-[20px] sm:text-[20px] md:text-[20px] lg:text-[1.125rem] xl:text-[1.125rem] 2xl:text-[1.25rem] leading-[120%] sm:leading-[120%] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] font-normal md:font-medium lg:font-medium xl:font-medium 2xl:font-medium"
          style={{
            borderColor: "var(--Primary-Color, #115056)",
            color: "var(--Text-Title, #141414)",
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          <span className="group-hover:text-white transition-colors duration-200">Learn More</span>
          <span aria-hidden className="text-sm sm:text-base md:text-lg group-hover:text-white transition-colors duration-200">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
          <h1
            className="fade-up text-center mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-6 text-[35px] sm:text-[35px] md:text-[2rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[5rem] leading-[110%] sm:leading-[110%] md:leading-[1.3] lg:leading-[1.3] xl:leading-[1.1] 2xl:leading-[1.1] font-medium"
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
          <p
            className="fade-up max-w-xl sm:max-w-2xl mx-auto opacity-80 px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[1rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.5] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              color: "rgba(0,0,0,0.66)",
            }}
          >
            The trusted platform to connect, understand, value, inspect, and transfer solar homes with confidence and clarity.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-14 xl:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 px-0 sm:px-0 md:px-0 lg:px-0">
          <div className="slide-up-cards">
            <RoleCard
              icon={<Image src="/home-page/section 1/inspector-new.svg" alt="Inspector" width={110} height={110} />}
              title={"I'm a Home Inspector"}
            />
          </div>
          <div className="slide-up-cards">
            <RoleCard
              icon={<Image src="/home-page/section 1/real-estate-agent-new.svg" alt="Real Estate Agent" width={110} height={110} />}
              title={"I'm a Real Estate Agent"}
            />
          </div>
          <div className="slide-up-cards">
            <RoleCard
              icon={<Image src="/home-page/section 1/solar-pro-new.svg" alt="Solar Pro" width={110} height={110} />}
              title={"I'm a Solar Pro"}
            />
          </div>
          <div className="slide-up-cards">
            <RoleCard
              icon={<Image src="/home-page/section 1/homeowner-new.svg" alt="Homeowner" width={110} height={110} />}
              title={"I'm a Homeowner"}
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-2 box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[18px] md:text-[1.75rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] leading-[120%] sm:leading-[120%] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.1] 2xl:leading-[1.1] text-center px-4 sm:px-0 font-medium md:font-semibold lg:font-medium xl:font-medium 2xl:font-medium"
                style={{
                  fontFamily: 'Inter, "Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Why Sprk Exists
              </h2>
            </div>
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h4
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[2.1875rem] 2xl:text-[2.1875rem] leading-[1.5] sm:leading-[1.5] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.1] 2xl:leading-[1.1] text-center px-4 sm:px-0 font-semibold lg:font-medium xl:font-medium 2xl:font-medium"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Solar is valuable but misunderstood. Sprk bridges the gap.
                </h4>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <p
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[1rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.5] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] text-center px-4 sm:px-0"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  <p className="mb-0">We bring together the professionals who serve solar homeowners with the reports,</p>
                  <p className="">referrals, and training needed to simplify complex solar real estate.</p>
                </p>
              </div>
            </div>
          </div>
          <div className="content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 items-center justify-start relative shrink-0 w-full">
            {/* Standardized Reports Card */}
            <div className="card card-flip bg-white h-auto md:h-[450px] lg:h-[480px] xl:h-[511px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer">
              <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative size-full">
                <div className="bg-gray-50 box-border content-stretch flex h-[318px] items-end justify-end overflow-clip pb-0 pl-10 pr-0 pt-10 relative shrink-0 w-full">
                  <div
                    className="bg-center bg-cover bg-no-repeat h-[273px] rounded-tl-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.08)] shrink-0 w-[368px]"
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
                <div className="bg-white box-border content-stretch flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <h3
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px] sm:text-[32px] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] leading-[110%] sm:leading-[110%] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.4] 2xl:leading-[1.4] font-medium"
                      style={{
                        fontFamily: 'Inter, "Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Standardized Reports
                    </h3>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6]"
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
            <div className="card card-flip bg-white h-auto md:h-[450px] lg:h-[480px] xl:h-[511px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer">
              <div className="content-stretch flex flex-col h-[511px] items-center justify-start min-w-inherit overflow-clip relative w-full">
                <div className="bg-white content-stretch flex h-[318px] items-start justify-center overflow-clip relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0">
                    <div
                      className="bg-center bg-cover bg-no-repeat h-[318px] shrink-0 w-full"
                      style={{ backgroundImage: `url('/home-page/section 2/role-specific-training-new.png')` }}
                    />
                  </div>
                </div>
                <div className="bg-white box-border content-stretch flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <h3
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px] sm:text-[32px] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] leading-[110%] sm:leading-[110%] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.4] 2xl:leading-[1.4] font-medium"
                      style={{
                        fontFamily: 'Inter, "Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Role-Specific Training
                    </h3>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6]"
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
            <div className="card card-flip bg-white h-auto md:h-[450px] lg:h-[480px] xl:h-[511px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer">
              <div className="content-stretch flex flex-col h-[511px] items-center justify-start min-w-inherit overflow-clip relative w-full">
                <div className="bg-white content-stretch flex h-[318px] items-start justify-center overflow-clip relative shrink-0 w-full">
                  <div
                    className="bg-center bg-contain bg-no-repeat h-[318px] shrink-0 w-full"
                    style={{ backgroundImage: `url('/home-page/section 2/smart-connections-new.png')` }}
                  />
                </div>
                <div
                  className="basis-0 bg-center bg-cover bg-no-repeat content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px opacity-50 relative shrink-0"
                  style={{ backgroundImage: `url('/home-page/section 2/smart-connections-bg.png')` }}
                >
                </div>
                <div className="bg-white box-border content-stretch flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <h3
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px] sm:text-[32px] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.25rem] leading-[110%] sm:leading-[110%] md:leading-[1.5] lg:leading-[1.5] xl:leading-[1.4] 2xl:leading-[1.4] font-medium"
                      style={{
                        fontFamily: 'Inter, "Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Smart Connections
                    </h3>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <p
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6]"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)",
                      }}
                    >
                      Sprk connects buyers, sellers, agents, inspectors, and solar pros to support smooth, informed home transfers.
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
              <div
                className="bounce-in basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Sprk Reports
              </div>
            </div>
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
              <div
                className="bounce-in basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] text-center"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Built for real estate. Backed by data. Trusted by professionals.
              </div>
            </div>
          </div>
        </div>
        <div className="content-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start justify-start relative shrink-0 w-full">
          {/* Home Energy Report Card */}
          <div className="report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0">
                    <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                      <Image src="/home-page/section 3/home-energy-report.svg" alt="Home Energy Report" width={60} height={62} className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <div
                    className="basis-0 grow leading-[1.1] min-h-[66px] min-w-px not-italic relative shrink-0 text-[#141414] text-[30px]"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Home Energy Report
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center p-[30px] relative shrink-0 w-full">
                <div
                  className="basis-0 grow leading-[1.2] min-h-[110px] min-w-px not-italic relative shrink-0 text-[18px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Estimate monthly energy bills, uncover savings opportunities, and calculate solar potential.
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Solar Inspection Report Card */}
          <div className="report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0">
                    <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                      <Image src="/home-page/section 3/solar-inspection-report.svg" alt="Solar Inspection Report" width={60} height={62} className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <div
                    className="basis-0 grow leading-[1.1] min-h-[66px] min-w-px not-italic relative shrink-0 text-[#141414] text-[30px]"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Solar Inspection Report
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center p-[30px] relative shrink-0 w-full">
                <div
                  className="basis-0 grow leading-[1.2] min-h-[110px] min-w-px not-italic relative shrink-0 text-[18px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Confirm system performance, remaining life, and identify any solar-related issues.
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Solar Listing Report Card */}
          <div className="report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0">
                    <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                      <Image src="/home-page/section 3/solar-listing-report.svg" alt="Solar Listing Report" width={60} height={62} className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <div
                    className="basis-0 grow leading-[1.1] min-h-[66px] min-w-px not-italic relative shrink-0 text-[#141414] text-[30px]"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Solar Listing Report
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center p-[30px] relative shrink-0 w-full">
                <div
                  className="basis-0 grow leading-[1.2] min-h-[110px] min-w-px not-italic relative shrink-0 text-[18px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Showcase solar benefits, disclose financing details, and simplify the transfer process.
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Green Home Appraisal Report Card */}
          <div className="report-card bg-gray-50 min-h-[400px] w-full relative rounded-[10px] shrink-0">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-start relative shrink-0">
                  <div className="bg-white box-border content-stretch flex items-center justify-start p-[15px] relative rounded-[10px] shrink-0">
                    <div className="absolute border border-[rgba(17,80,86,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="h-[62px] overflow-clip relative shrink-0 w-[60px]">
                      <Image src="/home-page/section 3/green-home-appraisal-report.svg" alt="Green Home Appraisal Report" width={60} height={62} className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <div
                    className="basis-0 grow leading-[1.1] min-h-[66px] min-w-px not-italic relative shrink-0 text-[#141414] text-[30px]"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Green Home Appraisal Report
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center p-[30px] relative shrink-0 w-full">
                <div
                  className="basis-0 grow leading-[1.2] min-h-[110px] min-w-px not-italic relative shrink-0 text-[18px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  Provide appraisers and lenders with the certified solar and energy data needed to assign accurate value.
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
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
              <div
                className="bounce-in basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[56px] text-center text-white"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Solar is Growing!
              </div>
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <div
                className="text-reveal basis-0 grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-center"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <p className="mb-0">More than 5 million U.S. homeowners have already gone solar, and we&apos;re just getting started.</p>
                <p className="">Use the map to explore solar adoption rates and market size across all 50 states.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div
              className="map-zoom bg-center bg-contain bg-no-repeat h-[1031px] shrink-0 w-full"
              style={{ backgroundImage: `url('/home-page/section 5/solar-home-map.svg')` }}
            />
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
      <section className="box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div
              className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[80px] text-center px-4 sm:px-0"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                fontWeight: 500,
              }}
            >
              Connect with Confidence
            </div>
          </div>
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div
              className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-center px-4 sm:px-0"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                fontWeight: 500,
              }}
            >
              Refer and connect with professionals who have the knowledge and tools to deliver.
            </div>
          </div>
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div
              className="basis-0 grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-center"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                color: "rgba(0,0,0,0.66)",
              }}
            >
              <p className="mb-0">Sprk connects agents, inspectors, solar pros, and homeowners with Certified Professionals</p>
              <p className="">trained to simplify and support solar transactions.</p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[10px] shrink-0 w-full max-w-[1248px]">
          <div className="content-start flex flex-col lg:flex-row gap-0 items-start justify-start overflow-clip relative w-full">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full lg:w-1/2">
              <div
                className="bg-center bg-cover bg-no-repeat h-[500px] min-w-[350px] shrink-0 w-full"
                style={{ backgroundImage: `url('/home-page/section 7/profile.svg')` }}
              />
            </div>
            <div className="basis-0 box-border content-stretch flex flex-col grow h-auto lg:h-[500px] items-start justify-between min-h-[400px] min-w-full overflow-clip p-6 sm:p-8 lg:p-[50px] relative shrink-0">
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                <div
                  className="basis-0 grow leading-[1.2] min-h-[156px] min-w-px not-italic relative shrink-0 text-[22px]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.66)",
                  }}
                >
                  &quot;Sprk helped us connect our installed customers with the Ramsey team. They&apos;re all Solar Certified and backed by Sprk. Andrea and the team have helped several of our customers maximize their home&apos;s resale value.&quot;
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                  <div
                    className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Trey S.
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                  <div
                    className="basis-0 grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[18px]"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.66)",
                    }}
                  >
                    Fusion Power
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                <div className="bg-[#115056] box-border content-stretch flex items-start justify-center p-[5px] relative rounded-[5px] shrink-0 w-full">
                  <div className="basis-0 box-border content-stretch flex grow items-center justify-center min-h-px min-w-px px-[15px] py-[5px] relative shrink-0">
                    <div
                      className="basis-0 grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-center text-white"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                      }}
                    >
                      Learn about the Sprk Referrals Network
                    </div>
                    <div className="relative shrink-0 size-[30px]">
                      <div className="relative size-full">
                        <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]">
                          <Image src="/home-page/section 1/arrow-right.svg" alt="Arrow Right" width={30} height={30} className="block max-w-none size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
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
          }
        ]}
      />


      {/* Section 9 - CTA */}
      <CTA
        title="Bring clarity to solar homes."
        description="Whether you're listing, inspecting, financing, or buying—Sprk gives you the tools and data to move solar real estate with confidence."
        buttons={[
          { label: "Learn About Solar", link: "/learn-solar" },
          { label: "Find a Certified Pro", link: "/find-pro" },
          { label: "Get Sprk Certified", link: "/get-certified" }
        ]}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </>
  );
}
