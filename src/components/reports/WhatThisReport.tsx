'use client';

interface ContentParagraph {
  text: string;
  highlightedWords?: Array<{
    word: string;
    className?: string;
  }>;
}

interface BulletPoint {
  text: string;
  highlightedWords?: Array<{
    word: string;
    className?: string;
  }>;
}

interface WhatThisReportProps {
  title: string;
  content: {
    paragraphs: ContentParagraph[];
    bulletPoints?: BulletPoint[];
  };
  imageSrc: string;
  imageAlt: string;
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
  contentSize?: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  spacing?: {
    section: string;
    columns: string;
    titleContent: string;
  };
}

export default function WhatThisReport({
  title,
  content,
  imageSrc,
  imageAlt,
  imageHeight = {
    base: '300px',
    sm: '400px',
    md: '500px',
    lg: '600px'
  },
  titleSize = {
    base: '35px',
    sm: '35px',
    md: '35px',
    lg: '56px',
    xl: '56px',
    xxl: '56px'
  },
  contentSize = {
    base: '16px',
    sm: '16px',
    md: '16px',
    lg: '25px',
    xl: '25px',
    xxl: '25px'
  },
  spacing = {
    section: 'gap-[25px] lg:gap-[50px]',
    columns: 'gap-6 lg:gap-10',
    titleContent: 'gap-[15px] lg:gap-[30px]'
  }
}: WhatThisReportProps) {
  
  const renderParagraphWithHighlights = (paragraph: ContentParagraph, index: number) => {
    if (!paragraph.highlightedWords || paragraph.highlightedWords.length === 0) {
      return (
        <p key={index} className="mb-4 last:mb-0 leading-[110%]">
          {paragraph.text}
        </p>
      );
    }

    let processedText = paragraph.text;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Sort highlighted words by their position in the text to process them in order
    const sortedHighlights = paragraph.highlightedWords
      .map(hw => ({ ...hw, index: processedText.indexOf(hw.word) }))
      .filter(hw => hw.index !== -1)
      .sort((a, b) => a.index - b.index);

    sortedHighlights.forEach((highlight, i) => {
      const startIndex = highlight.index;
      const endIndex = startIndex + highlight.word.length;

      // Add text before the highlighted word
      if (startIndex > lastIndex) {
        elements.push(processedText.slice(lastIndex, startIndex));
      }

      // Add the highlighted word
      elements.push(
        <span key={`highlight-${i}`} className={highlight.className || 'font-medium'}>
          {highlight.word}
        </span>
      );

      lastIndex = endIndex;
    });

    // Add remaining text after the last highlight
    if (lastIndex < processedText.length) {
      elements.push(processedText.slice(lastIndex));
    }

    return (
      <p key={index} className="mb-4 last:mb-0 leading-[110%]">
        {elements}
      </p>
    );
  };

  const renderBulletPointWithHighlights = (bulletPoint: BulletPoint, index: number) => {
    if (!bulletPoint.highlightedWords || bulletPoint.highlightedWords.length === 0) {
      return (
        <li key={index} className="leading-[110%] mb-0 ml-[37.5px]">
          {bulletPoint.text}
        </li>
      );
    }

    let processedText = bulletPoint.text;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Sort highlighted words by their position in the text to process them in order
    const sortedHighlights = bulletPoint.highlightedWords
      .map(hw => ({ ...hw, index: processedText.indexOf(hw.word) }))
      .filter(hw => hw.index !== -1)
      .sort((a, b) => a.index - b.index);

    sortedHighlights.forEach((highlight, i) => {
      const startIndex = highlight.index;
      const endIndex = startIndex + highlight.word.length;

      // Add text before the highlighted word
      if (startIndex > lastIndex) {
        elements.push(processedText.slice(lastIndex, startIndex));
      }

      // Add the highlighted word
      elements.push(
        <span key={`highlight-${i}`} className={highlight.className || 'font-medium'}>
          {highlight.word}
        </span>
      );

      lastIndex = endIndex;
    });

    // Add remaining text after the last highlight
    if (lastIndex < processedText.length) {
      elements.push(processedText.slice(lastIndex));
    }

    return (
      <li key={index} className="leading-[110%] mb-0 ml-[37.5px]">
        {elements}
      </li>
    );
  };

  return (
    <section className={`w-full flex flex-col ${spacing.section} items-center justify-start px-4 lg:px-24 py-[50px] lg:py-[100px]`}>
      <div className={`w-full flex flex-col ${spacing.titleContent} items-start justify-start`}>
        <div className={`w-full flex flex-col lg:flex-row ${spacing.columns} items-start justify-start`}>
          {/* Left Column - Text Content */}
          <div className={`w-full lg:flex-1 flex flex-col ${spacing.titleContent} items-start justify-start`}>
            {/* Title */}
            <div className="w-full flex items-start justify-start">
              <h2 
                className={`text-[${titleSize.base}] sm:text-[${titleSize.sm}] md:text-[${titleSize.md}] lg:text-[${titleSize.lg}] xl:text-[${titleSize.xl}] 2xl:text-[${titleSize.xxl}] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]`}
              >
                {title}
              </h2>
            </div>
            
            {/* Description */}
            <div className="w-full flex items-start justify-start pt-[8px] lg:pt-[15px]">
              <div 
                className={`w-full text-[${contentSize.base}] sm:text-[${contentSize.sm}] md:text-[${contentSize.md}] lg:text-[${contentSize.lg}] xl:text-[${contentSize.xl}] 2xl:text-[${contentSize.xxl}] leading-[110%] font-normal font-['Aeonik_Pro'] text-[rgba(0,0,0,0.66)]`}
              >
                {content.paragraphs.map((paragraph, index) => 
                  renderParagraphWithHighlights(paragraph, index)
                )}
                
                {content.bulletPoints && content.bulletPoints.length > 0 && (
                  <>
                    <p className="leading-[110%] mb-0 font-medium">Ideal for:</p>
                    <ul className="list-disc mb-0">
                      {content.bulletPoints.map((bulletPoint, index) => 
                        renderBulletPointWithHighlights(bulletPoint, index)
                      )}
                    </ul>
                    <p className="leading-[110%]">&nbsp;</p>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:flex-1 flex flex-col items-start justify-end">
            <div 
              className={`w-full h-[${imageHeight.base}] sm:h-[${imageHeight.sm}] md:h-[${imageHeight.md}] lg:h-[${imageHeight.lg}] rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden bg-center bg-contain bg-no-repeat flex items-center justify-center`}
            >
              <img 
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
