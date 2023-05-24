import React from "react";
import style from "./heading.module.scss";

const Heading = (props) => {
  const { mainheading, subheading, subHeadStyle,mainHeadstyle } = props;
  return (
    <div>
      <h2 style={mainHeadstyle} className={`${style.main} `}>
        {mainheading}
      </h2>
      <h5 style={subHeadStyle} className={style.sub}>
        {subheading}
      </h5>
    </div>
  );
};

export default Heading;
