import * as React from "react";

import {
  mehIntro,
  introHeading,
  line4,
  stuffIntro,
  secondIntro,
  img,
  boom,
  containerp,
  end,
  bulb1,
  bulb2,
  containerVector,
  vector,
} from "./stuff.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Stuff = () => {
  return (
    <div>
      <div className={mehIntro}>
        <h1 className={introHeading}>Introduction</h1>
        <div className={line4}></div>
      </div>
      <div className={secondIntro}>
        <div className={boom}>
          <StaticImage
            src="../images/thinking.png"
            alt="A person on a desk, thinking"
            className={img}
          />
        </div>
        <div className={containerp}>
        <StaticImage
            className={bulb1}
            alt="a turned-on light bulb"
            src="../images/lightBulb.png"
          />
          <p className={stuffIntro}>
            {" "}
            Hello and welcome! Katie here, your friendly neighborhood Ethical
            Hacker and Blockchain Developer. Over the past 4 years, I've
            journeyed through the tech landscape, exploring web development,
            android development, and trying my hands in languages eg. Python,
            Java, C++, C, php, Ruby and their frameworks. However, my heart
            truly found its home in Cybersecurity, a passion I've dedicated the
            last 2 years to honing.
            <br />
            I thrive on challenges, love participating in CTFs and enjoy
            learning new tricks. When I'm not immersed in ones and zeroes,
            you'll find me immersed in the pages of a thrilling novel or
            binge-watching the latest marvel movies or anime series. From
            magical realms (mostly) to cyberpunk, I'm as much a fan of
            captivating narratives as I am of impenetrable firewalls.
            <br />
            <br />
            So, whether you're a security-knight, an anime adventurer, or just
            someone curious about the digital world, let's connect, brainstorm,
            or maybe even share anime recommendations. 📚🎉 Feel free to shoot
            me a message on LinkedIn or drop me an email.
          </p>
          <StaticImage
            className={bulb2}
            alt="a turned-on light bulb"
            src="../images/lightBulb.png"
          />
          <p className={end}>Stay curious, stay awesome! 🌟🔥</p>
        </div>
      </div>
      <div className={containerVector}>
 
                <StaticImage
            className={vector}
            alt="a turned-on light bulb"
            src="../images/Vector.png"
          />
      </div>
    </div>
  );
};
export default Stuff;
