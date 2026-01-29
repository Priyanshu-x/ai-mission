import React from "react";

const Gallery = () => {
  const gallery = [
    "/AI Awarness Campaign/AI Hackathon/Hackathon Pics/DSC03923.JPG",
    "/AI Awarness Campaign/10th-12th June FDP Grahite School/pic1.jpeg",
    "/AI Awarness Campaign/AI Hackathon/Hackathon Pics/DSC03941.JPG",
    "/AI Awarness Campaign/10th-12th June FDP Grahite School/pic2.jpeg",
    "/AI Awarness Campaign/AI Hackathon/Hackathon Pics/DSC03955.JPG",
    "/AI Awarness Campaign/10th-12th June FDP Grahite School/pic3.jpeg",
    "/AI Awarness Campaign/AI Hackathon/Hackathon Pics/DSC03963.JPG",
    "/AI Awarness Campaign/10th-12th June FDP Grahite School/CollageGraphiteSchool.jpg",
  ];

  return (
    <section className="bg-black flex flex-col gap-8 py-24 px-4 overflow-hidden">
      <div className="flex gap-0 max-w-[900px] w-full mx-auto">
        <div className="flex-1 flex flex-col gap-0">
          {gallery.slice(0, 3).map((src, index) => (
            <img key={index} src={src} alt="AI Event" className="w-full h-auto rounded shadow-lg" />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-0">
          {gallery.slice(3, 6).map((src, index) => (
            <img key={index} src={src} alt="AI Event" className="w-full h-auto rounded shadow-lg" />
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-0">
          {gallery.slice(6).map((src, index) => (
            <img key={index} src={src} alt="AI Event" className="w-full h-auto rounded shadow-lg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
