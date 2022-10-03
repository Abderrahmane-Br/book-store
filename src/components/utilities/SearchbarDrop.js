import { useEffect } from "react";
import { useSelector } from "react-redux";

import SearchResult from "./SearchResult";

function SearchbarDrop({ width }) {
    const results = useSelector(state => state.search);
    const els = results.map((el, indx) => (
        <SearchResult key={indx} {...el} />
    ));


    function closeSearchDrop(e) {
        const input = document.querySelector(".searchbar__input");
        if (e.target !== input)
            document.querySelector(".searchbar").classList.remove("dropList");
    }

    useEffect(() => {
        window.addEventListener("click", closeSearchDrop);

        return () => { window.removeEventListener("click", closeSearchDrop); }
    }, []);

    return (
        <div className="searchbar__dropCont">
            <div className="searchbar__drop" style={{ width: width }}>{els}</div>
        </div>
    )
}
export default SearchbarDrop