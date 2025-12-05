import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jnvbjtazaxzpvvzzsowk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudmJqdGF6YXh6cHZ2enNvd2siLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcyMjk4NjAwOCwiZXhwIjoyMDM4NTYyMDA4fQ.90o4iYn0kM42n6lMGSb_3C9-i_p_X32Lg22aEa_3QJ8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);