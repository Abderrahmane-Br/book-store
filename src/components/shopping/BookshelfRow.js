import { useEffect, useRef } from "react";
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
            // imageUrl={vol.volumeInfo?.imageLinks?.thumbnail}
            imageUrl={"http://127.0.0.1:8081/Cover3.png"}
            rating={vol.volumeInfo.averageRating || vol.ratingFB}
            ratingCount={vol.volumeInfo.ratingCount}
            description={vol.volumeInfo.description}
            author={vol.volumeInfo?.authors[0]}
            // isInCart={vol.isInCart}
            // isInWishlist={vol.isInWishlist}
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

    // useEffect(() => {
    //     const bookshelf = document.querySelector(".bookshelf__cardsCont");
    //     bookshelf.addEventListener("scroll", toggleArrows);

    //     return bookshelf.removeEventListener("scroll", toggleArrows);
    // }, [])

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