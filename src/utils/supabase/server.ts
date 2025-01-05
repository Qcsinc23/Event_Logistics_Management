import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Anon Key must be defined in environment variables');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  }
});

// Log auth state changes and handle errors
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth event:', event);
  switch (event) {
    case 'SIGNED_IN':
      console.log('Signed in:', session?.user?.email);
      break;
    case 'SIGNED_OUT':
      console.log('Signed out');
      break;
    case 'TOKEN_REFRESHED':
      console.log('Token refreshed');
      break;
    case 'USER_UPDATED':
      console.log('User updated:', session?.user?.email);
      break;
    case 'MFA_CHALLENGE_VERIFIED':
      console.log('MFA verified');
      break;
    case 'PASSWORD_RECOVERY':
      console.log('Password recovery requested');
      break;
    case 'INITIAL_SESSION':
      console.log('Initial session:', session?.user?.email);
      break;
  }
});
