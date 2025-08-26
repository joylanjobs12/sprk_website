import Image from "next/image";

function RoleCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div
      className="flex w-[294px] h-[400px] min-w-[294px] p-10 flex-col justify-between items-start rounded-[10px] border bg-white"
      style={{
        borderColor: "rgba(17, 80, 86, 0.20)",
        boxShadow:
          "0 63px 25px 0 rgba(38, 142, 151, 0.02), 0 36px 21px 0 rgba(38, 142, 151, 0.08), 0 16px 16px 0 rgba(38, 142, 151, 0.13), 0 4px 9px 0 rgba(38, 142, 151, 0.10)",
      }}
    >
      <div className="h-16 w-16 mb-4 flex items-center justify-center rounded-lg bg-foreground/5 text-foreground">
        {icon}
      </div>
      <div className="text-xl font-semibold mb-2">{title}</div>
      {subtitle ? <div className="opacity-70">{subtitle}</div> : null}
      <div className="mt-6">
        <button className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm">
          Learn More
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground">
          Solar Simplified.
        </h1>
        <h2 className="mt-2 text-5xl sm:text-6xl font-semibold tracking-tight">
          Real Estate Ready.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base opacity-80">
          The trusted platform to connect, understand, value, inspect, and transfer solar homes with confidence and clarity.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center content-center gap-x-6 gap-y-[30px] self-stretch">
        <RoleCard
          icon={<Image src="/home-page/section 1/inspector.svg" alt="Inspector" width={40} height={40} />}
          title={"I’m a Home Inspector"}
        />
        <RoleCard
          icon={<Image src="/home-page/section 1/agent.svg" alt="Real Estate Agent" width={40} height={40} />}
          title={"I’m a Real Estate Agent"}
        />
        <RoleCard
          icon={<Image src="/home-page/section 1/solar-pro.svg" alt="Solar Pro" width={40} height={40} />}
          title={"I’m a Solar Pro"}
        />
        <RoleCard
          icon={<Image src="/home-page/section 1/homeowner.svg" alt="Homeowner" width={40} height={40} />}
          title={"I’m a Homeowner"}
        />
      </div>
    </section>
  );
}
