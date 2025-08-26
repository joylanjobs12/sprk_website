import Image from "next/image";
import { Inter } from "next/font/google";

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

      {/* Section 2 */}
      <section className="mt-24 py-[100px]">
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
    </section>
  );
}
