import Image from 'next/image'
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner}></div>

        <h1 className={styles.title}>Ofertas para você</h1>

        <div className={styles.contentCard}>
          <div className={styles.card}>
            <Image
              className={styles.img}
              src="/product.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <h1>Lancer Instant Contour Firming Facial Treatment Duo</h1>

            <div>
              <h2>R$188,00</h2>
              <p>R$198,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}