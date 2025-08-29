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
    <section className="section-4 box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
      <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <div 
            className="text-reveal basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] text-black text-center px-4 sm:px-0"
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
              className="text-reveal basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[35px] text-center px-4 sm:px-0"
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
      <div className="content-start grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-5 items-start justify-center relative shrink-0 w-full max-w-[1248px]">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="slide-up-cards bg-white content-stretch flex flex-col items-center justify-start min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] w-full overflow-clip relative rounded-[10px] shrink-0">
              <div className="bg-white box-border content-stretch flex flex-col items-center justify-start px-4 sm:px-6 lg:px-0 py-8 sm:py-10 lg:py-[50px] relative shrink-0 w-full">
                <div className="bg-[rgba(86,205,69,0.05)] box-border content-stretch flex items-start justify-center px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 relative rounded-[50px] shrink-0">
                  <div className="absolute border border-[#56cd45] border-solid inset-0 pointer-events-none rounded-[50px]" />
                  <div 
                    className="leading-[1.1] not-italic relative shrink-0 text-[#56cd45] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-nowrap"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                    }}
                  >
                    Step {index + 1}
                  </div>
                </div>
                <div className="box-border content-stretch flex items-center justify-center px-4 sm:px-6 lg:px-[30px] py-6 sm:py-8 lg:py-10 relative shrink-0 w-full">
                  <div className="bg-[#115056] content-stretch flex items-center justify-center min-h-[80px] min-w-[80px] sm:min-h-[90px] sm:min-w-[90px] relative rounded-[100px] shrink-0 size-[120px] sm:size-[140px] lg:size-[150px]">
                    <div className="absolute border-[8px] sm:border-[10px] border-[rgba(144,228,193,0.1)] border-solid inset-[-8px] sm:inset-[-10px] pointer-events-none rounded-[100px] sm:rounded-[110px] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]" />
                    <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0">
                      <div className="overflow-clip relative shrink-0 size-[70px] sm:size-[80px] lg:size-[90px]">
                        <Image src={step.icon} alt={step.label} width={90} height={90} className="block max-w-none size-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-2 sm:gap-2.5 items-start justify-start relative shrink-0 w-full">
                  <div className="box-border content-stretch flex items-start justify-center min-h-[50px] sm:min-h-[60px] px-4 sm:px-6 lg:px-[30px] py-0 relative shrink-0 w-full">
                    <div 
                      className="basis-0 grow leading-[1.1] min-h-[60px] sm:min-h-[80px] lg:min-h-[90px] min-w-px not-italic relative shrink-0 text-[#141414] text-[20px] sm:text-[24px] lg:text-[27px] text-center"
                      style={{
                        fontFamily: '"Aeonik Pro", sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      {step.label}
                    </div>
                  </div>
                  <div className="box-border content-stretch flex items-center justify-center min-h-[80px] sm:min-h-[100px] lg:min-h-[110px] px-4 sm:px-6 lg:px-[30px] py-0 relative shrink-0 w-full">
                    <div 
                      className="basis-0 grow leading-[1.2] min-h-[100px] sm:min-h-[130px] lg:min-h-[154px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[17px] lg:text-[18px] text-center"
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
            
            {/* Mobile Arrow (vertical) - shown only on mobile */}
            {index < steps.length - 1 && (
              <div className="md:hidden flex justify-center mt-4 mb-2">
                <div className="transform rotate-90">
                  <Image src="/home-page/section 3/arrow-up.svg" alt="Next Step" width={40} height={20} className="block" />
                </div>
              </div>
            )}
            
            {/* Tablet Arrow (horizontal) - shown only on tablet (md) */}
            {index === 0 && (
              <div className="hidden md:block xl:hidden absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                <Image src="/home-page/section 3/arrow-up.svg" alt="Next Step" width={32} height={16} className="block" />
              </div>
            )}
          </div>
        ))}
        
        {/* Desktop Arrows - shown only on xl screens */}
        <div className="hidden xl:block">
          {/* Arrow between Step 1 and Step 2 */}
          <div className="absolute h-[29.5px] left-[33%] top-[240px] w-[140px] transform -translate-x-1/2">
            <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow" width={140} height={35} className="block max-w-none size-full" />
            </div>
          </div>
          
          {/* Arrow between Step 2 and Step 3 */}
          <div className="absolute flex h-[29.5px] items-center justify-center left-[66%] top-[180px] w-[140px] transform -translate-x-1/2">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[29.5px] relative w-[140px]">
                <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
                  <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow" width={140} height={35} className="block max-w-none size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
