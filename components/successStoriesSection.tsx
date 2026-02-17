"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Jenny Wilson",
    role: "CEO & Head of Comp Inc.",
    image: "/images/avatar.png",
  },
  {
    text: "This platform completely transformed how we manage our salon operations. Everything is streamlined and incredibly easy to use.",
    name: "Robert Fox",
    role: "Founder, Style Studio",
    image: "/images/avatar.png",
  },
  {
    text: "Our team productivity increased by 40% after switching. The automation features are a game changer.",
    name: "Cameron Williamson",
    role: "Salon Manager",
    image: "/images/avatar.png",
  },
  {
    text: "Customer satisfaction has improved dramatically. Booking and payments are now seamless.",
    name: "Savannah Nguyen",
    role: "Operations Lead",
    image: "/images/avatar.png",
  },
  {
    text: "I highly recommend this to any growing salon business. It scales beautifully.",
    name: "Devon Lane",
    role: "Owner, Luxe Beauty",
    image: "/images/avatar.png",
  },
];

export default function SuccessStoriesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#F4F7FB] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <div data-aos="fade-up">
            <h2 className="text-3xl leading-[120%] md:text-[44px] font-bold text-[#29343D] font-manrope mb-6">
              Success stories from
              <br />
              real professionals
            </h2>

            <p className="text-[#526B7A] font-manrope font-normal text-[16px] md:text-[18px] max-w-sm mb-6">
              Stylists and salons share why they rely on our tools to run their
              business.
            </p>

            {/* Controls */}
            <div className="flex items-center gap-4 text-gray-500">
              <button
                onClick={prevSlide}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-sm font-medium">
                {index + 1} / {testimonials.length}
              </span>

              <button
                onClick={nextSlide}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative min-h-[220px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[#29343D] font-manrope font-normal text-[16px] md:text-[18px] leading-[150%] mb-8 max-w-xl">
                  {testimonials[index].text}
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonials[index].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quote Icon */}
            <div className="absolute right-0 bottom-8">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-md">
                <img
                  src="/images/qoute.png"
                  alt="Quote"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="border-t border-gray-200 mt-16 pt-10 overflow-hidden"
        >
          <motion.div
            className="flex gap-12 items-center w-max opacity-60"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {/* First Set */}
            <div className="flex gap-12 items-center">
              <img
                src="/images/intel.svg"
                alt="Intel"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/oracle.svg"
                alt="Oracle"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/dell.svg"
                alt="Dell"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/samsung.svg"
                alt="Samsung"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/infosys.svg"
                alt="Infosys"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/capgemini.svg"
                alt="Capgemini"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
            </div>

            {/* Duplicate Set */}
            <div className="flex gap-12 items-center">
              <img
                src="/images/intel.svg"
                alt="Intel"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/oracle.svg"
                alt="Oracle"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/dell.svg"
                alt="Dell"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/samsung.svg"
                alt="Samsung"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/infosys.svg"
                alt="Infosys"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
              <img
                src="/images/capgemini.svg"
                alt="Capgemini"
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
