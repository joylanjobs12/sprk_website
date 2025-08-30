'use client';

import ScrollToTop from '@/components/ScrollToTop';
import ReportOverview from '@/components/reports/ReportOverview';
import WhatThisReport from '@/components/reports/WhatThisReport';
import WhyThisReportMatters from '@/components/reports/WhyThisReportMatters';
import HowToGetThisReport from '@/components/reports/HowToGetThisReport';
import AnalyzeThisReport from '@/components/reports/AnalyzeThisReport';
import AboutReport from '@/components/reports/AboutReport';
import FindReport from '@/components/reports/FindReport';
import ScrollAnimations from "@/components/ScrollAnimations";

export default function HomeEnergyReport() {
    return (
        <>
      <ScrollAnimations />

            <section className="w-full flex flex-col gap-5 lg:gap-20 items-center justify-start pb-[50px] lg:pb-[100px] pt-[75px] lg:pt-[150px] px-4 lg:px-24">
                <div className="w-full flex flex-col items-start justify-start">
                    <header className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
                        <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start px-2.5 py-0">
                            {/* Title */}
                            <h1 className="w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] mb-4 lg:mb-0">
                                <span className="text-[#115056]">Sprk Home Energy</span>
                                <span className="text-[#141414]"> Report</span>
                            </h1>

                            {/* Subtitle and Description */}
                            <div className="w-full flex items-center justify-center px-2.5 py-0">
                                <div className="w-full max-w-4xl text-center">
                                    <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-semibold font-['Inter'] text-[rgba(0,0,0,0.66)] mb-4">
                                        Discover Your Home's Energy Efficiency.
                                    </p>
                                    <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px] leading-[120%] lg:leading-[1.6] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                        This interactive report gives home buyers and homeowners the ability to calculate a home's estimated electricity bills, energy savings potential, and solar opportunity—providing a clear picture of both current performance and the estimated cost to improve less efficient homes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="w-full flex items-center justify-center">
                            <button className="w-full sm:w-auto bg-[#115056] flex gap-2 h-[52px] items-center justify-center px-[30px] py-3 rounded-[30px] min-w-[44px] min-h-[44px]">
                                <span className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-white whitespace-nowrap">
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
                                text: "The Sprk Home Energy Report provides a simple, visual breakdown of how a home uses energy, how much it costs, and where savings can be found.",
                                highlightedWords: [
                                    { word: "Sprk Home Energy Report", className: "font-medium" }
                                ]
                            },
                            {
                                text: "It's designed to help:",
                                highlightedWords: [
                                    { word: "It's designed to help:", className: "font-medium" }
                                ]
                            },
                            {
                                text: "• Calculate estimated electricity bills\n• Identify ways to reduce electricity costs\n• Determine how much solar a home may need"
                            },
                            {
                                text: "Whether the home already has solar, is considering solar, or simply wants to reduce energy expenses, this report provides an energy baseline for a clear picture of its current and potential efficiency."
                            }
                        ]
                    }}
                    imageSrc="/home-energy-report-page/section 3/image1.svg"
                    imageAlt="Home Energy Report Preview"
                />
            </section>
            <section className="section-4">
                <WhyThisReportMatters
                    title="Why Energy Reports Matter in<br />Real Estate"
                    imageSrc="/home-energy-report-page/section 4/image1.svg"
                    imageAlt="Home Energy Report Preview"
                    bulletPoints={[
                        {
                            title: "Helps buyers",
                            description: "compare homes based on real utility cost projections."
                        },
                        {
                            title: "Gives new homeowners",
                            description: "independent energy data to decide whether to go solar."
                        },
                        {
                            title: "Assists agents",
                            description: "in determining how to market a home as efficient or in need of upgrades."
                        },
                        {
                            title: "Provides solar professionals",
                            description: "with baseline data to create accurate proposals for new homeowners."
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
                            description: "Sprk Certified Pros - Home Inspectors, Real Estate Agents, and Solar Professionals."
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
                            description: "Immediately available once an Energy Assessment is completed."
                        },
                        {
                            iconSrc: "/solar-listing-report-page/section 5/image4.svg",
                            iconAlt: "Requirements icon",
                            title: "Requirements:",
                            description: "Data from an on-site or virtual Energy Assessment."
                        }
                    ]}
                />
            </section>
            <section className="section-6">
                <AnalyzeThisReport
                    title="What's Analyzed in This Report"
                    description="The Sprk Home Energy Report uses a combination of home-specific data and trusted modeling tools to calculate cost, savings, and efficiency metrics."
                    highlightedWord="Sprk Home Energy Report"
                    cards={[
                        {
                            iconSrc: "/solar-listing-report-page/section 6/data-source.svg",
                            iconAlt: "Data Sources Icon",
                            title: "Data Sources Include:",
                            items: [
                                "Local utility rates and historical weather conditions",
                                "Home data collected by Sprk Certified Professionals",
                                "Energy usage preferences of homeowners or home buyers",
                                "NREL PVWatts production modeling for solar scenarios"
                            ]
                        },
                        {
                            iconSrc: "/solar-listing-report-page/section 6/calculations.svg",
                            iconAlt: "Calculations Icon",
                            title: "Calculations Include:",
                            items: [
                                "Impact of current home features on overall energy consumption",
                                "Impact of existing and potential energy improvements",
                                "Impact of household size and comfort preferences on energy use",
                                "Impact of local utility costs and climate conditions"
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
                    content={{
                        title: "A. Estimated Electricity Bills\n(Page 1)",
                        imageSrc: "/home-energy-report-page/section 7/image1.svg",
                        imageAlt: "Estimated Electricity Bills Report Preview",
                        sections: [
                            {
                                title: "What It Shows:",
                                items: [
                                    "Average, lowest, and highest monthly electricity bills",
                                    "Comparison to similar homes in the area"
                                ]
                            },
                            {
                                title: "Why It Matters:",
                                items: []
                            }
                        ],
                        description: "Gives buyers and sellers a baseline cost for the home's energy use."
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
                    imageSrc="/home-energy-report-page/section 8/image1.svg"
                    imageAlt="Sample Home Energy Report Preview"
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
