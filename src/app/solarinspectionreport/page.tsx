'use client';

import ScrollToTop from '@/components/ScrollToTop';
import ReportOverview from '@/components/reports/ReportOverview';
import WhatThisReport from '@/components/reports/WhatThisReport';
import WhyThisReportMatters from '@/components/reports/WhyThisReportMatters';
import HowToGetThisReport from '@/components/reports/HowToGetThisReport';
import AnalyzeThisReport from '@/components/reports/AnalyzeThisReport';
import AboutReport from '@/components/reports/AboutReport';
import FindReport from '@/components/reports/FindReport';

export default function SolarInspectionReport() {
  return (
      <>
          <section className="w-full flex flex-col gap-5 lg:gap-20 items-center justify-start pb-[50px] lg:pb-[100px] pt-[75px] lg:pt-[150px] px-4 lg:px-24">
              <div className="w-full flex flex-col items-start justify-start">
                  <header className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
                      <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start px-2.5 py-0">
                          {/* Title */}
                          <h1 className="w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] mb-4 lg:mb-0">
                              <span className="text-[#115056]">Sprk Solar Inspection </span>
                              <span className="text-[#141414]">Report</span>
                          </h1>

                          {/* Subtitle and Description */}
                          <div className="w-full flex items-center justify-center px-2.5 py-0">
                              <div className="w-full text-center font-['Inter'] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] text-[rgba(0,0,0,0.66)]">
                                  <p className="font-semibold mb-4">
                                      The #1 unbiased, independently generated solar health report.
                                  </p>
                                  <p className="font-normal">
                                      This report is both easy to read and packed with critical details about a solar system's production health, remaining life, and equipment condition. It also includes real estate transaction guidance and solar installer information for home buyers.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Buttons */}
                      <div className="w-full flex flex-col sm:flex-row gap-[15px] items-center justify-center">
                          <button className="w-full sm:w-auto bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px]">
                              <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-white whitespace-nowrap">
                                  See a Sample Report
                              </span>
                          </button>

                          <button className="w-full sm:w-auto border border-[#115056] border-solid flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px]">
                              <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#115056] whitespace-nowrap">
                                  Find a Certified Home Inspector
                              </span>
                          </button>
                      </div>
                  </header>
              </div>
          </section>
          <ReportOverview
              title="Sample Report"
              imageSrc="/solar-listing-report-page/section 2/samplereport.svg"
              imageAlt="Sample Solar Inspection Report Preview"
              primaryButtonText="Download Sample Report"
              secondaryButtonText="Find a Sprk Certified Inspector"
              onPrimaryClick={() => {
                  // Handle download sample report
                  console.log('Download Sample Report clicked');
              }}
              onSecondaryClick={() => {
                  // Handle find certified inspector
                  console.log('Find a Sprk Certified Inspector clicked');
              }}
          />
          <WhatThisReport
              title="About This Report"
              content={{
                  paragraphs: [
                      {
                          text: "The Sprk Solar Inspection Report is the only way to truly identify the condition and health of a solar system. Solar inspections are conducted by trained home inspectors and reviewed and verified for accuracy by Sprk.",
                          highlightedWords: [
                              { word: "Sprk Solar Inspection Report", className: "font-medium" }
                          ]
                      },
                      {
                          text: "It identifies potential safety issues, verifies production performance, and ensures all system components are installed and functioning correctly."
                      },
                      {
                          text: "Ideal for:",
                          highlightedWords: [
                              { word: "Ideal for:", className: "font-medium" }
                          ]
                      },
                      {
                          text: "• Home buyers verifying the functionality of a solar system before purchase",
                          highlightedWords: [
                              { word: "Home buyers", className: "font-medium" }
                          ]
                      },
                      {
                          text: "• Listing agents demonstrating system health before listing for sale",
                          highlightedWords: [
                              { word: "Listing agents", className: "font-medium" }
                          ]
                      },
                      {
                          text: "• Homeowners confirming system health if solar isn't performing as expected or promised",
                          highlightedWords: [
                              { word: "Homeowners", className: "font-medium" }
                          ]
                      },
                      {
                          text: "• Homeowners and contractors verifying that solar was reinstalled correctly after roof work",
                          highlightedWords: [
                              { word: "Homeowners and contractors", className: "font-medium" }
                          ]
                      }
                  ]
              }}
              imageSrc="/solar-inspection-report-page/section 3/image1.svg"
              imageAlt="Solar Inspection Report Preview"
          />
          <WhyThisReportMatters
              title="Why This Report Matters in<br />Real Estate"
              imageSrc="/solar-inspection-report-page/section 4/image1.svg"
              imageAlt="Solar Inspection Certificate Preview"
              bulletPoints={[
                  {
                      title: "Protects buyers",
                      description: "from unexpectedly inheriting underperforming systems"
                  },
                  {
                      title: "Gives sellers documentation",
                      description: "to support market value and build trust"
                  },
                  {
                      title: "Helps buyers",
                      description: "hold lease companies accountable for maintaining system performance"
                  },
                  {
                      title: "Guides buyers",
                      description: "on where to turn for support in the event of system issues"
                  }
              ]}
          />
          <HowToGetThisReport
              title="How to Get This Report"
              ctaButtonText="Find a Sprk Certified Pro"
              onCtaClick={() => {
                  // Handle find certified pro action
                  console.log('Find a Sprk Certified Pro clicked');
              }}
              cards={[
                  {
                      iconSrc: "/solar-inspection-report-page/section 5/image1.svg",
                      iconAlt: "Who can generate report icon",
                      title: "Who can generate it:",
                      description: "Sprk Certified Pros - Home Inspectors and Solar Professionals."
                  },
                  {
                      iconSrc: "/solar-inspection-report-page/section 5/image2.svg",
                      iconAlt: "How it's ordered icon",
                      title: "How it's ordered:",
                      description: "Through your chosen certified pro."
                  },
                  {
                      iconSrc: "/solar-inspection-report-page/section 5/image3.svg",
                      iconAlt: "Time to get report icon",
                      title: "Time to get report:",
                      description: "Typically within 24 hours after inspection is completed."
                  },
                  {
                      iconSrc: "/solar-inspection-report-page/section 5/image4.svg",
                      iconAlt: "Requirements icon",
                      title: "Requirements:",
                      description: "On-site inspection of the solar system by a Sprk Certified Pro."
                  }
              ]}
          />
          <AnalyzeThisReport
              title="What's Analyzed in This Report"
              description="The Sprk Solar Inspection Report compiles both inspection findings and public data to provide a clear, graded evaluation of a solar system's condition, performance, and safety presented in a way that anyone can understand."
              highlightedWord="Sprk Solar Inspection Report"
              cards={[
                  {
                      iconSrc: "/solar-inspection-report-page/section 6/data-source.svg",
                      iconAlt: "Data Sources Icon",
                      title: "Data Sources Include:",
                      items: [
                          "Solar energy production and system condition data collected by a certified Sprk Pro",
                          "Solar system photos collected on-site by a certified Sprk Pro",
                          "Manufacturer specifications for installed equipment",
                          "National Electric Code (NEC) compliance guidelines"
                      ]
                  },
                  {
                      iconSrc: "/solar-inspection-report-page/section 6/calculations.svg",
                      iconAlt: "Calculations Icon",
                      title: "Calculations Include:",
                      items: [
                          "Expected vs. measured solar energy production",
                          "Remaining useful life of panels and inverters",
                          "Impact of any safety or equipment issues discovered"
                      ]
                  }
              ]}
          />
          <AboutReport
              title="Major Sections of the Report"
              backgroundColor="#115056"
              titleColor="white"
              content={{
                  title: "A. Solar System Summary\n(Page 1–2)",
                  imageSrc: "/solar-inspection-report-page/section 7/image1.svg",
                  imageAlt: "Solar System Summary Report Preview",
                  sections: [
                      {
                          title: "What It Shows:",
                          items: [
                              "System size, overall score, and letter grade",
                              "Scores for remaining life, production, storage, and safety/quality"
                          ]
                      },
                      {
                          title: "Why It Matters:",
                          items: []
                      }
                  ],
                  description: "Gives an at-a-glance overview of the system's health for quick decision-making."
              }}
              onPrevious={() => {
                  // Handle previous navigation
                  console.log('Previous report section');
              }}
              onNext={() => {
                  // Handle next navigation
                  console.log('Next report section');
              }}
              showNavigation={true}
          />
          <FindReport
              title="Sample Report & Next Steps"
              imageSrc="/solar-inspection-report-page/section 8/image.svg"
              imageAlt="Sample Solar Inspection Certificate Preview"
              backgroundColor="white"
              imageBackgroundColor="#115056"
              primaryColor="#115056"
              secondaryColor="#0d3d42"
              buttons={[
                  {
                      text: "Download Sample Report",
                      type: "primary",
                      onClick: () => {
                          // Handle download sample report
                          console.log('Download Sample Report clicked');
                      }
                  },
                  {
                      text: "Find a Sprk Certified Pro",
                      type: "secondary",
                      onClick: () => {
                          // Handle find certified pro
                          console.log('Find a Sprk Certified Pro clicked');
                      }
                  }
              ]}
          />
          <ScrollToTop />
      </>
  );
}
