'use client';

interface ReportOverviewProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  backgroundColor?: string;
  maxImageWidth?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
  };
  imageHeight?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
  };
  titleSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  buttonTextSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export default function ReportOverview({
  title,
  imageSrc,
  imageAlt,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  backgroundColor = '#115056',
  maxImageWidth = {
    base: '200px',
    sm: '250px',
    md: '300px',
    lg: '400px'
  },
  imageHeight = {
    base: '250px',
    sm: '300px',
    md: '350px',
    lg: '500px'
  },
  titleSize = {
    base: '25px',
    sm: '25px',
    md: '25px',
    lg: '32px',
    xl: '32px',
    xxl: '32px'
  },
  buttonTextSize = {
    base: '16px',
    sm: '16px',
    md: '16px',
    lg: '22px',
    xl: '22px',
    xxl: '22px'
  }
}: ReportOverviewProps) {
  return (
    <section className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start px-4 lg:px-24 py-[50px] lg:py-[100px]">
      <div className="w-full max-w-[1248px] flex flex-col gap-[25px] lg:gap-[50px] items-start justify-start">
        <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
          {/* Video/Image Section */}
          <div 
            className={`w-full flex flex-col items-center justify-center h-[${imageHeight.base}] sm:h-[${imageHeight.sm}] md:h-[${imageHeight.md}] lg:h-[${imageHeight.lg}] relative`}
            style={{ backgroundColor }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={imageSrc}
                alt={imageAlt}
                className={`w-full h-full object-contain max-w-[${maxImageWidth.base}] sm:max-w-[${maxImageWidth.sm}] md:max-w-[${maxImageWidth.md}] lg:max-w-[${maxImageWidth.lg}]`}
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full p-4 sm:p-6 md:p-8 lg:p-[50px]">
            {/* Title */}
            <div className="w-full flex items-center justify-center pb-6 lg:pb-[50px]">
              <h2 
                className={`text-[${titleSize.base}] sm:text-[${titleSize.sm}] md:text-[${titleSize.md}] lg:text-[${titleSize.lg}] xl:text-[${titleSize.xl}] 2xl:text-[${titleSize.xxl}] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center`}
              >
                {title}
              </h2>
            </div>
            
            {/* Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-2.5 items-stretch">
              <button 
                onClick={onPrimaryClick}
                className="flex-1 bg-[#115056] flex items-center justify-center gap-2 p-[5px] rounded-[5px] min-h-[44px] group hover:bg-[#0d3d42] transition-colors"
              >
                <div className="flex-1 flex items-center justify-center px-[15px] py-[5px]">
                  <span 
                    className={`text-[${buttonTextSize.base}] sm:text-[${buttonTextSize.sm}] md:text-[${buttonTextSize.md}] lg:text-[${buttonTextSize.lg}] xl:text-[${buttonTextSize.xl}] 2xl:text-[${buttonTextSize.xxl}] leading-[120%] font-normal font-['Inter'] text-white text-center`}
                  >
                    {primaryButtonText}
                  </span>
                  <div className="ml-2 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </button>
              
              <button 
                onClick={onSecondaryClick}
                className="flex-1 bg-white border border-[#115056] flex items-center justify-center gap-2 p-[5px] rounded-[5px] min-h-[44px] group hover:bg-[#115056] transition-colors"
              >
                <div className="flex-1 flex items-center justify-center px-[15px] py-[5px]">
                  <span 
                    className={`text-[${buttonTextSize.base}] sm:text-[${buttonTextSize.sm}] md:text-[${buttonTextSize.md}] lg:text-[${buttonTextSize.lg}] xl:text-[${buttonTextSize.xl}] 2xl:text-[${buttonTextSize.xxl}] leading-[120%] font-normal font-['Inter'] text-[#141414] group-hover:text-white text-center transition-colors`}
                  >
                    {secondaryButtonText}
                  </span>
                  <div className="ml-2 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
