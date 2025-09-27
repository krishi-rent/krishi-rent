export const mockEquipment = [
  {
    id: "1",
    title: "John Deere Tractor Model 5075E",
    type: "Tractor",
    description: "Powerful 75HP tractor perfect for medium-scale farming operations. Excellent fuel efficiency and reliability.",
    price: "₹2,500/day",
    location: "Pune, Maharashtra",
    availability: "Next week",
    condition: "Excellent",
    ownerName: "Rajesh Patil",
    contact: "+91 98765 43210"
  },
  {
    id: "2", 
    title: "Combine Harvester - Mahindra Arjun",
    type: "Harvester",
    description: "Modern combine harvester suitable for wheat, rice, and corn harvesting. High capacity grain tank.",
    price: "₹5,000/day",
    location: "Ludhiana, Punjab",
    availability: "Available now",
    condition: "Very Good",
    ownerName: "Sukhwinder Singh",
    contact: "+91 98765 43211"
  },
  {
    id: "3",
    title: "Cold Storage Facility - 500 MT",
    type: "Cold Storage",
    description: "Temperature-controlled storage facility for fruits and vegetables. Perfect for post-harvest storage.",
    price: "₹100/MT/month",
    location: "Nashik, Maharashtra",
    availability: "2 weeks",
    condition: "Excellent",
    ownerName: "Anita Sharma",
    contact: "+91 98765 43212"
  },
  {
    id: "4",
    title: "Rotavator - Land Force RMN 235",
    type: "Cultivator",
    description: "Heavy-duty rotavator for soil preparation. Ideal for breaking hard soil and mixing crop residues.",
    price: "₹1,200/day",
    location: "Jaipur, Rajasthan",
    availability: "Tomorrow",
    condition: "Good",
    ownerName: "Mohan Lal",
    contact: "+91 98765 43213"
  },
  {
    id: "5",
    title: "Seed Drill - Lemken Solitair 9",
    type: "Seeder",
    description: "Precision seed drill for accurate seeding. Reduces seed wastage and ensures uniform germination.",
    price: "₹1,800/day",
    location: "Indore, Madhya Pradesh",
    availability: "Next month",
    condition: "Very Good",
    ownerName: "Ramesh Kumar",
    contact: "+91 98765 43214"
  },
  {
    id: "6",
    title: "Warehouse Space - 1000 sqft",
    type: "Storage",
    description: "Dry storage warehouse for grains and agricultural produce. Well-ventilated and pest-controlled.",
    price: "₹50/sqft/month",
    location: "Bhopal, Madhya Pradesh",
    availability: "Available now",
    condition: "Excellent",
    ownerName: "Lakshmi Devi",
    contact: "+91 98765 43215"
  }
];

export const getStoredEquipment = () => {
  const stored = localStorage.getItem('krishirent-equipment');
  return stored ? JSON.parse(stored) : [];
};

export const addEquipment = (equipment: any) => {
  const current = getStoredEquipment();
  const newEquipment = {
    ...equipment,
    id: Date.now().toString(),
  };
  const updated = [...current, newEquipment];
  localStorage.setItem('krishirent-equipment', JSON.stringify(updated));
  return newEquipment;
};

export const getAllEquipment = () => {
  return [...mockEquipment, ...getStoredEquipment()];
};