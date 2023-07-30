import styles from "./Favorites.module.css";
import Banner from "../../components/Banner";
import youtubeStructure from "../../youtubeStructure";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export let favStorage = localStorage.getItem("@favList");
let favList = JSON.parse(favStorage) || ['3CRhYhJttcw', '5INMUcXFaaQ'];

export function addFavorites( videoId ){
    favList = [...favList, videoId];
}

export function delFavorites( videoId ){
    favList = favList.filter( obj => videoId !== obj );
}

function ArtcEmpty() {
    return (
        <article className={ styles.fav__videoList }>
            <h3 className={ styles.empty__text } >Você não possui nenhum favorito</h3>
        </article>
    );
}

function ArtcFav( obj ){
    let url = 'https://noembed.com/embed?url=' + 'http%3A//www.youtube.com/watch%3Fv%3D' + obj;
    const [useNameVideo, setNameVideo] = useState('');

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then((out) => { setNameVideo(out.title)})
        .catch(err => { throw err });
    }, [useNameVideo]);

    return (
        <article key={ obj } className={ styles.fav__videoList }>
            <h3>{useNameVideo}</h3>
            <iframe className={ styles.yt__iframe }
            width="854" height="480"
            src={ youtubeStructure.linkEmbed + obj }
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
                    <Link className={ styles.fav__btn } onClick={ (obj)=>{delFavorites(obj)} } >{`</3`}</Link>
        </article>
    );
}

function Favorites(){
    useEffect(() => {
        console.log("teste");
        localStorage.setItem("@favList", JSON.stringify(favList));
    }, [favList]);

    return(
        <main className={ styles.content__main }>
            <Banner bannerImg="favorites"/>
            <h2 className={ styles.fav__title }>
                Favoritos
            </h2>
            <section className={ styles.fav__section }>
                {
                (favList.length === 0) ?
                    ArtcEmpty() :
                    favList.map( (obj, index) => { 
                        return ArtcFav(obj, index)
                    } )
                }
            </section>
        </main>
    );

}

export default Favorites;