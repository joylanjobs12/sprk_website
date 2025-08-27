import React from "react";
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
  
  // Figma asset URLs for icons
  const figmaIcons = [
    "http://localhost:3845/assets/32639ba300274214a1268eb370474e6800361a89.svg", // Step 1 - Calculator
    "http://localhost:3845/assets/2656637937085e89c31fcd4491b07101c2bf23ba.svg", // Step 2 - Home Energy Report (main icon)
    "http://localhost:3845/assets/2df9503ab896a642d4cb298a6e00a497a5fb2a3e.svg", // Step 3 - Inspection Report (main icon)
    "http://localhost:3845/assets/8919c443a095577e6d209ad891fadc03578e34f2.svg", // Step 4 - Listing Report (main icon)
  ];

  return (
    <section className="mx-auto w-full max-w-[1440px] px-24 py-[100px]">
      <div className="flex flex-col items-center gap-[50px]">
        <div className="flex flex-col gap-5 items-center w-full">
          <div className="flex items-start justify-center w-full">
            <h2
              className="text-center"
              style={{
                fontFamily: "Aeonik Pro",
                fontSize: "56px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
                color: "#141414",
              }}
            >
              {title}
            </h2>
          </div>
          <div className="flex items-start justify-center w-full">
            <p
              className={`${inter.className} text-center`}
              style={{
                fontFamily: "Inter",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "120%",
                color: "#141414",
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-5 items-start justify-start w-[1248px]">
          {/* Arrow decorations */}
          <div className="absolute flex h-[22px] items-center justify-center left-[563px] top-[185px] w-[119px]">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[22px] relative w-[119px]">
                <div className="absolute inset-[-22.2%_-0.84%_-2.56%_-0.29%]">
                  <img 
                    alt="" 
                    className="block max-w-none w-full h-full" 
                    src="http://localhost:3845/assets/054f20bfb7bd77ae27b4ebd1ca0e85a911d88156.svg" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[21.5px] left-[247px] top-[238px] w-[119px]">
            <div className="absolute inset-[-22.71%_-0.84%_-4.95%_-0.29%]">
              <img 
                alt="" 
                className="block max-w-none w-full h-full" 
                src="http://localhost:3845/assets/8919c443a095577e6d209ad891fadc03578e34f2.svg" 
              />
            </div>
          </div>
          <div className="absolute h-[21.5px] left-[882px] top-[238px] w-[119px]">
            <div className="absolute inset-[-22.71%_-0.84%_-4.95%_-0.29%]">
              <img 
                alt="" 
                className="block max-w-none w-full h-full" 
                src="http://localhost:3845/assets/8919c443a095577e6d209ad891fadc03578e34f2.svg" 
              />
            </div>
          </div>

          {/* Dynamic Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="basis-0 bg-white flex flex-col grow items-center justify-start min-h-px min-w-[295px] overflow-clip relative rounded-[10px] shrink-0"
            >
              <div className="bg-white flex flex-col items-center justify-start min-w-[295px] px-0 py-[50px] w-full">
                <div className="bg-[rgba(86,205,69,0.05)] flex items-start justify-center px-10 py-2.5 relative rounded-[50px] border border-[#56cd45]">
                  <div
                    className={`${inter.className} text-center text-nowrap`}
                    style={{
                      fontFamily: "Inter",
                      fontSize: "28px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "110%",
                      color: "#56cd45",
                    }}
                  >
                    Step {index + 1}
                  </div>
                </div>
                <div className="flex items-center justify-center px-[30px] py-10 w-full">
                  <div className="bg-[#115056] flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] w-[150px] h-[150px] border-[10px] border-[rgba(144,228,193,0.1)] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]">
                    <div className="flex items-center justify-center relative rounded-[50px]">
                      <div className="overflow-clip relative w-[90px] h-[90px]">
                        <img 
                          alt={step.label} 
                          className="block max-w-none w-full h-full" 
                          src={figmaIcons[index]} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start w-full">
                  <div className="flex items-start justify-start min-h-[60px] px-[30px] py-0 w-full">
                    <div
                      className="text-center min-h-[90px] flex-1"
                      style={{
                        fontFamily: "Aeonik Pro",
                        fontSize: "27px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "110%",
                        color: "#141414",
                      }}
                    >
                      {step.label}
                    </div>
                  </div>
                  <div className="flex items-center justify-start min-h-[110px] px-[30px] py-0 w-full">
                    <p
                      className={`${inter.className} text-center min-h-[154px] flex-1`}
                      style={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "120%",
                        color: "rgba(0, 0, 0, 0.66)",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
