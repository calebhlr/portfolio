export const disciplines = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Applied AI, experimentation, and practical uses of emerging tools.',
    topics: [
      {
        title: 'Applied AI',
        description: 'Where can AI remove repetitive work or help people make sense of large amounts of information?',
      },
      {
        title: 'Evaluation',
        description: 'What does a useful result look like, how can it be checked, and where should a person review the output?',
      },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Software, web development, and the process of turning ideas into working tools.',
    topics: [
      {
        title: 'Web and software',
        description: 'I’m interested in building accessible interfaces and keeping the code behind them easy to understand and maintain.',
      },
      {
        title: 'Salesforce',
        description: 'I’m interested in how CRM data, permissions, and automation fit together in day-to-day workflows.',
      },
    ],
  },
  {
    id: 'business',
    title: 'Business & Growth',
    description: 'The role of technology in marketing, sales, and growth.',
    topics: [
      {
        title: 'Marketing and sales',
        description: 'I’m interested in how customer feedback can improve messaging and help teams understand what buyers need.',
      },
      {
        title: 'Growth and measurement',
        description: 'A useful experiment starts with a clear question, a way to compare outcomes, and a decision the results can inform.',
      },
    ],
  },
] as const;

export type DisciplineId = (typeof disciplines)[number]['id'];

type Profile = {
  name: string;
  displayName: [string, string];
  tagline: string;
  introduction: string;
  about: string;
  links: { label: string; href: string }[];
};

export const profile: Profile = {
  name: 'Caleb Lopes',
  displayName: ['Caleb', 'Lopes'],
  tagline: 'Exploring practical uses of AI and software in business.',
  introduction: 'I’m Caleb Lopes. Here I document projects, the decisions behind them, and what I learn along the way.',
  about: 'I’m interested in how teams decide what to build, how they test whether it works, and what makes a tool useful in day-to-day work.',
  links: [{ label: 'WhatsApp', href: 'https://wa.me/5533999184622' }],
};
