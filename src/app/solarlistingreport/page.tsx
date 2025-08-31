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
import ButtonsType from '@/components/ButtonsType';

export default function SolarListingReport() {
    return (
        <div className='overflow-hidden'>
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
                        <div className="slide-up-cards bg-white flex flex-col justify-center items-center sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-[22px] items-stretch pb-6 sm:pb-8 md:pb-10 pt-0 px-[20px] sm:px-[25px] md:px-[30px] w-full">
                        <div className="flex flex-col md:flex-row gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
                            <div className="w-full ">
                            <ButtonsType type={9} label="Get This Report" isShowArrow={false} />
                            </div>
                            <div className="w-full ">
                            <ButtonsType type={10} label="See a Sample Report" isShowArrow={false} />
                            </div>
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
                            iconSrc: "/solar-listing-report-page/section 6/image1.svg",
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
                            iconSrc: "/solar-listing-report-page/section 6/image2.svg",
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
                    slideContent={[
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 1/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            A. Green Home Rating <br></br> (Page 1)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Overall home energy efficiency rating (percentage)</li>
                                            <li className="ml-[27px]">Estimated monthly savings and 10-year projected savings</li>
                                            <li className="ml-[27px]">QR code linking to the online version of the report</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Provides buyers with an immediate snapshot of the home’s energy performance and potential cost savings, setting the tone for the value of the solar system and green features.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 2/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            B. Real Estate Summary <br></br>
                                            (Page 2)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Total projected savings over 1, 10, and 25 years</li>
                                            <li className="ml-[27px]">Estimated home price impact from solar and green feature</li>
                                            <li className="ml-[27px]">Side-by-side comparison of home energy performance with and without upgrades</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Quantifies the financial benefit of the home’s solar and efficiency features in a way that supports pricing strategy, appraisals, and negotiations.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 3/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            C. Home Energy Profile <br></br>
                                            (Page 3)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">
                                            Estimated monthly utility bill without solar vs. with solar</li>
                                            <li className="ml-[27px]">Breakdown of energy sources and consumption</li>
                                            <li className="ml-[27px]">Major home systems impacting energy usage</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Connects the solar system’s impact directly to lower monthly utility costs — a tangible benefit buyers can understand immediately.</p>
                                    </div>
                                </div>
                            ),
                        },
                      
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 4/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            D. Save with Green Features <br></br>
                                            (Page 4)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">List of installed green features beyond solar (e.g., smart thermostats, efficient windows, insulation)</li>
                                                <li className="ml-[27px]">Estimated annual savings from each feature</li>
                                                <li className="ml-[27px]">Efficiency ratings and descriptions</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Demonstrates the home’s additional energy-saving assets, increasing its appeal and potential market value beyond just the solar system.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 5/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            E. Installed Solar System <br></br>
                                            (Page 5)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">
                                                Ownership type (owned, leased, or financed)</li>
                                                <li className="ml-[27px]">System size, age, and estimated monthly production</li>
                                                <li className="ml-[27px]">Estimated monthly and annual savings from solar</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Confirms core system details buyers and appraisers need to understand the scope and impact of the solar investment.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 6/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        F. Installed Solar Details <br></br>
                                         
                                        (Page 6)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">
                                                Manufacturer and model of panels and inverters</li>
                                                <li className="ml-[27px]">Warranty information and installer details</li>
                                                <li className="ml-[27px]">Monitoring access information</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Provides the documentation and contacts needed for ongoing system operation, warranty claims, or service needs.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 7/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        G. Green Feature Details<br></br>
                                        (Page 7)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">
                                                Detailed specifications of installed green features</li>
                                                <li className="ml-[27px]">Quantity, type, and efficiency ratings for each</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Helps appraisers and buyers see the cumulative energy and cost-saving value of the home’s efficiency features.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 8/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        H. Projected Green Feature Savings<br></br>
                                        (Page 8)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">
                                                Year-by-year savings projections for green features</li>
                                                <li className="ml-[27px]">Utility rate escalation factored in over a 50-year period</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">Demonstrates the long-term financial and environmental benefits of the home’s energy features.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 9/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        I. Seller’s Checklist<br></br>
                                        (Page 9)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">Steps for preparing the solar home for sale</li>
                                                <li className="ml-[27px]">Guidance on gathering documentation and scheduling inspections</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Helps sellers avoid last-minute issues by preparing all solar-related information in advance.</p>
                                    </div>
                                </div>
                            ),
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-listing-report-page/section 7/slide 10/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                        J. Buyer’s Checklist<br></br>
                                        (Page 10)
                                        </h3>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>
                                            <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                                <li className="ml-[27px]">Steps for understanding and transferring the solar system post-purchase</li>
                                                <li className="ml-[27px]">Instructions for warranty and monitoring setup</li>
                                            </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                        Gives buyers confidence and a clear plan for solar ownership after closing.</p>
                                    </div>
                                </div>
                            ),
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
        </div>
    );
}
