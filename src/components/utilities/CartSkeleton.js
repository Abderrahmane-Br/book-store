function CartSkeleton({
    data,
    type,
    clear
}) {
    return (
        <div className="cart">
            <div className="cart__header">
                <h2 className="cart__title">{type === "cart" ? "Cart" : "Wishlist"}</h2>
                <div
                    className="cart__clearBtn"
                    onClick={clear}
                >
                    Clear</div>
            </div>
            <div className="cart__content">
                {
                    data.elements
                }

                {
                    data.elements.length === 0 && <h3 className="cart__content__empty">Nothing here yet!</h3>
                }
            </div>
            {
                (data.elements.length > 0) && (type === "cart")
                && <div className="cart__footer">
                    <span className="cart__amount">Subtotal ({data?.amount} items):</span>
                    <span className="cart__total">{data?.total.toFixed(2)}$</span>
                </div>
            }
        </div>
    )
}
export default CartSkeleton;