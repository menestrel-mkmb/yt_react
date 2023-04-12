import Header from "./components/Header";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import Container from "./components/Container";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner bannerImg="home" />
      <Container>
        <Category />
      </ Container>

      <Footer />
    </div>
  );
}

export default App;
