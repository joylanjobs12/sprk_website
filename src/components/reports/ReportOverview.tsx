'use client';

import ButtonsType from "../ButtonsType";

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
    <div className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start px-4 lg:px-24 py-[50px] lg:py-[100px]">
      <div className="w-full max-w-[1248px] flex flex-col gap-[25px] lg:gap-[50px] items-start justify-start">
        <div className="card-flip w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
          {/* Video/Image Section */}
          <div 
            className={`text-reveal w-full flex flex-col items-center justify-center h-[${imageHeight.base}] sm:h-[${imageHeight.sm}] md:h-[${imageHeight.md}] lg:h-[${imageHeight.lg}] relative`}
            style={{ backgroundColor }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={imageSrc}
                alt={imageAlt}
            className={`bounce-in w-full h-full object-contain max-w-[${maxImageWidth.base}] sm:max-w-[${maxImageWidth.sm}] md:max-w-[${maxImageWidth.md}] lg:max-w-[${maxImageWidth.lg}]`}
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full p-4 sm:p-6 md:p-8 lg:p-[50px]">
            {/* Title */}
            <div className="w-full flex items-start justify-start pb-6 lg:pb-[50px]">
              <h2 
                className={`text-reveal text-[${titleSize.base}] sm:text-[${titleSize.sm}] md:text-[${titleSize.md}] lg:text-[${titleSize.lg}] xl:text-[${titleSize.xl}] 2xl:text-[${titleSize.xxl}] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-start`}
              >
                {title}
              </h2>
            </div>
            
            {/* Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-2.5 items-stretch">
              <ButtonsType type={2} label={primaryButtonText} isShowArrow={true} />
              <ButtonsType type={6} label={secondaryButtonText} isShowArrow={true} />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}