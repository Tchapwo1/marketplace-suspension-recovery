# 🛍️ Shopify Risk Operations & Payout Hold Reinstatement Guide

## 1. Primary Shopify Risk Triggers
Shopify Risk Management and Shopify Payments freeze store payouts or deactivate checkouts for 4 main reasons:
1. **Chargeback / Dispute Ratio Spikes**: When total disputes exceed **1.0%** of total transaction volume (Visa/Mastercard excessive chargeback thresholds).
2. **Fulfillment Lag / Undelivered Orders**: Rapid revenue scaling without corresponding tracking numbers uploaded to orders, triggering automated risk holds.
3. **High-Risk IP & Proxy Activity**: Unprotected checkout experiencing automated bot card-testing attacks.
4. **Acceptable Use Policy (AUP) Violation**: Brand impersonation, unauthorized branded goods, or prohibited health/medical claims.

---

## 2. Payout Freeze Resolution Protocol
To unfreeze payouts with Shopify Risk Operations:
1. **Fulfillment Proof**: Upload valid carrier tracking numbers (USPS, FedEx, DHL, UPS) to 100% of open orders showing delivery or in-transit scans.
2. **Supplier Proof**: Submit commercial invoices matching the inventory sold to prove physical capacity to fulfill open orders.
3. **Fraud Protection Implementation**: Demonstrate active fraud mitigation measures (such as our edge middleware `shopify-fraud-edge-middleware` or Shopify Fraud Filter rules) that stop card testing and friendly fraud at checkout.

---

## 3. Shopify Reinstatement Plan Structure
When responding to a Shopify Risk notification:
- **Section 1 (Business Model Summary)**: Legal business entity, warehouse fulfillment location, and average fulfillment timeline.
- **Section 2 (Open Order Remediation)**: Tabular summary of open orders, tracking numbers, and delivery confirmation rates.
- **Section 3 (Fraud & Dispute Mitigation SOP)**: Formal documentation of automated risk screening, customer service contact availability, and clear 30-day return policy visibility.
