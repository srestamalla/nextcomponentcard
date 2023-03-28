import React from "react";

const Title = ({ title, secondaryTitle, paragraph }) => {
  return (
    <>
      <div>
        <h1 className="fw-bold">{title}</h1>
        <h1 className="fw-bold stroke">{secondaryTitle}</h1>
        <p className="text-muted">{paragraph}</p>
      </div>
    </>
  );
};

export default Title;
