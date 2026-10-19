# 🌐 Tcha Domain Architecture, DMARC Enforcement & Brand Sentry Setup

This operational guide details the domain strategy for the **Tcha Brand Protection & Security** platform, including email security hardening (DMARC `p=reject`), defensive domain registration, and client audit execution procedures.

---

## 1. Primary Platform Domain Strategy

### Recommended Domain Hierarchy
1. **Primary Commercial SaaS & Brand Portal**: `tchashield.com` or `tchaprotection.com`
   - Hosts the public landing page, customer dashboard, and merchant account portal.
2. **Edge Security & API Gateway**: `edge.tchashield.com` (Cloudflare Workers custom domain)
   - Ingests Shopify `orders/create` webhooks for **Tcha FraudShield Edge**.
3. **Intelligence & Newsletter**: `dispatch.tchashield.com`
   - Hosts the publication archives for **The Tcha Defense Dispatch™**.
4. **Enterprise Trust & Legal**: `tcha.security`
   - Corporate compliance credentials, WIPO UDRP filings, and executive escalation portal.

---

## 2. Hardening Tcha Email Perimeter: DMARC `p=reject`

As an institutional e-commerce defense and cybersecurity company, Tcha must enforce strict cryptographic email verification to prevent bad actors from spoofing outreach or mimicking reinstatement communications.

### Step 1: SPF (Sender Policy Framework) Record
Add a `TXT` record at the root domain (`@`):
```text
v=spf1 include:_spf.google.com include:sendgrid.net include:mailgun.org -all
```
*(The `-all` hard-fail directive instructs receiving mail servers to reject any unauthorized IP attempting to send email from your domain).*

### Step 2: DKIM (DomainKeys Identified Mail)
Generate a 2048-bit cryptographic key pair via your transactional email provider (Google Workspace, Postmark, or Resend). Add the public key as a `TXT` record at:
```text
k1._domainkey.tchashield.com
```

### Step 3: DMARC Enforcement Record
Add a `TXT` record at `_dmarc.tchashield.com`:
```text
v=DMARC1; p=reject; rua=mailto:dmarc-reports@tchashield.com; ruf=mailto:dmarc-forensics@tchashield.com; pct=100; sp=reject; aspf=s; adkim=s;
```

| Parameter | Value | Security Impact |
| :--- | :--- | :--- |
| `p=reject` | Rejection Policy | Unauthenticated emails pretending to be from your domain are **instantly discarded** by Gmail, Outlook, and Yahoo. |
| `pct=100` | 100% Coverage | Applies strict policy to all outbound communications without sampling. |
| `sp=reject` | Subdomain Policy | Extends automatic rejection to all subdomains (e.g. `billing.tchashield.com`). |
| `aspf=s` & `adkim=s` | Strict Alignment | Requires exact domain alignment between RFC5322 From and DKIM/SPF identities. |

---

## 3. Defensive Domain Portfolio Checklist

In accordance with the **Brand Protection Roadmap** (`brand-protection-security`), Tcha and its client brands should acquire:
- [ ] Top generic TLDs: `.com`, `.co`, `.io`, `.security`.
- [ ] Common typos and homoglyphs (e.g. substitution of 'l' with '1' or 'i').
- [ ] Action suffixes frequently abused by phishing clone sites: `*-store.com`, `*-shop.com`, `*-vip.com`, `*-official.com`.
- [ ] Enable **Registry Lock** with registrar to require out-of-band human authorization before any DNS or nameserver modification.

---

## 4. Standard Operating Procedure: Delivering the $497 Domain Audit

When a client purchases the **Pre-Q4 Brand Squatting & Domain Defense Audit ($497)**, execute this 4-step workflow:

```
[Client Submits Brand Name & Primary Domain]
                      │
                      ▼
[Step 1: Automated TLD Reverse-Lookup]
• Scan 500+ TLDs for active DNS resolution of brand name variations.
• Identify active HTTP web servers hosting cloned logos or copied product copy.
                      │
                      ▼
[Step 2: DNS & DMARC Posture Audit]
• Check client domain against MXToolbox / DMARC Analyzer.
• Report if DMARC is set to p=none (vulnerable) vs p=reject (hardened).
                      │
                      ▼
[Step 3: Trademark Clearance & Rogue Filings]
• Search USPTO TESS and WIPO Global Brand Database for unauthorized third-party filings.
                      │
                      ▼
[Step 4: Package the 6-Page Institutional Dossier]
• Section 1: Executive Threat Matrix & Vulnerability Score.
• Section 2: Active Impostor Domains & Hosting Provider IP/ASN details.
• Section 3: Pre-drafted DMCA Takedown Notice to Cloudflare/Namecheap/GoDaddy.
• Section 4: Pre-drafted WIPO UDRP Arbitration Complaint Draft.
```
