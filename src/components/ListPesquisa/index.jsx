import Pesquisa from '../Pesquisa';
import styles from './styles.module.css';

const ListPesquisa = (props) => {
    const imagens = 
    [
        {
            imagem: "image 3.png",
            legenda: "Arquitetura e patrimônio cultural",
            titulo: "Feira agropecuária: Iª noite de rodeio",
            description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.",
            data: "20/05/2021"
        },
        {
            imagem: "Rectangle 32.png",
            legenda: "Arquitetura e patrimônio cultural",
            titulo: "Feira agropecuária: Iª noite de rodeio",
            description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.",
            data: "20/05/2021"
        },
        {
            imagem: "Rectangle 32.png",
            legenda: "Arquitetura e patrimônio cultural",
            titulo: "Feira agropecuária: Iª noite de rodeio",
            description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.",
            data: "20/05/2021"
        },
        {
            imagem: "Rectangle 32.png",
            legenda: "Arquitetura e patrimônio cultural",
            titulo: "Feira agropecuária: Iª noite de rodeio",
            description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.",
            data: "20/05/2021"
        },
        {
            imagem: "Rectangle 32.png",
            legenda: "Arquitetura e patrimônio cultural",
            titulo: "Feira agropecuária: Iª noite de rodeio",
            description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.",
            data: "20/05/2021"
        },
        {
            imagem: "Rectangle 32.png",
            legenda: "Arquitetura e patrimônio cultural",
            titulo: "Feira agropecuária: Iª noite de rodeio",
            description: "Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Imperdiet nulla malesuada pellentesque elit eget. Arcu cursus euismod quis viverra nibh cras.",
            data: "20/05/2021"
        }
    ]

    return(
        <div className={styles.pesquisa}>
            {imagens.map((imagem) => (
                <Pesquisa 
                    imagem={imagem.imagem}
                    legenda={imagem.legenda}
                    titulo={imagem.titulo}
                    description={imagem.description}
                    data={imagem.data}
                    
                />
            ))}
        </div>
    )
}

export default ListPesquisa;