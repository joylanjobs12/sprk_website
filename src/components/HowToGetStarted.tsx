import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Step {
  icon: string;
  label: string;
  description: string;
}

interface HowToGetStartedProps {
  title: string;
  subtitle: string;
  step1: Step;
  step2: Step;
  step3: Step;
  step4: Step;
}

const HowToGetStarted: React.FC<HowToGetStartedProps> = ({
  title,
  subtitle,
  step1,
  step2,
  step3,
  step4,
}) => {
  const steps = [step1, step2, step3, step4];

  return (
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
            {title}
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
            {subtitle}
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-6">
          {/* Arrow decorations */}
          <div className="flex w-[170px] flex-col items-start absolute left-[250px] top-[250px]" aria-hidden="true">
            <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
          </div>
          <div className="flex w-[170px] flex-col items-start absolute left-[600px] top-[180px]" aria-hidden="true">
            <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow Down" width={224} height={60} className="w-full h-auto" />
          </div>
          <div className="flex w-[170px] flex-col items-start absolute right-[250px] top-[250px]" aria-hidden="true">
            <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
          </div>

          {/* Dynamic Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px] bg-white px-0 py-[50px]"
              style={{ background: "#FFF" }}
            >
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
                Step {index + 1}
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
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={90}
                    height={90}
                    className="w-[90px] h-[90px] aspect-square"
                  />
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
                  {step.label}
                </div>
                <p
                  className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: "rgba(0, 0, 0, 0.66)",
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
