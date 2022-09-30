function SidebarListItem({
    name,
    current
}) {
    return (
        <li
            className={`sidebar__list__item ${name === current.name ? "current" : ""}`}
            onClick={() => current.setCurrent(name)}
            role="link"
        >
            <a href={`#${name}`} className="sidebar__list__link">
                <span>{name.charAt(0)}</span>
                <span className="--deactivate">{name.slice(1)}</span>
            </a>
        </li>
    )
}
export default SidebarListItem