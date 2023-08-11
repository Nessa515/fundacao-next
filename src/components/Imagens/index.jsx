import styles from './styles.module.css';

const Imagens = ({imagem}) => {
    return(
        <div className={styles.imagens}>
            <img src={imagem} alt="Arte" />
        </div>
    )
}

export default Imagens;