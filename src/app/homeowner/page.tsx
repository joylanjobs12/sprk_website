import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function HomeownerPage() {
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
            <span>Sprk Stands with Solar</span>
            <br />
            <span style={{ color: "var(--Text-Title, #141414)" }}>Homeowners</span>
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
            You've invested in the future. Sprk is here to help protect your green investment—whether
            you're thinking about solar, troubleshooting a system, or preparing to buy or sell a solar-powered home.
          </p>

          <div className="flex justify-center items-center content-center gap-[15px] self-stretch flex-wrap pt-2">
            <Link
              href="#find-solar-pro"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-[#115056] text-white text-[14px] font-semibold leading-[110%]"
            >
              Find a Certified Solar Pro
            </Link>
            <Link
              href="#find-agent"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-[#F1FAFA] border border-[#115056] text-[#115056] text-[14px] font-semibold leading-[110%]"
            >
              Find a Certified Real Estate Agent
            </Link>
            <Link
              href="#find-inspector"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] border border-[#115056] text-[#115056] text-[14px] font-semibold leading-[110%]"
            >
              Find a Certified Home Inspector
            </Link>
          </div>

        </div>
      </section>
      {/* Section 2 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-[80px]">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-[30px] self-stretch">
            <h2
              className="mb-4"
              style={{
                color: "#141414",
                textAlign: "center",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 56,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              You're Leading the Way
            </h2>
            <p
              className={`${inter.className} mx-auto`}
              style={{
                color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: 22,
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
              }}
            >
              Solar homeowners are making one of the smartest investments—for their home and for the planet.
              Whether you installed solar years ago, are just getting started, or are trying to understand what your
              system is worth, Sprk exists to bring clarity to the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Card 1 */}
            <div className="rounded-[12px] border border-gray-200 bg-white overflow-hidden shadow-sm aspect-[3/4] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/homeowners-page/section 2/investment.svg"
                  alt="Your solar investment is documented and valued properly"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex px-[30px] py-[50px] flex-col justify-center items-center gap-[20px] self-stretch bg-[#F9FAFB] flex-1">
                <h3
                  className="text-center"
                  style={{
                    color: "#141414",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                  }}
                >
                  Your solar investment is documented and valued properly
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[12px] border border-gray-200 bg-white overflow-hidden shadow-sm aspect-[3/4] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/homeowners-page/section 2/avoid-confusion.svg"
                  alt="You avoid confusion during appraisals, refinancing, or home sales"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex px-[30px] py-[50px] flex-col justify-center items-center gap-[20px] self-stretch bg-[#F9FAFB] flex-1">
                <h3
                  className="text-center"
                  style={{
                    color: "#141414",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                  }}
                >
                  You avoid confusion during appraisals, refinancing, or home sales
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[12px] border border-gray-200 bg-white overflow-hidden shadow-sm aspect-[3/4] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/homeowners-page/section 2/with-professionals.svg"
                  alt="You work with professionals who understand how to represent your solar home"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex px-[30px] py-[50px] flex-col justify-center items-center gap-[20px] self-stretch bg-[#F9FAFB] flex-1">
                <h3
                  className="text-center"
                  style={{
                    color: "#141414",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                  }}
                >
                  You work with professionals who understand how to represent your solar home
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p
              className="max-w-2xl mx-auto"
              style={{
                color: "rgba(0, 0, 0, 0.66)",
                textAlign: "center",
                fontFamily: '"Aeonik Pro"',
                fontSize: 32,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              You're doing the right thing. We're here to make sure the solar and real estate industries catch up.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[50px] pb-[100px]">
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
              How Sprk Works
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
              Three simple steps to get clear solar insights and confident decisions.
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6">
            <div className="flex w-[260px] flex-col items-start absolute left-[330px] top-[236px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[260px] flex-col items-start absolute right-[330px] top-[168px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow Down" width={224} height={60} className="w-full h-auto" />
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
                  <Image src="/inspector-page/section 3/get-trained.svg" alt="Get Trained" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
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
                  Get Trained
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
                  Complete Sprk's on-demand certification and learn how to inspect solar and energy systems with ease.
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
                  <Image src="/inspector-page/section 3/get-tools.svg" alt="Get Tools" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
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
                  Get Tools
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
                  Use the Sprk Pro app to collect data and generate polished reports in minutes right from your phone or tablet.
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
                  <Image src="/inspector-page/section 3/get-paid.svg" alt="Get Paid" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
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
                  Get Paid
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
                 Offer more value to your clients, stand out with agents, and increase your profitability per job.
                </p>
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
            It's Fast and Easy to Get Sprk Certified
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
                 Use Sprk's marketing tools and agent education resources to become the preferred inspector in your market.
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
                    "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy
                    reports for our clients."
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
