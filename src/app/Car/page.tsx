import Image from 'next/image'
import styles from "./page.module.scss";
import Button from '../../components/Button/pages';

export default function Car() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Carrinho</h1>

        <div className={styles.contentMain}>
          <div className={styles.boxCard}>
            <div className={styles.card}>
              <Image
                className={styles.img}
                src="/product.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <div>
                <nav>
                  <h1>Nome do produto que estamos vedendo no video</h1>
                  <p>Excluir</p>
                </nav>

                <select>
                  <option value="1">1 un.</option>
                  <option value="2">2 un.</option>
                  <option value="3">3 un.</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.boxInfo}>
            <h2>Resumo Da Compra</h2>

            <div className={styles.line} />

            <div className={styles.info}>
              <p>Produto</p>
              <p>R$120,00</p>
            </div>

            <div style={{ marginBottom: 20 }} className={styles.info}>
              <p>Frete</p>
              <p>R$50,00</p>
            </div>

            <Button text='Efetuar a compra' radius={0} />
          </div>
        </div>
      </div>
    </div >
  );
}
