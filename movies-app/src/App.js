import Header from "./components/Header";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import Container from "./components/Container";
import Category from "./components/Category";
import Card from "./components/Card";

import reactjs from "./json/reactjs.json";
import nodejs from "./json/nodejs.json";
import mysql from "./json/mysql.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner bannerImg="home" />
      <Container>

        <h2 className="cat__title">ReactJS</h2>
        <Category>
          { reactjs.map( (video) => <Card videoId={video.id} key={video.id} />) }
        </Category>

        <h2 className="cat__title">NodeJS</h2>
        <Category>
          { nodejs.map( (video) => <Card videoId={video.id} key={video.id} />) }
        </Category>

        <h2 className="cat__title">MySQL</h2>
        <Category>
          { mysql.map( (video) => <Card videoId={video.id} key={video.id} />) }
        </Category>

      </ Container>

      <Footer />
    </div>
  );
}

export default App;
