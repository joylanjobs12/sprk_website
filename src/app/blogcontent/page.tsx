import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';

export default function BlogContentPage() {
  return (
    <>
      <section aria-labelledby="blogcontent-hero" className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="flex items-center gap-2 text-[12px] md:text-[14px] text-black/66 mb-4">
            <button aria-label="Back to all posts" className="inline-flex items-center gap-2 font-semibold">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>All post</span>
            </button>
          </div>

          <div className="relative rounded-[10px] overflow-hidden h-[220px] sm:h-[300px] md:h-[360px] lg:h-[500px]">
            <Image
              src="/blog-content-page/section 1/image1.svg"
              alt="Article cover"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-6">
            <h3
              id="blogcontent-hero"
              className="text-[#141414] font-['Aeonik Pro'] font-medium leading-[1.1] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[45px]"
            >
              Why Solar Homeowners Lose Thousands,
              <br className="hidden md:block" />
              and What Sprk is Doing About It.
            </h3>
          </div>

          <div className="mt-4 flex items-start gap-5">
            <div className="bg-[#138978] rounded-full p-1.5 shrink-0">
              <div className="relative rounded-full overflow-hidden size-16 md:size-20 bg-white">
                <Image
                  src="/blog-content-page/section 1/profile.svg"
                  alt="Author profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center text-black/66">
              <p className="leading-[1.1] text-[16px] md:text-[20px]">
                <span>By </span>
                <span className="font-['Aeonik Pro'] font-bold not-italic text-[#115056] text-[16px] md:text-[32px]">Cory Vanderpool</span>
              </p>
              <p className="leading-[1.1] text-[16px] md:text-[20px]">
                <span className="font-normal">Published on </span>
                <span className="font-semibold">July 17, 2025</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              {/* List card */}
              <article className="rounded-[10px] overflow-hidden border border-black/20">
                <div className="bg-[#115056] text-white px-4 py-4 sm:px-6 md:px-8 lg:px-[30px]">
                  <h4 className="font-['Aeonik Pro'] font-medium leading-[1.1] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px]">Here’s what’s inside</h4>
                </div>
                <ul className="divide-y divide-black/20 px-4 sm:px-6 md:px-8 lg:px-[30px]">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <li key={idx} className="py-[15px]">
                      <p className="text-[16px] md:text-[20px] text-black/66 leading-[1.1]">01 | Here’s what’s inside</p>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Feature article card */}
              <article className="relative rounded-[10px] overflow-hidden border border-black/20">
                <div className="relative h-[260px] sm:h-[300px] md:h-[360px] lg:h-[525px]">
                  <Image src="/blog-content-page/section 2/image1.svg" alt="Article visual" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060606] from-[20%] to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="backdrop-blur-[2.5px] bg-white/5 rounded-[5px] p-[3px]">
                      <div className="bg-white rounded-[3px] px-[6px] py-[5px]">
                        <span className="text-[10px] font-semibold text-[#138978]">Partnership Journey</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 md:p-[30px]">
                  <h3 className="text-[#141414] text-[18px] md:text-[20px] font-medium leading-[1.1] mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                  <p className="text-[16px] text-black/66 leading-[1.2] mb-5">{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`}</p>
                  <div className="flex items-center justify-between text-[#141414] text-[16px] md:text-[20px]">
                    <span>By Cory Vanderpool</span>
                    <span className="inline-flex items-center gap-2">Dive Deeper
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              {/* Video block */}
              <article className="flex flex-col gap-6 rounded-[10px]">
                <div className="bg-[#115056] rounded-[10px] px-4 py-3 sm:px-6 md:px-8 lg:px-[30px] text-white flex items-center justify-between">
                  <h4 className="font-['Aeonik Pro'] font-medium leading-[1.1] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px]">Take a Look</h4>
                  <p className="text-[16px] md:text-[20px] font-medium">Duration: 1:30 mins.</p>
                </div>
                <div className="relative h-[220px] sm:h-[260px] md:h-[320px] rounded-[10px] overflow-hidden border border-black/20">
                  <Image src="/blog-content-page/section 2/image2.svg" alt="Video cover" fill className="object-cover" />
                </div>
              </article>

              {/* Content block */}
              <article className="flex flex-col gap-4">
                <h4 className="font-['Aeonik Pro'] font-medium leading-[1.1] text-[#141414] text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px]">What is Lorem Ipsum?</h4>
                <p className="text-[16px] md:text-[20px] leading-[1.2] text-black/66">
                  {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                </p>
                <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[408px] rounded-[10px] overflow-hidden border border-black/20">
                  <Image src="/blog-content-page/section 2/image3.svg" alt="Inline article visual" fill className="object-cover" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          {/* Top bar with back and share */}
          <div className="bg-[#f4f4f4] rounded-[10px] px-4 py-3 sm:px-6 md:px-8 lg:px-[30px] flex items-center justify-between">
            <div className="flex items-center gap-2 text-black/66">
              <button aria-label="Back to all posts" className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] md:text-[24px] font-['Aeonik Pro']">All post</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-black/66 text-[14px] md:text-[24px] font-['Aeonik Pro']">Share this post:</span>
              <div className="flex items-center gap-3">
                <Image src="/blog-content-page/section 3/facebook.svg" alt="Share on Facebook" width={24} height={24} />
                <Image src="/blog-content-page/section 3/linkedin.svg" alt="Share on LinkedIn" width={24} height={24} />
                <Image src="/blog-content-page/section 3/x.svg" alt="Share on X" width={24} height={24} />
                <Image src="/blog-content-page/section 3/link.svg" alt="Copy link" width={30} height={15} />
              </div>
            </div>
          </div>

          {/* Accent underline */}
          <div className="mt-6">
            <div className="h-0.5 bg-[#115056] rounded-[10px] w-[180px] sm:w-[240px] lg:w-[400px]"></div>
          </div>

          {/* Heading */}
          <div className="mt-6 md:mt-8">
            <h2 className="text-[#141414] font-['Aeonik Pro'] font-medium leading-[1.1] text-[35px] sm:text-[35px] md:text-[40px] lg:text-[56px]">Still Curious?</h2>
          </div>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <article key={idx} className="relative rounded-[10px] overflow-hidden border border-black/20 bg-white shadow-[0px_63px_25px_rgba(38,142,151,0.02),0px_36px_21px_rgba(38,142,151,0.08),0px_16px_16px_rgba(38,142,151,0.13),0px_4px_9px_rgba(38,142,151,0.10)]">
                <div className="relative h-[220px] sm:h-[260px] md:h-[280px]">
                  <Image src="/blog-content-page/section 3/image1.svg" alt="Article cover" fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="backdrop-blur-[2.5px] bg-white/5 rounded-[5px] p-[3px]">
                      <div className="bg-white rounded-[3px] px-[6px] py-[5px]">
                        <span className="text-[10px] font-semibold text-[#138978]">Partnership Journey</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#141414] text-[18px] md:text-[20px] font-medium leading-[1.1] mb-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <p className="text-[16px] text-black/66 leading-[1.2] mb-5">
                    {`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.`}
                  </p>
                  <div className="text-[#141414] text-[16px] md:text-[20px]">By Cory Vanderpool</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  );
}


