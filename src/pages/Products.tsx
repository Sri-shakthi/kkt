import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, categories, BRAND_COLOR } from '@/data/products';


type SortOption = 'popular' | 'new';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [showFilters, setShowFilters] = useState(false);

  // Initialize from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case 'new':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('popular');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all';

  return (
    <div className="min-h-screen bg-[#F6F2EA] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-2">
            Our Products
          </h1>
          <p className="text-[#6E6A63]">
            Browse our collection of homemade spices, health mixes, pickles, and snacks.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-2xl p-4 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E6A63]" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-2.5 rounded-xl border-gray-200 focus:border-[#2E5A3D] focus:ring-[#2E5A3D]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6E6A63] hover:text-[#1A1A1A]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Sort Dropdown */}
              <div className="relative flex-1 min-w-[170px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none w-full px-4 py-2.5 pr-10 rounded-xl border border-gray-200 bg-white text-[#1A1A1A] text-sm focus:border-[#2E5A3D] focus:ring-1 focus:ring-[#2E5A3D] cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="new">Newest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E6A63] pointer-events-none" />
              </div>

              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-gray-200"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Category Filter - Desktop (Below Search) */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap mt-4 pt-4 border-t border-gray-100">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange('all')}
              className={`rounded-lg ${
                selectedCategory === 'all'
                  ? 'text-white'
                  : 'border-gray-200 text-[#6E6A63] hover:border-[#2E5A3D] hover:text-[#2E5A3D]'
              }`}
              style={selectedCategory === 'all' ? { backgroundColor: BRAND_COLOR } : {}}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category.id)}
                className={`rounded-lg ${
                  selectedCategory === category.id
                    ? 'text-white'
                    : 'border-gray-200 text-[#6E6A63] hover:border-[#2E5A3D] hover:text-[#2E5A3D]'
                }`}
                style={selectedCategory === category.id ? { backgroundColor: BRAND_COLOR } : {}}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Mobile Category Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-[#6E6A63] mb-2">Categories</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange('all')}
                  className={`rounded-lg ${
                    selectedCategory === 'all'
                      ? 'text-white'
                      : 'border-gray-200 text-[#6E6A63]'
                  }`}
                  style={selectedCategory === 'all' ? { backgroundColor: BRAND_COLOR } : {}}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`rounded-lg ${
                      selectedCategory === category.id
                        ? 'text-white'
                        : 'border-gray-200 text-[#6E6A63]'
                    }`}
                    style={selectedCategory === category.id ? { backgroundColor: BRAND_COLOR } : {}}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-[#6E6A63]">Active filters:</span>
              {selectedCategory !== 'all' && (
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleCategoryChange('all')}
                >
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {searchQuery && (
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setSearchQuery('')}
                >
                  Search: {searchQuery}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-[#2E5A3D] hover:underline ml-auto"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[#6E6A63] text-sm">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-[#6E6A63]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
              No products found
            </h3>
            <p className="text-[#6E6A63] mb-4">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-[#2E5A3D] text-[#2E5A3D] hover:bg-[#2E5A3D] hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
