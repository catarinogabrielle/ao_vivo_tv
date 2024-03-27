import styles from "./page.module.scss";

import Grup from "../components/Grup/page"

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.box}></div>
        <p>Ofertas para você</p>
          <div className={styles.line}>
            <Grup/>
            <Grup/>
            <Grup/>
            <Grup/>
          </div>
          <div className={styles.line}>
            <Grup/>
            <Grup/>
            <Grup/>
            <Grup/>
          </div>
    </div>
  );
}