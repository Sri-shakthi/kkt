import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Star, Flame, Sparkles, ChevronRight, Package, Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { getProductById, getRelatedProducts, generateWhatsAppLink, BRAND_COLOR } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [imageError, setImageError] = useState(false);

  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F6F2EA] pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4">Product Not Found</h1>
          <p className="text-[#6E6A63] mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/products">
            <Button style={{ backgroundColor: BRAND_COLOR }} className="text-white">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

  const handleOrder = () => {
    const link = generateWhatsAppLink(product.name, selectedSize);
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F6F2EA] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-[#6E6A63] mb-6">
          <Link to="/" className="hover:text-[#2E5A3D] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/products" className="hover:text-[#2E5A3D] transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#1A1A1A]">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#6E6A63] hover:text-[#2E5A3D] transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </button>

        {/* Product Details */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm mb-12">
          <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#F6F2EA]">
                {!imageError ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#F3EFE6]">
                    <span className="text-[#6E6A63]">{product.name}</span>
                  </div>
                )}
              </div>
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={`text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1 ${getTagColor(tag)}`}
                  >
                    {getTagIcon(tag)}
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-[#6E6A63] capitalize">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                {product.name}
              </h1>
              <p className="text-[#6E6A63] text-lg mb-6">
                {product.description}
              </p>

              {/* Price Range */}
              <div className="mb-6">
                <span className="text-2xl font-bold text-[#1A1A1A]">
                  {product.priceRange}
                </span>
                <span className="text-[#6E6A63] text-sm ml-2">
                  (Prices vary by size)
                </span>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1A1A1A] mb-3">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 rounded-xl border-2 transition-all ${
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

              {/* Order Button */}
              <div className="mb-8">
                <Button
                  onClick={handleOrder}
                  size="lg"
                  className="w-full sm:w-auto text-white font-medium px-8 py-6 rounded-xl transition-all hover:scale-105 hover:shadow-lg text-base"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </Button>
                <p className="text-sm text-[#6E6A63] mt-3">
                  We&apos;ll reply with exact price and availability
                </p>
              </div>

              {/* Product Info */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                {product.ingredients && (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Package className="w-5 h-5" style={{ color: BRAND_COLOR }} />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A] text-sm">Ingredients</p>
                      <p className="text-[#6E6A63] text-sm">{product.ingredients}</p>
                    </div>
                  </div>
                )}
                {product.storageInfo && (
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Clock className="w-5 h-5" style={{ color: BRAND_COLOR }} />
                    </div>
                    <div>
                      <p className="font-medium text-[#1A1A1A] text-sm">Storage</p>
                      <p className="text-[#6E6A63] text-sm">{product.storageInfo}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Check, text: '100% Natural Ingredients' },
            { icon: Check, text: 'No Preservatives' },
            { icon: Check, text: 'Hygienically Packed' },
            { icon: Check, text: 'Freshly Made' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 flex items-center gap-3"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${BRAND_COLOR}15` }}
              >
                <feature.icon className="w-4 h-4" style={{ color: BRAND_COLOR }} />
              </div>
              <span className="text-sm font-medium text-[#1A1A1A]">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
