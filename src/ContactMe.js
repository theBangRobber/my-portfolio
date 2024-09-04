import styles from "./ContactMe.module.css";

function ContactMe() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.contactMe}>Contact Me</h2>
          <hr className={styles.ruler}></hr>
          <p className={styles.info}>Email: sample_john_smith@mail.com</p>
          <p>LinkedIn: https://www.linkedin.com/</p>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
