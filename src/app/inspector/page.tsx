
import Link from "next/link";
import { Inter } from "next/font/google";
import HowItWorksSection from "@/components/HowItWorksSection";
import HowToGetStarted from "@/components/HowToGetStarted";
import Testimonials from "@/components/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({ subsets: ["latin"] });

export default function InspectorPage() {
  return (
    <>
      <ScrollAnimations />
      <section className="section-1 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 pt-[150px] pb-[50px]">
        <div className="flex flex-col items-center gap-20">
          {/* Main Content */}
          <div className="flex flex-col w-full">
            <header className="flex flex-col gap-[50px] items-center w-full">
              <div className="flex flex-col gap-[30px] items-center px-2.5 w-full">
                <h1 className="fade-up font-['Aeonik_Pro'] font-medium text-[40px] sm:text-[40px] md:text-[2rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[5rem] leading-[110%] sm:leading-[110%] md:leading-[1.3] lg:leading-[1.3] xl:leading-[1.1] 2xl:leading-[1.1] text-center text-[#141414] w-full transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                  <span className="text-[#115056] transition-all duration-300 ease-in-out">Add Solar Inspections</span>
                  <span className="transition-all duration-300 ease-in-out"> to</span>
                  <br />
                  <span className="transition-all duration-300 ease-in-out">Grow Your Business</span>
                </h1>

                <div className="flex items-center justify-center px-2.5 w-full">
                  <p className={`${inter.className} fade-up font-normal text-[16px] sm:text-[16px] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.5] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] text-center text-[rgba(0,0,0,0.66)] flex-1 transition-all duration-300 ease-in-out opacity-80`}>
                    Sprk equips home inspectors with the training, tools, and reports to inspect solar and energy
                    <br />
                    systems confidently, deliver more value, and grow revenue on every job.
                  </p>
                </div>
              </div>

              <div className="slide-up-cards flex flex-wrap gap-[15px] items-center justify-center w-full">
                <Link
                  href="#join"
                  className="bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] text-white font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[20px] md:text-[20px] lg:text-[1.125rem] xl:text-[1.125rem] 2xl:text-[1.25rem] leading-[120%] sm:leading-[120%] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] transition-all duration-200 ease-in-out hover:bg-white hover:text-[#115056] hover:border hover:border-[#115056] hover:transform hover:scale-105 hover:shadow-lg"
                >
                  Join Sprk
                </Link>
                <Link
                  href="#demo"
                  className="flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] border border-[#115056] text-[#115056] font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[20px] md:text-[20px] lg:text-[1.125rem] xl:text-[1.125rem] 2xl:text-[1.25rem] leading-[120%] sm:leading-[120%] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] transition-all duration-200 ease-in-out hover:bg-[#115056] hover:text-white hover:transform hover:scale-105 hover:shadow-lg"
                >
                  Watch a Demo
                </Link>
              </div>
            </header>
          </div>

          {/* Trusted By Section */}
          <div className="text-reveal flex flex-col gap-[25px] items-center w-full">
            <p className={`${inter.className} font-semibold italic text-[18px] leading-[1.2] text-center text-[rgba(0,0,0,0.66)] transition-all duration-300 ease-in-out`}>
              Trusted by:
            </p>
            <div className="flex gap-[25px] items-center justify-center overflow-clip">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className={`slide-up-cards h-[82px] w-[150px] opacity-50 relative transition-all duration-300 ease-in-out hover:opacity-75 hover:transform hover:scale-105`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div
                    className="absolute inset-0 bg-center bg-contain bg-no-repeat transition-all duration-300 ease-in-out"
                    style={{ backgroundImage: `url('/inspector-page/section1/trusted-by.svg')` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="section-2 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
        <div className="flex flex-col items-center gap-20">
          {/* Title */}
          <div className="flex flex-col gap-[50px] items-center w-[1248px] max-w-full">
            <div className="flex flex-col gap-[30px] items-center w-full">
              <div className="flex items-start justify-center w-full">
                <h2 className="text-reveal font-['Aeonik_Pro'] font-medium text-[18px] sm:text-[18px] md:text-[1.75rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] leading-[120%] sm:leading-[120%] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.1] 2xl:leading-[1.1] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-105">
            Why Home Inspectors Choose Sprk
          </h2>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="testimonial-card flex flex-col items-start w-full">
            <div className="bg-[#115056] h-[500px] rounded-[10px] w-[1248px] max-w-full relative transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-[1.02]">
              <div className="flex flex-wrap h-[500px] items-start overflow-clip relative w-full">
                {/* Image Section */}
                <div className="image-slide-left bg-gray-50 flex flex-col items-start w-[624px] max-w-[50%] transition-all duration-300 ease-in-out">
                  <div 
                    className="h-[500px] min-w-[350px] w-full bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:transform hover:scale-105"
                  style={{
                      backgroundImage: `url('/inspector-page/section 2/next-big-shift.svg')`,
                      backgroundSize: '107.05% 77.04%'
                    }}
                  />
                </div>
                
                {/* Content Section */}
                <div className="testimonial-content bg-white flex-1 flex flex-col gap-[35px] h-[500px] items-start min-w-[350px] overflow-clip p-[30px] transition-all duration-300 ease-in-out">
                  <div className="flex items-start w-full">
                    <h3 className="bounce-in font-['Aeonik_Pro'] font-medium text-[35px] leading-[1.1] text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]">
                      The Next Big Shift in Inspections Is Here
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-[5px] items-center w-full">
                    <div className="flex gap-[5px] items-center w-full">
                      <div className={`${inter.className} quote-fade font-normal text-[22px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1 transition-all duration-300 ease-in-out`}>
                        <p className="mb-0 transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]">Over 5 million homes in the U.S. now have solar, and most still don&apos;t get inspected.</p>
                        <p className="mb-0">&nbsp;</p>
                        <p className="mb-0 transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]">But 30% of solar systems have issues that should be flagged before a home changes hands.</p>
                        <p className="mb-0 transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]">Smart inspectors are stepping in. Sprk helps them lead.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Section 4 */}
      <section className="section-4 mx-auto w-full bg-[#115056]">
        <div className="max-w-[1440px] mx-auto px-[94px] py-[150px]">
          <div className="flex flex-col gap-20 items-center">
            {/* Title */}
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col items-center w-full">
                <div className="flex items-start w-full">
                  <h2 className="bounce-in font-['Aeonik_Pro'] font-medium text-[18px] sm:text-[18px] md:text-[1.75rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] leading-[120%] sm:leading-[120%] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.1] 2xl:leading-[1.1] text-center text-white flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                    What Sprk Does for Home Inspectors
                  </h2>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap gap-6 items-center justify-center w-full">
              {/* Top Row - 3 Cards */}
              <div className="card-slide-left bg-white h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] flex-1 basis-0 border border-[rgba(17,80,86,0.5)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col h-[500px] items-center overflow-clip w-full">
                  <div className="flex items-center justify-center flex-1 w-full">
                    <div 
                      className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                      style={{ backgroundImage: `url('/inspector-page/section 4/add-hunderds.svg')` }}
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full transition-all duration-300 ease-in-out">
                    <div className="flex items-center px-[30px] py-2.5 w-full">
                      <div className={`${inter.className} font-medium text-[25px] leading-[1.2] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]`}>
                        <p className="mb-0 transition-all duration-300 ease-in-out">Add hundreds in extra</p>
                        <p className="mb-0 transition-all duration-300 ease-in-out">revenue per inspection</p>
              </div>
                </div>
              </div>
              </div>
            </div>

              <div className="card-bounce-in bg-white h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] flex-1 basis-0 border border-[rgba(17,80,86,0.5)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col h-[500px] items-center overflow-clip w-full">
                  <div className="flex items-center justify-center flex-1 w-full">
                    <div 
                      className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                      style={{ backgroundImage: `url('/inspector-page/section 4/get-certified.svg')` }}
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full transition-all duration-300 ease-in-out">
                    <div className="flex items-center px-[30px] py-2.5 w-full">
                      <div className={`${inter.className} font-medium text-[25px] leading-[1.2] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]`}>
                        Get certified to inspect solar and energy systems
              </div>
                </div>
              </div>
                </div>
              </div>

              <div className="card-slide-right bg-white h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] flex-1 basis-0 border border-[rgba(17,80,86,0.5)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col h-[500px] items-center overflow-clip w-full">
                  <div className="flex items-center justify-center flex-1 w-full">
                    <div 
                      className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                      style={{ backgroundImage: `url('/inspector-page/section 4/complete-solar.svg')` }}
                    />
            </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full transition-all duration-300 ease-in-out">
                    <div className="flex items-center px-[30px] py-2.5 w-full">
                      <div className={`${inter.className} font-medium text-[25px] leading-[1.2] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]`}>
                        Complete solar inspections in as little as 15 minutes
            </div>
                    </div>
                  </div>
                </div>
                    </div>

              {/* Bottom Row - 2 Cards */}
              <div className="card-zoom-in bg-white h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] flex-1 basis-0 border border-[rgba(17,80,86,0.5)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col h-[500px] items-center overflow-clip w-full">
                  <div className="flex items-center justify-center flex-1 w-full">
                    <div 
                      className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                      style={{ backgroundImage: `url('/inspector-page/section 4/generate-clean.svg')` }}
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full transition-all duration-300 ease-in-out">
                    <div className="flex items-center px-[30px] py-2.5 w-full">
                      <div className={`${inter.className} font-medium text-[25px] leading-[1.2] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]`}>
                        <p className="mb-0 transition-all duration-300 ease-in-out">Generate clean, easy-to-read solar</p>
                        <p className="mb-0 transition-all duration-300 ease-in-out">and energy reports</p>
                </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-flip bg-white h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] flex-1 basis-0 border border-[rgba(17,80,86,0.5)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col h-[500px] items-center overflow-clip w-full">
                  <div className="flex items-center justify-center flex-1 w-full">
                    <div 
                      className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                      style={{ backgroundImage: `url('/inspector-page/section 4/solar-expert.svg')` }}
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full transition-all duration-300 ease-in-out">
                    <div className="flex items-center px-[30px] py-2.5 w-full">
                      <div className={`${inter.className} font-medium text-[25px] leading-[1.2] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]`}>
                        <p className="mb-0 transition-all duration-300 ease-in-out">Become the go-to solar expert</p>
                        <p className="mb-0 transition-all duration-300 ease-in-out">in your market</p>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <HowToGetStarted
        title="How to Get Started with Sprk"
        subtitle="It's Fast and Easy to Get Sprk Certified"
        step1={{
          icon: "/inspector-page/section 5/sign-up.svg",
          label: "Sign Up for Free",
          description: "Create your Sprk Pro account, no upfront cost, no obligation."
        }}
        step2={{
          icon: "/inspector-page/section 5/get-sprk-certified.svg",
          label: "Get Sprk Certified",
          description: "Complete our on-demand training and start offering 15-minute solar and 5-minute energy inspections."
        }}
        step3={{
          icon: "/inspector-page/section 5/add-sprk.svg",
          label: "Add Sprk to Your Services",
          description: "Include Energy Reports with every inspection and Solar Reports on homes with solar, boost value and your bottom line."
        }}
        step4={{
          icon: "/inspector-page/section 5/your-business.svg",
          label: "Grow Your Business",
          description: "Use Sprk's marketing tools and agent education resources to become the preferred inspector in your market."
        }}
      />

      {/* Section 6 */}
      <section className="section-6 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
        <div className="flex flex-col gap-[50px] items-center w-[1248px] max-w-full mx-auto">
          {/* Title Section */}
          <div className="flex flex-col gap-[50px] items-center w-full">
            <div className="flex flex-col gap-[30px] items-center w-full">
              <div className="flex items-start justify-center w-full">
                <h2 className="bounce-in font-['Aeonik_Pro'] font-medium text-[18px] sm:text-[18px] md:text-[1.75rem] lg:text-[2.5rem] xl:text-[3.5rem] 2xl:text-[3.5rem] leading-[120%] sm:leading-[120%] md:leading-[1.4] lg:leading-[1.4] xl:leading-[1.1] 2xl:leading-[1.1] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                  Sprk Reports for Home Inspectors
                </h2>
              </div>
              <div className="flex flex-col gap-2.5 items-start w-full">
                <div className="flex items-start justify-center w-full">
                  <p className={`${inter.className} text-reveal font-normal text-[16px] sm:text-[16px] md:text-[1.125rem] lg:text-[1.125rem] xl:text-[1.25rem] 2xl:text-[1.25rem] leading-[1.5] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.6] text-center text-[rgba(0,0,0,0.66)] flex-1 opacity-80`}>
                    Simple to Generate. Easy to Read. Trusted by Top Inspectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              {/* Home Energy Report Card */}
              <div className="report-card bg-white rounded-[10px] flex-1 basis-0 min-w-[400px] border border-[rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col items-center overflow-clip w-full">
                  {/* Image Section */}
                  <div className="bg-[#115056] flex items-start justify-end overflow-clip w-full">
                    <div className="flex flex-col h-[355px] items-start flex-1">
                      <div 
                        className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                        style={{ backgroundImage: `url('/inspector-page/section 6/home-energy.svg')` }}
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="bg-white flex flex-col items-start pb-10 pt-[30px] px-[30px] w-full">
                    <div className="flex items-center justify-center w-full">
                      <h3 className="font-['Aeonik_Pro'] font-medium text-[35px] leading-[1.1] text-[#141414] min-h-[70px] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]">
                        Home Energy Report
                      </h3>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <p className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] h-[66px] min-h-[66px] flex-1 transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]`}>
                        Estimate utility bills, outline an energy savings plan, and calculate solar needs fast.
                      </p>
                    </div>
                  </div>
                  
                  {/* Buttons Section */}
                  <div className="bg-white flex gap-[22px] items-start pb-10 pt-0 px-[30px] w-full">
                    <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] flex-1 basis-0 transition-all duration-200 ease-in-out hover:bg-white hover:text-[#115056] hover:border hover:border-[#115056] hover:transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center justify-center px-[15px] py-[5px] flex-1">
                        <span className={`${inter.className} font-normal text-[22px] leading-[1.2] text-center text-white flex-1 transition-all duration-200 ease-in-out hover:text-[#115056]`}>
                          View Sample
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-white transition-all duration-200 ease-in-out hover:text-[#115056]">→</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-center p-[5px] rounded-[5px] border border-[#115056] flex-1 basis-0 transition-all duration-200 ease-in-out hover:bg-[#115056] hover:text-white hover:transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center justify-center px-[15px] py-[5px] flex-1">
                        <span className={`${inter.className} font-normal text-[22px] leading-[1.2] text-center text-[#115056] flex-1 transition-all duration-200 ease-in-out hover:text-white`}>
                          Learn More
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#115056] transition-all duration-200 ease-in-out hover:text-white">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solar Inspection Report Card */}
              <div className="report-card bg-white rounded-[10px] flex-1 basis-0 min-w-[400px] border border-[rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                <div className="flex flex-col items-center overflow-clip w-full">
                  {/* Image Section */}
                  <div className="bg-[#115056] flex items-start justify-end overflow-clip w-full">
                    <div className="flex flex-col h-[355px] items-start flex-1">
                      <div 
                        className="bg-center bg-cover bg-no-repeat h-full w-full flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-110"
                        style={{ backgroundImage: `url('/inspector-page/section 6/solar-inspection.svg')` }}
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="bg-white flex flex-col items-start pb-10 pt-[30px] px-[30px] w-full">
                    <div className="flex items-center justify-center w-full">
                      <h3 className="font-['Aeonik_Pro'] font-medium text-[35px] leading-[1.1] text-[#141414] min-h-[70px] flex-1 transition-all duration-300 ease-in-out hover:text-[#115056]">
                        Solar Inspection Report
                      </h3>
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <p className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] h-[66px] min-h-[66px] flex-1 transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]`}>
                        Evaluate solar production, system condition, and remaining life. Spot issues before they become deal-breakers.
                      </p>
                    </div>
                  </div>
                  
                  {/* Buttons Section */}
                  <div className="bg-white flex gap-[22px] items-start pb-10 pt-0 px-[30px] w-full">
                    <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] flex-1 basis-0 transition-all duration-200 ease-in-out hover:bg-white hover:text-[#115056] hover:border hover:border-[#115056] hover:transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center justify-center px-[15px] py-[5px] flex-1">
                        <span className={`${inter.className} font-normal text-[22px] leading-[1.2] text-center text-white flex-1 transition-all duration-200 ease-in-out hover:text-[#115056]`}>
                          View Sample
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-white transition-all duration-200 ease-in-out hover:text-[#115056]">→</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-center p-[5px] rounded-[5px] border border-[#115056] flex-1 basis-0 transition-all duration-200 ease-in-out hover:bg-[#115056] hover:text-white hover:transform hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center justify-center px-[15px] py-[5px] flex-1">
                        <span className={`${inter.className} font-normal text-[22px] leading-[1.2] text-center text-[#115056] flex-1 transition-all duration-200 ease-in-out hover:text-white`}>
                          Learn More
                        </span>
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#115056] transition-all duration-200 ease-in-out hover:text-white">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
            name: "Trey S.",
            company: "Fusion Power"
          },
          {
            image: "/inspector-page/section 7/profile.svg",
            text: "Sprk has helped us add hundreds in extra revenue per inspection. Our clients love the detailed energy reports.",
            name: "Mike R.",
            company: "Premier Inspections"
          },
          {
            image: "/inspector-page/section 7/profile.svg",
            text: "Getting certified was quick and easy. Now we're the go-to inspectors for solar homes in our market.",
            name: "Sarah L.",
            company: "Reliable Home Inspections"
          }
        ]}
      />

      {/* Section 8 - Pricing Plans */}
      <section className="section-8 mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
        <div className="flex flex-col gap-20 items-center">
          {/* Title Section */}
          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h1 className="fade-up font-['Aeonik_Pro'] font-medium text-[40px] sm:text-[40px] md:text-[2rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[5rem] leading-[110%] sm:leading-[110%] md:leading-[1.3] lg:leading-[1.3] xl:leading-[1.1] 2xl:leading-[1.1] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                Choose Your Sprk Plan
              </h1>
            </div>
            <div className="flex items-start justify-center w-full">
              <p className="text-reveal font-['Aeonik_Pro'] font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[35px] leading-[110%] text-center text-[#141414] flex-1 transition-all duration-300 ease-in-out">
                Start free. Scale as you grow. 30 Days Free.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex gap-6 items-center justify-start">
            {/* Homeowners Plan */}
            <div className="card-slide-left flex flex-col gap-6 items-center px-0 py-[30px] rounded-[10px]">
              <div className="flex items-center justify-center px-[15px] py-2.5 w-full">
                <h2 className="bounce-in font-['Aeonik_Pro'] font-medium text-[45px] leading-[1.1] text-center text-[#141414] transition-all duration-300 ease-in-out hover:text-[#115056] hover:transform hover:scale-105">
                  Homeowners
                </h2>
              </div>
              
              <div className="bg-white flex flex-col h-[1032px] items-start min-h-[1032px] min-w-[400px] rounded-[10px] w-[416px] border border-[rgba(0,0,0,0.15)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)] transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:border-[#115056]">
                {/* Header */}
                <div className="bg-[#115056] flex flex-col gap-[25px] items-start pb-[30px] pt-10 px-10 rounded-tl-[10px] rounded-tr-[10px] w-full">
                  <div className="flex flex-col gap-[25px] items-start w-full">
                    <div className="bg-white flex items-center justify-center px-10 py-2.5 rounded-[30px] w-full border border-[#115056]">
                      <span className="font-['Aeonik_Pro'] font-bold text-[38px] leading-[1.1] text-center text-[#115056]">
                        Free
                      </span>
                    </div>
                    <div className="flex flex-col gap-5 items-start w-full">
                      <div className="flex items-center justify-center w-full">
                        <p className={`${inter.className} font-normal text-[16px] leading-[1.2] text-white min-h-[57px] flex-1`}>
                          Best for inspectors new to solar. Get trained, get started, and add energy reports to every inspection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-5 items-start pb-10 pt-[30px] px-10 flex-1 w-full">
                  {/* Sprk Reports */}
                  <div className="flex flex-col gap-2.5 items-start w-full">
                    <div className="flex items-center justify-center">
                      <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                        Sprk Reports
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Energy Reports: Unlimited
                        </span>
                      </div>
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Solar Reports: $30 each
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Training */}
                  <div className="flex flex-col gap-2.5 items-start w-full">
                    <div className="flex items-center justify-center">
                      <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                        Training
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Sprk Certification Training
                        </span>
                      </div>
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Inspection Company Startup Guide
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Resources */}
                  <div className="flex flex-col gap-2.5 items-start w-full">
                    <div className="flex items-center justify-center">
                      <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                        Marketing Resources
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Solar Agent CE Course
                        </span>
                      </div>
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Marketing Toolkit
                        </span>
                      </div>
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          AI Marketing Assistant
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sprk Apps */}
                  <div className="flex flex-col gap-2.5 items-start w-full">
                    <div className="flex items-center justify-center">
                      <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                        Sprk Apps
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex gap-[5px] items-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Sprk Pro App
                        </span>
                      </div>
                      <div className="flex gap-[5px] items-start justify-center w-full">
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <span className="text-[#56CD45]">✓</span>
                        </div>
                        <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                          Client Portal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="flex flex-col gap-5 items-center justify-end pb-10 pt-[30px] px-10 w-full border-t border-dashed border-[#115056]">
                  <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] w-full">
                    <div className="flex items-center justify-center px-[15px] py-2.5 flex-1">
                      <span className="font-['Aeonik_Pro'] font-medium text-[32px] leading-[1.1] text-center text-white flex-1">
                        Get Started
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Inspectors Container */}
            <div className="bg-[rgba(0,255,106,0.15)] flex flex-col gap-6 items-center p-[30px] rounded-[10px] border border-[#17e817]">
              <div className="flex items-center justify-center px-[15px] py-2.5 w-full">
                <h2 className="font-['Aeonik_Pro'] font-medium text-[45px] leading-[1.1] text-center text-[#141414]">
                  Home Inspectors
                </h2>
              </div>
              
              <div className="flex gap-6 items-center justify-start">
                {/* Launch Plan */}
                <div className="bg-white flex flex-col h-[1032px] items-start min-h-[1032px] min-w-[400px] rounded-[10px] w-[416px] border border-[rgba(0,0,0,0.15)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)]">
                  {/* Header */}
                  <div className="bg-[#115056] flex flex-col gap-[25px] items-start pb-[30px] pt-10 px-10 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <div className="flex flex-col gap-[25px] items-start w-full">
                      <div className="bg-white flex items-center justify-center px-10 py-2.5 rounded-[30px] w-full border border-[#115056]">
                        <span className="font-['Aeonik_Pro'] font-bold text-[38px] leading-[1.1] text-center text-[#115056]">
                          Launch Plan
                        </span>
                      </div>
                      <div className="flex flex-col gap-5 items-start w-full">
                        <div className="flex gap-[9px] items-end justify-center w-full">
                          <div className="flex gap-2.5 items-center justify-center text-white flex-1">
                            <span className="font-['Aeonik_Pro'] font-medium text-[30px] text-center">
                              $20 
                            </span>
                            <span className={`${inter.className} font-medium text-[22px] flex-1`}>
                              /mo per inspector
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <p className={`${inter.className} font-normal text-[16px] leading-[1.2] text-white min-h-[57px] flex-1`}>
                            Best for inspectors new to solar. Get trained, get started, and add energy reports to every inspection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features - Same structure as Free plan */}
                  <div className="flex flex-col gap-5 items-start pb-10 pt-[30px] px-10 flex-1 w-full">
                    {/* Same feature sections as Free plan */}
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Sprk Reports
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Energy Reports: Unlimited
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Solar Reports: $30 each
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Training
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Sprk Certification Training
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Inspection Company Startup Guide
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Marketing Resources
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Solar Agent CE Course
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Marketing Toolkit
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            AI Marketing Assistant
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Sprk Apps
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Sprk Pro App
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-start justify-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Client Portal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex flex-col gap-5 items-center justify-end pb-10 pt-[30px] px-10 w-full border-t border-dashed border-[#115056]">
                    <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] w-full">
                      <div className="flex items-center justify-center px-[15px] py-2.5 flex-1">
                        <span className="font-['Aeonik_Pro'] font-medium text-[32px] leading-[1.1] text-center text-white flex-1">
                          Get Started
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Plan */}
                <div className="bg-white flex flex-col items-start min-h-[1032px] min-w-[400px] rounded-[10px] w-[416px] border border-[rgba(0,0,0,0.15)] shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.1)]">
                  {/* Header */}
                  <div className="bg-[#115056] flex flex-col gap-[25px] items-start pb-[30px] pt-10 px-10 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <div className="flex flex-col gap-[25px] items-start w-full">
                      <div className="bg-white flex items-center justify-center px-10 py-2.5 rounded-[30px] w-full border border-[#115056]">
                        <span className="font-['Aeonik_Pro'] font-bold text-[38px] leading-[1.1] text-center text-[#115056]">
                          Growth Plan
                        </span>
                      </div>
                      <div className="flex flex-col gap-5 items-start w-full">
                        <div className="flex gap-[9px] items-end justify-center w-full">
                          <div className="flex gap-2.5 items-center justify-center text-white flex-1">
                            <span className="font-['Aeonik_Pro'] font-medium text-[30px] text-center">
                              $99
                            </span>
                            <span className={`${inter.className} font-medium text-[22px] flex-1`}>
                              /mo per inspector
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <p className={`${inter.className} font-normal text-[16px] leading-[1.2] text-white min-h-[57px] flex-1`}>
                            Best for inspectors growing with solar. Includes free solar reports, advanced marketing tools, and full support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-5 items-start pb-10 pt-[30px] px-10 w-full">
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Sprk Reports
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Energy Reports: Unlimited
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-start justify-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Solar Reports: 8 included/month, then $30 each
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Training
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Sprk Certification Training
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Inspection Company Startup Guide
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Marketing Resources
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Solar Agent CE Course
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Marketing Toolkit
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            AI Marketing Assistant
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-['Aeonik_Pro'] font-medium text-[25px] leading-[1.1] text-[#141414]">
                          Sprk Apps
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start w-full">
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Sprk Pro App
                          </span>
                        </div>
                        <div className="flex gap-[5px] items-center w-full">
                          <div className="w-[30px] h-[30px] flex items-center justify-center">
                            <span className="text-[#56CD45]">✓</span>
                          </div>
                          <span className={`${inter.className} font-normal text-[18px] leading-[1.2] text-[rgba(0,0,0,0.66)] flex-1`}>
                            Client Portal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex flex-col gap-5 items-start pb-10 pt-[30px] px-10 w-full border-t border-dashed border-[#115056]">
                    <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] w-full">
                      <div className="flex items-center justify-center px-[15px] py-2.5 flex-1">
                        <span className="font-['Aeonik_Pro'] font-medium text-[32px] leading-[1.1] text-center text-white flex-1">
                          Get Started
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </>
     );
}


