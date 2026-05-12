

import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import logo from "../../assets/newsify_logo1.svg";
import useCachedFetch from "../../hooks/useFetchCacheData";
import Context from "./context";
import "./popup.scss";

export default function Popup({ category }) {
    const showCategory = localStorage.getItem(category.headline) || "true";
    const { headline } = category;
    const [open, setOpen] = useState(false);
    const [toggled, setToggled] = useState(true);
    const [classTurn, setClassTurn] = useState("turn");
    let fetchingString = `https://api.nytimes.com/svc/news/v3/content/nyt/${category.headline}.json?api-key=O9xEMvXebIYYDqsH9CuTH6xhJE8OIFNTLnMRzjRB5nEfJ9r0`
    // console.log(category);


    const addClass = () => {
        if (toggled) {
            setClassTurn("arrow turn");
            setToggled(false);
        } else {
            setClassTurn("arrow");
            setToggled(true);
        }
    }


    let { data, loading, error } = showCategory === "true" ? useCachedFetch(
        headline,
        fetchingString
    ) : { data: null, loading: null, error: null };
    // data && console.log(data);


    function buttonToggle() {
        setOpen(prev => !prev);

    }

    return (
        <>
            {showCategory === "true" && (<details className="listitem">
                <summary className="popup"><div className="button-toggle"><img src={logo} alt="newsify logo" />{headline}</div> <img src={arrow} alt="arrow" className="arrow" /></summary>

                {data && data.results.map(result => <Context result={result} key={result.slug_name} category={headline} />)}

            </details>)}
        </>
    )
}