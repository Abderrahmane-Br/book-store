import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearWishList, updateAmount } from "../../redux/wishlist/wishlistSlice";
import { customScrollbar } from "../utilities/helperFun";
import CartSkeleton from "../utilities/CartSkeleton";
import WishlistItem from "./WishlistItem";
import BackBtn from "../utilities/BackBtn";

function Wishlist() {
    const items = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    const cartEls = items.map((item, index) => (<WishlistItem
        key={item.id + index}
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        price={item.price}
    />)
    );
    function clear(target) {
        dispatch(clearWishList());
    }

    useEffect(() => customScrollbar(document.querySelector(".cart__content")), [items]);

    return (
        <div className="content wishlistPage">
            <BackBtn />
            <CartSkeleton
                type="wishlist"
                clear={clear}
                data={
                    {
                        amount: items.length,
                        elements: cartEls
                    }
                }
            />
        </div>
    )
}
export default Wishlist