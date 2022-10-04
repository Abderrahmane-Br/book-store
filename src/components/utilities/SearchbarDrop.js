import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResults } from "../../redux/search/searchSlice";
import { customScrollbar } from "./helperFun";

import SearchResult from "./SearchResult";

function SearchbarDrop({ width }) {
    const results = useSelector(state => state.search);
    const els = results.map((el, indx) => (
        <SearchResult key={indx} {...el} />
    ));

    const dispatch = useDispatch();

    function closeSearchDrop(e) {
        const input = document.querySelector(".searchbar__input");
        if (e.target !== input) {
            document.querySelector(".searchbar").classList.remove("dropList");
            dispatch(setResults([]))
        }
    }

    useEffect(() => {
        window.addEventListener("click", closeSearchDrop);

        return () => { window.removeEventListener("click", closeSearchDrop); }
    }, []);

    useEffect(() => customScrollbar(document.querySelector(".searchbar__drop")), [results]);
    return (
        <div className="searchbar__dropCont">
            <div className="searchbar__drop" style={{ width: width }}>{els}</div>
        </div>
    )
}
export default SearchbarDrop