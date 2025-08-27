import Image from "next/image";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import CTA from "@/components/CTA";

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
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 py-[100px]">
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
            Why Sprk Exists
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
            Solar is valuable but misunderstood. Sprk bridges the gap. We bring together the professionals who serve solar homeowners with the reports, referrals, and training needed to simplify complex solar real estate.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div
            className="flex h-[511px] min-w-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border bg-white p-4"
            style={{ borderColor: "rgba(0, 0, 0, 0.15)" }}
          >
            <Image src="/home-page/section 2/standard-reports.svg" alt="Standardized Reports" width={480} height={300} className="w-full h-auto" />
            <div className="px-2 py-4 w-full">
              <div
                className="flex-[1_0_0]"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontSize: 32,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: '22px'
                }}
              >
                Standardized Reports
              </div>
              <p
                className={`${inter.className} flex-[1_0_0]`}
                style={{
                  color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                Make solar and energy data visible and valuation-ready.
              </p>
            </div>
          </div>

          <div
            className="flex h-[511px] min-w-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border bg-white p-4"
            style={{ borderColor: "rgba(0, 0, 0, 0.15)" }}
          >
            <Image src="/home-page/section 2/role-specific-training.svg" alt="Role-Specific Training" width={480} height={300} className="w-full h-auto" />
            <div className="px-2 py-4 w-full">
              <div
                className="flex-[1_0_0]"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontSize: 32,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: '22px'
                }}
              >
                Role-Specific Training
              </div>
              <p
                className={`${inter.className} flex-[1_0_0]`}
                style={{
                  color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  marginBottom: '22px'
                }}
              >
                Equip professionals with the tools to lead confident solar transactions.
              </p>
            </div>
          </div>

          <div
            className="flex h-[511px] min-w-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border bg-white p-4"
            style={{ borderColor: "rgba(0, 0, 0, 0.15)" }}
          >
            <Image src="/home-page/section 2/smart-connections.svg" alt="Smart Connections" width={480} height={300} className="w-full h-auto" />
            <div className="px-2 py-4 w-full">
              <div
                className="flex-[1_0_0]"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontSize: 32,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: '22px'
                }}
              >
                Smart Connections
              </div>
              <p
                className={`${inter.className} flex-[1_0_0]`}
                style={{
                  color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                Sprk connects buyers, sellers, agents, inspectors, and solar pros to support smooth, informed home transfers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 flex flex-col items-center gap-[50px] pt-[50px] pb-[100px]">
        <div className="flex flex-col items-center gap-[30px] self-stretch text-center">
          <h3
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
            Sprk Reports
          </h3>
          <p
            className="mt-3 mx-auto"
            style={{
              flex: "1 0 0",
              color: "#141414",
              textAlign: "center",
              fontFamily: '"Aeonik Pro"',
              fontSize: 35,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "110%",
            }}
          >
            Built for real estate. Backed by data. Trusted by professionals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex min-w-[294px] min-h-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border " style={{ borderColor: "rgba(0, 0, 0, 0.15)", background: "#F9FAFB" }}>
            <div className="flex flex-col items-start gap-[20px] self-stretch p-[30px]" style={{ background: "#FFF" }}>
              <div className="flex items-center p-[15px] rounded-[10px] border mb-4" style={{ borderColor: "rgba(17, 80, 86, 0.15)", background: "#FFF" }}>
                <Image src="/home-page/section 4/home-energy-report.svg" alt="Home Energy Report" width={60} height={62} className="w-[60px] h-[62px] aspect-[30/31]" />
              </div>
              <div
                style={{
                  minHeight: 66,
                  flex: "1 0 0",
                  color: "#141414",
                  fontFamily: '"Aeonik Pro"',
                  fontSize: 30,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: 12,
                }}
              >
                Home Energy
                <br />
                Report
              </div>
            </div>
            <div className="flex p-[30px] justify-center items-start self-stretch">
              <p
                className={`${inter.className}`}
                style={{
                  minHeight: 110,
                  flex: "1 0 0",
                  color: "rgba(0, 0, 0, 0.66)",
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                Estimate monthly energy bills, uncover savings opportunities, and calculate solar potential.
              </p>
            </div>
          </div>

          <div className="flex min-w-[294px] min-h-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border " style={{ borderColor: "rgba(0, 0, 0, 0.15)", background: "#F9FAFB" }}>
            <div className="flex flex-col items-start gap-[20px] self-stretch p-[30px]" style={{ background: "#FFF" }}>
              <div className="flex items-center p-[15px] rounded-[10px] border mb-4" style={{ borderColor: "rgba(17, 80, 86, 0.15)", background: "#FFF" }}>
                <Image src="/home-page/section 4/solar-inspection-report.svg" alt="Solar Inspection Report" width={60} height={62} className="w-[60px] h-[62px] aspect-[30/31]" />
              </div>
              <div
                style={{
                  minHeight: 66,
                  flex: "1 0 0",
                  color: "#141414",
                  fontFamily: '"Aeonik Pro"',
                  fontSize: 30,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: 12,
                }}
              >
                Solar Inspection
                <br />
                Report
              </div>
            </div>
            <div className="flex p-[30px] justify-center items-start self-stretch">
              <p
                className={`${inter.className}`}
                style={{
                  minHeight: 110,
                  flex: "1 0 0",
                  color: "rgba(0, 0, 0, 0.66)",
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                Confirm system performance, remaining life, and identify any solar-related issues.
              </p>
            </div>
          </div>

          <div className="flex min-w-[294px] min-h-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border " style={{ borderColor: "rgba(0, 0, 0, 0.15)", background: "#F9FAFB" }}>
            <div className="flex flex-col items-start gap-[20px] self-stretch p-[30px]" style={{ background: "#FFF" }}>
              <div className="flex items-center p-[15px] rounded-[10px] border mb-4" style={{ borderColor: "rgba(17, 80, 86, 0.15)", background: "#FFF" }}>
                <Image src="/home-page/section 4/solar-listing-report.svg" alt="Solar Listing Report" width={60} height={62} className="w-[60px] h-[62px] aspect-[30/31]" />
              </div>
              <div
                style={{
                  minHeight: 66,
                  flex: "1 0 0",
                  color: "#141414",
                  fontFamily: '"Aeonik Pro"',
                  fontSize: 30,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: 12,
                }}
              >
                Solar Listing
                <br />
                Report
              </div>
            </div>
            <div className="flex p-[30px] justify-center items-start self-stretch">
              <p
                className={`${inter.className}`}
                style={{
                  minHeight: 110,
                  flex: "1 0 0",
                  color: "rgba(0, 0, 0, 0.66)",
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                Showcase solar benefits, disclose financing details, and simplify the transfer process.
              </p>
            </div>
          </div>

          <div className="flex min-w-[294px] min-h-[400px] flex-col items-center flex-[1_0_0] rounded-[10px] border " style={{ borderColor: "rgba(0, 0, 0, 0.15)", background: "#F9FAFB" }}>
            <div className="flex flex-col items-start gap-[20px] self-stretch p-[30px]" style={{ background: "#FFF" }}>
              <div className="flex items-center p-[15px] rounded-[10px] border mb-4" style={{ borderColor: "rgba(17, 80, 86, 0.15)", background: "#FFF" }}>
                <Image src="/home-page/section 4/green-home-appraisal-report.svg" alt="Green Home Appraisal Report" width={60} height={62} className="w-[60px] h-[62px] aspect-[30/31]" />
              </div>
              <div
                style={{
                  minHeight: 66,
                  flex: "1 0 0",
                  color: "#141414",
                  fontFamily: '"Aeonik Pro"',
                  fontSize: 30,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  marginBottom: 12,
                }}
              >
                Green Home
                <br />
                Appraisal Report
              </div>
            </div>
            <div className="flex p-[30px] justify-center items-start self-stretch">
              <p
                className={`${inter.className}`}
                style={{
                  minHeight: 110,
                  flex: "1 0 0",
                  color: "rgba(0, 0, 0, 0.66)",
                  fontFamily: 'Inter',
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                Provide appraisers and lenders with certified solar and energy data for accurate valuation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Section 3 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 pb-[100px]">
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
                <Image src="/home-page/section 3/input-home-info.svg" alt="Input Home Info" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
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
                Input Home Info
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
                Use a Sprk Certified Pro or become one to evaluate solar and home energy upgrades using the Sprk Pro app.
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
                <Image src="/home-page/section 3/generate-sprk-report.svg" alt="Generate Sprk Report" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
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
                Generate Sprk Report
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
                We compile data into a standardized, easy-to-read report in minutes.
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
                <Image src="/home-page/section 3/solar-clarity.svg" alt="Solar Clarity" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
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
                Get Solar Clarity
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
                Share with clients or keep for reference—act with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mx-auto w-full bg-[var(--Primary-Color,#115056)]">
        <div className="max-w-[1440px] mx-auto max-w-[1440px] sm:p-[50px] lg:p-[100px] mt-24 ">
          <div className="flex flex-col items-center gap-[20px] self-stretch text-center">
            <h3
              className="flex-[1_0_0] text-white text-center text-[56px] leading-[110%] font-medium"
              style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
            >
              Solar is Growing!
            </h3>
            <p
              className={`${inter.className} mt-2 flex-[1_0_0] text-center text-[22px] leading-[120%] font-normal text-[rgba(255,255,255,0.80)]`}
            >
              More than 5 million U.S. homeowners have already gone solar, and we’re just getting started.
              Use the map to explore solar adoption rates and market size across all 50 states.
            </p>
          </div>
          <div className="w-full flex justify-center mt-6">
            <Image
              src="/home-page/section 5/solar-home-map.svg"
              alt="Solar Home Market Size map"
              width={1280}
              height={500}
              className="w-full max-w-[1280px]"
            />
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 pb-[100px]">
        <div className="flex w-[1248px] flex-col items-center gap-[50px] mx-auto">
          <div className="flex flex-col items-center gap-[30px] self-stretch text-center">
            <h3
              className="flex-[1_0_0] text-center text-[#141414] text-[40px] leading-[120%] font-semibold"
              style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
            >
              Why Choose Sprk Certified Pros?
            </h3>
          </div>

          <div className="flex flex-col gap-[30px] mt-4">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-[30px]">
              {/* Card 1 - Inspectors */}
              <div className="w-full md:w-[60%] rounded-[10px] border border-[rgba(17,80,86,0.50)] bg-white overflow-hidden shadow-[0_63px_25px_0_rgba(38,142,151,0.02),_0_36px_21px_0_rgba(38,142,151,0.08),_0_16px_16px_0_rgba(38,142,151,0.13),_0_4px_9px_0_rgba(38,142,151,0.10)]">
                <div className="p-[30px] flex items-center gap-[30px] w-full border-b border-b-[#A5DCDF]">
                  <Image src="/home-page/section 6/inspectors.svg" alt="Certified Inspectors" width={60} height={60} className="w-[60px] h-[60px]" />
                  <div className="text-left" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>
                    <div className="text-[#141414] text-[22px] font-medium leading-[120%]">Certified<br />Inspectors</div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] p-[30px] w-full">
                  <p className={`${inter.className} text-[16px] leading-[130%]`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                    Trained to understand solar—not just work around it
                  </p>
                </div>
              </div>

              {/* Card 2 - Agents */}
              <div className="w-full md:w-[40%] rounded-[10px] border border-[rgba(17,80,86,0.50)] bg-white overflow-hidden shadow-[0_63px_25px_0_rgba(38,142,151,0.02),_0_36px_21px_0_rgba(38,142,151,0.08),_0_16px_16px_0_rgba(38,142,151,0.13),_0_4px_9px_0_rgba(38,142,151,0.10)]">
                <div className="p-[30px] flex items-center gap-[30px] w-full border-b border-b-[#A5DCDF]">
                  <Image src="/home-page/section 6/agents.svg" alt="Certified Agents" width={60} height={60} className="w-[60px] h-[60px]" />
                  <div className="text-left" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>
                    <div className="text-[#141414] text-[22px] font-medium leading-[120%]">Certified<br />Agents</div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] p-[30px] w-full">
                  <p className={`${inter.className} text-[16px] leading-[130%]`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                    Certified in energy, disclosure, and valuation practices
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-[30px]">
              {/* Card 3 - Solar Pros */}
              <div className="w-full md:w-[40%] rounded-[10px] border border-[rgba(17,80,86,0.50)] bg-white overflow-hidden shadow-[0_63px_25px_0_rgba(38,142,151,0.02),_0_36px_21px_0_rgba(38,142,151,0.08),_0_16px_16px_0_rgba(38,142,151,0.13),_0_4px_9px_0_rgba(38,142,151,0.10)]">
                <div className="p-[30px] flex items-center gap-[30px] w-full border-b border-b-[#A5DCDF]">
                  <Image src="/home-page/section 6/solar-pros.svg" alt="Certified Solar Pros" width={60} height={60} className="w-[60px] h-[60px]" />
                  <div className="text-left" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>
                    <div className="text-[#141414] text-[22px] font-medium leading-[120%]">Certified<br />Solar Pros</div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] p-[30px] w-full">
                  <p className={`${inter.className} text-[16px] leading-[130%]`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                    Use Sprk Reports to document, explain, and protect solar investments
                  </p>
                </div>
              </div>

              {/* Card 4 - Reports */}
              <div className="w-full md:w-[60%] rounded-[10px] border border-[rgba(17,80,86,0.50)] bg-white overflow-hidden shadow-[0_63px_25px_0_rgba(38,142,151,0.02),_0_36px_21px_0_rgba(38,142,151,0.08),_0_16px_16px_0_rgba(38,142,151,0.13),_0_4px_9px_0_rgba(38,142,151,0.10)]">
                <div className="p-[30px] flex items-center gap-[30px] w-full border-b border-b-[#A5DCDF]">
                  <Image src="/home-page/section 6/reports.svg" alt="Certified Reports" width={60} height={60} className="w-[60px] h-[60px]" />
                  <div className="text-left" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>
                    <div className="text-[#141414] text-[22px] font-medium leading-[120%]">Certified<br />Reports</div>
                  </div>
                </div>
                <div className="bg-[#F9FAFB] p-[30px] w-full">
                  <p className={`${inter.className} text-[16px] leading-[130%]`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
                    Trusted by agents, buyers, sellers, and lenders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
