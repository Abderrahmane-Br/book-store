import { useRef } from "react";
import Card from "./Card";

function BookshelfRow({ volume }) {

    const leftArrow = useRef();
    const rightArrow = useRef();
    const bookshelf = useRef();


    const cardElements = volume.map(vol => {
        return <Card
            key={vol.id}
            id={vol.id}
            title={vol.volumeInfo.title}
            // imageUrl={vol.volumeInfo?.imageLinks?.thumbnail?.replace("zoom=1", "zoom=2")}
            imageUrl={vol.volumeInfo?.imageLinks?.thumbnail}
            // imageUrl={"http://127.0.0.1:8081/Cover3.png"}  => for offline use as a placeholder
            rating={vol.volumeInfo.averageRating || vol.ratingFB}
            ratingCount={vol.volumeInfo.ratingCount}
            description={vol.volumeInfo.description}
            author={vol.volumeInfo?.authors[0]}
            price={vol.saleInfo?.listPrice?.amount || vol.paperbackPrice}
        />
    })

    function toggleArrows(e) {
        if (bookshelf.current.scrollLeft === 0)
            leftArrow.current.classList.add("inactive");
        // rightArrow.current.classList.remove("inactive");
        else
            leftArrow.current.classList.remove("inactive");

        if (bookshelf.current.scrollWidth - bookshelf.current.clientWidth - 2 <= bookshelf.current.scrollLeft)
            rightArrow.current.classList.add("inactive");
        else
            rightArrow.current.classList.remove("inactive");

    }

    function scrollEl(dir) {
        bookshelf.current
            .scroll({
                left: bookshelf.current.scrollLeft + bookshelf.current.clientWidth * dir,
                behavior: "smooth"
            })
    }

    return (
        <div className="bookshelf__rowCont">
            <div
                className="bookshelf__row__leftArrow inactive"
                ref={leftArrow}
                onClick={() => scrollEl(-1)}
            >
                <svg viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.4762L11 0V20L0 10.4762Z" fill="#55B3D2" />
                </svg>
            </div>
            <div className="bookshelf__row">
                <div
                    className="bookshelf__cardsCont"
                    onScroll={toggleArrows}
                    ref={bookshelf}
                >
                    {cardElements}
                </div>
            </div>
            <div
                className="bookshelf__row__rightArrow"
                ref={rightArrow}
                onClick={() => scrollEl(1)}
            >
                <svg viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.4762L11 0V20L0 10.4762Z" fill="#55B3D2" />
                </svg>
            </div>
        </div>
    )
}
export default BookshelfRow