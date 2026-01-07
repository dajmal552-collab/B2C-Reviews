import {
  Star,
  MapPin,
  ShoppingBag,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  List,
} from "lucide-react";
import ReviewPackageCard from "./PackageCard1";
import ReviewPackageCard1 from "./PackageCard1";
import ReviewPackageCard2 from "./PackageCard2";
import ReviewPackageCard3 from "./PackageCard3";

export default function HowItWork() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Payment Methods Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-12">We Accept</h1>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            {/* Payment Icons */}
            <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">
              AMERICAN EXPRESS
            </div>
            <div className="text-2xl">
              <span className="font-semibold"></span> Pay
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-red-500 to-blue-800 rounded-full"></div>
              <span className="font-semibold">Google Pay</span>
            </div>
            <div className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
              iDEAL
            </div>
            <div className="bg-pink-100 text-pink-600 px-4 py-2 rounded text-sm font-bold border border-pink-300">
              Klarna.
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full -ml-2"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full -ml-2"></div>
            </div>
            <div className="text-blue-600 font-bold text-xl">PayPal</div>
            <div className="bg-green-500 text-white px-3 py-2 rounded text-sm font-bold">
              UnionPay
            </div>
            <div className="text-blue-600 font-bold text-2xl italic">VISA</div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ₿
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-20">How it works?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1: Select Platform */}
            <div className="">
              <ReviewPackageCard1 />
            </div>

            {/* Step 2: Customize Review */}
            <div className="">
              <ReviewPackageCard2 />
            </div>

            {/* Step 3: Payment */}
            <div className="">
              <ReviewPackageCard3 />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            <span className="text-blue-800">Boom!</span>{" "}
            <span className="text-black">
              Start Receiving Reviews in Less Than 48 Hours
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
