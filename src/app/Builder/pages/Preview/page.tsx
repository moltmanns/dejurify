'use client'

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BuilderPage } from '@/app/Builder/types/builder';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X } from 'lucide-react';
import { ComponentRenderer } from '@/app/Builder/components/builder/ComponentRenderer';
import { supabase } from '@/app/Builder/integrations/supabase/client';

const Preview = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<BuilderPage | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Check for auth state
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      
      try {
        // First try to load from Supabase if user is logged in
        if (user && slug) {
          const { data, error } = await supabase
            .from('pages')
            .select('*')
            .eq('slug', slug)
            .eq('user_id', user.id)
            .single() as { data: any, error: any };
            
          if (!error && data) {
            // Validate the page data structure
            if (data && typeof data.slug === 'string' && Array.isArray(data.components)) {
              setPage(data as BuilderPage);
              setLoading(false);
              return;
            }
          }
        }
        
        // Fallback to localStorage
        const savedPagesString = localStorage.getItem('builderPages');
        
        if (savedPagesString && slug) {
          try {
            const savedPages = JSON.parse(savedPagesString);
            const matchedPage = savedPages.find((p: BuilderPage) => p.slug === slug);
            
            if (matchedPage) {
              setPage(matchedPage);
            }
          } catch (e) {
            console.error('Error parsing saved pages:', e);
          }
        }
      } catch (error) {
        console.error('Error loading page:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadPage();
  }, [slug, user]);

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-6">The page "{slug}" could not be found.</p>
        <Link to="/builder">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Builder
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {isPreviewMode && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 text-white p-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-semibold mr-3">Preview Mode: {page.name}</span>
            <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">Not Published</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/builder">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Editor
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20" onClick={togglePreviewMode}>
              <X className="mr-2 h-4 w-4" />
              Close Preview Bar
            </Button>
          </div>
        </div>
      )}

      <div className={isPreviewMode ? "pt-16" : ""}>
        {page.components.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">This Page Is Empty</h1>
            <p className="mb-6">Add components in the builder to see them here.</p>
            <Link to="/builder">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Builder
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            {page.components.map((component, index) => (
              <div key={component.id} className="preview-component">
                <ComponentRenderer
                  component={component}
                  isSelected={false}
                  onClick={() => {}}
                  index={index}
                  isPreview={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {!isPreviewMode && (
        <div className="fixed bottom-4 right-4">
          <Button size="sm" onClick={togglePreviewMode}>
            Show Preview Bar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Preview;
