'use client';

interface ButtonConfig {
    text: string;
    type: 'primary' | 'secondary';
    onClick: () => void;
}

interface FindReportProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    backgroundColor?: string;
    imageBackgroundColor?: string;
    buttons: ButtonConfig[];
    primaryColor?: string;
    secondaryColor?: string;
}

export default function FindReport({ 
    title,
    imageSrc,
    imageAlt,
    backgroundColor = "white",
    imageBackgroundColor = "#115056",
    buttons,
    primaryColor = "#115056",
    secondaryColor = "#0d3d42"
}: FindReportProps) {
    const renderButton = (button: ButtonConfig, index: number) => {
        if (button.type === 'primary') {
            return (
                <button 
                    key={index}
                    onClick={button.onClick}
                    className="w-full flex items-center justify-center p-[5px] rounded-[5px] group transition-colors"
                    style={{ 
                        backgroundColor: primaryColor,
                        ':hover': { backgroundColor: secondaryColor }
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = secondaryColor;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = primaryColor;
                    }}
                >
                    <div className="w-full flex items-center justify-center px-[15px] py-[5px]">
                        <span className="flex-1 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-normal font-['Inter'] text-white text-center">
                            {button.text}
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center ml-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </button>
            );
        } else {
            return (
                <button 
                    key={index}
                    onClick={button.onClick}
                    className="bg-white w-full flex items-center justify-center p-[5px] rounded-[5px] border border-solid group hover:bg-gray-50 transition-colors"
                    style={{ borderColor: primaryColor }}
                >
                    <div className="w-full flex items-center justify-center px-[15px] py-[5px]">
                        <span 
                            className="flex-1 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-normal font-['Inter'] text-center"
                            style={{ color: primaryColor }}
                        >
                            {button.text}
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center ml-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </button>
            );
        }
    };

    return (
        <section className="w-full flex flex-col gap-5 lg:gap-[50px] items-center justify-start pb-[50px] lg:pb-[100px] pt-[50px] lg:pt-[100px] px-4 lg:px-24">
            <div className="w-full max-w-[1248px] flex flex-col gap-5 lg:gap-[50px] items-start justify-start">
                <div 
                    className="w-full rounded-[10px] border border-[rgba(0,0,0,0.15)] border-solid overflow-hidden"
                    style={{ backgroundColor }}
                >
                    <div className="flex flex-col lg:flex-row items-start justify-start w-full">
                        {/* Left Side - Image */}
                        <div 
                            className="w-full lg:w-1/2 h-[300px] lg:h-[500px] flex items-start justify-start overflow-hidden min-w-[350px]"
                            style={{ backgroundColor: imageBackgroundColor }}
                        >
                            <div 
                                className="w-full h-full bg-[0%_3.57%] bg-no-repeat bg-[length:100%_130.58%]"
                                style={{ backgroundImage: `url('${imageSrc}')` }}
                            />
                        </div>
                        
                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 h-auto lg:h-[500px] flex flex-col items-start justify-between p-[30px] lg:p-[50px] min-w-[350px] overflow-hidden">
                            {/* Title */}
                            <div className="w-full flex flex-col gap-[5px] items-start justify-start">
                                <div className="w-full flex items-center justify-center lg:justify-start">
                                    <h2 className="text-center lg:text-left text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                                        {title}
                                    </h2>
                                </div>
                            </div>
                            
                            {/* Buttons */}
                            <div className="w-full flex flex-col gap-2.5 items-start justify-start">
                                {buttons.map((button, index) => renderButton(button, index))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
