import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { addEquipment } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Tractor, Plus, CheckCircle } from "lucide-react";

const ListEquipment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    price: "",
    location: "",
    availability: "",
    condition: "",
    ownerName: "",
    contact: ""
  });

  const equipmentTypes = [
    "Tractor",
    "Harvester", 
    "Cultivator",
    "Seeder",
    "Cold Storage",
    "Storage",
    "Irrigation Equipment",
    "Other"
  ];

  const conditions = ["Excellent", "Very Good", "Good", "Fair"];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.type || !formData.ownerName || !formData.contact) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addEquipment(formData);
      
      toast({
        title: "Equipment Listed Successfully!",
        description: "Your equipment is now available for rent.",
      });
      
      // Reset form
      setFormData({
        title: "",
        type: "",
        description: "",
        price: "",
        location: "",
        availability: "",
        condition: "",
        ownerName: "",
        contact: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to list equipment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Tractor className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            List Your Equipment
          </h1>
          <p className="text-xl text-muted-foreground">
            Share your agricultural resources with fellow farmers and earn extra income
          </p>
        </div>

        <Card className="border border-border shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-field/5">
            <CardTitle className="flex items-center space-x-2">
              <Plus className="h-5 w-5 text-primary" />
              <span>Equipment Details</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Equipment Name *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., John Deere Tractor 5075E"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Equipment Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {equipmentTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your equipment's features, specifications, and ideal use cases..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Rental Price</Label>
                  <Input
                    id="price"
                    placeholder="e.g., ₹2,500/day"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Pune, Maharashtra"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    placeholder="e.g., Available now, Next week"
                    value={formData.availability}
                    onChange={(e) => handleInputChange("availability", e.target.value)}
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Your Name *</Label>
                    <Input
                      id="ownerName"
                      placeholder="Full name"
                      value={formData.ownerName}
                      onChange={(e) => handleInputChange("ownerName", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Number *</Label>
                    <Input
                      id="contact"
                      placeholder="+91 98765 43210"
                      value={formData.contact}
                      onChange={(e) => handleInputChange("contact", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-field hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                    Listing Equipment...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    List Equipment
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            By listing your equipment, you agree to our terms of service and privacy policy. 
            All listings are subject to verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListEquipment;