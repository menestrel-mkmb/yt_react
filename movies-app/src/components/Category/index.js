import styles from "./Category.module.css"

function Category( {children} ) {
    return (
        <section className={ styles.cat__sect }>
            {children}
        </section>
    );
}

export default Category;