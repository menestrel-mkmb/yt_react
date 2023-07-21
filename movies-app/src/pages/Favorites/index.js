import styles from "./Favorites.module.css";
import Banner from "../../components/Banner";
import youtubeStructure from "../../youtubeStructure";

import { Link } from "react-router-dom";

// export let favStorage = localStorage.getItem("favorites") || [];
export let favStorage = localStorage.getItem("favorites") || ['3CRhYhJttcw', '5INMUcXFaaQ'];

export function addFavorites( videoId ){
    favStorage = [...favStorage, videoId];
}

export function delFavorites( videoId ){
    favStorage = favStorage.filter( obj => videoId !== obj );
}

function artcEmpty() {
    return (
        <article className={ styles.fav__videoList }>
            <h3 className={ styles.empty__text } >Você não possui nenhum favorito</h3>
        </article>
    );
}

function artcFav( obj ){
    return (
        <article key={ obj } className={ styles.fav__videoList }>
            <iframe className={ styles.yt__iframe }
            width="854" height="480"
            src={ youtubeStructure.linkEmbed + obj }
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <Link className={ styles.fav__btn } >{`</3`}</Link>
        </article>
    );
}

function Favorites(){

    return(
        <main className={ styles.content__main }>
            <Banner bannerImg="favorites"/>
            <h2 className={ styles.fav__title }>
                Favoritos
            </h2>
            <section className={ styles.fav__section }>
                {
                (favStorage.length === 0) ?
                    artcEmpty() :
                    favStorage.map( (obj) => { 
                        return artcFav(obj)
                    } )
                }
            </section>
        </main>
    );

}

export default Favorites;