import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cartSlice";
import { customScrollbar } from "../utilities/helperFun";
import CartSkeleton from "../utilities/CartSkeleton";
import CartItem from "./CartItem";
import BackBtn from "../utilities/BackBtn";


function Cart() {
    const { items, amount, total } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const cartEls = items.flatMap(item => item.types.map(
        (type, index) => (<CartItem
            key={item.id + index}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            type={type}
            price={item.price}
        />)
    ));
    function clear() {
        dispatch(clearCart());
    }

    useEffect(() => customScrollbar(document.querySelector(".cart__content")), [items]);

    return (
        <div className="content cartPage">
            <BackBtn />
            <CartSkeleton
                type="cart"
                clear={clear}
                data={
                    {
                        total: total,
                        amount: amount,
                        elements: cartEls
                    }
                }
            />
        </div>
    )
}
export default Cart