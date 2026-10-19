# 🗄️ Pillar 5: Data Schema & Policy Taxonomies — Marketplace Suspension Recovery

## 1. Violation Classification Taxonomy
```typescript
export type PlatformType = 'AMAZON' | 'SHOPIFY' | 'WALMART' | 'EBAY';

export type ViolationCategory =
  | 'SECTION_3_BSA'           // General Business Solutions Agreement breach
  | 'IP_TRADEMARK'            // Unauthorized brand use or counterfeit allegations
  | 'IP_COPYRIGHT'            // Image or listing text infringement
  | 'INAUTHENTIC_INVENTORY'   // Customer or algorithm complaint on provenance
  | 'ODR_METRIC_BREACH'       // Order Defect Rate exceeding 1%
  | 'LSR_METRIC_BREACH'       // Late Shipment Rate exceeding 4%
  | 'RESTRICTED_PRODUCT'      // Hazmat, pesticide, medical claim, gated category
  | 'DROP_SHIPPING_POLICY'    // Retail drop-shipping violation (e.g. Walmart boxes to Amazon)
  | 'SHOPIFY_AUP_RISK';       // High-risk chargeback hold or prohibited goods
```

---

## 2. Structured Intake Context Schema
```typescript
export interface SuspensionIntakeContext {
  platform: PlatformType;
  storeName: string;
  merchantId?: string;
  noticeDate: string;
  violationCategory: ViolationCategory;
  flaggedAsinsOrProducts: Array<{
    identifier: string; // ASIN, SKU, or Product Title
    issue: string;
    inventoryUnitsRemaining: number;
    inventoryDisposition: 'RECALLED' | 'DESTROYED' | 'HELD_IN_FBA';
  }>;
  operationalRootCause: {
    failureDomain: 'SOURCING' | 'WAREHOUSE_PACKING' | 'LISTING_COPY' | 'CUSTOMER_SERVICE';
    specificBreakdown: string;
    underlyingSOPDeficiency: string;
  };
  remedialActionsTaken: Array<{
    actionDescription: string;
    completedAt: string;
    evidenceReference: string;
  }>;
  preventativeControls: Array<{
    controlType: 'NEW_SOP' | 'SOFTWARE_AUTOMATION' | 'STAFF_TRAINING' | 'SUPPLIER_VETTING';
    implementationDetails: string;
    responsibleRole: string;
    auditCadence: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  }>;
  supplierProvenance: {
    supplierName: string;
    supplierAddress: string;
    supplierWebsite: string;
    invoiceNumbers: string[];
    invoiceDateWithin365Days: boolean;
    authorizedDistributorConfirmed: boolean;
  };
}
```

---

## 3. The 8 Mandatory Invoice Criteria Rubric
For Amazon Seller Performance authenticity and Section 3 appeals:

| Criterion # | Requirement | Validation Rule |
| :--- | :--- | :--- |
| **1. Date Window** | Issued within the last 365 calendar days. | `invoice_date >= (today - 365 days)` |
| **2. Supplier Legibility** | Full legal business name, physical street address, phone, and website. | Must not be a P.O. Box only. |
| **3. Buyer Match** | Buyer name and address must match Seller Central Legal Entity exactly. | String distance check vs Legal Business Name. |
| **4. Unit Quantity** | Invoiced quantity must equal or exceed sales volume for trailing 90 days. | `invoiced_units >= sold_units_90d` |
| **5. Line Item Detail** | Clear product description, SKU, and UPC/EAN matching flagged ASIN. | ASIN or UPC cross-reference. |
| **6. Non-Editable Format** | Official issued PDF or scanned tax invoice. | Excludes Excel, Word, or editable documents. |
| **7. Disallowed Types** | No pro-forma invoices, retail order confirmations, or packing slips. | Rejects Amazon/Walmart/Target order receipts. |
| **8. Verifiable Tax ID** | Supplier VAT/GST/EIN registration number displayed. | Tax registry searchable. |
