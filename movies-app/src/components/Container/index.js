import styles from "./Container.module.css"

function Container( {children} ) {
    return (
        <main className={ styles.content__sect } >
            { children }
        </main>
    );
}

export default Container;