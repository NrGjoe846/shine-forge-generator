import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export function useWishlist() {
  const { user } = useAuth();
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    if (!user) {
      setWishlistIds([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('wishlist_items')
      .select('product_id')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching wishlist:', error);
    } else {
      setWishlistIds(data?.map(item => item.product_id) || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  const toggleWishlist = async (productId: string) => {
    if (!user) {
      toast.error('Please sign in to add to wishlist');
      return;
    }

    const isInWishlist = wishlistIds.includes(productId);

    if (isInWishlist) {
      const { error } = await supabase
        .from('wishlist_items')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) {
        console.error('Error removing from wishlist:', error);
        toast.error('Failed to remove from wishlist');
      } else {
        toast.success('Removed from wishlist');
        fetchWishlist();
      }
    } else {
      const { error } = await supabase
        .from('wishlist_items')
        .insert({ user_id: user.id, product_id: productId });

      if (error) {
        console.error('Error adding to wishlist:', error);
        toast.error('Failed to add to wishlist');
      } else {
        toast.success('Added to wishlist');
        fetchWishlist();
      }
    }
  };

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);

  return {
    wishlistIds,
    loading,
    toggleWishlist,
    isInWishlist,
  };
}
