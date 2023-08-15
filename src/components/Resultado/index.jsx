import styles from './styles.module.css';

const Resultado = () => {
    return(
        <div className={styles.principal}>
            <div className={styles.resultado}>
                <h3>Resultados da busca</h3>
            </div>

            <div className={styles.busca}>
                <input type="text" placeholder="Rodeio" />
            </div>

            <div className={styles.botao}>
                <p>Busca</p>
            </div>
            <p className={styles.r}>2 resultados encontrados</p>
        </div>
    )
}

export default Resultado;