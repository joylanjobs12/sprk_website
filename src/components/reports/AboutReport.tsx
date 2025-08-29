'use client';

interface AboutReportContent {
    title: string;
    imageSrc: string;
    imageAlt: string;
    sections: {
        title: string;
        items: string[];
    }[];
    description: string;
}

interface AboutReportProps {
    title: string;
    backgroundColor?: string;
    titleColor?: string;
    content: AboutReportContent;
    onPrevious?: () => void;
    onNext?: () => void;
    showNavigation?: boolean;
}

export default function AboutReport({ 
    title, 
    backgroundColor = "#115056",
    titleColor = "white",
    content,
    onPrevious,
    onNext,
    showNavigation = true
}: AboutReportProps) {
    return (
        <section 
            className="w-full flex flex-col gap-5 lg:gap-[50px] items-center justify-start pb-[50px] lg:pb-[100px] pt-[50px] lg:pt-[100px] px-4 lg:px-24 relative"
            style={{ backgroundColor }}
        >
            <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start">
                <div className="w-full flex items-start justify-center">
                    <h2 
                        className="text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium font-['Aeonik_Pro']"
                        style={{ color: titleColor }}
                    >
                        {title}
                    </h2>
                </div>
            </div>

            <div className="w-full max-w-[1248px] flex items-start justify-start relative">
                {/* Main Card */}
                <div className="bg-white w-full rounded-[10px] border border-[rgba(0,0,0,0.15)] border-solid overflow-hidden min-w-[400px]">
                    <div className="flex flex-col lg:flex-row items-start justify-center w-full">
                        {/* Image Section */}
                        <div className="bg-gray-50 w-full lg:w-1/2 h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                            <div 
                                className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                style={{ backgroundImage: `url('${content.imageSrc}')` }}
                            />
                        </div>
                        
                        {/* Content Section */}
                        <div className="bg-white w-full lg:w-1/2 h-auto lg:h-[500px] flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px]">
                            <div className="w-full flex items-center justify-center lg:justify-start">
                                <h3 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                    {content.title}
                                </h3>
                            </div>
                            
                            <div className="w-full flex-1 flex items-center justify-center lg:justify-start">
                                <div className="w-full text-[rgba(0,0,0,0.66)]">
                                    {content.sections.map((section, index) => (
                                        <div key={index} className="mb-6">
                                            <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] text-[rgba(0,0,0,0.66)] mb-4">
                                                {section.title}
                                            </p>
                                            
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)] space-y-2 mb-6">
                                                {section.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="ml-[27px]">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    
                                    <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                        {content.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
                {showNavigation && (
                    <div className="hidden lg:block">
                        {/* Left Arrow */}
                        {onPrevious && (
                            <button 
                                onClick={onPrevious}
                                className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-white rounded-[50px] border border-[rgba(0,0,0,0.2)] border-solid shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] w-20 h-20 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        )}

                        {/* Right Arrow */}
                        {onNext && (
                            <button 
                                onClick={onNext}
                                className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-white rounded-[50px] border border-[rgba(0,0,0,0.2)] border-solid shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] w-20 h-20 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
