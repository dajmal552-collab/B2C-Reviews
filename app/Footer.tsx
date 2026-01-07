export default function Footer() {
  return (
    <footer className="bg-white/90 text-black rounded-t-[100px]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 4L38.5 22.5L57 24L43 37L47.5 56L32 46L16.5 56L21 37L7 24L25.5 22.5L32 4Z"
                  fill="#FDB022"
                />
              </svg>
              <div className="text-7xl font-sans">
                <div>Reviews</div>
                <div>Booster</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black/70 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-black/20 transition-colors">
                  Buy Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black/20 transition-colors">
                  Remove Negative Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black/20 transition-colors">
                  Become a Reviewer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black/20 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black/20 transition-colors">
                  Who We Are
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="font-sans text-2xl">Stars Booster Ltd</div>
              <div className="font-sans text-xl">Company number: 15970060</div>

              <div className="flex items-start gap-3 mt-6">
                <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a
                  href="mailto:Support@starsbooster.io"
                  className="hover:text-black/20 break-all mt-1 font-bold"
                >
                  Support@starsbooster.io
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="font-bold">
                  362 Blackfriars Rd, Salford, United Kingdom, M3 7BY
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-800 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <a
                  href="tel:+447537131672"
                  className="hover:text-black/20 mt-2 font-bold"
                >
                  +447537131672
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/60"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Copyright and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="text-black/80 text-sm">
            © 2025 Stars Booster. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-black/80 hover:text-yellow-400 transition-colors"
            >
              Terms of service
            </a>
            <a
              href="#"
              className="text-black/80 hover:text-yellow-400 transition-colors"
            >
              Refund Policy
            </a>
            <a
              href="#"
              className="text-black/80 hover:text-yellow-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-black/80 hover:text-yellow-400 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-black/80 hover:text-yellow-400 transition-colors"
            >
              Cookie preferences
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* American Express */}
          <div className="h-8 px-4 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">
              AMERICAN EXPRESS
            </span>
          </div>

          {/* Apple Pay */}
          <div className="h-8 px-4 bg-black border border-gray-600 rounded flex items-center justify-center">
            <svg className="h-6" viewBox="0 0 50 20" fill="white">
              <path d="M9.5 3.5c-.6.7-1.5 1.2-2.4 1.1-.1-.9.3-1.9.9-2.5.6-.7 1.6-1.2 2.4-1.1.1.9-.3 1.8-.9 2.5zm.9 1.4c-1.3-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.6-1.4 0-2.6.8-3.3 2-.1.2-.2.4-.3.7-.5 1.3-.9 3.3.2 5.3.5.9 1.2 1.9 2.1 1.9.9 0 1.2-.6 2.3-.6s1.3.6 2.3.6c1 0 1.5-.9 2.1-1.8.3-.5.6-1 .7-1.6-.7-.3-1.3-.9-1.6-1.6-.4-.8-.4-1.8 0-2.6.4-.7 1-1.2 1.8-1.4-.7-1-1.8-1.6-2.9-1.7h-.8zm8.1-1.4c2.3 0 3.8 1.6 3.8 3.9s-1.6 3.9-4 3.9h-2.6v4h-1.8v-11.8h4.6zm-2.8 6.2h2.2c1.6 0 2.5-.8 2.5-2.3s-.9-2.3-2.5-2.3h-2.2v4.6zm11.8 5.8c-1.1 0-2.1-.4-2.8-1.2-.7-.8-1.1-1.9-1.1-3s.4-2.2 1.1-3c.7-.8 1.7-1.2 2.8-1.2s2.1.4 2.8 1.2c.7.8 1.1 1.9 1.1 3s-.4 2.2-1.1 3c-.7.8-1.7 1.2-2.8 1.2zm0-1.4c.6 0 1.2-.3 1.5-.8.3-.5.5-1.2.5-1.9s-.2-1.4-.5-1.9c-.3-.5-.9-.8-1.5-.8s-1.2.3-1.5.8c-.3.5-.5 1.2-.5 1.9s.2 1.4.5 1.9c.3.5.9.8 1.5.8zm10.1 1.4c-1.3 0-2.4-.5-3.1-1.4l1.2-1c.5.6 1.2.9 1.9.9.8 0 1.3-.4 1.3-1v-.2c0-.6-.5-1-1.5-1h-1v-1.4h1c.9 0 1.3-.4 1.3-.9v-.2c0-.6-.5-.9-1.2-.9-.7 0-1.3.3-1.7.8l-1.1-1c.7-.8 1.7-1.3 2.9-1.3 1.7 0 2.8.9 2.8 2.2v.1c0 .9-.5 1.6-1.3 1.9v.1c.9.2 1.5 1 1.5 1.9v.1c0 1.4-1.2 2.3-3 2.3z" />
            </svg>
          </div>

          {/* Google Pay */}
          <div className="h-8 px-4 bg-white rounded flex items-center justify-center">
            <svg className="h-5" viewBox="0 0 50 20">
              <text
                x="5"
                y="14"
                fontFamily="Arial"
                fontSize="12"
                fontWeight="bold"
                fill="#5F6368"
              >
                Google Pay
              </text>
            </svg>
          </div>

          {/* iDEAL */}
          <div className="h-8 px-3 bg-white border-2 border-pink-600 rounded flex items-center justify-center">
            <span className="text-pink-600 font-bold text-sm">iDEAL</span>
          </div>

          {/* Klarna */}
          <div className="h-8 px-4 bg-pink-100 rounded flex items-center justify-center">
            <span className="text-pink-600 font-bold text-sm">Klarna.</span>
          </div>

          {/* Maestro */}
          <div className="h-8 px-3 bg-white rounded flex items-center justify-center">
            <div className="flex items-center gap-0.5">
              <div className="w-5 h-5 bg-red-600 rounded-full opacity-80"></div>
              <div className="w-5 h-5 bg-blue-600 rounded-full opacity-80 -ml-3"></div>
            </div>
          </div>

          {/* Mastercard */}
          <div className="h-8 px-3 bg-white rounded flex items-center justify-center">
            <div className="flex items-center gap-0.5">
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              <div className="w-5 h-5 bg-blue-800 rounded-full -ml-3"></div>
            </div>
          </div>

          {/* PayPal */}
          <div className="h-8 px-4 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">PayPal</span>
          </div>

          {/* UnionPay */}
          <div className="h-8 px-3 bg-gradient-to-r from-red-600 to-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">UnionPay</span>
          </div>

          {/* Visa */}
          <div className="h-8 px-4 bg-blue-700 rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg italic">VISA</span>
          </div>

          {/* Bitcoin */}
          <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">₿</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
