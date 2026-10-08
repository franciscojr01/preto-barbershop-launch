import { describe, expect, it } from "vitest";
import { business, getWhatsAppUrl } from "@/lib/business";

describe("Confirmed business contacts", () => {
  it("does not attach an unconfirmed number to WhatsApp", () => {
    expect(business.whatsappNumber).toBe("");
    expect(getWhatsAppUrl(business.whatsappNumber)).toBeNull();
  });
  it("rejects incomplete contact numbers", () => {
    expect(getWhatsAppUrl("77999")).toBeNull();
  });
  it("can link a confirmed Brazilian number", () => {
    expect(getWhatsAppUrl("55 (11) 98888-1234")).toContain("https://wa.me/5511988881234?");
  });
  it("keeps the supplied editable review count", () => {
    expect(business.reviewCount).toBe(42);
  });
  it("does not fabricate opening hours", () => {
    expect(business.openingHours).toBe("");
  });
});
