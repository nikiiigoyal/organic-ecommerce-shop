// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_PROJECTURL


const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANONKEY
console.log(supabaseUrl,supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey)