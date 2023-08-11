import styles from './styles.module.css';

const Postagem3 = () => {
    return(
        <div>
            <div className={styles.postagem3}>
                <h1>Casa de Rondon</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus cursus, dui sit amet ornare ultricies, dui justo mollis odio, a cursus nunc metus at dui. 
                Ut non erat at metus suscipit hendrerit. Aenean sed dapibus purus, sed egestas neque. 
                Mauris fermentum felis velit, ac egestas mauris suscipit a. Suspendisse vitae tincidunt magna. 
                Fusce id sem venenatis, lacinia velit tincidunt, interdum est. 
                Suspendisse nec ipsum quis purus gravida lobortis. 
                Etiam nec pulvinar erat. Nam tempor mi at molestie pretium. 
                Suspendisse non rutrum arcu.
                </p>
                <img src="Group 86.png" alt="Fazendas" />
                <p>
                Vivamus dictum tincidunt felis a sollicitudin. 
                Quisque sed interdum lectus. 
                Nam eu lacus at odio maximus elementum interdum nec neque. 
                Etiam pharetra nunc cursus nisl sodales mattis. 
                Suspendisse condimentum sollicitudin metus, nec ullamcorper urna vulputate sit amet. 
                Cras mauris erat, suscipit non odio eget, tincidunt dapibus mi. 
                Cras ultrices, nisl in vehicula tempor, nibh lectus porttitor enim, nec feugiat ipsum erat in ipsum. 
                Aenean vitae lacus libero. Curabitur eget nunc tempus, rutrum eros sit amet, mollis eros. 
                Nunc odio enim, aliquet id purus laoreet, lobortis convallis nibh. 
                Fusce finibus aliquet nisi, elementum tempor diam varius a. 
                Ut pellentesque interdum erat, ut fermentum nulla dictum et. 
                Aliquam quis tincidunt nulla. Morbi feugiat turpis vitae lobortis volutpat. 
                Pellentesque in blandit eros. 
                Suspendisse malesuada convallis mauris, et ultricies neque posuere vel.
                </p>

                <p>Curabitur pretium nisl sed mauris aliquet, at aliquam metus pellentesque. 
                Suspendisse pellentesque lacus nec lacinia imperdiet. 
                Duis tristique urna sed massa faucibus, id rhoncus ante pharetra. 
                Duis et ornare nulla. Nulla sagittis cursus elementum. 
                Integer rhoncus tincidunt ex, at elementum nunc convallis eu. 
                Curabitur et justo elit. Aliquam eget nunc ut ex ornare molestie. 
                Nam quis tellus condimentum libero cursus vehicula. 
                Suspendisse imperdiet ut dolor ut lobortis. 
                Phasellus ut imperdiet magna. Nullam facilisis auctor tortor, eget tristique nisl eleifend vel. 
                Mauris ut nunc at lacus ultricies condimentum sed vitae tellus. 
                In porta dui at dictum hendrerit. 
                Fusce non purus porttitor, posuere metus non, finibus ante. 
                Pellentesque pulvinar consectetur eros fermentum viverra.
                </p>
            </div>

            <div className={styles.imagens}>
                <img src="casa.png" alt="Unidade pública" />
                <img src="home.png" alt="Patrimonio" />
            </div>
        </div>
    )
}

export default Postagem3;