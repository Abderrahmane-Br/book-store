import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, updateAmount } from "../../redux/cart/cartSlice";
import { addWish } from "../../redux/wishlist/wishlistSlice";
import { findBookById, applyPrecentage, ratingStars, customScrollbar, popModal } from "../utilities/helperFun";
import ContentHeader from "../ContentHeader";
import CartOption from "./CartOption";
import CartButton from "./CartButton";
import ToggleBtn from "../utilities/ToggleBtn";
import DetailsList from "./DetailsList";

///// SVGs

import pagesIcon from "../../assets/pages.svg";
import earthIcon from "../../assets/earth-svgrepo-com.svg";
import calendarIcon from "../../assets/calendar-svgrepo-com.svg";
import buildingIcon from "../../assets/building-svgrepo-com.svg";
import barcodeIcon from "../../assets/product-barcode-svgrepo-com.svg";
import Skeleton from "../skeleton/Skeleton";

function BookDetails() {
    const [selectedTypes, setSelectedTypes] = useState(["Paperback"]);
    const dispatch = useDispatch();
    const { bookId } = useParams();

    const isLoading = useSelector(state => state.books.isLoading);
    const book = findBookById(useSelector(state => state.books.list), bookId);
    const inCartItem = useSelector(state => state.cart.items.find(item => item.id === bookId));
    const inWislistItem = useSelector(state => state.wishlist.find(item => item.id === bookId));
    const bookPrice = book?.saleInfo?.listPrice?.amount || book?.paperbackPrice;

    function addTypeToCart(e) {
        e.preventDefault();
        const newTypes = [];
        if (inCartItem) {
            selectedTypes.forEach(type => {
                if (inCartItem.types.every(t => t.name !== type))
                    newTypes.push({ name: type, quantity: 1 });
            });
            dispatch(
                updateItem({
                    id: bookId,
                    types: [...inCartItem.types, ...newTypes]
                })
            );
            popModal(3);
        }
        else {
            dispatch(
                addItem({
                    id: book.id,
                    title: book.volumeInfo.title,
                    thumbnail: book.volumeInfo.imageLinks.thumbnail,
                    price: bookPrice,
                    types: selectedTypes.map(type => ({ name: type, quantity: 1 })),
                    // inCart: true
                })
            );
            popModal(2);
        }
        dispatch(updateAmount());
    }

    function addToWishlist(e) {
        e.preventDefault();
        if (inWislistItem) {
            popModal(1);
        }
        else {
            dispatch(addWish({
                id: book.id,
                title: book.volumeInfo.title,
                thumbnail: book.volumeInfo.imageLinks.thumbnail,
                price: bookPrice,
                // inWishlist: true
            }));
            popModal(2);
        }
    }

    useEffect(() => {
        if (!isLoading)
            customScrollbar(document.querySelector(".description__text"))
    }, [isLoading]);

    return (
        <div className="content detailsPage">
            <ContentHeader />
            <div className="content__main bookDetails">
                <div className="bookDetails__generalInfo">
                    <div className="bookDetails__thumbnail">
                        {/* <img src={book.volumeInfo?.imageLinks?.thumbnail?.replace("zoom=1", "zoom=3")} alt="" /> */}
                        {/* <img src={book.volumeInfo?.imageLinks?.thumbnail} alt="" />  THIS WHAT SHOULD BE USED*/}
                        {isLoading ?
                            <Skeleton type="image" />
                            : <img src="http://127.0.0.1:8081/blankCover.jpg" alt="" />
                        }
                    </div>
                    <div className="bookDetails__description description">
                        {!isLoading && <span className="description__title__availability --sm-active">Available</span>}
                        <div className="description__title">
                            {isLoading
                                ? <Skeleton type="title" />
                                : <span className="description__title__text">{book.volumeInfo.title}</span>
                            }
                            {isLoading
                                ? <Skeleton type="button --small" />
                                : <span className="description__title__availability --sm-inactive">
                                    <span className="--mid-inactive">Available</span>
                                    <svg viewBox="0 0 10 10" fill="none" className="--mid-active">
                                        <path d="M2 4.5L4.09231 7L8 2" strokeWidth="2" />
                                    </svg>
                                </span>}
                        </div>
                        {isLoading
                            ? <Skeleton type="line --small" />
                            : <div className="description__author">
                                {book.volumeInfo?.authors.join(", ")}
                            </div>}
                        {isLoading
                            ? <Skeleton type="line --small" />
                            : <div className="description__rating">
                                {ratingStars(book.volumeInfo.averageRating || book.ratingFB)}
                            </div>}
                        <div className="description__textCont">
                            {isLoading
                                ? <>
                                    <Skeleton type="line" />
                                    <Skeleton type="line" />
                                    <Skeleton type="line --medium" />
                                </>
                                : <div className="description__text">{book.volumeInfo.description}</div>
                            }
                            <div className="description__cartOptions">
                                {isLoading
                                    ? <Skeleton type="button --small" />
                                    : <CartOption
                                        type="Hardcover"
                                        isAvailable
                                        price={applyPrecentage(bookPrice, "Hardcover")}
                                        selectType={setSelectedTypes}
                                    />}
                                {isLoading
                                    ? <Skeleton type="button --small" />
                                    : <CartOption
                                        type="Paperback"
                                        isAvailable
                                        price={bookPrice}
                                        selectType={setSelectedTypes}
                                    />}
                                {isLoading
                                    ? <Skeleton type="button --small" />
                                    : <CartOption
                                        type="EPub"
                                        isAvailable={book.accessInfo.epub.isAvailable}
                                        price={applyPrecentage(bookPrice, "EPub")}
                                        selectType={setSelectedTypes}
                                    />}
                                {isLoading
                                    ? <Skeleton type="button --small" />
                                    : <CartOption
                                        type="PDF"
                                        isAvailable={book.accessInfo.pdf.isAvailable}
                                        price={applyPrecentage(bookPrice, "PDF")}
                                        selectType={setSelectedTypes}
                                    />}
                            </div>
                        </div>
                    </div>
                    <div className="bookDetails__cartButtons">
                        {isLoading
                            ? <Skeleton type="button" />
                            : <CartButton
                                text="Add to my Cart"
                                type="--cart-color"
                                icon={
                                    <div className="bookDetails__cartButton__iconCont --cart-color">
                                        <svg className="bookDetails__cartButton__icon cartIcon" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.3887 18.8975H10.2994C9.8095 18.8975 9.37722 18.5445 9.23398 18.0274L4.99745 2.74418H1.27342C0.65811 2.74418 0.159302 2.19377 0.159302 1.51481C0.159302 0.83584 0.65811 0.285431 1.27342 0.285431H5.8219C6.3118 0.285431 6.74408 0.638437 6.88732 1.15513L11.1238 16.4387H22.6483L26.0177 7.59038H14.4837C13.8684 7.59038 13.3696 7.03997 13.3696 6.361C13.3696 5.68204 13.8684 5.13163 14.4837 5.13163H27.694C28.0671 5.13163 28.4156 5.33781 28.6219 5.68063C28.8282 6.02345 28.8657 6.4576 28.7212 6.8373L24.4156 18.1444C24.2418 18.6007 23.8372 18.8975 23.3887 18.8975Z" />
                                            <path d="M9.35233 26.4479C10.4353 26.4479 11.3132 25.4792 11.3132 24.2842C11.3132 23.0893 10.4353 22.1205 9.35233 22.1205C8.26938 22.1205 7.39148 23.0893 7.39148 24.2842C7.39148 25.4792 8.26938 26.4479 9.35233 26.4479Z" />
                                            <path d="M23.9029 26.4479C24.9858 26.4479 25.8637 25.4792 25.8637 24.2842C25.8637 23.0893 24.9858 22.1205 23.9029 22.1205C22.8199 22.1205 21.942 23.0893 21.942 24.2842C21.942 25.4792 22.8199 26.4479 23.9029 26.4479Z" />
                                        </svg>
                                    </div>
                                }
                                action={addTypeToCart}
                            />}
                        {isLoading
                            ? <Skeleton type="button" />
                            : <CartButton
                                text="Add to my Wishlist"
                                type="--heart-color"
                                icon={
                                    <div className="bookDetails__cartButton__iconCont --heart-color">
                                        <svg className="bookDetails__cartButton__icon heartIcon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9292 1.7325C15.1108 -0.495963 11.667 -0.772379 8.99996 2.07314C6.33295 -0.772379 2.88914 -0.495963 1.07074 1.7325C-0.863462 4.10308 -0.0510605 8.52746 2.49534 12.0634C3.78615 13.8557 6.97475 16.7744 8.99996 18C11.0252 16.7744 14.2138 13.8557 15.5046 12.0634C18.051 8.52746 18.8636 4.10308 16.9292 1.7325Z" />
                                        </svg>
                                    </div>
                                }
                                action={addToWishlist}
                            />}
                        {isLoading
                            ? <Skeleton type="button" />
                            : <CartButton
                                text="Deliver to my Location"
                                action={(e) => e.currentTarget.classList.toggle("inactive")}
                                type="--delivery-color"
                                icon={
                                    <ToggleBtn classTxt="delivery" />
                                }
                            />}
                    </div>
                </div>
                {!isLoading && <DetailsList
                    list={
                        [
                            {
                                pages: {
                                    value: book.volumeInfo.pageCount,
                                    icon: pagesIcon
                                }
                            },

                            {
                                language: {
                                    value: book.volumeInfo.language,
                                    icon: earthIcon
                                }
                            },

                            {
                                "publication date": {
                                    value: book.volumeInfo.publishedDate.substring(0, 10),
                                    icon: calendarIcon
                                }
                            },

                            {
                                publisher: {
                                    value: book.volumeInfo.publisher,
                                    icon: buildingIcon
                                }
                            },

                            {
                                "isbn-13": {
                                    value: book.volumeInfo.industryIdentifiers?.find(el => el.type === "ISBN_13").identifier || "Unavailable",
                                    icon: barcodeIcon
                                }
                            },

                            {
                                "isbn-10": {
                                    value: book.volumeInfo.industryIdentifiers?.find(el => el.type === "ISBN_10").identifier || "Unavailable",
                                    icon: barcodeIcon
                                }
                            },


                        ]
                    } />}
            </div>
        </div>
    )
}

export default BookDetails