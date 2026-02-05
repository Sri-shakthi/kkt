import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Star, Heart, Leaf, ShieldCheck, Instagram, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getBestsellers, categories, generateGeneralWhatsAppLink, INSTAGRAM_HANDLE, BRAND_COLOR } from '@/data/products';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bestsellers = getBestsellers().slice(0, 4);
  const testimonials = [
    {
      id: 1,
      name: 'Priya',
      location: 'Chennai',
      rating: 5,
      text: 'The thokku tastes like my grandmas. Absolutely authentic and delicious!',
      product: 'Mango Thokku',
    },
    {
      id: 2,
      name: 'Arun',
      location: 'Bangalore',
      rating: 5,
      text: 'Crunchy, spicy, and not too oily. Perfect with my meals every day.',
      product: 'Masala Peanuts',
    },
    {
      id: 3,
      name: 'Divya',
      location: 'Hyderabad',
      rating: 5,
      text: 'I reorder the chili powder every month. Best quality Ive found!',
      product: 'Guntur Chili Powder',
    },
  ];

  const instagramReels = [
    {
      embed: 'https://www.instagram.com/reel/DR9EKhLiXye/embed',
      url: 'https://www.instagram.com/reel/DR9EKhLiXye/',
    },
    {
      embed: 'https://www.instagram.com/reel/DT5g3TZCbeo/embed',
      url: 'https://www.instagram.com/reel/DT5g3TZCbeo/',
    },
    {
      embed: 'https://www.instagram.com/reel/DTZqARsCYgt/embed',
      url: 'https://www.instagram.com/reel/DTZqARsCYgt/',
    },
    {
      embed: 'https://www.instagram.com/reel/DSmy1e4iXyR/embed',
      url: 'https://www.instagram.com/reel/DSmy1e4iXyR/',
    },
    {
      embed: 'https://www.instagram.com/reel/DRwpahCCd5z/embed',
      url: 'https://www.instagram.com/reel/DRwpahCCd5z/',
    },
  ];

  return (
    <div className="bg-[#F6F2EA]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#2E5A3D]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E5A3D]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge 
                variant="outline" 
                className="mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase border-[#2E5A3D]/30 text-[#2E5A3D]"
              >
                Small Batch · No Preservatives
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
                Homemade Spices, Pickles & Snacks
              </h1>
              <p className="text-lg text-[#6E6A63] mb-8 max-w-xl mx-auto lg:mx-0">
                Freshly made, hygienically packed, delivered to your door. 
                Experience the authentic taste of traditional recipes made with love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={generateGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="text-white font-medium px-8 py-6 rounded-xl transition-all hover:scale-105 hover:shadow-lg text-base"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Order on WhatsApp
                  </Button>
                </a>
                <Link to="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#2E5A3D] text-[#2E5A3D] font-medium px-8 py-6 rounded-xl hover:bg-[#2E5A3D] hover:text-white transition-all text-base"
                  >
                    View Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-[#6E6A63] text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#2E5A3D]/10 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-[#2E5A3D]" />
                  </div>
                  100% Natural
                </div>
                <div className="flex items-center gap-2 text-[#6E6A63] text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#2E5A3D]/10 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#2E5A3D]" />
                  </div>
                  Homemade
                </div>
                <div className="flex items-center gap-2 text-[#6E6A63] text-sm">
                  <div className="w-8 h-8 rounded-full bg-[#2E5A3D]/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#2E5A3D]" />
                  </div>
                  Hygienic
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/images/hero-jar.jpg"
                  alt="Homemade Spices"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2E5A3D] rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg z-20">
                <div className="text-center text-white">
                  <span className="text-2xl font-bold">100%</span>
                  <span className="text-xs block">Natural</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-lg p-4 z-20">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] font-semibold text-sm">500+ Happy Customers</p>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2E5A3D]/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Shop by Category
            </h2>
            <p className="text-[#6E6A63] max-w-2xl mx-auto">
              From masalas to munchies—made at home, packed with care.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1A1A1A] group-hover:text-[#2E5A3D] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[#6E6A63] text-sm mt-1">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
                Best Sellers
              </h2>
              <p className="text-[#6E6A63] max-w-xl">
                The ones that get reordered every week. Our customers favorites.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-[#2E5A3D] font-medium hover:underline"
            >
              View All Products
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Why Our Kitchen Feels Different
            </h2>
            <p className="text-[#6E6A63] max-w-2xl mx-auto">
              No factories. Just recipes, time, and clean hands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Homemade',
                description: 'Cooked in small batches at home with love and attention to every detail.',
              },
              {
                icon: Leaf,
                title: 'No Preservatives',
                description: 'Short ingredient lists. Real flavor from natural ingredients only.',
              },
              {
                icon: ShieldCheck,
                title: 'Hygienic Packing',
                description: 'Sealed jars, labeled dates, safe delivery to your doorstep.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${BRAND_COLOR}15` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: BRAND_COLOR }} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6E6A63]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the Jar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge 
                variant="outline" 
                className="mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase border-[#2E5A3D]/30 text-[#2E5A3D]"
              >
                Fresh Batch
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">
                Inside the Jar
              </h2>
              <p className="text-[#6E6A63] text-lg mb-8">
                We source close to home, roast in small pans, and pack on the same day. 
                Every jar tells a story of quality and care.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Whole spices, roasted & ground fresh',
                  'Cold-pressed oils in pickles',
                  'Salt + tang balanced by taste, not shortcuts',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_COLOR }} />
                    </div>
                    <span className="text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-[#2E5A3D] text-[#2E5A3D] font-medium px-6 py-5 rounded-xl hover:bg-[#2E5A3D] hover:text-white transition-all"
                >
                  Ask for the Batch Sheet
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src="/images/inside-jar.jpg"
                alt="Inside the jar"
                className="w-full rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${BRAND_COLOR}15` }}
                  >
                    <Leaf className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Fresh Ingredients</p>
                    <p className="text-sm text-[#6E6A63]">Sourced daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Customer Love
            </h2>
            <p className="text-[#6E6A63] max-w-2xl mx-auto">
              Short reviews. Honest feedback from our wonderful customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-sm text-[#6E6A63]">{testimonial.location}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.product}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              From Our Spice Studio
            </h2>
          </div>

          <div className="mb-4">
            <p className="text-[#6E6A63] max-w-xl">
              Fresh reels, fresh flavors.
            </p>
          </div>
          <div className="relative">
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {instagramReels.map((reel, index) => (
                  <CarouselItem
                    key={reel.embed}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="bg-[#F6F2EA] rounded-2xl p-3">
                      <div className="aspect-[9/16] overflow-hidden rounded-xl">
                        <iframe
                          src={reel.embed}
                          className="w-full h-full"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Instagram reel ${index + 1}`}
                          loading="lazy"
                        />
                      </div>
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center text-sm font-medium text-[#2E5A3D] hover:underline"
                      >
                        View on Instagram
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-10" />
              <CarouselNext className="-right-4 md:-right-10" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 md:p-16 text-center"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Order now on WhatsApp and get your favorite homemade products delivered to your doorstep.
            </p>
            <a
              href={generateGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-[#2E5A3D] font-medium px-8 py-6 rounded-xl transition-all hover:scale-105 hover:shadow-lg text-base"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
