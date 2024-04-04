import Link from "next/link";
import styles from "./page.module.scss";

import Card from '../components/Card/page';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.banner}></div>

        <div className={styles.line} />

        <h1 className={styles.title}>Ofertas para você</h1>

        <div className={styles.contentCard}>
          <Link href='/Product'>
            <Card
              img='/product.png'
              title='Calsa marrom feminina que vai até o tornozelo'
              price1='188,00'
              price2='198,00'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}