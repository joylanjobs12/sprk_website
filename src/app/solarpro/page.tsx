import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import HowToGetStarted from "@/components/HowToGetStarted";

const inter = Inter({ subsets: ["latin"] });

export default function SolarProPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-[150px] pb-[100px]">
        <div className="flex flex-col items-center text-center gap-[50px]">
          <div className="flex flex-col gap-[30px] items-center w-full">
            <h1
              className="w-full text-center"
              style={{
                fontFamily: "Aeonik Pro",
                fontSize: "80px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              <span style={{ color: "#115056" }}>Do More Than Get Solar</span>
              <br />
              <span style={{ color: "#141414" }}>on Their Roof</span>
            </h1>

            <div className="flex items-center justify-center w-full px-2.5">
              <p
                className={`${inter.className} text-center`}
                style={{
                  fontFamily: "Inter",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  color: "rgba(0, 0, 0, 0.66)",
                }}
              >
                Sprk equips solar professionals with tools to sell smarter, support longer, and help homeowners
                <br />
                understand their system now and years from now.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-[15px] w-full">
            <Link
              href="#certified"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-[#115056] text-white"
              style={{
                fontFamily: "Aeonik Pro",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              Get Sprk Certified
            </Link>
            <Link
              href="#estimator"
              className="flex h-[52px] px-[30px] py-[12px] justify-center items-center gap-2 rounded-[30px] bg-white border border-[#115056]"
              style={{
                fontFamily: "Aeonik Pro",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
                color: "#115056",
              }}
            >
              Use the Solar Estimator
            </Link>
          </div>

        </div>
      </section>
      {/* Section 2 */}
      <section className="mx-auto w-full max-w-[1440px] px-24 py-[100px]">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="text-center"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "56px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                Why Solar Professionals Choose Sprk
              </h2>
            </div>
            <div className="flex items-start justify-center w-full">
              <h3
                className="text-center"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "35px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                Sprk Helps You Stand Out in a Market That's Changing
              </h3>
            </div>
            <div className="flex flex-col gap-2.5 items-start w-full">
              <div className="flex items-start justify-center w-full">
                <p
                  className={`${inter.className} text-center`}
                  style={{
                    fontFamily: "Inter",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "120%",
                    color: "rgba(0, 0, 0, 0.66)",
                  }}
                >
                  Most solar companies stop at the install. But the homeowners you serve deserve more.
                  <br />
                  Sprk helps you become the kind of solar partner that stays relevant long after the panels go up.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[50px] items-center w-[1248px]">
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              <div className="bg-white h-[500px] rounded-[10px] w-[1248px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
                <div className="flex flex-wrap gap-0 h-[500px] items-start justify-start w-[1248px]">
                  <div className="bg-gray-50 flex flex-col items-start justify-start w-[624px]">
                    <div 
                      className="h-[500px] min-w-[350px] w-full bg-center bg-cover bg-no-repeat"
                      style={{ 
                        backgroundImage: `url('http://localhost:3845/assets/0b9a49852eeeaf136ff0305af0e24b04c005390f.png')`,
                      }}
                    />
                  </div>
                  <div className="bg-white flex flex-col gap-[35px] h-[500px] items-start justify-start min-w-[350px] p-[30px] flex-1">
                    <div className="flex items-start justify-start w-full">
                      <h4
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        What Sprk Does for Solar Companies
                      </h4>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Attract new leads with a homeowner-facing Solar Calculator
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Create proposals that include energy upgrades, solar, and batteries
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Sell and install using Sprk's real estate-ready reports
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Give clients a mobile app to store solar and resale documents
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Connect clients with solar-trained real estate agents
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

      {/* Section 3 */}
      <HowToGetStarted
        title="How It Works"
        subtitle="Professional Tools That Power the Better Solar Companies"
        step1={{
          icon: "/solar-pro-page/section 3/find-wtih.svg",
          label: "Find with the Solar Calculator",
          description: "Use the Sprk Solar Calculator to give homeowners a free tool to explore how much solar they might need—giving you direct access to usage data and interest level."
        }}
        step2={{
          icon: "/solar-pro-page/section 3/sell-with.svg",
          label: "Sell with the Home Energy Report",
          description: "Diagnose the home's efficiency issues when quoting solar. Help homeowners understand what could be improved along with adding solar and batteries."
        }}
        step3={{
          icon: "/solar-pro-page/section 3/install-wtih.svg",
          label: "Install with the Solar Inspection Report",
          description: "Show your clients you install to the highest standards. Leave every homeowner with documentation and confidence that their system was done right."
        }}
        step4={{
          icon: "/solar-pro-page/section 3/support-with.svg",
          label: "Support with the Solar Listing Report",
          description: "Make sure your customers are ready when it's time to sell. Provide warranty docs, and transfer-ready info to protect the value of your install."
        }}
      />

      {/* Section 4 - Sprk Reports */}
      <section className="bg-[#115056] py-[100px] px-[94px]">
        <div className="mx-auto w-full max-w-[1248px]">
          <div className="flex flex-col gap-[50px]">
            {/* Header */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-[30px] items-center w-full">
                <div className="flex items-start justify-start w-full">
                  <h2
                    className="text-center text-white w-full"
                    style={{
                      fontFamily: "Aeonik Pro",
                      fontSize: "56px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "110%",
                    }}
                  >
                    Sprk Reports
                  </h2>
                </div>
                <div className="flex items-start justify-start w-full">
                  <h3
                    className="text-center w-full"
                    style={{
                      fontFamily: "Aeonik Pro",
                      fontSize: "35px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "110%",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Built for real estate. Backed by data. Trusted by professionals.
                  </h3>
                </div>
              </div>
            </div>

            {/* Report Cards */}
            <div className="flex flex-wrap gap-6 items-start justify-start w-full">
              {/* Home Energy Report */}
              <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0 border border-[rgba(0,0,0,0.15)]">
                <div className="flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
                  <div className="bg-white flex flex-col gap-5 items-start justify-start p-[30px] w-full">
                    <div className="flex items-center justify-start">
                      <div className="bg-white flex items-center justify-start p-[15px] rounded-[10px] border border-[rgba(17,80,86,0.15)]">
                        <div className="h-[62px] overflow-clip relative w-[60px]">
                          <div className="absolute inset-[8.92%_20.28%_8.93%_9.21%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/6126823ba2db57fcb681e7397d76c11bb17e2e69.svg" />
                          </div>
                          <div className="absolute inset-[16.39%_9.24%_49.17%_52.33%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/039a5d9d8e1ca607baab18f558e50390a5db9cca.svg" />
                          </div>
                          <div className="absolute inset-[75.37%_29.73%_20.58%_20.03%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/b85706cfff1de12eb8647ca8866a1321a650914b.svg" />
                          </div>
                          <div className="absolute inset-[65.53%_29.73%_30.47%_20.04%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/9092e39d606027a5776078d390a93f4696a6dab5.svg" />
                          </div>
                          <div className="absolute inset-[56.21%_51.03%_39.74%_19.82%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/1daf9bd111f2f218d9edf80c3be3471a09472b27.svg" />
                          </div>
                          <div className="absolute inset-[46.95%_55.34%_49.05%_19.83%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/5e11acab5a12bce40f2cd511d18496325dd6060d.svg" />
                          </div>
                          <div className="absolute inset-[20.6%_59.8%_63.57%_23.84%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/b2bae6461c239f4683eed4bf910ca34521e02e99.svg" />
                          </div>
                          <div className="absolute inset-[26.48%_22.07%_55.4%_66.83%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/f1c9230c458318044abd3c60eb39b4394477f86e.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-full">
                      <h4
                        className="min-h-[66px]"
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        Home Energy Report
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start justify-center p-[30px] w-full">
                    <p
                      className={`${inter.className} min-h-[110px]`}
                      style={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "120%",
                        color: "rgba(0, 0, 0, 0.66)",
                      }}
                    >
                      Uncover hidden efficiency issues, estimate utility savings, and lay the groundwork for accurate system design and battery sizing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solar Inspection Report */}
              <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0 border border-[rgba(0,0,0,0.15)]">
                <div className="flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
                  <div className="bg-white flex flex-col gap-5 items-start justify-start p-[30px] w-full">
                    <div className="flex items-center justify-start">
                      <div className="bg-white flex items-center justify-start p-[15px] rounded-[10px] border border-[rgba(17,80,86,0.15)]">
                        <div className="h-[62px] overflow-clip relative w-[60px]">
                          <div className="absolute inset-[8.92%_22.41%_8.93%_8.97%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/4300ad3f42b68d242806e723bdd6a4f280d5553f.svg" />
                          </div>
                          <div className="absolute inset-[17.73%_9.03%_49.17%_48.25%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/4b97701bcb64718da260878452041090d87fecdf.svg" />
                          </div>
                          <div className="absolute inset-[28.13%_9.03%_49.18%_68.29%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/44e847568bf7a4aa11c760d27c29cb07e2c35676.svg" />
                          </div>
                          <div className="absolute inset-[75.37%_31.61%_20.58%_19.49%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/a680eb4f4cc7096a1d179e4e9a74fbfad6edeed5.svg" />
                          </div>
                          <div className="absolute inset-[65.53%_31.61%_30.47%_19.5%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/b3f39339d02decd401908913b8d3456247b29731.svg" />
                          </div>
                          <div className="absolute inset-[56.21%_52.34%_39.74%_19.29%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/6241e80a29281246c8304759d1ef1e6c03edd681.svg" />
                          </div>
                          <div className="absolute inset-[46.95%_56.54%_49.05%_19.3%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/95f97f7e29455c8c84982fac33623f09150dc23a.svg" />
                          </div>
                          <div className="absolute inset-[20.6%_60.87%_63.57%_23.2%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/6d3cb2eeeca7cb5ec9966a649b1d6f8485949836.svg" />
                          </div>
                          <div className="absolute inset-[48.58%_23.92%_49.18%_69.07%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/bf76660ac159f4bd71d051529097a244e6fc14d6.svg" />
                          </div>
                          <div className="absolute inset-[36.21%_31.7%_61.64%_67.28%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/f59f20d1b45b580bb7af6e9a965a13e00a19eac5.svg" />
                          </div>
                          <div className="absolute inset-[28.92%_31.7%_68.93%_67.28%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/35e1d2464c77087ffbe2386e28c6418795c5bef1.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-full">
                      <h4
                        className="min-h-[66px]"
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        Solar Inspection Report
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start justify-center p-[30px] w-full">
                    <p
                      className={`${inter.className} min-h-[110px]`}
                      style={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "120%",
                        color: "rgba(0, 0, 0, 0.66)",
                      }}
                    >
                      Verify system health post-install, confirm performance, and give the homeowner a certified record of quality installation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solar Listing Report */}
              <div className="basis-0 bg-gray-50 grow min-h-[400px] min-w-[294px] relative rounded-[10px] shrink-0 border border-[rgba(0,0,0,0.15)]">
                <div className="flex flex-col items-center justify-start min-h-inherit min-w-inherit overflow-clip relative w-full">
                  <div className="bg-white flex flex-col gap-5 items-start justify-start p-[30px] w-full">
                    <div className="flex items-center justify-start">
                      <div className="bg-white flex items-center justify-start p-[15px] rounded-[10px] border border-[rgba(17,80,86,0.15)]">
                        <div className="h-[62px] overflow-clip relative w-[60px]">
                          <div className="absolute inset-[8.92%_18.19%_8.93%_9.46%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/e070523475095361c96ea593f0005b340be85b67.svg" />
                          </div>
                          <div className="absolute inset-[19.5%_9.52%_48.41%_57.14%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/69e94aef0141bd47678a7e84a91784d9d3891597.svg" />
                          </div>
                          <div className="absolute inset-[75.37%_27.88%_20.58%_20.55%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/951ceab850be657af1b3b7979ee043967b8ddd68.svg" />
                          </div>
                          <div className="absolute inset-[65.53%_27.89%_30.47%_20.56%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/e3859d0ee70f6752100e48d2a97196a4aa20bce2.svg" />
                          </div>
                          <div className="absolute inset-[56.21%_49.74%_39.74%_20.34%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/d3ef6b1b739597c146f9bcaae5410ff35ad9200b.svg" />
                          </div>
                          <div className="absolute inset-[46.95%_54.17%_49.05%_20.35%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/83d064f4dbbf29dd2615726afeeec7c7e4ee23d8.svg" />
                          </div>
                          <div className="absolute inset-[26.46%_9.79%_55.89%_66%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/a3d1cdc9c758b35dfd6dff783d4042bcef881a8f.svg" />
                          </div>
                          <div className="absolute inset-[20.01%_60.99%_61.24%_27.17%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/1d10e79a529f156f5f671256b1c9671d1d3f35ef.svg" />
                          </div>
                          <div className="absolute inset-[29.57%_15.94%_60.03%_72.14%]">
                            <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/cd9323bb159edd826dc5e662e26a9c5151dcb448.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-full">
                      <h4
                        className="min-h-[66px]"
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        Solar Listing Report
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start justify-center p-[30px] w-full">
                    <p
                      className={`${inter.className} min-h-[110px]`}
                      style={{
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "120%",
                        color: "rgba(0, 0, 0, 0.66)",
                      }}
                    >
                      Help your customers prepare for the future. This report ensures their solar investment is fully documented and transferable when they go to sell their solar home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Long-Term Value for Your Clients */}
      <section className="mx-auto w-full max-w-[1440px] px-24 py-[100px]">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="text-center w-full"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "56px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                Long-Term Value for Your Clients
              </h2>
            </div>
            <div className="flex items-start justify-center w-full">
              <h3
                className="text-center w-full"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "35px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                Solar That Pays Off for Years to Come
              </h3>
            </div>
          </div>

          {/* Content Card */}
          <div className="flex flex-col gap-[50px] items-center w-[1248px]">
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              <div className="bg-white h-[500px] rounded-[10px] w-[1248px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
                <div className="flex flex-wrap gap-0 h-[500px] items-start justify-start w-[1248px]">
                  {/* Image Section */}
                  <div className="bg-gray-50 flex flex-col items-start justify-start w-[624px]">
                    <div 
                      className="h-[500px] min-w-[350px] w-full bg-center bg-cover bg-no-repeat"
                      style={{ 
                        backgroundImage: `url('http://localhost:3845/assets/c14629f14ad486b36138cd3e889bfaab49ac43d6.png')`,
                      }}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="bg-white flex flex-col gap-[35px] h-[500px] items-start justify-start min-w-[350px] p-[30px] flex-1 overflow-clip">
                    {/* Main Description */}
                    <div className="flex items-start justify-start w-full">
                      <p
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        Sprk helps you deliver more than a solar quote. It helps you support the homeowner's full energy story. With our tools, you're empowering homeowners to:
                      </p>
                    </div>

                    {/* Checklist Items */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Understand their energy use
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-center justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Fix energy waste before oversizing their system
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Feel confident in the value of their investment
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Avoid issues when refinancing or selling
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          Get connected with agents and inspectors who truly understand solar
                        </p>
                      </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "rgba(0, 0, 0, 0.66)",
                          }}
                        >
                          The result? Happier clients, better referrals, and stronger long-term brand equity.
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

      {/* Section 6 - What Sprk Certified Means */}
      <section className="mx-auto w-full max-w-[1440px] px-24 py-[100px]">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="text-center w-full"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "56px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                What Sprk Certified Means
              </h2>
            </div>
            <div className="flex items-start justify-center w-full">
              <h3
                className="text-center w-full"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "35px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                Sprk Certified Means Solar Done Right
              </h3>
            </div>
          </div>

          {/* Content Card */}
          <div className="flex flex-col gap-[50px] items-center w-[1248px]">
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              <div className="bg-white h-[500px] rounded-[10px] w-[1248px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
                <div className="flex flex-wrap gap-0 h-[500px] items-start justify-start w-[1248px]">
                  {/* Badge Section */}
                  <div className="bg-gray-50 flex flex-col items-start justify-start w-[624px]">
                    <div 
                      className="h-[500px] min-w-[350px] w-full bg-center bg-no-repeat"
                      style={{ 
                        backgroundImage: `url('http://localhost:3845/assets/6b8197603f1b52afc5fe4d6675ef8f3143a3f463.png')`,
                        backgroundSize: "59.5% 74.25%",
                      }}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="bg-white flex flex-col gap-[35px] h-[500px] items-start justify-start min-w-[350px] p-[30px] flex-1 overflow-clip">
                    {/* Main Description */}
                    <div className="flex items-start justify-start w-full">
                      <p
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        When your organization becomes Sprk Certified, you're signaling to homeowners and agents, that you care about the full lifecycle of solar:
                      </p>
                    </div>

                    {/* Checklist Items */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          You offer documented inspections
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          You provide energy reports, not just panel quotes
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          You help your clients prepare for future resale
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-start justify-start w-full">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <div className="absolute inset-[14.63%_11.46%_14.63%_14.68%]">
                            <img 
                              alt="" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/0d9e84751729bc59e1fbfcbbd943386fa0d4cd90.svg" 
                            />
                          </div>
                        </div>
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "#141414",
                          }}
                        >
                          You connect them with the right support team
                        </p>
                      </div>
                    </div>

                    {/* Description Text */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="flex gap-[5px] items-center justify-center w-full">
                        <p
                          className={`${inter.className} flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "rgba(0, 0, 0, 0.66)",
                          }}
                        >
                          Sprk Certification isn't just a stamp, it's a commitment to quality, clarity, and client education.
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col gap-[5px] items-start w-full">
                      <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] w-full">
                        <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                          <p
                            className={`${inter.className} flex-1 text-center text-white`}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "22px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "120%",
                            }}
                          >
                            Get Sprk Certified
                          </p>
                          <div className="relative w-[30px] h-[30px] flex-shrink-0">
                            <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]">
                              <img 
                                alt="" 
                                className="block max-w-none w-full h-full" 
                                src="http://localhost:3845/assets/e971039aaa6f37379f1adf9dcfa8b2f020bb24c7.svg" 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Solar Calculator Lead Gen Tool */}
      <section className="mx-auto w-full max-w-[1440px] px-24 py-[100px]">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Header */}
          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex items-start justify-center w-full">
              <h2
                className="text-center w-full"
                style={{
                  fontFamily: "Aeonik Pro",
                  fontSize: "56px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                  color: "#141414",
                }}
              >
                Solar Calculator Lead Gen Tool
              </h2>
            </div>
          </div>

          {/* Calculator Showcase */}
          <div className="flex flex-col gap-[50px] items-center w-[1248px]">
            <div className="flex flex-wrap gap-6 items-center justify-start w-full">
              <div className="bg-white h-[1110px] rounded-[10px] w-[1248px] border border-[rgba(0,0,0,0.15)] overflow-hidden">
                <div className="flex flex-col h-[1110px] items-start justify-start w-[1248px]">
                  {/* Calculator Image */}
                  <div className="bg-white flex gap-[5px] items-start justify-start w-full flex-1">
                    <div 
                      className="h-full min-w-[350px] w-full bg-center bg-contain bg-no-repeat flex-1"
                      style={{ 
                        backgroundImage: `url('http://localhost:3845/assets/82b8565c5eebe6d43ca2a949adf5f0e8621a718b.png')`,
                      }}
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="bg-white flex flex-col gap-[35px] items-start justify-start min-w-[350px] p-[30px] w-full overflow-clip">
                    {/* Title */}
                    <div className="flex items-start justify-center w-full">
                      <h3
                        className="text-center w-full"
                        style={{
                          fontFamily: "Aeonik Pro",
                          fontSize: "30px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#141414",
                        }}
                      >
                        More Leads. Better Conversations.
                      </h3>
                    </div>

                    {/* Two Column Content */}
                    <div className="flex items-start justify-start w-full">
                      {/* Left Column */}
                      <div className="flex flex-col gap-[5px] items-start justify-start px-5 py-2.5 flex-1 border-r border-[rgba(0,0,0,0.2)]">
                        <div className="w-full">
                          <p
                            className={`${inter.className} mb-4`}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "20px",
                              fontStyle: "normal",
                              fontWeight: 500,
                              lineHeight: "110%",
                              color: "#141414",
                            }}
                          >
                            Sprk gives you access to a clean, easy-to-use Solar Calculator that you can:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Embed on your website
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Share in email or during consultations
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Use in social media content and paid ad campaigns
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col gap-[5px] items-start justify-start px-5 py-2.5 flex-1">
                        <div className="w-full">
                          <p
                            className={`${inter.className} mb-4`}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "20px",
                              fontStyle: "normal",
                              fontWeight: 500,
                              lineHeight: "110%",
                              color: "#141414",
                            }}
                          >
                            It helps you:
                          </p>
                          <ul className="list-disc ml-6 space-y-2">
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Attract qualified solar leads
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Start the conversation with data, not pressure
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Show energy savings based on real utility rates and home profiles
                              </span>
                            </li>
                            <li>
                              <span
                                className={`${inter.className}`}
                                style={{
                                  fontFamily: "Inter",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "120%",
                                  color: "#141414",
                                }}
                              >
                                Send a Sprk Home Energy Report as part of your follow-up package
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-5 items-start justify-start w-full">
                      {/* Get Sprk Certified Button */}
                      <div className="bg-[#115056] flex items-start justify-center p-[5px] rounded-[5px] flex-1">
                        <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                          <p
                            className={`${inter.className} flex-1 text-center text-white`}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "22px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "120%",
                            }}
                          >
                            Get Sprk Certified
                          </p>
                          <div className="relative w-[30px] h-[30px] flex-shrink-0">
                            <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]">
                              <img 
                                alt="" 
                                className="block max-w-none w-full h-full" 
                                src="http://localhost:3845/assets/8ebdff9f26b5cb6442fac1b76c44e2b7ff4f2e44.svg" 
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Try Solar Estimator Button */}
                      <div className="bg-white border border-[#115056] flex items-start justify-center p-[5px] rounded-[5px] flex-1">
                        <div className="flex items-center justify-center px-[15px] py-[5px] w-full">
                          <p
                            className={`${inter.className} flex-1 text-center`}
                            style={{
                              fontFamily: "Inter",
                              fontSize: "22px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "120%",
                              color: "#141414",
                            }}
                          >
                            Try the Solar Estimator
                          </p>
                          <div className="relative w-[30px] h-[30px] flex-shrink-0">
                            <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]">
                              <img 
                                alt="" 
                                className="block max-w-none w-full h-full" 
                                src="http://localhost:3845/assets/ac5b8e3fb7a247fa48d18c800449669116732643.svg" 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="flex flex-col gap-[50px] items-center px-24 py-[100px] w-[1440px]">
              {/* How It Works Header */}
              <div className="flex flex-col gap-5 items-center w-full">
                <div className="flex items-start justify-center w-full">
                  <h2
                    className="text-center w-full"
                    style={{
                      fontFamily: "Aeonik Pro",
                      fontSize: "56px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "110%",
                      color: "#141414",
                    }}
                  >
                    How It Works
                  </h2>
                </div>
                <div className="flex items-start justify-center w-full">
                  <h3
                    className="text-center w-full"
                    style={{
                      fontFamily: "Aeonik Pro",
                      fontSize: "28px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "110%",
                      color: "#141414",
                    }}
                  >
                    Lead Gen with Solar Calculator
                  </h3>
                </div>
              </div>

              {/* Steps */}
              <div className="relative flex flex-wrap gap-5 items-start justify-start w-full">
                {/* Arrow decorations */}
                <div className="absolute flex h-[29.5px] items-center justify-center left-[733px] top-[168px] w-56">
                  <div className="flex-none scale-y-[-100%]">
                    <div className="h-[29.5px] relative w-56">
                      <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
                        <img 
                          alt="" 
                          className="block max-w-none w-full h-full" 
                          src="http://localhost:3845/assets/1d16b9a57c55d36a5746be42e55fe5565c8caa51.svg" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[29.5px] left-[300px] top-[236px] w-56">
                  <div className="absolute inset-[-18.7%_-0.45%_-1.08%_-0.11%]">
                    <img 
                      alt="" 
                      className="block max-w-none w-full h-full" 
                      src="http://localhost:3845/assets/1d16b9a57c55d36a5746be42e55fe5565c8caa51.svg" 
                    />
                  </div>
                </div>

                {/* Step 1 */}
                <div className="basis-0 bg-white flex flex-col grow items-center justify-start min-h-px min-w-[400px] overflow-clip relative rounded-[10px] shrink-0">
                  <div className="bg-white flex flex-col items-center justify-start min-w-[295px] px-0 py-[50px] w-full">
                    <div className="bg-[rgba(86,205,69,0.05)] flex items-start justify-center px-10 py-2.5 rounded-[50px] border border-[#56cd45]">
                      <div
                        className={`${inter.className} text-center text-nowrap`}
                        style={{
                          fontFamily: "Inter",
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#56cd45",
                        }}
                      >
                        Step 1
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-[30px] py-10 w-full">
                      <div className="bg-[#115056] flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] w-[150px] h-[150px] border-[10px] border-[rgba(144,228,193,0.1)] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]">
                        <div className="flex items-center justify-center p-[15px] relative rounded-[50px]">
                          <div className="overflow-clip relative w-[100px] h-[100px]">
                            <img 
                              alt="Homeowner fills out form" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/6943246c059fc9841b8616562658ecce3eab9d5f.svg" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-start justify-start min-h-[60px] px-[30px] py-0 w-full">
                        <div
                          className="text-center min-h-[90px] flex-1"
                          style={{
                            fontFamily: "Aeonik Pro",
                            fontSize: "27px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "110%",
                            color: "#141414",
                          }}
                        >
                          <p className="mb-0">Homeowner fills out</p>
                          <p className="mb-0">&nbsp;</p>
                          <p>1 min energy form</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start min-h-[110px] px-[30px] py-0 w-full">
                        <p
                          className={`${inter.className} text-center min-h-[154px] flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "rgba(0, 0, 0, 0.66)",
                          }}
                        >
                          Using social media or other marketing method solar company provides solar calculator form to homeowner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="basis-0 bg-white flex flex-col grow items-center justify-start min-h-px min-w-[400px] overflow-clip relative rounded-[10px] shrink-0">
                  <div className="bg-white flex flex-col items-center justify-start min-w-[295px] px-0 py-[50px] w-full">
                    <div className="bg-[rgba(86,205,69,0.05)] flex items-start justify-center px-10 py-2.5 rounded-[50px] border border-[#56cd45]">
                      <div
                        className={`${inter.className} text-center text-nowrap`}
                        style={{
                          fontFamily: "Inter",
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#56cd45",
                        }}
                      >
                        Step 2
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-[30px] py-10 w-full">
                      <div className="bg-[#115056] flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] w-[150px] h-[150px] border-[10px] border-[rgba(144,228,193,0.1)] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]">
                        <div className="flex items-center justify-center p-[15px] relative rounded-[50px]">
                          <div className="overflow-clip relative w-[100px] h-[100px]">
                            <div className="absolute inset-[8.92%_20.28%_8.93%_9.21%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/2e403c6846f0deeda8e3bb4cf319b3ed91c81f11.svg" />
                            </div>
                            <div className="absolute inset-[16.39%_9.24%_49.17%_52.33%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/68197ed38b5a3c44b1275b1c50deda9b0dfbf251.svg" />
                            </div>
                            <div className="absolute inset-[75.37%_29.73%_20.58%_20.03%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/36fc28e8f9f12c6cc61340c568b213e6578203a8.svg" />
                            </div>
                            <div className="absolute inset-[65.53%_29.73%_30.47%_20.04%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/1fcd22ba43e022c65a418d69a88442be49c49a04.svg" />
                            </div>
                            <div className="absolute inset-[56.21%_51.03%_39.74%_19.82%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/8e6df4bdaed16f0f6d2c9d94b1c14277ca6a5b90.svg" />
                            </div>
                            <div className="absolute inset-[46.95%_55.34%_49.05%_19.83%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/59a17df13baf86a242dbcc5a731d9c301167a93b.svg" />
                            </div>
                            <div className="absolute inset-[20.6%_59.8%_63.57%_23.84%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/42ed224d7602455b5f0d9e74a555bd301f9fc3fe.svg" />
                            </div>
                            <div className="absolute inset-[26.48%_22.07%_55.4%_66.83%]">
                              <img alt="" className="block max-w-none w-full h-full" src="http://localhost:3845/assets/d8b3eb69c8be0aca34cecd494b66b2f53543e6db.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-start justify-start min-h-[60px] px-[30px] py-0 w-full">
                        <div
                          className="text-center min-h-[90px] flex-1"
                          style={{
                            fontFamily: "Aeonik Pro",
                            fontSize: "27px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "110%",
                            color: "#141414",
                          }}
                        >
                          <p className="mb-0">Homeowner views</p>
                          <p className="mb-0">&nbsp;</p>
                          <p>Interactive energy report</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start min-h-[110px] px-[30px] py-0 w-full">
                        <p
                          className={`${inter.className} text-center min-h-[154px] flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "rgba(0, 0, 0, 0.66)",
                          }}
                        >
                          Homeowner views solar size estimation and other possible energy upgrades to reduce home energy expenses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="basis-0 bg-white flex flex-col grow items-center justify-start min-h-px min-w-[400px] overflow-clip relative rounded-[10px] shrink-0">
                  <div className="bg-white flex flex-col items-center justify-start min-w-[295px] px-0 py-[50px] w-full">
                    <div className="bg-[rgba(86,205,69,0.05)] flex items-start justify-center px-10 py-2.5 rounded-[50px] border border-[#56cd45]">
                      <div
                        className={`${inter.className} text-center text-nowrap`}
                        style={{
                          fontFamily: "Inter",
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "110%",
                          color: "#56cd45",
                        }}
                      >
                        Step 3
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-[30px] py-10 w-full">
                      <div className="bg-[#115056] flex items-center justify-center min-h-[90px] min-w-[90px] relative rounded-[100px] w-[150px] h-[150px] border-[10px] border-[rgba(144,228,193,0.1)] shadow-[0px_10px_15px_0px_rgba(15,143,150,0.08),0px_20px_40px_0px_rgba(15,143,150,0.15)]">
                        <div className="flex items-center justify-center p-[15px] relative rounded-[50px]">
                          <div className="overflow-clip relative w-20 h-20">
                            <img 
                              alt="Solar company receives info" 
                              className="block max-w-none w-full h-full" 
                              src="http://localhost:3845/assets/83204b121bdee50fd73b28b39bab683fae942292.svg" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start w-full">
                      <div className="flex items-start justify-start min-h-[60px] px-[30px] py-0 w-full">
                        <div
                          className="text-center min-h-[90px] flex-1"
                          style={{
                            fontFamily: "Aeonik Pro",
                            fontSize: "27px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "110%",
                            color: "#141414",
                          }}
                        >
                          <p className="mb-0">Solar company receives</p>
                          <p className="mb-0">&nbsp;</p>
                          <p>Homeowner info</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start min-h-[110px] px-[30px] py-0 w-full">
                        <p
                          className={`${inter.className} text-center min-h-[154px] flex-1`}
                          style={{
                            fontFamily: "Inter",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "120%",
                            color: "rgba(0, 0, 0, 0.66)",
                          }}
                        >
                          Solar company receives homeowner contact info to connect with and nurture potential solar costumers.
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

      {/* Scroll to Top Button */}
      <ScrollToTop />

      </>
     );
}
