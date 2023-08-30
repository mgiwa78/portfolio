import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.hero_text}>
        Hi 👋, My name
        <br />
        is <span className={styles.text_highlight}>Giwa Muhammad</span>
        ,
        <br />I am a Fullstack Software Engineer
      </div>
      <div className={styles.hero_img}></div>
    </div>
  );
};

export default Hero;
