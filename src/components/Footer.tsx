import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <footer className=" bg-[#F9FAFB]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[96px] py-[64px] sm:py-[80px] lg:py-[100px] flex flex-col items-center gap-[48px] sm:gap-[64px] lg:gap-[80px]">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6">
            <Image src="/logo/logo.svg" alt="Sprk" width={96} height={28} />
            <h2
              className="flex-[1_0_0]"
              style={{
                color: "var(--Text-Title, #141414)",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 80,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              Still Have Questions?
            </h2>
            <div
              className="flex flex-wrap items-center content-center self-stretch px-[50px] py-4 rounded-[50px] border"
              style={{ borderColor: "var(--Body-Text, rgba(0, 0, 0, 0.66))" }}
            >
              <input
                type="email"
                placeholder="Email Us"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10 py-[80px]">
            <div>
              <h3
                className="mb-4"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontSize: 32,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Resources
              </h3>
              <ul
                className={`${inter.className} space-y-2 self-stretch`}
                style={{
                  color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                <li>Sprk Blog</li>
                <li>Ebook - My Energy Efficient Home</li>
              </ul>
            </div>
            <div>
              <h3
                className="mb-4"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontSize: 32,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Who We Serve
              </h3>
              <ul
                className={`${inter.className} space-y-2 self-stretch`}
                style={{
                  color: "var(--Body-Text, rgba(0, 0, 0, 0.66))",
                  fontSize: 18,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                }}
              >
                <li>Homeowners</li>
                <li>Pros</li>
                <li>About Sprk</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3
                className="mb-4"
                style={{
                  color: "var(--Text-Title, #141414)",
                  fontFamily: '"Aeonik Pro", sans-serif',
                  fontSize: 32,
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "110%",
                }}
              >
                Download the App
              </h3>
              <div className="flex gap-3 items-center">
                <Image src="/footer/download-app.svg" alt="App Store" width={140} height={44} />
                <Image src="/footer/google-play.svg" alt="Google Play" width={140} height={44} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-xs opacity-70 w-full">
            <div className="flex flex-wrap justify-between gap-3 pb-[50px] ">
              <span>SprkHome © 2025. All rights reserved.</span>
              <div className="flex flex-wrap gap-4">
                <span>Privacy Policy</span>
                <span>Privacy Policy</span>
                <span>Trust Center</span>
                <span>Acceptable Use Guidelines</span>
                <span>Legal & Compliance</span>
                <span>Your Privacy Choices</span>
                <span>Cookies</span>
              </div>
            </div>
            <div
              className="self-stretch text-center select-none"
              style={{
                color: "rgba(0, 0, 0, 0.15)",
                fontFamily: '"Aeonik Pro", sans-serif',
                fontSize: 80,
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "110%",
              }}
            >
              SprkHome
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


