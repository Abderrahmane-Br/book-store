import { useState } from "react"
import SidebarListItem from "./utilities/SidebarListItem"

function Sidebar() {
    const [current, setCurrent] = useState("Social");
    return (
        <div className="sidebar">
            <div className="sidebar__menu"></div>
            <div className="sidebar__listCont">
                <ul className="sidebar__list">
                    <SidebarListItem name="Social" current={{ name: current, setCurrent }} />
                    <SidebarListItem name="Fiction" current={{ name: current, setCurrent }} />
                    <SidebarListItem name="History" current={{ name: current, setCurrent }} />
                    <SidebarListItem name="Nature" current={{ name: current, setCurrent }} />
                    <SidebarListItem name="Art" current={{ name: current, setCurrent }} />
                </ul>
            </div>
        </div>
    )
}
export default Sidebar