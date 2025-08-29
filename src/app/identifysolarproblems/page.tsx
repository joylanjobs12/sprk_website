import HowItWorksSection from "@/components/HowItWorksSection";
import ScrollToTop from "@/components/ScrollToTop";


export default function IdentifySolarProblems() {
  return (
    <>
          <section className="w-full flex flex-col items-center justify-start pt-[100px] pb-[80px] px-4 sm:pt-[120px] sm:pb-[90px] sm:px-6 md:pt-[130px] md:pb-[90px] md:px-8 lg:pt-[150px] lg:pb-[100px] lg:px-24 xl:pt-[150px] xl:pb-[100px] xl:px-24 2xl:pt-[150px] 2xl:pb-[100px] 2xl:px-24">
              <div className="w-full max-w-7xl flex flex-col items-center justify-start">
                  <header className="w-full flex flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px]">
                      <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-5 md:gap-6 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] px-2.5">
                          <h1 className="w-full text-center font-medium leading-[110%] mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6
              text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px]
              font-['Aeonik_Pro'] text-[#141414]">
                              <span className="text-[#115056]">Solar Can Last 50 Years</span>
                              <br />
                              <span className="text-[#141414]">But Not Without a Little Help</span>
                          </h1>

                          <div className="w-full flex items-center justify-center px-2.5">
                              <p className="text-center font-normal leading-[120%] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4
                text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]
                font-['Inter'] text-[rgba(0,0,0,0.66)] max-w-4xl">
                                  Many solar systems have issues that go unnoticed—until it's time to sell or transfer. Sprk Certified Pros
                                  help uncover and resolve solar problems before they cost you time, money, or a buyer.
                              </p>
                          </div>
                      </div>

                      <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-4 lg:gap-[15px] xl:gap-[15px] 2xl:gap-[15px]">
                          <button className="bg-[#115056] flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 lg:px-[30px] lg:py-3 xl:px-[30px] xl:py-3 2xl:px-[30px] 2xl:py-3 rounded-[30px] h-[44px] sm:h-[48px] md:h-[50px] lg:h-[52px] xl:h-[52px] 2xl:h-[52px] min-w-[44px]">
                              <span className="font-medium leading-[110%] text-white text-nowrap
                text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px]
                font-['Aeonik_Pro']">
                                  Find a Certified Inspector
                              </span>
                          </button>

                          <button className="border border-[#115056] border-solid flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-3 lg:px-[30px] lg:py-3 xl:px-[30px] xl:py-3 2xl:px-[30px] 2xl:py-3 rounded-[30px] h-[44px] sm:h-[48px] md:h-[50px] lg:h-[52px] xl:h-[52px] 2xl:h-[52px] min-w-[44px] bg-transparent">
                              <span className="font-medium leading-[110%] text-[#115056] text-nowrap
                text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px]
                font-['Aeonik_Pro']">
                                  Find a Certified Solar Company
                              </span>
                          </button>
                      </div>
                  </header>
              </div>
          </section>
          <section className="w-full flex flex-col items-center justify-start py-[80px] px-4 sm:py-[90px] sm:px-6 md:py-[90px] md:px-8 lg:py-[100px] lg:px-24 xl:py-[100px] xl:px-24 2xl:py-[100px] 2xl:px-24">
              <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px]">
                  {/* Section Header */}
                  <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-5 md:gap-6 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px]">
                      <div className="w-full flex items-center justify-center">
                          <h2 className="text-center font-medium leading-[110%] mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6
              text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]
              font-['Aeonik_Pro'] text-[#141414]">
                              Solar Equipment Problems
                          </h2>
                      </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full flex flex-col items-start justify-start gap-4 sm:gap-5 md:gap-6 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px]">
                      <div className="w-full flex flex-wrap items-start justify-start gap-6">
                          <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden
              h-auto sm:h-auto md:h-auto lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">
                              <div className="w-full h-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-start justify-start">
                                  {/* Image Section */}
                                  <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-gray-50 flex items-center justify-center
                  h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] min-w-[350px]">
                                      <img
                                          src="/indentify-solar-problems/section 1/image1.svg"
                                          alt="Solar equipment problems illustration"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>

                                  {/* Content Section */}
                                  <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-white flex flex-col items-start justify-start gap-6 sm:gap-7 md:gap-8 lg:gap-[35px] xl:gap-[35px] 2xl:gap-[35px]
                  p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] min-w-[350px]
                  h-auto lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">

                                      {/* Card Title */}
                                      <div className="w-full flex items-start justify-start">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                      text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px]
                      font-['Aeonik_Pro'] text-[#141414]">
                                              Most solar systems are installed and then left unchecked, for decades.
                                          </h3>
                                      </div>

                                      {/* Card Body */}
                                      <div className="w-full flex flex-col items-center justify-center gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                          <div className="w-full flex items-center justify-center gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                              <p className="font-normal leading-[120%] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4
                        text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]
                        font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                                  Because solar has no moving parts and operates silently, it's not always obvious when something goes wrong. But hidden issues can quietly cost homeowners thousands in unnecessary utility bills and cause even bigger problems down the road.
                                                  <br /><br />
                                                  A solar inspection by a Sprk Certified inspector helps ensure your system is working the way it should. And if it's not, it brings clarity to best and lowest cost repairs to get your system performing optimally.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="w-full bg-[#115056] flex flex-col items-center justify-start py-[100px] px-4 sm:py-[120px] sm:px-6 md:py-[130px] md:px-8 lg:py-[150px] lg:px-24 xl:py-[150px] xl:px-24 2xl:py-[150px] 2xl:px-24">
              <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-12 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-20 2xl:gap-20">
                  {/* Section Header */}
                  <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-5 md:gap-6 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px]">
                      <div className="w-full flex items-center justify-center">
                          <h2 className="text-center font-medium leading-[110%] mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6
                               text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]
                               font-['Aeonik_Pro'] text-white">
                              Unresolved issues can lead to:
                          </h2>
                      </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6">
                      {/* Card 1: Safety risks and roof damage - Large */}
                      <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden
                           w-full sm:w-full md:w-full lg:w-[712px] xl:w-[712px] 2xl:w-[712px]">
                          <div className="w-full flex flex-col items-center justify-start">
                              <div className="w-full bg-gray-50 flex flex-col items-center justify-start py-6 sm:py-7 md:py-8 lg:py-[30px] xl:py-[30px] 2xl:py-[30px] gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5">
                                  <div className="w-full flex items-start justify-start px-4 sm:px-5 md:px-6 lg:px-[30px] xl:px-[30px] 2xl:px-[30px]">
                                      <h3 className="font-normal leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                           text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                           font-['Inter'] text-[#141414] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[124px] xl:min-h-[124px] 2xl:min-h-[124px]">
                                          Safety risks and roof damage
                                      </h3>
                                  </div>
                              </div>
                              <div className="w-full flex items-center justify-start relative">
                                  <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                                  <img
                                      src="/indentify-solar-problems/section 2/safety-risk.svg"
                                      alt="Safety risks and roof damage"
                                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                                  />
                              </div>
                          </div>
                      </div>

                      {/* Card 2: Damaged equipment from lack of maintenance - Small */}
                      <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden
                           w-full sm:w-full md:w-full lg:w-[512px] xl:w-[512px] 2xl:w-[512px]">
                          <div className="w-full flex flex-col items-center justify-start">
                              <div className="w-full bg-gray-50 flex flex-col items-center justify-start py-6 sm:py-7 md:py-8 lg:py-[30px] xl:py-[30px] 2xl:py-[30px] gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 min-w-[300px] lg:min-w-[512px] xl:min-w-[512px] 2xl:min-w-[512px]">
                                  <div className="w-full flex items-start justify-start px-4 sm:px-5 md:px-6 lg:px-[30px] xl:px-[30px] 2xl:px-[30px]">
                                      <h3 className="font-normal leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                           text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                           font-['Inter'] text-[#141414] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[124px] xl:min-h-[124px] 2xl:min-h-[124px]">
                                          Damaged equipment from lack of maintenance
                                      </h3>
                                  </div>
                              </div>
                              <div className="w-full flex items-center justify-start relative min-w-[300px] lg:min-w-[512px] xl:min-w-[512px] 2xl:min-w-[512px]">
                                  <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                                  <img
                                      src="/indentify-solar-problems/section 2/damage.svg"
                                      alt="Damaged equipment from lack of maintenance"
                                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                                  />
                              </div>
                          </div>
                      </div>

                      {/* Card 3: Paying unnecessary utility bills - Small */}
                      <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden
                           w-full sm:w-full md:w-full lg:w-[512px] xl:w-[512px] 2xl:w-[512px]">
                          <div className="w-full flex flex-col items-center justify-start">
                              <div className="w-full bg-gray-50 flex flex-col items-center justify-start py-6 sm:py-7 md:py-8 lg:py-[30px] xl:py-[30px] 2xl:py-[30px] gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 min-w-[300px] lg:min-w-[512px] xl:min-w-[512px] 2xl:min-w-[512px]">
                                  <div className="w-full flex items-start justify-start px-4 sm:px-5 md:px-6 lg:px-[30px] xl:px-[30px] 2xl:px-[30px]">
                                      <h3 className="font-normal leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                           text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                           font-['Inter'] text-[#141414] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[124px] xl:min-h-[124px] 2xl:min-h-[124px]">
                                          Paying unnecessary utility bills
                                      </h3>
                                  </div>
                              </div>
                              <div className="w-full flex items-center justify-start relative min-w-[300px] lg:min-w-[512px] xl:min-w-[512px] 2xl:min-w-[512px]">
                                  <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                                  <img
                                      src="/indentify-solar-problems/section 2/paying.svg"
                                      alt="Paying unnecessary utility bills"
                                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                                  />
                              </div>
                          </div>
                      </div>

                      {/* Card 4: Buyer hesitation or lost equity - Large */}
                      <div className="bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden
                           w-full sm:w-full md:w-full lg:w-[712px] xl:w-[712px] 2xl:w-[712px]">
                          <div className="w-full flex flex-col items-center justify-start">
                              <div className="w-full bg-gray-50 flex flex-col items-center justify-start py-6 sm:py-7 md:py-8 lg:py-[30px] xl:py-[30px] 2xl:py-[30px] gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5">
                                  <div className="w-full flex items-start justify-start px-4 sm:px-5 md:px-6 lg:px-[30px] xl:px-[30px] 2xl:px-[30px]">
                                      <h3 className="font-normal leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                           text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                           font-['Inter'] text-[#141414] min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[124px] xl:min-h-[124px] 2xl:min-h-[124px]">
                                          Buyer hesitation or lost equity
                                      </h3>
                                  </div>
                              </div>
                              <div className="w-full flex items-center justify-start relative">
                                  <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                                  <img
                                      src="/indentify-solar-problems/section 2/buyer.svg"
                                      alt="Buyer hesitation or lost equity"
                                      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="w-full flex flex-col items-center justify-start py-[80px] px-4 sm:py-[90px] sm:px-6 md:py-[90px] md:px-8 lg:py-[100px] lg:px-24 xl:py-[100px] xl:px-24 2xl:py-[100px] 2xl:px-24">
              <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-16 sm:gap-18 md:gap-20 lg:gap-[100px] xl:gap-[100px] 2xl:gap-[100px]">
                  {/* Main Content */}
                  <div className="w-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-start justify-center gap-6">
                      {/* Left Sidebar - Sticky */}
                      <div className="w-full lg:w-[612px] xl:w-[612px] 2xl:w-[612px] flex flex-col items-center justify-start gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] 
                           pt-0 sm:pt-0 md:pt-0 lg:pt-[150px] xl:pt-[150px] 2xl:pt-[150px] pb-0 px-0
                           lg:sticky xl:sticky 2xl:sticky lg:top-0 xl:top-0 2xl:top-0 lg:min-w-[612px] xl:min-w-[612px] 2xl:min-w-[612px]">
                          <h2 className="w-full font-medium leading-[110%] mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6
                               text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]
                               font-['Aeonik_Pro'] text-[#141414]">
                              11 Common Solar Problems
                          </h2>
                          <p className="w-full font-normal leading-[120%] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4
                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]
                               font-['Inter'] text-[rgba(0,0,0,0.66)]">
                              Sprk has identified the most frequent and disruptive issues found in real-world solar inspections:
                          </p>
                      </div>

                      {/* Right Column - Scrollable Cards */}
                      <div className="w-full flex-1 flex items-start justify-start">
                          <div className="w-full lg:w-[612px] xl:w-[612px] 2xl:w-[612px] flex flex-col items-center justify-start gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px]
                               pt-0 sm:pt-0 md:pt-0 lg:pt-[150px] xl:pt-[150px] 2xl:pt-[150px] pb-0 px-0">

                              {/* Problem 1 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem1.svg"
                                          alt="Solar Under Producing Energy"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              01
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Solar Under Producing Energy
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 2 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem2.svg"
                                          alt="Solar Breakers Installed Incorrectly"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-start justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              02
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Solar Breakers Installed Incorrectly
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 3 - Split Image */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden flex gap-[3px]">
                                      <div className="flex-1 h-full rounded-tl-[10px] overflow-hidden">
                                          <img
                                              src="/indentify-solar-problems/section 3/problem3.svg"
                                              alt="Missing Labels on Solar Conduit"
                                              className="w-full h-full object-cover"
                                          />
                                      </div>
                                      <div className="flex-1 h-full rounded-tr-[10px] overflow-hidden">
                                          <img
                                              src="/indentify-solar-problems/section 3/problem4.svg"
                                              alt="Missing Labels on Solar Breaker"
                                              className="w-full h-full object-cover"
                                          />
                                      </div>
                                  </div>
                                  <div className="w-full flex items-start justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              03
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Missing Labels on Solar Conduit & Solar Breaker
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 4 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem5.svg"
                                          alt="Rooftop Fire Code Violations"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              04
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Rooftop Fire Code Violations
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 5 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem6.svg"
                                          alt="Trees Shading Solar Panels"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              05
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Trees Shading Solar Panels
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 6 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem7.svg"
                                          alt="Loose Solar Panel Wires Under Panels"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-start justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              06
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Loose Solar Panel Wires Under Panels
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 7 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem8.svg"
                                          alt="Improper Roof Penetrations"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              07
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Improper Roof Penetrations
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 8 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem9.svg"
                                          alt="Debris Buildup on Solar Panels"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              08
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Debris Buildup on Solar Panels
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 9 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem10.svg"
                                          alt="Pest Activity Under Panels"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-start justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              09
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Pest Activity (Birds, Rodents, Nesting) Under Panels
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 10 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem11.svg"
                                          alt="Solar Panels Not Secured Properly"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-start justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              10
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Solar Panels Not Secured Properly
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                              {/* Problem 11 */}
                              <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.2)] overflow-hidden">
                                  <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-t-[10px] overflow-hidden">
                                      <img
                                          src="/indentify-solar-problems/section 3/problem1.svg"
                                          alt="Broken or Damaged Solar Panels"
                                          className="w-full h-full object-cover"
                                      />
                                  </div>
                                  <div className="w-full flex items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 p-4 sm:p-5 md:p-6 lg:p-10 xl:p-10 2xl:p-10 rounded-b-[10px]">
                                      <div className="flex items-center justify-center px-2 sm:px-2 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5 py-1 sm:py-1 md:py-[5px] lg:py-[5px] xl:py-[5px] 2xl:py-[5px] rounded-[5px] border border-[rgba(0,0,0,0.2)] shrink-0">
                                          <span className="font-medium leading-[110%] text-nowrap
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              11
                                          </span>
                                      </div>
                                      <div className="flex-1 flex items-center justify-center">
                                          <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[20px] sm:text-[22px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                                               font-['Aeonik_Pro'] text-[#141414]">
                                              Broken or Damaged Solar Panels
                                          </h3>
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="w-full flex items-start justify-center pt-6 sm:pt-7 md:pt-8 lg:pt-[30px] xl:pt-[30px] 2xl:pt-[30px] px-4 sm:px-5 md:px-6 lg:px-[30px] xl:px-[30px] 2xl:px-[30px] pb-0">
                      <p className="text-center font-medium leading-[110%] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4
                           text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]
                           font-['Aeonik_Pro'] text-[rgba(0,0,0,0.66)] max-w-4xl">
                          These problems may seem small, but together they can cost a homeowner thousands—or cause a buyer to walk away.
                      </p>
                  </div>
              </div>
          </section>
          <HowItWorksSection
              title="The Sprk Solution"
              subtitle="Sprk helps you identify, document, and resolve solar issues with clarity and confidence."
              step1={{
                  icon: "/indentify-solar-problems/section 4/oder.svg",
                  label: "Order a Solar Inspection from a Sprk Certified Inspector",
                  description: "A Sprk Certified Home Inspector will evaluate your system's health, safety, and performance—just like they would your roof or electrical panel."
              }}
              step2={{
                  icon: "/indentify-solar-problems/section 4/review.svg",
                  label: "Review Your Solar Inspection Report",
                  description: "• Measured solar energy output\n• Estimated useful remaining life\n• Identification of safety or installation problems\n• Photo documentation of any issues\n• Clear recommendations for resolution"
              }}
              step3={{
                  icon: "/indentify-solar-problems/section 4/hire.svg",
                  label: "Hire a Certified Solar Professional",
                  description: "If repairs or upgrades are needed, Sprk can help you connect with a Certified Solar Pro to address the issues and properly document the needed repairs to ensure your solar achieves its full potential."
              }}
          />

          <section className="w-full bg-[#115056] flex flex-col items-center justify-start py-[80px] px-4 sm:py-[90px] sm:px-6 md:py-[90px] md:px-8 lg:py-[100px] lg:px-24 xl:py-[100px] xl:px-24 2xl:py-[100px] 2xl:px-24">
              <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px]">
                  {/* Content Card */}
                  <div className="w-full flex flex-wrap items-center justify-start gap-6">
                      <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden
                           h-auto sm:h-auto md:h-auto lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">
                          <div className="w-full h-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-start justify-start">
                              {/* Image Section */}
                              <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-gray-50 flex items-center justify-center
                                   h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] min-w-[350px]">
                                  <img
                                      src="/indentify-solar-problems/section 5/whomight.svg"
                                      alt="Who might want a solar inspection"
                                      className="w-full h-full object-cover"
                                  />
                              </div>

                              {/* Content Section */}
                              <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-white flex flex-col items-start justify-start gap-6 sm:gap-7 md:gap-8 lg:gap-[35px] xl:gap-[35px] 2xl:gap-[35px]
                                   p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] min-w-[350px]
                                   h-auto lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">

                                  {/* Card Title */}
                                  <div className="w-full flex items-start justify-start">
                                      <h3 className="font-medium leading-[110%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                           text-[35px] sm:text-[35px] md:text-[35px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px]
                                           font-['Aeonik_Pro'] text-[#141414]">
                                          Who Might Want a<br />Solar Inspection?
                                      </h3>
                                  </div>

                                  {/* Checklist Items */}
                                  <div className="w-full flex flex-col items-start justify-start gap-3 sm:gap-3 md:gap-4 lg:gap-[15px] xl:gap-[15px] 2xl:gap-[15px]">
                                      {/* Item 1 */}
                                      <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                          <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                                              <img
                                                  src="/indentify-solar-problems/section 5/icon.svg"
                                                  alt="Check"
                                                  className="w-full h-full"
                                              />
                                          </div>
                                          <p className="flex-1 font-normal leading-[120%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]
                                               font-['Inter'] text-[#141414]">
                                              <span className="font-semibold">Solar Homeowners</span> experiencing high utility bills, low energy output, or preparing to sell
                                          </p>
                                      </div>

                                      {/* Item 2 */}
                                      <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                          <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                                              <img
                                                  src="/indentify-solar-problems/section 5/icon.svg"
                                                  alt="Check"
                                                  className="w-full h-full"
                                              />
                                          </div>
                                          <p className="flex-1 font-normal leading-[120%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]
                                               font-['Inter'] text-[#141414]">
                                              <span className="font-semibold">Solar Home Buyers</span> who want to confirm system performance, longevity, and condition
                                          </p>
                                      </div>

                                      {/* Item 3 */}
                                      <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                          <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                                              <img
                                                  src="/indentify-solar-problems/section 5/icon.svg"
                                                  alt="Check"
                                                  className="w-full h-full"
                                              />
                                          </div>
                                          <p className="flex-1 font-normal leading-[120%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]
                                               font-['Inter'] text-[#141414]">
                                              <span className="font-semibold">Real Estate Agents</span> managing transactions involving solar-powered homes
                                          </p>
                                      </div>

                                      {/* Item 4 */}
                                      <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                          <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                                              <img
                                                  src="/indentify-solar-problems/section 5/icon.svg"
                                                  alt="Check"
                                                  className="w-full h-full"
                                              />
                                          </div>
                                          <p className="flex-1 font-normal leading-[120%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]
                                               font-['Inter'] text-[#141414]">
                                              <span className="font-semibold">Home Inspectors</span> looking to offer solar inspections as a value-add service
                                          </p>
                                      </div>

                                      {/* Item 5 */}
                                      <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                                          <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                                              <img
                                                  src="/indentify-solar-problems/section 5/icon.svg"
                                                  alt="Check"
                                                  className="w-full h-full"
                                              />
                                          </div>
                                          <p className="flex-1 font-normal leading-[120%] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2
                                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]
                                               font-['Inter'] text-[#141414]">
                                              <span className="font-semibold">Solar Companies</span> that want to validate installation quality or confirm repairs for customers
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="w-full flex flex-col items-center justify-start py-[100px] px-4 sm:py-[120px] sm:px-6 md:py-[130px] md:px-8 lg:py-[150px] lg:px-24 xl:py-[150px] xl:px-24 2xl:py-[150px] 2xl:px-24">
              <div className="w-full max-w-7xl flex flex-col items-center justify-start gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px]">
                  {/* Section Header */}
                  <div className="w-full flex flex-col items-center justify-start gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5">
                      <div className="w-full flex items-center justify-center">
                          <h2 className="text-center font-medium leading-[110%] mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6
                               text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]
                               font-['Aeonik_Pro'] text-[#141414]">
                              What to Do Next
                          </h2>
                      </div>
                      <div className="w-full flex items-center justify-center">
                          <p className="text-center font-normal leading-[120%] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4
                               text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px]
                               font-['Inter'] text-[rgba(0,0,0,0.66)] max-w-4xl">
                              If you have solar or are working with a solar-powered home, the best time to
                              <br />find problems is before they disrupt your deal.
                          </p>
                      </div>
                  </div>

                  {/* Image Section */}
                  <div className="w-full flex flex-col items-start justify-start">
                      <div className="w-full rounded-[10px] overflow-hidden
                           h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px]">
                          <img
                              src="/indentify-solar-problems/section 6/whattodo.svg"
                              alt="What to do next - couple meeting with real estate agent"
                              className="w-full h-full object-cover"
                          />
                      </div>
                  </div>
              </div>
          </section>
         <ScrollToTop />

    </>
  );
}
