// Budget tiers for the contact form's range picker. Shared by the page (readout)
// and the Worker (validation + email), so the slider index means the same thing on both sides.
// Tiers line up across currencies, so switching currency keeps the slider position.

export const currencies = ['usd', 'mxn'] as const;
export type Currency = (typeof currencies)[number];

// [min, max] per tier; null max = open-ended top tier.
export const budgetTiers: Record<Currency, [number, number | null][]> = {
	usd: [[0, 1_000], [1_000, 3_000], [3_000, 5_000], [5_000, 10_000], [10_000, 20_000], [20_000, 50_000], [50_000, null]],
	mxn: [[0, 20_000], [20_000, 50_000], [50_000, 100_000], [100_000, 200_000], [200_000, 400_000], [400_000, 1_000_000], [1_000_000, null]],
};

export const budgetSteps = budgetTiers.usd.length;

const short = (n: number) => (n >= 1_000_000 ? `${n / 1_000_000}M` : `${n / 1_000}K`);

export const isCurrency = (value: string): value is Currency => (currencies as readonly string[]).includes(value);

/** "$5K–10K USD", "< $1K USD", "$1M+ MXN"; null for an out-of-range index. */
export const budgetLabel = (index: number, currency: Currency) => {
	const tier = budgetTiers[currency][index];
	if (!tier) return null;
	const [min, max] = tier;
	const range = max === null ? `$${short(min)}+` : min === 0 ? `< $${short(max)}` : `$${short(min)}–${short(max)}`;
	return `${range} ${currency.toUpperCase()}`;
};
