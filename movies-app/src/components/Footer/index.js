import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={ styles.footer__sect } >
            <h2 className={ styles.footer__title } >MinstrelFlix &copy; Desenvolvido por Michael Kevin - 2023</h2>
        </footer>
    );
}

export default Footer;