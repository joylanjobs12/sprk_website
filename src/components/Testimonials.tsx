import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TestimonialData {
  image: string;
  text: string;
  name: string;
  company: string;
}

interface TestimonialsProps {
  data: TestimonialData[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px] pt-8 sm:pt-10 lg:pt-[50px] pb-12 sm:pb-16 lg:pb-20 xl:pb-[100px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div>
            <h3 className="text-[#141414] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] px-4 sm:px-0">
              Trusted by Certified Professionals
              <br className="hidden sm:block" /> Across the Country
            </h3>
          </div>
          <button className={`${inter.className} hidden sm:flex items-center gap-2 text-[#141414]/70 text-[14px] sm:text-[16px] lg:text-[18px]`}>
            Discover their Stories 
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="rgba(0,0,0,0.66)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {data.map((testimonial, index) => (
            <div key={index} className="rounded-[10px] border border-black/10 bg-white overflow-hidden">
              <div>
                <Image 
                  src={testimonial.image} 
                  alt={`${testimonial.name} profile`} 
                  width={400} 
                  height={500} 
                  className="w-full h-auto" 
                />
              </div>
              <div className="flex min-w-full p-6 sm:p-8 lg:p-[50px] flex-col items-start gap-4 sm:gap-6 lg:gap-[30px] flex-1">
                <p className={`${inter.className} flex-1 text-[14px] sm:text-[15px] lg:text-[16px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="text-[#141414] text-[24px] sm:text-[28px] lg:text-[32px] leading-[110%] font-medium font-['Aeonik_Pro']">
                    {testimonial.name}
                  </div>
                  <div className={`${inter.className} text-[16px] sm:text-[17px] lg:text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
