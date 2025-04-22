import { BuilderPage } from '@/app/Builder/types/builder';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { supabase } from '@/app/Builder/integrations/supabase/client';
import { toJson } from '@/app/Builder/types/supabase';

export function usePageOperations(
  pages: BuilderPage[],
  setPages: React.Dispatch<React.SetStateAction<BuilderPage[]>>,
  currentPage: BuilderPage | null,
  setCurrentPage: React.Dispatch<React.SetStateAction<BuilderPage | null>>,
  user: any
) {
  const savePage = async () => {
    if (!currentPage) return;
    
    const newPages = pages.map((page) => (page.id === currentPage.id ? currentPage : page));
    setPages(newPages);
    
    localStorage.setItem('builderPages', JSON.stringify(newPages));
    
    if (user) {
      try {
        const { error } = await supabase
          .from('pages')
          .upsert({
            id: currentPage.id,
            name: currentPage.name,
            slug: currentPage.slug,
            components: toJson(currentPage.components),
            user_id: user.id,
            updated_at: new Date().toISOString()
          });
          
        if (error) throw error;
      } catch (error) {
        console.error('Error saving page to Supabase:', error);
        toast.error('Failed to save to cloud. Saved locally.');
        return;
      }
    }
    
    toast.success('Page saved');
  };
  
  const createNewPage = async (name: string, slug: string) => {
    const newPage: BuilderPage = {
      id: uuidv4(),
      name,
      slug,
      components: [],
    };
    
    const newPages = [...pages, newPage];
    setPages(newPages);
    setCurrentPage(newPage);
    
    localStorage.setItem('builderPages', JSON.stringify(newPages));
    
    if (user) {
      try {
        const { error } = await supabase
          .from('pages')
          .insert({
            id: newPage.id,
            name: newPage.name,
            slug: newPage.slug,
            components: toJson(newPage.components),
            user_id: user.id
          });
          
        if (error) throw error;
      } catch (error) {
        console.error('Error creating page in Supabase:', error);
        toast.error('Failed to save to cloud. Saved locally.');
        return;
      }
    }
    
    toast.success(`Page "${name}" created`);
  };

  const deletePage = async (id: string) => {
    if (pages.length <= 1) {
      toast.error("Cannot delete the only page. Create another page first.");
      return;
    }
    
    const newPages = pages.filter(page => page.id !== id);
    setPages(newPages);
    
    if (currentPage?.id === id) {
      setCurrentPage(newPages[0]);
    }
    
    localStorage.setItem('builderPages', JSON.stringify(newPages));
    
    if (user) {
      try {
        const { error } = await supabase
          .from('pages')
          .delete()
          .eq('id', id) as { error: any };
          
        if (error) throw error;
      } catch (error) {
        console.error('Error deleting page from Supabase:', error);
        toast.error('Failed to delete from cloud. Deleted locally.');
        return;
      }
    }
    
    toast.success('Page deleted');
  };

  const updatePage = async (id: string, data: Partial<BuilderPage>) => {
    const newPages = pages.map(page => {
      if (page.id === id) {
        const updatedPage = { ...page, ...data };
        
        if (currentPage?.id === id) {
          setCurrentPage(updatedPage);
        }
        
        return updatedPage;
      }
      return page;
    });
    
    setPages(newPages);
    
    localStorage.setItem('builderPages', JSON.stringify(newPages));
    
    if (user) {
      try {
        const updateData: any = {
          ...data,
          updated_at: new Date().toISOString()
        };
        
        if (updateData.components) {
          updateData.components = toJson(updateData.components);
        }
        
        const { error } = await supabase
          .from('pages')
          .update(updateData)
          .eq('id', id);
          
        if (error) throw error;
      } catch (error) {
        console.error('Error updating page in Supabase:', error);
        toast.error('Failed to update in cloud. Updated locally.');
        return;
      }
    }
    
    toast.success('Page updated');
  };

  const previewPage = (id: string) => {
    const pageToPreview = pages.find(page => page.id === id);
    if (!pageToPreview) return;
    
    const previewUrl = `/preview/${pageToPreview.slug}`;
    
    window.open(previewUrl, '_blank');
    toast.success(`Previewing "${pageToPreview.name}"`);
  };

  return {
    savePage,
    createNewPage,
    deletePage,
    updatePage,
    previewPage
  };
}
