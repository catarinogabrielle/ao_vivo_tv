import styles from "./page.module.scss";
import Link from "next/link";
import Button from "@/components/Button/pages";
import Card from "@/components/Card/page";

export default function InLive() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.channels}>
          <h1>Canais:</h1>
          <div className={styles.channel}>
            <p>Canal 1</p>
            <p>Canal 2</p>
            <p>Canal 3</p>
          </div>
        </div>
        <div className={styles.banner}>
          <div />
          <div className={styles.boxInfo}>
            <h1>Nome do produto que estamos vendendo no video</h1>

            <div className={styles.line} />

            <div className={styles.info}>
              <h2>PREÇO DA VENDA</h2>
            </div>

            <div className={styles.info}>
              <p>de R$198,00</p>
              <h3>R$ 87,56</h3>
            </div>

            <Button text='Compre agora' radius={0} />
          </div>
        </div>

        <div className={styles.recents}>
          <h4>Itens recentementes no ar</h4>
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
    </div>
  );
}
