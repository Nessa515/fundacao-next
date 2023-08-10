import styles from './styles.module.css';

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <img src="logo.png" alt="Logo" />
            <nav>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho;