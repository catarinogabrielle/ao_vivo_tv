import styles from "./page.module.scss";

import Input from '../../components/Input/pages';
import Button from '../../components/Button/pages';

export default function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Login</p>

        <Input type='text' placeholder='E-mail' />
        <Input type='password' placeholder='Senha' />

        <Button text='LOGIN' radius={8} />

        <button className={styles.button}>CADASTRE-SE</button>

        <text className={styles.forgetPassword}>Esqueceu sua senha? <a href="#">clique aqui!</a></text>
      </div>
    </div>
  );
}

