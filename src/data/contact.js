/**
 * -------------------------------------------------------------------
 * Centralized Contact Configuration & Utilities
 * -------------------------------------------------------------------
 */

export const contactConfig = {
  // Configured contact number (not rendered publicly in plain text)
  whatsappNumber: "2349064086506",
  email: "yourdjoe37@gmail.com",
  location: "Enugu, Nigeria",
  socials: {
    facebook: "https://www.facebook.com/share/1CR7zKnPw6/",
    instagram: "https://www.instagram.com/engrdjoe37?igsh=MW03cXY0ZDhvcWs5Nw==",
    linkedin: "https://www.linkedin.com/in/joseph-ugwuanyi-b2a8952b4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    pinterest: "https://pin.it/6OhlwhPAZ"
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
