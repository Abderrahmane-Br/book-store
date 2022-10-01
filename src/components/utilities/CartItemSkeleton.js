import { formatTitle } from "../utilities/helperFun";

function CartItemSkeleton({
    type,
    data,
    children,

}) {

    const isWish = type === "wishlist";

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
                    {children.addToCart}
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