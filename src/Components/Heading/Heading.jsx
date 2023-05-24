import React from "react";
import style from './heading.module.scss'

const Heading = (props) => {
  const { mainheading, subheading } = props;
  return (
    <>
      <h2 className={`${style.main} `}>{mainheading}</h2>
      <h5 className={style.sub}>{subheading}</h5>
    </>
  );
};

export default Heading;
