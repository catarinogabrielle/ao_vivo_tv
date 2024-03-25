import styles from "./page.module.scss";

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
        <header className={styles.login}>Criar Conta</header>

        <input type="text" className={styles.firstinput}
        placeholder="Nome"
        />
        <input type="number" className={styles.firstinput}
        placeholder="Telefone"
        />
        <input type="email" className={styles.firstinput}
        placeholder="E-mail"
        />
        <input type="password" className={styles.firstinput}
        placeholder="Senha"
         />
        <input type="password" className={styles.firstinput}
        placeholder="Confirmar Senha"
         />

        <div className={styles.switch}>
          <input type="checkbox" id="checkbox1" />
          <label htmlFor="checkbox1"></label>
          <span style={{ marginLeft: '60px' }}>Li e aceito os termos</span>
        </div>

        <br />

        <button className={styles.cadastro}>CADASTRO</button>
      
       </div>
    </form>


    <footer className={styles.footer}>
	    <p><a href="#">Política de privacidade - Contato</a></p>
		    	<p className={styles.pfooter}><a href="#"><strong>&copy; 2024 Copyright - TheDoctors</strong></a></p>
    </footer>

    </body>

  );
}

