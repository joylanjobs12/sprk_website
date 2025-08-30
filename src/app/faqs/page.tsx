'use client';

import { useState } from 'react';
import ScrollToTop from '@/components/ScrollToTop';

export default function FAQs() {
  // FAQ data with questions and answers
  const faqData = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
      id: 4,
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable."
    }
  ];

  // State to track which FAQ item is expanded (only one can be expanded at a time)
  const [expandedId, setExpandedId] = useState<number | null>(1); // Start with first item expanded

  // Function to toggle FAQ item
  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-start pb-[50px] pt-[75px] px-4 sm:pb-[75px] sm:pt-[100px] sm:px-6 md:pb-[100px] md:pt-[125px] md:px-8 lg:pb-[100px] lg:pt-[150px] lg:px-24">
        <div className="w-full max-w-7xl flex flex-col items-start justify-start">
          <header className="w-full flex flex-col gap-[25px] sm:gap-[35px] md:gap-[40px] lg:gap-[50px] items-center justify-start mb-[30px] sm:mb-[40px] md:mb-[50px] lg:mb-[80px]">
            {/* Title and Description Container */}
            <div className="w-full flex flex-col lg:flex-row gap-6 items-start justify-center px-2.5">
              {/* Title */}
              <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-start">
                <h2 
                  className="text-center lg:text-left leading-[1.1] mb-4 lg:mb-0 text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]"
                  style={{
                    fontWeight: 500,
                    fontFamily: '"Aeonik Pro", sans-serif',
                    color: '#000',
                    lineHeight: '110%'
                  }}
                >
                  Frequently Asked Questions
                </h2>
              </div>
              
              {/* Description */}
              <div className="w-full lg:flex-1 flex items-center justify-center p-[10px]">
                <strong 
                  className="text-center lg:text-left leading-[1.2] text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]"
                  style={{
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(0,0,0,0.66)',
                    lineHeight: '120%'
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                </strong>
              </div>
            </div>
            
            {/* FAQ Items Container */}
            <div className="w-full flex flex-col gap-5 sm:gap-6 items-center justify-start">
              {faqData.map((faq) => {
                const isExpanded = expandedId === faq.id;
                
                return (
                  <div 
                    key={faq.id}
                    className={`w-full flex flex-col items-center justify-center p-4 sm:p-[25px] md:p-[30px] rounded-[10px] cursor-pointer transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-[#115056] gap-5 sm:gap-6' 
                        : 'border border-[rgba(0,0,0,0.2)] hover:border-[rgba(0,0,0,0.4)]'
                    }`}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <div className="w-full flex items-center justify-between">
                      <h6 
                        className="flex-1 leading-[1.1] pr-4 text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]"
                        style={{
                          fontWeight: 600,
                          fontFamily: 'Inter, sans-serif',
                          color: isExpanded ? 'white' : 'rgba(0,0,0,0.66)',
                          lineHeight: '120%'
                        }}
                      >
                        {faq.question}
                      </h6>
                      <div className="flex-shrink-0 w-[35px] h-[35px] flex items-center justify-center">
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded 
                              ? 'text-white rotate-180' 
                              : 'text-[rgba(0,0,0,0.66)] rotate-0'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Answer section with smooth animation */}
                    <div 
                      className={`w-full overflow-hidden transition-all duration-300 ${
                        isExpanded 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="w-full flex items-start justify-start">
                        <p 
                          className="leading-[1.2] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]"
                          style={{
                            fontWeight: 400,
                            fontFamily: 'Inter, sans-serif',
                            color: 'rgba(255,255,255,0.8)',
                            lineHeight: '120%'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </header>
        </div>
      </section>
      
      <section className="w-full flex flex-col items-center justify-start px-4 py-[50px] sm:px-6 sm:py-[75px] md:px-8 md:py-[85px] lg:px-24 lg:py-[100px]">
          <div className="w-full max-w-7xl">
            <div className="bg-[#115056] w-full flex flex-col gap-[30px] sm:gap-[35px] md:gap-[40px] lg:gap-[50px] items-center justify-center p-[20px] sm:p-[25px] md:p-[28px] lg:p-[30px] rounded-[10px] min-h-[300px] sm:min-h-[350px] md:min-h-[375px] lg:min-h-[400px]">
              {/* Content Container */}
              <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-center text-center">
                {/* Main Title */}
                <h2 
                  className="w-full leading-[1.1]"
                  style={{
                    fontSize: '32px',
                    fontWeight: 500,
                    fontFamily: '"Aeonik Pro", sans-serif',
                    color: 'white',
                    lineHeight: '110%'
                  }}
                >
                  Ready to Become Sprk Certified?
                </h2>
                
                {/* Description */}
                <div 
                  className="w-full leading-[1.1]"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    fontFamily: '"Aeonik Pro", sans-serif',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: '120%'
                  }}
                >
                  <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p className="mb-0">Lorem Ipsum has been the industry&apos;s standard.</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex items-center justify-center">
                <button className="border border-white rounded-[50px] px-[20px] py-[12px] sm:px-[25px] sm:py-[15px] md:px-[30px] md:py-[18px] lg:px-[35px] lg:py-[20px] flex items-center justify-center gap-3 hover:bg-white hover:text-[#115056] transition-all duration-300 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[408px]">
                  <span 
                    className="leading-[1.1]"
                    style={{
                      fontSize: '18px',
                      fontWeight: 500,
                      fontFamily: 'Inter, sans-serif',
                      color: 'inherit',
                      lineHeight: '120%'
                    }}
                  >
                    Enroll Now
                  </span>
                  {/* Arrow Right Icon */}
                  <svg
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      <ScrollToTop />
    </>
  );
}
