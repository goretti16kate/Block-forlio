import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { 
    genBox,
    header,
    line1,
    line2,
    line3,
    heading,
    intro,
    miniHeading,
    paragraph,
    img,
 } from "./introduction.module.css";

const Introduction = () => {
  return (
    <div className={genBox}>
      <div className={header}>
        <div className={line1}></div>
        <StaticImage src="../images/doodle.png" alt="meditating doodle" className={img}/>
        <h2 className={heading}>Hello, I am Catherine Kamau</h2>
        <div className={line2}></div>
      </div>
      <div className={intro}>
        <h4 className={miniHeading}>A Penetration Tester & Blockchain developer.</h4>
        <div className={paragraph}>

        <p>
          Welcome to my portfolio website, where the worlds of penetration
          testing and blockchain development collide! Delve into the exciting
          realm of cybersecurity and blockchain solutions, and let me
          demonstrate how I can protect your digital assets and revolutionize
          your business processes.
        </p>
        </div>
        {/* <StaticImage src="../images/doodle.png" alt="meditating doodle" className={img}/> */}
      </div>
      <div className={line3}></div>
    </div>
  );
};

export default Introduction;
