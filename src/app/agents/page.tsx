import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import HowItWorksSection from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimations from "@/components/ScrollAnimations";
import HowToGetStarted from "@/components/HowToGetStarted";
import TrustedBy from "@/components/TrustedBy";

const inter = Inter({ subsets: ["latin"] });

export default function AgentsPage() {
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[150px] pb-[40px] sm:pb-[50px] lg:pb-[60px]">
        <div className="flex flex-col items-center text-center gap-[50px] sm:gap-[60px] lg:gap-[80px]">
          {/* Header Container */}
          <header className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start px-2.5 py-0 w-full">
              <h1 className="fade-up font-['Aeonik_Pro'] font-medium text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] text-center w-full transition-all duration-300 ease-in-out">
                <span className="text-[#115056]">Clarity </span>
                <span className="text-[#141414]">for Solar Home Transactions</span>
              </h1>

              <div className="flex items-center justify-center px-2.5 py-0 w-full">
                <p className={`${inter.className} text-reveal font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] max-w-[800px] transition-all duration-300 ease-in-out`}>
                  Sprk gives real estate agents the training, tools, and reports to market, disclose, and transfer
                  solar homes the right way without having to become a solar expert.
                </p>
              </div>
            </div>

            <div className="slide-up-cards flex flex-wrap gap-[15px] items-center justify-center w-full">
              <Link
                href="#join"
                className="bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] shrink-0 hover:bg-white hover:text-[#115056] hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out border border-[#115056]"
              >
                <span className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.1] text-white whitespace-nowrap">
                  Get Solar Certified
                </span>
              </Link>
              <Link
                href="#demo"
                className="flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] shrink-0 border border-[#115056] bg-white hover:bg-[#115056] hover:text-white hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out"
              >
                <span className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.1] text-[#115056] whitespace-nowrap">
                  Generate a Sprk Listing Report
                </span>
              </Link>
            </div>
          </header>

                    {/* Trusted By Section */}
          <TrustedBy />
        </div>
      </section>
      {/* Section 2 */}
      <section className="section-2 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[100px]">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex items-start justify-center w-full">
              <h2 className="text-reveal font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out">
                Why Real Estate Agents Choose Sprk
              </h2>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h3 className="bounce-in font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[1.1] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out">
                  Solar Is Changing the Market, and Most Agents Aren&apos;t Prepared
                </h3>
              </div>
              <div className="flex items-start justify-center w-full">
                <p className={`${inter.className} text-reveal font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] flex-1 transition-all duration-300 ease-in-out`}>
                  Over 5 million U.S. homes now have solar, and that number is growing fast. But most agents aren&apos;t trained to explain system value, navigate ownership types, or handle disclosures. That&apos;s where Sprk steps in.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-center justify-center w-full">
            {/* Card 1 - Learn how solar impacts real estate */}
            <div className="card-flip bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start overflow-hidden w-full">
                <div className="flex h-[171px] items-center justify-center w-full border-b border-[rgba(17,80,86,0.5)]">
                  <div className="flex items-center justify-start">
                    <div className="bg-white border border-[#115056] rounded-[10px] p-[20px] flex items-center justify-start transition-all duration-300 ease-in-out hover:bg-[#F1FAFA]">
                      <Image
                        src="/agents-page/section 2/learn-how.svg"
                        alt="Learn how solar impacts real estate"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col gap-5 items-center justify-start py-[30px] sm:py-[40px] lg:py-[50px] px-4 sm:px-6 lg:px-0 w-full">
                  <div className="flex items-center justify-start px-4 sm:px-6 lg:px-[30px] py-2.5 w-full">
                    <p className="font-['Inter'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.2] text-center text-[#141414] flex-1 min-h-[60px] flex items-center justify-center">
                      Learn how solar impacts real estate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Disclose and market solar with confidence */}
            <div className="card-flip bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start overflow-hidden w-full">
                <div className="flex h-[171px] items-center justify-center w-full border-b border-[rgba(17,80,86,0.5)]">
                  <div className="flex items-center justify-start">
                    <div className="bg-white border border-[#115056] rounded-[10px] p-[20px] flex items-center justify-start">
                      <Image
                        src="/agents-page/section 2/disclose.svg"
                        alt="Disclose and market solar with confidence"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col gap-5 items-center justify-start py-[50px] px-0 w-full">
                  <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                    <p className="font-['Inter'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.2] text-center text-[#141414] flex-1 min-h-[60px] flex items-center justify-center">
                      Disclose and market solar with confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Reduce delays tied to solar contracts */}
            <div className="card-flip bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start overflow-hidden w-full">
                <div className="flex h-[171px] items-center justify-center w-full border-b border-[rgba(17,80,86,0.5)]">
                  <div className="flex items-center justify-start">
                    <div className="bg-white border border-[#115056] rounded-[10px] p-[20px] flex items-center justify-start">
                      <Image
                        src="/agents-page/section 2/reduce.svg"
                        alt="Reduce delays tied to solar contracts"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col gap-5 items-center justify-start py-[50px] px-0 w-full">
                  <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                    <p className="font-['Inter'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.2] text-center text-[#141414] flex-1 min-h-[60px] flex items-center justify-center">
                      Reduce delays tied to solar contracts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Become the go-to solar agent in your market */}
            <div className="card-flip bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start overflow-hidden w-full">
                <div className="flex h-[171px] items-center justify-center w-full border-b border-[rgba(17,80,86,0.5)]">
                  <div className="flex items-center justify-start">
                    <div className="bg-white border border-[#115056] rounded-[10px] p-[20px] flex items-center justify-start">
                      <Image
                        src="/agents-page/section 2/solar-agent.svg"
                        alt="Become the go-to solar agent in your market"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col gap-5 items-center justify-start py-[50px] px-0 w-full">
                  <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                    <p className="font-['Inter'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.2] text-center text-[#141414] flex-1 min-h-[60px] flex items-center justify-center">
                      Become the go-to solar agent in your market
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Attract solar homeowners looking for certified pros */}
            <div className="card-flip bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start overflow-hidden w-full">
                <div className="flex h-[171px] items-center justify-center w-full border-b border-[rgba(17,80,86,0.5)]">
                  <div className="flex items-center justify-start">
                    <div className="bg-white border border-[#115056] rounded-[10px] p-[20px] flex items-center justify-start">
                      <Image
                        src="/agents-page/section 2/homeowners.svg"
                        alt="Attract solar homeowners looking for certified pros"
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 flex flex-col gap-5 items-center justify-start py-[50px] px-0 w-full">
                  <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                    <p className="font-['Inter'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.2] text-center text-[#141414] flex-1 min-h-[60px] flex items-center justify-center">
                      Attract solar homeowners looking for certified pros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Solar in Deal */}
      <section className="section-3 w-full bg-[#115056]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[60px] sm:py-[80px] lg:py-[150px]">
          <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[50px] items-center justify-start w-full">
            {/* Header */}
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h2 className="bounce-in font-['Aeonik_Pro'] font-medium text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] leading-[110%] text-center text-white flex-1 transition-all duration-300 ease-in-out mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5">
                  Free Guide – Solar in the Deal
                </h2>
              </div>

              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex items-start justify-center w-full">
                  <h4 className="text-reveal font-['Aeonik_Pro'] font-medium text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] leading-[110%] text-center text-white flex-1 transition-all duration-300 ease-in-out mb-2 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-3">
                    Curious about solar? This quick read will get you started.
                  </h4>
                </div>
                <div className="flex items-start justify-center w-full">
                  <span className={`${inter.className} fade-up font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[120%] text-center text-[rgba(255,255,255,0.8)] flex-1 transition-all duration-300 ease-in-out mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2`}>
                    Understand how solar affects equity, what to disclose, and how to avoid delays. Whether you&apos;re listing or
                    representing a buyer, this free guide will help you protect your clients and close with confidence.
                  </span>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="testimonial-card bg-[#115056] rounded-[10px] border border-[rgba(0,0,0,0.15)] w-full max-w-[1248px] relative hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out transform-gpu">
              <div className="flex flex-col lg:flex-row gap-0 items-start justify-start overflow-hidden w-full">
                {/* Left side - Image */}
                <div className="image-slide-left flex flex-col items-start justify-start w-full lg:w-[624px] shrink-0">
                  <div className="w-full h-[250px] sm:h-[300px] lg:h-[500px] min-w-0 shrink-0 bg-cover bg-center bg-no-repeat">
                    <Image
                      src="/agents-page/section 3/solar-in-deal.svg"
                      alt="Solar in Deal Guide"
                      width={624}
                      height={500}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="testimonial-content bg-white flex flex-col h-auto lg:h-[500px] items-start justify-between min-w-0 overflow-hidden p-4 sm:p-6 lg:p-[50px] flex-1 basis-0">
                  {/* Bullet Points */}
                  <div className="flex items-center justify-center w-full">
                    <div className={`${inter.className} quote-fade font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-[120%] text-[rgba(0,0,0,0.66)] flex-1 min-h-0 lg:min-h-[156px] transition-all duration-300 ease-in-out mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4`}>
                      <ul className="list-disc space-y-2">
                        <li className="ml-[33px] leading-[120%]">
                          How solar affects appraisals, contracts, and buyer confidence
                        </li>
                        <li className="ml-[33px] leading-[120%]">
                          The different types of solar ownership (and what to watch for)
                        </li>
                        <li className="ml-[33px] leading-[120%]">
                          What to ask, disclose, and document when listing or buying a solar-powered home
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Author Section */}
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <div className="flex items-center justify-center w-full">
                      <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-[120%] text-[rgba(0,0,0,0.66)] flex-1 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4`}>
                        Presented by Sprk Founder
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <h5 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] leading-[110%] text-[#141414] flex-1 mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                        Cory Vanderpool
                      </h5>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="cta-button flex flex-col gap-[5px] items-start justify-start w-full">
                    <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:bg-[#0d3e42] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 ease-in-out transform-gpu">
                      <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                        <span className={`${inter.className} font-normal text-[20px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[18px] leading-[120%] text-center text-white flex-1`}>
                          Download the Free eBook
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - How It Works */}
      <HowItWorksSection
        title="How It Works"
        subtitle="Sprk Helps Agents Simplify Solar"
        step1={{
          icon: "/agents-page/section 4/learn-how.svg",
          label: "Learn How to Represent Solar Homes",
          description: "Take the on-demand Sprk Solar Certification course—designed specifically for real estate agents."
        }}
        step2={{
          icon: "/agents-page/section 4/help-clients.svg",
          label: "Help Clients Collect Solar Info",
          description: "Use the Sprk app to gather key solar system details and generate trusted reports that keep deals on track."
        }}
        step3={{
          icon: "/agents-page/section 4/sprk-reports.svg",
          label: "Win with Sprk Reports",
          description: "Use the Sprk Listing Report and Appraisal Report to maximize home value—and protect buyers with a Solar Inspection Report from a Sprk Certified Inspector."
        }}
      />
      {/* Section 5 - Sprk Reports */}
      <section className="section-5 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[60px] sm:py-[80px] lg:py-[100px]">
        <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[50px] items-center justify-start w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex items-start justify-center w-full">
              <h2 className="bounce-in font-['Aeonik_Pro'] font-medium text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] leading-[110%] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5">
                Sprk Reports for Agents
              </h2>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h4 className={`${inter.className} text-reveal font-medium text-[18px] sm:text-[18px] md:text-[18px] lg:text-[35px] xl:text-[35px] leading-[110%] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out mb-2 sm:mb-2 md:mb-2 lg:mb-3 xl:mb-3`}>
                  Professional. Verified. Built for Real Estate.
                </h4>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-center justify-start w-full">
            {/* Card 1 - Sprk Listing Report */}
            <div className="report-card bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start w-full">
                {/* Image Section */}
                <div className="bg-[#115056] flex items-start justify-end overflow-hidden w-full">
                  <div className="flex flex-col items-start justify-start w-full h-[355px]">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat">
                      <Image
                        src="/agents-page/section 5/sprk-listing.svg"
                        alt="Sprk Listing Report"
                        width={400}
                        height={355}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-white flex flex-col gap-[22px] items-start justify-start pt-4 sm:pt-6 lg:pt-[30px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-[30px] w-full">
                  <div className="flex items-center justify-center w-full">
                    <h5 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] leading-[110%] text-[#141414] flex-1 min-h-[70px] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                      Sprk Listing Report
                    </h5>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-[120%] text-[rgba(0,0,0,0.66)] flex-1 h-[66px] min-h-[66px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4`}>
                      Make your solar listings easier to explain and easier to sell. Includes ownership info, utility bills, equipment condition, and financing details.
                    </p>
                  </div>
                </div>

                {/* Button Section */}
                <div className="bg-white flex gap-[22px] items-start justify-start pt-4 sm:pt-6 lg:pt-[30px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-[30px] w-full">
                  <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out flex-1 basis-0">
                    <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                      <span className={`${inter.className} font-normal text-[20px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[18px] leading-[120%] text-center text-white flex-1`}>
                        View Sample
                      </span>
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Solar Inspection Report */}
            <div className="report-card bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start w-full">
                {/* Image Section */}
                <div className="bg-[#115056] flex items-start justify-end overflow-hidden w-full">
                  <div className="flex flex-col items-start justify-start w-full h-[355px]">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat">
                      <Image
                        src="/agents-page/section 5/solar-inspection.svg"
                        alt="Solar Inspection Report"
                        width={400}
                        height={355}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-white flex flex-col gap-[22px] items-start justify-start pt-4 sm:pt-6 lg:pt-[30px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-[30px] w-full">
                  <div className="flex items-center justify-center w-full">
                    <h5 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] leading-[110%] text-[#141414] flex-1 min-h-[70px] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                      Solar Inspection Report
                    </h5>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-[120%] text-[rgba(0,0,0,0.66)] flex-1 h-[66px] min-h-[66px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4`}>
                      Order through a Sprk Certified Home Inspector to verify condition, performance, and remaining system life.
                    </p>
                  </div>
                </div>

                {/* Button Section */}
                <div className="bg-white flex gap-[22px] items-start justify-start pt-4 sm:pt-6 lg:pt-[30px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-[30px] w-full">
                  <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out flex-1 basis-0">
                    <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                      <span className={`${inter.className} font-normal text-[20px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[18px] leading-[120%] text-center text-white flex-1`}>
                        Find an Inspector
                      </span>
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Green Home Energy Report */}
            <div className="report-card bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex flex-col items-center justify-start w-full">
                {/* Image Section */}
                <div className="bg-[#115056] flex items-start justify-end overflow-hidden w-full">
                  <div className="flex flex-col items-start justify-start w-full h-[355px]">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat">
                      <Image
                        src="/agents-page/section 5/green-home.svg"
                        alt="Green Home Energy Report"
                        width={400}
                        height={355}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-white flex flex-col gap-[22px] items-start justify-start pt-4 sm:pt-6 lg:pt-[30px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-[30px] w-full">
                  <div className="flex items-center justify-center w-full">
                    <h5 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] leading-[110%] text-[#141414] flex-1 min-h-[70px] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                      Green Home Energy Report
                    </h5>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className={`${inter.className} font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-[120%] text-[rgba(0,0,0,0.66)] flex-1 h-[66px] min-h-[66px] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4`}>
                      Help buyers see how the home performs today—and how it could perform better tomorrow.
                    </p>
                  </div>
                </div>

                {/* Button Section */}
                <div className="bg-white flex gap-[22px] items-start justify-start pt-4 sm:pt-6 lg:pt-[30px] pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-[30px] w-full">
                  <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 hover:scale-105 hover:shadow-md transition-all duration-200 ease-in-out flex-1 basis-0">
                    <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                      <span className={`${inter.className} font-normal text-[20px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[18px] leading-[120%] text-center text-white flex-1`}>
                        View Sample
                      </span>
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 3 */}
      <HowToGetStarted
        title="How to Get Started with Sprk"
        subtitle="In Just Minutes, You Can Start Selling Solar Homes Smarter"
      />

      {/* Section 7 - Testimonials */}
      <div className="section-7">
        <Testimonials
          data={[
            {
              image: "/inspector-page/section 7/profile.svg",
              text: "\"The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.\"",
              name: "Trey S.",
              company: "Fusion Power"
            },
            {
              image: "/inspector-page/section 7/profile.svg",
              text: "\"The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.\"",
              name: "Trey S.",
              company: "Fusion Power"
            },
            {
              image: "/inspector-page/section 7/profile.svg",
              text: "\"The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.\"",
              name: "Trey S.",
              company: "Fusion Power"
            }
          ]}
        />
      </div>

      {/* Section 8 - CTA */}
      <div className="section-8">
        <CTA
          title="Choose Your Next Step"
          subtitle="Start Using Sprk on Your Next Deal"
          description="Whether you're listing a home with solar, supporting a buyer, or just want to stay ahead of the market—Sprk has the tools you need to lead with confidence."
          buttons={[
            { label: "Get Solar Certified", link: "/get-certified" },
            { label: "Generate a Listing Report", link: "/listing-report" },
            { label: "Find a Certified Inspector", link: "/find-inspector" }
          ]}
        />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}


