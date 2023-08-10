import styles from './styles.module.css';

const Postagem2 = () => {
    return(
        <div className={styles.postagem}>
            <div>
                <img src="Artesanto.png" alt="Artesanato" />
                <h1>Feira agropecuária: Iª noite de rodeio</h1>
                <p className={styles.texto}>Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                Imperdiet nulla malesuada pellentesque elit eget. 
                Arcu cursus euismod quis viverra nibh cras.</p>
                <p className={styles.data}>20/05/2021</p>
            </div>

            <div>
                <img src="agropecuaria.png" alt="Agropecuaria" />
                <h1>Feira agropecuária: Iª noite de rodeio</h1>
                <p className={styles.texto}>Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                Imperdiet nulla malesuada pellentesque elit eget. 
                Arcu cursus euismod quis viverra nibh cras.</p>
                <p className={styles.data}>20/05/2021</p>
            </div>

            <div>
                <img src="image 3.png" alt="Arte" />
                <h1>Feira agropecuária: Iª noite de rodeio</h1>
                <p className={styles.texto}>Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                Imperdiet nulla malesuada pellentesque elit eget. 
                Arcu cursus euismod quis viverra nibh cras.</p>
                <p className={styles.data}>20/05/2021</p>
            </div>
        </div>
    )
}

export default Postagem2;
