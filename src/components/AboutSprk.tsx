"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Card {
  icon: string;
  label: string;
  text: string;
  width?: "large" | "small"; // Optional width specification
}

interface AboutSprkProps {
  title: string;
  subtitle?: string;
  description?: string;
  cards: Card[];
}

export default function AboutSprk({ title, subtitle, description, cards }: AboutSprkProps) {
  const renderCard = (card: Card, index: number) => {
    const isLarge = card.width === "large";
    const cardWidth = isLarge ? "min-w-[712px]" : "min-w-[512px]";
    const flexBasis = isLarge ? "flex-1" : "basis-0";
    
    return (
      <div key={index} className={`${flexBasis} bg-white ${cardWidth} rounded-[10px] border border-[rgba(17,80,86,0.5)] overflow-hidden shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] shrink-0 grow`}>
        <div className="flex flex-col items-center justify-start w-full overflow-clip">
          <div className="p-[30px] flex items-center justify-start w-full border-b border-b-[#A5DCDF] relative">
            <div className="flex gap-[30px] items-end justify-start flex-1">
              <div className="bg-white flex items-center justify-center rounded-[10px] w-[130px] h-[130px] border border-[#115056] shrink-0">
                <Image 
                  src={card.icon} 
                  alt={card.label} 
                  width={90} 
                  height={94} 
                  className="w-[90px] h-[94px] object-contain" 
                />
              </div>
              <div className="flex flex-row items-end self-stretch">
                <div className="bg-white flex h-full items-center justify-start rounded-[10px] shrink-0">
                  <h3
                    className="text-[45px] font-medium leading-[110%] text-black whitespace-pre-line"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    {card.label}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col gap-5 items-center justify-start pb-[30px] pt-[50px] w-full">
            <div className="flex items-start justify-start px-[30px] w-full">
              <p 
                className={`${inter.className} text-[24px] font-normal leading-[120%] text-black/66 flex-1 min-h-[105px]`}
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
    <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
      <div className="flex flex-col gap-20 items-center justify-start w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start w-[1248px] max-w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="text-center text-[56px] font-medium leading-[110%] text-[#141414] flex-grow min-w-0"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                {title}
              </h2>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              {subtitle && (
                <div className="flex items-start justify-center w-full">
                  <h3
                    className="text-center text-[35px] font-medium leading-[110%] text-[#141414] flex-grow min-w-0"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    {subtitle}
                  </h3>
                </div>
              )}
              {description && (
                <div className="flex items-start justify-center w-full">
                  <p 
                    className={`${inter.className} text-center text-[22px] font-normal leading-[120%] text-black/66 flex-grow min-w-0`}
                  >
                    {description}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center justify-center w-full">
            {cards.map((card, index) => renderCard(card, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
