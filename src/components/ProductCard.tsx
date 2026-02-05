import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Star, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { generateWhatsAppLink, BRAND_COLOR } from '@/data/products';

interface ProductCardProps {
  product: Product;
  showFullDetails?: boolean;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [imageError, setImageError] = useState(false);

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'spicy':
        return <Flame className="w-3 h-3" />;
      case 'bestseller':
        return <Star className="w-3 h-3" />;
      case 'new':
        return <Sparkles className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'spicy':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'bestseller':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'new':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#F6F2EA]">
        {!imageError ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F3EFE6]">
            <span className="text-[#6E6A63] text-sm">{product.name}</span>
          </div>
        )}
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${getTagColor(tag)}`}
            >
              {getTagIcon(tag)}
              {tag}
            </Badge>
          ))}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-[#1A1A1A] text-base mb-1 group-hover:text-[#2E5A3D] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-[#6E6A63] text-sm mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Size Selection */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-xs px-2 py-1 rounded-md border transition-all ${
                  selectedSize === size
                    ? 'border-[#2E5A3D] bg-[#2E5A3D] text-white'
                    : 'border-gray-200 text-[#6E6A63] hover:border-[#2E5A3D]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <span className="text-[#1A1A1A] font-semibold text-sm">
            {product.priceRange}
          </span>
          <a
            href={generateWhatsAppLink(product.name, selectedSize)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              size="sm"
              className="text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:scale-105"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              Order
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
