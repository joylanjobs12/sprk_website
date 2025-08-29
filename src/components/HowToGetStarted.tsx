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

  return (
    <div className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[100px] relative size-full">
      <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center">
            <p className="leading-[1.1]">{title}</p>
          </div>
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] text-center">
            <p className="leading-[1.1]">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-5 items-start justify-start relative shrink-0 w-[1248px]">
        {/* Dynamic Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="basis-0 bg-white content-stretch flex flex-col grow items-center justify-start min-h-px min-w-[295px] overflow-clip relative rounded-[10px] shrink-0"
          >
            <div className="bg-white box-border content-stretch flex flex-col items-center justify-start min-w-[295px] px-0 py-[50px] relative shrink-0 w-full">
              <div className="bg-[rgba(86,205,69,0.05)] box-border content-stretch flex items-start justify-center px-10 py-2.5 relative rounded-[50px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#56cd45] border-solid inset-0 pointer-events-none rounded-[50px]" />
                <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#56cd45] text-[28px] text-center text-nowrap">
                  <p className="leading-[1.1] whitespace-pre">Step {index + 1}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex items-center justify-center px-[30px] py-10 relative shrink-0 w-full">
                <div className="bg-[#115056] content-stretch flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] shrink-0 size-[150px]">
                  <div aria-hidden="true" className="absolute border-[10px] border-[rgba(144,228,193,0.1)] border-solid inset-[-10px] pointer-events-none rounded-[110px] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]" />
                  <div className="overflow-clip relative shrink-0 size-[90px]">
                    <img 
                      alt={step.label} 
                      className="block max-w-none size-full" 
                      src={step.icon} 
                    />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-start justify-start min-h-[60px] px-[30px] py-0 relative shrink-0 w-full">
                  <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[0] min-h-[90px] min-w-px not-italic relative shrink-0 text-[#141414] text-[27px] text-center">
                    <p className="leading-[1.1]">{step.label}</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex items-center justify-start min-h-[110px] px-[30px] py-0 relative shrink-0 w-full">
                  <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-[154px] min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)] text-center">
                    <p className="leading-[1.2]">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Arrow decorations between steps */}
        <div className="absolute flex h-[22px] items-center justify-center left-[247px] top-[238px] w-[119px]">
          <div className="h-[22px] relative w-[119px]">
            <div className="absolute inset-[-22.71%_-0.84%_-4.95%_-0.29%]">
              <img 
                alt="" 
                className="block max-w-none w-full h-full" 
                src="/inspector-page/section 5/arrow-up.svg" 
              />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[22px] items-center justify-center left-[563px] top-[185px] w-[119px]">
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[22px] relative w-[119px]">
              <div className="absolute inset-[-22.2%_-0.84%_-2.56%_-0.29%]">
                <img 
                  alt="" 
                  className="block max-w-none w-full h-full" 
                  src="/inspector-page/section 5/arrow-up.svg" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[21.5px] left-[882px] top-[238px] w-[119px]">
          <div className="absolute inset-[-22.71%_-0.84%_-4.95%_-0.29%]">
            <img 
              alt="" 
              className="block max-w-none w-full h-full" 
              src="/inspector-page/section 5/arrow-up.svg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStarted;
