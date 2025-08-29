import ScrollToTop from '@/components/ScrollToTop';

export default function SolarListingReport() {
  return (
    <>
      <section className="w-full flex flex-col gap-5 lg:gap-20 items-center justify-start pb-[50px] lg:pb-[100px] pt-[75px] lg:pt-[150px] px-4 lg:px-24">
        <div className="w-full flex flex-col items-start justify-start">
          <header className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
            <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start px-2.5 py-0">
              {/* Title */}
              <h1 className="w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] mb-4 lg:mb-0">
                <span className="text-[#115056]">Sprk Solar Listing</span>
                <span className="text-[#141414]"> Report</span>
              </h1>
              
              {/* Subtitle and Description */}
              <div className="w-full flex items-center justify-center px-2.5 py-0">
                <div className="w-full max-w-4xl text-center">
                  <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-semibold font-['Inter'] text-[rgba(0,0,0,0.66)] mb-4">
                    The Key to Selling a Solar Home.
                  </p>
                  <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] lg:leading-[1.6] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                    This interactive report is built to help agents and homeowners showcase the benefits of a solar home by clearly presenting solar ownership, savings, system details, and transfer guidance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-[15px] items-center justify-center">
              <button className="w-full sm:w-auto bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px]">
                <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-white whitespace-nowrap">
                  Get This Report
                </span>
              </button>
              
              <button className="w-full sm:w-auto border border-[#115056] border-solid flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px]">
                <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#115056] whitespace-nowrap">
                  See a Sample Report
                </span>
              </button>
            </div>
          </header>
        </div>
      </section>
      <section className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start px-4 lg:px-24 py-[50px] lg:py-[100px]">
        <div className="w-full max-w-[1248px] flex flex-col gap-[25px] lg:gap-[50px] items-start justify-start">
          <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
            {/* Video/Image Section */}
            <div className="w-full bg-[#115056] flex flex-col items-center justify-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[500px] relative">
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="/solar-listing-report-page/section 2/samplereport.svg" 
                  alt="Sample Report Preview" 
                  className="w-full h-full object-contain max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-full p-4 sm:p-6 md:p-8 lg:p-[50px]">
              {/* Title */}
              <div className="w-full flex items-center justify-center pb-6 lg:pb-[50px]">
                <h2 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center">
                  Sample Report
                </h2>
              </div>
              
              {/* Buttons */}
              <div className="w-full flex flex-col sm:flex-row gap-2.5 items-stretch">
                <button className="flex-1 bg-[#115056] flex items-center justify-center gap-2 p-[5px] rounded-[5px] min-h-[44px] group">
                  <div className="flex-1 flex items-center justify-center px-[15px] py-[5px]">
                    <span className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-normal font-['Inter'] text-white text-center">
                      Download Sample Report
                    </span>
                    <div className="ml-2 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </button>
                
                <button className="flex-1 bg-white border border-[#115056] flex items-center justify-center gap-2 p-[5px] rounded-[5px] min-h-[44px] group">
                  <div className="flex-1 flex items-center justify-center px-[15px] py-[5px]">
                    <span className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-normal font-['Inter'] text-[#141414] text-center">
                      Find a Sprk Certified Pro
                    </span>
                    <div className="ml-2 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start px-4 lg:px-24 py-[50px] lg:py-[100px]">
        <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-start justify-start">
          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-start">
            {/* Left Column - Text Content */}
            <div className="w-full lg:flex-1 flex flex-col gap-[15px] lg:gap-[30px] items-start justify-start">
              {/* Title */}
              <div className="w-full flex items-start justify-start">
                <h2 className="text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                  What This Report Is
                </h2>
              </div>
              
              {/* Description */}
              <div className="w-full flex items-start justify-start pt-[8px] lg:pt-[15px]">
                <div className="w-full text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-normal font-['Aeonik_Pro'] text-[rgba(0,0,0,0.66)]">
                  <p className="mb-4">
                    <span>The </span>
                    <span className="font-medium">Sprk Solar Listing Report</span>
                    <span> turns a home's solar and energy-efficient features into a clear, marketable advantage.</span>
                  </p>
                  
                  <p className="mb-4">
                    It compiles verified data about ownership, savings, and system details into a visually engaging, easy-to-share format that buyers, agents, appraisers, and lenders can understand at a glance.
                  </p>
                  
                  <p className="mb-0">
                    <span>It's designed for use during the </span>
                    <span className="font-medium">listing and marketing stage</span>
                    <span> of a solar home sale — making it easy to position the solar system as a premium feature that adds tangible value.</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="w-full lg:flex-1 flex flex-col items-start justify-start">
              <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[10px]  overflow-hidden bg-center bg-contain bg-no-repeat flex items-center justify-center">
                <img 
                  src="/solar-listing-report-page/section 3/image1.svg" 
                  alt="Solar Listing Report Preview" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#115056] flex flex-col gap-10 lg:gap-20 items-center justify-start px-4 lg:px-24 py-[75px] lg:py-[150px]">
        <div className="w-full max-w-[1248px] flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
          <div className="w-full flex items-center justify-center">
            <div className="w-full bg-white rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[400px] lg:min-h-[500px]">
              <div className="w-full flex flex-col lg:flex-row items-stretch justify-center">
                {/* Left Side - Report Preview */}
                <div className="w-full lg:flex-1 bg-gray-50 flex items-start justify-end overflow-hidden min-h-[300px] lg:h-[500px] relative">
                  <div className="w-full h-full flex flex-col items-start justify-start p-4 lg:p-5">
                    <div className="w-full flex-1 rounded-tl-[10px] rounded-tr-[10px] bg-center bg-contain bg-no-repeat flex items-center justify-center">
                      <img 
                        src="/solar-listing-report-page/section 4/image1.svg" 
                        alt="Real Estate Summary Report Preview" 
                        className="w-full h-full object-contain max-w-full max-h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-[rgba(0,0,0,0.2)]"></div>
                </div>
                
                {/* Right Side - Content */}
                <div className="w-full lg:flex-1 bg-white flex flex-col gap-[11px] lg:gap-[22px] items-start justify-start p-6 lg:p-[30px] lg:pb-10 min-h-[300px] lg:h-[500px]">
                  {/* Title */}
                  <div className="w-full flex items-center justify-center">
                    <h2 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center">
                      Why This Report Matters in<br />Real Estate
                    </h2>
                  </div>
                  
                  {/* Bullet Points */}
                  <div className="flex-1 w-full flex items-center justify-center">
                    <div className="w-full text-[16px] sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                      <ul className="space-y-4 lg:space-y-6">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[rgba(0,0,0,0.66)] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <span>
                            <span className="font-semibold">Builds buyer confidence</span>
                            <span> by clearly showing savings history and projected benefits.</span>
                          </span>
                        </li>
                        
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[rgba(0,0,0,0.66)] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <span>
                            <span className="font-semibold">Supports pricing strategy</span>
                            <span> by demonstrating the financial impact of solar and energy features.</span>
                          </span>
                        </li>
                        
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[rgba(0,0,0,0.66)] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <span>
                            <span className="font-semibold">Speeds up closings</span>
                            <span> by including transfer instructions, ownership details, and documentation links.</span>
                          </span>
                        </li>
                        
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-[rgba(0,0,0,0.66)] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <span>
                            <span className="font-semibold">Strengthens appraisals</span>
                            <span> by providing verified system and savings data.</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start pb-[50px] lg:pb-[100px] pt-[25px] lg:pt-[50px] px-4 lg:px-[94px]">
        {/* Title */}
        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start">
            <div className="w-full flex items-start justify-center">
              <h2 className="text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center">
                How to Get This Report
              </h2>
            </div>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="w-full flex flex-wrap gap-6 items-start justify-start">
          {/* Card 1 - Who can generate it */}
          <div className="flex-1 min-w-[280px] lg:min-w-[294px] bg-gray-50 rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[350px] lg:min-h-[400px]">
            <div className="w-full flex flex-col items-center justify-start h-full">
              {/* Header */}
              <div className="w-full bg-white flex flex-col gap-5 items-start justify-start p-[20px] lg:p-[30px]">
                <div className="flex items-center justify-start">
                  <div className="bg-white border border-[rgba(17,80,86,0.15)] rounded-[10px] p-[15px] flex items-center justify-center">
                    <div className="w-[50px] lg:w-[60px] h-[52px] lg:h-[62px] overflow-hidden relative">
                      <img 
                        src="/solar-listing-report-page/section 5/image1.svg" 
                        alt="Who can generate report icon" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start">
                  <h3 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                    Who can generate it:
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 w-full flex items-start justify-center p-[20px] lg:p-[30px]">
                <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                  Sprk Certified Pros - Real Estate Agents, Home Inspectors, and Solar Professionals.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 2 - How it's ordered */}
          <div className="flex-1 min-w-[280px] lg:min-w-[294px] bg-gray-50 rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[350px] lg:min-h-[400px]">
            <div className="w-full flex flex-col items-center justify-start h-full">
              {/* Header */}
              <div className="w-full bg-white flex flex-col gap-5 items-start justify-start p-[20px] lg:p-[30px]">
                <div className="flex items-center justify-start">
                  <div className="bg-white border border-[rgba(17,80,86,0.15)] rounded-[10px] p-[15px] flex items-center justify-center">
                    <div className="w-[50px] lg:w-[60px] h-[52px] lg:h-[62px] overflow-hidden relative">
                      <img 
                        src="/solar-listing-report-page/section 5/image2.svg" 
                        alt="How it's ordered icon" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start">
                  <h3 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                    How it's ordered:
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 w-full flex items-start justify-center p-[20px] lg:p-[30px]">
                <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                  Through your chosen certified pro or directly via Sprk (if applicable).
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Time to get report */}
          <div className="flex-1 min-w-[280px] lg:min-w-[294px] bg-gray-50 rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[350px] lg:min-h-[400px]">
            <div className="w-full flex flex-col items-center justify-start h-full">
              {/* Header */}
              <div className="w-full bg-white flex flex-col gap-5 items-start justify-start p-[20px] lg:p-[30px]">
                <div className="flex items-center justify-start">
                  <div className="bg-white border border-[rgba(17,80,86,0.15)] rounded-[10px] p-[15px] flex items-center justify-center">
                    <div className="w-[50px] lg:w-[60px] h-[52px] lg:h-[62px] overflow-hidden relative">
                      <img 
                        src="/solar-listing-report-page/section 5/image3.svg" 
                        alt="Time to get report icon" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start">
                  <h3 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                    Time to get report:
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 w-full flex items-start justify-center p-[20px] lg:p-[30px]">
                <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                  Sprk generates Solar Listing Reports in 24 hours or less after the Energy Assessment is submitted.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 4 - Requirements */}
          <div className="flex-1 min-w-[280px] lg:min-w-[294px] bg-gray-50 rounded-[10px] border border-[rgba(0,0,0,0.15)] overflow-hidden min-h-[350px] lg:min-h-[400px]">
            <div className="w-full flex flex-col items-center justify-start h-full">
              {/* Header */}
              <div className="w-full bg-white flex flex-col gap-5 items-start justify-start p-[20px] lg:p-[30px]">
                <div className="flex items-center justify-start">
                  <div className="bg-white border border-[rgba(17,80,86,0.15)] rounded-[10px] p-[15px] flex items-center justify-center">
                    <div className="w-[50px] lg:w-[60px] h-[52px] lg:h-[62px] overflow-hidden relative">
                      <img 
                        src="/solar-listing-report-page/section 5/image4.svg" 
                        alt="Requirements icon" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-start justify-start">
                  <h3 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                    Requirements:
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 w-full flex items-start justify-center p-[20px] lg:p-[30px]">
                <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                  Any solar loan, lease, or installation documents, plus a completed Sprk Energy Assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="w-full flex flex-col items-center justify-start">
          <button className="w-full max-w-md bg-[#115056] rounded-[5px] p-[5px] flex items-center justify-center min-h-[44px]">
            <div className="flex-1 flex items-center justify-center px-[15px] py-[5px] gap-2">
              <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Inter'] text-white text-center">
                Find a Sprk Certified Pro
              </span>
              <div className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}
