import styles from './styles.module.css';

const Pesquisa = ({imagem, legenda, titulo, description, data}) => {
    return (
        <div className={styles.principal}>
            <hr />
            <div className={styles.pesquisa}>
                <img src={imagem} alt="Rodeio" />
                
                <div className={styles.texto}>
                    <p className={styles.legenda}>{legenda}</p>
                    <h3 className={styles.titulo}>{titulo}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.data}>{data}</p>
                </div>
            </div>
        </div>
    )
}

export default Pesquisa;