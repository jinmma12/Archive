import { Calendar, Clock, Eye, Heart, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
}

export function BlogPost({
  title,
  excerpt,
  date,
  readTime,
  category,
  views,
  likes,
  comments,
  featured = false
}: BlogPostProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'development':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      case 'trading':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'daily life':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  };

  return (
    <Card className={`p-6 border-blue-100 hover:shadow-md transition-shadow ${featured ? 'border-blue-300 bg-blue-50/30' : ''}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className={getCategoryColor(category)}>
            {category}
          </Badge>
          {featured && (
            <Badge variant="default" className="bg-blue-600 text-white">
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {excerpt}
          </p>
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-between pt-2 border-t border-blue-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <span className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {views}
              </span>
              <span className="flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                {likes}
              </span>
              <span className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                {comments}
              </span>
            </div>
            <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}