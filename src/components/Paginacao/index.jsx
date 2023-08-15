import styles from './styles.module.css';


const Paginacao = () => {
    return(
        <div className={styles.paginacao}>
            <div className={styles.preto}>
                <p>1</p>
            </div>

            <div>
                <p>2</p>
            </div>

            <div>
                <p>3</p>
            </div>

            <div>
                <p>4</p>
            </div>
        
        </div>
    )
}

export default Paginacao;