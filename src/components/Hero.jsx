import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen min-h-[700px] flex items-center"
      style={{ backgroundImage: "url('/AI Awarness Campaign/AI Hackathon/Hackathon Pics/DSC04120.JPG')" }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left Side: Strategic Vision & Mission */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mb-12">
            {/* <h2 className="text-zinc-500 text-sm uppercase tracking-[0.4em] font-bold mb-4">Strategic Framework</h2> */}
            <h1 className="text-6xl md:text-7xl font-normal text-white font-['Bebas_Neue'] leading-none mb-6">
              VISION
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-white pl-8 py-2">
              To position SGSU as a pioneering, <span className="text-white font-medium">100% AI-Ready University</span> that leads transformative education through Artificial Intelligence, Machine Learning, and Deep Learning — fostering innovation, interdisciplinary collaboration, and societal impact.
            </p>
          </div>

          <div className="mb-0">
            {/* <h2 className="text-zinc-500 text-sm uppercase tracking-[0.4em] font-bold mb-4">Strategic Framework</h2> */}
            <h1 className="text-5xl md:text-6xl font-normal text-white font-['Bebas_Neue'] leading-none mb-6">
              MISSION
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed border-l-2 border-white pl-8 py-2">
              To build a future-ready academic ecosystem where students, faculty, and the institution embrace AI-driven learning, research, and innovation. This mission is achieved through:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;