import styles from "./Favorites.module.css";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

import { useState } from "react";
import { Link } from "react-router-dom";

export const favStorage = localStorage.getItem("favorites") || [];

export function addFavorites( videoId ){
    favStorage = [...favStorage, videoId];
}

export function delFavorites( videoId ){
    favStorage = favStorage.filter( obj => videoId !== obj );
}

function Favorites(){
    const [ useFavorites, setFavorites ] = useState(favStorage);

    return(
        <main className={ styles.content }>
            <Banner bannerImg="favorites"/>
            <h2 className={ styles.fav__title }>
                Favoritos
            </h2>
            <section className={ styles.fav__section }>
                {favStorage.map( (obj, index) => {
                    <article>
                        <Card videoId={ obj.id } />
                        <h3>obj.name</h3>
                        <Link className={ styles.fav__btn } >{`</3`}</Link>
                    </article>
                } )}
            </section>
        </main>
    );

}

export default Favorites;