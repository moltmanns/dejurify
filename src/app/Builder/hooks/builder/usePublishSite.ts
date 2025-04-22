
import { useState } from 'react';
import { BuilderPage, PublishedSite } from '@/app/Builder/types/builder';
import { toast } from 'sonner';
import { supabase } from '@/app/Builder/integrations/supabase/client';
import { toJson } from '@/app/Builder/types/supabase';

export function usePublishSite(pages: BuilderPage[], user: any) {
  const [isPublishing, setIsPublishing] = useState(false);

  const publishSite = async () => {
    if (!user) {
      toast.error('You must be logged in to publish your site');
      return;
    }

    if (pages.length === 0) {
      toast.error('You must have at least one page to publish your site');
      return;
    }

    setIsPublishing(true);

    try {
      const { error } = await supabase
        .from('published_sites')
        .upsert({
          user_id: user.id,
          pages: toJson(pages),
          published_at: new Date().toISOString()
        });

      if (error) throw error;

      toast.success('Site published successfully!');
    } catch (error) {
      console.error('Error publishing site:', error);
      toast.error('Failed to publish site');
    } finally {
      setIsPublishing(false);
    }
  };

  return {
    publishSite,
    isPublishing
  };
}
