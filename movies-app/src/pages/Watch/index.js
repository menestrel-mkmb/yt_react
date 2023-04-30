import styles from "./Watch.module.css";

function Watch( videoLink ){
    return(
        <main className={ styles.content__main }>
            <h1 className={ styles.watch__title }>Assistir</h1>
            <iframe width="853" height="505"
                src={ videoLink }
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </ main>
    );
}

export default Watch;