import React from "react";

const SkillsSection = ({ data }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white">My Skills</h2>
      {data.map((section, index) => (
        <div key={index} className="mt-6">
          <ul className="list-disc list-inside">
            <li className="text-white text-xl">{section.category}:</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 ml-7">
            {section.items.map((item, i) => (
              <div
                key={i}
                className=" py-4 flex justify-center items-center rounded hover:scale-125 duration-300"
              >
                <a
                  className="text-white space-y-4 flex flex-col items-center"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} width="40" alt={item.name} />
                  <span>{item.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
