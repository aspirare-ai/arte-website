export const contactContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'See ARTE',
    titleAccent: 'in action.',
    description:
      'Thirty minutes is all it takes. We will walk you through the platform, talk through your use cases, and map a path to production that fits your team.'
  },
  demo: {
    eyebrow: 'Book a demo',
    title: 'A walkthrough,',
    titleAccent: 'not a sales pitch.',
    description:
      'Our team will tailor the session to your data, your stack, and the outcomes you care about. No slides for the sake of slides.',
    benefits: [
      'Personalized platform walkthrough',
      'Discussion of your specific ML use cases',
      'Custom integration and deployment planning',
      'ROI analysis and transparent pricing'
    ]
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Reach the team',
    titleAccent: 'directly.',
    description:
      'No forms, no gatekeeping. Email or call us — a real person on the ARTE team will get back within one business day.',
    methods: [
      {
        type: 'Email',
        value: 'contact@arte-platform.com',
        description: 'General inquiries, demos, and partnership discussions.',
        action: 'mailto:contact@arte-platform.com'
      },
      {
        type: 'Phone',
        value: '+1 (555) 123-4567',
        description: 'Speak directly with someone on the platform team.',
        action: 'tel:+15551234567'
      },
      {
        type: 'Address',
        value: '123 Innovation Drive, Tech Valley, CA 94025',
        description: 'Visit our headquarters or schedule an on-site session.',
        action: null
      }
    ]
  },
  team: {
    eyebrow: 'The team behind ARTE',
    title: 'Engineers, scientists,',
    titleAccent: 'and operators.',
    description:
      'ARTE is developed by a team of ML engineers, data scientists, and enterprise software veterans who have lived through the painful parts of MLOps — and built the platform we wish we had.'
  }
};
