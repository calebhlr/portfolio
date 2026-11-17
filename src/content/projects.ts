import type { DisciplineId } from './profile';

export const projectTypes = {
  professional: 'Professional work',
  personal: 'Personal project',
  community: 'Community project',
  experiment: 'Experiment',
  study: 'Study',
} as const;

export type Project = {
  slug: string;
  title: string;
  area: DisciplineId;
  type: keyof typeof projectTypes;
  summary: string;
  context: string;
  role?: string;
  process: string;
  evidence: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'psf-predicts',
    title: 'PSF Predicts',
    area: 'development',
    type: 'community',
    summary: 'A football prediction app for the PSF community during the 2026 FIFA World Cup knockout stage.',
    context: 'The app brings fixtures and match predictions into one place for the PSF community during the knockout rounds.',
    role: 'I built the app end to end, including the frontend, API, data model, and deployment setup.',
    process: 'The project separates the React and TypeScript frontend from a Hono API on Cloudflare Workers. The API uses PostgreSQL and Drizzle to store participants, matches, predictions, and feed events.',
    evidence: 'The public repository documents the frontend and worker setup and includes the database schema and migrations for the prediction workflow.',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/calebhlr/REALPSFPREDICT/' }],
  },
];
