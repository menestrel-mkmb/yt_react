import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className={ styles.header__sect }>
                <NavLink to="/" className={ styles.home__link} >MinstrelFlix</NavLink>
            <nav className={ styles.menu__nav } >
                    <NavLink to="/" className={ styles.menu__item } >Home</NavLink>
                    <NavLink to="/watch" className={ styles.menu__item } >Assistir</NavLink>
            </nav>
        </header>
    );
}

export default Header;