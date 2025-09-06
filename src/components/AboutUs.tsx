import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Clock, MapPin, Leaf } from 'lucide-react';
import landscapingWorkImage from '@/assets/landscaping-work.jpg';

const AboutUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified landscaping professionals with years of Colorado experience'
    },
    {
      icon: Clock,
      title: '15+ Years',
      description: 'Serving Littleton and surrounding areas with reliable service'
    },
    {
      icon: MapPin,
      title: 'Local Knowledge',
      description: 'Deep understanding of Colorado climate and native plants'
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-friendly practices and water-wise landscaping solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Bringing Beauty and Function to Colorado Yards
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Harvester Landscaping, we believe every outdoor space has the potential to become 
              something extraordinary. For over 15 years, we've been transforming yards throughout 
              Littleton, Colorado, creating stunning landscapes that thrive in our unique climate.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to design, install, and maintain beautiful outdoor spaces that 
              enhance your property value and bring you joy year-round. We combine artistic vision 
              with horticultural expertise to create landscapes that are both beautiful and sustainable.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden shadow-large">
              <img 
                src={landscapingWorkImage} 
                alt="Harvester Landscaping team working on a Colorado front yard"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;