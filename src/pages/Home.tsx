import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EquipmentCard from "@/components/EquipmentCard";
import { mockEquipment } from "@/data/mockData";
import { ArrowRight, Users, Tractor, Warehouse, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agriculture.jpg";

const Home = () => {
  const featuredEquipment = mockEquipment.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-field/60" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-harvest">KrishiRent</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Connecting farmers through shared agricultural resources. 
            Rent equipment, cold storage, and facilities at affordable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" className="bg-harvest text-foreground hover:bg-harvest/90 font-semibold">
                Browse Equipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/list">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                List Your Equipment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">1000+</h3>
                <p className="text-muted-foreground">Farmers Connected</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Tractor className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Equipment Listed</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Warehouse className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Storage Facilities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary">80%</h3>
                <p className="text-muted-foreground">Cost Savings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Indian Agriculture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              KrishiRent bridges the gap between resource-rich and resource-constrained farmers, 
              creating a sharing economy that benefits everyone in the agricultural community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Tractor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Equipment Owners</h3>
                  <p className="text-muted-foreground">
                    Maximize returns on your agricultural investments by renting out unused machinery and storage facilities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Small Farmers</h3>
                  <p className="text-muted-foreground">
                    Access modern equipment and storage at affordable prices without the burden of ownership costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Growth</h3>
                  <p className="text-muted-foreground">
                    Building stronger farming communities through resource sharing and mutual support.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-field/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Why Choose KrishiRent?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Verified equipment owners and renters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Transparent pricing and availability</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Local network of agricultural resources</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Support for sustainable farming practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Equipment
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the latest agricultural equipment available for rent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEquipment.map((equipment) => (
              <EquipmentCard key={equipment.id} {...equipment} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse">
              <Button size="lg" className="bg-gradient-to-r from-primary to-field hover:opacity-90">
                View All Equipment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;