'use client';

import ScrollToTop from '@/components/ScrollToTop';
import ReportOverview from '@/components/reports/ReportOverview';
import WhatThisReport from '@/components/reports/WhatThisReport';
import WhyThisReportMatters from '@/components/reports/WhyThisReportMatters';
import HowToGetThisReport from '@/components/reports/HowToGetThisReport';
import AnalyzeThisReport from '@/components/reports/AnalyzeThisReport';
import AboutReport from '@/components/reports/AboutReport';
import FindReport from '@/components/reports/FindReport';

export default function GreenAppraiseReport() {
  return (
      <>
          <section className="w-full flex flex-col gap-5 lg:gap-20 items-center justify-start pb-[50px] lg:pb-[100px] pt-[75px] lg:pt-[150px] px-4 lg:px-24">
              <div className="w-full flex flex-col items-start justify-start">
                  <header className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
                      <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start px-2.5 py-0">
                          {/* Title */}
                          <h1 className="w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] mb-4 lg:mb-0">
                              <span className="text-[#115056]">Sprk Green Appraise</span>
                              <span className="text-[#141414]"> Report</span>
                          </h1>

                          {/* Subtitle and Description */}
                          <div className="w-full flex items-center justify-center px-2.5 py-0">
                              <div className="w-full max-w-4xl text-center">
                                  <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-semibold font-['Inter'] text-[rgba(0,0,0,0.66)] mb-4">
                                      The Key to Appraising a Green Home.
                                  </p>
                                  <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] lg:leading-[1.6] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                      This comprehensive report is built to help appraisers accurately value green homes by providing verified data on solar systems, energy efficiency features, and their financial impact on property value.
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
          <ReportOverview
              title="Sample Report"
              imageSrc="/solar-listing-report-page/section 2/samplereport.svg"
              imageAlt="Sample Report Preview"
              primaryButtonText="Download Sample Report"
              secondaryButtonText="Find a Sprk Certified Pro"
              onPrimaryClick={() => {
                  // Handle download sample report
                  console.log('Download Sample Report clicked');
              }}
              onSecondaryClick={() => {
                  // Handle find certified pro
                  console.log('Find a Sprk Certified Pro clicked');
              }}
          />
          <WhatThisReport
              title="About This Report"
              content={{
                  paragraphs: [
                      {
                          text: "The Sprk Green Appraisal Report provides the verified solar and green home data needed to support accurate property valuations.",
                          highlightedWords: [
                              { word: "Sprk Green Appraisal Report", className: "font-medium" }
                          ]
                      },
                      {
                          text: "When generated by a Sprk Certified Appraiser, it is accompanied by the Sprk Appraisal Work File, which includes the additional data, calculations, and documentation required for USPAP-compliant appraisals."
                      },
                      {
                          text: "When generated by a Sprk Certified Agent, it includes the report itself for use in marketing, pricing strategy, and supporting appraisers."
                      }
                  ],
                  bulletPoints: [
                      {
                          text: "Appraisers needing verified solar and green feature data for property valuations",
                          highlightedWords: [
                              { word: "Appraisers", className: "font-medium" }
                          ]
                      },
                      {
                          text: "Real estate agents preparing to market and price solar homes",
                          highlightedWords: [
                              { word: "Real estate agents", className: "font-medium" }
                          ]
                      },
                      {
                          text: "Lenders requiring documentation to support valuation of green home features",
                          highlightedWords: [
                              { word: "Lenders", className: "font-medium" }
                          ]
                      }
                  ]
              }}
              imageSrc="/green-appraiser-report.svg/section 3/image1.svg"
              imageAlt="Green Appraise Report Preview"
          />
          <WhyThisReportMatters
              title="Why This Report Matters in<br />Real Estate"
              imageSrc="/green-appraiser-report.svg/section 4/image1.svg"
              imageAlt="Property Appraisal Summary Report Preview"
              bulletPoints={[
                  {
                      title: "Ensures appraisers have verified system data",
                      description: "to properly include solar in the valuation"
                  },
                  {
                      title: "Helps agents price homes accurately",
                      description: "by understanding the contributory value of solar and green features"
                  },
                  {
                      title: "Reduces valuation disputes",
                      description: "by giving lenders and buyers access to standardized, trusted data"
                  },
                  {
                      title: "Supports transparent transactions",
                      description: "with complete documentation of ownership, specs, and performance"
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
                      iconSrc: "/solar-listing-report-page/section 5/image1.svg",
                      iconAlt: "Who can generate report icon",
                      title: "Who can generate it:",
                      description: "Sprk Certified Appraisers and Sprk Certified Real Estate Agents."
                  },
                  {
                      iconSrc: "/solar-listing-report-page/section 5/image2.svg",
                      iconAlt: "How it's ordered icon",
                      title: "How it's ordered:",
                      description: "Through your chosen certified pro."
                  },
                  {
                      iconSrc: "/solar-listing-report-page/section 5/image3.svg",
                      iconAlt: "Time to get report icon",
                      title: "Time to get report:",
                      description: "Typically within 24–48 hours after the Energy Assessment is submitted."
                  },
                  {
                      iconSrc: "/solar-listing-report-page/section 5/image4.svg",
                      iconAlt: "Requirements icon",
                      title: "Requirements:",
                      description: "Completed Sprk Energy Assessment, solar documentation, and green feature details."
                  }
              ]}
          />
          <AnalyzeThisReport
              title="What's Analyzed in This Report"
              description="The Green Appraisal Report uses home-specific data, public records, and trusted modeling tools to document the solar and green home features that impact value."
              highlightedWord="Green Appraisal Report"
              cards={[
                  {
                      iconSrc: "/solar-listing-report-page/section 6/data-source.svg",
                      iconAlt: "Data Sources Icon",
                      title: "Data Sources Include:",
                      items: [
                          "Energy use and green feature data from the Sprk Energy Assessment",
                          "Manufacturer specifications for installed solar and green features",
                          "Local utility rates and tariffs",
                          "National Renewable Energy Lab (NREL) PVWatts solar production modeling"
                      ]
                  },
                  {
                      iconSrc: "/solar-listing-report-page/section 6/calculations.svg",
                      iconAlt: "Calculations Icon",
                      title: "Calculations Include:",
                      items: [
                          "Solar system ownership and UCC-1 filing information",
                          "Solar production capacity and annual energy value",
                          "Installation cost and replacement value",
                          "Inventory of all green home features with ratings, savings estimates, and installation costs"
                      ]
                  }
              ]}
          />
          <AboutReport
              title="Major Sections of the Report"
              backgroundColor="#115056"
              titleColor="white"
              content={{
                  title: "A. Home Energy Audit\n(Page 1)",
                  imageSrc: "/green-appraiser-report.svg/section 7/image1.svg",
                  imageAlt: "Home Energy Audit Report Preview",
                  sections: [
                      {
                          title: "What It Shows:",
                          items: [
                              "Energy consumption, monthly and annual costs, estimated monthly savings",
                              "Property profile details (square footage, year built, features)"
                          ]
                      },
                      {
                          title: "Why It Matters:",
                          items: []
                      }
                  ],
                  description: "Provides baseline data for calculating energy-related value adjustments."
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
              imageSrc="/green-appraiser-report.svg/section 8/image1.svg"
              imageAlt="Sample Green Appraisal Report Preview"
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
