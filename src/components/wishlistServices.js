// services/wishlistService.js
import { supabase } from '@/supabase';

// Get all wishlist items for the current user
export const getWishlistItems = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session?.user) return [];

  const { data, error } = await supabase
    .from('wishlist_items')
    .select(
      `
      *,
      grocery_products(*)
    `
    )
    .eq('user_id', session.session.user.id);

  if (error) {
    console.error('Error fetching wishlist:', error);
    return [];
  }

  return data || [];
};

// Add an item to wishlist
export const addToWishlist = async (productId) => {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session?.user) {
    // Handle guest wishlist logic if needed
    return;
  }

  // Check if already in wishlist to avoid duplicates
  const { data: existingItem } = await supabase
    .from('wishlist_items')
    .select('id')
    .eq('user_id', session.session.user.id)
    .eq('product_id', productId)
    .single();

  if (!existingItem) {
    await supabase.from('wishlist_items').insert({
      user_id: session.session.user.id,
      product_id: productId,
    });
  }
};

// Remove an item from wishlist
export const removeFromWishlist = async (productId) => {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session?.user) return;

  await supabase
    .from('wishlist_items')
    .delete()
    .eq('user_id', session.session.user.id)
    .eq('product_id', productId);
};
