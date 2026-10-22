import type { Dictionary } from "./en";

/**
 * Bahasa Melayu copy.
 *
 * Typed as `Dictionary`, so a missing or misspelt key is a compile error.
 * Technical terms that Malaysian clients already recognise — WhatsApp,
 * deployment, GitHub, Cloudflare Pages, landing page — are kept as-is
 * rather than forced into literal translations.
 */
export const ms: Dictionary = {
  meta: {
    title: "Nick's WebDev — Laman Web Profesional untuk Perniagaan Yang Berkembang",
    description:
      "Nick's WebDev membina laman web profesional dan responsif untuk perniagaan kecil di Malaysia. Harga yang jelas, skop yang ditetapkan dan laman web praktikal yang membantu anda membina kehadiran dalam talian yang lebih kukuh.",
    ogTitle:
      "Nick's WebDev — Laman Web Profesional untuk Perniagaan Yang Berkembang",
    ogDescription:
      "Laman web profesional dan responsif untuk perniagaan kecil di Malaysia. Halaman pendaratan dari RM399, laman web permulaan dari RM799 dan laman web perniagaan dari RM1,299.",
    twitterDescription:
      "Laman web profesional dan responsif untuk perniagaan kecil di Malaysia. Harga yang jelas dan skop yang ditetapkan.",
  },
  common: {
    skipToContent: "Langkau ke kandungan",
    backToTop: "Kembali ke atas",
    languageSwitcher: "Tukar bahasa",
  },
  logo: {
    label: "Nick's WebDev — kembali ke atas",
  },
  nav: {
    primary: "Navigasi utama",
    mobile: "Navigasi mudah alih",
    footer: "Navigasi pengaki",
    openMenu: "Buka menu navigasi",
    closeMenu: "Tutup menu navigasi",
    items: {
      services: "Perkhidmatan",
      pricing: "Harga",
      portfolio: "Portfolio",
      faq: "Soalan Lazim",
      contact: "Hubungi",
    },
  },
  header: {
    cta: "Mulakan projek",
    note: "Laman web profesional. Dibina untuk perniagaan yang berkembang.",
  },
  hero: {
    eyebrow: "Laman web moden. Perniagaan lebih kukuh.",
    titleLead: "Kami bina",
    titleAccent: "laman web",
    titleMid: "yang memajukan",
    titleEnd: "perniagaan anda",
    titleLabel: "Kami bina laman web yang memajukan perniagaan anda",
    lede: "Laman web profesional dan responsif untuk perniagaan kecil yang ingin membina kredibiliti, mempamerkan perkhidmatan dan menjangkau lebih ramai pelanggan dalam talian.",
    primaryCta: "Mulakan",
    secondaryCta: "Lihat hasil kerja",
    note: "Harga yang jelas. Skop yang ditetapkan. Penyelesaian praktikal.",
    deviceLabel:
      "Sebuah komputer riba condong yang memaparkan contoh laman web untuk studio digital rekaan, dengan latar abstrak ungu gelap, tajuk gaya editorial dan papan kekunci bercahaya ungu lembut.",
  },
  features: {
    label: "Apa yang disertakan dalam setiap laman web",
    items: [
      {
        title: "Reka Bentuk Responsif",
        description: "Susun atur direka untuk telefon, tablet dan komputer.",
      },
      {
        title: "Fokus Prestasi",
        description: "Halaman ringan dibina dengan teknologi web yang cekap.",
      },
      {
        title: "Deployment Boleh Dipercayai",
        description: "Persediaan deployment halaman.",
      },
      {
        title: "Sedia Untuk Perniagaan",
        description:
          "Maklumat yang jelas dan pilihan hubungan untuk pelanggan anda.",
      },
    ],
  },
  services: {
    eyebrow: "Apa yang saya tawarkan",
    titleLead: "Penyelesaian Laman Web untuk",
    titleAccent: "Perniagaan Yang Berkembang",
    lede: "Daripada halaman pendaratan yang fokus kepada laman web perniagaan berbilang halaman, saya membantu perniagaan kecil membina kehadiran dalam talian yang profesional tanpa kerumitan yang tidak perlu.",
    items: [
      {
        title: "Pembinaan Landing Page",
        description: "Satu halaman fokus untuk satu tawaran, perkhidmatan atau kempen.",
      },
      {
        title: "Laman Web Perniagaan Permulaan",
        description: "Tempat yang jelas untuk perkara asas perniagaan anda.",
      },
      {
        title: "Laman Web Perniagaan Berbilang Halaman",
        description: "Ruang untuk menerangkan perkhidmatan anda merentas beberapa halaman.",
      },
      {
        title: "Integrasi Hubungan WhatsApp",
        description: "Cara yang terus dan biasa untuk pelanggan menghubungi anda.",
      },
      {
        title: "Persediaan Borang Hubungi",
        description: "Borang pertanyaan ringkas yang disambungkan ke aliran kerja anda.",
      },
      {
        title: "Pelancaran & Pengehosan",
        description: "Laman web anda diterbitkan dalam talian, disambungkan ke domain atau domain custom anda dan disemak sebelum penyerahan.",
      },
    ],
    note: "Perlukan sesuatu di luar senarai ini? Pangkalan data tersuai, sistem tempahan dan integrasi pembayaran memerlukan penilaian berasingan.",
    showcase: {
      label:
        "Pratonton laman web ilustrasi yang disusun pada komputer riba, tablet dan telefon: operator pelancongan tanah tinggi, kafe kejiranan dan homestay di kawasan pergunungan.",
      note: "Reka bentuk laman web ilustrasi",
    },
  },
  pricing: {
    eyebrow: "Harga yang jelas",
    titleLead: "Pilih Laman Web Yang Tepat",
    titleAccent: "untuk Perniagaan Anda",
    lede: "Tiga pakej yang jelas untuk peringkat perniagaan yang berbeza. Setiap pakej menyenaraikan dengan tepat apa yang disertakan, supaya anda tahu apa yang dijangka sebelum kerja bermula.",
    currencyLabel: "Semua harga dalam",
    currencyValue: "Ringgit Malaysia (RM)",
    includesLabel: "Apa yang anda dapat",
    deliveryLabel: "Anggaran siap",
    packages: {
      simple: {
        name: "Laman Web Ringkas",
        description:
          "Laman web satu halaman yang jelas untuk perniagaan yang memerlukan kehadiran dalam talian yang mudah dan profesional.",
        includes: [
          "Laman web satu halaman",
          "Pengenalan perniagaan, perkhidmatan, foto dan butiran hubungan, sehingga 6 bahagian",
          "Butang WhatsApp dan butang hubungi terus",
          "Berfungsi pada telefon, tablet dan komputer",
          "Persediaan Google: tajuk halaman, keterangan dan pengindeksan",
          "Diterbitkan dalam talian dengan SSL",
          "Satu pusingan perubahan",
          "Teks dan foto disediakan oleh anda",
        ],
        delivery: "3–5 hari bekerja",
        cta: "Pilih Ringkas",
        badge: "Asas",
      },
      business: {
        name: "Laman Web Perniagaan",
        description:
          "Laman web sehingga tiga halaman, dengan ruang untuk memperkenalkan perniagaan anda dan menerangkan perkhidmatan anda.",
        includes: [
          "Semua dalam Laman Web Ringkas",
          "Sehingga tiga halaman, cth. Utama, Tentang dan Perkhidmatan",
          "Menu navigasi, serta halaman hubungi dengan peta dan waktu operasi",
          "Butang WhatsApp dan panggilan pada setiap halaman",
          "Dua pusingan perubahan",
        ],
        delivery: "5–7 hari bekerja",
        cta: "Pilih Perniagaan",
        badge: "Disyorkan",
      },
      plus: {
        name: "Laman Web Perniagaan Plus",
        description:
          "Laman web yang lebih besar sehingga lima halaman, dengan borang hubungi dan bahagian tambahan yang berguna.",
        includes: [
          "Semua dalam Laman Web Perniagaan",
          "Sehingga lima halaman",
          "Borang hubungi dihantar ke alamat e-mel anda, diuji sebelum penyerahan",
          "Bahagian Soalan Lazim, sehingga 8 soalan",
          "Galeri foto atau portfolio, sehingga 12 imej",
          "Tiga pusingan perubahan",
        ],
        delivery: "7–10 hari bekerja",
        cta: "Pilih Plus",
        badge: "Paling lengkap",
      },
    },
    rounds: {
      label: "Perlu diketahui",
      title: "Apakah yang dikira sebagai satu pusingan perubahan?",
      body: "Satu pusingan perubahan bermaksud satu senarai perubahan yang munasabah yang dihantar untuk laman web yang dipersetujui. Halaman baharu, ciri baharu dan perubahan besar di luar skop yang dipersetujui mungkin dikenakan caj tambahan.",
    },
    terms: {
      eyebrow: "Butiran lanjut",
      title: "Terma harga",
      lede: "Setiap projek bermula dengan pelan bertulis yang jelas. Terma ini terpakai untuk ketiga-tiga pakej di atas.",
      items: [
        "Deposit 50% sebelum kerja bermula dan 50% sebelum penyerahan akhir.",
        "Pelanggan menyediakan maklumat perniagaan, teks dan foto mereka.",
        "Yuran domain dan perkhidmatan pihak ketiga berbayar tidak termasuk.",
        "Halaman dan kandungan tambahan di luar skop yang dipersetujui akan disebutharga secara berasingan.",
        "Sistem tempahan yang kompleks, pembayaran dalam talian dan ciri tersuai memerlukan sebut harga berasingan.",
      ],
    },
  },
  portfolio: {
    eyebrow: "Hasil kerja terpilih",
    titleLead: "Dibina Dengan",
    titleAccent: "Tujuan",
    lede: "Terokai hasil kerja saya dan lihat bagaimana reka bentuk web moden dapat membantu perniagaan mempersembahkan diri mereka dalam talian.",
    previewLabel: "Lawati KundasangHomestay.my dalam tab baharu",
    imageAlt:
      "Halaman utama KundasangHomestay.my memaparkan pemandangan Gunung Kinabalu, tajuk 'Cozy, verified properties in Kundasang & Ranau' dan panel carian.",
    visit: "Lawati laman web",
    projectNumber: "Projek 01",
    projectType: "Projek peribadi",
    projectTitle: "KundasangHomestay.my",
    description:
      "Projek web berkaitan homestay yang menunjukkan pengalaman saya dalam pembangunan laman web, deployment dan penyampaian maklumat perniagaan dalam talian.",
    tagsLabel: "Bidang projek",
    tags: [
      "Pembangunan laman web",
      "Deployment",
      "Maklumat perniagaan dalam talian",
    ],
    note: "Projek peribadi yang aktif, dipaparkan sebagai contoh hasil kerja saya.",
  },
  process: {
    eyebrow: "Proses",
    titleLead: "Ringkas, Jelas dan",
    titleAccent: "Terus Terang",
    lede: "Laluan yang jelas daripada perbualan pertama hingga laman web siap.",
    steps: [
      {
        label: "Taklimat",
        title: "Ceritakan Tentang Projek Anda",
        description:
          "Kongsikan butiran perniagaan anda, matlamat dan jenis laman web yang anda perlukan.",
      },
      {
        label: "Bina & semak",
        title: "Bina dan Semak",
        description:
          "Saya membina laman web yang dipersetujui dan memberi anda peluang untuk menyemak hasil kerja dalam had pindaan yang disertakan.",
      },
      {
        label: "Penyerahan",
        title: "Lancar dan Serah",
        description:
          "Selepas pembayaran akhir, saya menerbitkan laman web yang siap, menyemaknya pada telefon dan komputer sebenar, dan menyerahkannya dengan domain anda sudah disambungkan dan package yang telah dipersetujui.",
      },
    ],
  },
  contact: {
    cta: {
      eyebrow: "Sedia untuk bermula?",
      titleLead: "Mari kita bina sesuatu yang",
      titleAccent: "hebat bersama",
      lede: "Ada idea perniagaan atau perlukan laman web? Ceritakan apa yang anda fikirkan, dan mari kita bincangkan penyelesaian yang sesuai untuk perniagaan anda.",
      primary: "Mulakan projek",
      whatsapp: "Hubungi di WhatsApp",
      whatsappLabel: "Hubungi Nick's WebDev di WhatsApp",
      whatsappFallbackLabel: "Pergi ke bahagian pertanyaan projek",
      whatsappTitle: "Sembang di WhatsApp",
      whatsappFallbackTitle:
        "Gunakan borang pertanyaan projek untuk membina mesej WhatsApp.",
    },
    intro: {
      eyebrow: "Mulakan perbualan",
      titleLead: "Ceritakan apa yang anda",
      titleAccent: "fikirkan.",
      lede: "Kongsikan sedikit butiran tentang perniagaan anda dan laman web yang anda perlukan. Jawapan anda menjadi mesej WhatsApp yang sedia dihantar — tiada apa-apa dihantar sehingga anda tekan hantar.",
      assurances: [
        "Skop yang jelas sebelum kerja bermula",
        "Komunikasi yang mudah di WhatsApp",
        "Tiada butiran pembayaran diperlukan untuk bermula",
      ],
      locationLabel: "Berpangkalan di Malaysia",
      locationNote: "Bekerjasama dengan perniagaan di seluruh negara.",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-mel",
      configNote: {
        lead: "Nota pembangun: tambah nombor WhatsApp dalam",
        tail: "untuk mengaktifkan pertanyaan WhatsApp.",
      },
    },
    form: {
      label: "Pertanyaan projek",
      title: "Mari bermula dengan perkara asas.",
      via: "MELALUI WHATSAPP",
      name: "Nama",
      namePlaceholder: "Nama anda",
      business: "Nama perniagaan",
      optional: "(pilihan)",
      businessPlaceholder: "Perniagaan anda",
      package: "Pakej laman web",
      packageUnsure: "Belum Pasti",
      description: "Keterangan projek",
      descriptionPlaceholder:
        "Apakah perniagaan anda, dan bagaimana laman web boleh membantu?",
      descriptionHint: "Beberapa ayat sudah cukup untuk bermula.",
      submit: "Teruskan di WhatsApp",
      submitNote:
        "Mesej anda akan dibuka dalam WhatsApp untuk anda semak sebelum dihantar. Anda boleh mengubah atau membatalkannya di sana.",
      openedTitle: "WhatsApp sedang dibuka dalam tab baharu.",
      openedBody:
        "Semak mesej itu, kemudian tekan hantar. Pertanyaan anda hanya dihantar apabila anda berbuat demikian.",
      errorTitle: "WhatsApp tidak tersedia buat masa ini.",
      errorBody:
        "Tiada mesej dibuka. Sila cuba lagi kemudian atau gunakan butiran hubungan di halaman ini.",
    },
    errors: {
      name: "Sila masukkan nama anda.",
      package: "Sila pilih satu pakej.",
      description: "Sila kongsikan sedikit lagi tentang projek anda.",
    },
    enquiry: {
      greeting: "Hai Nick, saya ingin berbincang tentang projek laman web.",
      name: "Nama",
      business: "Perniagaan",
      package: "Pakej",
      details: "Butiran projek",
    },
  },
  faq: {
    eyebrow: "Soalan lazim",
    titleLead: "Soalan,",
    titleAccent: "dijawab.",
    lede: "Butiran praktikal tentang pakej, tempoh masa dan apa yang dijangka apabila bekerjasama.",
    contact: "Masih ada soalan? Mulakan perbualan",
    items: [
      {
        question: "Berapakah kos laman web?",
        answer:
          "Pakej saya bermula dari RM399 untuk laman web ringkas satu halaman, RM799 untuk laman web perniagaan sehingga tiga halaman, dan RM1,299 untuk Laman Web Perniagaan Plus sehingga lima halaman.",
      },
      {
        question: "Berapa lama masa yang diambil?",
        answer:
          "Laman Web Ringkas biasanya mengambil masa 3–5 hari bekerja, Laman Web Perniagaan 5–7 hari bekerja, dan Laman Web Perniagaan Plus 7–10 hari bekerja selepas semua kandungan yang diperlukan diterima. Tempoh masa boleh berbeza bergantung pada skop dan maklum balas.",
      },
      {
        question: "Perlukah saya membeli domain?",
        answer:
          "Pendaftaran domain adalah berasingan. Saya boleh membantu menerangkan penyediaannya, dan kos domain bergantung pada penyedia domain dan sambungan yang dipilih.",
      },
      {
        question: "Bolehkah anda menambah sistem tempahan atau pembayaran dalam talian?",
        answer:
          "Ciri-ciri ini memerlukan penilaian teknikal dan sebut harga yang berasingan. Ia tidak termasuk dalam pakej standard.",
      },
      {
        question: "Bolehkah anda mengubah suai laman web saya yang sedia ada?",
        answer:
          "Pakej standard saya memberi tumpuan kepada pembinaan laman web baharu. Perubahan pada laman web sedia ada bergantung pada platformnya, kebenaran akses, kod sumber dan keperluan teknikal.",
      },
      {
        question: "Adakah anda menyediakan penyelenggaraan berterusan?",
        answer:
          "Kemas kini tambahan boleh disediakan melalui persetujuan. Penyelenggaraan berterusan dan penyelesaian masalah teknikal tidak disertakan secara automatik dalam pakej laman web.",
      },
      {
        question: "Apa yang perlu saya sediakan?",
        answer:
          "Sila sediakan butiran perniagaan anda, perkhidmatan, maklumat hubungan dan sebarang teks atau imej yang anda ingin sertakan.",
      },
      {
        question: "Apakah terma pembayaran anda?",
        answer:
          "Deposit 50% diperlukan untuk memulakan kerja, dan baki 50% perlu dibayar sebelum penyerahan akhir.",
      },
    ],
  },
  footer: {
    tagline: "Laman web profesional untuk perniagaan yang berkembang.",
    copyright: "© {year} Nick's WebDev. Hak cipta terpelihara.",
    whatsapp: "WhatsApp",
    email: "E-mel",
  },
};
