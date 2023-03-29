import styles from "./Header.module.css"

function Header() {
    return (
        <header className={ styles.header__sect }>
            <a href="#" className={ styles.home__link} >MinstrelFlix</a>
            <nav className={ styles.menu__nav } >
                <a href="#" className={ styles.menu__item } >Home</a>
                <a href="#" className={ styles.menu__item } >Assistir</a>
            </nav>
        </header>
    );
}

export default Header;