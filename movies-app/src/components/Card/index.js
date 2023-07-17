import styles from "./Card.module.css";
import youtubeStructure from "../../youtubeStructure";

import Watch from "../../pages/Watch";

import { Link } from "react-router-dom";

function Card( { videoId }) {
    return (
        <article
            className={ styles.card__artcl }
        >
            <Link to={`/watch/${videoId}`} element={ <Watch /> }>
                <img src={ youtubeStructure.thumbLinkStart + videoId + youtubeStructure.thumbLinkEnd } alt="" />
            </Link>
        </article>
    );
}

export default Card;
