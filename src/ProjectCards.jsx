import React from 'react';

const ProjectCards = ({ title, description, hoverColor, link }) => {
  return (
    <div
      className={`h-[250px] w-[220px] bg-[rgba(19,19,19,0.3)] rounded-2xl m-6 flex flex-col border-[1px] border-[rgba(233,233,233,0.3)] transition-all duration-200`}
      style={{
        '--hover-bg-color': hoverColor,
        '--hover-border-color': hoverColor,
      }}
    >
      <a
        href={link}
        className="custom-card flex flex-col h-full w-full rounded-2xl"
        style={{
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <p className="h-[13%] font-['Josefin Sans'] font-semibold text-[25px] flex justify-center text-white">
          {title}
        </p>
        <p className="h-[87%] font-['Josefin Sans'] text-[15px] text-[#aaaaaa] p-2">
          {description}
        </p>
      </a>

      {/* Add the hover styles */}
      <style jsx>{`
        div:hover {
          background-color: var(--hover-bg-color);
          border-color: var(--hover-border-color);
        }
      `}</style>
    </div>
  );
};

export default ProjectCards;
