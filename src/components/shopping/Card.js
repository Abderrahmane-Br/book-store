import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateAmount } from "../../redux/cart/cartSlice";
import { addWish } from "../../redux/wishlist/wishlistSlice";
import { formatTitle, popModal, ratingStars } from "../utilities/helperFun";
import ShopBtn from "./ShopBtn";
import blankCover from "../../assets/blankCover.jpg";

function Card(props) {
    const dispatch = useDispatch();
    const item = useSelector(state => state.cart.items.find(elm => elm.id === props.id));
    const wish = useSelector(state => state.wishlist.find(elm => elm.id === props.id))

    function handleShopClick(e, payload) {
        e.currentTarget.classList.remove("inactive");
        if (e.currentTarget.classList.contains("shopButton__cart")) {
            // if (item) {
            //     let test = item.types.every(type => type.name !== payload.types[0].name)
            //     if (test)
            //         dispatch(
            //             addItem({
            //                 ...payload
            //             }));
            // }
            if (item?.inCart)
                popModal(1);
            else {
                dispatch(
                    addItem({
                        ...payload
                    }));
                popModal(2);
            }
            dispatch(updateAmount());
        }
        else {
            if (!wish) {
                dispatch(
                    addWish({
                        id: payload.id,
                        title: payload.title,
                        thumbnail: payload.thumbnail,
                        price: payload.price,
                        inWishlist: true
                    }));
            }
            else {
                popModal(1);
            }
        }

    }

    function handleLinkClick(e) {
        const tag = e.target.tagName;
        if (tag === "svg" || tag === "path")
            e.preventDefault();
    }

    return (
        <Link
            className="bookshelf__cardCont"
            to={`/${props.id}`}
            onClick={handleLinkClick}
        >
            <div className="bookshelf__card card">
                <ShopBtn
                    click={(e) => handleShopClick(e, {
                        id: props.id,
                        title: props.title,
                        thumbnail: props.imageUrl,
                        price: props.price,
                        types: [{ name: "Paperback", quantity: 1 }],
                        inCart: true
                    })}
                    cartChecked={item?.inCart}
                    wishChecked={wish?.inWishlist}
                />
                <div className="card__face">
                    <div className="card__imageCont">
                        {props.imageUrl ?
                            <img
                                src={props.imageUrl}
                                alt="" className="card__image"
                            />
                            : <img src={blankCover} alt="" className="card__image" />
                        }
                    </div>
                </div>
                <div className="card__back">
                    <div className="card__rating">
                        {ratingStars(props.rating)}
                    </div>
                    <span className="card__author">
                        {props.author}
                    </span>
                    <div className="card__description">
                        {props.description || "No available description for this book"}
                    </div>

                </div>
            </div>
            <div className="card__title">
                {formatTitle(props.title, 33)}
            </div>
        </Link>
    )
}
export default Card