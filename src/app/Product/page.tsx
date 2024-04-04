import styles from "./page.module.scss";
import Button from "@/components/Button/pages";

export default function Product() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.product}>
          <div className={styles.banner}></div>

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

        <div className={styles.description}>
          <h4>Descrição do produto</h4>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, non,
            iusto doloribus, neque blanditiis nulla deleniti reprehenderit quis
            possimus inventore accusamus totam commodi velit delectus repellendus
            voluptas vitae veniam quasi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque animi pariatur impedit, aut numquam sequi
            tempore aliquam, libero, repellat laborum amet nisi quaerat laudantium
            accusantium? Quia incidunt asperiores ipsa expedita.</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, non,
            iusto doloribus, neque blanditiis nulla deleniti reprehenderit quis
            possimus inventore accusamus totam commodi velit delectus repellendus
            voluptas vitae veniam quasi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque animi pariatur impedit, aut numquam sequi
            tempore aliquam, libero, repellat laborum amet nisi quaerat laudantium
            accusantium? Quia incidunt asperiores ipsa expedita.</p>
        </div>
      </div>
    </div>
  );
}

