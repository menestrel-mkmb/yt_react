import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> } ></Route>
                <Route exact path="/watch" element={ <Watch /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;