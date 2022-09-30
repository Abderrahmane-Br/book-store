import { useEffect } from "react";

function SearchbarDrop({ children, width }) {
    function closeSearchDrop(e) {
        const input = document.querySelector(".searchbar__input");
        if (e.target !== input)
            document.querySelector(".searchbar").classList.remove("dropList");
    }

    useEffect(() => {
        window.addEventListener("click", closeSearchDrop);

        return () => { window.removeEventListener("click", closeSearchDrop); }
    }, [])
    return (
        <div className="searchbar__dropCont">
            <div className="searchbar__drop" style={{ width: width }}>{children}</div>
        </div>
    )
}
export default SearchbarDrop