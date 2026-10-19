# 🔄 Pillar 3: Application Flow & The 4 Mandatory States — Marketplace Suspension Recovery

## 1. End-to-End Agent Execution Flow
```
[User Invokes Skill / Pastes Deactivation Notice]
                      │
                      ▼
[Phase 1: Notice Ingestion & Classification]
  ├── Extracts: Store Name, Notice Date, Platform (Amazon/Shopify)
  ├── Identifies Violation Vector: Section 3 / IP / ODR / Authenticity / Dropship
  └── Assesses Severity: Warning / ASIN Suppression / Full Account Deactivation
                      │
                      ▼
[Phase 2: Targeted Forensic Diagnostic Interview]
  ├── Asks 3 to 4 specific operational questions based on the identified vector:
  │   1. Supply-chain provenance: Where were the flagged units sourced?
  │   2. Operational failure: What broken workflow allowed this defect through?
  │   3. Inventory status: How many units remain in FBA / warehouse?
  │   4. Documentation available: Do you possess itemized tax invoices?
                      │
                      ▼
[Phase 3: Invoice & Chain-of-Custody Audit]
  ├── Validates seller documentation against the 8 Amazon/Shopify criteria
  └── Flags critical errors (e.g., pro-forma invoices, retail receipts)
                      │
                      ▼
[Phase 4: Synthesis of 3-Part Plan of Action (POA)]
  ├── Part 1: The Root Cause of the Violation (Objective, systemic)
  ├── Part 2: Immediate Actions Taken to Resolve the Issue (Curing the defect)
  └── Part 3: Long-Term Preventative Measures Implemented (SOPs & controls)
                      │
                      ▼
[Phase 5: Submission Guidance & Commercial Paid Bridge]
  ├── Platform submission path (Account Health Dashboard > Submit Appeal)
  └── Surfaces the Recurring Protection SaaS Offer:
      "Automated Account Health Telemetry & Pre-Suspension Shield"
```

---

## 2. The 4 Mandatory Application States

### State 1: Notice Ingestion & Parsing (In Progress)
- **Agent Behavior**: The agent acknowledges the notice immediately, confirms the platform, and extracts key identifiers.
- **Output**:
  `📋 Analyzing Deactivation Notice for Amazon Store [StoreName]... Detected Category: Section 3 — Code of Conduct (Review Manipulation / Product Authenticity). Proceeding to forensic diagnostic intake.`

### State 2: Missing Documentation / Incomplete Evidence State
- **Trigger**: Seller provides notice but lacks invoices or cannot explain where inventory originated.
- **Handling**:
  The agent does **not** proceed to write a generic template. It stops and alerts the seller:
  `⚠️ CRITICAL EVIDENCE GAP: Submitting an appeal without verifiable distributor invoices will result in immediate algorithmic rejection by Amazon Seller Performance. Before we draft your POA, confirm which of the following 3 documentation paths applies to your inventory...`

### State 3: Fatal Rejection / Policy Violation Warning (Error & Recovery State)
- **Trigger**: Seller asks to fabricate invoices, blame the customer, or deny proven policy breaches.
- **Handling**:
  The agent refuses to fabricate documents and warns the seller:
  `🛑 FATAL APPEAL PITFALL DETECTED: Blaming Amazon or submitting forged documentation will result in permanent account closure with zero right to appeal. Amazon's Seller Performance team uses automated document forensic checks (verifying supplier phone numbers, business registry, and tax ID). We must address the authentic systemic operational failure instead.`

### State 4: Final Appeal Package Generated (Success & Victory State)
- **Trigger**: Complete forensic interview completed and evidence verified.
- **Output Display**:
  1. **Complete 3-Part Plan of Action Markdown Document** (ready to copy-paste into Seller Central / Shopify Support).
  2. **Invoice Verification Checklist Summary**.
  3. **Escalation Protocol**: What to do if the initial submission receives an automated template rejection.
  4. **The Commercial Bridge**: Link to automated account health monitoring and pre-suspension shield.
