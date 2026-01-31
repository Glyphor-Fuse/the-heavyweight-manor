import { Star } from 'lucide-react';

const Manifesto = () => {
  return (
    <section className="relative w-full bg-manor-dark py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-24">
        
        {/* Left Column - Texture & Image */}
        <div className="relative flex flex-col justify-center">
          <div className="absolute -left-12 top-12 h-64 w-64 rounded-full bg-manor-crimson/20 blur-3xl filter" />
          <div className="relative z-10 border-l-4 border-manor-gold pl-8 md:pl-12">
            <h2 className="font-playfair text-5xl font-black leading-none text-manor-limestone md:text-7xl">
              NO <br />
              CUTE <br />
              PUPPIES.
            </h2>
            <div className="mt-8 h-px w-32 bg-manor-limestone/30" />
            <p className="mt-8 font-cinzel text-sm font-bold tracking-[0.2em] text-manor-gold">
              WE BREED LEGENDS.
            </p>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center font-lato text-lg leading-relaxed text-manor-limestone/80 md:text-xl">
          <p className="mb-6">
            The Heavyweight Manor is not a pet store. We do not deal in "fur babies." 
            We are custodians of a historic bloodline, preserving the structural dignity 
            of the English Bulldog as it was intended: a stoic guardian of the estate.
          </p>
          <p className="mb-8">
            Our dogs are raised in the red dust of Haslet, conditioned with the rigor of 
            prizefighters, and carry the pedigree of nobility. To own one is not merely 
            to have a pet, but to secure a legacy.
          </p>
          
          <a href="#" className="group inline-flex items-center gap-2 font-cinzel text-sm font-bold text-manor-crimson transition-colors hover:text-manor-gold">
            READ THE FULL MANIFESTO
            <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
