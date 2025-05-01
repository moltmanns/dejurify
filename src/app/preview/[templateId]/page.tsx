// /app/preview/[templateId]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://quggicqvqqrgmpiwfaon.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Z2dpY3F2cXFyZ21waXdmYW9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MTgyNjEsImV4cCI6MjA1OTI5NDI2MX0.F-q7WAMnZsSX6uIj2k7cRth-PylY8nn4uMy7zIVBVf8'
);

export default function TemplatePreview() {
  const params = useParams();
  const templateId = params.templateId as string;

  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    const fetchHtml = async () => {
      const { data: pages } = await supabase
        .from('template_pages')
        .select('html, page_slug')
        .eq('template_id', templateId);

      const homePage = pages?.find((p) => p.page_slug === 'home');
      setHtml(homePage?.html ?? '<p>No homepage found.</p>');
    };

    fetchHtml();
  }, [templateId]);

  return (
    <div className="w-full h-screen bg-gray-100 overflow-auto">
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p className="text-center mt-20 text-gray-500">Loading preview...</p>
      )}
    </div>
  );
}
