'use client';

import ScrollToTop from '@/components/ScrollToTop';
import ScrollAnimations from '@/components/ScrollAnimations';
import ReportOverview from '@/components/reports/ReportOverview';
import WhatThisReport from '@/components/reports/WhatThisReport';
import WhyThisReportMatters from '@/components/reports/WhyThisReportMatters';
import HowToGetThisReport from '@/components/reports/HowToGetThisReport';
import AnalyzeThisReport from '@/components/reports/AnalyzeThisReport';
import AboutReport from '@/components/reports/AboutReport';
import FindReport from '@/components/reports/FindReport';

export default function SolarListingReport() {
    return (
        <>
            <ScrollAnimations />
            <section className="section-1 w-full flex flex-col gap-5 lg:gap-20 items-center justify-start pb-[50px] lg:pb-[100px] pt-[75px] lg:pt-[150px] px-4 lg:px-24">
                <div className="fade-up w-full flex flex-col items-start justify-start">
                    <header className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
                        <div className="text-reveal w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start px-2.5 py-0">
                            {/* Title */}
                            <h1 className="fade-up w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] mb-4 lg:mb-0">
                                <span className="text-reveal text-[#115056]">Sprk Solar Listing</span>
                                <span className="text-reveal text-[#141414]"> Report</span>
                            </h1>

                            {/* Subtitle and Description */}
                            <div className="text-reveal w-full flex items-center justify-center px-2.5 py-0">
                                <div className="w-full max-w-4xl text-center">
                                    <p className="text-reveal text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-semibold font-['Inter'] text-[rgba(0,0,0,0.66)] mb-4">
                                        The Key to Selling a Solar Home.
                                    </p>
                                    <p className="text-reveal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] lg:leading-[1.6] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                        This interactive report is built to help agents and homeowners showcase the benefits of a solar home by clearly presenting solar ownership, savings, system details, and transfer guidance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="slide-up-cards w-full flex flex-col sm:flex-row gap-[15px] items-center justify-center">
                            <button className="slide-up-cards button-ripple w-full sm:w-auto bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px] hover:bg-[#0d3e42] transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu">
                                <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-white whitespace-nowrap relative z-10">
                                    Get This Report
                                </span>
                            </button>

                            <button className="slide-up-cards button-ripple w-full sm:w-auto border border-[#115056] border-solid flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px] hover:bg-[#115056] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform-gpu">
                                <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#115056] hover:text-white whitespace-nowrap transition-colors duration-300 relative z-10">
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
                    title="What This Report Is"
                    content={{
                        paragraphs: [
                            {
                                text: "The Sprk Solar Listing Report turns a home's solar and energy-efficient features into a clear, marketable advantage.",
                                highlightedWords: [
                                    { word: "Sprk Solar Listing Report", className: "font-medium" }
                                ]
                            },
                            {
                                text: "It compiles verified data about ownership, savings, and system details into a visually engaging, easy-to-share format that buyers, agents, appraisers, and lenders can understand at a glance."
                            },
                            {
                                text: "It's designed for use during the listing and marketing stage of a solar home sale — making it easy to position the solar system as a premium feature that adds tangible value.",
                                highlightedWords: [
                                    { word: "listing and marketing stage", className: "font-medium" }
                                ]
                            }
                        ]
                    }}
                    imageSrc="/solar-listing-report-page/section 3/image1.svg"
                    imageAlt="Solar Listing Report Preview"
                />
            </section>
            <section className="section-4">
                <WhyThisReportMatters
                    title="Why This Report Matters in<br />Real Estate"
                    imageSrc="/solar-listing-report-page/section 4/image1.svg"
                    imageAlt="Real Estate Summary Report Preview"
                    bulletPoints={[
                        {
                            title: "Builds buyer confidence",
                            description: "by clearly showing savings history and projected benefits."
                        },
                        {
                            title: "Supports pricing strategy",
                            description: "by demonstrating the financial impact of solar and energy features."
                        },
                        {
                            title: "Speeds up closings",
                            description: "by including transfer instructions, ownership details, and documentation links."
                        },
                        {
                            title: "Strengthens appraisals",
                            description: "by providing verified system and savings data."
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
                            description: "Sprk Certified Pros - Real Estate Agents, Home Inspectors, and Solar Professionals."
                        },
                        {
                            iconSrc: "/solar-listing-report-page/section 5/image2.svg",
                            iconAlt: "How it's ordered icon",
                            title: "How it's ordered:",
                            description: "Through your chosen certified pro or directly via Sprk (if applicable)."
                        },
                        {
                            iconSrc: "/solar-listing-report-page/section 5/image3.svg",
                            iconAlt: "Time to get report icon",
                            title: "Time to get report:",
                            description: "Sprk generates Solar Listing Reports in 24 hours or less after the Energy Assessment is submitted."
                        },
                        {
                            iconSrc: "/solar-listing-report-page/section 5/image4.svg",
                            iconAlt: "Requirements icon",
                            title: "Requirements:",
                            description: "Any solar loan, lease, or installation documents, plus a completed Sprk Energy Assessment."
                        }
                    ]}
                />
            </section>
            <section className="section-6">
                <AnalyzeThisReport
                    title="What's Analyzed in This Report"
                    description="The Sprk Solar Listing Report compiles verified data to clearly communicate the financial and efficiency benefits of a solar-powered home."
                    highlightedWord="Sprk Solar Listing Report"
                    cards={[
                        {
                            iconSrc: "/solar-listing-report-page/section 6/data-source.svg",
                            iconAlt: "Data Sources Icon",
                            title: "Data Sources Include:",
                            items: [
                                "Local utility rates and tariff schedules",
                                "Data collected by trained Sprk Certified Professionals",
                                "Manufacturer specifications for installed equipment",
                                "National Renewable Energy Lab (NREL) PVWatts solar production modeling"
                            ]
                        },
                        {
                            iconSrc: "/solar-listing-report-page/section 6/calculations.svg",
                            iconAlt: "Calculations Icon",
                            title: "Calculations Include:",
                            items: [
                                "Historic and projected solar savings",
                                "Potential home price impact based on energy features and solar value",
                                "Overall energy efficiency rating and breakdown of contributing features"
                            ]
                        }
                    ]}
                />
            </section>
            <section className="section-7">
                <AboutReport
                    title="What's in the Report"
                    backgroundColor="#115056"
                    titleColor="white"
                    content={{
                        title: "A. Green Home Rating\n(Page 1)",
                        imageSrc: "/solar-listing-report-page/section 7/image1.svg",
                        imageAlt: "Green Home Rating Report Preview",
                        sections: [
                            {
                                title: "What It Shows:",
                                items: [
                                    "Overall home energy efficiency rating (percentage)",
                                    "Estimated monthly savings and 10-year projected savings",
                                    "QR code linking to the online version of the report"
                                ]
                            },
                            {
                                title: "Why It Matters:",
                                items: []
                            }
                        ],
                        description: "Provides buyers with an immediate snapshot of the home's energy performance and potential cost savings, setting the tone for the value of the solar system and green features."
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
            </section>

            <section className="section-8">
                <FindReport
                    title="Sample Report & Next Steps"
                    imageSrc="/solar-listing-report-page/section 8/image1.svg"
                    imageAlt="Sample Solar Listing Report Preview"
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
