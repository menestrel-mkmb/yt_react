import styles from "./Watch.module.css";
import youtubeStructure from "../../youtubeStructure";

import { useParams } from "react-router-dom";

function Watch(){
    const params = useParams();
    const videoId = params.id;
    return(
        <main className={ styles.content__main }>
            <h1 className={ styles.watch__title }>Assistir</h1>
            <div className={ styles.yt__iframe }>
                <iframe
                width="854" height="480"
                src={ youtubeStructure.linkEmbed + videoId }
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
            <a
                href={ youtubeStructure.videoLink + videoId }
                rel="noreferrer noopener"
                target='_blank '
            >Assistir no YouTube</a>
        </ main>
    );
}

export default Watch;
