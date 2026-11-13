import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Prestige Detailing",
  tagline: "Fully mobile auto detailing, paint correction and ceramic coating.",
  category: "Mobile auto detailing",
  schemaType: "LocalBusiness",
  area: "Toronto and the GTA, ON",
  siteUrl: "https://prestige-detailing-gta-ca.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#8b1c24" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Fully mobile across Toronto and the GTA",
    headline: "High end auto detailing, at your location",
    subhead: "Interior and exterior detailing, paint correction and ceramic coating. The service is fully mobile, with its own power and water. Send a message to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "A Mercedes-AMG GLS detailed by Prestige Detailing", width: 1080, height: 810 },
      { src: "/images/post-4.jpg", alt: "A Mercedes-AMG G 63 detailed by Prestige Detailing", width: 1080, height: 1350 },
      { src: "/images/post-5.jpg", alt: "A Lexus LC 500 detailed by Prestige Detailing", width: 1080, height: 1350 },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/prestigedetailing_gta" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Interior and exterior detailing",
    "Paint correction and ceramic coating",
    "Fully mobile, with its own power and water",
    "Toronto and the GTA",
  ],

  about: {
    title: "Welcome to Prestige Detailing",
    body: [
      "Prestige Detailing is a fully mobile auto detailing service in Toronto and the GTA. Work includes interior and exterior detailing, paint correction and ceramic coating.",
      "The service brings its own power and water. Bookings are made by Instagram DM.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A Mercedes-AMG GLS detailed by Prestige Detailing", width: 1080, height: 810 },
  },

  menu: {
    label: "Services",
    title: "Detailing services",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM to ask about current pricing and availability.",
    groups: [
      {
        title: "Mobile detailing",
        items: [
          { name: "Interior and exterior detailing" },
          { name: "Paint correction" },
          { name: "Ceramic coating" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 810, alt: "A Mercedes-AMG GLS detailed by Prestige Detailing", caption: "Mercedes-AMG GLS 63", href: "https://www.instagram.com/p/DfpT878lMWA/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1350, alt: "A Mercedes-AMG G 63 detailed by Prestige Detailing", caption: "Mercedes-AMG G 63", href: "https://www.instagram.com/p/Dfh0V1RANq8/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1350, alt: "A Lexus LC 500 detailed by Prestige Detailing", caption: "Lexus LC 500", href: "https://www.instagram.com/p/Dff70rNjE-q/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1350, alt: "A Volkswagen Golf R detailed by Prestige Detailing", caption: "Volkswagen Golf R", href: "https://www.instagram.com/p/DfjGvjFD1dX/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "A Volkswagen Tiguan R-Line detailed by Prestige Detailing", caption: "Volkswagen Tiguan R-Line", href: "https://www.instagram.com/p/DfmwM2zjFKk/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1350, alt: "A Mercedes-Benz E 450 Coupe detailed by Prestige Detailing", caption: "Mercedes-Benz E 450 Coupe", href: "https://www.instagram.com/p/DffWbjLnQcn/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1350, alt: "An Audi RS 6 detailed by Prestige Detailing", caption: "Audi RS 6", href: "https://www.instagram.com/p/DfcdFDtjfne/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1350, alt: "A Tesla Model S detailed by Prestige Detailing", caption: "Tesla Model S", href: "https://www.instagram.com/p/DfZxXIygZ0i/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1350, alt: "A Volkswagen Golf GTI detailed by Prestige Detailing", caption: "Volkswagen Golf GTI", href: "https://www.instagram.com/p/DfXTbbaFAao/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "prestigedetailing_gta",
    embeds: ["https://www.instagram.com/p/DfpT878lMWA/", "https://www.instagram.com/p/Dfh0V1RANq8/", "https://www.instagram.com/p/Dff70rNjE-q/"],
  },

  order: {
    label: "How to book",
    title: "Book with a DM",
    intro: "Send a message on Instagram with your vehicle, the service you want and your preferred date. The service is fully mobile across Toronto and the GTA.",
    dmMessage: "Hi Prestige Detailing! I would like to book.\nVehicle:\nService (detail, paint correction or ceramic coating):\nPreferred date:\nLocation in Toronto or the GTA:",
    headerCtaLabel: "DM to book",
    links: [{ label: "DM to book", href: "https://ig.me/m/prestigedetailing_gta" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram with your vehicle, the service you want and your preferred date." },
    { q: "Do you come to me?", a: "Yes. The service is fully mobile across Toronto and the GTA, and brings its own power and water." },
    { q: "What services do you offer?", a: "Interior and exterior detailing, paint correction and ceramic coating." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto and the GTA, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/prestigedetailing_gta/" }],
  },

  seo: {
    title: "Prestige Detailing | Mobile auto detailing in Toronto and the GTA",
    description: "Fully mobile auto detailing in Toronto and the GTA, including paint correction and ceramic coating, with its own power and water. Send a DM to book.",
    keywords: ["mobile detailing Toronto", "ceramic coating GTA", "Prestige Detailing"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
