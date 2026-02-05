import { useEffect } from 'react';
import { Heart, Leaf, ShieldCheck, Award, Users, ChefHat } from 'lucide-react';
import { BRAND_COLOR } from '@/data/products';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every product is crafted with care and attention, just like how our grandmother used to make.',
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'We use only the freshest, highest quality ingredients sourced from trusted local suppliers.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Promise',
      description: 'Each batch is tested for taste and quality before it reaches your doorstep.',
    },
    {
      icon: Award,
      title: 'Traditional Recipes',
      description: 'Authentic recipes passed down through generations, preserving the true flavors of home.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '20+', label: 'Products' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Natural' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F2EA] pt-24 pb-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
                Our Story
              </h1>
              <p className="text-lg text-[#6E6A63] mb-6 leading-relaxed">
                What started as a small kitchen experiment has grown into a passion for sharing 
                the authentic taste of homemade goodness. We believe that food made with love 
                tastes better, and we put that love into every jar we create.
              </p>
              <p className="text-lg text-[#6E6A63] mb-6 leading-relaxed">
                Our journey began with a simple goal: to bring back the traditional flavors 
                that were slowly disappearing from our modern kitchens. Today, we&apos;re proud 
                to serve hundreds of customers who share our love for authentic, homemade food.
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A]">Family Recipe</p>
                  <p className="text-sm text-[#6E6A63]">Since 2019</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/instagram-2.jpg"
                alt="Our kitchen"
                className="w-full rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${BRAND_COLOR}15` }}
                  >
                    <Users className="w-7 h-7" style={{ color: BRAND_COLOR }} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1A1A1A]">500+</p>
                    <p className="text-sm text-[#6E6A63]">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: BRAND_COLOR }}
                >
                  {stat.number}
                </p>
                <p className="text-[#6E6A63]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our Values
            </h2>
            <p className="text-[#6E6A63] max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${BRAND_COLOR}15` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: BRAND_COLOR }} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#6E6A63]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/instagram-1.jpg"
                alt="Our process"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">
                How We Make It
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Sourcing',
                    description: 'We carefully select the freshest ingredients from trusted local suppliers.',
                  },
                  {
                    step: '02',
                    title: 'Preparation',
                    description: 'Each ingredient is cleaned, sorted, and prepared by hand in our kitchen.',
                  },
                  {
                    step: '03',
                    title: 'Cooking',
                    description: 'We follow traditional recipes, cooking in small batches to ensure quality.',
                  },
                  {
                    step: '04',
                    title: 'Packing',
                    description: 'Products are hygienically packed in sealed jars with proper labeling.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold"
                      style={{ backgroundColor: `${BRAND_COLOR}15`, color: BRAND_COLOR }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A] mb-1">{item.title}</h3>
                      <p className="text-[#6E6A63] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Promise */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Hygiene Promise
                </h2>
                <p className="text-white/80 mb-6">
                  Your health and safety are our top priorities. We follow strict hygiene 
                  protocols at every step of our process.
                </p>
                <ul className="space-y-3">
                  {[
                    'Clean, sanitized kitchen environment',
                    'Food-grade packaging materials',
                    'Regular health checks for staff',
                    'Proper labeling with manufacturing dates',
                    'Sealed jars to maintain freshness',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/instagram-3.jpg"
                  alt="Hygiene standards"
                  className="rounded-2xl shadow-lg max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-4">
              Behind the Scenes
            </h2>
            <p className="text-[#6E6A63] max-w-2xl mx-auto">
              A glimpse into our kitchen and the people behind your favorite products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/categories/spices.jpg',
              '/images/categories/pickles.jpg',
              '/images/categories/thokku.jpg',
              '/images/inside-jar.jpg',
            ].map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
