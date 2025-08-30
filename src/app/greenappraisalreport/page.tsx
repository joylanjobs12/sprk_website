'use client';

import ScrollToTop from '@/components/ScrollToTop';
import ReportOverview from '@/components/reports/ReportOverview';
import WhatThisReport from '@/components/reports/WhatThisReport';
import WhyThisReportMatters from '@/components/reports/WhyThisReportMatters';
import HowToGetThisReport from '@/components/reports/HowToGetThisReport';
import AnalyzeThisReport from '@/components/reports/AnalyzeThisReport';
import AboutReport from '@/components/reports/AboutReport';
import FindReport from '@/components/reports/FindReport';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function GreenAppraisalReport() {
    return (
        <>
            <ScrollAnimations />

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
            <section className="section-2">
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
            </section>
            <section className="section-3">
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
                    imageSrc="/green-appraisal-report/section 3/image1.svg"
                    imageAlt="Green Appraise Report Preview"
                />
            </section>
            <section className="section-4">
                <WhyThisReportMatters
                    title="Why This Report Matters in Real Estate"
                    imageSrc="/green-appraisal-report/section 4/image1.svg"
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
            </section>
            <section className="section-5">
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
            </section>
            <section className="section-6">
                <AnalyzeThisReport
                    title="What's Analyzed in This Report"
                    description="The Green Appraisal Report uses home-specific data, public records, and trusted modeling tools to document the solar and green home features that impact value."
                    highlightedWord="Green Appraisal Report"
                    cards={[
                        {
                            iconSrc: "/solar-listing-report-page/section 6/image1.svg",
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
                            iconSrc: "/solar-listing-report-page/section 6/image2.svg",
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
            </section>
            <section className="section-7">
                <AboutReport
                    title="Major Sections of the Report"
                    backgroundColor="#115056"
                    titleColor="white"
                    slideContent={[
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/green-appraisal-report/section 7/slide 1/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        A. Home Energy Audit<br></br> 
                                            (Page 1)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Energy consumption, monthly and annual costs, estimated monthly savings</li>
                                            <li className="ml-[27px]">Property profile details (square footage, year built, features)
                                            </li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Provides baseline data for calculating energy-related value adjustments.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/green-appraisal-report/section 7/slide 2/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        B. Green Home Features Defined 
                                            (Page 2)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Classification of the home as a “Green Home” per Sprk criteria</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Confirms the property qualifies for green valuation consideration.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/green-appraisal-report/section 7/slide 3/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        C. Solar System Ownership and UCC-1 Information
                                             (Page 3)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Ownership type (owned, financed, PPA, lease) and UCC-1 status</li>
                                            <li className="ml-[27px]">Ownership entity and system owner’s name</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Determines transferability and helps lenders confirm collateral rights.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/green-appraisal-report/section 7/slide 3/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        D. Photovoltaic Solar System Details (Page 4)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">
                                            System size, inverter type, production capacity, installation year, warranty, and installation cost</li>
                                            <li className="ml-[27px]">Annual kWh production and value of energy produced</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Provides verified production and value data for appraisers and lenders.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/green-appraisal-report/section 7/slide 5/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        E. All Green Home Feature Details (Page 5)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Inventory of energy-efficient features with presence/type, savings estimates, and installation costs</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Allows appraisers to calculate the contributory value of each feature in the valuation process.</p>
                                    </div>
                                </div>
                            )
                        },
                     
                    ]}
                    onPrevious={() => {
                        console.log('Previous report section');
                    }}
                    onNext={() => {
                        console.log('Next report section');
                    }}
                    showNavigation={true}
                />
            </section>
            <section className="section-8">
                <FindReport
                    title="Sample Report & Next Steps"
                    imageSrc="/green-appraisal-report/section 8/image1.svg"
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
            </section>
            <ScrollToTop />
        </>
    );
}
