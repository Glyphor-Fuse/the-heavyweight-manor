const Inquiry = () => {
  return (
    <section className="bg-manor-paper py-24 text-manor-dark relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-manor-dark to-transparent opacity-20" />
      
      <div className="container mx-auto max-w-4xl px-6">
        <div className="border-4 border-double border-manor-dark p-8 md:p-16 bg-white shadow-2xl relative">
          
          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-manor-crimson" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-manor-crimson" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-manor-crimson" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-manor-crimson" />

          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-manor-crimson">
              Apply for an Audience
            </h2>
            <p className="font-lato text-manor-dark/70">
              Ownership is exclusive. Please complete the ledger below.
            </p>
          </div>

          <form className="space-y-8 font-lato">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-cinzel font-bold tracking-widest uppercase">Name</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-manor-dark/20 bg-transparent py-2 outline-none transition-colors focus:border-manor-crimson" 
                  placeholder="Sir John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-cinzel font-bold tracking-widest uppercase">Estate Location</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-manor-dark/20 bg-transparent py-2 outline-none transition-colors focus:border-manor-crimson" 
                  placeholder="Haslet, TX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-cinzel font-bold tracking-widest uppercase">Purpose of Inquiry</label>
              <select className="w-full border-b-2 border-manor-dark/20 bg-transparent py-2 outline-none transition-colors focus:border-manor-crimson text-manor-dark/80">
                <option>Acquisition of a Champion</option>
                <option>Stud Services</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-cinzel font-bold tracking-widest uppercase">Message to the Manor</label>
              <textarea 
                className="w-full border-b-2 border-manor-dark/20 bg-transparent py-2 outline-none transition-colors focus:border-manor-crimson min-h-[100px]" 
                placeholder="State your intentions..."
              />
            </div>

            <div className="pt-8 text-center">
              <button className="bg-manor-dark text-manor-gold font-cinzel font-bold tracking-widest px-12 py-4 hover:bg-manor-crimson transition-colors">
                SUBMIT LEDGER
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
