import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="text-lg font-bold tracking-widest text-foreground">DECODEFY</span>
      <Button size="sm">Book a Demo</Button>
    </div>
  </nav>
);

export default Navbar;
