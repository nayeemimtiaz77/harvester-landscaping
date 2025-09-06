import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Lawn Care',
    'Garden Design',
    'Seasonal Clean-Up',
    'Tree & Shrub Care',
    'Landscape Renovation',
    'Irrigation Systems',
    'General Consultation'
  ];

  const operatingHours = [
    { day: 'Monday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '7:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const callNow = () => {
    window.open('tel:+17206928981', '_self');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your outdoor space? Contact us for a free consultation and estimate. 
            We're here to bring your landscaping vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-large animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Request Your Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, property size, timeline, and any specific requirements..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-6 animate-scale-in">
            {/* Quick Contact */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <button 
                      onClick={callNow}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (720) 692-8981
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <a 
                      href="mailto:info@harvesterlandscaping.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@harvesterlandscaping.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Service Area</p>
                    <p className="text-muted-foreground">
                      8079 S Marshall St<br />
                      Littleton, CO 80128
                    </p>
                  </div>
                </div>

                <Button variant="cta" size="lg" onClick={callNow} className="w-full mt-4">
                  <Phone className="w-4 h-4" />
                  Call Now for Free Quote
                </Button>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {operatingHours.map((day) => (
                    <div key={day.day} className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{day.day}</span>
                      <span className={`text-sm ${
                        day.hours === 'Closed' ? 'text-destructive' : 'text-muted-foreground'
                      }`}>
                        {day.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">5-Star Customer Rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">15+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="shadow-large overflow-hidden">
            <div className="h-64 md:h-96 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Serving Littleton & Surrounding Areas
                </h3>
                <p>8079 S Marshall St, Littleton, CO 80128</p>
                <p className="text-sm mt-2">
                  We proudly serve Littleton, Highlands Ranch, Centennial, Ken Caryl, and surrounding areas
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;