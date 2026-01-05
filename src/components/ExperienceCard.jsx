import React from "react";

const ExperienceCard = () => {
  const pStyle = {
    fontSize: "12px",
  };
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          style={{
            height: "50px",
            border: "1px solid black",
            borderRadius: "50%",
          }}
          src="https://miro.medium.com/v2/resize:fit:2400/1*JDCFDrpRM0gj6X7BaP0TQA.jpeg"
          alt=""
        />
        <div>
          <p style={pStyle}>The KSquare Group</p>
          <p style={pStyle}>Full Stack Developer</p>
        </div>
      </div>
      <div>
        <p style={pStyle}>8 months</p>
        <p style={pStyle}>May 2025 - Present</p>
      </div>
    </div>
    
  );
};

export default ExperienceCard;
