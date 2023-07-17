import styles from "./Header.module.css";

import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={ styles.header__sect }>
                <Link to="/" className={ styles.home__link} >MinstrelFlix</Link>
            <nav className={ styles.menu__nav } >
                <Link to="/" className={ styles.menu__item } >Home</Link>
                <Link to="/watch/S4sbiQZJsVc" className={ styles.menu__item } >Assistir</Link>
            </nav>
        </header>
    );
}

export default Header;
