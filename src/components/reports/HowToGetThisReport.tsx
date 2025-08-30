'use client';

interface InfoCard {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface HowToGetThisReportProps {
  title: string;
  cards: InfoCard[];
  ctaButtonText: string;
  onCtaClick?: () => void;
  backgroundColor?: string;
  titleSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  cardTitleSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  cardDescriptionSize?: {
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
  cardMinHeight?: {
    base: string;
    lg: string;
  };
  iconSize?: {
    base: string;
    lg: string;
  };
  iconContainerSize?: {
    base: string;
    lg: string;
  };
  spacing?: {
    section: string;
    title: string;
    cards: string;
    cardContent: string;
    cardHeader: string;
  };
  padding?: {
    section: string;
    card: string;
    cardHeader: string;
    cardContent: string;
  };
}

export default function HowToGetThisReport({
  title,
  cards,
  ctaButtonText,
  onCtaClick,
  backgroundColor = 'white',
  titleSize = {
    base: '35px',
    sm: '35px',
    md: '35px',
    lg: '56px',
    xl: '56px',
    xxl: '56px'
  },
  cardTitleSize = {
    base: '25px',
    sm: '25px',
    md: '25px',
    lg: '30px',
    xl: '30px',
    xxl: '30px'
  },
  cardDescriptionSize = {
    base: '16px',
    sm: '16px',
    md: '16px',
    lg: '18px',
    xl: '18px',
    xxl: '18px'
  },
  buttonTextSize = {
    base: '20px',
    sm: '20px',
    md: '20px',
    lg: '25px',
    xl: '25px',
    xxl: '25px'
  },
  cardMinHeight = {
    base: '350px',
    lg: '400px'
  },
  iconSize = {
    base: '50px',
    lg: '60px'
  },
  iconContainerSize = {
    base: '52px',
    lg: '62px'
  },
  spacing = {
    section: 'gap-[25px] lg:gap-[50px]',
    title: 'gap-[15px] lg:gap-[30px]',
    cards: 'gap-6',
    cardContent: 'gap-5',
    cardHeader: 'gap-5'
  },
  padding = {
    section: 'pb-[50px] lg:pb-[100px] pt-[25px] lg:pt-[50px] px-4 lg:px-[94px]',
    card: 'p-[20px] lg:p-[30px]',
    cardHeader: 'p-[20px] lg:p-[30px]',
    cardContent: 'p-[20px] lg:p-[30px]'
  }
}: HowToGetThisReportProps) {
  return (
    <section 
      className={`w-full flex flex-col ${spacing.section} items-center justify-start ${padding.section}`}
      style={{ backgroundColor }}
    >
      {/* Title */}
      <div className="w-full flex flex-col items-center justify-start">
        <div className={`w-full flex flex-col ${spacing.title} items-center justify-start`}>
          <div className="w-full flex items-start justify-center">
            <h2 
              className={`text-reveal text-[${titleSize.base}] sm:text-[${titleSize.sm}] md:text-[${titleSize.md}] lg:text-[${titleSize.lg}] xl:text-[${titleSize.xl}] 2xl:text-[${titleSize.xxl}] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center`}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className={`w-full flex flex-wrap ${spacing.cards} items-start justify-start`}>
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`map-zoom flex-1 min-w-[280px] lg:min-w-[294px] bg-gray-50 rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[${cardMinHeight.base}] lg:min-h-[${cardMinHeight.lg}]`}
          >
            <div className="w-full flex flex-col items-center justify-start h-full">
              {/* Header */}
              <div className={`w-full bg-white flex flex-col ${spacing.cardHeader} items-start justify-start ${padding.cardHeader}`}>
                <div className="flex items-center justify-start">
                  <div className="bg-white border border-[rgba(17,80,86,0.15)] rounded-[10px] p-[15px] flex items-center justify-center">
                    <div className={`w-[${iconSize.base}] lg:w-[${iconSize.lg}] h-[${iconContainerSize.base}] lg:h-[${iconContainerSize.lg}] overflow-hidden relative`}>
                      <img 
                        src={card.iconSrc}
                        alt={card.iconAlt}
                        className="bounce-in w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start">
                  <h3 
                    className={`text-reveal text-[${cardTitleSize.base}] sm:text-[${cardTitleSize.sm}] md:text-[${cardTitleSize.md}] lg:text-[${cardTitleSize.lg}] xl:text-[${cardTitleSize.xl}] 2xl:text-[${cardTitleSize.xxl}] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]`}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 w-full flex items-start justify-center ${padding.cardContent}`}>
                <p 
                  className={`fade-up text-[${cardDescriptionSize.base}] sm:text-[${cardDescriptionSize.sm}] md:text-[${cardDescriptionSize.md}] lg:text-[${cardDescriptionSize.lg}] xl:text-[${cardDescriptionSize.xl}] 2xl:text-[${cardDescriptionSize.xxl}] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Button */}
      <div className="w-full flex flex-col items-center justify-start">
        <button 
          onClick={onCtaClick}
          className="cta-button w-full max-w-md bg-[#115056] rounded-[5px] p-[5px] flex items-center justify-center min-h-[44px] group transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
          <div className="flex-1 flex items-center justify-center px-[15px] py-[5px] gap-2">
            <span 
              className={`text-[${buttonTextSize.base}] sm:text-[${buttonTextSize.sm}] md:text-[${buttonTextSize.md}] lg:text-[${buttonTextSize.lg}] xl:text-[${buttonTextSize.xl}] 2xl:text-[${buttonTextSize.xxl}] leading-[110%] font-medium font-['Inter'] text-white text-center`}
            >
              {ctaButtonText}
            </span>
            <div className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
