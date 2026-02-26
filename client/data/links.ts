

export const links = {
  
  whatsapp: {
    number: "628213161049",
    message: "Halo kak, aku mau booking tarot reading", 
  },

  payment: {
    qris: {
      image: "/qris_tarot.jpeg", 
      text: "Scan QRIS untuk pembayaran",
    },
  
  },


  social: {
    instagram: "https://www.instagram.com/saachan._/", 
    tiktok: "https://tiktok.com/@", 
    twitter: "https://x.com/", 
    youtube: "https://youtube.com/@", 
    email: "mailto:your.email@example.com", 
  },
};


export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || links.whatsapp.message);
  return `https://wa.me/${links.whatsapp.number}?text=${message}`;
};


export const getWhatsAppServiceLink = (serviceName: string) => {
  const message = encodeURIComponent(
    `Halo kak, aku mau booking ${serviceName} ✨`
  );
  return `https://wa.me/${links.whatsapp.number}?text=${message}`;
};
