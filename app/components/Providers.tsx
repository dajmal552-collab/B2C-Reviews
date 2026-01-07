import { Star } from "lucide-react";

export default function Providers() {
  const platforms = [
    // Row 1
    [
      {
        name: "Google",
        logo: ":red_circle::large_yellow_circle::large_blue_circle::large_green_circle:",
        customLogo: true,
      },
      { name: "Trustpilot", logo: ":star:", color: "text-emerald-500" },
      { name: "TripAdvisor", logo: ":owl:", customLogo: true },
      { name: "Amazon", logo: "a", customLogo: true },
      { name: "Yelp", logo: ":star:", color: "text-red-600" },
    ],
    // Row 2
    [
      {
        name: "Product Hunt",
        logo: "P",
        color: "text-orange-600 bg-orange-600",
      },
      { name: "Airbnb", logo: ":house:", color: "text-pink-500" },
      { name: "Fiverr", logo: "f.", color: "text-green-900" },
      { name: "Thumbtack", logo: "T", color: "text-blue-500 bg-blue-500" },
      { name: "Facebook", logo: "f", color: "text-blue-700 bg-blue-700" },
    ],
    // Row 3
    [
      { name: "Capterra", logo: ":triangular_ruler:", customLogo: true },
      { name: "Glassdoor", logo: "G", color: "text-green-600" },
      { name: "Booking", logo: "B.", color: "text-blue-900 bg-blue-900" },
      { name: "G2", logo: "G2", color: "text-orange-500" },
      { name: "Removal", logo: ":star::wastebasket:", customLogo: true },
    ],
  ];

  return (
    <div className="bg-black min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-blue-800">#1 Provider</span>
            <span className="text-white"> of </span>
            <span className="text-white">Real Reviews</span>
            <span className="text-white"> for </span>
            <span className="text-white">Google,</span>
            <br />
            <span className="text-white">Yelp, Trustpilot & More</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Get authentic 5-star reviews on Google Maps, Yelp, Trustpilot and
            more to boost local SEO and trust.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="space-y-4 max-w-6xl mx-auto">
          {platforms.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-5 gap-4">
              {row.map((platform, colIndex) => (
                <div
                  key={colIndex}
                  className="bg-white/90 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border-4 border-blue-800 hover:scale-105 transition-transform duration-200"
                >
                  {/* Platform Name */}
                  <div className="text-black font-bold text-lg mb-4">
                    {platform.name}
                  </div>

                  {/* Platform Logo/Icon */}
                  <div className="flex items-center justify-center">
                    {platform.name === "Google" && (
                      <svg className="w-16 h-16" viewBox="0 0 48 48">
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>
                    )}

                    {platform.name === "Trustpilot" && (
                      <svg
                        className="w-16 h-16"
                        viewBox="0 0 24 24"
                        fill="#00B67A"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}

                    {platform.name === "TripAdvisor" && (
                      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12"
                          viewBox="0 0 24 24"
                          fill="black"
                        >
                          <circle cx="8" cy="12" r="3" />
                          <circle cx="16" cy="12" r="3" />
                          <path
                            d="M12 6c-3.5 0-6.5 2-8 5 1.5 3 4.5 5 8 5s6.5-2 8-5c-1.5-3-4.5-5-8-5z"
                            fill="none"
                            stroke="black"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    )}

                    {platform.name === "Amazon" && (
                      <div className="relative">
                        <span className="text-5xl font-bold text-black">a</span>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-800 rounded-full transform translate-y-1"></div>
                      </div>
                    )}

                    {platform.name === "Yelp" && (
                      <svg
                        className="w-16 h-16"
                        viewBox="0 0 24 24"
                        fill="#D32323"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}

                    {platform.name === "Product Hunt" && (
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">P</span>
                      </div>
                    )}

                    {platform.name === "Airbnb" && (
                      <svg
                        className="w-16 h-16"
                        viewBox="0 0 24 24"
                        fill="#FF5A5F"
                      >
                        <path d="M12 2C9.5 2 8 3.5 8 6c0 2 2 5 4 7 2-2 4-5 4-7 0-2.5-1.5-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6 6c-1.5 0-3 1-3 3s1.5 3 3 3c1 0 2-.5 2.5-1.5.5 1 1.5 1.5 2.5 1.5h4c1 0 2-.5 2.5-1.5.5 1 1.5 1.5 2.5 1.5 1.5 0 3-1 3-3s-1.5-3-3-3c-1 0-2 .5-2.5 1.5C14.5 14.5 13.5 14 12.5 14h-1c-1 0-2 .5-2.5 1.5-.5-1-1.5-1.5-2.5-1.5z" />
                      </svg>
                    )}

                    {platform.name === "Fiverr" && (
                      <div className="flex items-center">
                        <span className="text-5xl font-bold text-green-900">
                          f
                        </span>
                        <span className="text-4xl font-bold text-green-600">
                          .
                        </span>
                      </div>
                    )}

                    {platform.name === "Thumbtack" && (
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">T</span>
                      </div>
                    )}

                    {platform.name === "Facebook" && (
                      <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">f</span>
                      </div>
                    )}

                    {platform.name === "Capterra" && (
                      <svg className="w-16 h-16" viewBox="0 0 24 24">
                        <path fill="#FF6B35" d="M2 12L12 2l10 10-10 10z" />
                        <path fill="#4ECDC4" d="M12 2l10 10-10 5z" />
                        <path fill="#FFD93D" d="M2 12l10 10V12z" />
                      </svg>
                    )}

                    {platform.name === "Glassdoor" && (
                      <div className="w-16 h-16 border-4 border-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-4xl font-bold text-green-600">
                          G
                        </span>
                      </div>
                    )}

                    {platform.name === "Booking" && (
                      <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center">
                        <span className="text-white text-4xl font-bold">
                          B.
                        </span>
                      </div>
                    )}

                    {platform.name === "G2" && (
                      <svg className="w-16 h-16" viewBox="0 0 48 48">
                        <path
                          fill="#FF6B35"
                          d="M12 8c-6 0-8 4-8 8s2 8 8 8c4 0 6-2 7-4h-7v-4h12v6c0 6-4 12-12 12C6 34 0 28 0 20S6 6 12 6c4 0 7 2 9 4l-3 3c-1-2-3-3-6-3-4 0-7 3-7 7s3 7 7 7c3 0 5-2 6-4h-6v-4h10v2z"
                        />
                        <path
                          fill="#FF9F66"
                          d="M36 14v8h-8v4h8v8h4v-8h8v-4h-8v-8z"
                        />
                      </svg>
                    )}

                    {platform.name === "Removal" && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <span className="text-blue-800 text-xl">
                            <Star />
                          </span>
                          <span className="text-gray-300 text-xl">
                            <Star />
                            <Star />
                          </span>
                          <span className="text-pink-500 text-2xl">
                            <Star />
                          </span>
                        </div>
                        <div className="text-xs font-bold">
                          <div className="text-blue-600">NEGATIVE</div>
                          <div className="text-blue-600">REVIEW</div>
                          <div className="text-orange-500">REMOVAL</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
