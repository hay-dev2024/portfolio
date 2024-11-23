import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="About image"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" / >
                        <div className={styles.aboutItemText}>
                            <h3>Enthusiactic Eater</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nihil odit rerum facere sint.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" / >
                        <div className={styles.aboutItemText}>
                            <h3>Non-professional Boxer</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Nihil odit rerum facere sint.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" / >
                        <div className={styles.aboutItemText}>
                            <h3>Dog Walker</h3>
                            <p>I SPEAK DOG!!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};