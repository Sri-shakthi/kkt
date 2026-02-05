import { useState, useEffect } from 'react';
import { MessageCircle, MapPin, Clock, Phone, Instagram, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { generateGeneralWhatsAppLink, INSTAGRAM_HANDLE, BRAND_COLOR } from '@/data/products';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '+91 77087 55348',
      link: generateGeneralWhatsAppLink(),
      linkText: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@homemade.spices',
      link: 'mailto:hello@homemade.spices',
      linkText: 'Send Email',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: `@${INSTAGRAM_HANDLE}`,
      link: `https://instagram.com/${INSTAGRAM_HANDLE}`,
      linkText: 'Follow Us',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Sunday: 9am - 10pm',
      link: null,
      linkText: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F2EA] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#6E6A63] max-w-2xl mx-auto text-lg">
            Have a question or want to place an order? We&apos;d love to hear from you. 
            WhatsApp is the fastest way to reach us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScbUcgM8uPmInnOo-WTPa_EojAq2fpxtonuR14kQQg0mwGHsQ/viewform?embedded=true"
              width="640"
              height="686"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="KKT Traders Contact Form"
            >
              Loading…
            </iframe>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${BRAND_COLOR}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{item.title}</h3>
                  <p className="text-[#6E6A63] text-sm mb-3">{item.content}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium hover:underline"
                      style={{ color: BRAND_COLOR }}
                    >
                      {item.linkText}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${BRAND_COLOR}15` }}
                >
                  <MapPin className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">Our Location</h3>
                  <p className="text-[#6E6A63]">
                    100, Thiruvalluvar St, East Tambaram,<br />
                    Tambaram, Chennai, Tamil Nadu 600059
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4167.153638655206!2d80.12726728145252!3d12.929029183297041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f109bd8884d%3A0x2b5f65598c045776!2sKKT%20-%20Kabali%20Karpagambal%20Traders%20-%20Organic%20Shop!5e1!3m2!1sen!2sin!4v1770326170082!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KKT Traders location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6E6A63] max-w-2xl mx-auto">
              Quick answers to common questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'How do I place an order?',
                a: 'Simply click the "Order on WhatsApp" button on any product, and we\'ll guide you through the process.',
              },
              {
                q: 'What are your delivery charges?',
                a: 'Delivery charges vary by location. We\'ll inform you of the exact amount when you place your order.',
              },
              {
                q: 'How long do products stay fresh?',
                a: 'Each product has a best-before date on the label. Generally, pickles last 6-12 months and spices 6-8 months.',
              },
              {
                q: 'Do you offer bulk orders?',
                a: 'Yes! We offer special pricing for bulk orders. Contact us on WhatsApp for more details.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2E5A3D] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-2">{faq.q}</h3>
                    <p className="text-[#6E6A63] text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
