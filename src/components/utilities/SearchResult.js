import { Link } from "react-router-dom";
import { formatTitle } from "./helperFun";

function SearchResult({
    id,
    thumbnail,
    title
}) {
    return (
        <Link className="searchResult" to={`/${id}`}>
            {/* <img src="http://127.0.0.1:8081/Cover3.png" alt="" className="searchResult__img" /> */}
            <img src={thumbnail} alt="" className="searchResult__img" />
            <span className="searchResult__title">{title}</span>
        </Link>
    )
}
export default SearchResult