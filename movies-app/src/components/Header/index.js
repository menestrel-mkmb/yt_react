import styles from "./Header.module.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    return (
        <header className={ styles.header__sect }>
            <Router>
                <Link to="/" className={ styles.home__link} >MinstrelFlix</Link>
                <nav className={ styles.menu__nav } >
                        <Link to="/" className={ styles.menu__item } >Home</Link>
                        <Link to="/watch" className={ styles.menu__item } >Assistir</Link>
                </nav>
            </Router>
        </header>
    );
}

export default Header;