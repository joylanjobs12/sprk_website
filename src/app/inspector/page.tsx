import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function InspectorPage() {
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
            <span>Add Solar Inspections</span>{" "}
            <span style={{ color: "var(--Text-Title, #141414)" }}>to</span>
            <br />
            <span style={{ color: "var(--Text-Title, #141414)" }}>Grow Your Business</span>
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
            Sprk equips home inspectors with the training, tools, and reports to inspect solar and energy
            systems confidently, deliver more value, and grow revenue on every job.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#join"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-[#115056] text-white text-[14px] font-semibold leading-[110%]"
            >
              Join Sprk
            </Link>
            <Link
              href="#demo"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-white border border-[#115056] text-[#115056] text-[14px] font-semibold leading-[110%]"
            >
              Watch a Demo
            </Link>
          </div>

          <div className="w-full pt-8 sm:pt-10 lg:pt-12 flex flex-col items-center gap-[25px] self-stretch">
            <p className="text-center text-xs tracking-wide opacity-70">Trusted by:</p>
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
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[50px] pb-[100px]">
          <h2
            className="text-center mb-8"
            style={{
              flex: "1 0 0",
              color: "#141414",
              textAlign: "center",
              fontFamily: '"Aeonik Pro", sans-serif',
              fontSize: 56,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "110%",
            }}
          >
            Why Home Inspectors Choose Sprk
          </h2>
          <div
            className="rounded-[12px] border bg-white overflow-hidden"
            style={{ borderColor: "rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="p-4 sm:p-6 flex items-start justify-center" style={{ display: "flex", height: 500, minWidth: 350, alignItems: "flex-start", alignSelf: "stretch", background: "lightgray -22px 57.396px / 107.051% 77.042%" }}>
                <Image
                  src="/inspector-page/section 2/next-big-shift.svg"
                  alt="Skrp app devices mockup"
                  width={720}
                  height={420}
                  priority
                />
              </div>
              <div className="p-6 sm:p-8 md:border-l" style={{ borderColor: "rgba(0, 0, 0, 0.10)" }}>
                <h3
                  style={{
                    flex: "1 0 0",
                    color: "#141414",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 35,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  The Next Big Shift in Inspections Is Here
                </h3>
                <div className="mt-4 space-y-4">
                  <p
                    className={`${inter.className}`}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(0, 0, 0, 0.66)",
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 22,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    Over 5 million homes in the U.S. now have solar, and most still don’t get inspected.
                  </p>
                  <p
                    className={`${inter.className}`}
                    style={{
                      flex: "1 0 0",
                      color: "rgba(0, 0, 0, 0.66)",
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 22,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    But 30% of solar systems have issues that should be flagged before a home changes hands. Smart inspectors are stepping in. Sprk helps them lead.
                  </p>
                </div>
              </div>
            </div>
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
                  Complete Sprk’s on-demand certification and learn how to inspect solar and energy systems with ease.
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
      {/* Section 4 */}
      <section className="mx-auto w-full bg-[var(--Primary-Color,#115056)]">
        <div className="max-w-[1440px] mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 ">
          <div className="rounded-[12px] flex w-[1440px] px-[94px] py-[150px] flex-col items-center gap-[80px]">
            <div className="text-center">
              <h3 className="flex-1 basis-0 text-white text-center text-[56px] leading-[110%] font-medium">
                What Sprk Does for Home Inspectors
              </h3>
            </div>
            <div className="px-4 pb-[40px] sm:pb-[50px] lg:pb-[60px]">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/add-hunderds.svg" alt="Add hundreds in extra revenue per inspection" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Add hundreds in extra revenue per inspection
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/get-certified.svg" alt="Get certified to inspect solar and energy systems" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Get certified to inspect solar and energy systems
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/complete-solar.svg" alt="Complete solar inspections in as little as 15 minutes" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Complete solar inspections in as little as 15 minutes
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 mt-6 justify-center">
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/generate-clean.svg" alt="Generate clean, easy-to-read solar and energy reports" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Generate clean, easy-to-read solar and energy reports
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/solar-expert.svg" alt="Become the go-to solar expert in your market" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Become the go-to solar expert in your market
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
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
    </>
  );
}


