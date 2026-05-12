

import { useRef, useState } from "react";
import bookMarkW from "../../assets/feather_bookmarkw.svg";
import placeholder from "../../assets/placeholder.png";

export default function Context({ result }) {
    const someRef = useRef();
    const [diff, setDiff] = useState(0);

    function handleTouchStart(event) {
        console.log("start", event.touches[0].screenX);

        // someRef.current.style.transform = "translateX(0vw)"
        setDiff(event.touches[0].screenX);
    }

    function handleTouchEnd(event) {
        console.log("end", event.changedTouches[0].screenX);
        if (diff > event.changedTouches[0].screenX) {
            const distance = diff - event.changedTouches[0].screenX
            // ku bruge distance istedet for -27vw men jeg synes at det her fungere bedre lige nu.
            someRef.current.style.transform = `translateX(-27vw)`;
        }
    }

    // console.log(diff);

    // console.log(result);



    return (
        <>
            <div className="save-toggle">
                <img src={bookMarkW} alt="bookmark, archive article" className="save-toggle__bookmark" />
            </div>
            <div ref={someRef} className="context" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <img src={result.multimedia?.[0]?.url ?? placeholder} alt="asdasd" className="context-img" />
                <section className="context-info">
                    <h2 className="context-headline">
                        {result.title}
                    </h2>
                    <p className="context-context">
                        {result.abstract}
                    </p>
                </section>
            </div>
        </>
    )
}