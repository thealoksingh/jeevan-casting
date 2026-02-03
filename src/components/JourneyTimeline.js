import React from "react";

const journey = [
  {
    year: "2017-2018",
    title: "Entry Into Bollywood",
    desc: "Debuted with a role in *Super 30*, marking the start of the film journey.",
  },
  {
    year: "2018-2019",
    title: "Building Experience",
    desc: "Refined acting through auditions, workshops, and early projects.",
  },
  {
    year: "2019-2020",
    title: "Industry Connections",
    desc: "Built strong relationships with casting professionals and creators.",
  },
  {
    year: "2020-2022",
    title: "Versatile Performer",
    desc: "Worked across ads and digital films, expanding on-screen presence.",
  },
  {
    year: "2022-2023",
    title: "Casting Initiative",
    desc: "Supported emerging talent and assisted production casting.",
  },
  {
    year: "2023-Present",
    title: "Jeevan Casting Company",
    desc: "Founded a company focused on discovering talent for Bollywood.",
  },
];


function JourneyTimeline() {
  return (
    <div className="w-full py-16 text-white">
      <div className="hidden md:flex justify-center items-start gap-0">
        {journey.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={`w-40 h-40 flex items-center justify-center
                ${
                  index % 2 === 0
                    ? "border-t-4 border-r-4"
                    : "border-b-4 border-r-4"
                }
                border-dashed border-[var(--brand-secondary)]`}
            >
              <div className="text-center px-3">
                <h4 className="font-bold text-[var(--brand-secondary)]">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 text-justify">
                  {item.desc}
                </p>
              </div>
            </div>

            <span
              className={`absolute text-white font-semibold ${
                index % 2 === 0 ? "-top-8" : "-bottom-8"
              }`}
            >
              {item.year}
            </span>

            <div
              className={`absolute bg-[var(--brand-secondary)] rounded-full h-4 w-4 
                ${
                  index % 2 === 0
                    ? "top-0  -translate-y-1/2 "
                    : "bottom-0  translate-y-1/2 "
                }`}
            />
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center">
        {journey.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div
              className={`w-40 h-40 flex items-center justify-center
                ${
                  index % 2 === 0
                    ? "border-t-4 border-r-4"
                    : "border-t-4 border-l-4"
                }
                border-dashed border-[var(--brand-secondary)]`}
            >
              <div className="text-center px-3">
                <h4 className="font-bold text-[var(--brand-secondary)]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>

            <span
              className={`absolute top-1/2 -translate-y-1/2 font-semibold text-white
                ${index % 2 === 0 ? "-right-24" : "-left-24"}`}
            >
              {item.year}
            </span>

            <div
              className={`absolute bg-[var(--brand-secondary)] rounded-full h-4 w-4
    ${
      index % 2 === 0
        ? "right-0 top-1/2 -translate-y-1/2 translate-x-[6px]"
        : "left-0 top-1/2 -translate-y-1/2 -translate-x-[6px]"
    }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JourneyTimeline;
