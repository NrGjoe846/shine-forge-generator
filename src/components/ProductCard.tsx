import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  original_price?: number | null;
  image_url: string;
  badge?: string | null;
}

const ProductCard = ({ id, name, price, original_price, image_url, badge }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(id);
  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-smooth">
      <div 
        className="relative overflow-hidden aspect-square cursor-pointer"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <Button
          size="icon"
          variant={inWishlist ? "default" : "secondary"}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth shadow-medium"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(id);
          }}
        >
          <Heart className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`} />
        </Button>
      </div>
      <div className="p-4">
        <h3 
          className="font-medium text-sm mb-2 line-clamp-2 cursor-pointer hover:text-primary"
          onClick={() => navigate(`/product/${id}`)}
        >
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">₹{price}</span>
          {original_price && (
            <span className="text-sm text-muted-foreground line-through">₹{original_price}</span>
          )}
        </div>
        <Button 
          className="w-full bg-primary hover:bg-primary/90 transition-smooth" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(id);
          }}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
