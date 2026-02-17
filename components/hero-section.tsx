"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full min-h-auto flex flex-col items-center pt-32 md:pt-40 lg:pt-40 overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0 w-full h-[85%] lg:h-[90%]">
        <Image
          src="/images/hero-bg.png"
          alt="Background Decoration"
          fill
          priority
          className="object-cover object-top"
          quality={100}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Headline */}
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl lg:text-[56px] tracking-tight text-[#29343D] font-normal font-Manrope mb-6 leading-[1.1]"
        >
          <span className="text-[#635BFF] font-extrabold font-Manrope">
            Transform
          </span>{" "}
          Your Salon Business
        </h1>
        {/* Subheadline */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-base font-manrope md:text-[16px] max-w-4xl mb-8 leading-relaxed text-[#526B7A] font-medium z-10"
        >
          One platform — booking, inventory, forms, budgeting & social media —
          built to simplify and scale
        </p>

        {/* CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col items-center gap-2 z-10"
        >
          <button
            className="px-4 py-2.5 font-manrope bg-[#635BFF] text-white text-[14px] rounded-[8px] 
            hover:bg-[#4B4ECA] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Start Your Free Trial
          </button>

          <span className="text-sm font-medium text-[#526B7A] text-normal leading-6 font-manrope">
            No credit card needed
          </span>
        </div>

        {/* Dashboard Preview */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="relative w-full max-w-5xl px-2 md:px-0 mt-10"
        >
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/dashboard.png"
              alt="Salon Management Dashboard"
              width={1200}
              height={750}
              className="w-full h-auto block"
              priority
            />
            <Image
              src="/images/effectDashboard.png"
              alt="Salon Management Dashboard"
              width={1200}
              height={750}
              className="w-full h-auto absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 transform scale-140 -z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
