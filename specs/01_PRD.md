# 📋 Pillar 1: Product Requirements Document (PRD) — Marketplace Suspension Recovery

## 1. Executive Summary & Value Proposition
**Marketplace Suspension Recovery** (`marketplace-suspension-recovery`) is an emergency agent skill built to the `agentskills.io` standard for Amazon and Shopify sellers. When a seller receives an account deactivation, Section 3 suspension, restricted product removal, or IP infringement notice, this skill conducts a forensic diagnostic interview, classifies the exact violation vector, and generates a formal, platform-calibrated 3-part **Plan of Action (POA)**:
1. Root Cause Analysis (Forensic, non-defensive operational breakdown).
2. Immediate Corrective Actions Taken (Curing the active defect).
3. Long-Term Preventative Measures Implemented (Systemic SOP and inventory safeguards).

It replaces predatory appeal consultancies ($2,500–$7,500 upfront fees) with an immediate, objective, high-conviction reinstatement package in under 3 minutes.

---

## 2. Target Persona & Core Problem
- **Primary Persona**: Amazon FBA/FBM sellers, Shopify merchants, and multi-channel agency operators doing $10,000 to $500,000 in monthly GMV.
- **Pain Point**:
  1. **Immediate Revenue Death**: Suspensions freeze seller payouts, inventory disbursements, and daily sales instantly ($5,000–$50,000+ daily GMV loss).
  2. **Predatory Consultants**: Sellers in blind panic wire thousands of dollars to unverified "reinstatement agencies" that deliver generic ChatGPT templates rejected by Seller Performance algorithms.
  3. **High Rejection Rate**: Over 68% of initial appeals are rejected within 24 hours because sellers write emotional, defensive apologies or fail to identify the systemic root cause.
  4. **Strict Policy Rubrics**: Amazon Seller Performance and Shopify Risk teams enforce strict, non-negotiable review rubrics that require verifiable supplier invoices, chain-of-custody documentation, and specific internal standard operating procedures (SOPs).
- **Core Promise**: Turn a terrifying deactivation notice into an authoritative, audit-ready Plan of Action adhering strictly to Amazon and Shopify internal appeal rubrics, with zero upfront consulting costs.

---

## 3. Scope & MVP Features

### Feature 1: Deactivation Notice Ingestion & Vector Classification
- Ingests raw suspension emails, performance notifications, or policy violation warnings.
- Classifies the violation into standard platform categories:
  - **Amazon Section 3 (Business Solutions Agreement)**: Unacceptable documentation, code of conduct, velocity spikes.
  - **Intellectual Property (IP) / DMCA**: Counterfeit claims, trademark infringement, copyright strikes, patent disputes.
  - **Customer Metrics / Order Defect Rate (ODR)**: Negative feedback spikes, A-to-Z claims, late shipment rate (LSR).
  - **Authenticity & Provenance**: Inauthentic item complaints, unauthorized distributor sourcing.
  - **Shopify Acceptable Use Policy (AUP)**: Prohibited goods, brand impersonation, high risk chargeback holds.

### Feature 2: Forensic Diagnostic Intake Interview
- Conducts an interactive diagnostic inquiry to extract factual operational reality from the seller:
  - Source of inventory (authorized distributor, liquidator, retail arbitrage, manufacturer).
  - Document audit (verifiable tax invoices, packing slips, letters of authorization).
  - Internal operational failure that caused the defect (staff training, warehouse software lag, barcode scanning discrepancy).

### Feature 3: Platform-Calibrated 3-Part Plan of Action (POA) Generator
- Produces a formal, executive-grade Plan of Action formatted to platform standards:
  - **Section A: The True Root Cause**: Objective acknowledgment without defensive excuses, identifying the systemic workflow breakdown.
  - **Section B: Immediate Corrective Measures**: Specific steps already completed (orders refunded, inventory recalled, listings deleted, brand owners contacted).
  - **Section C: Preventative Measures & Systemic Controls**: New standard operating procedures (SOPs), ERP software implementations, automated inventory auditing, and staff retraining protocols.

### Feature 4: Supplier Invoice & Chain-of-Custody Audit Checklist
- Cross-examines seller documentation against Amazon's 8 mandatory invoice criteria (supplier name, physical address, website, matching buyer details, line-item ASIN match, 365-day issuance date).
- Flags critical disqualifiers (pro-forma invoices, retail order confirmations, handwritten receipts).

### Feature 5: Commercial Paid Bridge to "Pre-Suspension Shield" SaaS
- Natural handoff: Provides the free appeal package immediately, then surfaces the recurring vulnerability:
  *`"Submitting your POA is step 1. But 74% of reinstated sellers get re-suspended within 90 days due to unmonitored policy drift. Protect your account with our automated Account Health Telemetry & Pre-Suspension Shield."`*
- Promotes recurring monitoring ($199–$499/mo) and edge defense middleware (`shopify-fraud-edge-middleware`).

---

## 4. Out-of-Scope (Non-Goals for v1.0)
- **Direct Account Login**: Will never request, store, or execute through seller credentials or Seller Central logins.
- **Document Forgery**: Strictly prohibits and refuses requests to forge, alter, or fabricate supplier invoices or letters of authorization.
- **Legal Guarantee of Reinstatement**: Provides compliance-grade diagnostic and document structuring, but explicitly disclaims third-party platform decision guarantees.
