import styles from './styles.module.css';

const RodapeContato = () => {
    return(
        <footer className={styles.rodape}>
            <div className={styles.contato}>
                <h3 className={styles.titulo}>Contato</h3>
    
                <img className={styles.loc} src="localizacao.png" alt="Localização" />
                <p>Av. Tancredo Neves - n° 3845</p>

                <img className={styles.tel} src="telefone.png" alt="" />
                <p>(69) 3321-1777</p>

                <img className={styles.email} src="email.png" alt="" />
                <p>fundacaoculturaldevilhena@gmail.com</p>
            </div>

            <div className={styles.social}>
                <h3>Nossas redes sociais</h3>
                <img src="facebook.png" alt="" />
                <img src="instagran.png" alt="" />
            </div>

            <div className={styles.logo}>
                <h3 className={styles.titulo}>Desenvolvido por</h3>
                <img className={styles.fslab} src="fslab.png" alt="FSlab" />
                <img className={styles.ifro} src="ifro.png" alt="Ifro" />
                <img className={styles.vilhena} src="vilhena.png" alt="Vilhena" />
            </div>
        </footer>
    )
}

export default RodapeContato;