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

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </>
  );
}
