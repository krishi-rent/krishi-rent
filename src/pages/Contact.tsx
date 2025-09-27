import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, User, Code, Palette } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const teamMembers = [
    {
      name: "Karamvir Suman",
      title: "Lead Developer & Co-founder",
      email: "karamvir@krishirent.com",
      icon: Code,
      description: "Full-stack developer with expertise in agricultural technology and farmer-focused solutions."
    },
    {
      name: "Deeksha Badgal",
      title: "Product Designer & UX Lead",
      email: "deeksha@krishirent.com", 
      icon: Palette,
      description: "Design specialist focused on creating intuitive interfaces for farmers and agricultural communities."
    },
    {
      name: "Akash Majumdar",
      title: "Agricultural Consultant & Business Lead",
      email: "akash@krishirent.com",
      icon: User,
      description: "Agricultural expert with 10+ years experience helping farmers adopt modern farming practices."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team to learn more about KrishiRent or to get support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border border-border">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-field/5">
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-field hover:opacity-90"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Other Ways to Reach Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">support@krishirent.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Rural Tech Hub, Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <div className="space-y-6">
              {teamMembers.map((member, index) => {
                const IconComponent = member.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {member.name}
                          </h3>
                          <p className="text-sm text-primary font-medium mb-2">
                            {member.title}
                          </p>
                          <p className="text-sm text-muted-foreground mb-3">
                            {member.description}
                          </p>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <a 
                              href={`mailto:${member.email}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Information */}
            <Card className="mt-8 border border-harvest/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-harvest mb-3">
                  Join Our Mission
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  KrishiRent is always looking for passionate individuals who want to make a 
                  difference in Indian agriculture. Whether you're a developer, designer, 
                  agricultural expert, or business professional, we'd love to hear from you 
                  if you're interested in joining our mission to empower farmers across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;