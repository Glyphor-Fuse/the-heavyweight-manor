import Hero from "@/components/Hero";
import PedigreeReel from "@/components/PedigreeReel";
import Manifesto from "@/components/Manifesto";
import Inquiry from "@/components/Inquiry";

const Index = () => {
  return (
    <div className="min-h-screen bg-manor-dark font-sans selection:bg-manor-gold selection:text-manor-dark">
      <Hero />
      <Manifesto />
      <PedigreeReel />
      <Inquiry />
      
      {/* Simple Footer */}
      <footer className="bg-manor-dark py-8 text-center text-manor-limestone/40 font-cinzel text-xs tracking-widest border-t border-manor-limestone/10">
        <p>&copy; 2024 THE HEAVYWEIGHT MANOR. HASLET, TEXAS. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Index;
