import Thumbnail from "./assets/thumbnail.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>John Smith</h1>
        <img className={styles.thumbnail} src={Thumbnail} alt="Thumbnail" />
        <h2>Software Engineer</h2>
      </div>
    </>
  );
}

export default Header;
