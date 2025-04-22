
import { useState, useEffect } from 'react';
import { BuilderPage } from '@/app/Builder/types/builder';
import { supabase } from '@/app/Builder/integrations/supabase/client';

export function useLoadPages(user: any) {
  const [pages, setPages] = useState<BuilderPage[]>([]);
  const [currentPage, setCurrentPage] = useState<BuilderPage | null>(null);

  useEffect(() => {
    const loadPages = async () => {
      try {
        if (user) {
          const { data, error } = await supabase
            .from('pages')
            .select('*')
            .order('created_at', { ascending: false }) as { data: any[], error: any };
          
          if (error) {
            throw error;
          }

          if (data && data.length > 0) {
            // Ensure data conforms to BuilderPage type
            const validPages = data.filter(page => 
              page && typeof page.id === 'string' && 
              typeof page.name === 'string' && 
              typeof page.slug === 'string' && 
              Array.isArray(page.components)
            ) as BuilderPage[];
            
            setPages(validPages);
            if (validPages.length > 0) {
              setCurrentPage(validPages[0]);
            }
            return;
          }
        }

        const savedPages = localStorage.getItem('builderPages');
        if (savedPages) {
          const parsedPages = JSON.parse(savedPages);
          setPages(parsedPages);
          if (parsedPages.length > 0) {
            setCurrentPage(parsedPages[0]);
          }
        }
      } catch (e) {
        console.error('Error loading pages:', e);
        const savedPages = localStorage.getItem('builderPages');
        if (savedPages) {
          try {
            const parsedPages = JSON.parse(savedPages);
            setPages(parsedPages);
            if (parsedPages.length > 0) {
              setCurrentPage(parsedPages[0]);
            }
          } catch (error) {
            console.error('Error parsing saved pages:', error);
          }
        }
      }
    };

    loadPages();
  }, [user]);

  return {
    pages,
    setPages,
    currentPage,
    setCurrentPage
  };
}
