import { Mail } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Newsletter() {
  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-2">
          <Mail className="h-6 w-6 text-white" />
        </div>
        
        <div>
          <h3 className="text-xl text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 text-sm">
            Get the latest posts about development, trading insights, and life updates delivered to your inbox.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border-blue-200 focus:border-blue-400"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Subscribe
          </Button>
        </div>

        <p className="text-xs text-gray-500">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </Card>
  );
}