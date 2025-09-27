import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Users, Zap, Shield, Target, Heart } from "lucide-react";

const About = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: "High Equipment Costs",
      description: "Small farmers struggle with the high upfront costs of purchasing modern agricultural machinery, limiting their productivity and crop quality."
    },
    {
      icon: Users,
      title: "Limited Access to Technology",
      description: "Many farmers lack access to advanced farming equipment and cold storage facilities, leading to post-harvest losses and reduced income."
    },
    {
      icon: Zap,
      title: "Seasonal Equipment Usage",
      description: "Agricultural equipment often sits idle for months, representing a massive underutilization of valuable resources that could benefit other farmers."
    },
    {
      icon: Shield,
      title: "Storage and Preservation",
      description: "Inadequate storage facilities result in significant crop losses, especially for perishable produce, reducing farmers' overall profitability."
    }
  ];

  const solutions = [
    {
      icon: Target,
      title: "Shared Economy Model",
      description: "KrishiRent creates a collaborative platform where farmers can share resources, reducing individual costs while maximizing equipment utilization."
    },
    {
      icon: Heart,
      title: "Community Building",
      description: "We foster stronger farming communities by connecting farmers across regions, enabling knowledge sharing and mutual support."
    },
    {
      icon: Zap,
      title: "Affordable Access",
      description: "Small farmers can access modern equipment and storage at a fraction of the purchase cost, improving their productivity and income."
    },
    {
      icon: TrendingDown,
      title: "Reduced Waste",
      description: "By maximizing equipment utilization and providing proper storage, we help reduce agricultural waste and improve food security."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About KrishiRent
          </h1>
          <p className="text-xl text-muted-foreground">
            Transforming Indian agriculture through resource sharing and community collaboration
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-field/5 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-lg text-foreground leading-relaxed">
            KrishiRent is dedicated to revolutionizing Indian agriculture by creating a comprehensive 
            sharing platform that connects farmers across the country. We believe that by facilitating 
            the sharing of agricultural equipment, cold storage, and farming resources, we can empower 
            both small-scale and large-scale farmers to achieve greater productivity, sustainability, 
            and profitability.
          </p>
        </div>

        {/* Challenges Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Challenges Faced by Indian Farmers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="border border-destructive/20 hover:border-destructive/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-destructive/10 p-3 rounded-full flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            How KrishiRent Solves These Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card key={index} className="border border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-field/5 to-harvest/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Reduction in equipment costs for small farmers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">Increase in equipment utilization rates</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <p className="text-muted-foreground">Reduction in post-harvest losses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section>
          <Card className="border border-harvest/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-harvest mb-4">Our Vision for the Future</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                We envision a future where every farmer in India has access to the tools and resources 
                they need to succeed. Through KrishiRent, we aim to create a nationwide network of 
                connected farmers who support each other's growth and prosperity.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                By leveraging technology and fostering community collaboration, we're not just solving 
                today's agricultural challenges – we're building the foundation for a more sustainable, 
                productive, and equitable agricultural future for all Indian farmers.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;