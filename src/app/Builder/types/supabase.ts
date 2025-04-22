
import { Database } from '@/integrations/supabase/types';

// Define a Json type that matches what Supabase expects
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

// Extend the BuilderComponent to be compatible with Json
declare module '@/types/builder' {
  interface BuilderComponent {
    [key: string]: any;
  }
  
  interface BuilderPage {
    [key: string]: any;
  }
}

// Add this to help with type casting
export function toJson<T>(data: T): Json {
  return data as unknown as Json;
}
