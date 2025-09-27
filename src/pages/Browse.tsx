import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EquipmentCard from "@/components/EquipmentCard";
import { getAllEquipment } from "@/data/mockData";
import { Search, Filter } from "lucide-react";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const allEquipment = getAllEquipment();

  const filteredEquipment = useMemo(() => {
    return allEquipment.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = typeFilter === "all" || item.type === typeFilter;
      
      const matchesLocation = locationFilter === "all" || 
        item.location.toLowerCase().includes(locationFilter.toLowerCase());

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [allEquipment, searchTerm, typeFilter, locationFilter]);

  const equipmentTypes = ["all", ...new Set(allEquipment.map(item => item.type))];
  const locations = ["all", ...new Set(allEquipment.map(item => item.location.split(",")[1]?.trim() || item.location))];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Browse Equipment & Storage
        </h1>
        <p className="text-xl text-muted-foreground">
          Find the perfect agricultural equipment and storage solutions for your farming needs
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search equipment, location, or owner..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Equipment Type" />
            </SelectTrigger>
            <SelectContent>
              {equipmentTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location === "all" ? "All Locations" : location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Showing {filteredEquipment.length} of {allEquipment.length} results
        </p>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Equipment Grid */}
      {filteredEquipment.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard key={equipment.id} {...equipment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-muted/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">No equipment found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search criteria or browse all available equipment
          </p>
          <Button 
            onClick={() => {
              setSearchTerm("");
              setTypeFilter("all");
              setLocationFilter("all");
            }}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Browse;