function CartOption({
    text,
    type,
    icon,
    action,
}) {

    return (
        <div className="bookDetails__cartButton" onClick={action}>
            <a href="" className={`${type}`}>{text}</a>

            {icon}
        </div>
    )
}
export default CartOption