import { SiteConfig, NavItem, Category } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'PHAGLP',
  description: 'Philosophical Education Platform - Learn, Grow, and Transform through Wisdom',
  url: 'https://phaglp.com',
  logo: '/logo.png',
  social: {
    twitter: 'https://twitter.com/phaglp',
    linkedin: 'https://linkedin.com/company/phaglp',
    facebook: 'https://facebook.com/phaglp',
    instagram: 'https://instagram.com/phaglp',
  },
}

export const navigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Philosophical Courses',
    href: '/courses',
    children: [
      { label: 'Ancient Philosophy', href: '/courses/ancient-philosophy' },
      { label: 'Modern Philosophy', href: '/courses/modern-philosophy' },
      { label: 'Ethics & Morality', href: '/courses/ethics' },
      { label: 'Logic & Reasoning', href: '/courses/logic' },
    ],
  },
  {
    label: 'Articles',
    href: '/articles',
    children: [
      { label: 'Latest Articles', href: '/articles' },
      { label: 'Philosophy', href: '/articles/philosophy' },
      { label: 'Education', href: '/articles/education' },
      { label: 'Marriage & Relationships', href: '/articles/marriage' },
    ],
  },
  {
    label: 'User Profiles',
    href: '/profiles',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
]

export const categories: Category[] = [
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Educational content and courses',
    icon: 'BookOpen',
    children: [
      {
        id: 'science',
        name: 'Science',
        slug: 'science',
        description: 'Scientific knowledge and discoveries',
        parentId: 'education',
      },
      {
        id: 'weekly-applied-lecture',
        name: 'Weekly Applied Lecture',
        slug: 'weekly-applied-lecture',
        description: 'Weekly practical philosophy lectures',
        parentId: 'education',
      },
      {
        id: 'wisdom',
        name: 'Wisdom',
        slug: 'wisdom',
        description: 'Ancient and modern wisdom teachings',
        parentId: 'education',
      },
    ],
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce',
    slug: 'e-commerce',
    description: 'Business and commerce related content',
    icon: 'ShoppingCart',
  },
  {
    id: 'marriage',
    name: 'Marriage',
    slug: 'marriage',
    description: 'Marriage, relationships, and family wisdom',
    icon: 'Heart',
  },
]
