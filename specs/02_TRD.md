# 🛠️ Pillar 2: Technical Requirements Document (TRD) — Marketplace Suspension Recovery

## 1. Technical Stack & Specification Standard
- **Format**: `SKILL.md` specification adhering strictly to the **Agent Skills open standard** (`agentskills.io`).
- **Target Runtime Environments**:
  - Claude Desktop / Claude CLI
  - Antigravity & Agentic Workspaces
  - Cursor / Windsurf IDE AI Agents
  - ChatGPT / Custom GPTs
  - Smithery.ai Marketplace & Registry (`https://smithery.ai/skills`)
- **Runtime Execution**: 100% client-side prompt and agentic reasoning architecture. Zero external backend API dependencies required for core functionality.
- **Data Privacy & Air-Gap Compliance**: Read-only document processing. Ingested seller suspension notices and invoice data are processed strictly in the active context window and never transmitted to untrusted external endpoints.

---

## 2. Token & Latency Budgets
| Metric | Budget Target | Rationale |
|---|---|---|
| **SKILL.md File Size** | **< 350 lines** | Prevents context window bloat when loaded by agentskills.io clients. |
| **Intake Diagnostic Roundtrips** | **1 to 2 turns** | Sellers in crisis require fast turnaround; avoid 10-question interrogations. |
| **Total Context Footprint** | **< 4,000 tokens** | Leaves ample context headroom for seller notice text and invoice OCR data. |
| **Generation Latency** | **< 15 seconds** | Immediate relief to panic-stricken merchants. |

---

## 3. Mandatory File Tree Contract
```
marketplace-suspension-recovery/
├── SKILL.md                   # Primary agent skill definition (agentskills.io spec)
├── README.md                  # Marketplace overview and installation instructions
├── specs/
│   ├── 01_PRD.md
│   ├── 02_TRD.md
│   ├── 03_APP_FLOW.md
│   ├── 04_UI_UX.md
│   ├── 05_SCHEMA.md
│   └── 06_IMPLEMENTATION_PLAN.md
├── references/
│   ├── amazon_section_3.md    # Amazon BSA Section 3 policy analysis & rubrics
│   ├── amazon_ip_rubric.md    # DMCA, Trademark, Patent & Rights Owner appeal guides
│   ├── amazon_odr_rubric.md   # Negative feedback, A-to-z, and late dispatch metrics
│   ├── shopify_risk_rubric.md # Shopify Acceptable Use & high-risk payment hold appeals
│   └── invoice_checklist.md   # The 8 non-negotiable invoice verification criteria
└── tests/
    └── fixtures/
        ├── notice_section_3.txt      # Synthetic Section 3 deactivation notice
        ├── notice_ip_trademark.txt   # Synthetic IP infringement notice
        └── notice_shopify_hold.txt   # Synthetic Shopify payout hold notice
```
