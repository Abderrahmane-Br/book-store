import BookshelfRow from "./BookshelfRow";
import BookshelfTitle from "./BookshelfTitle";

function Bookshelf({ cat, volume }) {
    return (
        <div
            id={cat}
            className="shopping__bookshelf bookshelf"
        >
            <BookshelfTitle title={cat} />
            <BookshelfRow volume={volume} />
        </div>
    )
}
export default Bookshelf