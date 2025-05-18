// services/cartService.js
import { supabase } from '@/supabase';

// Get all cart items for the current user
export const getCartItems = async () => {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session?.user) return [];

  const { data, error } = await supabase
    .from('cart_items')
    .select(
      `
      *,
      grocery_products(*)
    `
    )
    .eq('user_id', session.session.user.id);

  if (error) {
    console.error('Error fetching cart:', error);
    return [];
  }

  return data || [];
};

// Calculate cart total
export const getCartTotal = async () => {
  const cartItems = await getCartItems();

  const total = cartItems.reduce((sum, item) => {
    return sum + item.quantity * (item.grocery_products?.price || 0);
  }, 0);

  return total;
};

// Add an item to cart
export const addToCart = async (productId, quantity = 1) => {
  const { data: session } = await supabase.auth.getSession();
  if (!session?.session?.user) {
    // Handle guest cart logic if needed
    return;
  }

  // Check if item already exists in cart
  const { data: existingItem } = await supabase
    .from('cart_items')
    .select('*')
    .eq('user_id', session.session.user.id)
    .eq('product_id', productId)
    .single();

  if (existingItem) {
    // Update quantity if item exists
    await supabase
      .from('cart_items')
      .update({ quantity: existingItem.quantity + quantity })
      .eq('id', existingItem.id);
  } else {
    // Insert new item if it doesn't exist
    await supabase.from('cart_items').insert({
      user_id: session.session.user.id,
      product_id: productId,
      quantity,
    });
  }
};

// Remove an item from cart
export const removeFromCart = async (cartItemId) => {
  await supabase.from('cart_items').delete().eq('id', cartItemId);
};
