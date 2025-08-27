import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSprk from "@/components/AboutSprk";
import CTA from "@/components/CTA";

const inter = Inter({ subsets: ["latin"] });

export default function HomeownerPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 pt-[150px] pb-[100px]">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start px-2.5 w-full">
              <h1
                className="w-full text-center text-[80px] font-medium leading-[110%]"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                <span className="text-[#115056]">Sprk Stands</span>
                <span className="text-[#141414]"> with Solar Homeowners</span>
              </h1>
              
              <div className="flex items-center justify-center px-2.5 w-full">
                <p
                  className={`${inter.className} text-center text-[22px] font-normal leading-[120%] text-black/66 flex-grow min-w-0`}
                >
                  You've invested in the future. Sprk is here to help protect your green investment—whether<br />
                  you're thinking about solar, troubleshooting a system, or preparing to buy or sell a solar-powered home.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-[15px] items-center justify-center w-full">
              <Link
                href="#find-solar-pro"
                className="bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] text-white text-[25px] font-medium leading-[110%] whitespace-nowrap hover:bg-[#0d3d42] transition-colors duration-200"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                Find a Certified Solar Pro
              </Link>
              
              <Link
                href="#find-agent"
                className="bg-[#F1FAFA] border border-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] text-[#115056] text-[25px] font-medium leading-[110%] whitespace-nowrap hover:bg-white transition-colors duration-200"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                Find a Certified Real Estate Agent
              </Link>
              
              <Link
                href="#find-inspector"
                className="border border-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] text-[#115056] text-[25px] font-medium leading-[110%] whitespace-nowrap hover:bg-gray-50 transition-colors duration-200"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                Find a Certified Home Inspector
              </Link>
            </div>
          </header>
        </div>
      </section>
      {/* Section 2 */}
      <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
        <div className="flex flex-col gap-[50px] items-center justify-start w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h2
                  className="text-center text-[56px] font-medium leading-[110%] text-[#141414] flex-grow min-w-0"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  You're Leading the Way
                </h2>
              </div>
              <div className="flex items-start justify-center w-full">
                <p
                  className={`${inter.className} text-center text-[22px] font-normal leading-[120%] text-black/66 flex-grow min-w-0`}
                >
                  Solar homeowners are making one of the smartest investments—for their home and for the planet.<br />
                  Whether you installed solar years ago, are just getting started, or are trying to understand what your<br />
                  system is worth, Sprk exists to bring clarity to the process.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start justify-start w-full">
              {/* Card 1 */}
              <div className="bg-white flex-1 h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] border border-[rgba(17,80,86,0.5)] relative overflow-hidden">
                <div className="flex flex-col h-[500px] items-center justify-start w-full overflow-clip">
                  <div className="flex-1 flex items-center justify-center w-full relative">
                    <Image
                      src="/homeowners-page/section 2/investment.svg"
                      alt="Your solar investment is documented and valued properly"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full">
                    <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                      <p
                        className={`${inter.className} text-center text-[25px] font-medium leading-[120%] text-[#141414] flex-grow min-h-[120px] flex items-center justify-center`}
                      >
                        Your solar investment is documented and valued properly
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white flex-1 h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] border border-[rgba(17,80,86,0.5)] relative overflow-hidden">
                <div className="flex flex-col h-[500px] items-center justify-start w-full overflow-clip">
                  <div className="flex-1 flex items-center justify-center w-full relative">
                    <Image
                      src="/homeowners-page/section 2/avoid-confusion.svg"
                      alt="You avoid confusion during appraisals, refinancing, or home sales"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full">
                    <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                      <p
                        className={`${inter.className} text-center text-[25px] font-medium leading-[120%] text-[#141414] flex-grow min-h-[120px] flex items-center justify-center`}
                      >
                        You avoid confusion during appraisals, refinancing, or home sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white flex-1 h-[500px] max-h-[500px] min-w-[400px] rounded-[10px] border border-[rgba(17,80,86,0.5)] relative overflow-hidden">
                <div className="flex flex-col h-[500px] items-center justify-start w-full overflow-clip">
                  <div className="flex-1 flex items-center justify-center w-full relative">
                    <Image
                      src="/homeowners-page/section 2/with-professionals.svg"
                      alt="You work with professionals who understand how to represent your solar home"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover bg-center bg-cover bg-no-repeat"
                    />
                  </div>
                  <div className="bg-gray-50 flex flex-col gap-5 items-center justify-end px-0 py-[50px] w-full">
                    <div className="flex items-center justify-start px-[30px] py-2.5 w-full">
                      <p
                        className={`${inter.className} text-center text-[25px] font-medium leading-[120%] text-[#141414] flex-grow min-h-[120px] flex items-center justify-center`}
                      >
                        You work with professionals who understand how to represent your<br />
                        solar home
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center pb-0 pt-[30px] px-[30px] w-full">
            <p
              className="text-center text-[32px] font-medium leading-[110%] text-black/66 flex-grow min-w-0"
              style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
            >
              You're doing the right thing. We're here to make sure the solar<br />
              and real estate industries catch up.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <AboutSprk
        title="What Sprk Certified Means"
        subtitle="Trusted People. Verified Practices. Certified Data."
        description="Sprk Certified means the professionals you work with—and the reports they rely on—meet the highest standards in solar real estate."
        cards={[
          {
            icon: "/homeowners-page/section 3/inspectors.svg",
            label: "Sprk Certified\nInspectors",
            text: "Are trained to inspect and evaluate solar system performance, safety, installation quality, and energy features just like they would a roof or HVAC.",
            width: "large"
          },
          {
            icon: "/homeowners-page/section 3/agents.svg",
            label: "Sprk Certified\nAgents",
            text: "Certified in energy, disclosure, and valuation practices",
            width: "small"
          },
          {
            icon: "/homeowners-page/section 3/solar-pros.svg",
            label: "Certified\nSolar Pros",
            text: "Go beyond selling solar. They help homeowners understand how their whole-home energy system works, document installations for future resale, and size systems based on actual energy needs.",
            width: "small"
          },
          {
            icon: "/homeowners-page/section 3/reports.svg",
            label: "Certified\nReports",
            text: "Sprk Certified Reports - like the Solar Inspection Report, Solar Listing Report, and Green Home Appraisal Report are reviewed and validated using verified documentation, industry best practices, and real system data. These reports support real estate decisions and can be trusted by buyers, lenders, appraisers, and agents alike.",
            width: "large"
          }
        ]}
      />

      {/* Section 4 */}
      <section className="bg-[#115056] w-full">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-[150px]">
          <div className="flex flex-col items-center gap-[50px] w-full max-w-[1248px] mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center gap-[30px] w-full">
              <div className="w-full flex justify-center">
                <h2
                  className="text-center text-white text-[56px] font-medium leading-[110%]"
                  style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                >
                  What's in Your Sprk Report?
                </h2>
              </div>
              <div className="w-full flex justify-center">
                <p
                  className={`${inter.className} text-center text-[22px] font-normal leading-[120%] text-white/80`}
                >
                  Sprk Reports help you at every stage of the solar homeowner journey:
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {/* Card 1 - Thinking About Going Solar */}
              <div className="bg-white rounded-[10px] border border-black/15 overflow-hidden w-full max-w-[712px]">
                <div className="bg-gray-50 px-[30px] pt-[30px] pb-2.5">
                  <h3
                    className="text-[#141414] text-[32px] font-medium leading-[110%] mb-5"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    Thinking About Going Solar?
                  </h3>
                  <p
                    className={`${inter.className} text-[18px] font-normal leading-[120%] text-black/66 min-h-[88px] px-0 py-2.5`}
                  >
                    Use a Home Energy Report to understand your current bills, energy inefficiencies, and how solar might help along with other energy upgrades to consider.
                  </p>
                </div>
                <div className="h-[400px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/homeowners-page/section 4/thinking-about.svg"
                    alt="Home Energy Report example"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 2 - Already Have Solar */}
              <div className="bg-white rounded-[10px] border border-black/15 overflow-hidden w-full max-w-[512px]">
                <div className="bg-gray-50 px-[30px] pt-[30px] pb-2.5">
                  <h3
                    className="text-[#141414] text-[32px] font-medium leading-[110%] mb-5"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    Already Have Solar?
                  </h3>
                  <p
                    className={`${inter.className} text-[18px] font-normal leading-[120%] text-black/66 min-h-[88px] px-0 py-2.5`}
                  >
                    A Solar Inspection Report confirms system health, performance, safety, and expected lifespan. It's like an annual check-up for your solar.
                  </p>
                </div>
                <div className="h-[400px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/homeowners-page/section 4/already-have.svg"
                    alt="Solar Inspection Report example"
                    width={512}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 3 - Getting Ready to Sell */}
              <div className="bg-white rounded-[10px] border border-black/15 overflow-hidden w-full max-w-[512px]">
                <div className="bg-gray-50 px-[30px] pt-[30px] pb-2.5">
                  <h3
                    className="text-[#141414] text-[32px] font-medium leading-[110%] mb-5"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    Getting Ready to Sell?
                  </h3>
                  <p
                    className={`${inter.className} text-[18px] font-normal leading-[120%] text-black/66 min-h-[88px] px-0 py-2.5`}
                  >
                    The Solar Listing Report compiles everything a buyer, agent, or lender needs: ownership details, production data, warranty info, and savings estimates.
                  </p>
                </div>
                <div className="h-[400px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/homeowners-page/section 4/getting-ready.svg"
                    alt="Solar Listing Report example"
                    width={512}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card 4 - Appraising or Refinancing */}
              <div className="bg-white rounded-[10px] border border-black/15 overflow-hidden w-full max-w-[712px]">
                <div className="bg-gray-50 px-[30px] pt-[30px] pb-2.5">
                  <h3
                    className="text-[#141414] text-[32px] font-medium leading-[110%] mb-5"
                    style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                  >
                    Appraising or Refinancing?
                  </h3>
                  <p
                    className={`${inter.className} text-[18px] font-normal leading-[120%] text-black/66 min-h-[88px] px-0 py-2.5`}
                  >
                    The Green Home Appraisal Report gives appraisers the certified data needed to reflect your solar's value in the home price or loan.
                  </p>
                </div>
                <div className="h-[400px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/homeowners-page/section 4/appraising.svg"
                    alt="Green Home Appraisal Report example"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="w-full flex justify-center px-[30px]">
              <p
                className={`${inter.className} text-center text-[20px] font-medium leading-[110%] text-white/80`}
              >
                <span className="text-white/80">Curious what else counts toward your home's efficiency? Visit our </span>
                <span className="text-white">Sprk Blog</span>
                <span className="text-white/80"> to learn about green</span>
                <br />
                <span className="text-white/80">assets like insulation, EV chargers, batteries, smart thermostats, and more.</span>
              </p>
            </div>
          </div>
        </div>
            </section>

      {/* Section 5 */}
      <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
        <div className="flex flex-col items-center gap-[50px] w-full max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="w-full flex justify-center">
              <h2
                className="text-center text-[#141414] text-[56px] font-medium leading-[110%]"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                Where Our Data Comes From
              </h2>
            </div>
          </div>

          {/* Main Card */}
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-[10px] border border-black/15 overflow-hidden w-full max-w-[1248px] h-[500px]">
              <div className="flex h-full">
                {/* Left side - Image */}
                <div className="w-1/2 bg-gray-50 min-w-[350px]">
                  <div className="w-full h-full bg-center bg-cover bg-no-repeat">
                    <Image
                      src="/homeowners-page/section 5/comes-from.svg"
                      alt="Data sources visualization"
                      width={624}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 bg-white p-[30px] flex flex-col gap-[35px] min-w-[350px] overflow-hidden">
                  <div className="w-full">
                    <h3
                      className="text-[#141414] text-[30px] font-medium leading-[110%]"
                      style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
                    >
                      Sprk Reports are built from real, trusted sources—not sales scripts.
                      <br />
                      We use:
                    </h3>
                  </div>

                  <div className="flex flex-col gap-[5px] w-full">
                    {/* Checklist items */}
                    <div className="flex gap-[5px] items-center w-full">
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[18px] font-normal leading-[120%] flex-1`}>
                        Local utility rates and energy tariffs
                      </p>
                    </div>

                    <div className="flex gap-[5px] items-center w-full">
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[18px] font-normal leading-[120%] flex-1`}>
                        National Renewable Energy Lab (NREL) and PVWatts data
                      </p>
                    </div>

                    <div className="flex gap-[5px] items-start w-full">
                      <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[18px] font-normal leading-[120%] flex-1`}>
                        National Electric Code (NEC) and installation best practices
                      </p>
                    </div>

                    <div className="flex gap-[5px] items-start w-full">
                      <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[18px] font-normal leading-[120%] flex-1`}>
                        Freddie Mac, DOE, and industry-approved appraisal models
                      </p>
                    </div>

                    <div className="flex gap-[5px] items-center w-full">
                      <div className="w-6 h-6 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#115056"/>
                          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className={`${inter.className} text-[#141414] text-[18px] font-normal leading-[120%] flex-1`}>
                        Verified inspection and system documentation
                      </p>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className={`${inter.className} text-[18px] font-normal leading-[120%] text-black/66`}>
                      Every report is grounded in proven frameworks and industry standards—so you and your buyers can move forward with clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-24 py-[100px]">
        <div className="flex flex-col items-center gap-[50px] w-full">
          {/* Header Content */}
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="w-full flex justify-center">
              <h2
                className="text-center text-[#141414] text-[56px] font-medium leading-[110%]"
                style={{ fontFamily: '"Aeonik Pro", sans-serif' }}
              >
                Learn More. Feel Confident. Move Forward.
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <div
                className={`${inter.className} text-center text-[22px] font-normal leading-[120%] text-black/66 max-w-4xl`}
              >
                <p className="mb-0">
                  We know solar can feel confusing especially when it comes to ownership types, warranties, system value, and resale.
                </p>
                <p className="mb-0">
                  That's why we built the <span className="font-medium">[Sprk Blog]</span> to answer your biggest questions with clear, credible guidance written by professionals who understand both energy and real estate.
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">
                  Whether you're reviewing a report, planning to sell, or just curious what your system's worth Sprk is here for you.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-[700px] flex flex-col">
            <div className="w-full h-full rounded-[10px] bg-gray-200 flex items-center justify-center overflow-hidden">
              <Image
                src="/homeowners-page/section 6/learn-more.svg"
                alt="Sprk platform devices showing Review, Report, and Sell features"
                width={1200}
                height={700}
                className="w-full h-full object-cover object-top"
                style={{ backgroundSize: '99.72% 100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - CTA */}
      <CTA
        title="You Invested in the Future. Let's Help You Protect It."
        buttons={[
          { label: "Find a Certified Agent", link: "/agents" },
          { label: "Find a Certified Inspector", link: "/inspector" },
          { label: "Explore the Sprk Blog", link: "/blog" }
        ]}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </>
     );
}
