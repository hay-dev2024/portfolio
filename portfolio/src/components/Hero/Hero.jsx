import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hayden</h1>
        <p className={styles.description}>
          I'm a budding software developer with a unique path into tech.<br/><br/>
          After working at Rockstar Games as a QA and Localisation Specialist on titles like Grand Theft Auto V and Red Dead Redemption 2, 
          I've set my sights on expanding my technical horizons.<br/><br/>
          Currently, I'm diving into Linux, Kernel development, network security, and AI, building projects in Python, C/C++, C#, and React.<br/><br/>
          My background in the gaming industry has equipped me with a unique perspective on software development—combining meticulous 
          attention to detail with a passion for innovative problem-solving.<br/><br/> 
          I'm excited to leverage my diverse experience and continue growing in this dynamic field, 
          bringing creativity and fresh insights to every project I tackle.
        </p>
        <a href="mailto:test@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
