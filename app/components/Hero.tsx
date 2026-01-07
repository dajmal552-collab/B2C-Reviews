"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const slides = [
  {
    title: "Trusted by 50K+ Companies",
    image: "/star.png",
  },
  {
    title: "Rated",
    image: "/star2.png",
  },
  {
    title: "Online Reputation Managment",
    image: "/star3.png",
  },
  {
    title: "Boost Reviews",
    image: "/star4.png",
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const safeActive = active % slides.length;

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return p + 2;
      });
    }, SLIDE_DURATION / 50);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex justify-center border-b">
      <div className="max-w-7/12 w-full mx-auto my-auto grid lg:grid-cols-2 items-center">
        <div key={safeActive} className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            {slides[safeActive].title}
          </h1>

          <Link
            target="blank"
            href={
              "https://api.leadconnectorhq.com/widget/booking/3VT5mSpsqDTL5pKljjJT"
            }
          >
            <button className="mt-4 w-fit px-8 rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div key={safeActive} className="animate-slideFromRight">
            <Image
              src={slides[safeActive].image}
              alt="Diapositive principale"
              width={420}
              height={420}
              className="object-cover drop-shadow-blue-700 drop-shadow-2xl h-[50dvh]"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 absolute bottom-7">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative w-10 h-1.5 bg-blue-900/50 rounded-full overflow-hidden"
          >
            <span
              className="absolute left-0 top-0 h-full bg-blue-700 transition-all"
              style={{ width: i === safeActive ? `${progress}%` : "0%" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
