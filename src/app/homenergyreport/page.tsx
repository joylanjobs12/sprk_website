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
import ButtonsType from '@/components/ButtonsType';

export default function HomeEnergyReport() {
    return (
        <div className='overflow-hidden'>
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

                        <div className="flex flex-col md:flex-row gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
                            <div className="w-full ">
                            <ButtonsType type={9} label="See a Sample Report" isShowArrow={false} />
                            </div>
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
                            iconSrc: "/solar-listing-report-page/section 6/image1.svg",
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
                            iconSrc: "/solar-listing-report-page/section 6/image2.svg",
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
                    slideContent={[
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/home-energy-report-page/section 7/slide 1/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        A. Estimated Electricity Bills<br></br> 
                                            (Page 1)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Average, lowest, and highest monthly electricity bills</li>
                                            <li className="ml-[27px]">Comparison to similar homes in the area
                                            </li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Gives buyers and sellers a baseline cost for the home’s energy use.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/home-energy-report-page/section 7/slide 2/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        B. Home Energy Profile<br></br> 
                                            (Page 2)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Annual energy expenses and savings</li>
                                            <li className="ml-[27px]">Breakdown of usage by category </li>
                                            <li className="ml-[27px]">Detailed home features impacting consumption</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Links physical home characteristics to actual energy costs and opportunities for improvement.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/home-energy-report-page/section 7/slide 3/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        C. The Energy Savings Plan<br></br> 
                                            (Page 3)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Green home efficiency rating</li>
                                            <li className="ml-[27px]">Estimated monthly savings from current features</li>
                                            <li className="ml-[27px]">Potential savings from recommended upgrades</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Gives homeowners a clear action plan for boosting efficiency and lowering costs.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/home-energy-report-page/section 7/slide 4/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        D. Installed Solar System<br></br> 
                                            
                                            (Page 4)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">System size, age, and annual production</li>
                                            <li className="ml-[27px]">Savings to date and projected 10-year savings</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Quantifies the current solar system’s financial impact on the home.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/home-energy-report-page/section 7/slide 5/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        E. Proposed Solar System<br></br> 
                                            (Page 5)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Recommended system size for the home</li>
                                            <li className="ml-[27px]">Projected annual production and monthly savings</li>
                                            <li className="ml-[27px]">Recommended battery storage size</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Provides a tailored solar proposal to maximize efficiency and energy offset.</p>
                                    </div>
                                </div>
                            )
                        },
                    ]}
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
                        (
                          <ButtonsType key="download-sample" type={2} label="Download Sample Report" isShowArrow={true} />
                        ),
                        (
                          <ButtonsType key="find-certified-pro" type={6} label="Find a Sprk Certified Pro" isShowArrow={true} />
                        )
                      ]}
                />

            </section>

            <ScrollToTop />
        </div>
    );
}
