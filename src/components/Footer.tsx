import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Leaf,
  Star
} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const callNow = () => {
    window.open('tel:+17206928981', '_self');
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Lawn Care',
    'Garden Design',
    'Seasonal Clean-Up',
    'Tree & Shrub Care',
    'Landscape Renovation',
    'Irrigation Systems'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Harvester Landscaping</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Creating beautiful, sustainable landscapes in Littleton, Colorado for over 15 years. 
              Professional design, expert installation, and reliable maintenance.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">5-Star Customer Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">
                    8079 S Marshall St<br />
                    Littleton, CO 80128
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <button 
                  onClick={callNow}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (720) 692-8981
                </button>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:info@harvesterlandscaping.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@harvesterlandscaping.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Mon-Fri: 7:00 AM - 6:00 PM<br />
                    Sat: 8:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="sm" 
                onClick={callNow}
                className="mt-4"
              >
                <Phone className="w-4 h-4" />
                Call for Free Quote
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/80 text-sm">
              © {new Date().getFullYear()} Harvester Landscaping. All rights reserved.
            </p>
            <p className="text-accent font-medium text-sm mt-1">
              Proudly Serving Littleton, Colorado with Beautiful Landscaping
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">Follow Us:</p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;