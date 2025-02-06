import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Vitek Family Farm</Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.home}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Our Family</Link>
        </li>
        <li>
          <Link href="/contact">Our Kittens</Link>
        </li>
      </ul>
    </nav>
  );
}
