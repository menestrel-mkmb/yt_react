import Header from "./components/Header";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import Container from "./components/Container";
import Category from "./components/Category";
import Card from "./components/Card";

import tituloUm from "./json/tituloUm.json";
import tituloDois from "./json/tituloDois.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner bannerImg="home" />
      <Container>

        <h2 className="cat__title">ReactJS</h2>
        <Category>
          {
            tituloUm.map( (video) => {
              return (
                <Card videoId={video.id} key={video.id} />);
            })
          }
        </Category>

        <h2 className="cat__title">NodeJS</h2>
        <Category>
        {
            tituloDois.map( (video) => {
              return (
                <Card videoId={video.id} key={video.id} />);
            })
          }
        </Category>

      </ Container>

      <Footer />
    </div>
  );
}

export default App;
