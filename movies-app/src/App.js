import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import Watch from "./pages/Watch";



function App() {
  return (
    <div className="App">
      <Header />
      
      <AppRoutes />
      {/* <Watch /> */}

      <Footer />
    </div>
  );
}

export default App;
