import styles from "./ErrorNotFound.module.css";
import error404Img from "../../imgs/erro404.png";
// TODO: WHY the img can't be on public/imgs as others?!
// issue: investigate import differences!

function ErrorNotFound() {
    return (
        <main className={ styles.content }>
            <img src={ error404Img }
                alt="Logo do MinstrelFlix gigante com um óculos representando o ato de procurar algo inexistente"
                className={ styles.errorImg }>
            </img>
            <section className={ styles.errorTextColumn }>
                <h1>Erro 404</h1>
                <h2>Oops! Não encontramos a página requisitada. Tem certeza que ela existe?</h2>
            </section>
        </main>
    );
}

export default ErrorNotFound;