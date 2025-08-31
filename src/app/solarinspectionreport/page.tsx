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
import ButtonsType from '@/components/ButtonsType';

export default function SolarInspectionReport() {
    return (
        <div className='overflow-hidden'>
            <ScrollAnimations />

            <section className="section-1 w-full flex flex-col gap-5 lg:gap-20 items-center justify-start pb-[50px] lg:pb-[100px] pt-[75px] lg:pt-[150px] px-4 lg:px-24 animate-slideIn">
                <div className="w-full flex flex-col items-start justify-start transition-all duration-300 ease-in-out">
                    <header className="w-full flex flex-col gap-[25px] lg:gap-[50px] items-center justify-start">
                        <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start px-2.5 py-0">
                            {/* Title */}
                            <h1 className="w-full text-center text-[40px] sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] mb-4 lg:mb-0 animate-fadeIn transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                                <span className="text-[#115056] transition-colors duration-300 ease-in-out">Sprk Solar Inspection </span>
                                <span className="text-[#141414] transition-colors duration-300 ease-in-out">Report</span>
                            </h1>

                            {/* Subtitle and Description */}
                            <div className="w-full flex items-center justify-center px-2.5 py-0 transition-all duration-300 ease-in-out">
                                <div className="w-full text-center font-['Inter'] text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] text-[rgba(0,0,0,0.66)] animate-fadeIn">
                                    <p className="font-semibold mb-4 transition-all duration-300 ease-in-out hover:text-[#115056]">
                                        The #1 unbiased, independently generated solar health report.
                                    </p>
                                    <p className="font-normal transition-all duration-300 ease-in-out hover:text-[rgba(0,0,0,0.8)]">
                                        This report is both easy to read and packed with critical details about a solar system's production health, remaining life, and equipment condition. It also includes real estate transaction guidance and solar installer information for home buyers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="slide-up-cards bg-white flex flex-col justify-center items-center sm:flex-col md:flex-row gap-3 sm:gap-4 md:gap-[22px] items-stretch pb-6 sm:pb-8 md:pb-10 pt-0 px-[20px] sm:px-[25px] md:px-[30px] w-full">
                            <div className="flex flex-col md:flex-row gap-[15px] justify-center items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
                                <div className="w-full ">
                                    <ButtonsType type={9} label="See a Sample Report" isShowArrow={false} />
                                </div>
                                <div className="w-full ">
                                    <ButtonsType type={10} label="Find a Sprk Certified Home Inspector" isShowArrow={false} />
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
            </section>
            <section className="section-3">
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
            </section>
            <section className="section-4">
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
            </section>
            <section className="section-6">
                <AnalyzeThisReport
                    title="What's Analyzed in This Report"
                    description="The Sprk Solar Inspection Report compiles both inspection findings and public data to provide a clear, graded evaluation of a solar system's condition, performance, and safety presented in a way that anyone can understand."
                    highlightedWord="Sprk Solar Inspection Report"
                    cards={[
                        {
                            iconSrc: "/solar-listing-report-page/section 6/image1.svg",
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
                            iconSrc: "/solar-listing-report-page/section 6/image2.svg",
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
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 1/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            A. Solar System Summary<br></br>
                                            (Page 1–2)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">System size, overall score, and letter grade</li>
                                            <li className="ml-[27px]">Scores for remaining life, production, storage, and safety/quality
                                            </li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Gives an at-a-glance overview of the system’s health for quick decision-making.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 2/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            B. Solar System Remaining Life<br></br>
                                            (Page 3)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Estimated years remaining for panels and inverters</li>
                                            <li className="ml-[27px]">Life cycle chart with replacement intervals
                                            </li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Helps buyers and owners budget for future replacements.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 3/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            C. Solar Energy Production<br></br>
                                            (Page 4)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Monthly and annual production values</li>
                                            <li className="ml-[27px]">Panel orientation optimization </li>
                                            <li className="ml-[27px]">Monitoring and breaker configuration checks</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Confirms the system is producing at or near its expected output.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 4/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            D. Solar Energy Storage<br></br>
                                            (Page 5)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">
                                                Battery storage presence, capacity, and condition</li>
                                            <li className="ml-[27px]">Net metering configuration </li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Verifies the capability for backup power and proper utility integration.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 5/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            E. Safety and Quality<br></br>
                                            (Page 6-7)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">
                                                NEC labeling compliance</li>
                                            <li className="ml-[27px]">Panel and wire condition</li>
                                            <li className="ml-[27px]">Fire code setbacks and pest proofing</li>
                                            <li className="ml-[27px]">Signs of damage or improper installation</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Ensures the system is safe, compliant, and free from preventable hazards.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 6/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            F. Solar System Details<br></br>
                                            (Page 8)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Panel and inverter manufacturer details, wattage, warranties</li>
                                            <li className="ml-[27px]">Installer information and business status</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Provides documentation for maintenance, warranty claims, and resale.</p>
                                    </div>
                                </div>
                            )
                        },
                        {
                            leftSide: (
                                <div className="bg-gray-50 w-full  h-[300px] lg:h-[500px] flex items-start justify-end overflow-hidden">
                                    <div
                                        className="w-full h-full bg-center bg-contain bg-no-repeat rounded-tl-[10px] lg:rounded-tr-none rounded-tr-[10px]"
                                        style={{ backgroundImage: `url("/solar-inspection-report-page/section 7/slide 7/image.svg")` }}
                                    />
                                </div>
                            ),
                            rightSide: (
                                <div key="slide-a" className="w-full h-full lg:h-[500px] flex items-start py-[30px] lg:py-[50px] justify-center  overflow-hidden">
                                    <div className="w-full ">
                                        <h3 className="mb-[30px] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center lg:text-left">
                                            G. Buyer’s Checklist<br></br>
                                            (Page 9)
                                        </h3>

                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">What It Shows:</p>

                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter'] space-y-2 mb-6">
                                            <li className="ml-[27px]">Steps to complete the solar transfer during and after escrow</li>
                                        </ul>
                                        <p className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] leading-[110%] font-semibold font-['Inter'] mb-4">Why It Matters:</p>
                                        <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-normal font-['Inter']">
                                            Guides buyers through a smooth and documented solar handover.</p>
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
                    imageSrc="/solar-inspection-report-page/section 8/image.svg"
                    imageAlt="Sample Solar Inspection Certificate Preview"
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
