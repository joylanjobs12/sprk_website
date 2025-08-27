"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Card {
  icon: string;
  label: string;
  text: string;
}

interface AboutSprkProps {
  title: string;
  subtitle?: string;
  description?: string;
  card1: Card[];
  card2: Card[];
}

export default function AboutSprk({ title, subtitle, description, card1, card2 }: AboutSprkProps) {
  const renderCard = (card: Card, index: number, width: string) => (
    <div key={index} className={`w-full ${width} rounded-[10px] border border-[rgba(17,80,86,0.50)] bg-white overflow-hidden shadow-[0_63px_25px_0_rgba(38,142,151,0.02),_0_36px_21px_0_rgba(38,142,151,0.08),_0_16px_16px_0_rgba(38,142,151,0.13),_0_4px_9px_0_rgba(38,142,151,0.10)]`}>
      <div className="p-[30px] flex items-center gap-[30px] w-full border-b border-b-[#A5DCDF]">
        <Image src={card.icon} alt={card.label} width={60} height={60} className="w-[60px] h-[60px]" />
                  <div className="text-left w-[45%]" style={{ fontFamily: '"Aeonik Pro", sans-serif' }}>
            <div>
               <span 
                 className="text-[45px] font-medium leading-[110%]"
                 style={{ 
                   fontFamily: '"Aeonik Pro", sans-serif',
                   color: '#000'
                 }}
               >
                 {card.label}
               </span>
            </div>
          </div>
      </div>
      <div className="bg-[#F9FAFB] p-[30px] w-full">
        <p className={`${inter.className} text-[16px] leading-[130%]`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
          {card.text}
        </p>
      </div>
    </div>
  );

  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 pb-[100px]">
      <div className="w-full flex flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center gap-[30px] self-stretch text-center">
         
          <h3
            className="flex-[1_0_0] text-center text-[45px] leading-[110%] font-medium"
            style={{ 
              fontFamily: '"Aeonik Pro", sans-serif',
              color: '#000'
            }}
          >
            {title}
          </h3>
          {subtitle && (
            <h4
              className="text-center text-[35px] leading-[110%] font-medium"
              style={{
                fontFamily: '"Aeonik Pro", sans-serif',
                color: '#141414'
              }}
            >
              {subtitle}
            </h4>
          )}
          {description && (
            <p className={`${inter.className} text-center text-[22px] leading-[120%] font-normal`} style={{ color: "rgba(0, 0, 0, 0.66)" }}>
              {description}
            </p>
          )}
        </div>

        <div className="w-full flex flex-col gap-[30px] mt-4">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-[30px]">
            {card1.map((card, index) => 
              renderCard(card, index, index === 0 ? "md:w-[60%]" : "md:w-[40%]")
            )}
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-[30px]">
            {card2.map((card, index) => 
              renderCard(card, index, index === 0 ? "md:w-[40%]" : "md:w-[60%]")
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
