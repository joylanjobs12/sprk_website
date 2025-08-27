import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";

function SolidInterfaceArrowRight() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]">
        <Image src="/home-page/section 1/arrow-right.svg" alt="Arrow Right" width={30} height={30} className="block max-w-none size-full" />
      </div>
    </div>
  );
}

function RoleCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[400px] items-start justify-between min-w-[294px] p-[40px] relative rounded-[10px] shrink-0 w-[294px]">
      <div
        className="absolute border border-[rgba(17,80,86,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]"
        style={{
          boxShadow: "0px 63px 25px 0px rgba(38,142,151,0.02), 0px 36px 21px 0px rgba(38,142,151,0.08), 0px 16px 16px 0px rgba(38,142,151,0.13), 0px 4px 9px 0px rgba(38,142,151,0.1)"
        }}
      />
      <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-start relative shrink-0">
          <div className="bg-[#f1fafa] box-border content-stretch flex items-center justify-start p-[20px] relative rounded-[10px] shrink-0">
            <div className="absolute border border-[#115056] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <div className="h-[69px] overflow-clip relative shrink-0 w-[70px]">
              {icon}
            </div>
          </div>
        </div>
        <div className="content-start flex flex-wrap gap-0 items-start justify-center min-w-[220px] relative shrink-0 w-full">
          <div
            className="basis-0 grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px]"
            style={{
              fontFamily: '"Aeonik Pro", sans-serif',
              fontWeight: 500,
            }}
          >
            {title}
          </div>
        </div>
      </div>
      <div className="bg-[#f1fafa] box-border content-stretch flex items-start justify-center p-[5px] relative rounded-[5px] shrink-0 w-full">
        <div className="absolute border border-[#115056] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="basis-0 box-border content-stretch flex grow items-center justify-center min-h-px min-w-px px-[15px] py-[5px] relative shrink-0">
          <div
            className="basis-0 grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[22px] text-center"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          >
            Learn More
          </div>
          <div className="relative shrink-0 size-[30px]">
            <SolidInterfaceArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalSolarTrainingPage() {
  return (
    <>
      <section className="box-border content-stretch flex flex-col gap-20 items-center justify-start pb-[100px] pt-[150px] px-24 relative w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
          <header className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start overflow-visible p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-[30px] items-center justify-start px-2.5 py-0 relative shrink-0 w-full">
              <div className="font-['Aeonik_Pro:Medium',_sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#115056] text-[80px] text-center w-full">
                <p className="mb-0">
                  <span className="text-[#115056]">Empower </span>
                  <span className="text-[#141414]">Your Solar and</span>
                </p>
                <p className="text-[#141414]">Real Estate Skills</p>
              </div>
              <div className="box-border content-stretch flex items-center justify-center px-2.5 py-0 relative shrink-0 w-full">
                <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.66)] text-center">
                  <p className="mb-0">Sprk Certification Training helps home inspectors, real estate agents, and solar professionals gain</p>
                  <p className="">the knowledge and tools they need to confidently serve today&apos;s solar-powered homes.</p>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="content-center flex flex-wrap gap-6 items-center justify-start relative shrink-0 w-full">
          <RoleCard
            icon={<Image src="/professional-solar-training-page/section 1/real-state-agents.svg" alt="Real Estate Agent" width={70} height={73} className="block max-w-none size-full" />}
            title="Sprk for Real Estate Agents"
          />
          <RoleCard
            icon={<Image src="/professional-solar-training-page/section 1/inspectors.svg" alt="Inspector" width={70} height={69} className="block max-w-none size-full" />}
            title="Sprk for Home Inspectors"
          />
          <RoleCard
            icon={<Image src="/professional-solar-training-page/section 1/professionals.svg" alt="Solar Professional" width={70} height={69} className="block max-w-none size-full" />}
            title="Sprk for Solar Professionals"
          />
        </div>
      </section>

       {/* Section 2 - The Problem */}
       <section className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[100px] relative w-[1440px] mx-auto">
         <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-full">
           <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-full">
             <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
               <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center">
                 The Problem
               </div>
             </div>
           </div>
           <div className="content-stretch flex flex-col gap-[30px] items-start justify-start relative shrink-0 w-full">
             <div className="content-start flex flex-wrap gap-6 items-start justify-start relative shrink-0 w-full">
               <div className="bg-white h-[500px] relative rounded-[10px] shrink-0 w-[1248px]">
                 <div className="content-start flex flex-wrap gap-0 h-[500px] items-start justify-start overflow-clip relative w-[1248px]">
                   <div className="bg-gray-50 content-stretch flex flex-col items-start justify-start relative shrink-0 w-[624px]">
                     <div className="bg-center bg-cover bg-no-repeat h-[500px] min-w-[350px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 2/home.svg')` }} />
                   </div>
                   <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[35px] grow h-[500px] items-start justify-start min-h-px min-w-[350px] overflow-clip p-[30px] relative shrink-0">
                     <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                       <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[30px]">
                         <p className="mb-0">Too many homes with solar are sold, inspected, or listed by professionals with no formal solar training.</p>
                         <p className="">That leads to:</p>
                       </div>
                     </div>
                     <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                       <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                         <div className="relative shrink-0 size-6">
                           <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                             <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none size-full" />
                           </div>
                         </div>
                         <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                           Incomplete disclosures
                         </div>
                       </div>
                       <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                         <div className="relative shrink-0 size-6">
                           <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                             <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none size-full" />
                           </div>
                         </div>
                         <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                           Missed equity
                         </div>
                       </div>
                       <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                         <div className="relative shrink-0 size-6">
                           <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                             <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none size-full" />
                           </div>
                         </div>
                         <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                           Undocumented systems
                         </div>
                       </div>
                       <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                         <div className="relative shrink-0 size-6">
                           <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                             <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none size-full" />
                           </div>
                         </div>
                         <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                           Unknowingly transferring problematic systems
                         </div>
                       </div>
                       <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                         <div className="relative shrink-0 size-6">
                           <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                             <Image src="/professional-solar-training-page/section 2/the-problem.svg" alt="Warning" width={24} height={24} className="block max-w-none size-full" />
                           </div>
                         </div>
                         <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                           Deals delayed or lost entirely
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
               </div>
             </div>
             <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[30px] px-[30px] relative shrink-0 w-full">
               <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)] text-center">
                 As solar adoption continues to grow, these issues will only become more common. You shouldn&apos;t have to be a seasoned solar expert to serve these homes—but understanding how they work, how they&apos;re financed, and how to clearly communicate their value is essential. By leveling up with the right tools and training, we can step up to better serve those buying and selling solar homes.
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Section 3 - Solar Training Tailored to Your Role */}
       <section className="box-border content-stretch flex flex-col gap-20 items-center justify-start px-24 py-[100px] relative w-[1440px] mx-auto">
         <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-[1248px]">
           <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
             <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
               <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center">
                 Solar Training Tailored to Your Role
               </div>
             </div>
             <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
               <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.66)] text-center">
                 <p className="mb-0">Sprk Certified Training was created for professionals working in the real world—not in a lab.</p>
                 <p className="">Each training track is designed to help you handle the challenges specific to your role in the solar real estate ecosystem:</p>
               </div>
             </div>
           </div>
         </div>
         <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
           <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
             <div className="content-stretch flex items-start justify-center relative shrink-0">
               <div className="font-['Aeonik_Pro:Medium',_sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#141414] text-[45px] w-[604px]">
                 For Home Inspectors
               </div>
             </div>
             <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[15px] px-0 relative shrink-0 w-full">
               <div className="basis-0 font-['Aeonik_Pro:Regular',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[25px] text-[rgba(0,0,0,0.66)]">
                 <p className="mb-0">Learn how to identify equipment and installation problems, verify solar system performance, and integrate solar into your home inspection process.</p>
                 <p className="mb-0">&nbsp;</p>
                 <p className="">You&apos;ll also learn how to generate Solar Inspection Reports and Home Energy Reports for buyers and agents.</p>
               </div>
             </div>
           </div>
           <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
             <div className="bg-center bg-cover bg-no-repeat h-[374px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 3/solar-training.svg')` }}>
               <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
             </div>
           </div>
         </div>
         <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
           <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
             <div className="bg-center bg-cover bg-no-repeat h-[374px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 3/real-state-agents.svg')` }}>
               <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
             </div>
           </div>
           <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
             <div className="content-stretch flex items-start justify-center relative shrink-0">
               <div className="font-['Aeonik_Pro:Medium',_sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#141414] text-[45px] w-[604px]">
                 For Real Estate Agents
               </div>
             </div>
             <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[15px] px-0 relative shrink-0 w-full">
               <div className="basis-0 font-['Aeonik_Pro:Regular',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[25px] text-[rgba(0,0,0,0.66)]">
                 <p className="mb-0">Understand how solar contracts, ownership structures, and system details affect appraisals, equity, and the entire transaction process.</p>
                 <p className="mb-0">&nbsp;</p>
                 <p className="">Learn how to market, disclose, and guide clients through deals involving solar. Use Sprk Reports to represent solar homes with confidence.</p>
               </div>
             </div>
           </div>
         </div>
         <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
           <div className="basis-0 content-stretch flex flex-col gap-[30px] grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
             <div className="content-stretch flex items-start justify-center relative shrink-0">
               <div className="font-['Aeonik_Pro:Medium',_sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#141414] text-[45px] w-[604px]">
                 For Solar Professionals
               </div>
             </div>
             <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[15px] px-0 relative shrink-0 w-full">
               <div className="basis-0 font-['Aeonik_Pro:Regular',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[25px] text-[rgba(0,0,0,0.66)]">
                 <p className="mb-0">Build confidence when quoting, reduce cancellations, and support clients long after the install.</p>
                 <p className="mb-0">&nbsp;</p>
                 <p className="">Learn how to size systems based on real home performance, and leave every customer with the documentation they&apos;ll need for resale, refinancing, or warranty support.</p>
               </div>
             </div>
           </div>
           <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0">
             <div className="bg-center bg-cover bg-no-repeat h-[374px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 3/solar-professionals.svg')` }}>
               <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
             </div>
           </div>
         </div>
       </section>

      {/* Section 4 - What You'll Learn */}
        <section className="bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[150px] relative shrink-0 w-[1440px]">
            <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-[1248px]">
              <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                  <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[56px] text-center text-white">
                    What You&apos;ll Learn
                  </div>
                </div>
              </div>
              <div className="content-center flex flex-wrap gap-6 items-center justify-start relative shrink-0 w-full">
                <div className="bg-white min-w-[400px] relative rounded-[10px] shrink-0 w-[612px]">
                  <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative w-[612px]">
                    <div className="bg-[#115056] content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex flex-col grow h-[355px] items-start justify-start min-h-px min-w-px relative shrink-0">
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 4/every-sprk.svg')` }} />
                      </div>
                    </div>
                    <div className="bg-white box-border content-stretch flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px] relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-[70px] min-w-px not-italic relative shrink-0 text-[#141414] text-[35px]">
                          Every Sprk Certified Training includes:
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-44 min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)]">
                          <ul className="list-disc ps-[27px] space-y-1">
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
                <div className="bg-white min-w-[400px] relative rounded-[10px] shrink-0 w-[612px]">
                  <div className="content-stretch flex flex-col items-center justify-start min-w-inherit overflow-clip relative w-[612px]">
                    <div className="bg-[#115056] content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full">
                      <div className="basis-0 bg-gray-50 content-stretch flex flex-col grow h-[355px] items-start justify-start min-h-px min-w-px relative shrink-0">
                        <div className="basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 4/youll-also.svg')` }} />
                      </div>
                    </div>
                    <div className="bg-white box-border content-stretch flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px] relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-[70px] min-w-px not-italic relative shrink-0 text-[#141414] text-[35px]">
                          You&apos;ll also receive:
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-44 min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)]">
                          <ul className="list-disc ps-[27px] space-y-1">
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
        <section className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[100px] relative w-[1440px] mx-auto">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[56px] text-center">
                Who Should Get Certified?
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.66)] text-center">
                  <p className="mb-0">Sprk Certified Training is built for professionals who want to lead with confidence in the</p>
                  <p className="">growing solar and energy-aware real estate market.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[50px] items-center justify-start relative shrink-0 w-[1248px]">
            <div className="content-center flex flex-wrap gap-6 items-center justify-start relative shrink-0 w-full">
              <div className="bg-white h-[500px] relative rounded-[10px] shrink-0 w-[1248px]">
                <div className="content-start flex flex-wrap gap-0 h-[500px] items-start justify-start overflow-clip relative w-[1248px]">
                  <div className="bg-gray-50 content-stretch flex flex-col items-start justify-start relative shrink-0 w-[624px]">
                    <div className="bg-center bg-cover bg-no-repeat h-[500px] min-w-[350px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 5/get-certified.svg')` }} />
                  </div>
                  <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[35px] grow h-[500px] items-start justify-start min-h-px min-w-[350px] overflow-clip p-[30px] relative shrink-0">
                    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                      <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[30px]">
                        It&apos;s a perfect fit for:
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                            <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                          </div>
                        </div>
                        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                          Home Inspectors looking to expand their service offerings
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                            <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                          </div>
                        </div>
                        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                          Real Estate Agents who want to lead in the green home market
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                            <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                          </div>
                        </div>
                        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                          Solar Professionals who care about long-term value—not just installs
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[5px] items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-6">
                          <div className="absolute inset-[11.64%_8.56%_11.16%_8.56%]">
                            <Image src="/icons/check-box.svg" alt="Check" width={24} height={24} className="block max-w-none size-full" />
                          </div>
                        </div>
                        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[18px]">
                          Brokerages, inspection firms, and solar teams ready to train at scale
                        </div>
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
        <section className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[100px] relative w-[1440px] mx-auto">
          <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
            <div className="content-start flex flex-wrap items-start justify-between relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex grow items-start justify-start min-h-px min-w-[612px] relative shrink-0">
                <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px]">
                  <p className="mb-0">What Certified Pros Are Saying</p>
                  <p className="">About Sprk</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex gap-2.5 grow items-center justify-end min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)] text-nowrap">
                    Discover their Stories
                  </div>
                </div>
                <div className="relative shrink-0 size-9">
                  <div className="absolute inset-[36.46%_30.21%_40.63%_30.21%]">
                    <Image src="/home-page/section 1/arrow-right.svg" alt="Arrow Right" width={36} height={36} className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-6 items-center justify-center overflow-clip relative shrink-0 w-full">
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0">
              <div className="content-start flex flex-wrap gap-0 items-start justify-start overflow-clip relative w-full">
                <div className="basis-0 bg-center bg-cover bg-no-repeat content-stretch flex grow items-center justify-start min-h-px min-w-[350px] relative shrink-0">
                  <div className="basis-0 bg-center bg-cover bg-no-repeat grow h-[500px] min-h-px min-w-px shrink-0" style={{ backgroundImage: `url('/professional-solar-training-page/section 6/profile.svg')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-[30px] grow items-start justify-start min-h-px min-w-[350px] overflow-clip p-[50px] relative shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.66)]">
                      &quot;The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.&quot;
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]">
                        Trey S.
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)]">
                        Fusion Power
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0">
              <div className="content-start flex flex-wrap gap-0 items-start justify-start overflow-clip relative w-full">
                <div className="basis-0 bg-center bg-cover bg-no-repeat content-stretch flex grow items-center justify-start min-h-px min-w-[350px] relative shrink-0">
                  <div className="basis-0 bg-center bg-cover bg-no-repeat grow h-[500px] min-h-px min-w-px shrink-0" style={{ backgroundImage: `url('/professional-solar-training-page/section 6/profile.svg')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-[30px] grow items-start justify-start min-h-px min-w-[350px] overflow-clip p-[50px] relative shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.66)]">
                      &quot;The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.&quot;
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]">
                        Trey S.
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)]">
                        Fusion Power
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
            <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0">
              <div className="content-start flex flex-wrap gap-0 items-start justify-start overflow-clip relative w-full">
                <div className="basis-0 bg-center bg-cover bg-no-repeat content-stretch flex grow items-center justify-start min-h-px min-w-[350px] relative shrink-0">
                  <div className="basis-0 bg-center bg-cover bg-no-repeat grow h-[500px] min-h-px min-w-px shrink-0" style={{ backgroundImage: `url('/professional-solar-training-page/section 6/profile.svg')` }} />
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-[30px] grow items-start justify-start min-h-px min-w-[350px] overflow-clip p-[50px] relative shrink-0">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                    <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.66)]">
                      &quot;The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy reports for our clients.&quot;
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[32px]">
                        Trey S.
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.66)]">
                        Fusion Power
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
        </section>

       {/* Section 7 - How to Get Started */}
        <section className="bg-[#115056] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col gap-[50px] items-center justify-start px-24 py-[150px] relative shrink-0 w-[1440px]">
            <div className="content-stretch flex flex-col gap-5 items-center justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="basis-0 font-['Aeonik_Pro:Medium',_sans-serif] grow leading-[1.1] min-h-px min-w-px not-italic relative shrink-0 text-[56px] text-center text-white">
                  How to Get Started
                </div>
              </div>
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[22px] text-[rgba(255,255,255,0.8)] text-center">
                  <p className="mb-0">Sprk Training is available on-demand inside the Sprk Pro Portal. Most professionals complete it in</p>
                  <p className="">just a few hours and start using it in the field the same week.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div className="bg-center bg-no-repeat h-[600px] rounded-[10px] shrink-0 w-full" style={{ backgroundImage: `url('/professional-solar-training-page/section 7/how-to-get-started.svg')`, backgroundSize: '114.02% 136.42%', backgroundPosition: '50% 13.49%' }} />
            </div>
          </div>
        </section>

                {/* Section 8 - Select Your Role */}
        <section className="box-border content-stretch flex flex-col gap-20 items-center justify-start px-24 py-[150px] relative w-[1440px] mx-auto">
          <div className="content-start flex flex-wrap items-start justify-between relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex flex-col gap-[30px] grow items-center justify-start min-h-px min-w-[612px] pl-0 pr-5 py-0 shrink-0 sticky top-0">
              <div className="font-['Aeonik_Pro:Medium',_sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#141414] text-[56px] text-center w-full">
                Select your role to get started:
              </div>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-6 items-center justify-start relative shrink-0 w-full">
            <RoleCard
              icon={<Image src="/professional-solar-training-page/section 8/inspectors.svg" alt="Home Inspector" width={70} height={69} className="block max-w-none size-full" />}
              title="Sprk for Home Inspectors"
            />
            <RoleCard
              icon={<Image src="/professional-solar-training-page/section 8/real-state-agents.svg" alt="Real Estate Agent" width={70} height={69} className="block max-w-none size-full" />}
              title="Sprk for Real Estate Agents"
            />
            <RoleCard
              icon={<Image src="/professional-solar-training-page/section 8/professionals.svg" alt="Solar Professional" width={70} height={69} className="block max-w-none size-full" />}
              title="Sprk for Solar Professionals"
            />
          </div>
        </section>
      {/* Scroll to Top Button */}
      <ScrollToTop />

    </>
  );
}
