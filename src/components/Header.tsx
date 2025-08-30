"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";

type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: "Company", href: "#company" },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources", hasDropdown: true },
];

const inter = Inter({ subsets: ["latin"] });

type DropdownItem = {
  title: string;
  description: string;
  icon: string;
  href: string;
  isHighlighted?: boolean;
};

// Solutions dropdown data
const solutionsData: { byRole: DropdownItem[]; byUseCase: DropdownItem[]; byProduct: DropdownItem[] } = {
  byRole: [
    {
      title: "Homeowners",
      description: "Empowering you to understand, protect, and showcase your solar investment.",
      icon: "/header/solutions/homeowners.svg",
      href: "/homeowner",
      // isHighlighted: true
    },
    {
      title: "Home Inspectors", 
      description: "Turn every inspection into an opportunity with solar and energy reports.",
      icon: "/header/solutions/homeinspectors.svg",
      href: "/inspector"
    },
    {
      title: "Real Estate Agents",
      description: "Simplify solar in every transaction—listing or buying.",
      icon: "/header/solutions/realstateagent.svg", 
      href: "/agents"
    },
    {
      title: "Solar Professionals",
      description: "Help your solar customers keep their promises.",
      icon: "/header/solutions/solar-professionals.svg",
      href: "/solarpro"
    }
  ],
  byUseCase: [
    {
      title: "Identify Solar Problems",
      description: "Uncover hidden issues before they derail a deal.",
      icon: "/header/solutions/identify-solar-problems.svg",
      href: "/identifysolarproblems"
    },
    {
      title: "Selling Solar Homes",
      description: "Showcase solar the right way, the first time.",
      icon: "/header/solutions/selling-solar-homes.svg",
      href: "/findsolarpro"
    },
    {
      title: "Evaluating Solar Systems", 
      description: "Know what the system is, what it's worth, and how long it'll last.",
      icon: "/header/solutions/evaluating-solar-systems.svg",
      href: "/evaluatingsolarsystem"
    },
    {
      title: "Energy Efficient Homes",
      description: "Help buyers see the full value of green upgrades.",
      icon: "/header/solutions/energy-efficient-homes.svg",
      href: "/homenergyreport"
    }
  ],
  byProduct: [
    {
      title: "Home Energy Report",
      description: "A simple way to see—and save—on home energy.",
      icon: "/header/solutions/home-energy-report.svg",
      href: "/homenergyreport"
    },
    {
      title: "Solar Listing Report",
      description: "The go-to listing tool for solar homes.",
      icon: "/header/solutions/solar-listing-reports.svg",
      href: "/solarlistingreport"
    },
    {
      title: "Solar Inspection Report",
      description: "What a home inspector can't see—now revealed.",
      icon: "/header/solutions/solar-inspection-report.svg",
      href: "/inspector"
    },
    {
      title: "Green Appraisal Report",
      description: "Give appraisers the data they actually need.",
      icon: "/header/solutions/green-appraisal-report.svg",
      href: "/company"
    }
  ]
};

// Resources dropdown data (from Figma selection)
const resourcesData: DropdownItem[] = [
  {
    title: "Blog",
    description: "Empowering you to understand, protect, and showcase your solar investment.",
    icon: "/header/solutions/homeowners.svg",
    href: "/blog",
    isHighlighted: true
  },
  {
    title: "eBooks",
    description: "Turn every inspection into an opportunity with solar and energy reports.",
    icon: "/header/solutions/homeinspectors.svg",
    href: "/ebook"
  },
  {
    title: "Sprk Academy",
    description: "Simplify solar in every transaction—listing or buying.",
    icon: "/header/solutions/realstateagent.svg",
    href: "/professionalsolartraining"
  },
  {
    title: "Podcast",
    description: "Help your solar customers keep their promises.",
    icon: "/header/solutions/solar-professionals.svg",
    href: "/blog"
  },
  {
    title: "FAQ",
    description: "Help your solar customers keep their promises.",
    icon: "/header/solutions/solar-professionals.svg",
    href: "/faqs"
  }
];

// Dropdown arrow SVG component
const DropdownArrow = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
        setResourcesOpen(false);
        setMobileOpen(false);
        setMobileSolutionsOpen(false);
        setMobileResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 z-40" ref={headerRef}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-3 sm:py-4 lg:py-[15px]">
        <div
          className="flex items-center justify-between bg-white rounded-[50px] px-3 sm:px-4 lg:px-[15px] py-2 sm:py-2.5"
          style={{
            boxShadow:
              "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.15)",
          }}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center px-3 sm:px-4 lg:px-5 py-0 h-[35px]">
            <Image 
              src="/header/logo.svg" 
              alt="Sprk" 
              width={98} 
              height={35} 
              priority 
              className="w-[80px] sm:w-[90px] lg:w-[98px] h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`${inter.className} hidden lg:flex items-center justify-center flex-1 gap-0`}>
            {navItems.map((item) => (
              <div key={item.label} className="relative flex items-center px-3 lg:px-[15px] py-2.5">
                {item.label === "Solutions" ? (
                  <button
                    onClick={() => { setSolutionsOpen(!solutionsOpen); setResourcesOpen(false); }}
                    onMouseEnter={() => { setSolutionsOpen(true); setResourcesOpen(false); }}
                    className="flex items-center gap-1 lg:gap-[5px] text-[12px] sm:text-[13px] lg:text-[14px] font-semibold leading-[1.1] text-[#141414] hover:opacity-80 transition-opacity"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <div className="w-2.5 h-1.5 flex items-center justify-center">
                        <DropdownArrow />
                      </div>
                    )}
                  </button>
                ) : item.label === "Resources" ? (
                  <button
                    onClick={() => { setResourcesOpen(!resourcesOpen); setSolutionsOpen(false); }}
                    onMouseEnter={() => { setResourcesOpen(true); setSolutionsOpen(false); }}
                    className="flex items-center gap-1 lg:gap-[5px] text-[12px] sm:text-[13px] lg:text-[14px] font-semibold leading-[1.1] text-[#141414] hover:opacity-80 transition-opacity"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <div className="w-2.5 h-1.5 flex items-center justify-center">
                        <DropdownArrow />
                      </div>
                    )}
                  </button>
                ) : (
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-1 lg:gap-[5px] text-[12px] sm:text-[13px] lg:text-[14px] font-semibold leading-[1.1] text-[#141414] hover:opacity-80 transition-opacity"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <div className="w-2.5 h-1.5 flex items-center justify-center">
                        <DropdownArrow />
                      </div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className={`${inter.className} hidden lg:flex items-center gap-3`}>
            <Link
              href="#login"
              className="flex justify-center items-center w-[85px] px-6 py-2.5 rounded-[30px] text-white text-[14px] font-semibold leading-[1.1] bg-[#115056] hover:bg-opacity-90 transition-all"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="inline-flex justify-center items-center min-w-[153px] whitespace-nowrap px-6 py-2.5 rounded-[30px] text-[14px] font-semibold leading-[1.1] bg-white border border-[#115056] text-[#115056] hover:bg-gray-50 transition-all"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="lg:hidden inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md border border-black/10 text-[#141414] hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span aria-hidden className="text-lg">{mobileOpen ? "✕" : "≡"}</span>
          </button>
        </div>

        {/* Solutions Dropdown */}
        {solutionsOpen && (
          <div 
            className="absolute left-0 right-0 top-full mt-3 z-50 hidden lg:block"
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
              <div className="bg-white rounded-[10px] border-t-2 border-[#115056] p-4 lg:p-10 shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.15)]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                  {/* By Role Column */}
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <h3 className="text-[14px] font-semibold text-[#115056] leading-[1.1]">By Role</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {solutionsData.byRole.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex gap-2.5 items-start p-3 rounded-[5px] w-full lg:w-[300px] transition-colors border border-transparent hover:bg-[#F1FAFA] hover:border-[#A5DCDF] ${
                            item.isHighlighted ? 'bg-[#f1fafa] border border-[#a5dcdf]' : ''
                          }`}
                          onClick={() => setSolutionsOpen(false)}
                        >
                          <div className="flex items-center justify-center w-6 h-6 shrink-0">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                            <h4 className={`text-[14px] font-semibold leading-[1.1] ${
                              item.isHighlighted ? 'text-[#115056]' : 'text-[rgba(0,0,0,0.66)]'
                            }`}>
                              {item.title}
                            </h4>
                            <p className="text-[11px] font-normal text-[rgba(0,0,0,0.5)] leading-[1.2] h-[26px]">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* By Use Case Column */}
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <h3 className="text-[14px] font-semibold text-[#115056] leading-[1.1]">By Use Case</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {solutionsData.byUseCase.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex gap-2.5 items-start p-3 rounded-[5px] w-full lg:w-[300px] transition-colors border border-transparent hover:bg-[#F1FAFA] hover:border-[#A5DCDF]"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          <div className="flex items-center justify-center w-6 h-6 shrink-0">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                            <h4 className="text-[14px] font-semibold text-[rgba(0,0,0,0.66)] leading-[1.1]">
                              {item.title}
                            </h4>
                            <p className="text-[11px] font-normal text-[rgba(0,0,0,0.5)] leading-[1.2] h-[26px]">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* By Product Column */}
                  <div className="flex flex-col">
                    <div className="mb-5">
                      <h3 className="text-[14px] font-semibold text-[#115056] leading-[1.1]">By Product</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {solutionsData.byProduct.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex gap-2.5 items-start p-3 rounded-[5px] w-full lg:w-[300px] transition-colors border border-transparent hover:bg-[#F1FAFA] hover:border-[#A5DCDF]"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          <div className="flex items-center justify-center w-6 h-6 shrink-0">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                            />
                          </div>
                          <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                            <h4 className="text-[14px] font-semibold text-[rgba(0,0,0,0.66)] leading-[1.1]">
                              {item.title}
                            </h4>
                            <p className="text-[11px] font-normal text-[rgba(0,0,0,0.5)] leading-[1.2] h-[26px]">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resources Dropdown */}
        {resourcesOpen && (
          <div 
            className="absolute left-0 right-0 top-full mt-3 z-50 hidden lg:block"
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
              <div className="bg-white rounded-[10px] border-t-2 border-[#115056] p-4 lg:p-10 shadow-[0px_63px_25px_0px_rgba(38,142,151,0.02),0px_36px_21px_0px_rgba(38,142,151,0.08),0px_16px_16px_0px_rgba(38,142,151,0.13),0px_4px_9px_0px_rgba(38,142,151,0.15)]">
                <div className="flex flex-col gap-2">
                  {resourcesData.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex gap-2.5 items-start p-3 rounded-[5px] w-full lg:w-[300px] transition-colors border border-transparent hover:bg-[#F1FAFA] hover:border-[#A5DCDF] ${
                        item.isHighlighted ? 'bg-[#f1fafa] border border-[#a5dcdf]' : ''
                      }`}
                      onClick={() => setResourcesOpen(false)}
                    >
                      <div className="flex items-center justify-center w-6 h-6 shrink-0">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="flex flex-col gap-[5px] flex-1 min-w-0">
                        <h4 className={`text-[14px] font-semibold leading-[1.1] ${
                          item.isHighlighted ? 'text-[#115056]' : 'text-[rgba(0,0,0,0.66)]'
                        }`}>
                          {item.title}
                        </h4>
                        <p className="text-[11px] font-normal text-[rgba(0,0,0,0.5)] leading-[1.2] h-[26px]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileOpen ? (
          <div className={`${inter.className} lg:hidden mt-3 rounded-2xl border border-black/10 bg-white p-4 shadow-lg`}> 
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.label === "Solutions" ? (
                    <button
                      onClick={() => { setMobileSolutionsOpen(!mobileSolutionsOpen); setMobileResourcesOpen(false); }}
                      className="w-full flex items-center justify-between py-3 px-2 text-[14px] sm:text-[15px] font-semibold text-[#141414] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <div className={`w-2.5 h-1.5 flex items-center justify-center transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}>
                          <DropdownArrow />
                        </div>
                      )}
                    </button>
                  ) : item.label === "Resources" ? (
                    <button
                      onClick={() => { setMobileResourcesOpen(!mobileResourcesOpen); setMobileSolutionsOpen(false); }}
                      className="w-full flex items-center justify-between py-3 px-2 text-[14px] sm:text-[15px] font-semibold text-[#141414] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <div className={`w-2.5 h-1.5 flex items-center justify-center transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`}>
                          <DropdownArrow />
                        </div>
                      )}
                    </button>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="flex items-center justify-between py-3 px-2 text-[14px] sm:text-[15px] font-semibold text-[#141414] hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <div className="w-2.5 h-1.5 flex items-center justify-center">
                          <DropdownArrow />
                        </div>
                      )}
                    </Link>
                  )}
                  
                  {/* Mobile Solutions Dropdown */}
                  {item.label === "Solutions" && mobileSolutionsOpen && (
                    <div className="mt-2 ml-4 space-y-3">
                      {/* By Role Section */}
                      <div>
                        <h4 className="text-[12px] font-semibold text-[#115056] mb-2">By Role</h4>
                        <div className="space-y-2">
                          {solutionsData.byRole.map((roleItem, index) => (
                            <Link
                              key={index}
                              href={roleItem.href}
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileSolutionsOpen(false);
                              }}
                            >
                              <Image
                                src={roleItem.icon}
                                alt={roleItem.title}
                                width={16}
                                height={16}
                                className="w-4 h-4 mt-0.5 shrink-0"
                              />
                              <div>
                                <div className="text-[13px] font-medium text-[#141414]">{roleItem.title}</div>
                                <div className="text-[11px] text-gray-600 leading-tight">{roleItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* By Use Case Section */}
                      <div>
                        <h4 className="text-[12px] font-semibold text-[#115056] mb-2">By Use Case</h4>
                        <div className="space-y-2">
                          {solutionsData.byUseCase.map((useCaseItem, index) => (
                            <Link
                              key={index}
                              href={useCaseItem.href}
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileSolutionsOpen(false);
                              }}
                            >
                              <Image
                                src={useCaseItem.icon}
                                alt={useCaseItem.title}
                                width={16}
                                height={16}
                                className="w-4 h-4 mt-0.5 shrink-0"
                              />
                              <div>
                                <div className="text-[13px] font-medium text-[#141414]">{useCaseItem.title}</div>
                                <div className="text-[11px] text-gray-600 leading-tight">{useCaseItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* By Product Section */}
                      <div>
                        <h4 className="text-[12px] font-semibold text-[#115056] mb-2">By Product</h4>
                        <div className="space-y-2">
                          {solutionsData.byProduct.map((productItem, index) => (
                            <Link
                              key={index}
                              href={productItem.href}
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileSolutionsOpen(false);
                              }}
                            >
                              <Image
                                src={productItem.icon}
                                alt={productItem.title}
                                width={16}
                                height={16}
                                className="w-4 h-4 mt-0.5 shrink-0"
                              />
                              <div>
                                <div className="text-[13px] font-medium text-[#141414]">{productItem.title}</div>
                                <div className="text-[11px] text-gray-600 leading-tight">{productItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile Resources Dropdown */}
                  {item.label === "Resources" && mobileResourcesOpen && (
                    <div className="mt-2 ml-4 space-y-3">
                      <div>
                        <div className="space-y-2">
                          {resourcesData.map((resItem, index) => (
                            <Link
                              key={index}
                              href={resItem.href}
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileResourcesOpen(false);
                              }}
                            >
                              <Image
                                src={resItem.icon}
                                alt={resItem.title}
                                width={16}
                                height={16}
                                className="w-4 h-4 mt-0.5 shrink-0"
                              />
                              <div>
                                <div className="text-[13px] font-medium text-[#141414]">{resItem.title}</div>
                                <div className="text-[11px] text-gray-600 leading-tight">{resItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 pt-4 border-t border-gray-100">
                <Link
                  href="#login"
                  className="flex-1 flex justify-center items-center px-4 py-3 sm:py-2 rounded-[30px] text-white text-[14px] font-semibold leading-[1.1] bg-[#115056] hover:bg-opacity-90 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="#signup"
                  className="flex-1 inline-flex justify-center items-center whitespace-nowrap px-4 py-3 sm:py-2 rounded-[30px] text-[14px] font-semibold leading-[1.1] bg-white border border-[#115056] text-[#115056] hover:bg-gray-50 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}


