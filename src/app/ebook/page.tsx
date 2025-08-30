import ScrollToTop from '@/components/ScrollToTop';

export default function EbookPage() {
    return (
        <>
            <section className="flex flex-col gap-20 items-center justify-start pb-[50px] pt-[150px] px-6 sm:px-12 md:px-16 lg:px-24 relative w-full">
                <div className="flex flex-col items-start justify-start relative w-full max-w-7xl">
                    <header className="flex flex-col gap-[50px] items-center justify-start overflow-visible p-0 relative w-full">
                        <div className="flex flex-col gap-[30px] items-center justify-start px-2.5 py-0 relative w-full">
                            <div className="relative w-full text-center">
                                {/* Mobile & Small Tablets (0px-767px) */}
                                <div className="block lg:hidden">
                                    <p className="text-[40px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] mb-4">
                                        Download
                                    </p>
                                    <p className="text-[40px] leading-[110%] font-medium font-['Aeonik_Pro'] mb-0">
                                        <span className="text-[#115056]">Sprk eBook </span>
                                        <span className="text-[#141414]">for Free</span>
                                    </p>
                                </div>

                                {/* Large screens (992px and above) */}
                                <div className="hidden lg:block">
                                    <p className="text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] mb-4">
                                        Download
                                    </p>
                                    <p className="text-[80px] leading-[110%] font-medium font-['Aeonik_Pro'] mb-0">
                                        <span className="text-[#115056]">Sprk eBook </span>
                                        <span className="text-[#141414]">for Free</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </section>
            <section className="flex flex-col gap-6 items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24 py-[50px] w-full">
                {/* Single eBook Card */}
                <div className="bg-[#115056] relative rounded-[10px] w-full max-w-[1248px]">
                    <div className="flex flex-col lg:flex-row gap-0 items-start justify-start overflow-hidden relative w-full">
                        {/* Left side - eBook Cover Image */}
                        <div className="flex flex-col items-start justify-start relative w-full lg:w-1/2">
                            <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full min-w-[350px]">
                                <img
                                    src="/ebook-page/section 2/image1.svg"
                                    alt="Solar in The Deal eBook Cover"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="bg-white flex flex-col h-auto lg:h-[500px] items-start justify-between min-h-[350px] min-w-[350px] overflow-hidden p-6 sm:p-8 lg:p-[50px] relative w-full lg:w-1/2">
                            {/* Main Content */}
                            <div className="flex flex-col gap-2.5 items-start justify-start relative w-full">
                                {/* Title */}
                                <div className="flex items-center justify-center relative w-full">
                                    <h2 className="w-full text-left">
                                        {/* Mobile & Small Tablets (0px-767px) */}
                                        <span className="block lg:hidden text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                                            Solar in The Deal
                                        </span>

                                        {/* Large screens (992px and above) */}
                                        <span className="hidden lg:block text-[56px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                                            Solar in The Deal
                                        </span>
                                    </h2>
                                </div>

                                {/* Bullet Points */}
                                <div className="flex items-start justify-center relative w-full">
                                    <div className="w-full min-h-[120px] lg:min-h-[156px]">
                                        <ul className="list-disc pl-8 space-y-2">
                                            <li>
                                                <span className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                                    How solar affects appraisals, contracts, and buyer confidence
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                                    The different types of solar ownership (and what to watch for)
                                                </span>
                                            </li>
                                            <li>
                                                <span className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                                    What to ask, disclose, and document when listing or buying a solar-powered home
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Author Info */}
                            <div className="flex flex-col gap-[5px] items-start justify-start relative w-full mt-4 lg:mt-0">
                                <div className="flex items-center justify-center relative w-full">
                                    <p className="w-full text-left text-[16px] sm:text-[18px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)]">
                                        Presented by Sprk Founder
                                    </p>
                                </div>
                                <div className="flex items-center justify-center relative w-full">
                                    <h3 className="w-full text-left">
                                        {/* Mobile & Small Tablets (0px-767px) */}
                                        <span className="block lg:hidden text-[25px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                                            Cory Vanderpool
                                        </span>

                                        {/* Large screens (992px and above) */}
                                        <span className="hidden lg:block text-[32px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                                            Cory Vanderpool
                                        </span>
                                    </h3>
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="flex flex-col gap-[5px] items-start justify-start relative w-full mt-4 lg:mt-0">
                                <button className="bg-[#115056] flex items-center justify-center p-[5px] relative rounded-[5px] w-full hover:bg-[#0d3d42] transition-colors">
                                    <div className="flex items-center justify-center px-[15px] py-[10px] lg:py-[5px] relative w-full">
                                        <span className="flex-1 text-center">
                                            {/* Mobile & Small Tablets (0px-767px) */}
                                            <span className="block lg:hidden text-[18px] leading-[120%] font-normal font-['Inter'] text-white">
                                                Download the Free eBook
                                            </span>

                                            {/* Large screens (992px and above) */}
                                            <span className="hidden lg:block text-[22px] leading-[120%] font-normal font-['Inter'] text-white">
                                                Download the Free eBook
                                            </span>
                                        </span>
                                        <div className="relative w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] ml-2">
                                            <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Border overlay */}
                    <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
            </section>
            <section className="bg-[rgba(0,0,0,0.5)] flex flex-col gap-20 items-center justify-start px-4 sm:px-12 md:px-16 lg:px-24 py-[60px] lg:py-[100px] relative w-full">
                <div className="bg-gray-50 flex flex-col gap-8 sm:gap-[50px] items-center justify-start p-4 sm:p-8 lg:p-[50px] relative rounded-[10px] w-full max-w-[800px]">
                    <div className="flex flex-col gap-6 sm:gap-[30px] items-start justify-center relative w-full">
                        {/* Title */}
                        <div className="flex items-start justify-center px-0 py-2.5 relative w-full">
                            <h5 className="w-full text-center text-[32px] leading-[110%] font-medium font-['Aeonik_Pro'] text-black mb-2">
                                    Enter details to Download the eBooks
                            </h5>
                        </div>
                        {/* Inputs */}
                        <div className="flex flex-col gap-2.5 items-start justify-center relative w-full">
                            {/* First and Last Name */}
                            <div className="flex flex-col md:flex-row gap-2.5 items-start justify-start relative w-full">
                                <div className="bg-[#f4f4f4] border border-[rgba(0,0,0,0.25)] flex items-center justify-between px-[15px] py-5 relative rounded-[10px] w-full md:w-1/2">
                                    <input 
                                        type="text" 
                                        placeholder="First name"
                                        className="bg-transparent flex-1 outline-none text-[16px] sm:text-[16px] lg:text-[20px] leading-[120%] font-normal font-['Aeonik_Pro'] text-black placeholder-[rgba(0,0,0,0.35)]"
                                    />
                                </div>
                                <div className="bg-[#f4f4f4] border border-[rgba(0,0,0,0.25)] flex items-center justify-between px-[15px] py-5 relative rounded-[10px] w-full md:w-1/2">
                                    <input 
                                        type="text" 
                                        placeholder="Last name"
                                        className="bg-transparent flex-1 outline-none text-[16px] sm:text-[16px] lg:text-[20px] leading-[120%] font-normal font-['Aeonik_Pro'] text-black placeholder-[rgba(0,0,0,0.35)]"
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className="bg-[#f4f4f4] border border-[rgba(0,0,0,0.25)] flex items-center justify-between px-[15px] py-5 relative rounded-[10px] w-full">
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    className="bg-transparent flex-1 outline-none text-[16px] sm:text-[16px] lg:text-[20px] leading-[120%] font-normal font-['Aeonik_Pro'] text-black placeholder-[rgba(0,0,0,0.35)]"
                                />
                            </div>
                            {/* Dropdown */}
                            <div className="bg-[#f4f4f4] border border-[rgba(0,0,0,0.25)] flex items-center justify-between px-[15px] py-5 relative rounded-[10px] w-full">
                                <select 
                                    className="bg-transparent flex-1 outline-none text-[18px] sm:text-[20px] lg:text-[22px] leading-[110%] font-normal font-['Aeonik_Pro'] text-black appearance-none">
                                    <option>I&apos;m a Homeowner</option>
                                    {/* Add other options as needed */}
                                </select>
                                <div className="pointer-events-none text-[18px] sm:text-[20px] lg:text-[22px] text-black">
                                    ▼
                                </div>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className="flex flex-col gap-5 items-center justify-start relative w-full">
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-start relative w-full">
                                {/* Cancel Button */}
                                <button className="border border-[rgba(0,0,0,0.2)] flex items-center justify-center p-[10px] relative rounded-[5px] w-full sm:flex-1 hover:bg-gray-100 transition-colors">
                                    <span className="text-[16px] md:text-[16px] lg:text-[14px] leading-[1.6] font-normal lg:font-semibold font-['Inter'] text-[rgba(0,0,0,0.66)] text-center">
                                        Cancel
                                    </span>
                                </button>
                                
                                {/* Download Button */}
                                <button className="bg-[#115056] flex items-center justify-center p-[10px] relative rounded-[5px] w-full sm:flex-1 hover:bg-[#0d3d42] transition-colors">
                                    <span className="text-[20px] lg:text-[18px] leading-[120%] font-medium font-['Inter'] text-center text-white">
                                        Download Ebook
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ScrollToTop />

        </>
    );
}
