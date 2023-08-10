import styles from './styles.module.css';

const Postagem1 = () => {
    return(
        <body>
            <div className={styles.img}>
                <img src="news.png" alt="News" />
            </div>

            <div className={styles.postagem1}>
                <h1>Feira agropecuária: Iª noite de rodeio</h1>
                <p>Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                Imperdiet nulla malesuada pellentesque elit eget. 
                Arcu cursus euismod quis viverra nibh cras.</p>
            </div>

            <div className={styles.linha}>
                <hr/>
                <hr/>
                <hr/>
                <hr/>
            </div>
        </body>
    )
}

export default Postagem1;