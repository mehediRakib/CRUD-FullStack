import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from "./pages/list-page.jsx";
import SavePage from "./pages/save-page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListPage/>}/>
                <Route path="/save" element={<SavePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;