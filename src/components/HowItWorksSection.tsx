import Image from "next/image";

interface Step {
  icon: string;
  label: string;
  description: string;
}

interface HowItWorksSectionProps {
  title: string;
  subtitle?: string;
  step1?: Step;
  step2?: Step;
  step3?: Step;
}

export default function HowItWorksSection({
  title,
  subtitle,
  step1,
  step2,
  step3
}: HowItWorksSectionProps) {
  // Ensure all steps are defined with fallback values
  const steps = [
    step1 || { icon: '', label: 'Step 1', description: '' },
    step2 || { icon: '', label: 'Step 2', description: '' },
    step3 || { icon: '', label: 'Step 3', description: '' }
  ].filter(step => step.icon && step.label && step.description);

  return (
    <section className="section-4 box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
      <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <h2 
            className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 transition-all duration-300 ease-in-out"
            style={{
              fontFamily: '"Aeonik Pro", sans-serif',
              fontWeight: 500,
              color: "#141414",
            }}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
            <h4 
              className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 transition-all duration-300 ease-in-out"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                fontWeight: 500,
                color: "#141414",
              }}
            >
              {subtitle}
            </h4>
          </div>
        )}
      </div>
      <div className="content-start flex flex-wrap gap-3 sm:gap-4 md:gap-5 items-start justify-start relative shrink-0 w-full">
        {steps.map((step, index) => {
          // Safety check to ensure step has all required properties
          if (!step || !step.icon || !step.label || !step.description) {
            return null;
          }
          
          return (
          <div key={index} className="card-bounce-in basis-0 bg-white content-stretch flex flex-col grow items-center justify-start min-h-px min-w-[280px] sm:min-w-[320px] md:min-w-[400px] overflow-clip relative rounded-[10px] shrink-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-white box-border content-stretch flex flex-col items-center justify-start min-w-[250px] sm:min-w-[280px] md:min-w-[295px] px-0 py-[30px] sm:py-[40px] md:py-[50px] relative shrink-0 w-full">
              <div className="bg-[rgba(86,205,69,0.05)] box-border content-stretch flex items-start justify-center px-10 py-2.5 relative rounded-[50px] shrink-0">
                <div className="absolute border border-[#56cd45] border-solid inset-0 pointer-events-none rounded-[50px]" />
                <div 
                  className="leading-[1.1] not-italic relative shrink-0 text-[#56cd45] text-[20px] sm:text-[24px] lg:text-[28px] text-center text-nowrap transition-all duration-300 ease-in-out"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                  }}
                >
                  Step {index + 1}
                </div>
              </div>
              <div className="box-border content-stretch flex items-center justify-center px-[20px] sm:px-[25px] md:px-[30px] py-6 sm:py-8 md:py-10 relative shrink-0 w-full">
                <div className="bg-[#115056] content-stretch flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] shrink-0 size-[150px]">
                  <div className="absolute border-[10px] border-[rgba(144,228,193,0.1)] border-solid inset-[-10px] pointer-events-none rounded-[110px] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]" />
                  <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[90px]">
                      <Image src={step.icon} alt={step.label} width={90} height={90} className="block max-w-none size-full transition-transform duration-300 ease-in-out hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-start justify-start min-h-[60px] px-[20px] sm:px-[25px] md:px-[30px] py-0 relative shrink-0 w-full">
                  <h5 
                    className="basis-0 grow min-h-[90px] min-w-px not-italic relative shrink-0 text-[#141414] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[27px] xl:text-[27px] 2xl:text-[27px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center transition-all duration-300 ease-in-out"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {step.label}
                  </h5>
                </div>
                <div className="box-border content-stretch flex items-center justify-start min-h-[110px] px-[20px] sm:px-[25px] md:px-[30px] py-0 relative shrink-0 w-full">
                  <p 
                    className="basis-0 grow min-h-[154px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%] text-center transition-all duration-300 ease-in-out"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.66)",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          );
        })}
        
        {/* Desktop Arrows - positioned absolutely */}
        <div className="hidden xl:block">
          {/* Arrow between Step 1 and Step 2 */}
          <div className="absolute h-[29.5px] left-[300px] top-[236px] w-56 fade-up">
            <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow" width={224} height={35} className="block max-w-none size-full transition-all duration-300 ease-in-out" />
            </div>
          </div>
          
          {/* Arrow between Step 2 and Step 3 */}
          <div className="absolute flex h-[29.5px] items-center justify-center left-[733px] top-[168px] w-56 fade-up">
            <div className="flex-none scale-y-[-100%]">
              <div className="h-[29.5px] relative w-56">
                <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
                  <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow" width={224} height={35} className="block max-w-none size-full transition-all duration-300 ease-in-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile/Tablet Arrows */}
        <div className="xl:hidden w-full">
          {steps.slice(0, -1).map((_, index) => (
            <div key={`arrow-${index}`} className="fade-up flex justify-center mt-4 mb-2">
              <div className="md:transform md:rotate-0 transform rotate-90">
                <Image src="/home-page/section 3/arrow-up.svg" alt="Next Step" width={40} height={20} className="block transition-all duration-300 ease-in-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}