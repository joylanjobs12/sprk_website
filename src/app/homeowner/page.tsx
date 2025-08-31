import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSprk from "@/components/AboutSprk";
import CTA from "@/components/CTA";
import ScrollAnimations from "@/components/ScrollAnimations";
import ButtonsType from "@/components/ButtonsType";

const inter = Inter({ subsets: ["latin"] });

export default function HomeownerPage() {
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 pt-[100px] sm:pt-[120px] lg:pt-[150px] pb-[80px] sm:pb-[100px]">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px] items-center justify-start px-2.5 w-full">
              <h1
                className="fade-up w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6"
                style={{ 
                  fontFamily: '"Aeonik Pro", sans-serif',
                  color: "#000"
                }}
              >
                <span style={{ color: "var(--Primary-Color, #115056)" }}>Sprk Stands</span>
                <span style={{ color: "#000" }}> with Solar Homeowners</span>
              </h1>
              
              <div className="fade-up flex items-center justify-center px-2.5 w-full max-w-4xl">
                <p
                  className={`${inter.className} text-center text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4`}
                  style={{
                    color: "#000"
                  }}
                >
                  You&apos;ve invested in the future. Sprk is here to help protect your green investment—whether<br />
                  you&apos;re thinking about solar, troubleshooting a system, or preparing to buy or sell a solar-powered home.
                </p>
              </div>
            </div>

            <div className="slide-up-cards bg-white flex flex-col justify-center items-center sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-[22px] items-stretch pb-6 sm:pb-8 md:pb-10 pt-0 px-[20px] sm:px-[25px] md:px-[30px] w-full">
              <div className="flex flex-col md:flex-row md:flex-wrap gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-full xl:w-full 2xl:w-full">
                <div className="w-full md:w-[80%] lg:w-1/3">
                  <ButtonsType type={9} label="Find a Certified Solar Pro" isShowArrow={false}/>
                </div>
                <div className="w-full md:w-[80%] lg:w-1/2">
                  <ButtonsType type={10} label="Find a Certified Real Estate Agent" isShowArrow={false} />
                </div>
                <div className="w-full md:w-[80%] lg:w-1/2">
                  <ButtonsType type={10} label="Find a Certified Home Inspector" isShowArrow={false} />
                </div>
              </div>
            </div>
            
          </header>
        </div>
      </section>
      {/* Section 2 */}
      <section className="section-2 box-border content-stretch flex flex-col gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-6 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-6 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-6 sm:gap-[30px] items-center justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h2
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500,
                    color: "#000"
                  }}
                >
                  You&apos;re Leading the Way
                </h2>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <strong
                  className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%] font-normal mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  Solar homeowners are making one of the smartest investments—for their home and for the planet.<br />
                  Whether you installed solar years ago, are just getting started, or are trying to understand what your<br />
                  system is worth, Sprk exists to bring clarity to the process.
                </strong>
              </div>
            </div>
            
            <div className="content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 items-stretch justify-start relative shrink-0 w-full">
  {/* Card 1 */}
  <div className="card-flip bg-white min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
    <div className="content-stretch flex flex-col items-center justify-start min-w-inherit relative size-full">
      <div className="bg-gray-50 content-stretch flex h-[300px] items-center justify-center overflow-hidden relative shrink-0 w-full">
        <Image
          src="/homeowners-page/section 2/investment.svg"
          alt="Your solar investment is documented and valued properly"
          width={400}
          height={300}
          className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
        />
      </div>
      <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-[22px] items-start justify-center pb-6 sm:pb-10 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full flex-1">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p
            className={`${inter.className} basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[25px] sm:text-[25px] md:text-[25px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] text-center font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2`}
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              color: "var(--Paragraph-1, #000)"
            }}
          >
            Your solar investment is documented and valued properly
          </p>
        </div>
      </div>
    </div>
    <div className="absolute border border-[rgba(17,80,86,0.20)] border-solid inset-0 pointer-events-none rounded-[10px]" style={{
      boxShadow: "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)"
    }} />
  </div>

  {/* Card 2 */}
  <div className="card-flip bg-white min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
    <div className="content-stretch flex flex-col items-center justify-start min-w-inherit relative size-full">
      <div className="bg-gray-50 content-stretch flex h-[300px] items-center justify-center overflow-hidden relative shrink-0 w-full">
        <Image
          src="/homeowners-page/section 2/avoid-confusion.svg"
          alt="You avoid confusion during appraisals, refinancing, or home sales"
          width={400}
          height={300}
          className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
        />
      </div>
      <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-[22px] items-start justify-center pb-6 sm:pb-10 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full flex-1">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p
            className={`${inter.className} basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[25px] sm:text-[25px] md:text-[25px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] text-center font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2`}
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              color: "var(--Paragraph-1, #000)"
            }}
          >
            You avoid confusion during appraisals, refinancing, or home sales
          </p>
        </div>
      </div>
    </div>
    <div className="absolute border border-[rgba(17,80,86,0.20)] border-solid inset-0 pointer-events-none rounded-[10px]" style={{
      boxShadow: "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)"
    }} />
  </div>

  {/* Card 3 */}
  <div className="card-flip bg-white min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
    <div className="content-stretch flex flex-col items-center justify-start min-w-inherit relative size-full">
      <div className="bg-gray-50 content-stretch flex h-[300px] items-center justify-center overflow-hidden relative shrink-0 w-full">
        <Image
          src="/homeowners-page/section 2/with-professionals.svg"
          alt="You work with professionals who understand how to represent your solar home"
          width={400}
          height={300}
          className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
        />
      </div>
      <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-[22px] items-start justify-center pb-6 sm:pb-10 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full flex-1">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p
            className={`${inter.className} basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[25px] sm:text-[25px] md:text-[25px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] text-center font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2`}
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              color: "var(--Paragraph-1, #000)"
            }}
          >
            You work with professionals who understand how to represent your<br className="hidden lg:inline" /> solar home
          </p>
        </div>
      </div>
    </div>
    <div className="absolute border border-[rgba(17,80,86,0.20)] border-solid inset-0 pointer-events-none rounded-[10px]" style={{
      boxShadow: "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)"
    }} />
  </div>
</div>
          </div>

          <div className="bounce-in content-stretch flex items-start justify-center pb-0 pt-4 sm:pt-[30px] px-4 sm:px-[30px] relative shrink-0 w-full">
            <h4
              className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-3 2xl:mb-3"
              style={{ 
                fontFamily: '"Aeonik Pro", sans-serif',
                color: "#000"
              }}
            >
              You&apos;re doing the right thing. We&apos;re here to make sure the solar<br />
              and real estate industries catch up.
            </h4>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section-3">
        <AboutSprk
          title="What Sprk Certified Means"
          subtitle="Trusted People. Verified Practices. Certified Data."
          description="Sprk Certified means the professionals you work with—and the reports they rely on—meet the highest standards in solar real estate."
          cards={[
            {
              icon: "/homeowners-page/section 3/inspectors.svg",
              label: "Sprk Certified\nInspectors",
              text: "Are trained to inspect and evaluate solar system performance, safety, installation quality, and energy features just like they would a roof or HVAC.",
              width: "large"
            },
            {
              icon: "/homeowners-page/section 3/agents.svg",
              label: "Sprk Certified\nAgents",
              text: "Certified in energy, disclosure, and valuation practices",
              width: "small"
            },
            {
              icon: "/homeowners-page/section 3/solar-pros.svg",
              label: "Certified\nSolar Pros",
              text: "Go beyond selling solar. They help homeowners understand how their whole-home energy system works, document installations for future resale, and size systems based on actual energy needs.",
              width: "small"
            },
            {
              icon: "/homeowners-page/section 3/reports.svg",
              label: "Certified\nReports",
              text: "Sprk Certified Reports - like the Solar Inspection Report, Solar Listing Report, and Green Home Appraisal Report are reviewed and validated using verified documentation, industry best practices, and real system data. These reports support real estate decisions and can be trusted by buyers, lenders, appraisers, and agents alike.",
              width: "large"
            }
          ]}
        />
      </section>

      {/* Section 4 */}
      <section className="section-4 bg-[#115056] w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px]">
          <div className="content-stretch flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] w-full max-w-[1248px] mx-auto">
            {/* Header */}
            <div className="content-stretch flex flex-col items-center gap-[30px] w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h2
                  className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center text-white text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium px-4 sm:px-0"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500
                  }}
                >
                  What&apos;s in Your Sprk Report?
                </h2>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <p
                  className={`${inter.className} text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4`}
                  style={{
                    color: "#fff"
                  }}
                >
                  Sprk Reports help you at every stage of the solar homeowner journey:
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="content-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 items-stretch justify-center relative shrink-0 w-full">
              {/* Card 1 - Thinking About Going Solar */}
              <div className="report-card bg-white rounded-[10px] border border-black/15 overflow-hidden w-full hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative w-full h-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start px-4 sm:px-[30px] pt-4 sm:pt-[30px] pb-2.5 relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-5"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Thinking About Going Solar?
                    </h5>
                    <p
                      className={`${inter.className} basis-0 grow min-h-[88px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal px-0 py-2.5`}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)"
                      }}
                    >
                      Use a Home Energy Report to understand your current bills, energy inefficiencies, and how solar might help along with other energy upgrades to consider.
                    </p>
                  </div>
                  <div className="bg-gray-200 content-stretch flex h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] items-center justify-center overflow-clip relative shrink-0 w-full">
                    <Image
                      src="/homeowners-page/section 4/thinking-about.svg"
                      alt="Home Energy Report example"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>

              {/* Card 2 - Already Have Solar */}
              <div className="report-card bg-white rounded-[10px] border border-black/15 overflow-hidden w-full hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative w-full h-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start px-4 sm:px-[30px] pt-4 sm:pt-[30px] pb-2.5 relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-5"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Already Have Solar?
                    </h5>
                    <p
                      className={`${inter.className} basis-0 grow min-h-[88px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal px-0 py-2.5`}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)"
                      }}
                    >
                      A Solar Inspection Report confirms system health, performance, safety, and expected lifespan. It&apos;s like an annual check-up for your solar.
                    </p>
                  </div>
                  <div className="bg-gray-200 content-stretch flex h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] items-center justify-center overflow-clip relative shrink-0 w-full">
                    <Image
                      src="/homeowners-page/section 4/already-have.svg"
                      alt="Solar Inspection Report example"
                      width={512}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>

              {/* Card 3 - Getting Ready to Sell */}
              <div className="report-card bg-white rounded-[10px] border border-black/15 overflow-hidden w-full hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative w-full h-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start px-4 sm:px-[30px] pt-4 sm:pt-[30px] pb-2.5 relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-5"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Getting Ready to Sell?
                    </h5>
                    <p
                      className={`${inter.className} basis-0 grow min-h-[88px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal px-0 py-2.5`}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)"
                      }}
                    >
                      The Solar Listing Report compiles everything a buyer, agent, or lender needs: ownership details, production data, warranty info, and savings estimates.
                    </p>
                  </div>
                  <div className="bg-gray-200 content-stretch flex h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] items-center justify-center overflow-clip relative shrink-0 w-full">
                    <Image
                      src="/homeowners-page/section 4/getting-ready.svg"
                      alt="Solar Listing Report example"
                      width={512}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>

              {/* Card 4 - Appraising or Refinancing */}
              <div className="report-card bg-white rounded-[10px] border border-black/15 overflow-hidden w-full hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
                <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative w-full h-full">
                  <div className="bg-white box-border content-stretch flex flex-col gap-5 items-start justify-start px-4 sm:px-[30px] pt-4 sm:pt-[30px] pb-2.5 relative shrink-0 w-full">
                    <h5
                      className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-5"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Appraising or Refinancing?
                    </h5>
                    <p
                      className={`${inter.className} basis-0 grow min-h-[88px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal px-0 py-2.5`}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)"
                      }}
                    >
                      The Green Home Appraisal Report gives appraisers the certified data needed to reflect your solar&apos;s value in the home price or loan.
                    </p>
                  </div>
                  <div className="bg-gray-200 content-stretch flex h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] items-center justify-center overflow-clip relative shrink-0 w-full">
                    <Image
                      src="/homeowners-page/section 4/appraising.svg"
                      alt="Green Home Appraisal Report example"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
            </div>

            <div className="bounce-in content-stretch flex items-start justify-center relative shrink-0 w-full px-4 sm:px-[30px]">
              <p
                className={`${inter.className} basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[1.6] font-medium`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)"
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.8)" }}>Curious what else counts toward your home&apos;s efficiency? Visit our </span>
                <span style={{ color: "#fff" }}>Sprk Blog</span>
                <span style={{ color: "rgba(255,255,255,0.8)" }}> to learn about green</span>
                <br />
                <span style={{ color: "rgba(255,255,255,0.8)" }}>assets like insulation, EV chargers, batteries, smart thermostats, and more.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="section-5 box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="content-stretch flex flex-col items-center gap-[30px] w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center text-[#141414] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium px-4 sm:px-0"
                style={{ 
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500
                }}
              >
                Where Our Data Comes From
              </h2>
            </div>
          </div>

          {/* Main Card */}
          <div className="card-slide-left w-full flex justify-center">
            <div className="bg-white rounded-[10px] border border-black/15 overflow-hidden w-full max-w-[1248px] min-h-[500px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left side - Image */}
                <div className="w-full lg:w-1/2 bg-gray-50 min-w-[350px] min-h-[300px] lg:min-h-[500px]">
                  <div className="w-full h-full bg-center bg-cover bg-no-repeat">
                    <Image
                      src="/homeowners-page/section 5/comes-from.svg"
                      alt="Data sources visualization"
                      width={624}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 bg-white p-6 sm:p-8 lg:p-[30px] flex flex-col gap-6 sm:gap-8 lg:gap-[35px] min-w-[350px] overflow-hidden">
                  <div className="w-full">
                    <h6
                      className="text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium"
                      style={{ 
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500
                      }}
                    >
                      Sprk Reports are built from real, trusted sources—not sales scripts.
                      <br />
                      We use:
                    </h6>
                  </div>

                  <div className="flex flex-col gap-[5px] w-full">
                    {/* Checklist items */}
                    <div className="slide-up-cards flex gap-[5px] items-center w-full">
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal flex-1`}>
                        Local utility rates and energy tariffs
                      </p>
                    </div>

                    <div className="slide-up-cards flex gap-[5px] items-center w-full">
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal flex-1`}>
                        National Renewable Energy Lab (NREL) and PVWatts data
                      </p>
                    </div>

                    <div className="slide-up-cards flex gap-[5px] items-start w-full">
                      <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal flex-1`}>
                        National Electric Code (NEC) and installation best practices
                      </p>
                    </div>

                    <div className="slide-up-cards flex gap-[5px] items-start w-full">
                      <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal flex-1`}>
                        Freddie Mac, DOE, and industry-approved appraisal models
                      </p>
                    </div>

                    <div className="slide-up-cards flex gap-[5px] items-center w-full">
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal flex-1`}>
                        Verified inspection and system documentation
                      </p>
                    </div>
                  </div>

                  <div className="text-reveal w-full">
                    <p className={`${inter.className} text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal`}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.66)"
                      }}
                    >
                      Every report is grounded in proven frameworks and industry standards—so you and your buyers can move forward with clarity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="section-6 box-border content-stretch flex flex-col gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col items-center gap-6 sm:gap-10 lg:gap-12 xl:gap-[50px] w-full">
          {/* Header Content */}
          <div className="content-stretch flex flex-col items-center gap-4 sm:gap-5 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="fade-up basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium px-4 sm:px-0 mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                style={{ 
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000"
                }}
              >
                Learn More. Feel Confident. Move Forward.
              </h2>
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <div
                className={`${inter.className} text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center max-w-4xl px-4 sm:px-0`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  color: "#000"
                }}
              >
                <strong className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 block">
                  We know solar can feel confusing especially when it comes to ownership types, warranties, system value, and resale.
                </strong>
                <strong className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 block">
                  That&apos;s why we built the <span className="font-medium">[Sprk Blog]</span> to answer your biggest questions with clear, credible guidance written by professionals who understand both energy and real estate.
                </strong>
                <strong className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] font-normal mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 block">
                  Whether you&apos;re reviewing a report, planning to sell, or just curious what your system&apos;s worth Sprk is here for you.
                </strong>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="testimonial-card w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[700px] flex flex-col">
            <div className="image-slide-left w-full h-full rounded-[10px] bg-gray-200 flex items-center justify-center overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <Image
                src="/homeowners-page/section 6/learn-more.svg"
                alt="Sprk platform devices showing Review, Report, and Sell features"
                width={1200}
                height={700}
                className="w-full h-full object-cover object-top"
                style={{ backgroundSize: '99.72% 100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - CTA */}
      <section className="section-7">
        <CTA
          title="You Invested in the Future. Let&apos;s Help You Protect It."
          buttons={[
            { label: "Find a Certified Agent", link: "/agents" },
            { label: "Find a Certified Inspector", link: "/inspector" },
            { label: "Explore the Sprk Blog", link: "/blog" }
          ]}
        />
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </div>
     );
}