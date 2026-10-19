/**
 * Tcha Brand Protection & Security Platform
 * Automated Stripe Payment Link Provisioner
 * 
 * Usage:
 *   $env:STRIPE_SECRET_KEY="sk_live_..."
 *   node scripts/setup_stripe_links.mjs
 */

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET) {
  console.log(`
[!] STRIPE_SECRET_KEY environment variable is not set.
To generate live Stripe Checkout Payment Links, run:
  Windows PowerShell:
    $env:STRIPE_SECRET_KEY = "sk_live_your_actual_key"
    node scripts/setup_stripe_links.mjs

  Bash / Linux / Mac:
    export STRIPE_SECRET_KEY="sk_live_your_actual_key"
    node scripts/setup_stripe_links.mjs

Displaying product catalog blueprint and test links below:
`);
}

const PRODUCTS_TO_PROVISION = [
  {
    name: "Pre-Q4 Brand Squatting & Domain Defense Audit",
    description: "Complete forensic audit of lookalike/typosquatted domains (.co, .store, .shop), DMARC/SPF/DKIM inspection, and pre-BFCM brand defense report.",
    amount: 49700, // $497.00
    currency: "usd",
    type: "one_time"
  },
  {
    name: "Done-For-You Reinstatement Review & 8-Point Invoice Audit",
    description: "Forensic attorney-grade inspection of deactivation notice, 8-point invoice compliance verification, and customized 3-Part Plan of Action (POA) review within 24 hours.",
    amount: 99700, // $997.00
    currency: "usd",
    type: "one_time"
  },
  {
    name: "Tcha Pre-Suspension Shield SaaS",
    description: "Continuous e-commerce brand defense: automated weekly USPTO trademark infringement scans, customer review defect radar, and priority reinstatement SLA.",
    amount: 19900, // $199.00 / month
    currency: "usd",
    type: "recurring",
    interval: "month"
  }
];

async function stripeRequest(endpoint, params) {
  const formBody = new URLSearchParams(params).toString();
  const response = await fetch(`https://api.stripe.com/v1/${endpoint}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${STRIPE_SECRET}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formBody
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Stripe API error [${endpoint}]: ${data.error?.message || JSON.stringify(data)}`);
  }
  return data;
}

async function main() {
  if (!STRIPE_SECRET) {
    console.log("=== TCHA BRAND PROTECTION PRICING TIERS ===");
    PRODUCTS_TO_PROVISION.forEach((p, idx) => {
      const priceStr = p.type === 'recurring' ? `$${p.amount / 100}/mo` : `$${p.amount / 100} one-time`;
      console.log(`[Tier ${idx + 1}] ${p.name} - ${priceStr}`);
      console.log(`         ${p.description}\n`);
    });
    return;
  }

  console.log("Provisioning live Stripe products and payment links...\n");

  for (const item of PRODUCTS_TO_PROVISION) {
    try {
      // 1. Create Product
      const product = await stripeRequest("products", {
        name: item.name,
        description: item.description
      });
      console.log(`[✓] Created Product: ${product.name} (${product.id})`);

      // 2. Create Price
      const priceParams = {
        product: product.id,
        unit_amount: item.amount.toString(),
        currency: item.currency
      };
      if (item.type === "recurring") {
        priceParams["recurring[interval]"] = item.interval;
      }

      const price = await stripeRequest("prices", priceParams);
      console.log(`[✓] Created Price: $${item.amount / 100} ${item.currency.toUpperCase()} (${price.id})`);

      // 3. Create Payment Link
      const paymentLink = await stripeRequest("payment_links", {
        "line_items[0][price]": price.id,
        "line_items[0][quantity]": "1"
      });
      console.log(`[⚡] Live Payment Link: ${paymentLink.url}\n`);

    } catch (err) {
      console.error(`[X] Error provisioning ${item.name}:`, err.message);
    }
  }
}

main().catch(console.error);
