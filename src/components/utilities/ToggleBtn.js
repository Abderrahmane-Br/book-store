function ToggleBtn({ classTxt }) {
    return (
        <div className={`toggleBtn ${classTxt}`}>
            <div className="toggleBtn__switcher"></div>
        </div>
    )
}
export default ToggleBtn