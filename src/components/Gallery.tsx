import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import beforeAfterImage from '@/assets/before-after-1.jpg';
import landscapingWorkImage from '@/assets/landscaping-work.jpg';
import seasonalCleanupImage from '@/assets/seasonal-cleanup.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: beforeAfterImage,
      alt: 'Before and after landscaping transformation',
      title: 'Complete Yard Transformation',
      description: 'From overgrown to pristine - a complete landscape makeover'
    },
    {
      src: landscapingWorkImage,
      alt: 'Professional landscaping team at work',
      title: 'Professional Installation',
      description: 'Our expert team installing beautiful stone edging and plantings'
    },
    {
      src: seasonalCleanupImage,
      alt: 'Seasonal cleanup and maintenance',
      title: 'Seasonal Clean-Up',
      description: 'Professional fall cleanup revealing beautiful maintained landscapes'
    },
    {
      src: beforeAfterImage,
      alt: 'Garden design and installation',
      title: 'Custom Garden Design',
      description: 'Native Colorado plants arranged in stunning garden beds'
    },
    {
      src: landscapingWorkImage,
      alt: 'Tree and shrub care services',
      title: 'Tree & Shrub Care',
      description: 'Expert pruning and maintenance for healthy, beautiful plants'
    },
    {
      src: seasonalCleanupImage,
      alt: 'Lawn care and maintenance',
      title: 'Premium Lawn Care',
      description: 'Lush, healthy lawns maintained to perfection'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of beautiful landscape transformations throughout Littleton, Colorado. 
            See how we've helped homeowners create their dream outdoor spaces.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-large transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage('prev')}
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={() => navigateImage('next')}
              >
                <ArrowRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="text-center text-white mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;