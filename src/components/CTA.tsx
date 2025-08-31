"use client";

import { Inter } from "next/font/google";
import ButtonsType from "./ButtonsType";

const inter = Inter({ subsets: ["latin"] });

interface CTAButton {
  label: string;
  link?: string;
  function?: () => void;
}

interface CTAProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttons: CTAButton[];
}

export default function CTA({ title, subtitle, description, buttons }: CTAProps) {
  const handleButtonClick = (button: CTAButton) => {
    if (button.function) {
      button.function();
    } else if (button.link) {
      window.location.href = button.link;
    }
  };

  return (
    <section className="section-9 mx-auto w-full mt-8 sm:mt-12 lg:mt-16 xl:mt-24 bg-[#115056]">
      <div className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[150px] flex-col items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 rounded-[10px] text-center">
        <div className="flex flex-wrap items-start justify-center w-full">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-[30px] w-full max-w-4xl">
            <h3
              className="bounce-in text-white text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-[110%] font-medium w-full px-4 sm:px-0"
              style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
            >
              {title}
            </h3>

            {subtitle && (
              <h4 
                className="text-reveal text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[35px] font-medium px-4 sm:px-0"
                style={{ 
                  color: '#FFF',
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}
              >
                {subtitle}
              </h4>
            )}
            
            {description && (
              <p 
                className={`${inter.className} text-reveal self-stretch text-center text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] leading-[120%] font-normal px-4 sm:px-0`} 
                style={{ color: 'rgba(255, 255, 255, 0.80)' }}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch justify-center w-full max-w-[1332px] flex-wrap">
          {buttons.map((button, index) => (
            <div key={index} className="w-full sm:w-auto">
              <ButtonsType type={6} label={button.label} isShowArrow={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
