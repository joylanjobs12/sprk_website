import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimations from "@/components/ScrollAnimations";
import Testimonials from "@/components/Testimonials";
import SelectRole from "@/components/SelectRole";





export default function ProfessionalSolarTrainingPage() {
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] 2xl:py-[150px] box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start relative">
        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
          <header className="text-center pt-[40px] sm:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
            <h1
              className="fade-up text-center mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6 text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium"
              style={{
                textAlign: "center",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              <span style={{ color: "var(--Primary-Color, #115056)" }}>Empower </span>
              <span style={{ color: "var(--Text-Title, #141414)" }}>Your Solar and</span><br className="hidden xs:inline sm:inline" />
              <span style={{ color: "var(--Text-Title, #141414)" }}>{" "}Real Estate Skills</span>
            </h1>
            <strong
              className="fade-up max-w-xl sm:max-w-2xl mx-auto opacity-80 px-4 sm:px-0 mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                color: "rgba(0,0,0,0.66)",
              }}
            >
              Sprk Certification Training helps home inspectors, real estate agents, and solar professionals gain the knowledge and tools they need to confidently serve today&apos;s solar-powered homes.
            </strong>
          </header>
        </div>
        <SelectRole
          roles={[
            {
              id: "agent",
              icon: "/professional-solar-training-page/section 1/real-state-agents.svg",
              alt: "Real Estate Agent",
              title: "Sprk for Real Estate Agents",
              buttonLabel: "Learn More"
            },
            {
              id: "inspector",
              icon: "/professional-solar-training-page/section 1/inspectors.svg",
              alt: "Home Inspector",
              title: "Sprk for Home Inspectors",
              buttonLabel: "Learn More"
            },
            {
              id: "solar-pro",
              icon: "/professional-solar-training-page/section 1/professionals.svg",
              alt: "Solar Professional",
              title: "Sprk for Solar Professionals",
              buttonLabel: "Learn More"
            }
          ]}
          className="lg:grid-cols-3"
        />
      </section>

           {/* Section 2 - The Problem */}
      <section className="section-2 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative">
        <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal text-center text-[40px] sm:text-[40px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-4 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000"
                }}
              >
                The Problem
              </h2>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-full">
            <div className="content-start flex flex-wrap gap-6 items-start justify-start relative shrink-0 w-full">
              <div className="card-flip bg-white w-full relative rounded-[10px] shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg">
                <div className="content-start flex flex-col md:flex-row gap-0 items-start justify-start overflow-clip relative w-full">
                  <div className="bg-gray-50 content-stretch flex flex-col items-start justify-start relative shrink-0 w-full md:w-1/2">
                    <div className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[220px] md:h-[450px] lg:h-[480px] xl:h-[500px] shrink-0 w-full transition-all duration-500 ease-in-out" style={{ backgroundImage: `url('/professional-solar-training-page/section 2/home.svg')` }} />
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-5 md:gap-[35px] grow items-start justify-start overflow-clip p-4 sm:p-5 md:p-[30px] relative shrink-0">
                    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                      <h3
                        className="text-reveal text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-3 sm:mb-3 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                        style={{
                          fontFamily: '"Aeonik Pro", sans-serif',
                          fontWeight: 500,
                          color: "#000"
                        }}
                      >
                        Too many homes with solar are sold, inspected, or listed by professionals with no formal solar training. That leads to:
                      </h3>
                    </div>
                    <div className="content-stretch flex flex-col gap-3 sm:gap-3 md:gap-[5px] items-start justify-start relative shrink-0 w-full">
                      <div className="bounce-in content-stretch flex gap-3 sm:gap-3 md:gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                            <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none w-full h-full" />
                          </div>
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Incomplete disclosures
                        </p>
                      </div>
                      <div className="bounce-in content-stretch flex gap-3 sm:gap-3 md:gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                            <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none w-full h-full" />
                          </div>
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Missed equity
                        </p>
                      </div>
                      <div className="bounce-in content-stretch flex gap-3 sm:gap-3 md:gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                            <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none w-full h-full" />
                          </div>
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Undocumented systems
                        </p>
                      </div>
                      <div className="bounce-in content-stretch flex gap-3 sm:gap-3 md:gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                            <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none w-full h-full" />
                          </div>
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Unknowingly transferring problematic systems
                        </p>
                      </div>
                      <div className="bounce-in content-stretch flex gap-3 sm:gap-3 md:gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                            <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none w-full h-full" />
                          </div>
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Deals delayed or lost entirely
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
            </div>
            <div className="box-border content-stretch flex items-start justify-center pb-0 pt-6 sm:pt-8 md:pt-[30px] px-4 sm:px-6 md:px-[30px] relative shrink-0 w-full">
              <p
                className="text-reveal max-w-4xl mx-auto text-center text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  color: "#000",
                }}
              >
                As solar adoption continues to grow, these issues will only become more common. You shouldn&apos;t have to be a seasoned solar expert to serve these homes—but understanding how they work, how they&apos;re financed, and how to clearly communicate their value is essential. By leveling up with the right tools and training, we can step up to better serve those buying and selling solar homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Solar Training Tailored to Your Role */}
       <section className="section-3 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start relative">
         <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
           <div className="content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-[30px] items-center justify-start relative shrink-0 w-full">
             <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
               <h2
                 className="bounce-in text-center text-[28px] sm:text-[32px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-4 sm:mb-4 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                 style={{
                   fontFamily: '"Aeonik Pro", sans-serif',
                   fontWeight: 500,
                   color: "#000"
                 }}
               >
                 Solar Training Tailored to Your Role
               </h2>
             </div>
             <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
               <p
                 className="text-reveal max-w-4xl mx-auto text-center text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                 style={{
                   fontFamily: 'Inter',
                   fontWeight: 400,
                   color: "#000",
                 }}
               >
                 Sprk Certified Training was created for professionals working in the real world—not in a lab. Each training track is designed to help you handle the challenges specific to your role in the solar real estate ecosystem:
               </p>
             </div>
           </div>
         </div>
         <div className="content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center justify-start relative shrink-0 w-full">
           {/* For Home Inspectors Card */}
           <div className="w-full max-w-none lg:max-w-[1248px] mx-auto">
             <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center lg:items-start justify-start w-full">
               <div className="card-slide-left flex flex-col gap-4 sm:gap-5 lg:gap-[30px] items-center lg:items-start justify-start w-full lg:w-1/2 order-2 lg:order-1">
                 <div className="content-stretch flex items-start justify-center lg:justify-start relative shrink-0 w-full">
                   <h3
                     className="text-reveal text-center lg:text-left text-[24px] sm:text-[26px] md:text-[28px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-4"
                     style={{
                       fontFamily: '"Aeonik Pro", sans-serif',
                       fontWeight: 500,
                       color: "#000"
                     }}
                   >
                     For Home Inspectors
                   </h3>
                 </div>
                 <div className="box-border content-stretch flex items-start justify-center lg:justify-start pb-0 pt-0 lg:pt-[15px] px-0 relative shrink-0 w-full">
                   <p
                     className="text-reveal text-center lg:text-left text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                     style={{
                       fontFamily: 'Inter',
                       fontWeight: 400,
                       color: "#000"
                     }}
                   >
                     Learn how to identify equipment and installation problems, verify solar system performance, and integrate solar into your home inspection process.<br /><br />
                     You&apos;ll also learn how to generate Solar Inspection Reports and Home Energy Reports for buyers and agents.
                   </p>
                 </div>
               </div>
               <div className="card-slide-right flex flex-col items-center lg:items-start justify-start w-full lg:w-1/2 order-1 lg:order-2">
                 <div className="bg-center bg-cover bg-no-repeat h-[250px] sm:h-[280px] lg:h-[374px] relative rounded-[10px] shrink-0 w-full max-w-md lg:max-w-none transition-all duration-500 ease-in-out hover:scale-105" style={{ backgroundImage: `url('/professional-solar-training-page/section 3/solar-training.svg')` }}>
                   <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                 </div>
               </div>
             </div>
           </div>
           {/* For Real Estate Agents Card */}
           <div className="w-full max-w-none lg:max-w-[1248px] mx-auto">
             <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center lg:items-start justify-start w-full">
               <div className="card-slide-left flex flex-col gap-4 sm:gap-5 lg:gap-[30px] items-center lg:items-start justify-start w-full lg:w-1/2 order-2 lg:order-2">
                 <div className="content-stretch flex items-start justify-center lg:justify-start relative shrink-0 w-full">
                   <h3
                     className="text-reveal text-center lg:text-left text-[24px] sm:text-[26px] md:text-[28px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-4"
                     style={{
                       fontFamily: '"Aeonik Pro", sans-serif',
                       fontWeight: 500,
                       color: "#000"
                     }}
                   >
                     For Real Estate Agents
                   </h3>
                 </div>
                 <div className="box-border content-stretch flex items-start justify-center lg:justify-start pb-0 pt-0 lg:pt-[15px] px-0 relative shrink-0 w-full">
                   <p
                     className="text-reveal text-center lg:text-left text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                     style={{
                       fontFamily: 'Inter',
                       fontWeight: 400,
                       color: "#000"
                     }}
                   >
                     Understand how solar contracts, ownership structures, and system details affect appraisals, equity, and the entire transaction process.<br /><br />
                     Learn how to market, disclose, and guide clients through deals involving solar. Use Sprk Reports to represent solar homes with confidence.
                   </p>
                 </div>
               </div>
               <div className="card-slide-right flex flex-col items-center lg:items-start justify-start w-full lg:w-1/2 order-1 lg:order-1">
                 <div className="bg-center bg-cover bg-no-repeat h-[250px] sm:h-[280px] lg:h-[374px] relative rounded-[10px] shrink-0 w-full max-w-md lg:max-w-none transition-all duration-500 ease-in-out hover:scale-105" style={{ backgroundImage: `url('/professional-solar-training-page/section 3/real-state-agents.svg')` }}>
                   <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                 </div>
               </div>
             </div>
           </div>
           {/* For Solar Professionals Card */}
           <div className="w-full max-w-none lg:max-w-[1248px] mx-auto">
             <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center lg:items-start justify-start w-full">
               <div className="card-slide-left flex flex-col gap-4 sm:gap-5 lg:gap-[30px] items-center lg:items-start justify-start w-full lg:w-1/2 order-2 lg:order-1">
                 <div className="content-stretch flex items-start justify-center lg:justify-start relative shrink-0 w-full">
                   <h3
                     className="text-reveal text-center lg:text-left text-[24px] sm:text-[26px] md:text-[28px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-4"
                     style={{
                       fontFamily: '"Aeonik Pro", sans-serif',
                       fontWeight: 500,
                       color: "#000"
                     }}
                   >
                     For Solar Professionals
                   </h3>
                 </div>
                 <div className="box-border content-stretch flex items-start justify-center lg:justify-start pb-0 pt-0 lg:pt-[15px] px-0 relative shrink-0 w-full">
                   <p
                     className="text-reveal text-center lg:text-left text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                     style={{
                       fontFamily: 'Inter',
                       fontWeight: 400,
                       color: "#000"
                     }}
                   >
                     Build confidence when quoting, reduce cancellations, and support clients long after the install.<br /><br />
                     Learn how to size systems based on real home performance, and leave every customer with the documentation they&apos;ll need for resale, refinancing, or warranty support.
                   </p>
                 </div>
               </div>
               <div className="card-slide-right flex flex-col items-center lg:items-start justify-start w-full lg:w-1/2 order-1 lg:order-2">
                 <div className="bg-center bg-cover bg-no-repeat h-[250px] sm:h-[280px] lg:h-[374px] relative rounded-[10px] shrink-0 w-full max-w-md lg:max-w-none transition-all duration-500 ease-in-out hover:scale-105" style={{ backgroundImage: `url('/professional-solar-training-page/section 3/solar-professionals.svg')` }}>
                   <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Section 4 - What You'll Learn */}
        <section className="section-4 bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[150px] relative shrink-0 w-full max-w-[1440px] mx-auto">
            <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
              <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                  <h2
                    className="bounce-in text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium text-white mb-4 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500
                    }}
                  >
                    What You&apos;ll Learn
                  </h2>
                </div>
              </div>
              <div className="content-center flex flex-col lg:grid lg:grid-cols-2 gap-6 items-stretch justify-start relative shrink-0 w-full">
                <div className="card-flip bg-white relative rounded-[10px] shrink-0 w-full h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg">
                  <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative w-full h-full">
                    <div className="bg-[#115056] content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col grow h-[250px] sm:h-[300px] lg:h-[355px] items-start justify-start min-h-px min-w-px relative shrink-0">
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 4/every-sprk.svg')` }} />
                      </div>
                    </div>
                    <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-5 lg:gap-[22px] items-start justify-start pb-6 sm:pb-8 lg:pb-10 pt-4 sm:pt-6 lg:pt-[30px] px-4 sm:px-6 lg:px-[30px] relative flex-1 w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <h5 
                          className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                          style={{
                            fontFamily: '"Aeonik Pro", sans-serif',
                            fontWeight: 500,
                            color: "#000"
                          }}
                        >
                          Every Sprk Certified Training includes:
                        </h5>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <div 
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          <ul className="list-disc ps-[27px] space-y-2">
                            <li>How solar systems function in the context of real estate</li>
                            <li>How to handle different ownership types (owned, financed, leased, and PPAs)</li>
                            <li>What to look for during inspections or solar home transfers</li>
                            <li>How to use Sprk Reports to educate buyers, sellers, and agents</li>
                            <li>How to explain solar system condition, value, and impact using real data</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
                <div className="card-flip bg-white relative rounded-[10px] shrink-0 w-full h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg">
                  <div className="content-stretch flex flex-col items-center justify-start overflow-clip relative w-full h-full">
                    <div className="bg-[#115056] content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full">
                      <div className="basis-0 bg-gray-50 content-stretch flex flex-col grow h-[250px] sm:h-[300px] lg:h-[355px] items-start justify-start min-h-px min-w-px relative shrink-0">
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 4/youll-also.svg')` }} />
                      </div>
                    </div>
                    <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-5 lg:gap-[22px] items-start justify-start pb-6 sm:pb-8 lg:pb-10 pt-4 sm:pt-6 lg:pt-[30px] px-4 sm:px-6 lg:px-[30px] relative flex-1 w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <h5 
                          className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                          style={{
                            fontFamily: '"Aeonik Pro", sans-serif',
                            fontWeight: 500,
                            color: "#000"
                          }}
                        >
                          You&apos;ll also receive:
                        </h5>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <div 
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          <ul className="list-disc ps-[27px] space-y-2">
                            <li>Ongoing access to the Sprk Training Portal</li>
                            <li>The Sprk Certification Training Workbook</li>
                            <li>A downloadable certificate of completion</li>
                            <li>CE credits, where applicable</li>
                            <li>Listing in the Sprk Certified Provider Directory</li>
                            <li>Templates and tools tailored to your role</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Who Should Get Certified? */}
        <section className="section-5 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative">
          <div className="content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium mb-4 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000"
                }}
              >
                Who Should Get Certified?
              </h2>
            </div>
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <p
                  className="text-reveal max-w-4xl mx-auto text-center text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    color: "#000"
                  }}
                >
                  Sprk Certified Training is built for professionals who want to lead with confidence in the growing solar and energy-aware real estate market.
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px] mx-auto">
            <div className="content-center flex flex-wrap gap-6 items-center justify-start relative shrink-0 w-full">
              <div className="card-flip bg-white w-full relative rounded-[10px] shrink-0 transition-all duration-300 ease-in-out hover:shadow-lg">
                <div className="content-start flex flex-col md:flex-row gap-0 items-start justify-start overflow-clip relative w-full">
                  <div className="bg-gray-50 content-stretch flex flex-col items-start justify-start relative shrink-0 w-full md:w-1/2">
                    <div className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[220px] md:h-[450px] lg:h-[480px] xl:h-[500px] shrink-0 w-full transition-all duration-500 ease-in-out" style={{ backgroundImage: `url('/professional-solar-training-page/section 5/get-certified.svg')` }} />
                  </div>
                  <div className="bg-white box-border content-stretch flex flex-col gap-4 sm:gap-5 md:gap-[35px] items-start justify-start overflow-clip p-4 sm:p-5 md:p-[30px] relative shrink-0 w-full md:w-1/2">
                    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                      <h5
                        className="text-reveal text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                        style={{
                          fontFamily: '"Aeonik Pro", sans-serif',
                          fontWeight: 500,
                          color: "#000"
                        }}
                      >
                        It&apos;s a perfect fit for:
                      </h5>
                    </div>
                    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full space-y-2">
                      <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <Image src="/icons/check-box.svg" alt="Check" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Home Inspectors looking to expand their service offerings
                        </p>
                      </div>
                      <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <Image src="/icons/check-box.svg" alt="Check" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Real Estate Agents who want to lead in the green home market
                        </p>
                      </div>
                      <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <Image src="/icons/check-box.svg" alt="Check" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Solar Professionals who care about long-term value—not just installs
                        </p>
                      </div>
                      <div className="content-stretch flex gap-3 items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 mt-1">
                          <Image src="/icons/check-box.svg" alt="Check" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                        </div>
                        <p
                          className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-0"
                          style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            color: "#000"
                          }}
                        >
                          Brokerages, inspection firms, and solar teams ready to train at scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
            </div>
          </div>
        </section>

       {/* Section 6 - What Certified Pros Are Saying */}
        <Testimonials
          data={[
            {
              image: "/professional-solar-training-page/section 6/profile.svg",
              text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
              name: "Trey S.",
              company: "Fusion Power"
            },
            {
              image: "/professional-solar-training-page/section 6/profile.svg",
              text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
              name: "Trey S.",
              company: "Fusion Power"
            },
            {
              image: "/professional-solar-training-page/section 6/profile.svg",
              text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
              name: "Trey S.",
              company: "Fusion Power"
            },
            {
              image: "/professional-solar-training-page/section 6/profile.svg",
              text: "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.",
              name: "Trey S.",
              company: "Fusion Power"
            }
          ]}
        />

       {/* Section 7 - How to Get Started */}
        <section className="section-7 bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[150px] box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative">
            <div className="content-stretch flex flex-col gap-6 sm:gap-8 lg:gap-5 items-center justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <h2
                  className="text-reveal text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium text-white mb-4 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                  style={{
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontWeight: 500
                  }}
                >
                  How to Get Started
                </h2>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="max-w-4xl mx-auto text-center">
                  <p
                    className="text-reveal text-center text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.8)"
                    }}
                  >
                    Sprk Training is available on-demand inside the Sprk Pro Portal. Most professionals complete it in just a few hours and start using it in the field the same week.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div className="bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[10px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 7/how-to-get-started.svg')`, backgroundSize: '114.02% 136.42%', backgroundPosition: '50% 13.49%' }} />
            </div>
          </div>
        </section>

                {/* Section 8 - Select Your Role */}
        <section className="section-8 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[150px] box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start relative">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="fade-up text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium w-full mb-4 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: "#000"
                }}
              >
                Select your role to get started:
              </h2>
            </div>
          </div>
          <SelectRole
            roles={[
              {
                id: "inspector",
                icon: "/professional-solar-training-page/section 8/inspectors.svg",
                alt: "Home Inspector",
                title: "Sprk for Home Inspectors",
                buttonLabel: "Learn More"
              },
              {
                id: "agent",
                icon: "/professional-solar-training-page/section 8/real-state-agents.svg",
                alt: "Real Estate Agent",
                title: "Sprk for Real Estate Agents",
                buttonLabel: "Learn More"
              },
              {
                id: "solar-pro",
                icon: "/professional-solar-training-page/section 8/professionals.svg",
                alt: "Solar Professional",
                title: "Sprk for Solar Professionals",
                buttonLabel: "Learn More"
              }
            ]}
          />
        </section>
      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}
