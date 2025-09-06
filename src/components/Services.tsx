import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Scissors, 
  Flower, 
  Trash2, 
  TreePine, 
  Hammer, 
  Droplets,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Scissors,
      title: 'Lawn Care',
      description: 'Professional mowing, edging, fertilization, and weed control to keep your lawn looking pristine year-round.',
      features: ['Weekly/Bi-weekly mowing', 'Seasonal fertilization', 'Weed & pest control', 'Aeration & overseeding']
    },
    {
      icon: Flower,
      title: 'Garden Design',
      description: 'Custom garden designs featuring native Colorado plants that thrive in our climate and conserve water.',
      features: ['Native plant selection', 'Seasonal color planning', 'Perennial gardens', 'Vegetable gardens']
    },
    {
      icon: Trash2,
      title: 'Seasonal Clean-Up',
      description: 'Comprehensive spring and fall clean-up services to prepare your landscape for the changing seasons.',
      features: ['Leaf removal', 'Debris clearing', 'Pruning & trimming', 'Bed preparation']
    },
    {
      icon: TreePine,
      title: 'Tree & Shrub Care',
      description: 'Expert pruning, trimming, and health assessments to maintain the beauty and safety of your trees.',
      features: ['Professional pruning', 'Disease diagnosis', 'Fertilization', 'Removal services']
    },
    {
      icon: Hammer,
      title: 'Landscape Renovation',
      description: 'Complete landscape makeovers including hardscaping, plant installation, and drainage solutions.',
      features: ['Hardscape installation', 'Drainage solutions', 'Retaining walls', 'Pathway design']
    },
    {
      icon: Droplets,
      title: 'Irrigation Systems',
      description: 'Water-efficient irrigation system design, installation, and maintenance for optimal plant health.',
      features: ['Sprinkler installation', 'Drip irrigation', 'Smart controllers', 'System maintenance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Landscaping Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to complete landscape transformations, we offer comprehensive 
            services to keep your outdoor space beautiful and healthy throughout the seasons.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <ArrowRight className="w-3 h-3 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  onClick={scrollToContact}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to Transform Your Landscape?
          </h3>
          <p className="text-muted-foreground mb-6">
            Contact us today for a free consultation and estimate.
          </p>
          <Button variant="cta" size="lg" onClick={scrollToContact}>
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;