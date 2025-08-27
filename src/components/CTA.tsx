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
    <section className="mx-auto w-full mt-24 bg-[#115056]">
      <div className="flex w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-[150px] flex-col items-center gap-20 rounded-[10px] text-center">
        <div className="flex flex-wrap items-start justify-between w-full">
          <div className="flex flex-col items-center gap-[30px] w-full min-w-[612px] grow">
            <h3
              className="text-white text-center text-[56px] leading-[110%] font-medium w-full"
              style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
            >
              {title}
            </h3>

            {subtitle && (
              <h4 
                className="text-center text-[35px] font-medium"
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
                className={`${inter.className} self-stretch text-center text-[22px] leading-[120%] font-normal`} 
                style={{ color: 'rgba(255, 255, 255, 0.80)' }}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-6 items-start justify-center w-full max-w-[1332px]">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className={`${inter.className} relative bg-white border border-[#115056] rounded-[5px] p-[5px] w-full max-w-[418px] hover:bg-gray-50 transition-colors duration-200`}
            >
              <div className="flex items-center justify-center px-[25px] py-[5px] gap-2">
                <span className="flex-grow text-[#141414] text-[22px] font-normal leading-[120%] text-center">
                  {button.label}
                </span>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15H22.5M22.5 15L16.25 8.75M22.5 15L16.25 21.25" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
