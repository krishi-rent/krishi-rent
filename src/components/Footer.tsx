import { Tractor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Tractor className="h-6 w-6" />
              <span className="text-lg font-bold">KrishiRent</span>
            </div>
            <p className="text-sm opacity-90">
              Empowering farmers through shared agricultural resources and technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/browse" className="hover:text-harvest transition-colors">Browse Equipment</a></li>
              <li><a href="/list" className="hover:text-harvest transition-colors">List Equipment</a></li>
              <li><a href="/about" className="hover:text-harvest transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-harvest transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@krishirent.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Rural Tech Hub, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-4 text-center text-sm opacity-75">
          <p>&copy; 2024 KrishiRent. Built for farmers, by farmers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;