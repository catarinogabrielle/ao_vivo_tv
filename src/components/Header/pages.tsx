import Link from 'next/link';
import styles from "./page.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <text>Logo</text>

      <nav className={styles.contentMenus}>
        <Link className={styles.menu} href="/">
          <p>Home</p>
        </Link>

        <Link className={styles.menu} href="/">
          <p>AO VIVO</p>
        </Link>

        <Link className={styles.menu} href="SignIn">
          <p>Entrar</p>
        </Link>

        <Link className={styles.menu} href="/">
          <p>Carrinho</p>
        </Link>
      </nav >
    </div >
  )
}