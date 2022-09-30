import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { findBookById, formatTitle, popModal } from "../utilities/helperFun";

function CartItemSkeleton({
    type,
    data,
    children,

}) {

    const isWish = type === "wishlist";
    const book = findBookById(useSelector(state => state.books.list), data.id);
    const dispatch = useDispatch();
    function addItemToCart(e) {
        if (book) {
            if (book.isInCart)
                popModal(1);
            else {
                dispatch(addItem({
                    ...data,
                    types: [{ name: "Paperback", quantity: 1 }],
                    inCart: true
                }));
                book.isInCart = true;
                popModal(2);
            }
        }
    }

    return (
        <div className="cart__item">
            <img src={data.thumbnail} alt="" className="cart__item__thumbnail" />
            <div className={`cart__item__info --${type}`}>
                <h3 className="cart__item__title">{formatTitle(data.title, 20)}</h3>
                {!isWish && <span className="cart__item__type">{data?.type.name}</span>}
                {
                    !isWish && children.quantityCounter
                }
                {!isWish && <span className="cart__item__amount">{data.totalPrice.toFixed(2)}$</span>}
                {isWish && <>
                    <span className="cart__item__amount">{data.price}$</span>
                    <button
                        className="cart__item__addToCart"
                        onClick={addItemToCart}
                    >Add to Cart</button>
                </>
                }
                {
                    children.removeItem
                }
            </div>

        </div>
    )
}
export default CartItemSkeleton