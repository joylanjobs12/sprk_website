import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <Image src="/logo/logo.svg" alt="Sprk" width={96} height={28} />
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Still Have Questions?
            </h2>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email Us"
                className="w-full h-12 rounded-full px-5 border border-black/15 dark:border-white/15 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Sprk Blog</li>
                <li>Ebook - My Energy Efficient Home</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Who We Serve</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Homeowners</li>
                <li>Pros</li>
                <li>About Sprk</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Download the App</h3>
              <div className="flex gap-3 items-center">
                <Image src="/footer/download-app.svg" alt="App Store" width={140} height={44} />
                <Image src="/footer/google-play.svg" alt="Google Play" width={140} height={44} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-xs opacity-70">
            <div className="flex flex-wrap justify-between gap-3">
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
            <div className="text-6xl font-semibold opacity-10 select-none">SprkHome</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


