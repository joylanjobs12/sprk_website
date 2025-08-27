"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface CTAButton {
  label: string;
  link?: string;
  function?: () => void;
}

interface CTAProps {
  title: string;
  subtitle?: string;
  description: string;
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
    <section className="mx-auto w-full mt-24 bg-[#115056]">
      <div className="flex w-[1440px] mx-auto px-[96px] py-[150px] flex-col items-center gap-[30px] rounded-[10px] text-center">
        <div>
         
          <h3
            className="text-white text-center text-[56px] leading-[110%] font-medium"
            style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
          >
            {title}
          </h3>

          {subtitle && (
            <h4 
              className="text-center text-[35px]  font-medium my-4"
              style={{ 
                color: '#FFF',
                fontFamily: '"Aeonik Pro", sans-serif'
              }}
            >
              {subtitle}
            </h4>
          )}
          <p 
            className={`${inter.className} mt-4 self-stretch text-center text-[22px] leading-[120%] font-normal`} 
            style={{ color: 'rgba(255, 255, 255, 0.80)' }}
          >
            {description}
          </p>
        </div>

        <div className="mt-[50px] flex flex-col w-full sm:flex-row items-start justify-center gap-[40px]">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className={`${inter.className} flex py-[5px] px-[35px] justify-center items-start gap-2 rounded-[5px] bg-[#F1FAFA] border border-[#115056] text-[25px] font-medium text-[#141414] hover:bg-white transition-colors duration-200`}
            >
              {button.label} <span aria-hidden>→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
