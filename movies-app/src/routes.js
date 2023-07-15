import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorNotFound from "./components/ErrorNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={ <Home /> } ></Route>
                <Route exact path="/watch" element={ <Watch /> } ></Route>
                <Route path="*" element={ <ErrorNotFound />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;