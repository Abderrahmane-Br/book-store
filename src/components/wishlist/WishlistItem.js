import { useDispatch } from "react-redux";
import { removeWish } from "../../redux/wishlist/wishlistSlice";
import CartItemSkeleton from "../utilities/CartItemSkeleton";
import RemoveItem from "../utilities/RemoveItem";

function WishListItem({
    id,
    thumbnail,
    title,
    price
}) {

    const dispatch = useDispatch();

    function remove() {
        dispatch(removeWish({ id }))
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
                    removeItem: <RemoveItem removeFun={remove} />
                }
            }
        />
    )
}
export default WishListItem