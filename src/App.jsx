import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurriculumSection from './components/CurriculumSection';
import Footer from './components/Footer';
import EventSection from './components/EventSection';
import { events } from './data/eventsData';

const App = () => {
  // Specified Hierarchy: AI Hackathon (id:4), 16 April Graphite School (id:7), 17 April Graphite School (id:8), FDP Graphite School (id:1)
  const priorityIds = [4, 7, 8, 1];

  const priorityEvents = priorityIds.map(id => events.find(e => e.id === id)).filter(Boolean);
  const remainingEvents = events.filter(e => !priorityIds.includes(e.id));

  const orderedEvents = [...priorityEvents, ...remainingEvents];

  return (
    <div>
      <Navbar />
      <Hero />
      <CurriculumSection />
      <div className="flex flex-col">
        {orderedEvents.map((event, index) => (
          <EventSection key={event.id} event={event} index={index} />
        ))}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
