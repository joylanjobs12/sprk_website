'use client';

import { ReactNode, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface AboutReportProps {
    title: string;
    backgroundColor?: string;
    titleColor?: string;
    slideContent?: Array<{
        leftSide: ReactNode;
        rightSide: ReactNode;
    }>;
    onPrevious?: () => void;
    onNext?: () => void;
    showNavigation?: boolean;
}

export default function AboutReport({
    title,
    backgroundColor = "#115056",
    titleColor = "white",
    slideContent,
    onPrevious,
    onNext,
    showNavigation = true
}: AboutReportProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    return (
        <section
            className="w-full flex flex-col gap-5 lg:gap-[50px] items-center justify-start pb-[50px] lg:pb-[100px] pt-[50px] lg:pt-[100px] px-4 lg:px-24 relative"
            style={{ backgroundColor }}
        >
            <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start">
                <div className="w-full flex items-start justify-center">
                    <h2
                        className="text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium font-['Aeonik_Pro']"
                        style={{ color: titleColor }}
                    >
                        {title}
                    </h2>
                </div>
            </div>

            <div className="w-full max-w-[1248px] flex items-start justify-start relative">
                {/* Main Card */}
                <div className="bg-white w-full rounded-[10px] border border-[rgba(0,0,0,0.15)] border-solid overflow-hidden min-w-[400px]">
                    <div className="w-full relative">
                        <Swiper
                            modules={[Pagination, Autoplay, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={false}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet about-report-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active about-report-bullet-active',
                            }}
                            className="about-report-swiper"
                            onBeforeInit={(swiper) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current as unknown as HTMLElement;
                                    swiper.params.navigation.nextEl = nextRef.current as unknown as HTMLElement;
                                }
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                setTimeout(() => {
                                    if (
                                        prevRef.current &&
                                        nextRef.current &&
                                        swiper.params.navigation &&
                                        typeof swiper.params.navigation !== 'boolean'
                                    ) {
                                        swiper.params.navigation.prevEl = prevRef.current as unknown as HTMLElement;
                                        swiper.params.navigation.nextEl = nextRef.current as unknown as HTMLElement;
                                        if (swiper.navigation && swiper.navigation.init && swiper.navigation.update) {
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        }
                                    }
                                });
                            }}
                            breakpoints={{
                                768: { slidesPerView: 1, spaceBetween: 24 },
                                1200: { slidesPerView: 1, spaceBetween: 24 }
                            }}
                        >
                            {slideContent?.map((slide, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="w-full flex-1 flex flex-col md:flex-row items-stretch justify-center lg:justify-start gap-6">
                                        <div className="w-full md:w-1/2">
                                            {slide.leftSide}
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            {slide.rightSide}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <style jsx global>{`
                                            .about-report-swiper { padding-bottom: 40px !important; }
                                            .about-report-swiper .swiper-pagination { bottom: 0 !important; }
                                            .about-report-bullet { width: 10px !important; height: 10px !important; background: rgba(17,80,86,0.2) !important; opacity: 1 !important; margin: 0 6px !important; transition: all 0.3s ease !important; }
                                            .about-report-bullet-active { background: #115056 !important; transform: scale(1.15) !important; }
                                        `}</style>
                    </div>

                </div>

                {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
                {showNavigation && (
                    <div className="hidden lg:block">
                        {/* Left Arrow */}
                        <button
                            ref={prevRef}
                            onClick={() => { swiperRef.current?.slidePrev(); if (onPrevious) onPrevious(); }}
                            aria-label="Previous slide"
                            className="absolute left-14 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-[50px] border border-[rgba(0,0,0,0.2)] border-solid shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] w-20 h-20 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                            ref={nextRef}
                            onClick={() => { swiperRef.current?.slideNext(); if (onNext) onNext(); }}
                            aria-label="Next slide"
                            className="absolute right-14 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-[50px] border border-[rgba(0,0,0,0.2)] border-solid shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] w-20 h-20 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
