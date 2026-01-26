// Tarot Reader - Configuration Links
// Replace the placeholder values with your actual contact information and links

export const links = {
  // WhatsApp Configuration
  whatsapp: {
    number: "628xxxxxxxxxx", // Replace with your WhatsApp number (format: country code + number without +)
    message: "Halo kak, aku mau booking tarot reading ✨", // Default booking message
  },

  // Payment Methods
  payment: {
    qris: {
      image: "https://via.placeholder.com/300x300/4a148c/d4af37?text=QRIS+Code", // Replace with your QRIS QR code image URL
      text: "Scan QRIS untuk pembayaran",
    },
    saweria: "https://saweria.co/YOUR_USERNAME", // Replace with your Saweria link
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com/", // Replace with your Instagram link
    tiktok: "https://tiktok.com/@", // Replace with your TikTok link
    twitter: "https://x.com/", // Replace with your X/Twitter link
    youtube: "https://youtube.com/@", // Replace with your YouTube channel
    email: "mailto:your.email@example.com", // Replace with your email
  },
};

// Helper function to generate WhatsApp chat URL
export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || links.whatsapp.message);
  return `https://wa.me/${links.whatsapp.number}?text=${message}`;
};

// Helper function to generate WhatsApp URL for specific service
export const getWhatsAppServiceLink = (serviceName: string) => {
  const message = encodeURIComponent(
    `Halo kak, aku mau booking ${serviceName} ✨`
  );
  return `https://wa.me/${links.whatsapp.number}?text=${message}`;
};
