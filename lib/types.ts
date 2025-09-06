export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  coverImage?: string;
  tags: string[];
  readingTime: string;
  status: 'public' | 'private';
  password?: string;
  views: number;
  likes: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
  featured: boolean;
}
