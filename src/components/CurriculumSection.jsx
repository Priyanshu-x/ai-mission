import React from 'react';

const CurriculumSection = () => {
    return (
        <section className="relative py-24 px-8">
            {/* Background Texture/Gradient if needed, matching site theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-80 -z-10"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">

                {/* Left Side: Institutional Vision */}
                <div className="flex-1 flex flex-col">
                    <h2 className="text-5xl md:text-7xl font-normal text-white font-['Bebas_Neue'] leading-none mb-8">
                        CURRICULUM EMBEDDED IN AI COURSES
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-light text-zinc-400 font-['Bebas_Neue'] tracking-wide mb-6">
                        How SGSU Is Taking the AI Mission Forward
                    </h3>
                    <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed mb-6">
                        Scope Global Skills University (SGSU), Bhopal—India’s first university dedicated entirely to skill-based education—has positioned itself at the forefront of the nation’s rapidly evolving AI landscape. At a time when Artificial Intelligence is transforming industries, economies, and the very future of work, SGSU has embraced AI readiness not just as an academic upgrade but as a full-fledged institutional mission. Guided by India’s “AI for All” vision and the AICTE’s 2025 Year of AI initiative, SGSU has launched a comprehensive, university-wide transformation to prepare students, teachers, and administrators for an AI-powered future.
                    </p>
                    <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed">
                        Rather than viewing AI as an isolated subject or a technical specialization, SGSU treats it as a foundational capability—much like digital literacy or communication skills. This philosophy drives its integrated model of awareness, training, innovation, curriculum reform, and administrative modernization.
                    </p>
                </div>

                {/* Right Side: Programs & Alignment */}
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-light text-zinc-400 font-['Bebas_Neue'] tracking-wide mb-6 pl-8">
                        Empowering Atmanirbhar Bharat through AI Education at SGSU
                    </h3>
                    <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed mb-6 border-l-2 border-white pl-8">
                        “Skill development of the new generation is a national need and the foundation of Atmanirbhar Bharat,” as rightly said by our Hon’ble Prime Minister. In line with this vision, Scope Global Skills University (SGSU) is actively integrating Artificial Intelligence across its academic programs such as BCA (AI–ML), B.Tech (IBM Collaboration), and B.Voc (IT–AI–ML).
                    </p>
                    <p className="text-base md:text-lg text-zinc-300 font-light leading-relaxed pl-8">
                        Through industry-aligned curricula, hands-on laboratories, and real-world practical projects, SGSU is equipping students with future-ready AI skills—empowering them to contribute meaningfully to a self-reliant, digitally skilled, and innovation-driven India.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CurriculumSection;
