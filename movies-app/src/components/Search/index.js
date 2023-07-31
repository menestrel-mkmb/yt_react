import styles from "./Search.module.css";

function Search(){
    return(
        <section className={ styles.search__sect}>
            <input className={ styles.search__inp} placeholder="Pesquise nos seus favoritos"></input>
        </section>
    );
}

export default Search;