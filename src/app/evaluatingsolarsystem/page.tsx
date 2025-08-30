import ScrollToTop from "@/components/ScrollToTop";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function EvaluatingSolarSystem() {
    return (
        <div className="overflow-hidden">
            <ScrollAnimations />
            <section className="section-1 w-full flex flex-col items-center justify-start relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-24 lg:py-32 xl:py-36 2xl:py-40">
                <div className="w-full max-w-7xl flex flex-col items-center justify-start">
                    <header className="w-full flex flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                        <div className="w-full flex flex-col items-center justify-start gap-6 sm:gap-7 md:gap-8 lg:gap-8">
                            {/* Main Heading */}
                            <h1 className="fade-up w-full text-center font-['Aeonik_Pro'] transition-all duration-300 ease-in-out
        text-[40px] leading-[110%] font-medium text-black mb-4
        sm:text-[40px] sm:leading-[110%] sm:font-medium sm:text-black sm:mb-3
        md:text-[40px] md:leading-[110%] md:font-medium md:text-black md:mb-4
        lg:text-[80px] lg:leading-[110%] lg:font-medium lg:text-black lg:mb-6
        xl:text-[80px] xl:leading-[110%] xl:font-medium xl:text-black xl:mb-6
        2xl:text-[80px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black 2xl:mb-6">
                                <span className="text-[#115056] transition-colors duration-300 ease-in-out hover:text-[#0d4449]">How to Measure</span>
                                <span className="text-black transition-colors duration-300 ease-in-out">{` the Value`}</span>
                                <br className="hidden xs:inline sm:inline" />
                                <span className="text-black transition-colors duration-300 ease-in-out">of a Solar System</span>
                            </h1>

                            {/* Subtitle */}
                            <div className="w-full flex items-center justify-center">
                                <p className="text-reveal text-center font-['Inter'] transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)] max-w-4xl
        text-[16px] leading-[120%] font-normal text-black mb-4
        sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black sm:mb-4
        md:text-[16px] md:leading-[120%] md:font-normal md:text-black md:mb-4
        lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black lg:mb-4
        xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black xl:mb-4
        2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black 2xl:mb-4">
                                    Sprk didn&apos;t invent the way solar value is calculated — we just make it easy to understand.
                                </p>
                            </div>
                        </div>
                    </header>
                </div>
            </section>
            <section className="section-2 w-full flex flex-col items-center justify-start relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-32 xl:py-36 2xl:py-40">
                <div className="w-full max-w-7xl flex flex-col items-start justify-start">
                    <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-16">
                        {/* Image - Shows first on mobile, second on desktop */}
                        <div className="card-slide-right w-full lg:flex-1 flex flex-col items-center justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
                            <div className="relative w-full max-w-[549px] h-auto flex items-center justify-center">
                                <img
                                    src="/evaluating-solar-system/section 2/image1.svg"
                                    alt="Solar home value illustration showing a house with solar panels and dollar sign"
                                    className="w-full h-auto max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Content - Shows second on mobile, first on desktop */}
                        <div className="card-slide-left w-full lg:flex-1 flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-7 lg:gap-8 order-2 lg:order-1">
                            {/* Section Heading */}
                            <div className="w-full flex items-start justify-start">
                                <h2 className="bounce-in font-['Aeonik_Pro'] transition-all duration-300 ease-in-out hover:text-[#115056] cursor-default
                 text-[35px] leading-[110%] font-medium text-black mb-3
                 sm:text-[35px] sm:leading-[110%] sm:font-medium sm:text-black sm:mb-3
                 md:text-[35px] md:leading-[110%] md:font-medium md:text-black md:mb-4
                 lg:text-[56px] lg:leading-[110%] lg:font-medium lg:text-black lg:mb-5
                 xl:text-[56px] xl:leading-[110%] xl:font-medium xl:text-black xl:mb-5
                 2xl:text-[56px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black 2xl:mb-5">
                                    Why Solar Valuation Matters
                                </h2>
                            </div>

                            {/* Content Text */}
                            <div className="w-full flex items-start justify-start pt-0 sm:pt-2 md:pt-3 lg:pt-4">
                                <div className="text-reveal w-full font-['Inter'] transition-all duration-300 ease-in-out
                 text-[16px] leading-[120%] font-normal text-black
                 sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                 md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                 lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                 xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                 2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                    <p className="mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 transition-opacity duration-300 ease-in-out hover:opacity-90">
                                        A solar system&apos;s worth isn&apos;t just about panels on a roof — it&apos;s about the money saved over time from not having to purchase as much electricity from the local utility.
                                    </p>
                                    <p className="mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 transition-opacity duration-300 ease-in-out hover:opacity-90">
                                        Those savings, measured over the expected life of the system, form the foundation for understanding solar&apos;s value, benefit, and impact on a home.
                                    </p>
                                    <p className="mb-0 transition-opacity duration-300 ease-in-out hover:opacity-90">
                                        When this value is clear, buyers can see the benefit, sellers can defend their asking price, and appraisers can reflect solar accurately in the home&apos;s value.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-3 w-full flex flex-col items-center justify-start relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-32 xl:py-36 2xl:py-40">
                <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 sm:gap-12 md:gap-14 lg:gap-20">
                    {/* Section Header */}
                    <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-7 lg:gap-12">
                        <div className="w-full flex items-center justify-center">
                            <h2 className="bounce-in text-center font-['Aeonik_Pro'] transition-all duration-300 ease-in-out hover:text-[#115056] cursor-default
                             text-[35px] leading-[110%] font-medium text-black mb-3
                             sm:text-[35px] sm:leading-[110%] sm:font-medium sm:text-black sm:mb-3
                             md:text-[35px] md:leading-[110%] md:font-medium md:text-black md:mb-4
                             lg:text-[56px] lg:leading-[110%] lg:font-medium lg:text-black lg:mb-5
                             xl:text-[56px] xl:leading-[110%] xl:font-medium xl:text-black xl:mb-5
                             2xl:text-[56px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black 2xl:mb-5">
                                The Basics of Solar Value
                            </h2>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start gap-2">
                            <div className="w-full flex items-center justify-center">
                                <h4 className="text-reveal text-center font-['Aeonik_Pro'] transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]
                                 text-[18px] leading-[120%] font-medium text-black mb-0
                                 sm:text-[18px] sm:leading-[120%] sm:font-medium sm:text-black sm:mb-0
                                 md:text-[18px] md:leading-[120%] md:font-medium md:text-black md:mb-0
                                 lg:text-[35px] lg:leading-[110%] lg:font-medium lg:text-black lg:mb-0
                                 xl:text-[35px] xl:leading-[110%] xl:font-medium xl:text-black xl:mb-0
                                 2xl:text-[35px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black 2xl:mb-0">
                                    At its core, valuing solar starts with a few key factors:
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="w-full flex flex-wrap items-center justify-center gap-6 lg:gap-6">
                        {/* System Size & Capacity Card */}
                        <div className="card-flip flex-1 min-w-[300px] max-w-[400px] bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
                            <div className="w-full flex flex-col items-center justify-start">
                                {/* Icon Section */}
                                <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                                    <div className="flex items-center justify-start gap-[30px]">
                                        <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                                            <img
                                                src="/evaluating-solar-system/section 3/systemsize.svg"
                                                alt="Solar panel system icon"
                                                className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                                    <div className="w-full flex items-start justify-start px-[30px]">
                                        <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                                         text-[25px] leading-[120%] font-medium text-black
                                         sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                                         lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                                         xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                                         2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                                            System Size & Capacity
                                        </h3>
                                    </div>
                                    <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                                        <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                                         text-[16px] leading-[120%] font-normal text-black
                                         sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                         md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                         lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                                         xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                                         2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                            How much energy the system can produce.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Production & Performance Card */}
                        <div className="card-flip flex-1 min-w-[300px] max-w-[400px] bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
                            <div className="w-full flex flex-col items-center justify-start">
                                {/* Icon Section */}
                                <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                                    <div className="flex items-center justify-start gap-[30px]">
                                        <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                                            <img
                                                src="/evaluating-solar-system/section 3/production.svg"
                                                alt="Performance gauge icon"
                                                className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                                    <div className="w-full flex items-start justify-start px-[30px]">
                                        <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                                         text-[25px] leading-[120%] font-medium text-black
                                         sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                                         lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                                         xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                                         2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                                            Production & Performance
                                        </h3>
                                    </div>
                                    <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                                        <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                                         text-[16px] leading-[120%] font-normal text-black
                                         sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                         md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                         lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                                         xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                                         2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                            Actual vs. expected electricity generation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Energy Costs Avoided Card */}
                        <div className="card-flip flex-1 min-w-[300px] max-w-[400px] bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
                            <div className="w-full flex flex-col items-center justify-start">
                                {/* Icon Section */}
                                <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                                    <div className="flex items-center justify-start gap-[30px]">
                                        <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                                            <img
                                                src="/evaluating-solar-system/section 3/energy.svg"
                                                alt="Utility tower icon"
                                                className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                                    <div className="w-full flex items-start justify-start px-[30px]">
                                        <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                                         text-[25px] leading-[120%] font-medium text-black
                                         sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                                         lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                                         xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                                         2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                                            Energy Costs Avoided
                                        </h3>
                                    </div>
                                    <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                                        <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                                         text-[16px] leading-[120%] font-normal text-black
                                         sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                         md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                         lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                                         xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                                         2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                            What you would have paid to the utility without solar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Remaining Useful Life Card */}
                        <div className="card-flip flex-1 min-w-[300px] max-w-[400px] bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
                            <div className="w-full flex flex-col items-center justify-start">
                                {/* Icon Section */}
                                <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                                    <div className="flex items-center justify-start gap-[30px]">
                                        <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                                            <img
                                                src="/evaluating-solar-system/section 3/remaining.svg"
                                                alt="Calendar icon"
                                                className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                                    <div className="w-full flex items-start justify-start px-[30px]">
                                        <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                                         text-[25px] leading-[120%] font-medium text-black
                                         sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                                         lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                                         xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                                         2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                                            Remaining Useful Life
                                        </h3>
                                    </div>
                                    <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                                        <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                                         text-[16px] leading-[120%] font-normal text-black
                                         sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                         md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                         lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                                         xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                                         2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                            How many years of benefit are left.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Documentation Card */}
                        <div className="card-flip flex-1 min-w-[300px] max-w-[400px] bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#115056] cursor-pointer group">
                            <div className="w-full flex flex-col items-center justify-start">
                                {/* Icon Section */}
                                <div className="w-full flex items-center justify-start p-[30px] border-b border-[#a5dcdf] transition-colors duration-300 ease-in-out group-hover:border-[#115056]">
                                    <div className="flex items-center justify-start gap-[30px]">
                                        <div className="w-[130px] h-[130px] bg-white rounded-[10px] border border-[#115056] flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-[#F1FAFA] group-hover:scale-110">
                                            <img
                                                src="/evaluating-solar-system/section 3/documentation.svg"
                                                alt="Documentation icon"
                                                className="w-[90px] h-[94px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="w-full bg-gray-50 flex flex-col items-center justify-start gap-5 px-0 py-[30px] pt-[50px] transition-colors duration-300 ease-in-out group-hover:bg-[#F8FFFE]">
                                    <div className="w-full flex items-start justify-start px-[30px]">
                                        <h3 className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0 min-h-[70px] flex items-center
                                         text-[25px] leading-[120%] font-medium text-black
                                         sm:text-[25px] sm:leading-[120%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[120%] md:font-medium md:text-black
                                         lg:text-[24px] lg:leading-[150%] lg:font-medium lg:text-black
                                         xl:text-[24px] xl:leading-[150%] xl:font-medium xl:text-black
                                         2xl:text-[24px] 2xl:leading-[150%] 2xl:font-medium 2xl:text-black">
                                            Documentation
                                        </h3>
                                    </div>
                                    <div className="w-full flex items-center justify-start px-[30px] py-2.5">
                                        <p className="font-['Inter'] transition-colors duration-300 ease-in-out group-hover:text-[rgba(0,0,0,0.8)] mb-0 min-h-11 flex items-center
                                         text-[16px] leading-[120%] font-normal text-black
                                         sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                         md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                         lg:text-[15px] lg:leading-[160%] lg:font-normal lg:text-black
                                         xl:text-[15px] xl:leading-[160%] xl:font-normal xl:text-black
                                         2xl:text-[15px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                            Ownership, warranties, and utility agreements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HowItWorksSection
                title="The 3 Appraisal Methods for Solar"
                subtitle="Appraisers have three recognized approaches for determining the contributory value of solar to a home:"
                step1={{
                    icon: "/evaluating-solar-system/section 4/income.svg",
                    label: "Income Approach",
                    description: "Calculates value based on the present worth of future energy savings."
                }}
                step2={{
                    icon: "/evaluating-solar-system/section 4/cost.svg",
                    label: "Cost Approach",
                    description: "Considers the cost to replace the system, minus depreciation for age and condition."
                }}
                step3={{
                    icon: "/evaluating-solar-system/section 4/sales.svg",
                    label: "Sales Comparison Approach",
                    description: "Compares recent sales of similar homes with and without solar, adjusting for differences.\n\nWhen comparable sales data is not available or does not reliably reflect the solar system's value, industry guidance from the Appraisal Institute and others recommends using the Income Approach and/or Cost Approach as the best options for establishing contributory value."
                }}
            />

            <section className="section-5 w-full bg-[#115056] flex flex-col items-center justify-start relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-24 lg:py-32 xl:py-36 2xl:py-40">
                <div className="w-full max-w-7xl flex flex-col items-start justify-start gap-12 sm:gap-14 md:gap-16 lg:gap-20">
                    {/* Section Header */}
                    <div className="w-full flex items-center justify-center">
                        <h2 className="bounce-in text-center text-white font-medium font-['Aeonik_Pro'] leading-[110%] mb-0
                         text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] transition-all duration-300 ease-in-out hover:text-[#F1FAFA] cursor-default">
                            How Sprk Supports the Process
                        </h2>
                    </div>

                    {/* Content Section */}
                    <div className="w-full flex flex-col lg:flex-row items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-10">
                        {/* Left Image */}
                        <div className="image-slide-left w-full lg:w-1/2 flex flex-col items-center justify-center">
                            <div className="relative w-full max-w-[350px] h-auto flex items-center justify-center">
                                <img
                                    src="/evaluating-solar-system/section 5/image1.svg"
                                    alt="Green Home Appraisal Report sample document"
                                    className="w-full h-auto max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="card-slide-right w-full lg:w-1/2 flex flex-col items-start justify-start gap-6 sm:gap-7 md:gap-8 lg:gap-8">
                            {/* Main Content */}
                            <div className="w-full flex items-start justify-start">
                                <h4 className="text-reveal text-white font-medium font-['Aeonik_Pro'] leading-[110%] mb-0
                                 text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] transition-all duration-300 ease-in-out hover:text-[#F1FAFA]">
                                    Sprk provides appraisers with two of these three methods. Income and Cost in a clear, standardized format through our Green Home Appraisal Report.
                                </h4>
                            </div>

                            {/* Additional Content */}
                            <div className="w-full flex items-start justify-start pt-0 sm:pt-2 md:pt-3 lg:pt-4">
                                <div className="text-reveal w-full font-normal font-['Aeonik_Pro'] leading-[110%] text-[rgba(255,255,255,0.8)]
                                 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] transition-all duration-300 ease-in-out">
                                    <p className="mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 transition-opacity duration-300 ease-in-out hover:opacity-90">
                                        The <span className="font-medium font-['Aeonik_Pro'] text-white transition-colors duration-300 ease-in-out">Sales Comparison</span> Approach depends on current local market data, and appraisers determine this portion themselves.
                                    </p>
                                    <p className="mb-0 transition-opacity duration-300 ease-in-out hover:opacity-90">
                                        By giving appraisers verified production, cost, and savings data in one report, Sprk makes it simple to apply industry-standard valuation methods consistently and accurately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-6 w-full flex flex-col items-center justify-start relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-32 xl:py-36 2xl:py-40">
                <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 sm:gap-12 md:gap-14 lg:gap-20">
                    {/* Section Header */}
                    <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-5">
                        <div className="w-full flex items-center justify-center">
                            <h2 className="bounce-in text-center font-['Aeonik_Pro'] transition-all duration-300 ease-in-out hover:text-[#115056] cursor-default
                             text-[35px] leading-[110%] font-medium text-black mb-0
                             sm:text-[35px] sm:leading-[110%] sm:font-medium sm:text-black sm:mb-0
                             md:text-[35px] md:leading-[110%] md:font-medium md:text-black md:mb-0
                             lg:text-[56px] lg:leading-[110%] lg:font-medium lg:text-black lg:mb-0
                             xl:text-[56px] xl:leading-[110%] xl:font-medium xl:text-black xl:mb-0
                             2xl:text-[56px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black 2xl:mb-0">
                                From Energy Savings to Real Estate Value –<br />How Solar is Measured
                            </h2>
                        </div>
                    </div>

                    {/* Cards Container - Will add content here */}
                    <div className="w-full relative rounded-[10px]">
                        <div className="w-full flex flex-wrap items-start justify-start gap-0 overflow-hidden">
                            {/* Step 1 - Measure Utility Savings */}
                            <div className="card-slide-left flex-1 min-w-[295px] h-[730px] bg-white flex flex-col items-center justify-start overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg group">
                                <div className="w-full h-full bg-white flex flex-col items-center justify-start min-w-[295px]">
                                    <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-5">
                                        <h5 className="font-['Aeonik_Pro'] transition-all duration-300 ease-in-out mb-0
                                         text-[25px] leading-[110%] font-medium text-black
                                         sm:text-[25px] sm:leading-[110%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[110%] md:font-medium md:text-black
                                         lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-black
                                         xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-black
                                         2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black">Step 1</h5>
                                    </div>
                                    <div className="w-full flex items-center justify-start min-h-[180px] px-[30px] py-0 rounded-[50px]">
                                        <img src="/evaluating-solar-system/section 6/step1.svg" alt="Piggy bank with energy savings icon" className="w-[120px] h-[120px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <div className="w-full flex flex-col items-start justify-start gap-5 px-0 py-[30px]">
                                        <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-0">
                                            <h5 className="font-['Aeonik_Pro'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0
                                             text-[20px] leading-[110%] font-medium text-black
                                             sm:text-[20px] sm:leading-[110%] sm:font-medium sm:text-black
                                             md:text-[20px] md:leading-[110%] md:font-medium md:text-black
                                             lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-black
                                             xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-black
                                             2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black">Measure Utility Savings</h5>
                                        </div>
                                        <div className="w-full flex items-start justify-start px-[30px] py-0">
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-black
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">The foundation of solar value is the money saved from reduced utility bills. These savings, measured over time, form the basis for calculating a system&apos;s worth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 - Calculate Solar Value */}
                            <div className="card-bounce-in flex-1 min-w-[295px] h-[730px] bg-[#115056] flex flex-col items-center justify-start overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-[#0d4449] group">
                                <div className="w-full h-full bg-[#115056] flex flex-col items-center justify-start min-w-[295px]">
                                    <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-5">
                                        <h5 className="font-['Aeonik_Pro'] transition-all duration-300 ease-in-out mb-0
                                         text-[25px] leading-[110%] font-medium text-white
                                         sm:text-[25px] sm:leading-[110%] sm:font-medium sm:text-white
                                         md:text-[25px] md:leading-[110%] md:font-medium md:text-white
                                         lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-white
                                         xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-white
                                         2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-white">Step 2</h5>
                                    </div>
                                    <div className="w-full flex items-center justify-start min-h-[180px] px-[30px] py-0 rounded-[50px]">
                                        <img src="/evaluating-solar-system/section 6/step2.svg" alt="Calculator with energy assessment icon" className="w-[100px] h-[100px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                    </div>
                                    <div className="w-full flex flex-col items-start justify-start gap-5 px-0 py-[30px]">
                                        <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-0">
                                            <h5 className="font-['Aeonik_Pro'] transition-colors duration-300 ease-in-out mb-0
                                             text-[20px] leading-[110%] font-medium text-white
                                             sm:text-[20px] sm:leading-[110%] sm:font-medium sm:text-white
                                             md:text-[20px] md:leading-[110%] md:font-medium md:text-white
                                             lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-white
                                             xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-white
                                             2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-white">Calculate Solar Value</h5>
                                        </div>
                                        <div className="w-full flex items-start justify-start px-[30px] py-0">
                                            <div className="font-['Inter'] transition-all duration-300 ease-in-out
                                             text-[16px] leading-[120%] font-normal text-white
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-white
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-white
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-white
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-white
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-white">
                                                <p className="mb-4">Appraisers use three methods to determine a solar system's contributory value:</p>
                                                <ul className="list-disc ml-6 space-y-1">
                                                    <li><span className="font-semibold text-white">Income</span> – Present worth of future energy savings</li>
                                                    <li><span className="font-semibold text-white">Cost</span> – Replacement minus depreciation</li>
                                                    <li><span className="font-semibold text-white">Sales Comparison</span> – Market comps<br />When reliable sales data isn&apos;t available, industry guidance recommends Income and Cost as the best options.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 - Document Solar Value */}
                            <div className="card-slide-right flex-1 min-w-[295px] h-[730px] bg-white flex flex-col items-center justify-start overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg group">
                                <div className="w-full h-full bg-white flex flex-col items-center justify-start min-w-[295px]">
                                    <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-5">
                                        <h5 className="font-['Aeonik_Pro'] transition-all duration-300 ease-in-out mb-0
                                         text-[25px] leading-[110%] font-medium text-black
                                         sm:text-[25px] sm:leading-[110%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[110%] md:font-medium md:text-black
                                         lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-black
                                         xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-black
                                         2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black">Step 3</h5>
                                    </div>
                                    <div className="w-full flex items-center justify-start min-h-[180px] px-[30px] py-0 rounded-[50px]">
                                        <img src="/evaluating-solar-system/section 6/step3.svg" alt="Green Home Appraisal Certificate document" className="w-[120px] h-[120px] object-contain" />
                                    </div>
                                    <div className="w-full flex flex-col items-start justify-start gap-5 px-0 py-[30px]">
                                        <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-0">
                                            <h5 className="font-['Aeonik_Pro'] transition-colors duration-300 ease-in-out group-hover:text-[#115056] mb-0
                                             text-[20px] leading-[110%] font-medium text-black
                                             sm:text-[20px] sm:leading-[110%] sm:font-medium sm:text-black
                                             md:text-[20px] md:leading-[110%] md:font-medium md:text-black
                                             lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-black
                                             xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-black
                                             2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black">Document Solar Value with Sprk Appraisal Report</h5>
                                        </div>
                                        <div className="w-full flex items-start justify-start px-[30px] py-0">
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-black
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">Sprk provides verified Income and Cost approach data in one clear report, helping appraisers apply recognized methods quickly and accurately.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 - Appraiser Accurately Appraises */}
                            <div className="card-zoom-in flex-1 min-w-[295px] h-[730px] bg-[#115056] flex flex-col items-center justify-start overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-[#0d4449] group">
                                <div className="w-full h-full bg-[#115056] flex flex-col items-center justify-start min-w-[295px]">
                                    <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-5">
                                        <h5 className="font-['Aeonik_Pro'] transition-all duration-300 ease-in-out mb-0
                                         text-[25px] leading-[110%] font-medium text-white
                                         sm:text-[25px] sm:leading-[110%] sm:font-medium sm:text-white
                                         md:text-[25px] md:leading-[110%] md:font-medium md:text-white
                                         lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-white
                                         xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-white
                                         2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-white">Step 4</h5>
                                    </div>
                                    <div className="w-full flex items-center justify-start min-h-[180px] px-[30px] py-0 rounded-[50px]">
                                        <img src="/evaluating-solar-system/section 6/step4.svg" alt="Solar inspection and appraisal icon" className="w-[120px] h-[120px] object-contain" />
                                    </div>
                                    <div className="w-full flex flex-col items-start justify-start gap-5 px-0 py-[30px]">
                                        <div className="w-full flex items-start justify-start min-h-[60px] px-[30px] py-0">
                                            <h5 className="font-['Aeonik_Pro'] transition-colors duration-300 ease-in-out mb-0
                                             text-[20px] leading-[110%] font-medium text-white
                                             sm:text-[20px] sm:leading-[110%] sm:font-medium sm:text-white
                                             md:text-[20px] md:leading-[110%] md:font-medium md:text-white
                                             lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-white
                                             xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-white
                                             2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-white">Appraiser Accurately Appraises Solar Home</h5>
                                        </div>
                                        <div className="w-full flex items-start justify-start px-[30px] py-0">
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-white
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-white
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-white
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-white
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-white
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-white">Clear, interactive reports give appraisers the documentation they need to assign accurate value — turning solar into a reason to buy, not a mystery to avoid.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 border border-[rgba(0,0,0,0.2)] rounded-[10px] pointer-events-none"></div>
                    </div>
                </div>
            </section>
            <section className="section-7 w-full flex flex-col items-center justify-start relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-32 xl:py-36 2xl:py-40">
                <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 sm:gap-12 md:gap-14 lg:gap-20">
                    {/* Section Header */}
                    <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-4 sm:gap-6 md:gap-7 lg:gap-8">
                        <div className="card-slide-left w-full lg:flex-1 flex items-start justify-center">
                            <h2 className="fade-up font-['Aeonik_Pro'] transition-all duration-300 ease-in-out hover:text-[#115056] cursor-default mb-0
                             text-[35px] leading-[110%] font-medium text-black
                             sm:text-[35px] sm:leading-[110%] sm:font-medium sm:text-black
                             md:text-[35px] md:leading-[110%] md:font-medium md:text-black
                             lg:text-[56px] lg:leading-[110%] lg:font-medium lg:text-black
                             xl:text-[56px] xl:leading-[110%] xl:font-medium xl:text-black
                             2xl:text-[56px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black">How to Showcase the Value of Solar to Home Buyers</h2>
                        </div>
                        <div className="card-slide-right w-full lg:flex-1 flex items-start justify-center pt-0 lg:pt-[15px]">
                            <div className="text-reveal font-['Inter'] transition-all duration-300 ease-in-out
                             text-[16px] leading-[120%] font-normal text-black
                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">
                                <p className="mb-4 transition-opacity duration-300 ease-in-out hover:opacity-90">Even if a solar system is objectively valuable, <span className="font-medium text-black transition-colors duration-300 ease-in-out hover:text-[#115056]">a buyer won&apos;t pay more for it if they can&apos;t see the benefit</span>.</p>
                                <p className="mb-4 transition-opacity duration-300 ease-in-out hover:opacity-90">Think of it like professional photography, staging, or highlighting a remodeled kitchen — you wouldn&apos;t leave those features unmentioned and hope a buyer notices.</p>
                                <p className="mb-0 transition-opacity duration-300 ease-in-out hover:opacity-90">Solar works the same way.</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div className="testimonial-card w-full max-w-[1248px] flex flex-col items-center justify-start">
                        <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:border-[#115056] hover:scale-[1.02]">
                            <div className="w-full h-auto lg:h-[500px] flex flex-col lg:flex-row items-start justify-start">
                                {/* Left Side - Image */}
                                <div className="image-slide-left w-full lg:w-[624px] bg-gray-50 flex items-center justify-center min-h-[300px] lg:h-[500px] transition-colors duration-300 ease-in-out hover:bg-[#F8FFFE]">
                                    <img src="/evaluating-solar-system/section 7/image1.svg" alt="Sprk Solar Listing Report sample" className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105" />
                                </div>

                                {/* Right Side - Content */}
                                <div className="testimonial-content w-full lg:flex-1 bg-white flex flex-col items-start justify-start gap-8 lg:gap-[35px] p-6 lg:p-[30px] min-h-[300px] lg:h-[500px]">
                                    <div className="w-full">
                                        <h5 className="font-['Aeonik_Pro'] transition-all duration-300 ease-in-out mb-0
                                         text-[25px] leading-[110%] font-medium text-black
                                         sm:text-[25px] sm:leading-[110%] sm:font-medium sm:text-black
                                         md:text-[25px] md:leading-[110%] md:font-medium md:text-black
                                         lg:text-[32px] lg:leading-[110%] lg:font-medium lg:text-black
                                         xl:text-[32px] xl:leading-[110%] xl:font-medium xl:text-black
                                         2xl:text-[32px] 2xl:leading-[110%] 2xl:font-medium 2xl:text-black">The Sprk Solar Listing Report is an interactive, easy-to-read report that helps a home buyer see firsthand how the solar on a home will benefit them:</h5>
                                    </div>

                                    <div className="w-full flex flex-col gap-1">
                                        <div className="w-full flex items-center gap-[5px]">
                                            <div className="w-6 h-6 flex-shrink-0">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#115056" strokeWidth="2" fill="none" />
                                                    <path d="M9 12l2 2 4-4" stroke="#115056" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-black
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">How much it has already saved the homeowner</p>
                                        </div>
                                        <div className="w-full flex items-center gap-[5px]">
                                            <div className="w-6 h-6 flex-shrink-0">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#115056" strokeWidth="2" fill="none" />
                                                    <path d="M9 12l2 2 4-4" stroke="#115056" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-black
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">How much it&apos;s projected to save the new owner</p>
                                        </div>
                                        <div className="w-full flex items-start gap-[5px]">
                                            <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#115056" strokeWidth="2" fill="none" />
                                                    <path d="M9 12l2 2 4-4" stroke="#115056" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-black
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">How it will impact their future energy bills</p>
                                        </div>
                                        <div className="w-full flex items-start gap-[5px]">
                                            <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#115056" strokeWidth="2" fill="none" />
                                                    <path d="M9 12l2 2 4-4" stroke="#115056" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                             text-[16px] leading-[120%] font-normal text-black
                                             sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                             md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                             lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                             xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                             2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">Transfer details, warranty information, and system specifications</p>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <p className="font-['Inter'] transition-all duration-300 ease-in-out mb-0
                                         text-[16px] leading-[120%] font-normal text-black
                                         sm:text-[16px] sm:leading-[120%] sm:font-normal sm:text-black
                                         md:text-[16px] md:leading-[120%] md:font-normal md:text-black
                                         lg:text-[18px] lg:leading-[120%] lg:font-normal lg:text-black
                                         xl:text-[18px] xl:leading-[120%] xl:font-normal xl:text-black
                                         2xl:text-[20px] 2xl:leading-[160%] 2xl:font-normal 2xl:text-black">When buyers can clearly see the benefit and impact of the solar, they&apos;re far more likely to view it as a reason to buy — not a mystery to avoid.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="cta-button w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                        {/* Primary Button */}
                        <div className="w-full sm:w-auto bg-[#115056] rounded-[5px] p-[5px] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-lg cursor-pointer group hover:scale-105">
                            <div className="w-full sm:w-[418px] flex items-center justify-center px-[15px] py-[5px]">
                                <p className="flex-1 font-['Inter'] leading-[120%] text-center mb-0 transition-colors duration-200 group-hover:text-[#115056]
                                 text-[18px] font-normal text-white
                                 sm:text-[18px] sm:font-normal sm:text-white
                                 md:text-[18px] md:font-normal md:text-white
                                 lg:text-[18px] lg:font-normal lg:text-white
                                 xl:text-[18px] xl:font-normal xl:text-white
                                 2xl:text-[20px] 2xl:font-normal 2xl:text-white">Get a Solar Listing Report</p>
                                <div className="w-[30px] h-[30px] flex items-center justify-center ml-2 transition-transform duration-200 group-hover:translate-x-1">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M13.75 21.25L20 15L13.75 8.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#115056] transition-colors duration-200" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Button */}
                        <div className="w-full sm:w-auto bg-white border border-[#115056] rounded-[5px] p-[5px] transition-all duration-200 ease-in-out hover:bg-[#115056] hover:shadow-lg cursor-pointer group hover:scale-105">
                            <div className="w-full sm:w-[418px] flex items-center justify-center px-[15px] py-[5px]">
                                <p className="flex-1 font-['Inter'] leading-[120%] text-center mb-0 transition-colors duration-200 group-hover:text-white
                                 text-[18px] font-normal text-black
                                 sm:text-[18px] sm:font-normal sm:text-black
                                 md:text-[18px] md:font-normal md:text-black
                                 lg:text-[18px] lg:font-normal lg:text-black
                                 xl:text-[18px] xl:font-normal xl:text-black
                                 2xl:text-[20px] 2xl:font-normal 2xl:text-black">See a Sample Listing Report</p>
                                <div className="w-[30px] h-[30px] flex items-center justify-center ml-2 transition-transform duration-200 group-hover:translate-x-1">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M13.75 21.25L20 15L13.75 8.75" stroke="#115056" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-200" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ScrollToTop />

        </div>
    );
}
