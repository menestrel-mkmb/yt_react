import Header from "./components/Header";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import ErrorNotFound from "./pages/ErrorNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>''
                <Route exact path="/" element={ <Home /> } ></Route>
                <Route exact path="/favorites" element={ <Favorites /> } ></Route>
                <Route exact path="/watch/:id" element={ <Watch /> } ></Route>
                <Route path="*" element={ <ErrorNotFound />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
