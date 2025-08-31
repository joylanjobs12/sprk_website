import HowItWorksSection from "@/components/HowItWorksSection";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollAnimations from "@/components/ScrollAnimations";
import ButtonsType from "@/components/ButtonsType";

export default function IdentifySolarProblems() {
  return (
    <div className="overflow-hidden">
      <ScrollAnimations />

      {/* Section 1 - Hero */}
      <section className="section-1 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center pt-[100px] sm:pt-[120px] lg:pt-[150px] xl:pt-[150px] pb-[80px] sm:pb-[90px] lg:pb-[100px] xl:pb-[100px]">
          <h1
            className="fade-up text-center mb-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6 2xl:mb-6 text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium"
            style={{
              textAlign: "center",
              fontFamily: '"Aeonik Pro", sans-serif',
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "var(--Primary-Color, #115056)" }}>Solar Can Last 50 Years</span>{" "}<br className="hidden xs:inline sm:inline" />
            <span style={{ color: "var(--Text-Title, #141414)" }}>But Not Without a Little Help</span>
          </h1>
          <strong
            className="fade-up max-w-4xl mx-auto opacity-80 px-4 sm:px-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6]"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              color: "rgba(0,0,0,0.66)",
            }}
          >
            Many solar systems have issues that go unnoticed—until it&apos;s time to sell or transfer. Sprk Certified Pros help uncover and resolve solar problems before they cost you time, money, or a buyer.
          </strong>

          <div className="slide-up-cards bg-white flex flex-col justify-center items-center sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-[22px] items-stretch pb-6 sm:pb-8 md:pb-10 pt-0 px-[20px] sm:px-[25px] md:px-[30px] w-full mt-[30px] sm:mt-[30px] md:mt-[30px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] ">
              <div className="flex flex-col md:flex-row gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
                <div className="w-full ">
                  <ButtonsType type={9} label="Find a Certified Inspector" isShowArrow={false} />
                </div>
                <div className="w-full ">
                  <ButtonsType type={10} label="Find a Certified Solar Company" isShowArrow={false} />
                </div>
              </div>
            </div>

        </div>
      </section>

      {/* Section 2 - Solar Equipment Problems */}
      <section className="section-2 box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#000] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] text-center px-4 sm:px-0 font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: '#000',
                }}
              >
                Solar Equipment Problems
              </h2>
            </div>
          </div>

          <div className="card-flip bg-white h-auto md:h-auto lg:h-[480px] xl:h-[500px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="content-stretch flex flex-col lg:flex-row items-center justify-start min-w-inherit overflow-clip relative size-full">
              <div className="image-slide-left bg-gray-50 box-border content-stretch flex h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] items-center justify-center overflow-clip relative shrink-0 w-full lg:w-1/2 min-w-[350px]">
                <img
                  src="/indentify-solar-problems/section 1/image1.svg"
                  alt="Solar equipment problems illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="testimonial-content bg-white box-border content-stretch flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[35px] xl:gap-[35px] 2xl:gap-[35px] items-start justify-start p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] relative shrink-0 w-full lg:w-1/2 min-w-[350px] h-auto lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <h6
                    className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#000] text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                      color: '#000',
                    }}
                  >
                    Most solar systems are installed and then left unchecked, for decades.
                  </h6>
                </div>
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <p
                    className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      color: '#000',
                    }}
                  >
                    Because solar has no moving parts and operates silently, it&apos;s not always obvious when something goes wrong. But hidden issues can quietly cost homeowners thousands in unnecessary utility bills and cause even bigger problems down the road.
                    <br className="hidden sm:inline" /><br className="hidden sm:inline" />
                    A solar inspection by a Sprk Certified inspector helps ensure your system is working the way it should. And if it&apos;s not, it brings clarity to best and lowest cost repairs to get your system performing optimally.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
      </section>

      <section className="section-3 box-border content-stretch flex flex-col lg:flex-row items-start justify-center gap-4 sm:gap-6 lg:gap-10 xl:gap-[50px] px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 md:py-16 lg:py-20 xl:py-[100px] max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-[30px] items-center lg:items-start justify-start w-full lg:w-[612px] pt-[50px] sm:pt-[80px] lg:pt-[150px] sticky lg:top-0">
          <h2
            className="text-reveal text-center lg:text-left text-[#141414] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
            style={{ fontFamily: '"Aeonik Pro", sans-serif', fontWeight: 500 }}
          >
            11 Common Solar Problems
          </h2>
          <p
            className="fade-up max-w-[612px] text-center lg:text-left text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] opacity-80"
            style={{ fontFamily: 'Inter', fontWeight: 400, color: 'rgba(0,0,0,0.66)' }}
          >
            Sprk has identified the most frequent and disruptive issues found in real-world solar inspections:
          </p>
        </div>

        <div className="xl:basis-0 xl:content-stretch flex grow items-start justify-start min-h-px min-w-px w-full">
          <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[30px] items-center justify-start w-full pt-[50px] sm:pt-[80px] lg:pt-[150px]">
            {[
              { src: '/indentify-solar-problems/section 3/problem1.svg', num: '01', title: 'Solar Under Producing Energy' },
              { src: '/indentify-solar-problems/section 3/problem2.svg', num: '02', title: 'Solar Breakers Installed Incorrectly' },
              { src: '/indentify-solar-problems/section 3/problem3.svg', num: '03', title: 'Missing Labels on Solar Conduit & Solar Breaker' },
              { src: '/indentify-solar-problems/section 3/problem4.svg', num: '04', title: 'Rooftop Fire Code Violations' },
              { src: '/indentify-solar-problems/section 3/problem5.svg', num: '05', title: 'Trees Shading Solar Panels' },
              { src: '/indentify-solar-problems/section 3/problem6.svg', num: '06', title: 'Loose Solar Panel Wires Under Panels' },
              { src: '/indentify-solar-problems/section 3/problem7.svg', num: '07', title: 'Improper Roof Penetrations' },
              { src: '/indentify-solar-problems/section 3/problem8.svg', num: '08', title: 'Debris Buildup on Solar Panels' },
              { src: '/indentify-solar-problems/section 3/problem9.svg', num: '09', title: 'Pest Activity (Birds, Rodents, Nesting) Under Panels' },
              { src: '/indentify-solar-problems/section 3/problem10.svg', num: '10', title: 'Solar Panels Not Secured Properly' },
              { src: '/indentify-solar-problems/section 3/problem11.svg', num: '11', title: 'Broken or Damaged Solar Panels' },
            ].map((item) => (
              <div key={item.num} className="slide-up-cards bg-white relative rounded-[10px] w-full max-w-[880px]">
                <div className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="overflow-hidden rounded-[10px] w-full">
                  <img src={item.src} alt={item.title} className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[300px] object-cover" />
                </div>
                <div className="box-border content-stretch flex gap-4 sm:gap-5 items-center justify-start px-4 py-4 sm:py-6 md:py-8 lg:py-10 rounded-[10px] w-full">
                  <div className="box-border content-stretch flex items-center justify-center px-2.5 py-[5px] relative rounded-[5px] shrink-0">
                    <div className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                    <div className="leading-[0] not-italic text-[#141414] text-[32px]" style={{ fontFamily: '"Aeonik Pro", sans-serif', fontWeight: 500 }}>
                      <h5 className="leading-[1.1]">{item.num}</h5>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px">
                    <div className="leading-[0] not-italic text-[#141414] text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px]" style={{ fontFamily: '"Aeonik Pro", sans-serif', fontWeight: 500 }}>
                      <h5 className="leading-[1.1]">{item.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="box-border content-stretch flex items-start justify-center pt-[10px] px-[10px] w-full max-w-[880px]">
              <p className="text-center text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] text-[rgba(0,0,0,0.66)]" style={{ fontFamily: '"Aeonik Pro", sans-serif', fontWeight: 500 }}>
                These problems may seem small, but together they can cost a homeowner thousands—or cause a buyer to walk away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Unresolved Issues */}
      <section className="section-3 bg-[#115056] box-border content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-[100px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[100px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[94px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
              <h2
                className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-white text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] text-center mb-3 sm:mb-3 md:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                  color: '#fff',
                }}
              >
                Unresolved issues can lead to:
              </h2>
            </div>
          </div>
        </div>
        <div className="content-start flex flex-wrap gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 items-start justify-start relative shrink-0 w-full">
          {/* Card 1: Safety risks and roof damage */}
          <div className="report-card bg-white min-h-[400px] w-full lg:w-[56%] relative rounded-[10px] shrink-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="lg:h-[150px] bg-gray-50 box-border content-stretch flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 items-start justify-start p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <h5
                    className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 text-[#000] text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                      color: '#000',
                    }}
                  >
                    Safety risks and roof damage
                  </h5>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                <img
                  src="/indentify-solar-problems/section 2/safety-risk.svg"
                  alt="Safety risks and roof damage"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Card 2: Damaged equipment */}
          <div className="report-card bg-white min-h-[400px] w-full lg:w-[40%]   relative rounded-[10px] shrink-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="lg:h-[150px]  bg-gray-50 box-border content-stretch flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 items-start justify-start p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <h5
                    className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 text-[#000] text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                      color: '#000',
                    }}
                  >
                    Damaged equipment from lack of maintenance
                  </h5>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                <img
                  src="/indentify-solar-problems/section 2/damage.svg"
                  alt="Damaged equipment from lack of maintenance"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Card 3: Paying unnecessary bills */}
          <div className="report-card bg-white min-h-[400px] w-full  lg:w-[40%] relative rounded-[10px] shrink-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className="lg:h-[150px] bg-gray-50 box-border content-stretch flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 items-start justify-start p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <h5
                    className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 text-[#000] text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                      color: '#000',
                    }}
                  >
                    Paying unnecessary utility bills
                  </h5>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                <img
                  src="/indentify-solar-problems/section 2/paying.svg"
                  alt="Paying unnecessary utility bills"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Card 4: Buyer hesitation */}
          <div className="report-card bg-white min-h-[400px] w-full lg:w-[56%]  relative rounded-[10px] shrink-0 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="content-stretch flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
              <div className=" lg:h-[150px] bg-gray-50 box-border content-stretch flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 items-start justify-start p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <h5
                    className="basis-0 grow min-h-[66px] min-w-px not-italic relative shrink-0 text-[#000] text-[32px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                      color: '#000',
                    }}
                  >
                    Buyer hesitation or lost equity
                  </h5>
                </div>
              </div>
              <div className="box-border content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="absolute border-b border-[#a5dcdf] inset-x-0 top-0 pointer-events-none"></div>
                <img
                  src="/indentify-solar-problems/section 2/buyer.svg"
                  alt="Buyer hesitation or lost equity"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
      </section>

      <section className="section-3">
        {/* HowItWorksSection */}
      <HowItWorksSection
        title="The Sprk Solution"
        subtitle="Sprk helps you identify, document, and resolve solar issues with clarity and confidence."
        step1={{
          icon: "/indentify-solar-problems/section 4/oder.svg",
          label: "Order a Solar Inspection from a Sprk Certified Inspector",
          description: "A Sprk Certified Home Inspector will evaluate your system's health, safety, and performance—just like they would your roof or electrical panel.",
          button: (
            <ButtonsType type={2} label="Find a Certified Solar Inspector" isShowArrow={true} />
          )
        }}
        step2={{
          icon: "/indentify-solar-problems/section 4/review.svg",
          label: "Review Your Solar Inspection Report",
          description: "• Measured solar energy output\n• Estimated useful remaining life\n• Identification of safety or installation problems\n• Photo documentation of any issues\n• Clear recommendations for resolution",
          button: (
            <ButtonsType type={6} label="Find a Certified Solar Inspector" isShowArrow={true} />
          )
        }}
        step3={{
          icon: "/indentify-solar-problems/section 4/hire.svg",
          label: "Hire a Certified Solar Professional",
          description: "If repairs or upgrades are needed, Sprk can help you connect with a Certified Solar Pro to address the issues and properly document the needed repairs to ensure your solar achieves its full potential.",
          button: (
            <ButtonsType type={6} label="Find a Certified Solar Inspector" isShowArrow={true} />
          )
        }}
      />

      </section>
      {/* Section 4 - Who Might Want Solar Inspection */}
      <section className="section-4 bg-[#115056] box-border content-stretch flex flex-col gap-6 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start pb-10 sm:pb-16 lg:pb-20 xl:pb-[100px] pt-10 sm:pt-16 lg:pt-20 xl:pt-[100px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[94px] relative size-full  ">
        <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 max-w-[1440px]">
          <div className="card-flip bg-white h-auto md:h-auto lg:h-[480px] xl:h-[500px] min-h-[400px] w-full relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out">
            <div className="content-stretch flex flex-col lg:flex-row items-center justify-start min-w-inherit overflow-clip relative size-full">
              <div className="image-slide-left bg-gray-50 box-border content-stretch flex h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] items-center justify-center overflow-clip relative shrink-0 w-full lg:w-1/2 min-w-[350px]">
                <img
                  src="/indentify-solar-problems/section 5/whomight.svg"
                  alt="Who might want a solar inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="testimonial-content bg-white box-border content-stretch flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[35px] xl:gap-[35px] 2xl:gap-[35px] items-start justify-start p-4 sm:p-5 md:p-6 lg:p-[30px] xl:p-[30px] 2xl:p-[30px] relative shrink-0 w-full lg:w-1/2 min-w-[350px] h-auto md:h-[350px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">
                <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                  <h3
                    className="basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] font-medium break-words whitespace-normal text-start lg:text-left"
                    style={{
                      fontFamily: '"Aeonik Pro", sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    Who Might Want a<br className="hidden xl:inline 2xl:inline" />{" "}Solar Inspection?
                  </h3>
                </div>
                <div className="content-stretch flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-[15px] xl:gap-[15px] 2xl:gap-[15px] items-start justify-start relative shrink-0 w-full">
                  <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <img src="/indentify-solar-problems/section 5/icon.svg" alt="Check" className="w-full h-full" />
                    </div>
                    <p className="flex-1 font-normal leading-[120%] mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-['Inter'] text-[#141414] break-words whitespace-normal">
                      <span className="font-semibold">Solar Homeowners</span> experiencing high utility bills, low energy output, or preparing to sell
                    </p>
                  </div>
                  <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <img src="/indentify-solar-problems/section 5/icon.svg" alt="Check" className="w-full h-full" />
                    </div>
                    <p className="flex-1 font-normal leading-[120%] mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-['Inter'] text-[#141414] break-words whitespace-normal">
                      <span className="font-semibold">Solar Home Buyers</span> who want to confirm system performance, longevity, and condition
                    </p>
                  </div>
                  <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <img src="/indentify-solar-problems/section 5/icon.svg" alt="Check" className="w-full h-full" />
                    </div>
                    <p className="flex-1 font-normal leading-[120%] mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-['Inter'] text-[#141414] break-words whitespace-normal">
                      <span className="font-semibold">Real Estate Agents</span> managing transactions involving solar-powered homes
                    </p>
                  </div>
                  <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <img src="/indentify-solar-problems/section 5/icon.svg" alt="Check" className="w-full h-full" />
                    </div>
                    <p className="flex-1 font-normal leading-[120%] mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-['Inter'] text-[#141414] break-words whitespace-normal">
                      <span className="font-semibold">Home Inspectors</span> looking to offer solar inspections as a value-add service
                    </p>
                  </div>
                  <div className="w-full flex items-start justify-start gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px]">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center">
                      <img src="/indentify-solar-problems/section 5/icon.svg" alt="Check" className="w-full h-full" />
                    </div>
                    <p className="flex-1 font-normal leading-[120%] mb-2 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] font-['Inter'] text-[#141414] break-words whitespace-normal">
                      <span className="font-semibold">Solar Companies</span> that want to validate installation quality or confirm repairs for customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
      </section>

      {/* Section 5 - What to Do Next */}
      <section className="section-5 box-border content-stretch flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20 xl:py-[100px] relative size-full max-w-[1440px] mx-auto">
        <div className="content-stretch flex flex-col gap-8 sm:gap-10 lg:gap-12 xl:gap-[50px] items-center justify-start relative shrink-0 w-full max-w-[1248px]">
          <div className="content-stretch flex flex-col gap-[30px] items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <h2
                className="text-reveal basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] sm:leading-[110%] md:leading-[110%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%] text-center px-4 sm:px-0 font-medium"
                style={{
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontWeight: 500,
                }}
              >
                What to Do Next
              </h2>
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
              <p
                className="bounce-in basis-0 grow min-h-px min-w-px not-italic relative shrink-0 text-center px-4 sm:px-0 text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[1.6] max-w-4xl"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  color: "rgba(0,0,0,0.66)",
                }}
              >
                If you have solar or are working with a solar-powered home, the best time to<br />find problems is before they disrupt your deal.
              </p>
            </div>
          </div>

          <div className="map-zoom w-full flex flex-col items-start justify-start">
            <div className="w-full rounded-[10px] overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] hover:scale-105 transition-all duration-500 ease-in-out">
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
    </div>
  );
}
