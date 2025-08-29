import React from "react";
import Image from "next/image";

interface HowToGetStartedProps {
  title: string;
  subtitle: string;
}

const HowToGetStarted: React.FC<HowToGetStartedProps> = ({
  title,
  subtitle,
}) => {
  // Hardcoded steps based on Figma design
  const steps = [
    {
      icon: "/agents-page/section 6/get-solar.svg",
      label: "Get Solar Certified",
      description: "Take the Sprk CE course to understand how to represent solar homes with confidence."
    },
    {
      icon: "/agents-page/section 6/generate.svg", 
      label: "Generate a Sprk Listing Report",
      description: "Make solar features visible and easy to explain—before you go live on the MLS."
    },
    {
      icon: "/agents-page/section 6/inspector.svg",
      label: "Use a Sprk Certified Inspector", 
      description: "Partner with inspectors who understand solar systems and deliver fast, credible reports."
    },
    {
      icon: "/agents-page/section 6/your-clients.svg",
      label: "Guide Your Clients the Right Way",
      description: "Use Sprk's seller checklists and buyer handouts to help avoid contract confusion and delayed closings."
    }
  ];

  // Define unique animation classes for each step card
  const getAnimationClass = (index: number) => {
    const animations = [
      'card-slide-left',    // Step 1: Slide from left
      'card-bounce-in',     // Step 2: Bounce in
      'card-slide-right',   // Step 3: Slide from right  
      'card-zoom-in'        // Step 4: Zoom in
    ];
    return animations[index] || 'slide-up-cards';
  };

  return (
    <section className="section-6 box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
      <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <h2 className="bounce-in basis-0 font-['Aeonik_Pro'] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[40px] sm:text-[40px] md:text-[45px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] text-center px-4 sm:px-0 transition-all duration-300 ease-in-out hover:transform hover:scale-105">
            {title}
          </h2>
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
          <h4 className="text-reveal basis-0 font-['Inter'] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[28px] leading-[120%] text-center px-4 sm:px-0 transition-all duration-300 ease-in-out">
            {subtitle}
          </h4>
        </div>
      </div>
      <div className="content-start flex flex-wrap gap-4 sm:gap-5 items-start justify-center relative shrink-0 w-full max-w-[1248px]">
        {/* Dynamic Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${getAnimationClass(index)} basis-0 bg-white content-stretch flex flex-col grow items-center justify-start min-h-px min-w-[280px] sm:min-w-[295px] overflow-clip relative rounded-[10px] shrink-0 transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="bg-white box-border content-stretch flex flex-col items-center justify-start min-w-[280px] sm:min-w-[295px] px-0 py-[30px] sm:py-[50px] relative shrink-0 w-full">
              <div className="bg-[rgba(86,205,69,0.05)] box-border content-stretch flex items-start justify-center px-6 sm:px-10 py-2.5 relative rounded-[50px] shrink-0 transition-all duration-300 ease-in-out hover:bg-[rgba(86,205,69,0.1)] hover:transform hover:scale-105">
                <div aria-hidden="true" className="absolute border border-[#56cd45] border-solid inset-0 pointer-events-none rounded-[50px] transition-all duration-300 ease-in-out" />
                <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#56cd45] text-[20px] sm:text-[28px] text-center text-nowrap transition-all duration-300 ease-in-out">
                  <p className="leading-[1.1] whitespace-pre">Step {index + 1}</p>
                </div>
              </div>
              <div className="box-border content-stretch flex items-center justify-center px-[20px] sm:px-[30px] py-6 sm:py-10 relative shrink-0 w-full">
                <div className="bg-[#115056] content-stretch flex items-center justify-center min-h-[70px] sm:min-h-[90px] min-w-[70px] sm:min-w-[90px] relative rounded-[100px] shrink-0 size-[120px] sm:size-[150px] transition-all duration-300 ease-in-out hover:transform hover:scale-110 hover:shadow-lg">
                  <div aria-hidden="true" className="absolute border-[8px] sm:border-[10px] border-[rgba(144,228,193,0.1)] border-solid inset-[-8px] sm:inset-[-10px] pointer-events-none rounded-[110px] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)] transition-all duration-300 ease-in-out" />
                  <div className="overflow-clip relative shrink-0 size-[70px] sm:size-[90px] transition-all duration-300 ease-in-out hover:transform hover:scale-110">
                    <Image 
                      alt={step.label} 
                      className="block max-w-none size-full transition-all duration-300 ease-in-out" 
                      src={step.icon}
                      width={90}
                      height={90}
                    />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-start justify-start min-h-[60px] px-[20px] sm:px-[30px] py-0 relative shrink-0 w-full">
                  <div className="basis-0 font-['Aeonik_Pro'] font-medium grow leading-[1.1] min-h-[70px] sm:min-h-[90px] min-w-px not-italic relative shrink-0 text-[#141414] text-[22px] sm:text-[27px] text-center transition-all duration-300 ease-in-out hover:text-[#115056]">
                    {index === 1 ? (
                      <>
                        <p className="mb-0">Generate a Sprk</p>
                        <p className="mb-0">Listing Report</p>
                      </>
                    ) : (
                      <p className="leading-[1.1]">{step.label}</p>
                    )}
                  </div>
                </div>
                <div className="box-border content-stretch flex items-center justify-start min-h-[100px] sm:min-h-[110px] px-[20px] sm:px-[30px] py-0 relative shrink-0 w-full">
                  <div className="basis-0 font-['Inter'] font-normal grow leading-[0] min-h-[120px] sm:min-h-[154px] min-w-px not-italic relative shrink-0 text-[16px] sm:text-[18px] text-[rgba(0,0,0,0.66)] text-center transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]">
                    <p className="leading-[1.2]">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Arrow decorations between steps - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block absolute h-[21.5px] left-[247px] top-[238px] w-[119px] fade-up transition-all duration-300 ease-in-out hover:transform hover:scale-110" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-[-22.71%_-0.84%_-4.95%_-0.29%]">
            <Image 
              alt="Arrow connecting steps" 
              className="block max-w-none w-full h-full transition-all duration-300 ease-in-out hover:opacity-80" 
              src="/home-page/section 3/arrow-up.svg"
              width={119}
              height={22}
            />
          </div>
        </div>
        <div className="hidden lg:block absolute flex h-[22px] items-center justify-center left-[563px] top-[185px] w-[119px] fade-up transition-all duration-300 ease-in-out hover:transform hover:scale-110" style={{ animationDelay: '1.0s' }}>
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[22px] relative w-[119px]">
              <div className="absolute inset-[-22.2%_-0.84%_-2.56%_-0.29%]">
                <Image 
                  alt="Arrow connecting steps" 
                  className="block max-w-none w-full h-full transition-all duration-300 ease-in-out hover:opacity-80" 
                  src="/home-page/section 3/arrow-up.svg"
                  width={119}
                  height={22}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute h-[21.5px] left-[882px] top-[238px] w-[119px] fade-up transition-all duration-300 ease-in-out hover:transform hover:scale-110" style={{ animationDelay: '1.2s' }}>
          <div className="absolute inset-[-22.71%_-0.84%_-4.95%_-0.29%]">
            <Image 
              alt="Arrow connecting steps" 
              className="block max-w-none w-full h-full transition-all duration-300 ease-in-out hover:opacity-80" 
              src="/home-page/section 3/arrow-up.svg"
              width={119}
              height={22}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;
