function DetailsListItem({
    title,
    icon,
    value
}) {
    return (
        <div className="bookDetails__detailsList__item detailsItem">
            <span className="detailsItem__title">{title}</span>
            <img src={icon} alt="" className="detailsItem__icon" />
            <span className="detailsItem__value">{value}</span>
        </div>
    )
}
export default DetailsListItem