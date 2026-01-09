import React from "react";

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#faf7f2] to-white min-h-screen py-24">
      {/* Decorative shapes */}
      <svg
        className="pointer-events-none absolute left-0 top-0 -translate-x-1/3 -translate-y-1/3 opacity-50 z-0"
        width="560"
        height="560"
        viewBox="0 0 560 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="280" cy="280" r="200" fill="#FDE68A" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              About eTrade modern ecommerce built with care
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              We build simple, trustworthy shopping experiences curated products,
              fast delivery, transparent pricing and human-first support. Based in
              Dehradun, Uttarakhand, serving customers across India.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href="mailto:rohit.pokhariya123@gmail.com"
                className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm font-medium shadow hover:shadow-lg transition transform active:scale-95"
              >
                📧 rohit.pokhariya123@gmail.com
              </a>

              <button
                onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
                className="inline-flex items-center gap-2 border border-gray-200 px-4 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition"
              >
                Learn more
              </button>
            </div>

            {/* quick tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Quality", "Fast Delivery", "Secure Payment", "Easy Returns"].map(
                (t, i) => (
                  <span
                    key={i}
                    className="inline-block bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Founder / Location Card */}
          <aside className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 to-rose-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                R
              </div>
              <div>
                <div className="font-semibold text-gray-900">Rohit Pokhariya</div>
                <div className="text-sm text-gray-500">Founder — eTrade</div>
                <div className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      stroke="#9CA3AF"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9" r="2.2" fill="#9CA3AF" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/place/Dehradun,+Uttarakhand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium cursor-pointer hover:text-blue-600 transition"
                  >
                    📍 Dehradun, Uttarakhand, India
                  </a>


                </div>
              </div>
            </div>

            <div className="mt-6 border-t pt-4 flex flex-col gap-3">
              <a
                href="mailto:rohit.pokhariya123@gmail.com"
                className="text-sm text-blue-600 hover:underline"
              >
                rohit.pokhariya123@gmail.com
              </a>
              <div className="text-xs text-gray-500">
                Building ecommerce UIs with React & Tailwind — product-focused design.
              </div>
            </div>
          </aside>
        </header>

        {/* Features / cards: effortful, human-designed */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Curated Selection"
            subtitle="Hand-picked products that meet strict quality checks."
            icon={
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M12 1v22M4 7h16"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          <FeatureCard
            title="Fast & Reliable Delivery"
            subtitle="3–5 day delivery across major cities with full tracking."
            icon={
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M3 7h13l4 4v6H3z"
                  stroke="#111827"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="18" r="1.6" fill="#111827" />
                <circle cx="18" cy="18" r="1.6" fill="#111827" />
              </svg>
            }
          />

          <FeatureCard
            title="Human Support"
            subtitle="Real people to help — before and after your purchase."
            icon={
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                  stroke="#111827"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="7" r="3" stroke="#111827" strokeWidth="1.4" />
              </svg>
            }
          />
        </section>

        {/* Story + visual card */}
        <section className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              eTrade started as a small project to make clean, reliable online shopping
              experiences. We focus on honest product information, simple checkout and
              great post-purchase support because a good online store respects both
              product and person.
            </p>

            <ul className="mt-6 grid gap-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span className="text-gray-600">Quality checks on every product</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span className="text-gray-600">Easy returns & fast refunds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✔</span>
                <span className="text-gray-600">Transparent pricing, no surprises</span>
              </li>
            </ul>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-tr from-orange-50 via-white to-rose-50 p-10 h-full flex items-center justify-center">
              <div className="w-full max-w-sm text-center">
                <div className="mb-6">
                  <div className="w-36 h-36 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7h13l4 4v6H3z"
                        stroke="#111827"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900">Built for people</h4>
                <p className="mt-3 text-gray-600">
                  Thoughtful product selection and a smooth checkout to save time and
                  trouble.
                </p>

                <div className="mt-6">
                  <a
                    href="mailto:rohit.pokhariya123@gmail.com"
                    className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"
                  >
                    Contact Rohit
                  </a>
                </div>
              </div>
            </div>

            {/* decorative bottom wave */}
            <svg
              viewBox="0 0 1440 80"
              className="w-full block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#fff" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,53.3C672,53,768,75,864,74.7C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

/* small FeatureCard component inside same file */
function FeatureCard({ title, subtitle, icon }) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-50 transform transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-orange-100 to-rose-100 flex items-center justify-center text-orange-600">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{title}</div>
          <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
        </div>
      </div>

      <div className="mt-4">
        <span className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium group-hover:underline cursor-pointer">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12h14M12 5l7 7-7 7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default About;
