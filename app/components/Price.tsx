import PricingCardClient from './PricingCardClient';

type PricingProps = {
  category?: string;
};

const COCKPIT_BASE = process.env.NEXT_PUBLIC_COCKPIT_URL;
const TOKEN = process.env.NEXT_PUBLIC_COCKPIT_API_KEY;

async function getPricing(category?: string) {
  try {
    const sectionRes = await fetch(
      `${COCKPIT_BASE}/api/content/item/pricingSection?token=${TOKEN}`,
      { cache: "no-store" }
    );
    const section = await sectionRes.json();

    const filter = category
      ? `&filter=${encodeURIComponent(JSON.stringify({
        category: { "$regex": category, "$options": "i" }
      }))}`
      : "";

    const cardRes = await fetch(
      `${COCKPIT_BASE}/api/content/items/pricingCard?token=${TOKEN}${filter}`,
      { cache: "no-store" }
    );

    const cardData = await cardRes.json();
    const cards = Array.isArray(cardData) ? cardData : (cardData?.entries || []);

    return { section, cards };
  } catch (error) {
    console.error("Pricing Fetch Error:", error);
    return null;
  }
}

export default async function PricingSection({ category }: PricingProps) {
  const data = await getPricing(category);

  if (!data || !data.section || data.cards.length === 0) return null;

  const { cards } = data;

  const filteredCards = cards.filter((card: any) => {
    return card.title && card.title !== "Proprietorship.";
  });

  return (
    <section className="bg-[#F4F3EE] py-20 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E5E2DA] rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <div className="w-2 h-2 bg-[#C15F3C] rounded-full" />
            <span className="text-xs font-medium text-[#C15F3C]">PRICING</span>
          </div>
          <h2 className="text-3xl md:text-3xl font-bold text-[#2E2E2E] mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-[#6F6B63] text-lg max-w-2xl mx-auto mb-2">
            Start your business easily with dedicated expert assistance.
          </p>
          <p className="text-xs text-[#B1ADA1] font-medium">
            Note: Prices are inclusive of professional fees and government filing charges.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
          {filteredCards.map((card: any) => {
            let features = [
              { text: 'Dedicated Expert' },
              { text: 'Document Preparation' },
              { text: 'Consultation Session' },
              { text: 'Email Support' },
              { text: 'Priority Processing' }
            ];

            if (card.title === "Professional Tax Cancellation") {
              features = [
                { text: 'Dedicated Expert' },
                { text: 'Consultation Session' },
                { text: 'Email Support' },
                { text: 'Priority Processing' }
              ];
            } else if (card.title === "Trust Registration") {
              features = [
                { text: 'Dedicated Expert' },
                { text: 'Document Preparation' }
              ];
            } else if (card.title === "proprietorship." || card.title === "Proprietorship") {
              features = [
                { text: 'Dedicated Expert' },
                { text: 'Consultation Session' }
              ];
            } else if (card.title === "Professional Tax Return Filing") {
              features = [
                { text: 'Dedicated Expert' },
                { text: 'Document Preparation' },
                { text: 'Consultation Session' }
              ];
            } else if (card.title === "Professional Tax Registration Certificate") {
              features = [
                { text: 'Dedicated Expert' },
                { text: 'Document Preparation' },
                { text: 'Consultation Session' }
              ];
            }

            const plan = {
              title: card.title,
              price: card.price,
              description: card.description || "Start your business easily with dedicated expert assistance.",
              features: features,
              isPopular: card.isPopular || false
            };

            return (
              <PricingCardClient key={card._id} plan={plan} />
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6F6B63] text-sm">
            Need a custom plan?{' '}
            <span className="text-[#C15F3C] font-medium cursor-pointer hover:underline">
              Contact sales
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
