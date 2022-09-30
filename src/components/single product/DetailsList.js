import DetailsListItem from "./DetailsListItem"

function DetailsList({ list }) {
    return (
        <div className="bookDetails__detailsList">
            {
                list.map((item, indx) => (
                    <DetailsListItem
                        key={indx}
                        title={Object.keys(item)[0]}
                        icon={Object.values(item)[0].icon}
                        value={Object.values(item)[0].value}
                    />
                ))
            }
        </div>
    )
}
export default DetailsList