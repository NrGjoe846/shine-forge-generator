import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useWishlist } from '@/hooks/useWishlist';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number | null;
  image_url: string;
  badge: string | null;
}

const Wishlist = () => {
  const { user } = useAuth();
  const { wishlistIds } = useWishlist();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (wishlistIds.length > 0) {
      fetchWishlistProducts();
    } else {
      setProducts([]);
    }
  }, [wishlistIds]);

  const fetchWishlistProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('id, name, price, original_price, image_url, badge')
      .in('id', wishlistIds);

    if (!error && data) {
      setProducts(data);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <Heart className="h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-heading font-bold mb-2">Your Wishlist</h1>
          <p className="text-muted-foreground mb-6">Sign in to view your saved items</p>
          <Link to="/auth">
            <Button>Sign In</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {products.length} {products.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-6">Your wishlist is empty</p>
            <Link to="/shop">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
