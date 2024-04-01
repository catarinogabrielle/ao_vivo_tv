import styles from "./page.module.scss";
import Button from '../../components/Button/pages';

export default function Car() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Carrinho</h1>
        <div className={styles.line} />
        <div className={styles.order}>
          <div>
            <div className={styles.product}>
              <img src="/productexemple.png" />
              <div>
                <h2>Nome do produto que estamos vendendo no video</h2>
                <div>
                  <button>Excluir</button>
                  <button>Salvar</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.resume}>
            <h3>RESUMO DA COMPRA</h3>
            <div className={styles.line} style={{
              marginBottom: '20px',
              marginTop: '10px'
            }} />
            <div className={styles.detail}>
              <div style={{
                marginRight: '200px'
              }}>
                <p>Produto</p>
                <br />
                <p>Frete</p>
              </div>
              <div>
                <p>R$120,00</p>
                <br />
                <p>R$40,00</p>
              </div>
            </div>
            <Button text='Continuar a Compra' radius={0} />
          </div>

        </div>
      </div>
    </div>
  );
}
