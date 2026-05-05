import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const articles = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		linkedinUrl: z.string().url().optional(),
	}),
});

/** Single entry `projects` — root key in YAML is `projects:` (see `src/data/projects.yaml`).
 * The file loader uses each top-level YAML key as an entry id and the value beneath as the entry data. */
const projects = defineCollection({
	loader: file('src/data/projects.yaml'),
	schema: z.array(
		z.object({
			name: z.string(),
			tagline: z.string().optional(),
			description: z.string(),
			stack: z.array(z.string()).optional(),
			status: z.string().optional(),
			links: z
				.array(
					z.object({
						label: z.string(),
						url: z.string(),
					}),
				)
				.optional(),
		}),
	),
});

/** Single entry `resume` — keys in YAML must match the root object (see `src/data/resume.yaml`). */
const resume = defineCollection({
	loader: file('src/data/resume.yaml'),
	schema: z.object({
		name: z.string(),
		title: z.string(),
		contact: z.object({
			email: z.string().email().optional(),
			location: z.string().optional(),
			links: z
				.array(
					z.object({
						label: z.string(),
						url: z.string().url(),
					}),
				)
				.optional(),
		}),
		summary: z.string().optional(),
		experience: z.array(
			z.object({
				company: z.string(),
				role: z.string(),
				location: z.string().optional(),
				start: z.string(),
				end: z.string(),
				highlights: z.array(z.string()),
			}),
		),
		education: z
			.array(
				z.object({
					school: z.string(),
					degree: z.string(),
					year: z.string().optional(),
					details: z.string().optional(),
				}),
			)
			.optional(),
		skills: z
			.array(
				z.object({
					category: z.string(),
					items: z.array(z.string()),
				}),
			)
			.optional(),
	}),
});

export const collections = { articles, resume, projects };
