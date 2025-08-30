'use client';

interface BulletPoint {
  title: string;
  description: string;
}

interface WhyThisReportMattersProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  bulletPoints: BulletPoint[];
  backgroundColor?: string;
  imageBackgroundColor?: string;
  titleSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  bulletTextSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  cardMinHeight?: {
    base: string;
    lg: string;
  };
  contentMinHeight?: {
    base: string;
    lg: string;
  };
  spacing?: {
    section: string;
    card: string;
    content: string;
    bullets: string;
  };
}

export default function WhyThisReportMatters({
  title,
  imageSrc,
  imageAlt,
  bulletPoints,
  backgroundColor = '#115056',
  imageBackgroundColor = 'bg-gray-50',
  titleSize = {
    base: '25px',
    sm: '25px',
    md: '25px',
    lg: '35px',
    xl: '35px',
    xxl: '35px'
  },
  bulletTextSize = {
    base: '16px',
    sm: '16px',
    md: '16px',
    lg: '20px',
    xl: '20px',
    xxl: '20px'
  },
  cardMinHeight = {
    base: '400px',
    lg: '500px'
  },
  contentMinHeight = {
    base: '300px',
    lg: '500px'
  },
  spacing = {
    section: 'gap-10 lg:gap-20',
    card: 'gap-[25px] lg:gap-[50px]',
    content: 'gap-[11px] lg:gap-[22px]',
    bullets: 'space-y-4 lg:space-y-6'
  }
}: WhyThisReportMattersProps) {
  return (
    <section 
      className={`w-full flex flex-col ${spacing.section} items-center justify-start px-4 lg:px-24 py-[75px] lg:py-[150px]`}
      style={{ backgroundColor }}
    >
      <div className={`w-full max-w-[1248px] flex flex-col ${spacing.card} items-center justify-start`}>
        <div className="w-full flex items-center justify-center">
          <div 
            className={`card-slide-left w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[${cardMinHeight.base}] lg:min-h-[${cardMinHeight.lg}]`}
          >
            <div className="w-full flex flex-col lg:flex-row items-stretch justify-center">
              {/* Left Side - Report Preview */}
              <div 
                className={`w-full lg:flex-1 ${imageBackgroundColor} flex items-start justify-end overflow-hidden min-h-[${contentMinHeight.base}] lg:h-[${cardMinHeight.lg}] relative`}
              >
                <div className="w-full h-full flex flex-col items-start justify-start p-4 lg:p-5">
                  <div className="w-full flex-1 rounded-tl-[10px] rounded-tr-[10px] bg-center bg-contain bg-no-repeat flex items-center justify-center">
                    <img 
                      src={imageSrc}
                      alt={imageAlt}
                      className="bounce-in w-full h-full object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.2)]"></div>
              </div>
              
              {/* Right Side - Content */}
              <div 
                className={`w-full lg:flex-1 bg-white flex flex-col ${spacing.content} items-start justify-start p-6 lg:p-[30px] lg:pb-10 min-h-[${contentMinHeight.base}] lg:h-[${cardMinHeight.lg}]`}
              >
                {/* Title */}
                <div className="w-full flex items-center justify-start">
                  <h2 
                    className={`text-reveal text-[${titleSize.base}] sm:text-[${titleSize.sm}] md:text-[${titleSize.md}] lg:text-[${titleSize.lg}] xl:text-[${titleSize.xl}] 2xl:text-[${titleSize.xxl}] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-start`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </div>
                
                {/* Bullet Points */}
                <div className="flex-1 w-full flex items-center justify-center">
                  <div 
                    className={`w-full text-[${bulletTextSize.base}] sm:text-[${bulletTextSize.sm}] md:text-[${bulletTextSize.md}] lg:text-[${bulletTextSize.lg}] xl:text-[${bulletTextSize.xl}] 2xl:text-[${bulletTextSize.xxl}] leading-[110%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]`}
                  >
                    <ul className="space-y-4 lg:space-y-6 list-disc ml-[30px]">
                      {bulletPoints.map((point, index) => (
                        <li key={index} className="slide-up-cards leading-[110%]">
                          <span className="font-semibold">{point.title}</span>
                          <span> {point.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
