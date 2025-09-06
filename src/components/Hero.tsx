import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Star, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-landscaping.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful Colorado landscaping by Harvester Landscaping" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Outdoors with
            <span className="block text-accent animate-glow">
              Harvester Landscaping
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Creating beautiful, sustainable landscapes in Littleton, Colorado. 
            Professional design, expert installation, and reliable maintenance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-xl px-10 py-5"
            >
              Request a Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToAbout}
              className="text-xl px-10 py-5 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span>Serving Colorado with Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <ArrowDown className="w-6 h-6 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;