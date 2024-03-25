import styles from "./page.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function SignIn() {
  
  return (
    

    <body className={styles.body}>

    <header className={styles.header}>

        <nav className={styles.ul}>
          <a className={styles.ull} href="#">Home</a>
          <a className={styles.ull} href="#">AO VIVO</a>
          <a className={styles.ull} href="#">Entrar</a>
          <a className={styles.ull} href="#">Carrinho</a>
          

        </nav>


    </header>

    <form action="">
      <div className={styles.container}>
        <header className={styles.login}>Login</header>

        <input type="email" className={styles.firstinput}
        placeholder="E-mail"
        />
        <input type="password" className={styles.firstinput}
        placeholder="Senha"
         />

        <br />

        <button className={styles.loginbotao}>LOGIN</button>
        
        <button className={styles.cadastrar}>CADASTRE-SE</button>

        <a className={styles.p} href="/SignUp">Esqueceu sua senha? clique aqui!</a>
      
       </div>
    </form>

    <footer className={styles.footer}>
	    <p><a href="#">Política de privacidade - Contato</a></p>
		    	<p className={styles.pfooter}><a href="#"><strong>&copy; 2024 Copyright - TheDoctors</strong></a></p>
    </footer>

    </body>

  );
}
