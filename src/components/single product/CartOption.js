function CartOption({
    type,
    isAvailable,
    price,
    selectType
}) {

    function toggleSelected(e) {
        if (e.currentTarget.classList.contains("selected")) {
            e.currentTarget.classList.remove("selected");
            selectType(prevTypes => prevTypes.filter(t => t !== type))
        }
        else {
            e.currentTarget.classList.add("selected");
            selectType(prevTypes => [...prevTypes, type]);
        }
    }

    // dispatch type added

    return (
        <div
            className={`description__cartOption cartOption 
            ${isAvailable ? "" : "inactive"} ${type === "Paperback" ? "selected" : ""}`}
            onClick={toggleSelected}
        >
            <span className="cartOption__type">{type}</span>
            <span className="cartOption__price">{(isAvailable && price) || "0.00"}$</span>
        </div>
    )
}
export default CartOption