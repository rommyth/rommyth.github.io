import React from 'react';

const SkillsTag = () => {
  const data = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
    },
    {
      id: 4,
      name: 'REACTJS',
    },
    {
      id: 5,
      name: 'FIGMA',
    },
    {
      id: 6,
      name: 'TAILWIND',
    },
    {
      id: 6,
      name: 'BOOTSTRAP',
    },
    {
      id: 7,
      name: 'REACT REDUX',
    },
  ];
  return (
    <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
      {data.map((item) => (
        <div key={item.id} className="bg-gray-200 px-4 py-1">
          <span className="text-tiny font-semibold tracking-widest">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillsTag;
