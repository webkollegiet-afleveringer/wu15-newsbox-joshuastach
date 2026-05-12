import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views";
import Archive from "./views/archive";
import Settings from "./views/settings";


export default function App() {


    let allCategory = [
        {
            headline: "europe",
            number: "1"
        },
        {
            headline: "health",
            number: "2"
        },
        {
            headline: "sports",
            number: "3"
        },
        {
            headline: "business",
            number: "4"
        },
        {
            headline: "travel",
            number: "5"
        },

    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home allCategory={allCategory} />} />
                    <Route path="/settings" element={<Settings allCategory={allCategory} />} />
                    <Route path="/archive" element={<Archive />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}