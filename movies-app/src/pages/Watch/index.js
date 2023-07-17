import styles from "./Watch.module.css";
import youtubeStructure from "../../youtubeStructure";
import Banner from "../../components/Banner";

import { useParams, Link } from "react-router-dom";
import { addFavorites, delFavorites, favStorage } from "../Favorites";

function Watch(){
    const params = useParams();
    const videoId = params.id;

    const favList = favStorage.filter( Obj => Obj === videoId );
    const favBtn = (favList) ? delFavorites : addFavorites;

    return(
        <main className={ styles.content__main }>
            <Banner className={ styles.banner__img} bannerImg="watch" />
            <div className={ styles.watchline__text } >
                <h1 className={ styles.watch__title }>Assistir</h1>
                <Link className={ styles.fav__btn } onClick={ favBtn } >{`<3`}
                </Link>
                <a  className={ styles.yt__link }
                    href={ youtubeStructure.videoLink + videoId }
                    rel="noreferrer noopener"
                    target='_blank '
                >Assistir no YouTube</a>
            </div>
            <iframe className={ styles.yt__iframe }
            width="854" height="480"
            src={ youtubeStructure.linkEmbed + videoId }
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </ main>
    );
}

export default Watch;
