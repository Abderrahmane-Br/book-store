import Skeleton from "./Skeleton";

function BookshelfSkeleton() {
    return (
        <div className="shopping__bookshelf bookshelf">
            <Skeleton type="button --small bookshelf__title" />
            <div className="bookshelf__rowCont">
                <div className="bookshelf__row">
                    <div className="bookshelf__cardsCont">
                        <div className="bookshelf__cardCont">
                            <div className="bookshelf__card card"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Skeleton type="image" />
                            </div>
                            <div className="card__title">
                                <Skeleton type="line" />
                                <Skeleton type="line --medium" />
                            </div>
                        </div>
                        <div className="bookshelf__cardCont">
                            <div className="bookshelf__card card"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Skeleton type="image" />
                            </div>
                            <div className="card__title">
                                <Skeleton type="line" />
                                <Skeleton type="line --medium" />
                            </div>
                        </div>
                        <div className="bookshelf__cardCont">
                            <div className="bookshelf__card card"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Skeleton type="image" />
                            </div>
                            <div className="card__title">
                                <Skeleton type="line" />
                                <Skeleton type="line --medium" />
                            </div>
                        </div>
                        <div className="bookshelf__cardCont">
                            <div className="bookshelf__card card"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Skeleton type="image" />
                            </div>
                            <div className="card__title">
                                <Skeleton type="line" />
                                <Skeleton type="line --medium" />
                            </div>
                        </div>
                        <div className="bookshelf__cardCont">
                            <div className="bookshelf__card card"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Skeleton type="image" />
                            </div>
                            <div className="card__title">
                                <Skeleton type="line" />
                                <Skeleton type="line --medium" />
                            </div>
                        </div>
                        <div className="bookshelf__cardCont">
                            <div className="bookshelf__card card"
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Skeleton type="image" />
                            </div>
                            <div className="card__title">
                                <Skeleton type="line" />
                                <Skeleton type="line --medium" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookshelfSkeleton