import styles from "./Watch.module.css";
import youtubeStructure from "../../youtubeStructure";

function Watch({ videoToIframe }){
    return(
        <main className={ styles.content__main }>
            <h1 className={ styles.watch__title }>Assistir</h1>
            
            <a
                href={ youtubeStructure.videoLink + videoToIframe }
                rel="noreferrer noopener"
                target='_blank '
            >Assistir no YouTube</a>
        </ main>
    );
}

export default Watch;