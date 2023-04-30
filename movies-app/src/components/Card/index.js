import styles from "./Card.module.css"

import { Link } from "react-router-dom";

const youtubeStructure = {
    videoLink: "https://www.youtube.com/watch?v=",
    videoEmbedded: "https://www.youtube.com/embed/",
    thumbLinkStart: "https://img.youtube.com/vi/",
    thumbLinkEnd: "/mqdefault.jpg"
}

function Card( { videoId }) {
    return (
        <article
            className={ styles.card__artcl }

        >
            <a
                href={ youtubeStructure.videoLink + videoId }
            >
                <img src={ youtubeStructure.thumbLinkStart + videoId + youtubeStructure.thumbLinkEnd } alt="" />
            </a>
        </article>
    );
}

export default Card;