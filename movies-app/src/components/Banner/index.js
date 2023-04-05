import styles from "./Banner.module.css"

function Banner( { bannerImg } ) {
    return (
        <section
            className={ styles.banner__sect }
            style={{ backgroundImage: `url("./imgs/banner-${bannerImg}.png")` }}
        ></section>
    );
}

export default Banner;