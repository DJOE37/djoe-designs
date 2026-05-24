/**
 * -------------------------------------------------------------------
 * Centralized Contact Configuration & Utilities
 * -------------------------------------------------------------------
 */

export const contactConfig = {
  // Configured contact number (not rendered publicly in plain text)
  whatsappNumber: "2348000000000",
  email: "hello@djoe.design",
  location: "Lagos, Nigeria",
  socials: {
    facebook: "https://facebook.com/djoe.design",
    instagram: "https://instagram.com/djoe.design",
    linkedin: "https://linkedin.com/company/djoe-design",
    twitter: "https://x.com/djoe.design"
  }
};

/**
 * Generates a WhatsApp deep-link with sanitized number and prefilled message.
 * @param {string} message - Prefilled message for client convenience.
 * @returns {string} Fully structured wa.me deep link.
 */
export function generateWhatsAppLink(message) {
  const sanitized = contactConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
}
