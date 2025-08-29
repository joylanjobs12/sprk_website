import ScrollToTop from "@/components/ScrollToTop";

export default function Company() {
  return (
    <>
      <section className="w-full ">
        {/* Hero Section */}
        <div className="box-border flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-20 xl:gap-20 2xl:gap-20 items-center justify-start pb-8 sm:pb-12 md:pb-16 lg:pb-[50px] xl:pb-[50px] 2xl:pb-[50px] pt-16 sm:pt-20 md:pt-24 lg:pt-[150px] xl:pt-[150px] 2xl:pt-[150px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 w-full">

          <div className="flex flex-col items-start justify-start w-full">
            <header className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start w-full">
              <div className="box-border flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-center justify-start px-2.5 py-0 w-full">

                {/* Main Headline */}
                <h1 className="text-center w-full text-black mb-4 sm:mb-6 md:mb-8 lg:mb-6 xl:mb-6 2xl:mb-6"
                  style={{
                    fontSize: '40px',
                    lineHeight: '200%',
                    fontWeight: 500,
                    fontFamily: '"Aeonik Pro", sans-serif'
                  }}>
                  <span className="sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px]">
                    The <span className="text-[#115056]">Solar Story</span>
                  </span>
                  <br />
                  <span className="sm:text-[40px] md:text-[40px] lg:text-[80px] xl:text-[80px] 2xl:text-[80px]">
                    You Haven't Heard
                  </span>
                </h1>

                {/* Subtitle */}
                <div className="box-border flex items-center justify-center px-2.5 py-0 w-full">
                  <p className="text-center text-black opacity-66 mb-4 sm:mb-6 md:mb-8 lg:mb-4 xl:mb-4 2xl:mb-4"
                    style={{
                      fontSize: '16px',
                      lineHeight: '120%',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    <span className="sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                      Beneath the surface of the solar boom is a broken process solar homes are undervalued, underdisclosed,
                      <br />
                      and misunderstood in real estate transactions. Sprk exists to change that.
                    </span>
                  </p>
                </div>

              </div>
            </header>
          </div>

        </div>
      </section>
      <section className="w-full min-h-screen">
        {/* Masonry Grid Layout */}
        <div className="box-border flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 items-start justify-center pb-16 sm:pb-20 md:pb-24 lg:pb-[100px] xl:pb-[100px] 2xl:pb-[100px] pt-8 sm:pt-10 md:pt-12 lg:pt-[50px] xl:pt-[50px] 2xl:pt-[50px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 w-full overflow-x-auto">

          {/* Column 1 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 items-start justify-start shrink-0">
            <div
              className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/imag1.svg')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image2.svg')` }}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 items-start justify-start shrink-0">
            <div
              className="bg-center bg-cover bg-no-repeat h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image3.svg')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image4.svg')` }}
            />
          </div>

          {/* Column 3 - Center column with different alignment */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 items-center justify-start shrink-0">
            <div
              className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image5.svg')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image6.svg')` }}
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 items-start justify-start shrink-0">
            <div
              className="bg-center bg-cover bg-no-repeat h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image7.svg')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image8.svg')` }}
            />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-6 items-start justify-start shrink-0">
            <div
              className="bg-center bg-cover bg-no-repeat h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image9.svg')` }}
            />
            <div
              className="bg-center bg-cover bg-no-repeat h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[230px] xl:w-[230px] 2xl:w-[230px]"
              style={{ backgroundImage: `url('/company/section 1/image10.svg')` }}
            />
          </div>

        </div>
      </section>
      <section className="w-full">
        {/* Company Vision Section */}
        <div className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:py-[100px] 2xl:py-[100px] w-full">

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start w-full">

            {/* Left Column - Title */}
            <div className="flex-1 flex items-start justify-center lg:justify-start">
              <h2 className="text-[#141414] mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                style={{
                  fontSize: '35px',
                  lineHeight: '110%',
                  fontWeight: 500,
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}>
                <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                  Our Company Vision
                </span>
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 flex items-start justify-center lg:justify-start pt-0 lg:pt-[15px] xl:pt-[15px] 2xl:pt-[15px]">
              <div className="w-full">
                {/* Subtitle */}
                <h3 className="text-[#141414] mb-4 sm:mb-6 md:mb-8 lg:mb-6 xl:mb-6 2xl:mb-6"
                  style={{
                    fontSize: '25px',
                    lineHeight: '110%',
                    fontWeight: 500,
                    fontFamily: '"Aeonik Pro", sans-serif'
                  }}>
                  <span className="sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px]">
                    Sprk a Brighter Future
                  </span>
                </h3>

                {/* Description */}
                <p className="text-black opacity-66 mb-4 sm:mb-6 md:mb-8 lg:mb-4 xl:mb-4 2xl:mb-4"
                  style={{
                    fontSize: '18px',
                    lineHeight: '120%',
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif'
                  }}>
                  <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    We see a future where solar homes are clear, valued, and fully supported—so energy upgrades aren't just installed, they're understood.
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Image/Video Section */}
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] w-full relative border border-gray-200"
              style={{ backgroundImage: `url('/company/section 2/image1.svg')` }}>
              {/* Optional overlay for better contrast */}
              <div className="absolute inset-0 border border-black/20 rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] pointer-events-none" />
            </div>
          </div>

        </div>
      </section>
      <section className="w-full bg-[#115056]">
        {/* Our Mission Section */}
        <div className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 py-20 sm:py-24 md:py-28 lg:py-[150px] xl:py-[150px] 2xl:py-[150px] w-full">

          {/* Content Container */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start w-full max-w-[1248px]">

            {/* Title */}
            <div className="flex items-start justify-center w-full">
              <h2 className="text-white text-center mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                style={{
                  fontSize: '35px',
                  lineHeight: '110%',
                  fontWeight: 500,
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}>
                <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                  Our Mission
                </span>
              </h2>
            </div>

            {/* Mission Description */}
            <div className="box-border flex items-start justify-center pt-0 lg:pt-[15px] xl:pt-[15px] 2xl:pt-[15px] w-full">
              <div className="text-center text-white/80 mb-4 sm:mb-6 md:mb-8 lg:mb-4 xl:mb-4 2xl:mb-4 w-full"
                style={{
                  fontSize: '18px',
                  lineHeight: '120%',
                  fontWeight: 400,
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}>
                <p className="mb-4 sm:mb-6 md:mb-8 lg:mb-6 xl:mb-6 2xl:mb-6">
                  <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    To simplify and elevate the experience and value of solar homeownership—everywhere.
                  </span>
                </p>
                <p className="mb-0">
                  <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    We believe solar is one of the most important and valuable home assets of our time—but only when the systems are functional, understood, and financially visible. Sprk exists to make that possible.
                  </span>
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] w-full relative"
                style={{ backgroundImage: `url('/company/section 3/image.svg')` }}>
                {/* Optional overlay for better contrast */}
                <div className="absolute inset-0 border border-black/20 rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="w-full">
        {/* The Problem We Seek to Solve Section */}
        <div className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:py-[100px] 2xl:py-[100px] w-full">

          {/* Content Container */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start w-full">

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-10 items-start justify-start w-full">

              {/* Left Column - Content */}
              <div className="flex-1 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start">

                {/* Title */}
                <div className="flex items-start justify-center lg:justify-start w-full">
                  <h2 className="text-[#141414] text-center lg:text-left mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                    style={{
                      fontSize: '35px',
                      lineHeight: '110%',
                      fontWeight: 500,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                      The Problem We Seek to Solve
                    </span>
                  </h2>
                </div>

                {/* Description */}
                <div className="box-border flex items-start justify-center lg:justify-start pt-0 lg:pt-[15px] xl:pt-[15px] 2xl:pt-[15px] w-full">
                  <div className="text-center lg:text-left text-black/66 mb-4 sm:mb-6 md:mb-8 lg:mb-4 xl:mb-4 2xl:mb-4 w-full"
                    style={{
                      fontSize: '18px',
                      lineHeight: '120%',
                      fontWeight: 400,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <p className="mb-4 sm:mb-6 md:mb-8 lg:mb-4 xl:mb-4 2xl:mb-4">
                      <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                        When solar homes hit the market, they're often misunderstood, underdisclosed, or undervalued.
                      </span>
                    </p>
                    <p className="mb-4 sm:mb-6 md:mb-8 lg:mb-4 xl:mb-4 2xl:mb-4">
                      <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                        That leads to buyer confusion, seller losses, and failed deals.
                      </span>
                    </p>
                    <p className="mb-0">
                      <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                        Sprk bridges the gap delivering tools, training, and reports that make solar visible, verifiable, and transferable.
                      </span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column - Image */}
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] lg:h-[425px] xl:h-[425px] 2xl:h-[425px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] w-full relative"
                  style={{ backgroundImage: `url('/company/section 4/image1.svg')` }}>
                  {/* Optional overlay for better contrast */}
                  <div className="absolute inset-0 border border-black/20 rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] pointer-events-none" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="w-full">
        {/* What Makes Sprk Different Section */}
        <div className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:py-[100px] 2xl:py-[100px] w-full">

          {/* Content Container */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start w-full">

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-10 items-start justify-start w-full">

              {/* Left Column - Image */}
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[450px] 2xl:h-[450px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] w-full relative"
                  style={{ backgroundImage: `url('/company/section 5/image1.svg')` }}>
                  {/* Optional overlay for better contrast */}
                  <div className="absolute inset-0 border border-black/20 rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] pointer-events-none" />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="flex-1 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start">

                {/* Title */}
                <div className="flex items-start justify-center lg:justify-start w-full">
                  <h2 className="text-[#141414] text-center lg:text-left mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                    style={{
                      fontSize: '35px',
                      lineHeight: '110%',
                      fontWeight: 500,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                      What Makes Sprk Different
                    </span>
                  </h2>
                </div>

                {/* Content */}
                <div className="box-border flex items-start justify-center lg:justify-start pt-0 lg:pt-[15px] xl:pt-[15px] 2xl:pt-[15px] w-full">
                  <div className="text-center lg:text-left w-full">

                    {/* Main Statement */}
                    <h3 className="text-[#141414] mb-4 sm:mb-6 md:mb-8 lg:mb-6 xl:mb-6 2xl:mb-6"
                      style={{
                        fontSize: '25px',
                        lineHeight: '110%',
                        fontWeight: 500,
                        fontFamily: '"Aeonik Pro", sans-serif'
                      }}>
                      <span className="sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px]">
                        We don't sell, install or service solar. We support solar homeowners.
                      </span>
                    </h3>

                    {/* Supporting Text */}
                    <div className="text-black/66 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4 xl:space-y-4 2xl:space-y-4"
                      style={{
                        fontSize: '18px',
                        lineHeight: '120%',
                        fontWeight: 400,
                        fontFamily: '"Aeonik Pro", sans-serif'
                      }}>
                      <p className="mb-0">
                        <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                          We're the missing support system for solar homeowners and the professionals who serve them.
                        </span>
                      </p>
                      <p className="mb-0">
                        <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                          Founded by Cory Vanderpool, solar expert and real estate insider.
                        </span>
                      </p>
                      <p className="mb-0">
                        <span className="sm:text-[18px] md:text-[18px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                          Sprk was built to solve the solar real estate disconnect from the ground up.
                        </span>
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="w-full bg-[#115056]">
        {/* Why It Matters: The Solar Problem in Numbers Section */}
        <div className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 py-20 sm:py-24 md:py-28 lg:py-[150px] xl:py-[150px] 2xl:py-[150px] w-full">

          {/* Content Container */}
          <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-[60px] xl:gap-[60px] 2xl:gap-[60px] items-start justify-start w-full max-w-[1248px]">

            {/* Title Section */}
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-start justify-start w-full">
              <div className="flex items-start justify-center w-full">
                <h2 className="text-white text-center mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                  style={{
                    fontSize: '35px',
                    lineHeight: '110%',
                    fontWeight: 500,
                    fontFamily: '"Aeonik Pro", sans-serif'
                  }}>
                  <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                    Why It Matters: The Solar Problem in Numbers
                  </span>
                </h2>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-start justify-start w-full">

              {/* Statistic 1 */}
              <div className="flex-1 flex flex-col gap-2 sm:gap-2 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 2xl:gap-2.5 items-start justify-start">
                <div className="flex items-start justify-center w-full">
                  <h3 className="text-white text-center mb-0"
                    style={{
                      fontSize: '32px',
                      lineHeight: '110%',
                      fontWeight: 700,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <span className="sm:text-[32px] md:text-[35px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px]">
                      $1 billion+
                    </span>
                  </h3>
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className="text-white/80 text-center mb-0"
                    style={{
                      fontSize: '16px',
                      lineHeight: '120%',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]">
                      in lost home equity<br />each year
                    </span>
                  </p>
                </div>
              </div>

              {/* Statistic 2 */}
              <div className="flex-1 flex flex-col gap-2 sm:gap-2 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 2xl:gap-2.5 items-start justify-start">
                <div className="flex items-start justify-center w-full">
                  <h3 className="text-white text-center mb-0"
                    style={{
                      fontSize: '32px',
                      lineHeight: '110%',
                      fontWeight: 700,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <span className="sm:text-[32px] md:text-[35px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px]">
                      5 million
                    </span>
                  </h3>
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className="text-white/80 text-center mb-0"
                    style={{
                      fontSize: '16px',
                      lineHeight: '120%',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]">
                      solar homes in the U.S.<br />(and growing)
                    </span>
                  </p>
                </div>
              </div>

              {/* Statistic 3 */}
              <div className="flex-1 flex flex-col gap-2 sm:gap-2 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 2xl:gap-2.5 items-start justify-start">
                <div className="flex items-start justify-center w-full">
                  <h3 className="text-white text-center mb-0"
                    style={{
                      fontSize: '32px',
                      lineHeight: '110%',
                      fontWeight: 700,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <span className="sm:text-[32px] md:text-[35px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px]">
                      30%
                    </span>
                  </h3>
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className="text-white/80 text-center mb-0"
                    style={{
                      fontSize: '16px',
                      lineHeight: '120%',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]">
                      of solar homes need work<br />when a home sells
                    </span>
                  </p>
                </div>
              </div>

              {/* Statistic 4 */}
              <div className="flex-1 flex flex-col gap-2 sm:gap-2 md:gap-2.5 lg:gap-2.5 xl:gap-2.5 2xl:gap-2.5 items-start justify-start">
                <div className="flex items-start justify-center w-full">
                  <h3 className="text-white text-center mb-0"
                    style={{
                      fontSize: '32px',
                      lineHeight: '110%',
                      fontWeight: 700,
                      fontFamily: '"Aeonik Pro", sans-serif'
                    }}>
                    <span className="sm:text-[32px] md:text-[35px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px]">
                      Less than 1%
                    </span>
                  </h3>
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className="text-white/80 text-center mb-0"
                    style={{
                      fontSize: '16px',
                      lineHeight: '120%',
                      fontWeight: 400,
                      fontFamily: 'Inter, sans-serif'
                    }}>
                    <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[110%] xl:leading-[110%] 2xl:leading-[110%]">
                      of homes with solar were<br />inspected before 2024
                    </span>
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="w-full">
        {/* The Team Behind the Spark Section */}
        <div className="box-border flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[50px] xl:gap-[50px] 2xl:gap-[50px] items-center justify-start px-0 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:py-[100px] 2xl:py-[100px] w-full">

          {/* Header Section */}
          <div className="box-border flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] xl:gap-[30px] 2xl:gap-[30px] items-center justify-start px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 w-full">

            {/* Title */}
            <div className="flex items-start justify-center w-full">
              <h2 className="text-[#141414] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                style={{
                  fontSize: '35px',
                  lineHeight: '110%',
                  fontWeight: 500,
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}>
                <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                  The Team Behind the Spark
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="box-border flex items-center justify-center px-2.5 py-0 w-full">
              <div className="text-center text-black/66 mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0 max-w-4xl"
                style={{
                  fontSize: '16px',
                  lineHeight: '120%',
                  fontWeight: 400,
                  fontFamily: 'Inter, sans-serif'
                }}>
                <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-2 xl:mb-2 2xl:mb-2">
                  <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    Real estate pros. Solar veterans. Field-tested educators.
                  </span>
                </p>
                <p className="mb-0">
                  <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    We've seen what's broken. We're building what's better.
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Team Cards Section */}
          <div className="box-border flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 w-full">

            {/* Team Member Card 1 */}
            <div className="flex-1 bg-white rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] border border-black/15 overflow-hidden max-w-sm lg:max-w-none">
              <div className="flex flex-col items-start justify-start w-full">
                {/* Profile Image */}
                <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] w-full"
                  style={{ backgroundImage: `url('/company/section 7/profile.svg')` }}>
                </div>

                {/* Content */}
                <div className="box-border flex flex-col items-start justify-start p-8 sm:p-10 md:p-12 lg:p-[50px] xl:p-[50px] 2xl:p-[50px] w-full">
                  <div className="flex flex-col gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px] items-start justify-start w-full">

                    {/* Name */}
                    <div className="flex items-center justify-center w-full">
                      <h3 className="text-[#141414] text-center mb-0"
                        style={{
                          fontSize: '25px',
                          lineHeight: '110%',
                          fontWeight: 500,
                          fontFamily: '"Aeonik Pro", sans-serif'
                        }}>
                        <span className="sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]">
                          Cory Vanderpool
                        </span>
                      </h3>
                    </div>

                    {/* Title & Description */}
                    <div className="flex items-center justify-center w-full">
                      <div className="text-center text-black/66"
                        style={{
                          fontSize: '16px',
                          lineHeight: '120%',
                          fontWeight: 400,
                          fontFamily: 'Inter, sans-serif'
                        }}>
                        <p className="mb-1 sm:mb-1 md:mb-2 lg:mb-1 xl:mb-1 2xl:mb-1">
                          <span className="sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                            Founder, CEO
                          </span>
                        </p>
                        <p className="mb-0">
                          <span className="sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                            Creator of the Sprk Certification Model
                          </span>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Team Member Card 2 */}
            <div className="flex-1 bg-white rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] border border-black/15 overflow-hidden max-w-sm lg:max-w-none">
              <div className="flex flex-col items-start justify-start w-full">
                {/* Profile Image */}
                <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] w-full"
                  style={{ backgroundImage: `url('/company/section 7/profile.svg')` }}>
                </div>

                {/* Content */}
                <div className="box-border flex flex-col items-start justify-start p-8 sm:p-10 md:p-12 lg:p-[50px] xl:p-[50px] 2xl:p-[50px] w-full">
                  <div className="flex flex-col gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px] items-start justify-start w-full">

                    {/* Name */}
                    <div className="flex items-center justify-center w-full">
                      <h3 className="text-[#141414] text-center mb-0"
                        style={{
                          fontSize: '25px',
                          lineHeight: '110%',
                          fontWeight: 500,
                          fontFamily: '"Aeonik Pro", sans-serif'
                        }}>
                        <span className="sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]">
                          Cory Vanderpool
                        </span>
                      </h3>
                    </div>

                    {/* Title & Description */}
                    <div className="flex items-center justify-center w-full">
                      <div className="text-center text-black/66"
                        style={{
                          fontSize: '16px',
                          lineHeight: '120%',
                          fontWeight: 400,
                          fontFamily: 'Inter, sans-serif'
                        }}>
                        <p className="mb-1 sm:mb-1 md:mb-2 lg:mb-1 xl:mb-1 2xl:mb-1">
                          <span className="sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                            Founder, CEO
                          </span>
                        </p>
                        <p className="mb-0">
                          <span className="sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                            Creator of the Sprk Certification Model
                          </span>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Team Member Card 3 */}
            <div className="flex-1 bg-white rounded-[8px] sm:rounded-[9px] md:rounded-[10px] lg:rounded-[10px] xl:rounded-[10px] 2xl:rounded-[10px] border border-black/15 overflow-hidden max-w-sm lg:max-w-none">
              <div className="flex flex-col items-start justify-start w-full">
                {/* Profile Image */}
                <div className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] w-full"
                  style={{ backgroundImage: `url('/company/section 7/profile.svg')` }}>
                </div>

                {/* Content */}
                <div className="box-border flex flex-col items-start justify-start p-8 sm:p-10 md:p-12 lg:p-[50px] xl:p-[50px] 2xl:p-[50px] w-full">
                  <div className="flex flex-col gap-1 sm:gap-1 md:gap-1 lg:gap-[5px] xl:gap-[5px] 2xl:gap-[5px] items-start justify-start w-full">

                    {/* Name */}
                    <div className="flex items-center justify-center w-full">
                      <h3 className="text-[#141414] text-center mb-0"
                        style={{
                          fontSize: '25px',
                          lineHeight: '110%',
                          fontWeight: 500,
                          fontFamily: '"Aeonik Pro", sans-serif'
                        }}>
                        <span className="sm:text-[25px] md:text-[28px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px]">
                          Cory Vanderpool
                        </span>
                      </h3>
                    </div>

                    {/* Title & Description */}
                    <div className="flex items-center justify-center w-full">
                      <div className="text-center text-black/66"
                        style={{
                          fontSize: '16px',
                          lineHeight: '120%',
                          fontWeight: 400,
                          fontFamily: 'Inter, sans-serif'
                        }}>
                        <p className="mb-1 sm:mb-1 md:mb-2 lg:mb-1 xl:mb-1 2xl:mb-1">
                          <span className="sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                            Founder, CEO
                          </span>
                        </p>
                        <p className="mb-0">
                          <span className="sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                            Creator of the Sprk Certification Model
                          </span>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="w-full bg-[#115056]">
        {/* Join the Movement Section */}
        <div className="box-border flex flex-col items-center justify-start px-0 py-16 sm:py-20 md:py-24 lg:py-[100px] xl:py-[100px] 2xl:py-[100px] w-full">

          {/* Header Section */}
          <div className="box-border flex flex-col gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 items-center justify-start pb-0 pt-8 sm:pt-10 md:pt-12 lg:pt-[50px] xl:pt-[50px] 2xl:pt-[50px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 w-full">

            {/* Title */}
            <div className="flex items-start justify-center w-full">
              <h2 className="text-white text-center mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0"
                style={{
                  fontSize: '35px',
                  lineHeight: '110%',
                  fontWeight: 500,
                  fontFamily: '"Aeonik Pro", sans-serif'
                }}>
                <span className="sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px]">
                  Join the Movement
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="flex items-start justify-center w-full">
              <div className="text-center text-white/80 mb-4 sm:mb-6 md:mb-8 lg:mb-0 xl:mb-0 2xl:mb-0 max-w-4xl"
                style={{
                  fontSize: '16px',
                  lineHeight: '120%',
                  fontWeight: 400,
                  fontFamily: 'Inter, sans-serif'
                }}>
                <p className="mb-2 sm:mb-3 md:mb-4 lg:mb-2 xl:mb-2 2xl:mb-2">
                  <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    No more guesswork. No more skipped solar.
                  </span>
                </p>
                <p className="mb-0">
                  <span className="sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    Let's build a future where every solar home gets the value it deserves.
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="bg-[#115056] flex flex-col items-center justify-start w-full">
            <div className="bg-center bg-contain bg-no-repeat h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[1031px] 2xl:h-[1031px] w-full"
              style={{ backgroundImage: `url('/company/section 8/map.svg')` }}>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="box-border flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-5 2xl:gap-5 items-start justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-24 py-8 sm:py-10 md:py-12 lg:py-[50px] xl:py-[50px] 2xl:py-[50px] w-full">

            {/* Button 1 - Become a Certified Pro */}
            <div className="bg-white box-border flex items-start justify-center p-[5px] rounded-[5px] border border-[#115056] w-full sm:w-full md:w-[418px] lg:w-[418px] xl:w-[418px] 2xl:w-[418px] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                <div className="flex-1 text-[#141414] text-center"
                  style={{
                    fontSize: '18px',
                    lineHeight: '120%',
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif'
                  }}>
                  <span className="sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    Become a Certified Pro
                  </span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px] 2xl:w-[30px] 2xl:h-[30px] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 text-[#141414]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Button 2 - Find a Certified Pro */}
            <div className="bg-white box-border flex items-start justify-center p-[5px] rounded-[5px] border border-[#115056] w-full sm:w-full md:w-[418px] lg:w-[418px] xl:w-[418px] 2xl:w-[418px] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                <div className="flex-1 text-[#141414] text-center"
                  style={{
                    fontSize: '18px',
                    lineHeight: '120%',
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif'
                  }}>
                  <span className="sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    Find a Certified Pro
                  </span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px] 2xl:w-[30px] 2xl:h-[30px] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 text-[#141414]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Button 3 - See Sprk Reports */}
            <div className="bg-white box-border flex items-start justify-center p-[5px] rounded-[5px] border border-[#115056] w-full sm:w-full md:w-[418px] lg:w-[418px] xl:w-[418px] 2xl:w-[418px] cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                <div className="flex-1 text-[#141414] text-center"
                  style={{
                    fontSize: '18px',
                    lineHeight: '120%',
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif'
                  }}>
                  <span className="sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] sm:leading-[120%] md:leading-[120%] lg:leading-[120%] xl:leading-[120%] 2xl:leading-[120%]">
                    See Sprk Reports
                  </span>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[30px] xl:h-[30px] 2xl:w-[30px] 2xl:h-[30px] flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 text-[#141414]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <ScrollToTop />
    </>
  );
}
