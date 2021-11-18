import Link from "next/link";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Tuiters</h1>
        <Link href="/"> Home </Link>
        <Link href="/createTuit"> Create Tuit </Link>
        <Link href="/timeline"> Timeline </Link>
      </div>
    </>
  );
};

export default Header;
