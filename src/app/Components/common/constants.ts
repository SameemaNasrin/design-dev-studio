interface FAQItem {
  q: string;
  a: string;
}

export class Constants {
  public static APP_NAME: string = 'Studio.io';
  public static NAV_LINKS: string[] = ['Button', 'Button', 'Template'];
  public static PROJECTS: string[] = ['1', '2', '3'];
  public static TEMPLATES: string[] = ['temp1', 'temp2', 'temp3'];
  public static HEADING_TEMPLATES = {
    missionSection: {
      greenText: 'See How We Can Help Your Brand',
      headingText: 'Experience simpler way of getting things done',
      subHeadingText:
        'Our mission is to design websites that attract and engage customers.',
    },
    competitiveSection: {
      greenText: 'Why Choose STUDIO.IO?',
      headingText: 'Our Competitive Edge',
      subHeadingText:
        'We not only provide a premium user experience to your customers but also to our clients.',
    },
    serviceSection: {
      greenText: 'Services',
      headingText:
        'We Provide All Essential Services for Crafting Effective Websites',
      subHeadingText: '',
    },
    pricingSection: {
      greenText: 'PRICING',
      headingText: 'Simple, Transparent Pricing',
      subHeadingText:
        'Explore our competitive pricing plans designed to meet diverse business needs and budgets.',
    },
    faqSection: {
      greenText: 'FAQ’s',
      headingText: 'Have Questions? We Have Answers',
      subHeadingText:
        'Answers to common questions about our services, processes, and what sets us apart.',
    },
    darkSection: {
      greenText: '',
      headingText: 'Get ready to be amazed Find out if we are a match',
      subHeadingText:
        'Your journey to extraordinary design access is about to begin.',
    },
  };

  public static MISSION_FRAMES = [
    {
      bgImage: 'assets/DesignDev_Image.svg',
      frameText: 'Design & Development',
    },
    {
      bgImage: 'assets/BrandingSolutions_Image.svg',
      frameText: 'Branding Solutions',
    },
  ];

  public static COMPETITIVE_CARDS: any = [
    {
      iconImg: 'assets/instagram.svg',
      cardHeading: 'Warp-Speed Delivery',
      cardBody: `Your MVP, ready for liftoff in just 15 days. We're all about that "done is better than`,
    },
    {
      iconImg: 'assets/instagram.svg',
      cardHeading: 'Warp-Speed Delivery',
      cardBody: `Your MVP, ready for liftoff in just 15 days. We're all about that "done is better than`,
    },
    {
      iconImg: 'assets/instagram.svg',
      cardHeading: 'Warp-Speed Delivery',
      cardBody: `Your MVP, ready for liftoff in just 15 days. We're all about that "done is better than`,
    },
    {
      iconImg: 'assets/instagram.svg',
      cardHeading: 'Warp-Speed Delivery',
      cardBody: `Your MVP, ready for liftoff in just 15 days. We're all about that "done is better than`,
    },
    {
      iconImg: 'assets/instagram.svg',
      cardHeading: 'Warp-Speed Delivery',
      cardBody: `Your MVP, ready for liftoff in just 15 days. We're all about that "done is better than`,
    },
    {
      iconImg: 'assets/instagram.svg',
      cardHeading: 'Warp-Speed Delivery',
      cardBody: `Your MVP, ready for liftoff in just 15 days. We're all about that "done is better than`,
    },
  ];

  public static SERVICE_BTNS = [
    {
      btn: 'Website Design',
      colorGradientName: 'brown-gradient',
      colorBright: '#602B2B',
      colorLight: '#FBC1C1',
    },
    {
      btn: 'Frontend Development',
      colorGradientName: 'yellow-gradient',
      colorBright: '#877D4E',
      colorLight: '#FBE6C1',
    },
    {
      btn: 'Graphics',
      colorGradientName: 'green-gradient',
      colorBright: '#5E7D2F',
      colorLight: '#D6FBC1',
    },
    {
      btn: 'Logos',
      colorGradientName: 'pink-gradient',
      colorBright: '#EBC1FB',
      colorLight: '#6A3063',
    },
    {
      btn: 'Mobile app Design',
      colorGradientName: 'blue-gradient',
      colorBright: '#C1EFFB',
      colorLight: '#2E6962',
    },
    {
      btn: 'Branding',
      colorGradientName: 'orange-gradient',
      colorBright: '#FBC3C1',
      colorLight: '#A67B6D',
    },
    {
      btn: 'Slide Decks',
      colorGradientName: 'purple-gradient',
      colorBright: '#CAC1FB',
      colorLight: '#56448D',
    },
    {
      btn: 'Brand Guides',
      colorGradientName: 'yellow-gradient',
      colorBright: '#877D4E',
      colorLight: '#FBE6C1',
    },
    {
      btn: 'Social media',
      colorGradientName: 'light-blue-gradient',
      colorBright: '#559AFF',
      colorLight: '#CBE0FE',
    },
    {
      btn: 'Blog Graphics',
      colorGradientName: 'blue-gradient',
      colorBright: '#C1EFFB',
      colorLight: '#2E6962',
    },
  ];

  public static PRICING_CARDS = [
    {
      serviceName: 'Service1',
      price: '$1999',
      priceType: 'USD Starting',
      serviceMVP:
        'Transform your Figma designs into fully functional frontend applications.',
      serviceIncludes: [
        'Perfect conversion from Figma',
        'Responsive design implementation',
        'Basic interactivity and animations',
        'Cross-browser compatibility',
      ],
      btnText: 'Get Your Design Coded',
    },
    {
      serviceName: 'Service2',
      price: '$3999',
      priceType: 'USD Starting',
      tag: 'Most Popular',
      serviceMVP:
        'Transform your Figma designs into fully functional frontend applications.',
      serviceIncludes: [
        'Perfect conversion from Figma',
        'Responsive design implementation',
        'Basic interactivity and animations',
        'Cross-browser compatibility',
      ],
      btnText: 'Get Your Design Coded',
    },
    {
      serviceName: 'Service3',
      price: `Let's Talk`,
      priceType: 'Customized pricing',
      serviceMVP:
        'Transform your Figma designs into fully functional frontend applications.',
      serviceIncludes: [
        'Perfect conversion from Figma',
        'Responsive design implementation',
        'Basic interactivity and animations',
        'Cross-browser compatibility',
      ],
      btnText: 'Get Your Design Coded',
    },
  ];

  public static SOCIALS: string[] = [
    'assets/instagram.svg',
    'assets/LinkedIn.svg',
    'assets/github.svg',
  ];

  public static FOOTER_LINKS: string[] = [
    'Latest projects',
    'Pricing',
    'About Us',
    'Careers',
    'Templates',
    'Privacy Policy',
    'Terms & Conditions',
    'Contact Us',
    'Contact Us',
  ];

  public static FAQS: FAQItem[] = [
    {
      q: `Why wouldn't I just hire a full-time designer?`,
      a: ` Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`,
    },
    {
      q: `Why wouldn't I just hire a full-time designer?`,
      a: ` Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`,
    },
    {
      q: `Why wouldn't I just hire a full-time designer?`,
      a: ` Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`,
    },
    {
      q: `Why wouldn't I just hire a full-time designer?`,
      a: ` Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`,
    },
    {
      q: `Why wouldn't I just hire a full-time designer?`,
      a: ` Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`,
    },
    {
      q: `Why wouldn't I just hire a full-time designer?`,
      a: ` Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.`,
    },
  ];
}
