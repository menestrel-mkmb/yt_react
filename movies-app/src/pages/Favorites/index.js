import styles from "./Favorites.module.css";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import youtubeStructure from "../../youtubeStructure";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

let favStorage = localStorage.getItem("favoritesStorage");
let favList = JSON.parse(favStorage) || [];
export let favoritesExport = favList;

export function delFavorite( obj ){
    favList = favList.filter( fav => fav !== obj );
    localStorage.setItem("favoritesStorage",JSON.stringify(favList));
    favoritesExport = favList;
}

export function addFavorite( obj ){
    if(!favList.includes(obj)) favList = [...favList, obj];
    localStorage.setItem("favoritesStorage",JSON.stringify(favList));
    favoritesExport = favList;
}

function toggleFav( e, obj ) {
    console.log(e.target);
    console.log(obj);
    console.log(favList);
    (favList.includes(obj)) ? delFavorite(obj) : addFavorite(obj);
    console.log(favList);
}

function ArtcEmpty() {
    return (
        <article className={ styles.fav__videoList }>
            <h3 className={ styles.empty__text } >Você não possui nenhum favorito salvo ou correspondente a busca.</h3>
        </article>
    );
}

const favBtn = "<3", unfavBtn = "</3";

function ArtcFav( obj ){
    let videoUrl = `https://noembed.com/embed?url=http%3A//www.youtube.com/watch%3Fv%3D${obj}`;
    const [useNameVideo, setNameVideo] = useState('');

    useEffect(() => {
        fetch(videoUrl)
        .then(res => res.json())
        .then((out) => { setNameVideo(out.title)})
        .catch(err => { throw err });
    }, [videoUrl]);

    return (
        <article key={ obj } className={ styles.fav__videoList }>
            <h3>{useNameVideo}</h3>
            <iframe className={ styles.yt__iframe }
                width="640" height="480"
                src={ youtubeStructure.linkEmbed + obj }
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            <Link className={ styles.fav__btn } onClick={ (e)=>{ toggleFav(e, obj) } } >{favList.includes(obj) ? unfavBtn : favBtn}</Link>
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
            <Search />
            <section className={ styles.fav__section }>
                {
                (favList.length === 0) ?
                    ArtcEmpty() :
                    favList.map( (obj) => { 
                        return ArtcFav(obj)
                    } )
                }
            </section>
        </main>
    );

}

export default Favorites;