import { Github, Twitter, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProfileSidebar() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  const stats = [
    { label: 'Posts', value: '24' },
    { label: 'Projects', value: '12' },
    { label: 'Years Coding', value: '5+' },
  ];

  return (
    <div className="w-80 bg-white border-r border-blue-100 h-full overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6 border-blue-100">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdmF0YXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTcwOTQxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-blue-200"
              />
            </div>
            <h2 className="text-xl text-gray-900 mb-1">Alex Chen</h2>
            <p className="text-blue-600 mb-3">Full Stack Developer</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Passionate about building scalable web applications and exploring new technologies. 
              Currently focused on React, TypeScript, and trading algorithms.
            </p>
          </div>
        </Card>

        {/* Location & Date */}
        <Card className="p-4 border-blue-100">
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-sm">Coding since 2019</span>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="p-4 border-blue-100">
          <h3 className="text-gray-900 mb-3">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-lg text-blue-600">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Social Links */}
        <Card className="p-4 border-blue-100">
          <h3 className="text-gray-900 mb-3">Connect</h3>
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="justify-start border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-4 w-4 mr-2" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-4 border-blue-100">
          <h3 className="text-gray-900 mb-3">Recent Activity</h3>
          <div className="space-y-2">
            <div className="text-sm">
              <p className="text-gray-800">Published new post</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
            <Separator className="bg-blue-100" />
            <div className="text-sm">
              <p className="text-gray-800">Updated trading bot</p>
              <p className="text-xs text-gray-500">1 week ago</p>
            </div>
            <Separator className="bg-blue-100" />
            <div className="text-sm">
              <p className="text-gray-800">Started new project</p>
              <p className="text-xs text-gray-500">2 weeks ago</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}