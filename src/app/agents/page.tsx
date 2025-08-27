import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function AgentsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-7 lg:gap-8">
          <h1
            className="max-w-[1000px]"
            style={{
              color: "var(--Primary-Color, #115056)",
              fontFamily: '"Aeonik Pro", sans-serif',
              fontSize: 80,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "110%",
              textAlign: "center",
            }}
          >
            <span>Clarity</span>{" "}
            <span style={{ color: "var(--Text-Title, #141414)" }}>for Solar Home</span>
            <br />
            <span style={{ color: "var(--Text-Title, #141414)" }}>Transactions</span>
          </h1>

          <p
            className={`${inter.className}`}
            style={{
              flex: "1 0 0",
              color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
              textAlign: "center",
              fontFamily: '"Inter", sans-serif',
              fontSize: 22,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
            }}
          >
           Sprk gives real estate agents the training, tools, and reports to market, disclose, and transfer
           solar homes the right way without having to become a solar expert.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#join"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-[#115056] text-white text-[14px] font-semibold leading-[110%]"
            >
              Get Solar Certified
            </Link>
            <Link
              href="#demo"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-white border border-[#115056] text-[#115056] text-[14px] font-semibold leading-[110%]"
            >
              Generate a Sprk Listing Report
            </Link>
          </div>

          <div className="w-full pt-8 sm:pt-10 lg:pt-12 flex flex-col items-center gap-[25px] self-stretch">
            <p className="text-center text-xs tracking-wide opacity-70">Trusted by:</p>
            <p
              className={`${inter.className} text-center text-[18px] font-normal leading-[120%]`}
              style={{
                color: "rgba(0, 0, 0, 0.66)",
              }}
            >
              Thousands of agents across the U.S. use Sprk to simplify solar transactions,
              protect their clients, and stand out in a growing market.
            </p>
            <div className="flex justify-center items-center gap-[25px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/inspector-page/section1/trusted-by.svg"
                  alt="Trusted by logo"
                  width={150}
                  height={82}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-[100px]">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="text-center">
            <h2
              className="flex-[1_0_0] text-center text-[56px] leading-[110%] font-medium mb-4"
              style={{ 
                color: "#141414",
                fontFamily: '"Aeonik Pro", sans-serif'
              }}
            >
              Why Real Estate Agents Choose Sprk
            </h2>
            <p
              className="flex-[1_0_0] text-center text-[35px] font-medium  mx-auto"
              style={{ 
                color: "#141414",
                fontFamily: '"Aeonik Pro", sans-serif'
              }}
            >
              Solar Is Changing the Market, and Most Agents Aren't Prepared
            </p>
            <p
              className={`${inter.className} flex-[1_0_0] text-center text-[22px] font-normal mx-auto mt-2`}
              style={{ color: "rgba(0, 0, 0, 0.66)" }}
            >
              Over 5 million U.S. homes now have solar, and that number is growing fast. But most agents aren't trained to explain system value, navigate ownership types, or handle disclosures. That's where Sprk steps in.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 self-stretch w-full">
            {/* Top Row - 3 cards */}
            <div className="flex justify-center gap-6 w-full">
              {/* Card 1 - Learn how solar impacts real estate */}
              <div className="flex min-w-[400px] flex-col items-center flex-[1_0_0] p-6 text-center" style={{ borderRadius: "10px", border: "1px solid rgba(17, 80, 86, 0.50)", background: "#FFF" }}>
                <div className="mb-4">
                  <Image src="/agents-page/section 2/learn-how.svg" alt="Learn how solar impacts real estate" width={110} height={111} />
                </div>
                <h3
                  className="text-[#141414] text-[20px] font-medium leading-[120%] mb-2"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  Learn how solar impacts real estate
                </h3>
              </div>

              {/* Card 2 - Disclose and market solar with confidence */}
              <div className="flex min-w-[400px] flex-col items-center flex-[1_0_0] p-6 text-center" style={{ borderRadius: "10px", border: "1px solid rgba(17, 80, 86, 0.50)", background: "#FFF" }}>
                <div className="mb-4">
                  <Image src="/agents-page/section 2/disclose.svg" alt="Disclose and market solar with confidence" width={110} height={115} />
                </div>
                <h3
                  className="text-[#141414] text-[20px] font-medium leading-[120%] mb-2"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  Disclose and market solar with confidence
                </h3>
              </div>

              {/* Card 3 - Reduce delays tied to solar contracts */}
              <div className="flex min-w-[400px] flex-col items-center flex-[1_0_0] p-6 text-center" style={{ borderRadius: "10px", border: "1px solid rgba(17, 80, 86, 0.50)", background: "#FFF" }}>
                <div className="mb-4">
                  <Image src="/agents-page/section 2/reduce.svg" alt="Reduce delays tied to solar contracts" width={110} height={111} />
                </div>
                <h3
                  className="text-[#141414] text-[20px] font-medium leading-[120%] mb-2"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  Reduce delays tied to solar contracts
                </h3>
              </div>
            </div>

            {/* Bottom Row - 2 cards */}
            <div className="flex justify-center gap-6 w-full">
              {/* Card 4 - Become the go-to solar agent in your market */}
              <div className="flex min-w-[400px] flex-col items-center flex-[1_0_0] p-6 text-center" style={{ borderRadius: "10px", border: "1px solid rgba(17, 80, 86, 0.50)", background: "#FFF" }}>
                <div className="mb-4">
                  <Image src="/agents-page/section 2/solar-agent.svg" alt="Become the go-to solar agent in your market" width={110} height={111} />
                </div>
                <h3
                  className="text-[#141414] text-[20px] font-medium leading-[120%] mb-2"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  Become the go-to solar agent in your market
                </h3>
              </div>

              {/* Card 5 - Attract solar homeowners looking for certified pros */}
              <div className="flex min-w-[400px] flex-col items-center flex-[1_0_0] p-6 text-center" style={{ borderRadius: "10px", border: "1px solid rgba(17, 80, 86, 0.50)", background: "#FFF" }}>
                <div className="mb-4">
                  <Image src="/agents-page/section 2/homeowners.svg" alt="Attract solar homeowners looking for certified pros" width={110} height={111} />
                </div>
                <h3
                  className="text-[#141414] text-[20px] font-medium leading-[120%] mb-2"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  Attract solar homeowners looking for certified pros
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section - Solar in Deal */}
      <section className="mx-auto w-full  bg-[#115056]">
        <div className="max-w-[1440px] mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 ">
          <div className="rounded-[12px] flex w-[1440px] px-[94px] py-[150px] flex-col items-center gap-[80px]">
            <div className="text-center">
              <h2
                className="flex-[1_0_0] text-center text-[56px] leading-[110%] font-medium mb-4"
                style={{
                  color: "#FFF",
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}
              >
                Free Guide – Solar in the Deal
              </h2>
              <p
                className="flex-[1_0_0] text-center text-[28px] font-medium leading-[110%] mx-auto"
                style={{
                  color: "#FFF",
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}
              >
               Curious about solar? This quick read will get you started.
              </p>
              <p
                className={`${inter.className} flex-[1_0_0] text-center text-[22px] font-normal leading-[120%] mx-auto mt-2`}
                style={{ color: "rgba(255, 255, 255, 0.80)" }}
              >
                Understand how solar affects equity, what to disclose, and how to avoid delays. Whether you're listing or
                representing a buyer, this free guide will help you protect your clients and close with confidence.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left side - Image */}
              <div className="flex flex-col items-start flex-shrink-0">
                <Image
                  src="/agents-page/section 3/solar-in-deal.svg"
                  alt="Solar in Deal"
                  width={624}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              {/* Right side - Content */}
              <div className="flex h-[500px] gap-[40px] min-w-[350px] p-[50px] flex-col justify-between items-start flex-[1_0_0]" style={{ background: "#FFF" }}>
                <div className="flex flex-col  mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#115056] mt-4 flex-shrink-0"></div>
                    <p className={`${inter.className} text-[22px] font-normal `} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                    How solar affects appraisals, contracts, and buyer confidence
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#115056] mt-4 flex-shrink-0"></div>
                    <p className={`${inter.className} text-[22px] font-normal `} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                      The different types of solar ownership (and what to watch for)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#115056] mt-4 flex-shrink-0"></div>
                    <p className={`${inter.className} text-[22px] font-normal `} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                        What to ask, disclose, and document when listing or buying a solar-powered home
                    </p>
                  </div>
                </div>

                {/* Author Section */}
                <div className="flex flex-col items-start gap-[5px] self-stretch">
                  <p className={`${inter.className} flex-[1_0_0] text-[18px] font-normal leading-[120%]`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                    Presented by Sprk Founder
                  </p>
                  <h3 className="flex-[1_0_0] text-[32px] font-medium leading-[110%]" style={{ color: "#141414", fontFamily: '"Aeonik Pro", sans-serif' }}>
                    Cory Vanderpool
                  </h3>
                </div>

                <button
                  className={`${inter.className} flex p-[5px] justify-between items-center self-stretch text-[22px] font-normal text-center hover:opacity-90 transition-opacity py-[5px] px-[15px] relative`}
                  style={{ 
                    borderRadius: "5px",
                    background: "#115056",
                    color: "#FFF"
                  }}
                >
                  <span className="flex-1 text-center">Download the Free eBook</span>
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3 */}
      <HowItWorksSection
        title="How It Works"
        subtitle="Sprk Helps Agents Simplify Solar"
        step1={{
          icon: "/inspector-page/section 3/get-trained.svg",
          label: "Get Trained",
          description: "Complete Sprk's on-demand certification and learn how to inspect solar and energy systems with ease."
        }}
        step2={{
          icon: "/inspector-page/section 3/get-tools.svg",
          label: "Get Tools", 
          description: "Use the Sprk Pro app to collect data and generate polished reports in minutes right from your phone or tablet."
        }}
        step3={{
          icon: "/inspector-page/section 3/get-paid.svg",
          label: "Get Paid",
          description: "Offer more value to your clients, stand out with agents, and increase your profitability per job."
        }}
      />
      
      {/* Section 4 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[100px] pb-[100px]">
          <div >
            <h2 className="flex-1 basis-0 text-center text-[#141414] text-[80px] leading-[110%] font-medium font-['Aeonik Pro'] mb-[20px]">
              Sprk Reports for Agents
            </h2>
            <p className={`${inter.className} flex-1 basis-0 text-center text-[rgba(0,0,0,0.66)] text-[22px] leading-[120%] font-normal`}>
              Professional. Verified. Built for Real Estate.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 w-full">
            {/* Home Energy Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/agents-page/section 5/sprk-listing.svg" alt="Sprk Listing Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[80px] h-[80px] flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Sprk Listing Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                Make your solar listings easier to explain and easier to sell. Includes ownership info, utility bills, equipment condition, and financing details.
                </p>
                <div className="pt-[50px] flex items-center gap-3">
                  <button
                    className={`${inter.className} w-full flex p-[5px] justify-between items-center self-stretch text-[22px] font-normal text-center hover:opacity-90 transition-opacity py-[5px] px-[15px] relative`}
                    style={{
                      borderRadius: "5px",
                      background: "#115056",
                      color: "#FFF"
                    }}
                  >
                    <span className="flex-1 text-center">View Sample</span>
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Solar Inspection Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/agents-page/section 5/solar-inspection.svg"  alt="Solar Inspection Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[80px] h-[80px]  flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Solar Inspection Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                Order through a Sprk Certified Home Inspector to verify condition, performance, and remaining system life.
                </p>
                <div className="pt-[50px] flex items-center gap-3">
                  <button
                    className={`${inter.className} w-full flex p-[5px] justify-between items-center self-stretch text-[22px] font-normal text-center hover:opacity-90 transition-opacity py-[5px] px-[15px] relative`}
                    style={{
                      borderRadius: "5px",
                      background: "#115056",
                      color: "#FFF"
                    }}
                  >
                    <span className="flex-1 text-center">View Sample</span>
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Solar Inspection Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/agents-page/section 5/green-home.svg"  alt="Green Home Energy Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[80px] h-[80px] flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Green Home Energy Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                Help buyers see how the home performs today—and how it could perform better tomorrow.
                </p>
                <div className="pt-[50px] flex items-center gap-3">
                  <button
                    className={`${inter.className} w-full flex p-[5px] justify-between items-center self-stretch text-[22px] font-normal text-center hover:opacity-90 transition-opacity py-[5px] px-[15px] relative`}
                    style={{
                      borderRadius: "5px",
                      background: "#115056",
                      color: "#FFF"
                    }}
                  >
                    <span className="flex-1 text-center">View Sample</span>
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                      <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-[100px] sm:px-6 lg:px-8 mb-[50px]">
        <div className="flex flex-col items-center gap-[50px] pb-[100px]">
          <div className="text-center mb-8">
            <h3
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              How to Get Started with Sprk
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
            It’s Fast and Easy to Get Sprk Certified
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6">
            <div className="flex w-[170px] flex-col items-start absolute left-[250px] top-[250px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[170px] flex-col items-start absolute left-[600px] top-[180px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow Down" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[170px] flex-col items-start absolute right-[250px] top-[250px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 1
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/sign-up.svg" alt="Sign Up" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Sign Up for Free
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Create your Sprk Pro account, no upfront cost, no obligation.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 2
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/get-sprk-certified.svg" alt="Get Sprk Certified" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Get Sprk Certified
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Complete our on-demand training and start offering 15-minute solar and 5-minute energy inspections.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 3
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/add-sprk.svg" alt="Add Sprk to Your Services" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Add Sprk to Your Services
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Include Energy Reports with every inspection and Solar Reports on homes with solar, boost value and your bottom line.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 4
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/your-business.svg" alt="Grow Your Business" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                 Grow Your Business
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Use Sprk’s marketing tools and agent education resources to become the preferred inspector in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[50px] pb-[100px]">
          <div >
            <h2 className="flex-1 basis-0 text-center text-[#141414] text-[80px] leading-[110%] font-medium font-['Aeonik Pro'] mb-[20px]">
              Sprk Reports for Home Inspectors
            </h2>
            <p className={`${inter.className} flex-1 basis-0 text-center text-[rgba(0,0,0,0.66)] text-[22px] leading-[120%] font-normal`}>
              Simple to Generate. Easy to Read. Trusted by Top Inspectors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full">
            {/* Home Energy Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/inspector-page/section 6/home-energy.svg" alt="Home Energy Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[70px] flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Home Energy Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                  Estimate utility bills, outline an energy savings plan, and calculate solar needs fast.
                </p>
                <div className="flex items-center gap-3">
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] bg-[#115056] text-white text-[22px] font-normal `}>
                    View Sample <span aria-hidden>→</span>
                  </button>
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] border border-[#115056] text-[#115056] text-[22px] font-normal ]`}>
                    Learn More <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Solar Inspection Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/inspector-page/section 6/solar-inspection.svg" alt="Solar Inspection Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[70px] flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Solar Inspection Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                  Evaluate solar production, system condition, and remaining life. Spot issues before they become deal-breakers.
                </p>
                <div className="flex items-center gap-3">
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] bg-[#115056] text-white text-[22px] font-normal`}>
                    View Sample <span aria-hidden>→</span>
                  </button>
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] border border-[#115056] text-[#115056] text-[22px] font-normal`}>
                    Learn More <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Section 7 - Testimonials */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] pt-[50px] pb-[100px]">
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

      {/* Section 8 - Pricing Plans */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[30px] pt-[50px] ">
          <h2 className="flex-1 basis-0 text-center text-[#141414] text-[80px] leading-[110%] font-medium font-['Aeonik Pro']">
            Choose Your Sprk Plan
          </h2>
          <p className="flex-1 basis-0 text-center text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro']">
            Start free. Scale as you grow. 30 Days Free.
          </p>

          <div className="mt-[80px] w-full grid gap-6 md:grid-cols-3 mt-4">
            {/* Left: Homeowners + Free */}
            <div className="flex-1 flex flex-col ">
              <div className="text-[#141414] text-center text-[45px] leading-[110%] font-medium font-['Aeonik Pro']  p-4">Homeowners</div>
              <div className="rounded-[12px] border border-black/10 bg-white overflow-hidden shadow-sm h-full flex flex-col">
                <div className="bg-[#115056] text-white flex flex-col items-start gap-[25px] self-stretch px-[40px] pt-[40px] pb-[30px] rounded-t-[10px]">
                  <div className="flex w-full items-center justify-center rounded-[30px] border border-[#115056] bg-white py-[10px] px-[40px] self-stretch">
                    <div className="text-center text-[#115056] text-[38px] leading-[110%] font-bold font-['Aeonik Pro']">Free</div>
                  </div>
                  <p className={`${inter.className} mt-3 min-h-[57px] flex-1 basis-0 text-white text-[16px] leading-[120%] font-normal`}>
                    Best for inspectors new to solar. Get trained, get started, and add energy reports to every inspection.
                  </p>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="text-[#141414] font-semibold mb-2">Sprk Reports</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                    <li>✓ Energy Reports: Unlimited</li>
                    <li>✓ Solar Reports: $30 each</li>
                  </ul>
                  <div className="text-[#141414] font-semibold mb-2">Training</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                    <li>✓ Sprk Certification Training</li>
                    <li>✓ Inspection Company Startup Guide</li>
                  </ul>
                  <div className="text-[#141414] font-semibold mb-2">Marketing Resources</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                    <li>✓ Solar Agent CE Course</li>
                    <li>✓ Marketing Toolkit</li>
                    <li>✓ AI Marketing Assistant</li>
                  </ul>
                  <div className="text-[#141414] font-semibold mb-2">Sprk Apps</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-6`}>
                    <li>✓ Sprk Pro App</li>
                    <li>✓ Client Portal</li>
                  </ul>
                  <button className={`${inter.className} w-full flex justify-center items-center py-[10px] rounded-[8px] bg-[#115056] text-white text-[16px] mt-auto`}>Get Started</button>
                </div>
              </div>
            </div>

            {/* Right: Highlighted container with Home Inspectors + two plans in a row */}
            <div className="md:col-span-2 rounded-[10px] border border-[#17E817] bg-[rgba(0,255,106,0.15)] p-4">
              <div className="text-[#141414] text-center text-[45px] leading-[110%] font-medium font-['Aeonik Pro'] mb-4">Home Inspectors</div>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Launch Plan */}
                <div className="rounded-[12px] border border-black/10 bg-white overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="bg-[#115056] text-white flex flex-col items-start gap-[25px] self-stretch px-[40px] pt-[40px] pb-[30px] rounded-t-[10px]">
                    <div className="flex w-full items-center justify-center rounded-[30px] border border-[#115056] bg-white py-[10px] px-[40px] self-stretch">
                      <div className="text-center text-[#115056] text-[38px] leading-[110%] font-bold font-['Aeonik Pro']">Launch Plan</div>
                    </div>
                    <div className="mt-3 flex justify-center items-center gap-[10px] flex-1 basis-0">
                      <span className="text-white text-[30px] leading-[110%] font-medium font-['Aeonik Pro']">$20</span>
                      <span className={`${inter.className} flex-1 basis-0 text-white text-[22px] leading-[110%] font-medium`}>/mo per inspector</span>
                    </div>
                    <p className={`${inter.className} mt-3 min-h-[57px] flex-1 basis-0 text-white text-[16px] leading-[120%] font-normal`}>
                      Best for inspectors new to solar. Get trained, get started, and add energy reports to every inspection.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                   
                    <div className="text-[#141414] font-semibold mb-2">Sprk Reports</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Energy Reports: Unlimited</li>
                      <li>✓ Solar Reports: $30 each</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Training</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Sprk Certification Training</li>
                      <li>✓ Inspection Company Startup Guide</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Marketing Resources</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Solar Agent CE Course</li>
                      <li>✓ Marketing Toolkit</li>
                      <li>✓ AI Marketing Assistant</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Sprk Apps</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-6`}>
                      <li>✓ Sprk Pro App</li>
                      <li>✓ Client Portal</li>
                    </ul>
                    <button className={`${inter.className} w-full flex justify-center items-center py-[10px] rounded-[8px] bg-[#115056] text-white text-[16px] mt-auto`}>Get Started</button>
                  </div>
                </div>

                {/* Growth Plan */}
                <div className="rounded-[12px] border border-black/10 bg-white overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="bg-[#115056] text-white flex flex-col items-start gap-[25px] self-stretch px-[40px] pt-[40px] pb-[30px] rounded-t-[10px]">
                    <div className="flex w-full items-center justify-center rounded-[30px] border border-[#115056] bg-white py-[10px] px-[40px] self-stretch">
                      <div className="text-center text-[#115056] text-[38px] leading-[110%] font-bold font-['Aeonik Pro']">Growth Plan</div>
                    </div>
                    <div className="mt-3 flex justify-center items-center gap-[10px] flex-1 basis-0">
                      <span className="text-white text-[30px] leading-[110%] font-medium font-['Aeonik Pro']">$99</span>
                      <span className={`${inter.className} flex-1 basis-0 text-white text-[22px] leading-[110%] font-medium`}>/mo per inspector</span>
                    </div>
                    <p className={`${inter.className} mt-3 min-h-[57px] flex-1 basis-0 text-white text-[16px] leading-[120%] font-normal`}>
                      Best for inspectors growing with solar. Includes free solar reports, advanced marketing tools, and full support.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                
                    <div className="text-[#141414] font-semibold mb-2">Sprk Reports</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Energy Reports: Unlimited</li>
                      <li>✓ Solar Reports: 8 included/month, then $30 each</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Training</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Sprk Certification Training</li>
                      <li>✓ Inspection Company Startup Guide</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Marketing Resources</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Solar Agent CE Course</li>
                      <li>✓ Marketing Toolkit</li>
                      <li>✓ AI Marketing Assistant</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Sprk Apps</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-6`}>
                      <li>✓ Sprk Pro App</li>
                      <li>✓ Client Portal</li>
                    </ul>
                    <button className={`${inter.className} w-full flex justify-center items-center py-[10px] rounded-[8px] bg-[#115056] text-white text-[16px] mt-auto`}>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </>
     );
}


