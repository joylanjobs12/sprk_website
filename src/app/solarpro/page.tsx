import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function SolarProPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[40px] sm:pb-[60px] lg:pb-[80px]">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-7 lg:gap-8">
          <h1
            className="max-w-[1000px]"
            style={{
              color: "var(--Primary-Color, #115056)",
              fontFamily: '"Aeonik Pro", sans-serif',
              fontSize: 80,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "110%",
              textAlign: "center",
            }}
          >
            <span>Do More Than Get Solar</span>
            <br />
            <span style={{ color: "var(--Text-Title, #141414)" }}>on Their Roof</span>
          </h1>

          <p
            className={`${inter.className}`}
            style={{
              flex: "1 0 0",
              color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
              textAlign: "center",
              fontFamily: '"Inter", sans-serif',
              fontSize: 22,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
            }}
          >
            Sprk equips solar professionals with tools to sell smarter, support longer, and help homeowners
            understand their system now and years from now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#certified"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-[#115056] text-white text-[14px] font-semibold leading-[110%]"
            >
              Get Sprk Certified
            </Link>
            <Link
              href="#estimator"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-white border border-[#115056] text-[#115056] text-[14px] font-semibold leading-[110%]"
            >
              Use the Solar Estimator
            </Link>
          </div>

        </div>
      </section>
      {/* Section 2 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[100px] pb-[100px]">
          <div className="text-center w-full">
            <h2
              className="mb-4 text-center"
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: "Aeonik Pro",
                fontSize: "56px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              Why Solar Professionals Choose Sprk
            </h2>
            <h3
              className="mb-6 text-center"
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: "Aeonik Pro",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              Sprk Helps You Stand Out in a Market That's Changing
            </h3>
            <p
              className={`${inter.className} mb-12 text-center`}
              style={{
                color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                fontFamily: "Inter",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "120%",
              }}
            >
              Most solar companies stop at the install. But the homeowners you serve deserve more.
              Sprk helps you become the kind of solar partner that stays relevant long after the panels go up.
            </p>
          </div>

          <div 
            className="flex flex-wrap items-start content-start rounded-[10px] border bg-white"
            style={{
              width: "1248px",
              height: "500px",
              borderColor: "rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="flex items-start self-stretch" style={{ height: "500px", minWidth: "350px" }}>
              <Image
                src="/solar-pro-page/section 2/solar-professionals.svg"
                alt="Solar professionals working with Sprk"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="flex flex-col items-start p-[30px] flex-1" style={{ height: "500px", minWidth: "350px", gap: "35px" }}>
              <h4
                className="mb-6"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: "Aeonik Pro",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                What Sprk Does for Solar Companies
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.4831 5.25948C6.33867 5.38738 5.42262 6.29063 5.29021 7.42274C4.93451 10.4639 4.93451 13.5361 5.29021 16.5773C5.42262 17.7094 6.33867 18.6126 7.4831 18.7405C10.4599 19.0732 13.5396 19.0732 16.5164 18.7405C17.6608 18.6126 18.5769 17.7094 18.7093 16.5773C18.9648 14.3921 19.0368 12.1909 18.9251 9.99674C18.9222 9.94008 18.9434 9.88481 18.9835 9.84469L20.0223 8.80591C20.1425 8.68568 20.3479 8.76086 20.3607 8.93042C20.5567 11.5353 20.5029 14.1544 20.1991 16.7515C19.9843 18.5885 18.5094 20.0271 16.683 20.2313C13.5954 20.5763 10.404 20.5763 7.31649 20.2313C5.49011 20.0271 4.01521 18.5885 3.80036 16.7515C3.43113 13.5946 3.43113 10.4054 3.80036 7.24849C4.01521 5.41153 5.49011 3.97288 7.31649 3.76876C10.404 3.42368 13.5954 3.42368 16.683 3.76876C17.3262 3.84065 17.9259 4.06568 18.4423 4.40732C18.5439 4.47454 18.5539 4.61738 18.4678 4.70353L17.6649 5.50641C17.5992 5.57208 17.4974 5.58313 17.4155 5.53926C17.1421 5.39277 16.8383 5.29545 16.5164 5.25948C13.5396 4.92677 10.4599 4.92677 7.4831 5.25948Z" fill="#115056"/>
                      <path d="M21.0301 6.03034C21.3229 5.73744 21.3229 5.26257 21.0301 4.96968C20.7372 4.67678 20.2623 4.67678 19.9694 4.96968L11.4997 13.4393L9.03006 10.9697C8.73716 10.6768 8.26229 10.6768 7.9694 10.9697C7.6765 11.2626 7.6765 11.7374 7.9694 12.0303L10.9694 15.0303C11.2623 15.3232 11.7372 15.3232 12.0301 15.0303L21.0301 6.03034Z" fill="#115056"/>
                    </svg>
                  </div>
                  <p
                    className={`${inter.className}`}
                    style={{
                      color: "#141414",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    Attract new leads with a homeowner-facing Solar Calculator
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.4831 5.25948C6.33867 5.38738 5.42262 6.29063 5.29021 7.42274C4.93451 10.4639 4.93451 13.5361 5.29021 16.5773C5.42262 17.7094 6.33867 18.6126 7.4831 18.7405C10.4599 19.0732 13.5396 19.0732 16.5164 18.7405C17.6608 18.6126 18.5769 17.7094 18.7093 16.5773C18.9648 14.3921 19.0368 12.1909 18.9251 9.99674C18.9222 9.94008 18.9434 9.88481 18.9835 9.84469L20.0223 8.80591C20.1425 8.68568 20.3479 8.76086 20.3607 8.93042C20.5567 11.5353 20.5029 14.1544 20.1991 16.7515C19.9843 18.5885 18.5094 20.0271 16.683 20.2313C13.5954 20.5763 10.404 20.5763 7.31649 20.2313C5.49011 20.0271 4.01521 18.5885 3.80036 16.7515C3.43113 13.5946 3.43113 10.4054 3.80036 7.24849C4.01521 5.41153 5.49011 3.97288 7.31649 3.76876C10.404 3.42368 13.5954 3.42368 16.683 3.76876C17.3262 3.84065 17.9259 4.06568 18.4423 4.40732C18.5439 4.47454 18.5539 4.61738 18.4678 4.70353L17.6649 5.50641C17.5992 5.57208 17.4974 5.58313 17.4155 5.53926C17.1421 5.39277 16.8383 5.29545 16.5164 5.25948C13.5396 4.92677 10.4599 4.92677 7.4831 5.25948Z" fill="#115056"/>
                      <path d="M21.0301 6.03034C21.3229 5.73744 21.3229 5.26257 21.0301 4.96968C20.7372 4.67678 20.2623 4.67678 19.9694 4.96968L11.4997 13.4393L9.03006 10.9697C8.73716 10.6768 8.26229 10.6768 7.9694 10.9697C7.6765 11.2626 7.6765 11.7374 7.9694 12.0303L10.9694 15.0303C11.2623 15.3232 11.7372 15.3232 12.0301 15.0303L21.0301 6.03034Z" fill="#115056"/>
                    </svg>
                  </div>
                  <p
                    className={`${inter.className}`}
                    style={{
                      color: "#141414",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    Create proposals that include energy upgrades, solar, and batteries
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.4831 5.25948C6.33867 5.38738 5.42262 6.29063 5.29021 7.42274C4.93451 10.4639 4.93451 13.5361 5.29021 16.5773C5.42262 17.7094 6.33867 18.6126 7.4831 18.7405C10.4599 19.0732 13.5396 19.0732 16.5164 18.7405C17.6608 18.6126 18.5769 17.7094 18.7093 16.5773C18.9648 14.3921 19.0368 12.1909 18.9251 9.99674C18.9222 9.94008 18.9434 9.88481 18.9835 9.84469L20.0223 8.80591C20.1425 8.68568 20.3479 8.76086 20.3607 8.93042C20.5567 11.5353 20.5029 14.1544 20.1991 16.7515C19.9843 18.5885 18.5094 20.0271 16.683 20.2313C13.5954 20.5763 10.404 20.5763 7.31649 20.2313C5.49011 20.0271 4.01521 18.5885 3.80036 16.7515C3.43113 13.5946 3.43113 10.4054 3.80036 7.24849C4.01521 5.41153 5.49011 3.97288 7.31649 3.76876C10.404 3.42368 13.5954 3.42368 16.683 3.76876C17.3262 3.84065 17.9259 4.06568 18.4423 4.40732C18.5439 4.47454 18.5539 4.61738 18.4678 4.70353L17.6649 5.50641C17.5992 5.57208 17.4974 5.58313 17.4155 5.53926C17.1421 5.39277 16.8383 5.29545 16.5164 5.25948C13.5396 4.92677 10.4599 4.92677 7.4831 5.25948Z" fill="#115056"/>
                      <path d="M21.0301 6.03034C21.3229 5.73744 21.3229 5.26257 21.0301 4.96968C20.7372 4.67678 20.2623 4.67678 19.9694 4.96968L11.4997 13.4393L9.03006 10.9697C8.73716 10.6768 8.26229 10.6768 7.9694 10.9697C7.6765 11.2626 7.6765 11.7374 7.9694 12.0303L10.9694 15.0303C11.2623 15.3232 11.7372 15.3232 12.0301 15.0303L21.0301 6.03034Z" fill="#115056"/>
                    </svg>
                  </div>
                  <p
                    className={`${inter.className}`}
                    style={{
                      color: "#141414",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    Sell and install using Sprk's real estate-ready reports
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.4831 5.25948C6.33867 5.38738 5.42262 6.29063 5.29021 7.42274C4.93451 10.4639 4.93451 13.5361 5.29021 16.5773C5.42262 17.7094 6.33867 18.6126 7.4831 18.7405C10.4599 19.0732 13.5396 19.0732 16.5164 18.7405C17.6608 18.6126 18.5769 17.7094 18.7093 16.5773C18.9648 14.3921 19.0368 12.1909 18.9251 9.99674C18.9222 9.94008 18.9434 9.88481 18.9835 9.84469L20.0223 8.80591C20.1425 8.68568 20.3479 8.76086 20.3607 8.93042C20.5567 11.5353 20.5029 14.1544 20.1991 16.7515C19.9843 18.5885 18.5094 20.0271 16.683 20.2313C13.5954 20.5763 10.404 20.5763 7.31649 20.2313C5.49011 20.0271 4.01521 18.5885 3.80036 16.7515C3.43113 13.5946 3.43113 10.4054 3.80036 7.24849C4.01521 5.41153 5.49011 3.97288 7.31649 3.76876C10.404 3.42368 13.5954 3.42368 16.683 3.76876C17.3262 3.84065 17.9259 4.06568 18.4423 4.40732C18.5439 4.47454 18.5539 4.61738 18.4678 4.70353L17.6649 5.50641C17.5992 5.57208 17.4974 5.58313 17.4155 5.53926C17.1421 5.39277 16.8383 5.29545 16.5164 5.25948C13.5396 4.92677 10.4599 4.92677 7.4831 5.25948Z" fill="#115056"/>
                      <path d="M21.0301 6.03034C21.3229 5.73744 21.3229 5.26257 21.0301 4.96968C20.7372 4.67678 20.2623 4.67678 19.9694 4.96968L11.4997 13.4393L9.03006 10.9697C8.73716 10.6768 8.26229 10.6768 7.9694 10.9697C7.6765 11.2626 7.6765 11.7374 7.9694 12.0303L10.9694 15.0303C11.2623 15.3232 11.7372 15.3232 12.0301 15.0303L21.0301 6.03034Z" fill="#115056"/>
                    </svg>
                  </div>
                  <p
                    className={`${inter.className}`}
                    style={{
                      color: "#141414",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    Give clients a mobile app to store solar and resale documents
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.4831 5.25948C6.33867 5.38738 5.42262 6.29063 5.29021 7.42274C4.93451 10.4639 4.93451 13.5361 5.29021 16.5773C5.42262 17.7094 6.33867 18.6126 7.4831 18.7405C10.4599 19.0732 13.5396 19.0732 16.5164 18.7405C17.6608 18.6126 18.5769 17.7094 18.7093 16.5773C18.9648 14.3921 19.0368 12.1909 18.9251 9.99674C18.9222 9.94008 18.9434 9.88481 18.9835 9.84469L20.0223 8.80591C20.1425 8.68568 20.3479 8.76086 20.3607 8.93042C20.5567 11.5353 20.5029 14.1544 20.1991 16.7515C19.9843 18.5885 18.5094 20.0271 16.683 20.2313C13.5954 20.5763 10.404 20.5763 7.31649 20.2313C5.49011 20.0271 4.01521 18.5885 3.80036 16.7515C3.43113 13.5946 3.43113 10.4054 3.80036 7.24849C4.01521 5.41153 5.49011 3.97288 7.31649 3.76876C10.404 3.42368 13.5954 3.42368 16.683 3.76876C17.3262 3.84065 17.9259 4.06568 18.4423 4.40732C18.5439 4.47454 18.5539 4.61738 18.4678 4.70353L17.6649 5.50641C17.5992 5.57208 17.4974 5.58313 17.4155 5.53926C17.1421 5.39277 16.8383 5.29545 16.5164 5.25948C13.5396 4.92677 10.4599 4.92677 7.4831 5.25948Z" fill="#115056"/>
                      <path d="M21.0301 6.03034C21.3229 5.73744 21.3229 5.26257 21.0301 4.96968C20.7372 4.67678 20.2623 4.67678 19.9694 4.96968L11.4997 13.4393L9.03006 10.9697C8.73716 10.6768 8.26229 10.6768 7.9694 10.9697C7.6765 11.2626 7.6765 11.7374 7.9694 12.0303L10.9694 15.0303C11.2623 15.3232 11.7372 15.3232 12.0301 15.0303L21.0301 6.03034Z" fill="#115056"/>
                    </svg>
                  </div>
                  <p
                    className={`${inter.className}`}
                    style={{
                      color: "#141414",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "120%",
                    }}
                  >
                    Connect clients with solar-trained real estate agents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[50px] pb-[100px]">
          <div className="text-center mb-8">
            <h3
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              How Sprk Works
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
              Three simple steps to get clear solar insights and confident decisions.
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6">
            <div className="flex w-[260px] flex-col items-start absolute left-[330px] top-[236px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[260px] flex-col items-start absolute right-[330px] top-[168px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow Down" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 1
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 3/get-trained.svg" alt="Get Trained" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Get Trained
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Complete Sprk's on-demand certification and learn how to inspect solar and energy systems with ease.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 2
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 3/get-tools.svg" alt="Get Tools" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Get Tools
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Use the Sprk Pro app to collect data and generate polished reports in minutes right from your phone or tablet.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 3
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 3/get-paid.svg" alt="Get Paid" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Get Paid
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Offer more value to your clients, stand out with agents, and increase your profitability per job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <section className="mx-auto w-full bg-[var(--Primary-Color,#115056)]">
        <div className="max-w-[1440px] mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 mt-24 ">
          <div className="rounded-[12px] flex w-[1440px] px-[94px] py-[150px] flex-col items-center gap-[80px]">
            <div className="text-center">
              <h3 className="flex-1 basis-0 text-white text-center text-[56px] leading-[110%] font-medium">
                What Sprk Does for Home Inspectors
              </h3>
            </div>
            <div className="px-4 pb-[40px] sm:pb-[50px] lg:pb-[60px]">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/add-hunderds.svg" alt="Add hundreds in extra revenue per inspection" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Add hundreds in extra revenue per inspection
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/get-certified.svg" alt="Get certified to inspect solar and energy systems" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Get certified to inspect solar and energy systems
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/complete-solar.svg" alt="Complete solar inspections in as little as 15 minutes" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Complete solar inspections in as little as 15 minutes
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 mt-6 justify-center">
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/generate-clean.svg" alt="Generate clean, easy-to-read solar and energy reports" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Generate clean, easy-to-read solar and energy reports
                    </div>
                  </div>
                </div>
                <div className="rounded-[10px] bg-white shadow-md overflow-hidden">
                  <Image src="/inspector-page/section 4/solar-expert.svg" alt="Become the go-to solar expert in your market" width={640} height={360} className="w-full h-auto" />
                  <div className={`${inter.className} flex flex-col justify-end items-center gap-[20px] self-stretch bg-[#F9FAFB] py-[50px] px-0`}>
                    <div className={`${inter.className} flex-1 basis-0 text-center text-[#141414] text-[25px] font-medium leading-[120%]`}>
                      Become the go-to solar expert in your market
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 py-[100px] sm:px-6 lg:px-8 mb-[50px]">
        <div className="flex flex-col items-center gap-[50px] pb-[100px]">
          <div className="text-center mb-8">
            <h3
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              How to Get Started with Sprk
            </h3>
            <p className="mt-3 max-w-2xl mx-auto text-[16px] sm:text-[18px] opacity-80">
            It's Fast and Easy to Get Sprk Certified
            </p>
          </div>

          <div className="relative flex flex-wrap justify-center gap-6">
            <div className="flex w-[170px] flex-col items-start absolute left-[250px] top-[250px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[170px] flex-col items-start absolute left-[600px] top-[180px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-down.svg" alt="Arrow Down" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex w-[170px] flex-col items-start absolute right-[250px] top-[250px]" aria-hidden="true">
              <Image src="/home-page/section 3/arrow-up.svg" alt="Arrow Up" width={224} height={60} className="w-full h-auto" />
            </div>
            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 1
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/sign-up.svg" alt="Sign Up" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Sign Up for Free
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Create your Sprk Pro account, no upfront cost, no obligation.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 2
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/get-sprk-certified.svg" alt="Get Sprk Certified" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Get Sprk Certified
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Complete our on-demand training and start offering 15-minute solar and 5-minute energy inspections.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 3
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/add-sprk.svg" alt="Add Sprk to Your Services" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                  Add Sprk to Your Services
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                  Include Energy Reports with every inspection and Solar Reports on homes with solar, boost value and your bottom line.
                </p>
              </div>
            </div>

            <div className="flex h-[420px] min-w-[295px] flex-col items-center self-stretch flex-[1_0_0] rounded-[10px]  bg-white px-0 py-[50px]" style={{ background: "#FFF" }}>
              <div
                className={`${inter.className} flex px-[40px] py-[10px] justify-center items-start rounded-[50px] border mb-4`}
                style={{
                  borderColor: "#56CD45",
                  background: "rgba(86, 205, 69, 0.05)",
                  color: "#56CD45",
                  textAlign: "center",
                  fontSize: 28,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Step 4
              </div>
              <div className="flex justify-center items-center py-[40px] px-[30px] self-stretch">
                <div
                  className="flex items-center justify-center w-[150px] h-[150px] min-w-[90px] min-h-[90px] aspect-square rounded-[100px] border-[10px]"
                  style={{
                    borderColor: "#FFFFFF",
                    background: "var(--Primary-Color, #115056)",
                    boxShadow:
                      "0 10px 15px 0 rgba(15, 143, 150, 0.08), 0 20px 40px 0 rgba(15, 143, 150, 0.15)",
                  }}
                >
                  <Image src="/inspector-page/section 5/your-business.svg" alt="Grow Your Business" width={90} height={90} className="w-[90px] h-[90px] aspect-square" />
                </div>
              </div>
              <div className="w-full text-center">
                <div
                  style={{
                    minHeight: 90,
                    flex: "1 0 0",
                    color: "var(--Text-Title, #141414)",
                    textAlign: "center",
                    fontFamily: '"Aeonik Pro", sans-serif',
                    fontSize: 27,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "110%",
                  }}
                >
                 Grow Your Business
                </div>
                <p className={`${inter.className}`}
                  style={{
                    minHeight: 154,
                    flex: "1 0 0",
                    color: 'rgba(0, 0, 0, 0.66))',
                    textAlign: "center",
                    fontSize: 18,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                  }}
                >
                 Use Sprk's marketing tools and agent education resources to become the preferred inspector in your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[50px] pt-[50px] pb-[100px]">
          <div >
            <h2 className="flex-1 basis-0 text-center text-[#141414] text-[80px] leading-[110%] font-medium font-['Aeonik Pro'] mb-[20px]">
              Sprk Reports for Home Inspectors
            </h2>
            <p className={`${inter.className} flex-1 basis-0 text-center text-[rgba(0,0,0,0.66)] text-[22px] leading-[120%] font-normal`}>
              Simple to Generate. Easy to Read. Trusted by Top Inspectors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 w-full">
            {/* Home Energy Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/inspector-page/section 6/home-energy.svg" alt="Home Energy Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[70px] flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Home Energy Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                  Estimate utility bills, outline an energy savings plan, and calculate solar needs fast.
                </p>
                <div className="flex items-center gap-3">
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] bg-[#115056] text-white text-[22px] font-normal `}>
                    View Sample <span aria-hidden>→</span>
                  </button>
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] border border-[#115056] text-[#115056] text-[22px] font-normal ]`}>
                    Learn More <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Solar Inspection Report */}
            <div className="rounded-[10px] bg-white border border-black/10 overflow-hidden">
              <div className="bg-[var(--Primary-Color,#115056)]">
                <Image src="/inspector-page/section 6/solar-inspection.svg" alt="Solar Inspection Report" width={640} height={300} className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="min-h-[70px] flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro'] mb-2">
                  Solar Inspection Report
                </h3>
                <p className={`${inter.className} h-[66px] min-h-[66px] flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)] mb-4`}>
                  Evaluate solar production, system condition, and remaining life. Spot issues before they become deal-breakers.
                </p>
                <div className="flex items-center gap-3">
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] bg-[#115056] text-white text-[22px] font-normal`}>
                    View Sample <span aria-hidden>→</span>
                  </button>
                  <button className={`${inter.className} flex justify-center items-start py-[5px] px-[15px] flex-1 basis-0 rounded-[5px] border border-[#115056] text-[#115056] text-[22px] font-normal`}>
                    Learn More <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Section 7 - Testimonials */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[30px] pt-[50px] pb-[100px]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="flex-1 basis-0 text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik_Pro']">
                What Inspectors Are Saying
                <br className="hidden sm:block" /> About Sprk
              </h3>
            </div>
            <button className={`${inter.className} hidden sm:flex items-center gap-2 text-[#141414]/70 text-[14px]`}>
              Discover their Stories <span aria-hidden>▾</span>
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-[10px] border border-black/10 bg-white overflow-hidden">
                <div>
                  <Image src="/inspector-page/section 7/profile.svg" alt="Inspector profile" width={400} height={500} className="w-full h-auto" />
                </div>
                <div className="flex min-w-[350px] p-[50px] flex-col items-start gap-[30px] flex-1 basis-0">
                  <p className={`${inter.className} flex-1 basis-0 text-[16px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                    "The training was straightforward, and the Sprk Pro app makes it easy to generate solar and energy
                    reports for our clients."
                  </p>
                  <div>
                    <div className="flex-1 basis-0 text-[#141414] text-[32px] leading-[110%] font-medium font-['Aeonik_Pro']">Trey S.</div>
                    <div className={`${inter.className} flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>Fusion Power</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - Pricing Plans */}
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-[30px] pt-[50px] ">
          <h2 className="flex-1 basis-0 text-center text-[#141414] text-[80px] leading-[110%] font-medium font-['Aeonik Pro']">
            Choose Your Sprk Plan
          </h2>
          <p className="flex-1 basis-0 text-center text-[#141414] text-[35px] leading-[110%] font-medium font-['Aeonik Pro']">
            Start free. Scale as you grow. 30 Days Free.
          </p>

          <div className="mt-[80px] w-full grid gap-6 md:grid-cols-3 mt-4">
            {/* Left: Homeowners + Free */}
            <div className="flex-1 flex flex-col ">
              <div className="text-[#141414] text-center text-[45px] leading-[110%] font-medium font-['Aeonik Pro']  p-4">Homeowners</div>
              <div className="rounded-[12px] border border-black/10 bg-white overflow-hidden shadow-sm h-full flex flex-col">
                <div className="bg-[#115056] text-white flex flex-col items-start gap-[25px] self-stretch px-[40px] pt-[40px] pb-[30px] rounded-t-[10px]">
                  <div className="flex w-full items-center justify-center rounded-[30px] border border-[#115056] bg-white py-[10px] px-[40px] self-stretch">
                    <div className="text-center text-[#115056] text-[38px] leading-[110%] font-bold font-['Aeonik Pro']">Free</div>
                  </div>
                  <p className={`${inter.className} mt-3 min-h-[57px] flex-1 basis-0 text-white text-[16px] leading-[120%] font-normal`}>
                    Best for inspectors new to solar. Get trained, get started, and add energy reports to every inspection.
                  </p>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="text-[#141414] font-semibold mb-2">Sprk Reports</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                    <li>✓ Energy Reports: Unlimited</li>
                    <li>✓ Solar Reports: $30 each</li>
                  </ul>
                  <div className="text-[#141414] font-semibold mb-2">Training</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                    <li>✓ Sprk Certification Training</li>
                    <li>✓ Inspection Company Startup Guide</li>
                  </ul>
                  <div className="text-[#141414] font-semibold mb-2">Marketing Resources</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                    <li>✓ Solar Agent CE Course</li>
                    <li>✓ Marketing Toolkit</li>
                    <li>✓ AI Marketing Assistant</li>
                  </ul>
                  <div className="text-[#141414] font-semibold mb-2">Sprk Apps</div>
                  <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-6`}>
                    <li>✓ Sprk Pro App</li>
                    <li>✓ Client Portal</li>
                  </ul>
                  <button className={`${inter.className} w-full flex justify-center items-center py-[10px] rounded-[8px] bg-[#115056] text-white text-[16px] mt-auto`}>Get Started</button>
                </div>
              </div>
            </div>

            {/* Right: Highlighted container with Home Inspectors + two plans in a row */}
            <div className="md:col-span-2 rounded-[10px] border border-[#17E817] bg-[rgba(0,255,106,0.15)] p-4">
              <div className="text-[#141414] text-center text-[45px] leading-[110%] font-medium font-['Aeonik Pro'] mb-4">Home Inspectors</div>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Launch Plan */}
                <div className="rounded-[12px] border border-black/10 bg-white overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="bg-[#115056] text-white flex flex-col items-start gap-[25px] self-stretch px-[40px] pt-[40px] pb-[30px] rounded-t-[10px]">
                    <div className="flex w-full items-center justify-center rounded-[30px] border border-[#115056] bg-white py-[10px] px-[40px] self-stretch">
                      <div className="text-center text-[#115056] text-[38px] leading-[110%] font-bold font-['Aeonik Pro']">Launch Plan</div>
                    </div>
                    <div className="mt-3 flex justify-center items-center gap-[10px] flex-1 basis-0">
                      <span className="text-white text-[30px] leading-[110%] font-medium font-['Aeonik Pro']">$20</span>
                      <span className={`${inter.className} flex-1 basis-0 text-white text-[22px] leading-[110%] font-medium`}>/mo per inspector</span>
                    </div>
                    <p className={`${inter.className} mt-3 min-h-[57px] flex-1 basis-0 text-white text-[16px] leading-[120%] font-normal`}>
                      Best for inspectors new to solar. Get trained, get started, and add energy reports to every inspection.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                   
                    <div className="text-[#141414] font-semibold mb-2">Sprk Reports</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Energy Reports: Unlimited</li>
                      <li>✓ Solar Reports: $30 each</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Training</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Sprk Certification Training</li>
                      <li>✓ Inspection Company Startup Guide</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Marketing Resources</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Solar Agent CE Course</li>
                      <li>✓ Marketing Toolkit</li>
                      <li>✓ AI Marketing Assistant</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Sprk Apps</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-6`}>
                      <li>✓ Sprk Pro App</li>
                      <li>✓ Client Portal</li>
                    </ul>
                    <button className={`${inter.className} w-full flex justify-center items-center py-[10px] rounded-[8px] bg-[#115056] text-white text-[16px] mt-auto`}>Get Started</button>
                  </div>
                </div>

                {/* Growth Plan */}
                <div className="rounded-[12px] border border-black/10 bg-white overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="bg-[#115056] text-white flex flex-col items-start gap-[25px] self-stretch px-[40px] pt-[40px] pb-[30px] rounded-t-[10px]">
                    <div className="flex w-full items-center justify-center rounded-[30px] border border-[#115056] bg-white py-[10px] px-[40px] self-stretch">
                      <div className="text-center text-[#115056] text-[38px] leading-[110%] font-bold font-['Aeonik Pro']">Growth Plan</div>
                    </div>
                    <div className="mt-3 flex justify-center items-center gap-[10px] flex-1 basis-0">
                      <span className="text-white text-[30px] leading-[110%] font-medium font-['Aeonik Pro']">$99</span>
                      <span className={`${inter.className} flex-1 basis-0 text-white text-[22px] leading-[110%] font-medium`}>/mo per inspector</span>
                    </div>
                    <p className={`${inter.className} mt-3 min-h-[57px] flex-1 basis-0 text-white text-[16px] leading-[120%] font-normal`}>
                      Best for inspectors growing with solar. Includes free solar reports, advanced marketing tools, and full support.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                
                    <div className="text-[#141414] font-semibold mb-2">Sprk Reports</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Energy Reports: Unlimited</li>
                      <li>✓ Solar Reports: 8 included/month, then $30 each</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Training</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Sprk Certification Training</li>
                      <li>✓ Inspection Company Startup Guide</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Marketing Resources</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-4`}>
                      <li>✓ Solar Agent CE Course</li>
                      <li>✓ Marketing Toolkit</li>
                      <li>✓ AI Marketing Assistant</li>
                    </ul>
                    <div className="text-[#141414] font-semibold mb-2">Sprk Apps</div>
                    <ul className={`${inter.className} space-y-2 text-[14px] text-[#141414]/70 mb-6`}>
                      <li>✓ Sprk Pro App</li>
                      <li>✓ Client Portal</li>
                    </ul>
                    <button className={`${inter.className} w-full flex justify-center items-center py-[10px] rounded-[8px] bg-[#115056] text-white text-[16px] mt-auto`}>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </>
     );
}
