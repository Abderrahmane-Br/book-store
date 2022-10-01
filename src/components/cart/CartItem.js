import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, } from "../../redux/cart/cartSlice";
import CartItemSkeleton from "../utilities/CartItemSkeleton";
import RemoveItem from "../utilities/RemoveItem";
import QuantityCounter from "./QuantityCounter";

function CartItem({
    id,
    thumbnail,
    title,
    type,
    price
}) {

    const [totalPrice, setTotalPrice] = useState(parseFloat(price));
    const dispatch = useDispatch();

    function remove() {
        dispatch(removeItem({
            id,
            typeName: type.name
        }));
    }

    return (
        <CartItemSkeleton
            type="cart"
            data={
                {
                    thumbnail,
                    title,
                    id,
                    type,
                    totalPrice,
                }
            }
            children={
                {
                    quantityCounter: <QuantityCounter
                        id={id}
                        type={type}
                        totalPrice={setTotalPrice} />,
                    removeItem: <RemoveItem removeFun={remove} />

                }
            }
        />
    )
}
export default CartItem