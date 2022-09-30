function RemoveItem({ removeFun }) {
    return (
        <button
            className="iconBtn"
            onClick={removeFun}
        >
            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" className="cart__item__remove"
            >
                <path d="M2 2L12 2" stroke="#FE0505" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </button>
    )
}
export default RemoveItem