import { BlogPost } from './BlogPost';

export function RecentPosts() {
  const posts = [
    {
      title: "Building a Real-Time Trading Dashboard with React and WebSockets",
      excerpt: "Learn how to create a responsive trading dashboard that displays real-time market data using React, TypeScript, and WebSocket connections. We'll cover state management, chart libraries, and performance optimization.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Development",
      views: 1024,
      likes: 42,
      comments: 8,
      featured: true
    },
    {
      title: "My Journey into Algorithmic Trading",
      excerpt: "From manual trading to building automated systems - here's what I learned about developing trading algorithms, backtesting strategies, and managing risk in the financial markets.",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Trading",
      views: 856,
      likes: 31,
      comments: 12
    },
    {
      title: "TypeScript Tips for Better React Development",
      excerpt: "Practical TypeScript patterns and best practices that have improved my React development workflow. Including advanced type definitions, utility types, and common patterns.",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      category: "Development",
      views: 642,
      likes: 28,
      comments: 5
    },
    {
      title: "Working from Coffee Shops: A Digital Nomad's Guide",
      excerpt: "Tips and tools for staying productive while working remotely from different locations. From WiFi considerations to finding the perfect workspace atmosphere.",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      category: "Daily Life",
      views: 394,
      likes: 19,
      comments: 3
    },
    {
      title: "Setting Up a Scalable Node.js API with Docker",
      excerpt: "Step-by-step guide to containerizing a Node.js application with Docker, including database connections, environment configuration, and deployment strategies.",
      date: "Dec 1, 2024",
      readTime: "10 min read",
      category: "Development",
      views: 1205,
      likes: 67,
      comments: 15
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl text-gray-900">Recent Posts</h2>
        <a href="/archive" className="text-blue-600 hover:text-blue-700 transition-colors">
          View all posts →
        </a>
      </div>
      
      <div className="space-y-4">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
}