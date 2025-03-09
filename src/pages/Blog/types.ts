/**
 * Blog-related TypeScript type definitions
 */

/**
 * Blog author type
 */
export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

/**
 * Blog post type
 */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  publishDate: string;
  categoryId: string;
  imageUrl: string;
  readTime: number;
  featured?: boolean;
}

/**
 * Blog category type
 */
export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}
