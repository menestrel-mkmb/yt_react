import styles from "./Card.module.css"

const youtubeStructure = {
    videoLink: "https://www.youtube.com/watch?v=",
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
                rel="noreferrer noopener"
                target='_blank '
            >
                <img src={ youtubeStructure.thumbLinkStart + videoId + youtubeStructure.thumbLinkEnd } alt="" />
            </a>
        </article>
    );
}

export default Card;