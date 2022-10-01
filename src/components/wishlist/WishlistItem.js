import { useDispatch, useSelector } from "react-redux";
import { findBookById, popModal } from "../utilities/helperFun";
import { addItem } from "../../redux/cart/cartSlice";
import { removeWish } from "../../redux/wishlist/wishlistSlice";
import CartItemSkeleton from "../utilities/CartItemSkeleton";
import RemoveItem from "../utilities/RemoveItem";



function WishListItem({
    id,
    thumbnail,
    title,
    price
}) {

    const book = useSelector(state => state.cart).items.find(item => item.id === id);
    const dispatch = useDispatch();

    console.log(book);

    function remove() {
        dispatch(removeWish({ id }))
    }


    function addItemToCart(e) {
        if (book)
            popModal(1);
        else {
            dispatch(addItem({
                id: id,
                title: title,
                thumbnail: thumbnail,
                price: price,
                types: [{ name: "Paperback", quantity: 1 }],
                // inCart: true
            }));
            // book.isInCart = true;
            popModal(2);
        }
    }

    return (
        <CartItemSkeleton
            type="wishlist"
            data={
                {
                    thumbnail,
                    title,
                    id,
                    price
                }
            }
            children={
                {
                    removeItem: <RemoveItem removeFun={remove} />,
                    addToCart: <button
                        className="cart__item__addToCart"
                        onClick={addItemToCart}
                    >Add to Cart</button>
                }
            }
        />
    )
}
export default WishListItem