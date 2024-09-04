import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.aboutMe}>About Me</h2>
          <hr className={styles.ruler}></hr>
          <p className={styles.paragraph}>
            I am an advocate of self-improvement and I want to help people
            improve their lives through knowledge and application
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
