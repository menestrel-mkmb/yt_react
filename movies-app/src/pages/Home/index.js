import styles from "./Home.module.css";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Category from "../../components/Category";

function Home(){
    return(
        <main className={ styles.content__main }>
            <Banner bannerImg="home" />
            <Container>
                <Category />
            </ Container>
        </ main>
    );
}

export default Home;