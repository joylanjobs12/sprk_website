"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Card {
  icon: string;
  label: string;
  text: string;
  width?: "large" | "small"; // Optional width specification for spanning multiple columns
}

interface AboutSprkProps {
  title: string;
  subtitle?: string;
  description?: string;
  cards: Card[];
}

export default function AboutSprk({ title, subtitle, description, cards }: AboutSprkProps) {
  const renderCard = (card: Card, index: number, rowIndex?: number) => {
    const isLarge = card.width === "large";
    // Define width classes based on row and position
    const getWidthClass = (index: number, rowIndex?: number) => {
      const isFirstInRow = index % 2 === 0; // Even indices (0, 2) are first in row
      
      // First row: first card 60%, second card 40%
      // Second row: first card 40%, second card 60%
      if (rowIndex === 0) {
        // First row
        return isFirstInRow ? 'w-full md:w-[60%]' : 'w-full md:w-[40%]';
      } else {
        // Second row - flip the widths
        return isFirstInRow ? 'w-full md:w-[40%]' : 'w-full md:w-[60%]';
      }
    };
    
    return (
      <div key={index} className={`bg-white ${getWidthClass(index, rowIndex)} ${isLarge ? 'lg:col-span-2 xl:col-span-3' : ''} rounded-[10px] border border-[rgba(17,80,86,0.5)] overflow-hidden shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] shrink-0`}>
        <div className="flex flex-col items-center justify-start w-full overflow-clip">
          <div className="p-4 sm:p-6 lg:p-[30px] flex flex-col sm:flex-row items-center lg:items-center sm:items-end justify-start w-full border-b border-b-[#A5DCDF] relative gap-4 sm:gap-6 lg:gap-[30px] xl:justify-center">
            <div className="bg-white flex items-center justify-center rounded-[10px] w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] border border-[#115056] shrink-0">
              <Image 
                src={card.icon} 
                alt={card.label} 
                width={90} 
                height={94} 
                className="w-[70px] h-[74px] sm:w-[80px] sm:h-[84px] lg:w-[90px] lg:h-[94px] object-contain" 
              />
            </div>
            <div className="flex flex-row items-center sm:items-end justify-center sm:justify-start flex-1 text-center sm:text-left">
              <div className="bg-white flex items-center justify-center sm:justify-start rounded-[10px] shrink-0">
                <h3
                  className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[45px] font-medium leading-[110%] text-black"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  dangerouslySetInnerHTML={{ __html: card.label }}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col gap-3 sm:gap-4 lg:gap-5 items-center justify-start pb-4 sm:pb-6 lg:pb-[30px] pt-6 sm:pt-8 lg:pt-[50px] w-full">
            <div className="flex items-start justify-start px-4 sm:px-6 lg:px-[30px] w-full">
              <p 
                className={`${inter.className} text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[120%] text-black/66 flex-1 min-h-[80px] sm:min-h-[90px] lg:min-h-[105px] text-center sm:text-left`}
              >
                {card.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px]">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start w-full">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start w-full max-w-[1248px]">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:gap-[30px] items-center justify-start w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] font-medium leading-[110%] text-[#141414] flex-grow min-w-0 px-4 sm:px-0"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                {title}
              </h2>
            </div>
            <div className="flex flex-col gap-2 sm:gap-2.5 items-start justify-start w-full">
              {subtitle && (
                <div className="flex items-start justify-center w-full">
                  <h3
                    className="text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[35px] font-medium leading-[110%] text-[#141414] flex-grow min-w-0 px-4 sm:px-0"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    {subtitle}
                  </h3>
                </div>
              )}
              {description && (
                <div className="flex items-start justify-center w-full">
                  <p 
                    className={`${inter.className} text-center text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-normal leading-[120%] text-black/66 flex-grow min-w-0 px-4 sm:px-0`}
                  >
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start justify-start w-full">
              {cards.slice(0, 2).map((card, index) => renderCard(card, index, 0))}
            </div>
            {/* Second Row */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start justify-start w-full">
              {cards.slice(2, 4).map((card, index) => renderCard(card, index + 2, 1))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
