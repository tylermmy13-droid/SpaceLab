// ===== Astro 内容集合配置 =====
// 定义 publications / collections / news 三个内容集合的 schema 和加载方式

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// ===== 论文集合 =====
const publications = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/publications',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    description: z.string(),
    descriptionZh: z.string().optional(),
    pubDate: z.coerce.date(),
    venue: z.string(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    paperUrl: z.url().optional(),
    codeUrl: z.url().optional(),
    paperSite: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

// ===== 研究方向集合 =====
const collectionItems = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/collections',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    description: z.string(),
    descriptionZh: z.string(),
    pubDate: z.coerce.date(),
    platform: z.string(),
    platformZh: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    githubUrl: z.url().optional(),
    huggingfaceUrl: z.url().optional(),
    draft: z.boolean().default(false),
    accentColor: z.string().optional()
  })
});

// ===== 新闻动态集合 =====
const news = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/news',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    description: z.string(),
    descriptionZh: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    linkUrl: z.url().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { publications, collections: collectionItems, news };
