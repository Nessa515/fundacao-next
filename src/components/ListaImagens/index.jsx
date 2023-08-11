const { default: Imagens } = require("../Imagens");
import styles from './styles.module.css';

const ListaImagens = () => {

    const lista = 
    [
        {
            key: 0,
            imagem: "Group 72.png"
        },
        {
            key: 1,
            imagem: "Group 71.png"
        },
        {
            key: 2,
            imagem: "Group 74.png"
        },
        {
            key: 3,
            imagem: "Group 73.png"
        },
        {
            key: 4,
            imagem: "culturas.png"
        },
        {
            key: 5,
            imagem: "literatura.png"
        },
        {
            key: 6,
            imagem: "Group 77.png"
        }
    ]

    return(
        <div>
            <h1 className={styles.titulo}>Conheça a cultura de Vilhena</h1>
            <div className={styles.listaImagens}>
                {lista.map((list) => (
                    <Imagens
                        key={list.key}
                        imagem={list.imagem}
                    />
                ))}
            </div>

        </div>
    )
}

export default ListaImagens;