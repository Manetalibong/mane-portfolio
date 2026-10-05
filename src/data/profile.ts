export const profile = {
  name: 'Mane Talibong',
  title: 'Web Developer · AI-Assisted Coding · SEO & Design',
  company: 'Galaxy Growth Media',
  location: 'Butuan City, Philippines',
  phone: '+63 985 101 7055',
  email: 'talibongmane4@gmail.com',
  personalWebsite: 'https://manetalibong.com/',
  avatarUrl: `${import.meta.env.BASE_URL}avatar.jpg`,
  linkedIn: 'https://www.linkedin.com/in/manetalibong',
  github: 'https://github.com/manetalibong',
  resumePdfUrl:
    'https://drive.google.com/file/d/1T2LUdHEfa5NADwAk2VHvGlrqyj0wzb4K/view',
  youtubeReviewId: 'TazMLieOr0g',
  reviewSpeaker: 'David Martirosian',
  reviewSpeakerRole: 'Founder',
  reviewQuotes: [
    {
      text:
        'He didn’t flinch — he learned new tools on his own and became very proficient at everything we threw at him. You need someone who shows up, communicates, and gets things done without too much hand-holding. That’s exactly what Mane did for us, and he was instrumental in helping us grow.',
      attribution: 'David Martirosian · Client reference',
    },
    {
      text:
        'For whoever hires Mane next: you’re going to get a really good person on your team. He stayed consistent, reliable, and ready through every pivot we made.',
      attribution: 'David Martirosian — on-camera client reference',
    },
  ],
  /** Rotating Works tab quotes (from client video transcript — no names in UI) */
  worksReviewSnippets: [
    'He didn’t flinch — he learned new tools on his own and became very proficient at everything we threw at him.',
    'You need someone who shows up, communicates, and gets things done without too much hand-holding.',
    'That’s exactly what Mane did for us — he was instrumental in helping us grow.',
    'For whoever hires Mane next: you’re going to get a really good person on your team.',
    'He stayed consistent, reliable, and ready through every pivot we made.',
    'He became very proficient at everything we threw at him.',
  ],
  summary:
    'Web developer who ships production sites end to end — custom code, WordPress, and Shopify — plus SEO and ads that drive leads. I work fast with modern stacks (React, TypeScript, Tailwind) and AI-assisted coding in Cursor and Claude: vibe coding when it speeds delivery, careful engineering when it matters.',
  aboutLead:
    'Websites that rank and convert — from WordPress to custom web apps, built with craft and AI where it helps.',
  skills: [
    'Full-stack web development',
    'React · TypeScript · Vite · Tailwind',
    'AI-assisted / vibe coding (Cursor, Claude)',
    'WordPress (Elementor, Kadence, Divi)',
    'Web design & UI/UX',
    'HTML, CSS, JavaScript',
    'SEO & local search',
    'Google Ads',
    'Shopify & e-commerce',
    'Figma, Photoshop, Canva',
    'Project management',
  ],
  experience: [
    {
      role: 'Web Developer · Web Designer · SEO Specialist · Project Manager',
      org: 'Galaxy Growth Media',
      period: '2024 – 2026',
      highlights: [
        'Built and optimized client websites (WordPress/Kadence and custom layouts) for local businesses.',
        'Designed landing pages for Google Ads; SEO work that ranked clients #1 locally.',
        'Used AI-assisted workflows (Cursor, Claude) to learn tools quickly and ship faster without sacrificing quality.',
        'Keyword research, on-page/technical SEO, competitor analysis, and campaign management.',
      ],
    },
    {
      role: 'Freelance Website & Graphic Designer',
      org: 'Self-employed',
      period: '2021 – Present',
      highlights: [
        'Custom web builds, WordPress (Elementor), Shopify, and Figma for business and e-commerce clients.',
        'UI/UX-focused layouts and modern front-end work to improve engagement and conversions.',
      ],
    },
    {
      role: 'UI/UX Designer · Website Designer · Graphic Designer',
      org: 'Paddy Digital',
      period: 'February 2022 – July 2023',
      highlights: [
        'User-friendly interfaces, branding, and responsive design with cross-team delivery.',
      ],
    },
    {
      role: 'Web Developer · Designer · Content Writer',
      org: 'Selling Format LLC',
      period: 'January 2023',
      highlights: [
        'Site maintenance, SEO-friendly content, and UX improvements.',
      ],
    },
  ],
  education: [
    {
      school: 'Philippine Electronics and Communication Institute of Technology',
      detail: 'Bachelor of Science in Information Systems (BSIS), 2024 – 2026',
    },
    {
      school: 'Caraga State University',
      detail: 'Bachelor of Science in Information Systems (BSIS), 2023 – 2024',
    },
  ],
  tools: [
    'React, TypeScript, Vite, Tailwind CSS',
    'Claude, Cursor — AI-assisted / vibe coding',
    'WordPress, Shopify',
    'Figma, Adobe Photoshop, Canva',
    'Google Ads, Google Analytics, SEMrush',
    'HTML, CSS, JavaScript, jQuery',
    'Trello, Slack, Asana, ClickUp',
    'Notion, Microsoft Office, Google Workspace',
  ],
} as const
