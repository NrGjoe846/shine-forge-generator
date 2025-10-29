import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price: number | null;
  category: string;
  collection: string | null;
  image_url: string;
  images: string[];
  badge: string | null;
  stock: number;
  rating: number;
  review_count: number;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  created_at: string;
  user_id: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  const fetchProduct = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      navigate('/shop');
    } else {
      setProduct(data);
    }
  };

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('product_id', id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
  };

  const handleAddReview = async () => {
    if (!user) {
      toast.error('Please sign in to leave a review');
      return;
    }

    const { error } = await supabase
      .from('reviews')
      .insert({
        product_id: id,
        user_id: user.id,
        rating: newReview.rating,
        comment: newReview.comment,
      });

    if (error) {
      console.error('Error adding review:', error);
      toast.error('Failed to add review');
    } else {
      toast.success('Review added successfully!');
      setNewReview({ rating: 5, comment: '' });
      fetchReviews();
      fetchProduct();
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const allImages = [product.image_url, ...(product.images || [])];
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-medium">
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.badge && (
              <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <h1 className="text-4xl font-heading font-bold">{product.name}</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(product.rating)
                        ? 'fill-primary text-primary'
                        : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                ({product.review_count} reviews)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">₹{product.price}</span>
              {product.original_price && (
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.original_price}
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={() => addToCart(product.id)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant={inWishlist ? 'default' : 'outline'}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
              </Button>
            </div>

            <Separator />

            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over ₹999</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span>Anti-tarnish guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>7-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold mb-6">Customer Reviews</h2>
          
          {user && (
            <Card className="p-6 mb-8">
              <h3 className="font-semibold mb-4">Write a Review</h3>
              <div className="space-y-4">
                <div>
                  <Label>Rating</Label>
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= newReview.rating
                              ? 'fill-primary text-primary'
                              : 'fill-muted text-muted'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Comment</Label>
                  <Textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your thoughts about this product..."
                    className="mt-2"
                  />
                </div>
                <Button onClick={handleAddReview}>Submit Review</Button>
              </div>
            </Card>
          )}

          <div className="space-y-6">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Customer</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {new Date(review.created_at).toLocaleDateString()}
                </p>
                <p>{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
