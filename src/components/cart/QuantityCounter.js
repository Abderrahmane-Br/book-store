import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateQt } from "../../redux/cart/cartSlice";
import { applyPrecentage } from "../utilities/helperFun";

function QuantityCounter({ id, type, totalPrice }) {

    const item = useSelector(state => state.cart.items).find(itm => itm.id === id);
    const [quantity, setQuantity] = useState(parseFloat(type.quantity));

    const dispatch = useDispatch();

    function increment() {
        dispatch(
            updateQt({
                id,
                type: {
                    name: type.name,
                    quantity: quantity + 1
                },
            })
        );
        setQuantity(quantity + 1);
    }

    function decrement() {
        dispatch(
            updateQt({
                id,
                type: {
                    name: type.name,
                    quantity: quantity - 1
                },
            })
        );
        setQuantity(quantity - 1);
    }

    useEffect(() => {
        const newTotal = quantity * applyPrecentage(item.price, type.name);
        totalPrice(newTotal);
    }, [quantity])

    return (
        <div className="cart__item__quantity quantityCounter">
            {/* <span className="quantityCounter__plus"></span> */}
            <button
                className="quantityCounter__plusBtn iconBtn"
                onClick={increment}
            >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="quantityCounter__plus" >
                    <line x1="1" y1="4" x2="7" y2="4" strokeWidth="2" strokeLinecap="round" />
                    <line x1="4" y1="1" x2="4" y2="7" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>

            <span className="quantityCounter__number">{quantity}</span>
            <button
                className="quantityCounter__minusBtn iconBtn"
                disabled={quantity > 1 ? false : true}
                onClick={decrement}
            >
                <svg width="8" height="2" viewBox="0 0 8 2" fill="none" className="quantityCounter__minus">
                    <path d="M1 1H4H7" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            {/* <span className="quantityCounter__minus"></span> */}
        </div>
    )
}
export default QuantityCounter