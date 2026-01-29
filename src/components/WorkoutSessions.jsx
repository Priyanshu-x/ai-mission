import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen bg-black text-white">
      <div className="md:w-1/2 flex justify-center items-center bg-zinc-900 border-r border-zinc-800">
        <div className="w-3/4 h-3/4 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('/AI Awarness Campaign/10th-12th June FDP Grahite School/WhatsApp Image 2025-06-10 at 6.14.29 PM.jpeg')" }}></div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-12 bg-black">
        <h2 className="text-4xl font-bold mb-12 text-white border-l-4 border-white pl-6 uppercase tracking-wider">
          Our Training Programs
        </h2>

        <div className="mb-6 p-6 bg-zinc-900 border border-zinc-800 hover:border-white transition-all duration-300 group">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:tracking-wide transition-all">FDP Programs</h3>
          <p className="text-gray-400">
            Faculty Development Programs for educational institutions
            <br />• AI integration in education
            <br />• Hands-on training for teachers
          </p>
        </div>

        <div className="mb-6 p-6 bg-zinc-900 border border-zinc-800 hover:border-white transition-all duration-300 group">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:tracking-wide transition-all">Institutional Training</h3>
          <p className="text-gray-400">
            AI awareness for government departments & organizations
            <br />• Central Bank employee training
            <br />• PWD officers workshops
          </p>
        </div>

        <div className="mb-6 p-6 bg-zinc-900 border border-zinc-800 hover:border-white transition-all duration-300 group">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:tracking-wide transition-all">Student Programs</h3>
          <p className="text-gray-400">
            Hackathons, internships & hands-on learning
            <br />• AI Hackathon competitions
            <br />• Month-long polytechnic internships
          </p>
        </div>

        <div className="mb-6 p-6 bg-zinc-900 border border-zinc-800 hover:border-white transition-all duration-300 group">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:tracking-wide transition-all">Vocational Training</h3>
          <p className="text-gray-400">
            Skill-based AI training for trainers & vocational educators
            <br />• Train-the-trainer programs
            <br />• Practical AI skill development
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;