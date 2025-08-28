import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import HowItWorksSection from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function AgentsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 pt-[80px] sm:pt-[100px] lg:pt-[120px] xl:pt-[150px] pb-[40px] sm:pb-[50px] lg:pb-[60px]">
        <div className="flex flex-col items-center text-center gap-[50px] sm:gap-[60px] lg:gap-[80px]">
          {/* Header Container */}
          <header className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start px-2.5 py-0 w-full">
              <h1 className="font-['Aeonik_Pro'] font-medium text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] text-center w-full">
                <span className="text-[#115056]">Clarity </span>
                <span className="text-[#141414]">for Solar Home Transactions</span>
              </h1>
              
              <div className="flex items-center justify-center px-2.5 py-0 w-full">
                <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] max-w-[800px]`}>
                  Sprk gives real estate agents the training, tools, and reports to market, disclose, and transfer
                  solar homes the right way without having to become a solar expert.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-[15px] items-center justify-center w-full">
              <Link
                href="#join"
                className="bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] shrink-0"
              >
                <span className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.1] text-white whitespace-nowrap">
                  Get Solar Certified
                </span>
              </Link>
              <Link
                href="#demo"
                className="flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] shrink-0 border border-[#115056] bg-white"
              >
                <span className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[22px] lg:text-[25px] leading-[1.1] text-[#115056] whitespace-nowrap">
                  Generate a Sprk Listing Report
                </span>
              </Link>
            </div>
          </header>

          {/* Trusted By Section */}
          <div className="flex flex-col gap-[25px] items-center justify-start w-full">
            <div className={`${inter.className} font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] w-full`}>
              <p className="font-semibold mb-2">Trusted by:</p>
              <p className="mb-0">Thousands of agents across the U.S. use Sprk to simplify solar transactions,</p>
              <p className="mb-0">protect their clients, and stand out in a growing market.</p>
            </div>
            
            <div className="flex gap-[25px] items-center justify-center overflow-clip">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/agents-page/section 1/logo-test.svg"
                  alt={`Trusted partner logo ${index + 1}`}
                  width={150}
                  height={82}
                  className="opacity-50 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[100px]">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex items-start justify-center w-full">
              <h2 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-center text-[#141414] flex-1">
                Why Real Estate Agents Choose Sprk
              </h2>
            </div>
            
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h3 className="font-['Aeonik_Pro'] font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[1.1] text-center text-[#141414] flex-1">
                  Solar Is Changing the Market, and Most Agents Aren't Prepared
                </h3>
              </div>
              <div className="flex items-start justify-center w-full">
                <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] flex-1`}>
                  Over 5 million U.S. homes now have solar, and that number is growing fast. But most agents aren't trained to explain system value, navigate ownership types, or handle disclosures. That's where Sprk steps in.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-center justify-center w-full">
            {/* Card 1 - Learn how solar impacts real estate */}
            <div className="bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative">
              <div className="flex flex-col items-center justify-start overflow-hidden w-full">
                <div className="flex h-[171px] items-center justify-center w-full border-b border-[rgba(17,80,86,0.5)]">
                  <div className="flex items-center justify-start">
                    <div className="bg-white border border-[#115056] rounded-[10px] p-[20px] flex items-center justify-start">
                      <Image 
                        src="/agents-page/section 2/learn-how.svg" 
                        alt="Learn how solar impacts real estate" 
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
                      Learn how solar impacts real estate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Disclose and market solar with confidence */}
            <div className="bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative">
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
            <div className="bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative">
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
            <div className="bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative">
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
            <div className="bg-white rounded-[10px] border border-[rgba(17,80,86,0.5)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative">
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
      <section className="w-full bg-[#115056]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[150px]">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            {/* Header */}
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h2 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-center text-white flex-1">
                  Free Guide – Solar in the Deal
                </h2>
              </div>
              
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex items-start justify-center w-full">
                  <h3 className="font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.1] text-center text-white flex-1">
                    Curious about solar? This quick read will get you started.
                  </h3>
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-[rgba(255,255,255,0.8)] flex-1`}>
                    Understand how solar affects equity, what to disclose, and how to avoid delays. Whether you're listing or
                    representing a buyer, this free guide will help you protect your clients and close with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="bg-[#115056] rounded-[10px] border border-[rgba(0,0,0,0.15)] w-full max-w-[1248px] relative">
              <div className="flex flex-wrap gap-0 items-start justify-start overflow-hidden w-full">
                {/* Left side - Image */}
                <div className="flex flex-col items-start justify-start w-full lg:w-[624px] shrink-0">
                  <div className="w-full h-[500px] min-w-[350px] shrink-0 bg-cover bg-center bg-no-repeat">
                    <Image
                      src="/agents-page/section 3/solar-in-deal.svg"
                      alt="Solar in Deal Guide"
                      width={624}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="bg-white flex flex-col h-[500px] items-start justify-between min-w-[350px] overflow-hidden p-[50px] flex-1 basis-0">
                  {/* Bullet Points */}
                  <div className="flex items-center justify-center w-full">
                    <div className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] text-[rgba(0,0,0,0.66)] flex-1 min-h-[156px]`}>
                      <ul className="list-disc space-y-2">
                        <li className="ml-[33px] leading-[1.2]">
                          How solar affects appraisals, contracts, and buyer confidence
                        </li>
                        <li className="ml-[33px] leading-[1.2]">
                          The different types of solar ownership (and what to watch for)
                        </li>
                        <li className="ml-[33px] leading-[1.2]">
                          What to ask, disclose, and document when listing or buying a solar-powered home
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Author Section */}
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <div className="flex items-center justify-center w-full">
                      <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                        Presented by Sprk Founder
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <h4 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] leading-[1.1] text-[#141414] flex-1">
                        Cory Vanderpool
                      </h4>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                    <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 transition-opacity">
                      <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                        <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                          Download the Free eBook
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                          <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
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

      {/* Section 3 */}
      <HowItWorksSection
        title="How It Works"
        subtitle="Sprk Helps Agents Simplify Solar"
        step1={{
          icon: "/inspector-page/section 3/get-trained.svg",
          label: "Get Trained",
          description: "Complete Sprk's on-demand certification and learn how to inspect solar and energy systems with ease."
        }}
        step2={{
          icon: "/inspector-page/section 3/get-tools.svg",
          label: "Get Tools", 
          description: "Use the Sprk Pro app to collect data and generate polished reports in minutes right from your phone or tablet."
        }}
        step3={{
          icon: "/inspector-page/section 3/get-paid.svg",
          label: "Get Paid",
          description: "Offer more value to your clients, stand out with agents, and increase your profitability per job."
        }}
      />
      
      {/* Section 4 */}
         {/* Section 5 - Sprk Reports */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-24 py-[100px]">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex items-start justify-center w-full">
              <h2 className="font-['Aeonik_Pro'] font-medium text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] text-center text-[#141414] flex-1">
                Sprk Reports for Agents
              </h2>
            </div>
            
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h3 className={`${inter.className} font-medium text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.2] text-center text-[#141414] flex-1`}>
                  Professional. Verified. Built for Real Estate.
                </h3>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 items-center justify-start w-full">
            {/* Card 1 - Sprk Listing Report */}
            <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative overflow-hidden">
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
                <div className="bg-white flex flex-col gap-[22px] items-start justify-start pt-[30px] pb-10 px-[30px] w-full">
                  <div className="flex items-center justify-center w-full">
                    <h4 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] lg:text-[35px] leading-[1.1] text-[#141414] flex-1 min-h-[70px]">
                      Sprk Listing Report
                    </h4>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1 h-[66px] min-h-[66px]`}>
                      Make your solar listings easier to explain and easier to sell. Includes ownership info, utility bills, equipment condition, and financing details.
                    </p>
                  </div>
                </div>
                
                {/* Button Section */}
                <div className="bg-white flex gap-[22px] items-start justify-start pt-[30px] pb-10 px-[30px] w-full">
                  <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 transition-opacity flex-1 basis-0">
                    <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                      <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                        View Sample
                      </span>
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Solar Inspection Report */}
            <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative overflow-hidden">
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
                <div className="bg-white flex flex-col gap-[22px] items-start justify-start pt-[30px] pb-10 px-[30px] w-full">
                  <div className="flex items-center justify-center w-full">
                    <h4 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] lg:text-[35px] leading-[1.1] text-[#141414] flex-1 min-h-[70px]">
                      Solar Inspection Report
                    </h4>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1 h-[66px] min-h-[66px]`}>
                      Order through a Sprk Certified Home Inspector to verify condition, performance, and remaining system life.
                    </p>
                  </div>
                </div>
                
                {/* Button Section */}
                <div className="bg-white flex gap-[22px] items-start justify-start pt-[30px] pb-10 px-[30px] w-full">
                  <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 transition-opacity flex-1 basis-0">
                    <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                      <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                        Find an Inspector
                      </span>
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Green Home Energy Report */}
            <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] flex-1 basis-0 min-w-[300px] sm:min-w-[400px] relative overflow-hidden">
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
                <div className="bg-white flex flex-col gap-[22px] items-start justify-start pt-[30px] pb-10 px-[30px] w-full">
                  <div className="flex items-center justify-center w-full">
                    <h4 className="font-['Aeonik_Pro'] font-medium text-[28px] sm:text-[32px] lg:text-[35px] leading-[1.1] text-[#141414] flex-1 min-h-[70px]">
                      Green Home Energy Report
                    </h4>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className={`${inter.className} font-normal text-[16px] sm:text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1 h-[66px] min-h-[66px]`}>
                      Help buyers see how the home performs today—and how it could perform better tomorrow.
                    </p>
                  </div>
                </div>
                
                {/* Button Section */}
                <div className="bg-white flex gap-[22px] items-start justify-start pt-[30px] pb-10 px-[30px] w-full">
                  <button className="bg-[#115056] rounded-[5px] p-[5px] w-full hover:opacity-90 transition-opacity flex-1 basis-0">
                    <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                      <span className={`${inter.className} font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.2] text-center text-white flex-1`}>
                        View Sample
                      </span>
                      <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.83709 1.66291C9.47097 1.2968 9.47097 0.703204 9.83709 0.337087C10.2032 -0.0290291 10.7968 -0.0290291 11.1629 0.337087L16.1629 5.33709C16.529 5.7032 16.529 6.2968 16.1629 6.66291L11.1629 11.6629C10.7968 12.029 10.2032 12.029 9.83709 11.6629C9.47097 11.2968 9.47097 10.7032 9.83709 10.3371L13.2367 6.9375H1.125C0.607234 6.9375 0.1875 6.51777 0.1875 6C0.1875 5.48223 0.607234 5.0625 1.125 5.0625H13.2367L9.83709 1.66291Z" fill="white"/>
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

      {/* Section 5 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-[100px] sm:px-6 lg:px-8 mb-[50px]">
        <div className="flex flex-col items-center gap-[50px] pb-[100px]">
          <div className="text-center mb-8">
            <h3
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              How to Get Started with Sprk
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
            It’s Fast and Easy to Get Sprk Certified
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6">
            <div className="flex w-[170px] flex-col items-start absolute left-[250px] top-[250px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[170px] flex-col items-start absolute left-[600px] top-[180px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow Down" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[170px] flex-col items-start absolute right-[250px] top-[250px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 1
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/sign-up.svg" alt="Sign Up" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Sign Up for Free
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Create your Sprk Pro account, no upfront cost, no obligation.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 2
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/get-sprk-certified.svg" alt="Get Sprk Certified" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Get Sprk Certified
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Complete our on-demand training and start offering 15-minute solar and 5-minute energy inspections.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 3
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/add-sprk.svg" alt="Add Sprk to Your Services" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Add Sprk to Your Services
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Include Energy Reports with every inspection and Solar Reports on homes with solar, boost value and your bottom line.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 4
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/your-business.svg" alt="Grow Your Business" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                 Grow Your Business
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Use Sprk’s marketing tools and agent education resources to become the preferred inspector in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  
 
        {/* Section 7 - Testimonials */}
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

      {/* CTA Section */}
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

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </>
     );
}


