import { useSelector } from "react-redux";
import Bookshelf from "./Bookshelf";
import ContentHeader from "../ContentHeader";
import { useRef } from "react";
import BookshelfSkeleton from "../skeleton/BookshelfSkeleton";

function ShoppingMain() {
    const booksList = useSelector(state => state.books.list);
    const scheduled = useRef(false);
    const isLoading = useSelector(state => state.books.isLoading);
    let sidebarItems = document.querySelectorAll(".sidebar__list>li");

    function handleScroll(e) {
        if (!scheduled.current) {
            setTimeout(() => {
                const sh = e.target.scrollHeight;
                const st = e.target.scrollTop;
                const ch = e.target.clientHeight;
                const currentIdx = parseInt((st + ch / 3) / (sh / 5));
                if (!sidebarItems)
                    sidebarItems = document.querySelectorAll(".sidebar__list__item");
                else {
                    sidebarItems.forEach((item, idx) => {
                        item.classList.remove("current");
                        if (idx === currentIdx)
                            item.classList.add("current");
                    })
                }
                scheduled.current = false;
            }, 250);
            scheduled.current = true;
        }
    }

    return (
        <div className="content shoppingPage">
            <ContentHeader />
            <div className="content__main" onScroll={handleScroll}>
                {isLoading
                    ? <>
                        <BookshelfSkeleton />
                        <BookshelfSkeleton />
                        <BookshelfSkeleton />
                        <BookshelfSkeleton />
                        <BookshelfSkeleton />
                    </>
                    : booksList.map((list, idx) => (
                        <Bookshelf
                            key={idx}
                            cat={list.cat}
                            volume={list.volume}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default ShoppingMain