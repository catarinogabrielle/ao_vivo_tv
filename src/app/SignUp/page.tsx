import Link from 'next/link';
import styles from "./page.module.scss";

import Input from '../../components/Input/pages';
import Button from '../../components/Button/pages';

export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Criar Conta</p>

        <Input type='text' placeholder='Nome' />
        <Input type='tel' placeholder='Telefone' />
        <Input type='email' placeholder='E-mail' />
        <Input type='password' placeholder='Senha' />
        <Input type='password' placeholder='Confirmar Senha' />

        <div className={styles.switch}>
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1"></label>
          <span>Li e aceito os termos</span>
        </div>

        <Button text='CADASTRO' radius={8} />

        <Link className={styles.back} href="SignIn">Já tenho Login!</Link>
      </div>
    </div>
  );
}


