"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      number: "01",
      question: "How much is the cost per review?",
      answer:
        "To see the pricing, click on the platform you need, then select the service you're looking for. Choose the number of reviews you need, and the price will be displayed accordingly.",
    },
    {
      id: 2,
      number: "02",
      question: "When will I receive my reviews?",
      answer:
        "You will receive your first review within 48 hours. The remaining reviews will be scheduled and delivered at a rate of approximately 3-7 reviews per week, depending on the listing.",
    },
    {
      id: 3,
      number: "03",
      question: "Can I get a free test review?",
      answer:
        "We offer a 1x package that allows you to purchase a single review so you can evaluate the quality and delivery before committing to a larger package.",
    },
    {
      id: 4,
      number: "04",
      question: "Do reviews get removed?",
      answer:
        "No one can guarantee non-drop reviews. However, we provide a replacement policy of up to 7 days. If any reviews drop within this period, we will replace them. Generally, after 7 days, the reviews remain stable.",
    },
    {
      id: 5,
      number: "05",
      question: "Can I have custom details on my reviews?",
      answer:
        "We offer custom text for reviews on all platforms. If you require a custom name, location, or gender, please contact support to check availability for your specific platform.",
    },
    {
      id: 6,
      number: "06",
      question: "Are the reviews real?",
      answer:
        "StarsBooster uses real accounts powered by users whom we compensate for reviewing your business.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-semibold text-white mb-4">
            Frequently Asked <span className="text-blue-800"> Questions?</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-blue-800 pb-4">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-start justify-between py-4 text-left hover:opacity-70 transition group hover:cursor-pointer"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-white/70 font-bold text-lg">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-normal text-white/90 flex-1 group-hover:translate-x-2 transition-transform duration-400">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-blue-800/90 transition-transform shrink-0 ml-4 group-hover:-translate-x-2 duration-400 ${
                    openItem === item.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openItem === item.id && (
                <div className="ml-12 mt-2 pr-10">
                  <p className="text-blue-400/60 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
