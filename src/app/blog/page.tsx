import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      <section aria-labelledby="blog-hero-heading" className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl rounded-[10px]">
          <div className="relative rounded-[10px] overflow-hidden bg-[#115056]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="flex flex-col justify-between text-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
                <div>
                  <p className="mb-3 font-medium text-[20px] leading-[1.1]">Fresh Updates from Sprk</p>
                  <h2 id="blog-hero-heading" className="mb-4 font-['Aeonik Pro'] font-medium leading-[1.1] text-[40px] sm:text-[40px] md:text-[40px] lg:text-[56px] 2xl:text-[80px]">
                    Protect Your
                    <br className="hidden lg:block" />
                    Solar Investment
                  </h2>
                  <p className="text-white/80 text-[16px] lg:text-[18px] leading-[1.2]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                </div>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-[20px]">
                  See the Full Story
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="p-3 lg:p-4">
                <div className="relative rounded-[10px] overflow-hidden h-[220px] xs:h-[260px] sm:h-[300px] md:h-[360px] lg:h-[500px] bg-white/5">
                  <Image
                    src="/blog-page/section1/image1.svg"
                    alt="Blog feature visual"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="blog-most-viewed" className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 mb-8">
            <h2 id="blog-most-viewed" className="text-[#141414] font-['Aeonik Pro'] font-medium leading-[1.1] text-[35px] sm:text-[35px] md:text-[40px] lg:text-[56px]">
              Most Viewed
            </h2>
            <div className="w-full lg:ml-auto lg:w-[420px]">
              <label className="relative block">
                <input
                  type="text"
                  placeholder="Find an Article"
                  className="w-full h-[50px] rounded-[10px] border border-black/25 bg-gray-50 px-4 text-[16px] md:text-[18px] text-black/60 outline-none"
                  aria-label="Search articles"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 */}
            <article className="relative rounded-[10px] overflow-hidden border border-black/15">
              <div className="relative h-[260px] sm:h-[300px] md:h-[360px] lg:h-[525px]">
                <Image src="/blog-page/section2/image.svg" alt="Article cover" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] from-[16%] to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="backdrop-blur-[2.5px] bg-white/5 rounded-[5px] p-[3px]">
                    <div className="bg-[#138978] rounded-[3px] px-[6px] py-[5px]">
                      <span className="text-[10px] text-white/80">Readers Favorites</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.1] mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <p className="text-white/80 text-[16px] lg:text-[18px] leading-[1.2] mb-5">
                    {`Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                  </p>
                  <div className="flex items-center justify-between text-white/80 text-[16px] lg:text-[20px]">
                    <span>By Cory Vanderpool</span>
                    <span className="inline-flex items-center gap-2">Dive Deeper
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 2 */}
            <article className="relative rounded-[10px] overflow-hidden border border-black/15">
              <div className="relative h-[260px] sm:h-[300px] md:h-[360px] lg:h-[525px]">
                <Image src="/blog-page/section2/image.svg" alt="Article cover" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] from-[16%] to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="backdrop-blur-[2.5px] bg-white/5 rounded-[5px] p-[3px]">
                    <div className="bg-[#138978] rounded-[3px] px-[6px] py-[5px]">
                      <span className="text-[10px] text-white/80">Readers Favorites</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.1] mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <p className="text-white/80 text-[16px] lg:text-[18px] leading-[1.2] mb-5">
                    {`Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                  </p>
                  <div className="flex items-center justify-between text-white/80 text-[16px] lg:text-[20px]">
                    <span>By Cory Vanderpool</span>
                    <span className="inline-flex items-center gap-2">Dive Deeper
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Card 3 - full width */}
            <article className="relative rounded-[10px] overflow-hidden border border-black/15 lg:col-span-2">
              <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[525px]">
                <Image src="/blog-page/section2/image.svg" alt="Article cover" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] from-[16%] to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="backdrop-blur-[2.5px] bg-white/5 rounded-[5px] p-[3px]">
                    <div className="bg-[#138978] rounded-[3px] px-[6px] py-[5px]">
                      <span className="text-[10px] text-white/80">Readers Favorites</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.1] mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <p className="text-white/80 text-[16px] lg:text-[18px] leading-[1.2] mb-5">
                    {`Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                  </p>
                  <div className="flex items-center justify-between text-white/80 text-[16px] lg:text-[20px]">
                    <span>By Cory Vanderpool</span>
                    <span className="inline-flex items-center gap-2">Dive Deeper
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section aria-labelledby="blog-related" className="mx-auto w-full max-w-[1440px] bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 id="blog-related" className="text-[#141414] font-['Aeonik Pro'] font-medium leading-[1.1] text-[35px] sm:text-[35px] md:text-[40px] lg:text-[56px]">
              Related Articles
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <button aria-label="Previous" className="h-[50px] w-[50px] rounded-[10px] border border-black/25 bg-gray-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button aria-label="Next" className="h-[50px] w-[50px] rounded-[10px] border border-black/25 bg-gray-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <button className="hidden md:flex items-center gap-2 text-[#141414] text-[20px] lg:text-[32px]">
                View All
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <article key={idx} className="relative rounded-[10px] overflow-hidden border border-black/15 bg-white shadow-[0px_63px_25px_rgba(38,142,151,0.02),0px_36px_21px_rgba(38,142,151,0.08),0px_16px_16px_rgba(38,142,151,0.13),0px_4px_9px_rgba(38,142,151,0.10)]">
                <div className="relative h-[220px] sm:h-[260px] md:h-[280px]">
                  <Image src="/blog-page/section2/image.svg" alt="Article cover" fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <div className="backdrop-blur-[2.5px] bg-white/5 rounded-[5px] p-[3px]">
                      <div className="bg-white rounded-[3px] px-[6px] py-[5px]"><span className="text-[10px] font-semibold text-[#138978]">Partnership Journey</span></div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#141414] text-[18px] md:text-[20px] font-medium leading-[1.1] mb-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <p className="text-[16px] text-black/66 leading-[1.2] mb-5">
                    {`Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.`}
                  </p>
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
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="blog-watch-stories" className="mx-auto w-full max-w-[1440px] bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-24 py-10 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 id="blog-watch-stories" className="text-[#141414] font-['Aeonik Pro'] font-medium leading-[1.1] text-[35px] sm:text-[35px] md:text-[40px] lg:text-[56px]">
              Watch Stories
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <button aria-label="Previous" className="h-[50px] w-[50px] rounded-[10px] border border-black/25 bg-gray-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button aria-label="Next" className="h-[50px] w-[50px] rounded-[10px] border border-black/25 bg-gray-50 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <button className="hidden md:flex items-center gap-2 text-[#141414] text-[20px] lg:text-[32px]">
                View All
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <article key={idx} className="relative rounded-[10px] overflow-hidden border border-black/15 bg-white shadow-[0px_63px_25px_rgba(38,142,151,0.02),0px_36px_21px_rgba(38,142,151,0.08),0px_16px_16px_rgba(38,142,151,0.13),0px_4px_9px_rgba(38,142,151,0.15)]">
                <div className="relative h-[220px] sm:h-[260px] md:h-[280px]">
                  <Image src="/blog-page/section2/image.svg" alt="Video cover" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="rounded-full bg-white/30 p-5">
                      <div className="rounded-full bg-white p-2.5">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7-11-7z" fill="#138978" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#141414] text-[20px] md:text-[24px] font-medium leading-[1.1] mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h3>
                  <div className="flex items-center justify-between text-[#141414] text-[16px] md:text-[20px]">
                    <span>By Cory Vanderpool</span>
                    <span className="text-black/66 text-[16px]">1:30 mins.</span>
                  </div>
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
