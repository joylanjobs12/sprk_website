import Image from "next/image";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import CTA from "@/components/CTA";
import AboutSprk from "@/components/AboutSprk";
import HowItWorksSection from "@/components/HowItWorksSection";

const inter = Inter({ subsets: ["latin"] });

function RoleCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div
      className="flex w-[294px] h-[400px] min-w-[294px] p-10 flex-col justify-between items-start rounded-[10px] border bg-white"
      style={{
        borderColor: "rgba(17, 80, 86, 0.20)",
        boxShadow:
          "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)",
      }}
    >
      <div className="mb-4 flex items-center justify-center">
        {icon}
      </div>
      <div
        className="mb-2 flex-[1_0_0]"
        style={{
          color: "var(--Text-Title, #141414)",
          fontFamily: '"Aeonik Pro", sans-serif',
          fontSize: 35,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "110%",
        }}
      >
        {title}
      </div>
      {subtitle ? <div className="opacity-70">{subtitle}</div> : null}
      <div className="mt-6 w-full">
        <button
          className={`${inter.className} flex justify-center items-start gap-3 p-[5px] self-stretch w-full rounded-[5px] border bg-[var(--Card-Blue,#F1FAFA)] text-center`}
          style={{
            borderColor: "var(--Primary-Color, #115056)",
            flex: "1 0 0",
            color: "var(--Text-Title, #141414)",
            fontSize: 22,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%",
          }}
        >
          <span>Learn More</span>
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 ">
      <div className="text-center pt-[40px] sm:pt-[60px] lg:pt-[80px]">
        <h1
          className="text-center text-[40px] sm:text-[56px] lg:text-[80px]"
          style={{
            color: "var(--Primary-Color, #115056)",
            textAlign: "center",
            fontFamily: '"Aeonik Pro", sans-serif',
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "110%",
          }}
        >
          Solar Simplified.
        </h1>
        <h2
          className="mt-2 text-center text-[36px] sm:text-[48px] lg:text-[80px]"
          style={{
            color: "var(--Text-Title, #141414)",
            fontFamily: '"Aeonik Pro", sans-serif',
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "110%",
          }}
        >
          Real Estate Ready.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base opacity-80">
          The trusted platform to connect, understand, value, inspect, and transfer solar homes with confidence and clarity.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center content-center gap-x-6 gap-y-[30px] self-stretch">
        <RoleCard
          icon={<Image src="/home-page/section 1/inspector.svg" alt="Inspector" width={110} height={110} />}
          title={"I’m a Home Inspector"}
        />
        <RoleCard
          icon={<Image src="/home-page/section 1/real-state-agent.svg" alt="Real Estate Agent" width={110} height={110} />}
          title={"I’m a Real Estate Agent"}
        />
        <RoleCard
          icon={<Image src="/home-page/section 1/solar-pro.svg" alt="Solar Pro" width={110} height={110} />}
          title={"I’m a Solar Pro"}
        />
        <RoleCard
          icon={<Image src="/home-page/section 1/homeowner.svg" alt="Homeowner" width={110} height={110} />}
          title={"I’m a Homeowner"}
        />
      </div>
    </section>

      {/* Section 2 */}
      <section className="box-border content-stretch flex flex-col gap-20 items-center justify-start px-24 py-[100px] relative size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-[1248px]">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <div 
                className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                Why Sprk Exists
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div 
                  className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] text-center"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Solar is valuable but misunderstood. Sprk bridges the gap.
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
                  <p className="mb-0">We bring together the professionals who serve solar homeowners with the reports,</p>
                  <p className="">referrals, and training needed to simplify complex solar real estate.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-6 items-center justify-start relative shrink-0 w-full">
            {/* Standardized Reports Card */}
            <div className="basis-0 bg-white grow h-[511px] min-h-px min-w-[400px] relative rounded-[10px] shrink-0">
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
                    <div 
                      className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Standardized Reports
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
                      Make solar and energy data visible and valuation-ready.
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>

            {/* Role-Specific Training Card */}
            <div className="basis-0 bg-white grow h-[511px] min-h-px min-w-[400px] relative rounded-[10px] shrink-0">
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
                    <div 
                      className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Role-Specific Training
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
                      Equip professionals with the tools to lead confident solar transactions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>

            {/* Smart Connections Card */}
            <div className="basis-0 bg-white grow h-[511px] min-h-px min-w-[400px] relative rounded-[10px] shrink-0">
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
                    <div 
                      className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Smart Connections
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
                      Sprk connects buyers, sellers, agents, inspectors, and solar pros to support smooth, informed home transfers.
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3*/}
      <section className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start pb-[100px] pt-[50px] px-[94px] relative size-full">
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
              <div 
                className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center"
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
                className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] text-center"
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
        <div className="content-start flex flex-wrap gap-6 items-start justify-start relative shrink-0 w-full">
          {/* Home Energy Report Card */}
          <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0">
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
          <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0">
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
          <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0">
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
          <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0">
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
      <section className="bg-[#115056] box-border content-stretch flex flex-col items-center justify-start px-0 py-[100px] relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start px-0 py-[50px] relative shrink-0 w-full">
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div 
              className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[56px] text-center text-white"
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
              className="basis-0 grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-center"
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
            className="bg-center bg-contain bg-no-repeat h-[1031px] shrink-0 w-full"
            style={{ backgroundImage: `url('/home-page/section 5/solar-home-map.svg')` }}
          />
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
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 pb-[100px]">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <h3
            className="flex-[1_0_0] text-center text-[#141414] text-[80px] leading-[110%] font-medium"
            style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
          >
            Connect with Confidence
          </h3>
          <p
            className="flex-[1_0_0] text-center text-[28px] leading-[110%] font-medium text-[#141414]"
            style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
          >
            Refer and connect with professionals who have the knowledge and tools to deliver.
          </p>
          <p className={`${inter.className} flex-[1_0_0] text-center text-[22px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
            Sprk connects agents, inspectors, solar pros, and homeowners with Certified Professionals trained to simplify and support solar transactions.
          </p>
        </div>

        <div className="mt-[50px] flex items-start content-start flex-wrap rounded-[10px] border bg-white overflow-hidden" style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="bg-[#F2F2F2] flex items-center justify-center">
              <Image src="/home-page/section 7/profile.svg" alt="Customer profile" width={640} height={420} className="w-full h-auto" />
            </div>
            <div className="flex h-[500px] min-w-[350px] p-[50px] flex-col justify-between items-start flex-[1_0_0] gap-6">
              <div className={`${inter.className} min-h-[156px] flex-[1_0_0] text-center md:text-left text-[22px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                “Sprk helped us connect our installed customers with the Ramsey team. They’re all Solar Certified and backed by Sprk. Andrea and the team have helped several of our customers maximize their home’s resale value.”
              </div>
              <div>
                <div className="flex-[1_0_0] text-[#141414] text-[32px] leading-[110%] font-medium" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>Trey S.</div>
                <div className={`${inter.className} flex-[1_0_0] text-[18px] leading-[120%] font-normal`} style={{ color: 'rgba(0, 0, 0, 0.66)' }}>Fusion Power</div>
              </div>
              <div className="pt-2">
                <button className="flex p-[5px] justify-center items-start self-stretch gap-2 rounded-[5px] bg-[#115056] text-white text-[14px] font-semibold ">
                  Learn about the Sprk Referrals Network
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 8 - Testimonials */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] pb-[100px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik_Pro']">
                What Inspectors Are Saying
                <br className="hidden sm:block" /> About Sprk
              </h3>
            </div>
            <button className={`${inter.className} hidden sm:flex items-center gap-2 text-[#141414]/70 text-[14px]`}>
              Discover their Stories <span aria-hidden>▾</span>
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[10px] border border-black/10 bg-white overflow-hidden">
                <div>
                  <Image src="/inspector-page/section 7/profile.svg" alt="Inspector profile" width={400} height={500} className="w-full h-auto" />
                </div>
                <div className="flex min-w-[350px] p-[50px] flex-col items-start gap-[30px] flex-1 basis-0">
                  <p className={`${inter.className} flex-1 basis-0 text-[16px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                    “The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy
                    reports for our clients.”
                  </p>
                  <div>
                    <div className="flex-1 basis-0 text-[#141414] text-[32px] leading-[110%] font-medium font-['Aeonik_Pro']">Trey S.</div>
                    <div className={`${inter.className} flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>Fusion Power</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


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
