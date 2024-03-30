import Image from 'next/image'
import styles from "./page.module.scss";

export default function Card({ img, title, price1, price2 }: { img: string, title: string, price1: string, price2: string }) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={img}
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <h1>{title}</h1>

      <div>
        <h2>R${price1}</h2>
        <p>R${price2}</p>
      </div>
    </div>
  );
}