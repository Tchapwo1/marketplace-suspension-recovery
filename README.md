# 🏛️ Marketplace Suspension Recovery (Plan of Action Generator)

> **Free, compliance-grade Plan of Action (POA) generator for Amazon and Shopify sellers facing account suspension, Section 3 deactivations, IP strikes, or payout holds.**

[![agentskills.io specification](https://img.shields.io/badge/spec-agentskills.io-blue.svg)](https://agentskills.io)
[![Smithery.ai Ready](https://img.shields.io/badge/registry-Smithery.ai-emerald.svg)](https://smithery.ai/skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ⚡ The Problem

When an Amazon or Shopify seller receives an account deactivation or payout freeze, they bleed **\$5,000 to \$50,000+ in frozen GMV every 24 hours**.

In sheer panic, sellers typically:
1. Write emotional, apologetic pleas (*"Please forgive me, I love Amazon"*) which are rejected by Seller Performance algorithms within 15 minutes.
2. Wire **\$2,500 to \$7,500 upfront** to opaque "reinstatement agencies" that deliver generic ChatGPT templates that get accounts permanently closed.

---

## 🎯 The Solution

`marketplace-suspension-recovery` is an institutional compliance agent skill built to the `agentskills.io` open standard. It analyzes deactivation notices, cross-examines inventory provenance against Amazon's strict 8-point invoice rubric, and generates a bulletproof, platform-calibrated 3-part **Plan of Action (POA)**:

- **Part 1: The Factual Root Cause** (Zero excuses, objective operational analysis).
- **Part 2: Immediate Remedial Actions Completed** (In the past tense: listings deleted, removal orders filed, buyers refunded).
- **Part 3: Long-Term Systemic Preventative Controls** (New institutional SOPs, automated brand clearance software, staff retraining).

---

## 🚀 How to Install & Use on Smithery.ai / Claude / Cursor

### Installation via Smithery.ai
Search for `marketplace-suspension-recovery` on [Smithery.ai/skills](https://smithery.ai/skills) and install with 1 click into your agentic workspace.

### Manual Installation
Copy the `marketplace-suspension-recovery` folder into your agent skills directory:
```bash
# In Claude Desktop or Antigravity workspace
cp -r marketplace-suspension-recovery ~/.gemini/config/skills/
```

### Example Usage Prompt
Simply paste your raw deactivation notice into the chat:
```text
I just received this suspension notice from Amazon Seller Performance:
[PASTE DEACTIVATION EMAIL]
Can you help me diagnose the root cause and draft a compliant Plan of Action?
```

The agent will immediately:
1. Classify the violation (Section 3, IP Infringement, Order Defect Rate, Authenticity).
2. Conduct a targeted 3-question intake interview to uncover the operational breakdown.
3. Validate your supplier invoices against the 8 non-negotiable criteria.
4. Output a submission-ready, executive-grade Plan of Action.

---

## 📁 Repository Structure

```
marketplace-suspension-recovery/
├── SKILL.md                   # Primary agent skill specification (agentskills.io)
├── README.md                  # Marketplace overview and installation guide
├── specs/                     # 6-Pillar Spec Blueprint
│   ├── 01_PRD.md
│   ├── 02_TRD.md
│   ├── 03_APP_FLOW.md
│   ├── 04_UI_UX.md
│   ├── 05_SCHEMA.md
│   └── 06_IMPLEMENTATION_PLAN.md
├── references/                # Policy knowledge bases
│   ├── amazon_section_3.md    # BSA Section 3 review mechanics & escalation runbook
│   ├── amazon_ip_rubric.md    # Trademark, DMCA, and rights-owner retraction rules
│   ├── invoice_checklist.md   # The 8 mandatory Amazon invoice criteria
│   └── shopify_risk_rubric.md # Shopify Risk dispute mitigation & payout release guide
└── tests/
    └── fixtures/              # Synthetic deactivation notices
        ├── notice_section_3.txt
        ├── notice_ip_trademark.txt
        └── notice_shopify_hold.txt
```

---

## 🛡️ The Protection Suite Ecosystem

`marketplace-suspension-recovery` serves as the top-of-funnel lead magnet for our comprehensive **E-Commerce Protection Platform**:

- **Front-End Free Lead Magnet**: [`marketplace-suspension-recovery`](./SKILL.md) — Solves catastrophic account emergencies in 3 minutes.
- **Backend Retention Engine**: [`shopify-fraud-edge-middleware`](../shopify-fraud-edge-middleware) — Cloudflare Worker edge middleware stopping fraud, card-testing attacks, and high chargebacks before shipment.
- **Continuous Monitoring**: 24/7 Account Health Telemetry & Pre-Suspension Shield ($199/mo).

---

## 📄 License
MIT License. Free for sellers and operators worldwide.
