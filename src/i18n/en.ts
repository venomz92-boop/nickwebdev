/**
 * English copy — the reference dictionary.
 *
 * `Dictionary` is derived from this object, so every language file must
 * provide exactly the same shape. Add new text here first, then run the
 * type checker: any missing translation shows up as a type error.
 */
export const en = {
  meta: {
    title: "Nick's WebDev — Websites for Small Businesses in Malaysia",
    description:
      "Nick's WebDev builds clean, mobile-friendly websites for small businesses in Malaysia. Clear pricing, a fixed scope, and a simple process from start to launch.",
    ogTitle: "Nick's WebDev — Websites for Small Businesses in Malaysia",
    ogDescription:
      "Websites for small businesses in Malaysia. Simple Websites from RM399, Business Websites from RM799, Business Website Plus from RM1,299, and custom projects from RM2,499.",
    twitterDescription:
      "Websites for small businesses in Malaysia. Clear pricing and a fixed scope.",
  },
  common: {
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    languageSwitcher: "Change language",
  },
  logo: {
    label: "Nick's WebDev — back to top",
  },
  nav: {
    primary: "Primary navigation",
    mobile: "Mobile navigation",
    footer: "Footer navigation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    items: {
      services: "Services",
      pricing: "Pricing",
      portfolio: "Portfolio",
      faq: "FAQ",
      contact: "Contact",
    },
  },
  header: {
    cta: "Start a project",
    note: "Websites for small businesses. Clear pricing, no guesswork.",
  },
  hero: {
    eyebrow: "Websites for small businesses in Malaysia",
    titleLead: "I build",
    titleAccent: "websites",
    titleMid: "that look",
    titleEnd: "professional",
    titleLabel: "I build websites that look professional",
    lede: "Clean, mobile-friendly websites for small businesses in Malaysia. Clear pricing, a fixed scope, and a site that's ready to share with customers.",
    primaryCta: "Start a project",
    secondaryCta: "See my work",
    note: "Clear pricing. Fixed scope. No surprises.",
    deviceLabel:
      "An angled laptop showing an example website for a fictional digital studio, with a dark violet backdrop, a large editorial headline, and a keyboard lit by a soft purple glow.",
  },
  features: {
    label: "What every website includes",
    items: [
      {
        title: "Mobile-friendly",
        description: "Looks right on phones, tablets and computers.",
      },
      {
        title: "Fast-loading",
        description: "Simple pages that don't keep customers waiting.",
      },
      {
        title: "Live and connected",
        description: "Published online and connected to your domain.",
      },
      {
        title: "Customer-ready",
        description: "Clear information and easy contact buttons.",
      },
    ],
  },
  services: {
    eyebrow: "What I do",
    titleLead: "Websites for",
    titleAccent: "Small Businesses",
    lede: "Whether you need a simple one-page site or a larger business website, I build clean, mobile-friendly pages without the agency price tag.",
    items: [
      {
        title: "One-page websites",
        description: "One clear page for your business, services and contact details.",
      },
      {
        title: "Business websites",
        description: "A few pages for your business, services and contact information.",
      },
      {
        title: "Larger websites",
        description: "More pages for businesses with more services to explain.",
      },
      {
        title: "WhatsApp buttons",
        description: "Let customers message you straight from the site.",
      },
      {
        title: "Contact forms",
        description: "A simple form that sends enquiries to your email.",
      },
      {
        title: "Launch and hosting",
        description: "I publish the site, connect your domain and check it before handover.",
      },
    ],
    note: "Need something else? Booking systems, online payments and custom features need a separate quote.",
    showcase: {
      label:
        "Example website designs shown on a laptop, tablet and phone: a highland tour operator, a neighbourhood café and a mountain homestay.",
      note: "Example designs only",
    },
  },
  pricing: {
    eyebrow: "Clear pricing",
    titleLead: "Choose the Right Website",
    titleAccent: "for Your Business",
    lede: "Three straightforward packages for businesses at different stages, plus a custom option for anything outside the standard scope. Each one lists exactly what you get, so there are no surprises before work starts.",
    promo: {
      badge: "Launch Promo — Limited Spots Available",
      detail: "First 10 clients only",
      tag: "Launch promo",
      save: "Save",
      originalLabel: "Normal price",
      note: "* Promotional rates apply to the first 10 clients only.",
    },
    currencyLabel: "All prices in",
    currencyValue: "Malaysian Ringgit (RM)",
    fromLabel: "From",
    includesLabel: "What you get",
    deliveryLabel: "Estimated completion",
    packages: {
      simple: {
        name: "Simple Website",
        description:
          "A clean one-page website for businesses that need a simple, professional place online.",
        includes: [
          "One-page website",
          "Business intro, services, photos and contact details, up to 4 sections",
          "WhatsApp and click-to-call buttons",
          "Looks right on phones, tablets and computers",
          "Published online with HTTPS",
          "One round of changes",
          "Text and photos provided by you",
        ],
        delivery: "3–5 working days",
        cta: "Choose Simple",
        badge: "Starter",
      },
      business: {
        name: "Business Website",
        description:
          "A website of up to three pages, including Contact, with room to introduce your business and explain your services.",
        includes: [
          "Everything in Simple Website, plus standard layouts for the extra pages",
          "Up to 3 pages total, including Contact (e.g. Home, Services, Contact)",
          "A navigation menu, plus a contact page with map and opening hours",
          "WhatsApp and call buttons on every page",
          "Basic Google setup: page titles, descriptions and getting the site listed on Google (no ranking guarantee)",
          "Two rounds of changes",
        ],
        delivery: "5–7 working days",
        cta: "Choose Business",
        badge: "Recommended",
      },
      plus: {
        name: "Business Website Plus",
        description:
          "A website of up to five pages, including Contact, with a contact form and useful extra sections.",
        includes: [
          "Everything in Business Website, plus standard layouts for the extra pages",
          "Up to 5 pages total, including Contact",
          "One contact form that sends to your email, with basic spam protection and tested before handover",
          "FAQ section, up to 8 questions",
          "Photo gallery or portfolio, up to 12 images",
          "Three rounds of changes",
        ],
        delivery: "7–10 working days",
        cta: "Choose Plus",
        badge: "Most complete",
      },
      custom: {
        name: "Custom Website",
        description:
          "For booking systems, online payments, multi-language websites or features outside the standard packages.",
        includes: [
          "Custom pages and sections",
          "Booking or enquiry forms",
          "Online payment integration",
          "Multi-language setup available",
          "Final scope and price confirmed in writing",
        ],
        delivery: "Based on scope",
        cta: "Request a quote",
        badge: "Custom",
      },
    },
    rounds: {
      label: "Good to know",
      title: "What counts as a round of changes?",
      body: "A round of changes means one list of reasonable changes to the agreed website. New pages, new features and major changes outside the agreed scope may cost extra.",
    },
    terms: {
      eyebrow: "The finer details",
      title: "Pricing terms",
      lede: "Every project starts with a clear written scope. These terms apply to all packages, including custom projects.",
      items: [
        "50% deposit before work begins and 50% before final handover.",
        "Clients provide their business information, text and photos.",
        "Standard packages include one language. Additional languages are quoted separately.",
        "Domain purchase, business email hosting and paid third-party services are excluded. Domain connection is included if you own the domain.",
        "Extra pages, sections, images, questions and revision rounds are quoted separately.",
        "Websites do not include a self-edit admin panel. Content updates after handover are chargeable.",
        "Basic Google setup does not guarantee search rankings.",
        "Complex booking systems, online payments and custom features require a separate quotation.",
        "A 7-day bug-fix warranty is included after launch. New content and features are not included.",
      ],
    },
  },
  portfolio: {
    eyebrow: "A project I built",
    titleLead: "Real work,",
    titleAccent: "still live",
    lede: "KundasangHomestay.my is a personal project I built and still look after. It shows how I present a business online.",
    previewLabel: "Open KundasangHomestay.my in a new tab",
    imageAlt:
      "Homepage of KundasangHomestay.my showing a Mount Kinabalu landscape, the headline 'Cozy, verified properties in Kundasang & Ranau', and a search panel.",
    visit: "Visit website",
    projectNumber: "Project 01",
    projectType: "Personal project",
    projectTitle: "KundasangHomestay.my",
    description:
      "A completed live booking platform that shows my work in web design, publishing and presenting business information online.",
    tagsLabel: "What it covers",
    tags: ["Web design", "Website build", "Business information"],
    note: "A personal project, shown as an example of my work.",
  },
  process: {
    eyebrow: "How it works",
    titleLead: "Simple from",
    titleAccent: "start to finish",
    lede: "Here's what happens after you get in touch.",
    steps: [
      {
        label: "Brief",
        title: "Tell me about your business",
        description:
          "Send your business details, the pages you need and any text or photos you already have.",
      },
      {
        label: "Build",
        title: "I build your site",
        description:
          "I design and build the agreed website, then send you a link to review it.",
      },
      {
        label: "Launch",
        title: "Review and go live",
        description:
          "You send your changes within the package's revision limit. After final payment, I publish the site and connect your domain.",
      },
    ],
  },
  contact: {
    cta: {
      eyebrow: "Ready to start?",
      titleLead: "Tell me what",
      titleAccent: "you need.",
      lede: "Need a website, or not sure which package fits? Send me a message and I'll help you choose.",
      primary: "Start a project",
      whatsapp: "Chat on WhatsApp",
      whatsappLabel: "Contact Nick's WebDev on WhatsApp",
      whatsappFallbackLabel: "Go to the project enquiry form",
      whatsappTitle: "Chat on WhatsApp",
      whatsappFallbackTitle:
        "Use the project enquiry form to build a WhatsApp message.",
    },
    intro: {
      eyebrow: "Let's talk",
      titleLead: "Tell me what you",
      titleAccent: "have in mind.",
      lede: "Share a few details about your business and the website you need. Your answers become a ready-to-send WhatsApp message. Nothing is sent until you press send.",
      assurances: [
        "A clear scope before work starts",
        "Straightforward chat on WhatsApp",
        "No payment details needed to enquire",
      ],
      locationLabel: "Based in Malaysia",
      locationNote: "Working with businesses across the country.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      configNote: {
        lead: "Developer note: add a WhatsApp number in",
        tail: "to enable the WhatsApp enquiry.",
      },
    },
    form: {
      label: "Project enquiry",
      title: "Let's start with the basics.",
      via: "VIA WHATSAPP",
      name: "Name",
      namePlaceholder: "Your name",
      business: "Business name",
      optional: "(optional)",
      businessPlaceholder: "Your business",
      package: "Website package",
      packageUnsure: "Not sure yet",
      description: "Project details",
      descriptionPlaceholder:
        "What does your business do, and what do you need the website to do?",
      descriptionHint: "A few sentences is enough.",
      submit: "Continue on WhatsApp",
      submitNote:
        "Your message opens in WhatsApp so you can review it before sending. You can change or cancel it there.",
      openedTitle: "WhatsApp is opening in a new tab.",
      openedBody:
        "Check the message, then press send. Your enquiry is only sent after you press send in WhatsApp.",
      errorTitle: "WhatsApp isn't available right now.",
      errorBody:
        "No message was opened. Please try again later or use the contact details on this page.",
    },
    errors: {
      name: "Please enter your name.",
      package: "Please choose a package.",
      description: "Please share a little more about your project.",
    },
    enquiry: {
      greeting: "Hi Nick, I'd like to talk about a website project.",
      name: "Name",
      business: "Business",
      package: "Package",
      details: "Project details",
    },
  },
  faq: {
    eyebrow: "Common questions",
    titleLead: "Questions I",
    titleAccent: "get asked",
    lede: "The practical stuff about packages, timelines and how I work.",
    contact: "Still have a question? Send me a message",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "The standard packages start at RM399 for a one-page site, RM799 for a three-page business site, and RM1,299 for a five-page site with a contact form, FAQ and gallery. Custom projects start from RM2,499.",
      },
      {
        question: "How long does it take?",
        answer:
          "Usually 3–5 working days for Simple, 5–7 for Business, and 7–10 for Plus. The clock starts once I have your deposit and all your content.",
      },
      {
        question: "Do I need to buy a domain?",
        answer:
          "Yes, you'll need your own domain. I can help you connect it. The price depends on the name and extension you choose.",
      },
      {
        question: "Can you add a booking system or online payments?",
        answer:
          "Yes. Booking systems and online payments are custom work, quoted separately. Custom projects start from RM2,499.",
      },
      {
        question: "Can you modify my existing website?",
        answer:
          "My packages are for new websites. If you already have a site, I'll need to look at the platform and access before I can quote.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Not by default. If you need updates after handover, send me a message and I'll quote based on the work.",
      },
      {
        question: "What do I need to prepare?",
        answer:
          "Your business details, services, contact information, and the text and photos you want on the site.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "A 50% deposit to start, and the remaining 50% before I hand over the finished site.",
      },
    ],
  },
  footer: {
    tagline: "Websites for small businesses.",
    copyright: "© {year} Nick's WebDev. All rights reserved.",
    whatsapp: "WhatsApp",
    email: "Email",
  },
};

export type Dictionary = typeof en;
