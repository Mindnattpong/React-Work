import React from "react";
import CV from "../../asstes/Resume_Working.rar";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        โหลด Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        ติดต่อฉัน
      </a>
    </div>
  );
};

export default CTA;
