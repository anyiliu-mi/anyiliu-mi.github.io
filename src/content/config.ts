import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        year: z.number(),
        category: z.string(),
        summary: z.string(),
        tags: z.array(z.string()).optional(),
        links: z.object({
            paper: z.string().optional(),
            code: z.string().optional(),
            demo: z.string().optional(),
            slides: z.string().optional(),
        }).optional(),
        featured: z.boolean().default(false),
    }),
});

const writing = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        summary: z.string(),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = { projects, writing };
