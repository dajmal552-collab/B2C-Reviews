"use client";

import { Check } from "lucide-react";
import Link from "next/link";

export default function ReviewPackageCard3() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-linear-to-br from-blue-200 to-blue-800  shadow-xl p-6 flex flex-col gap-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl text-black font-semibold">
          Review Boost Package <br />
          <span className="font-thin">(Premium)</span>
        </h3>
        <p className="text-sm text-black/60">
          Build Trust, Improve SEO & Boost Conversions
        </p>
      </div>

      {/* Price */}
      <div className="text-center">
        <p className="text-3xl font-bold text-blue-800">AED 7500</p>
        <p className="text-sm text-black/70">One-Time Package</p>
      </div>

      {/* Payment Breakdown */}
      <div className="rounded-xl bg-blue-100 p-4 text-sm">
        <p className="flex justify-between">
          <span>Upfront Payment</span>
          <span className="font-semibold">AED 6,000</span>
        </p>
        <p className="flex justify-between text-gray-600 mt-1">
          <span>Remaining Balance</span>
          <span>AED 1,500</span>
        </p>
      </div>

      {/* Reviews List */}
      <div>
        <h4 className="font-semibold mb-2">Reviews Included (270 Total)</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            45 Reviews on Trustpilot
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            45 Reviews on Google
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            90 Reviews on MyLifeGB
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            45 Reviews on Facebook Page
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            45 Reviews on Reviews.io
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            45 Reviews on Yell
          </li>
        </ul>
      </div>

      {/* SEO Section */}
      <div>
        <h4 className="font-semibold mb-2">SEO & Promotion</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            Basic On-Page SEO
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            Basic Off-Page SEO
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-blue-500" />
            Backlinks Integration
          </li>
        </ul>
      </div>

      {/* CTA */}

      <Link
        target="blank"
        href={
          "https://api.leadconnectorhq.com/widget/booking/3VT5mSpsqDTL5pKljjJT"
        }
      >
        <button className="mt-4 w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition">
          Book Now
        </button>
      </Link>

      {/* Disclaimer */}
      <p className="text-xs text-white text-center mt-2">
        Delivery is gradual and follows platform guidelines.
      </p>
    </div>
  );
}
