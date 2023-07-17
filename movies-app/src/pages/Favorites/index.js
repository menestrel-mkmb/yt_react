import styles from "./Favorites.module.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

// import { useState } from "react";
import { Link } from "react-router-dom";

export let favStorage = localStorage.getItem("favorites") || ['3CRhYhJttcw', '5INMUcXFaaQ'];

export function addFavorites( videoId ){
    favStorage = [...favStorage, videoId];
}

export function delFavorites( videoId ){
    favStorage = favStorage.filter( obj => videoId !== obj );
}

function Favorites(){

    return(
        <main className={ styles.content__main }>
            <Banner bannerImg="favorites"/>
            <h2 className={ styles.fav__title }>
                Favoritos
            </h2>
            <section className={ styles.fav__section }>
                {favStorage.map( (obj) => { return(
                    <article className={ styles.fav__videoList }>
                        <Card videoId={ obj } />
                        <Link className={ styles.fav__btn } >{`</3`}</Link>
                    </article>
                )} )}
            </section>
        </main>
    );

}

export default Favorites;