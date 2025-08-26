import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function InspectorPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[96px] pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
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
    </>
  );
}


