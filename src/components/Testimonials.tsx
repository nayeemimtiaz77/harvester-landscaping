import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Littleton, CO',
      rating: 5,
      text: 'Harvester Landscaping completely transformed our backyard! Their team was professional, on-time, and the results exceeded our expectations. Our neighbors are constantly asking who did our landscaping.',
      service: 'Complete Landscape Renovation'
    },
    {
      name: 'Mike Thompson',
      location: 'Highlands Ranch, CO',
      rating: 5,
      text: 'We\'ve been using Harvester for our lawn care for 3 years now. They\'re reliable, affordable, and our lawn has never looked better. Highly recommend their seasonal clean-up services too!',
      service: 'Lawn Care & Maintenance'
    },
    {
      name: 'Jennifer Davis',
      location: 'Centennial, CO',
      rating: 5,
      text: 'The garden design they created for us is absolutely stunning. They selected plants that thrive in Colorado\'s climate and look beautiful year-round. True professionals who care about their work.',
      service: 'Garden Design & Installation'
    },
    {
      name: 'Robert Wilson',
      location: 'Littleton, CO',
      rating: 5,
      text: 'Fast, efficient, and reasonably priced. Harvester Landscaping helped us prepare our yard for sale and the curb appeal improvement was remarkable. Great communication throughout the project.',
      service: 'Landscape Renovation'
    },
    {
      name: 'Lisa Rodriguez',
      location: 'Ken Caryl, CO',
      rating: 5,
      text: 'Their tree and shrub care service saved our mature trees that were damaged in a storm. The team was knowledgeable and careful. Our landscape looks healthier than ever.',
      service: 'Tree & Shrub Care'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-accent fill-accent' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners throughout the Littleton area 
            have to say about our landscaping services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="shadow-large animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t pt-6">
                  <h4 className="text-xl font-semibold text-primary mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    {testimonials[currentTestimonial].service}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background shadow-medium"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background shadow-medium"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            <span className="font-semibold">5.0 Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">50+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;