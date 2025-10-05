import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CollectionCard = ({ title, description, image, link }: CollectionCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-strong transition-smooth aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4 opacity-90">{description}</p>
          <Button variant="secondary" size="sm" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30">
            Explore Collection
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
