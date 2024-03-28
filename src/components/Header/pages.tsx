import Link from 'next/link';
import styles from "./page.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <text>Logo</text>

        <nav className={styles.contentMenus}>
          <Link className={styles.menu} href="/">
            <p>Home</p>
          </Link>

          <Link className={styles.menu} href="/InLive">
            <p>AO VIVO</p>
          </Link>

          <Link className={styles.menu} href="SignIn">
            <p>Entrar</p>
          </Link>

          <Link className={styles.menu} href="/Car">
            <p>Carrinho</p>
          </Link>
        </nav >
      </div>
    </header >
  )
}