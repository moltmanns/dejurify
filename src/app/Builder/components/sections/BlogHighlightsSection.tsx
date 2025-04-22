
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
}

interface BlogHighlightsSectionProps {
  style?: 'cards' | 'list' | 'featured';
  headline?: string;
  description?: string;
  posts: BlogPost[];
}

export const BlogHighlightsSection: React.FC<BlogHighlightsSectionProps> = ({
  style = 'cards',
  headline = 'Legal Insights',
  description,
  posts,
}) => {
  // Simple date formatter
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderCardsStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div 
                className="h-48 bg-gray-200 dark:bg-gray-700"
                style={
                  post.imageUrl 
                    ? {
                        backgroundImage: `url(${post.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              ></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderListStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
          )}
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
              <div 
                className="md:w-1/3 h-48 md:h-auto bg-gray-200 dark:bg-gray-700"
                style={
                  post.imageUrl 
                    ? {
                        backgroundImage: `url(${post.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              ></div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {formatDate(post.date)}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFeaturedStyle = () => {
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);
    
    return (
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            {headline && (
              <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
            )}
          </div>
          
          {featuredPost && (
            <div className="grid md:grid-cols-2 gap-8 mb-12 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div 
                className="h-64 md:h-auto bg-gray-200 dark:bg-gray-700"
                style={
                  featuredPost.imageUrl 
                    ? {
                        backgroundImage: `url(${featuredPost.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              ></div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-legal-navy text-white text-xs px-3 py-1 rounded mb-3">
                  Featured Article
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3">{featuredPost.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {formatDate(featuredPost.date)}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  {featuredPost.author}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{featuredPost.excerpt}</p>
                <Button className="bg-legal-navy hover:bg-legal-navy/90 mt-2 self-start">
                  Read Full Article
                </Button>
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div 
                  className="h-36 bg-gray-200 dark:bg-gray-700"
                  style={
                    post.imageUrl 
                      ? {
                          backgroundImage: `url(${post.imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : {}
                  }
                ></div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-semibold mb-2">{post.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {formatDate(post.date)}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  switch (style) {
    case 'list':
      return renderListStyle();
    case 'featured':
      return renderFeaturedStyle();
    default:
      return renderCardsStyle();
  }
};
