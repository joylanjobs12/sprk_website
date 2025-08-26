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
    </section>
  );
}
