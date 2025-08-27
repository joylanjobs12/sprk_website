import Image from "next/image";

interface Step {
  icon: string;
  label: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string;
  subtitle: string;
  step1: Step;
  step2: Step;
  step3: Step;
}

export default function HowItWorksSection({
  title,
  subtitle,
  step1,
  step2,
  step3
}: HowItWorksSectionProps) {
  const steps = [step1, step2, step3];

  return (
    <section className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[100px] relative size-full">
      <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <div 
            className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[56px] text-black text-center"
            style={{
              fontFamily: '"Aeonik Pro", sans-serif',
              fontWeight: 500,
            }}
          >
            {title}
          </div>
        </div>
        {subtitle && (
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <div 
              className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[35px] text-center"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                fontWeight: 500,
                color: "#141414",
              }}
            >
              {subtitle}
            </div>
          </div>
        )}
      </div>
      <div className="content-start flex flex-wrap gap-5 items-start justify-start relative shrink-0 w-[1248px]">
        {steps.map((step, index) => (
          <div key={index} className="basis-0 bg-white content-stretch flex flex-col grow items-center justify-start min-h-px min-w-[400px] overflow-clip relative rounded-[10px] shrink-0">
            <div className="bg-white box-border content-stretch flex flex-col items-center justify-start min-w-[295px] px-0 py-[50px] relative shrink-0 w-full">
              <div className="bg-[rgba(86,205,69,0.05)] box-border content-stretch flex items-start justify-center px-10 py-2.5 relative rounded-[50px] shrink-0">
                <div className="absolute border border-[#56cd45] border-solid inset-0 pointer-events-none rounded-[50px]" />
                <div 
                  className="leading-[1.1] not-italic relative shrink-0 text-[#56cd45] text-[28px] text-center text-nowrap"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  Step {index + 1}
                </div>
              </div>
              <div className="box-border content-stretch flex items-center justify-center px-[30px] py-10 relative shrink-0 w-full">
                <div className="bg-[#115056] content-stretch flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] shrink-0 size-[150px]">
                  <div className="absolute border-[10px] border-[rgba(144,228,193,0.1)] border-solid inset-[-10px] pointer-events-none rounded-[110px] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]" />
                  <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[90px]">
                      <Image src={step.icon} alt={step.label} width={90} height={90} className="block max-w-none size-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-start justify-start min-h-[60px] px-[30px] py-0 relative shrink-0 w-full">
                  <div 
                    className="basis-0 grow leading-[1.1] min-h-[90px] min-w-px not-italic relative shrink-0 text-[#141414] text-[27px] text-center"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {step.label}
                  </div>
                </div>
                <div className="box-border content-stretch flex items-center justify-start min-h-[110px] px-[30px] py-0 relative shrink-0 w-full">
                  <div 
                    className="basis-0 grow leading-[1.2] min-h-[154px] min-w-px not-italic relative shrink-0 text-[18px] text-center"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.66)",
                    }}
                  >
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Arrow between Step 1 and Step 2 */}
        <div className="absolute h-[29.5px] left-[300px] top-[236px] w-56">
          <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
            <Image src="/home-page/section 4/arrow-up.svg" alt="Arrow" width={224} height={35} className="block max-w-none size-full" />
          </div>
        </div>
        
        {/* Arrow between Step 2 and Step 3 */}
        <div className="absolute flex h-[29.5px] items-center justify-center left-[733px] top-[168px] w-56">
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[29.5px] relative w-56">
              <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
                <Image src="/home-page/section 4/arrow-down.svg" alt="Arrow" width={224} height={35} className="block max-w-none size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
