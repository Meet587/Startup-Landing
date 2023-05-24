import React from "react";
import style from "./heading.module.scss";

const Heading = (props) => {
  const { mainheading, subheading, subSize, mainSize } = props;
  return (
    <div>
      <h2 style={{ fontSize: mainSize }} className={`${style.main} `}>
        {mainheading}
      </h2>
      <h5 style={{ fontSize: subSize }} className={style.sub}>
        {subheading}
      </h5>
    </div>
  );
};

export default Heading;
