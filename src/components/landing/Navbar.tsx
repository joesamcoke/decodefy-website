import { Button } from "@/components/ui/button";
import logo from "@/assets/decodefy-logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <img src={logo} alt="Decodefy" style={{ width: 120 }} />
      <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">Book a Demo</Button>
    </div>
  </nav>
);

export default Navbar;
