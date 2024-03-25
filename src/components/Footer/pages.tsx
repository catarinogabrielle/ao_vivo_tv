import styles from "./page.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInfo}>
        <a href="#">Política de privacidad</a>
        <p>-</p>
        <a href="#">Contato</a>
      </div>

      <p className={styles.copy}>2024 @Copyright - TheDoctors</p>
    </div>
  );
}