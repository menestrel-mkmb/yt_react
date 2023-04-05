import Header from "./components/Header";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner bannerImg="home" />
      <Container>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
        <Card cardImg="JSxV0ljL1rM"/>
      </ Container>

      <Footer />
    </div>
  );
}

export default App;
