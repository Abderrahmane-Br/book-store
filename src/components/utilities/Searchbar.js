import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../redux/search/searchSlice";
import SearchDrop from "./SearchbarDrop"

function Searchbar() {
    const { list } = useSelector(state => state.books);
    const [searchVal, setSearchVal] = useState("");
    const [size, setSize] = useState(0);

    const dispatch = useDispatch();

    const searchbar = useRef();

    function handleChange(e) {
        const { value } = e.target;
        setSearchVal(value);
        let tempRes = [];

        if (value.length > 2) {
            list.forEach(item =>
                item.volume.forEach(vol => {
                    const volInfo = vol.volumeInfo;
                    if ((volInfo.title.toLowerCase().search(value.toLowerCase()) !== -1)
                        || volInfo.authors.some(auth => auth.toLowerCase().search(value.toLowerCase()) !== -1)
                        || volInfo?.industryIdentifiers?.some(id => id.identifier === value)
                    )
                        tempRes.push({
                            id: vol.id,
                            title: volInfo.title,
                            thumbnail: volInfo.imageLinks.thumbnail
                        });
                }));
            dispatch(setResults(tempRes));
        }

    }

    function handleKeyUp(e) {
        if (e.key === "Enter") {
            e.currentTarget.parentElement.classList.remove("dropList");
            e.currentTarget.blur();
        }
    }

    function clearSearchbar(e) {
        setSearchVal("");
        dispatch(setResults([]))
    }


    const observer = useRef(new ResizeObserver((entries) => {
        for (const ent of entries) {
            setSize(ent.target.clientWidth);
        }
    }));

    useEffect(() => {
        observer.current.observe(searchbar.current);
    }, [])

    return (
        <div className="searchbar" ref={searchbar}>
            {searchVal.length === 0 && <svg viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="searchbar__icon">
                <path d="M23.5 11.5C23.5 17.5553 18.3715 22.5 12 22.5C5.62846 22.5 0.5 17.5553 0.5 11.5C0.5 5.44471 5.62846 0.5 12 0.5C18.3715 0.5 23.5 5.44471 23.5 11.5Z" stroke="#35C0EE" />
                <line x1="20.3322" y1="18.6263" x2="29.3322" y2="26.6263" stroke="#35C0EE" />
            </svg>}

            <input
                type="text"
                className="searchbar__input"
                placeholder="Search by title, author or ISBN"
                value={searchVal}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
                onFocus={(e) => { e.currentTarget.parentElement.classList.add("dropList") }}
            />

            {searchVal.length > 0 &&
                <svg width="13" height="15" viewBox="0 0 13 15"
                    className="searchbar__cross searchbar__icon"
                    title="Close"
                    onClick={clearSearchbar}
                >
                    <line x1="0.706542" y1="1.02826" x2="12.0283" y2="13.2935" stroke="#35C0EE" strokeLinecap="round" />
                    <line x1="12.0283" y1="1.70654" x2="0.706541" y2="13.9717" stroke="#35C0EE" strokeLinecap="round" />
                </svg>}

            <SearchDrop
                width={size}
            />
        </div>
    )
}
export default Searchbar