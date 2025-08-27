import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TestimonialData {
  image: string;
  text: string;
  name: string;
  company: string;
}

interface TestimonialsProps {
  data: TestimonialData[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
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
          {data.map((testimonial, index) => (
            <div key={index} className="rounded-[10px] border border-black/10 bg-white overflow-hidden">
              <div>
                <Image 
                  src={testimonial.image} 
                  alt={`${testimonial.name} profile`} 
                  width={400} 
                  height={500} 
                  className="w-full h-auto" 
                />
              </div>
              <div className="flex min-w-[350px] p-[50px] flex-col items-start gap-[30px] flex-1 basis-0">
                <p className={`${inter.className} flex-1 basis-0 text-[16px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                  {testimonial.text}
                </p>
                <div>
                  <div className="flex-1 basis-0 text-[#141414] text-[32px] leading-[110%] font-medium font-['Aeonik_Pro']">
                    {testimonial.name}
                  </div>
                  <div className={`${inter.className} flex-1 basis-0 text-[18px] leading-[120%] font-normal text-[rgba(0,0,0,0.66)]`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
