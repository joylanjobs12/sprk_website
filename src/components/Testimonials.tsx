"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="section-8 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[30px] pt-8 sm:pt-10 lg:pt-[50px] pb-12 sm:pb-16 lg:pb-20 xl:pb-[100px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <div>
            <h3 className="text-reveal text-[#141414] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] px-4 sm:px-0">
              Trusted by Certified Professionals
              <br className="hidden sm:block" /> Across the Country
            </h3>
          </div>
          
          <button className={`${inter.className} text-reveal hidden sm:flex items-center gap-2 text-[#141414]/70 text-[14px] sm:text-[16px] lg:text-[18px]`}>
            Discover their Stories 
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="rgba(0,0,0,0.66)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="testimonials-slider relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonials-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonials-bullet-active',
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper"
          >
            {data.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-slide rounded-[10px] border border-black/10 bg-white overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-[#115056]/20">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 50px !important;
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
        }
        
        .testimonials-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(17, 80, 86, 0.2) !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .testimonials-bullet-active {
          background: #115056 !important;
          transform: scale(1.2) !important;
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }
        
        .testimonials-swiper .testimonial-slide {
          display: flex !important;
          flex-direction: column !important;
          height: 100% !important;
        }
        
        @media (max-width: 575px) {
          .testimonials-bullet {
            width: 8px !important;
            height: 8px !important;
            margin: 0 4px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
