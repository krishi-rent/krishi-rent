import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Wrench } from "lucide-react";

interface EquipmentCardProps {
  id: string;
  title: string;
  type: string;
  description: string;
  price: string;
  location: string;
  availability: string;
  condition: string;
  image?: string;
  ownerName: string;
  contact: string;
}

const EquipmentCard = ({ 
  title, 
  type, 
  description, 
  price, 
  location, 
  availability, 
  condition,
  ownerName,
  contact 
}: EquipmentCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border border-border">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          <Badge variant="secondary" className="ml-2">{type}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Available: {availability}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Wrench className="h-4 w-4 text-primary" />
            <span>Condition: {condition}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <div>
            <p className="text-lg font-bold text-primary">{price}</p>
            <p className="text-xs text-muted-foreground">Owner: {ownerName}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-primary to-field hover:opacity-90">
          Contact: {contact}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EquipmentCard;