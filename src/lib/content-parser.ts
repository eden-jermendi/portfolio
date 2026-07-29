import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';

const projectSchema = z.object({
  title: z.string().max(60),
  abstract: z.string(),
  role: z.string().optional(),
  date: z.string(),
  stack: z.array(z.string()),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;

export interface ProjectEntity extends ProjectFrontmatter {
  slug: string;
  body: string;
}

const contentDir = path.join(process.cwd(), 'src/content');
const projectsDir = path.join(contentDir, 'projects');

export function getProjectBySlug(slug: string): ProjectEntity {
  const fullPath = path.join(projectsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Parse frontmatter
  const { data, content } = matter(fileContents);

  // Validate frontmatter against strict schema (halts build if invalid)
  const validatedData = projectSchema.parse(data);

  return {
    slug,
    body: content,
    ...validatedData,
  };
}

export function getAllProjects(): ProjectEntity[] {
  if (!fs.existsSync(projectsDir)) return [];
  
  const fileNames = fs.readdirSync(projectsDir);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getProjectBySlug(slug);
    });

  // Sort by date descending
  return projects.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

// Global Site Configuration Pipeline
const siteConfigSchema = z.object({
  title: z.string(),
  description: z.string(),
  baseUrl: z.string().url(),
  author: z.string(),
  navigation: z.array(z.object({
    label: z.string(),
    href: z.string(),
    isExternal: z.boolean(),
  }))
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export function getSiteConfig(): SiteConfig {
  const fullPath = path.join(contentDir, 'site-config.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = JSON.parse(fileContents);
  return siteConfigSchema.parse(data);
}
