const COCKPIT_URL = process.env.NEXT_PUBLIC_COCKPIT_URL;
const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

async function getOurStory() {
  if (typeof window === 'undefined') {
    try {
      const dns = require('node:dns');
      if (dns && typeof dns.setDefaultResultOrder === 'function') {
        dns.setDefaultResultOrder('ipv4first');
      }
    } catch (e) {}
  }
  try {
    const res = await fetch(
      `${COCKPIT_URL}/api/content/item/ourstory?token=${TOKEN}`,
      { 
        cache: "no-store",
        next: { revalidate: 0 } 
      }
    );
    
    if (!res.ok) {
      console.error(`Cockpit API Error: ${res.status} ${res.statusText}`);
      return null;
    }
    
    const json = await res.json();
    return json;
  } catch (error) {
    console.error("Failed to fetch ourstory from Cockpit:", error);
    return null;
  }
}

function renderRichText(text: string) {
  if (!text) return null;

  return (
    <p className="text-sm text-[#6F6B63] leading-relaxed mt-2">
      {text}
    </p>
  );
}

export default async function OurStory() {
  const data = await getOurStory();

  if (!data) return null;

  // Cockpit uses path not url
  const imageUrl = data.image?.path;

  return (
    <section className="bg-[#F4F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 lg:py-5">
        <div className="bg-white rounded-2xl border border-[#E5E2DA] shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">

          {/* Left Image */}
          <div className="w-full md:w-1/2">
            {imageUrl && (
              <img
                src={`${COCKPIT_URL}/storage/uploads${imageUrl}?token=${TOKEN}`}
                alt="Our Story"
                className="w-full h-auto rounded-xl shadow-sm object-cover border border-[#E5E2DA]"
              />
            )}
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#F5F5F5] border border-[#E5E2DA] rounded-full px-3 py-1 mb-2">
              <span className="w-2 h-2 bg-[#C15F3C] rounded-full"></span>
              <span className="text-xs font-medium text-[#C15F3C]">Our Story</span>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#2F2E2B]">
              {data.title}
            </h3>

            <div className="space-y-3">
              {renderRichText(data.para1)}
              {renderRichText(data.para2)}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-4 border-t border-[#E5E2DA]">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#B1ADA1]">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Trusted by 50,000+ startups</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Secure & Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 fill-[#C15F3C] text-[#C15F3C]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    <circle cx="10" cy="10" r="3" />
                  </svg>
                  <span>Customer First Philosophy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
