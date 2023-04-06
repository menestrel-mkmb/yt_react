import Header from "./components/Header";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import Container from "./components/Container";
import Category from "./components/Category";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner bannerImg="home" />
      <Container>

        <Category>
          <h2 className="cat__title">Titulo 1</h2>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
        </Category>

        <Category>
          <h2 className="cat__title">Titulo 1</h2>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
          <Card cardImg="JSxV0ljL1rM"/>
        </Category>
      </ Container>

      <Footer />
    </div>
  );
}

export default App;
