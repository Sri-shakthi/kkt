import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Clock, Phone, Facebook, Twitter, Youtube } from 'lucide-react';
import {
  generateGeneralWhatsAppLink,
  INSTAGRAM_HANDLE,
  FACEBOOK_URL,
  TWITTER_URL,
  PINTEREST_URL,
  GOOGLE_BUSINESS_URL,
  YOUTUBE_SHORT_1_URL,
  YOUTUBE_SHORT_2_URL,
} from '@/data/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    { name: 'Uthukuli Butter & Ghee', path: '/products?category=butterghee' },
    { name: 'Forest Honey', path: '/products?category=honey' },
    { name: 'Maracheku Oils', path: '/products?category=oils' },
    { name: 'Traditional Rice', path: '/products?category=rice' },
    { name: 'Brown Sugar & Vellam', path: '/products?category=sweeteners' },
    { name: 'Pooja Items', path: '/products?category=pooja' },
    { name: 'Spices', path: '/products?category=spices' },
    { name: 'Health Mix', path: '/products?category=healthmix' },
    { name: 'Pickles', path: '/products?category=pickles' },
    { name: 'Thokku', path: '/products?category=thokku' },
    { name: 'Vadagam', path: '/products?category=vadagam' },
    { name: 'Nuts & Snacks', path: '/products?category=nuts' },
  ];

  return (
    <footer className="bg-[#E9E1D2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/images/kkt-traders-logo.png"
                alt="KK Traders logo"
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="text-[#6E6A63] text-sm leading-relaxed mb-6">
              Authentic homemade spices, pickles, and snacks made with love and 
              traditional recipes. Small batch, fresh ingredients, no preservatives.
            </p>
            <div className="flex space-x-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6E6A63] hover:text-[#2E5A3D] hover:shadow-md transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6E6A63] hover:text-[#2E5A3D] hover:shadow-md transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6E6A63] hover:text-[#2E5A3D] hover:shadow-md transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={YOUTUBE_SHORT_1_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6E6A63] hover:text-[#2E5A3D] hover:shadow-md transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6E6A63] hover:text-[#2E5A3D] hover:shadow-md transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href={PINTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
              >
                Pinterest
              </a>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
              >
                Google Business Profile
              </a>
              <a
                href={YOUTUBE_SHORT_2_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
              >
                YouTube Short 2
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.path}
                    className="text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#1A1A1A] mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2E5A3D] flex-shrink-0 mt-0.5" />
                <span className="text-[#6E6A63] text-sm">
                  100, Thiruvalluvar St, East Tambaram,<br />
                  Tambaram, Chennai, Tamil Nadu 600059
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2E5A3D] flex-shrink-0" />
                <a
                  href={generateGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
                >
                  +91 77087 55348
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#2E5A3D] flex-shrink-0" />
                <span className="text-[#6E6A63] text-sm">
                  Monday - Sunday: 9am - 10pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#D5CFC4]">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-[#6E6A63] text-sm text-center md:text-left">
              {currentYear} KK Traders. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-[#6E6A63] text-sm hover:text-[#2E5A3D] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
