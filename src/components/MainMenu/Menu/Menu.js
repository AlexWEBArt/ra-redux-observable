import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu">
            <NavLink className="menu-item" to="/ra-redux-observable/skills">SkillsApp</NavLink>
            <NavLink className="menu-item" to="/ra-redux-observable/main-details">MainDetailsApp</NavLink>
            {/* <NavLink className="menu__item" to="/timeattack">Time Attack</NavLink> */}
        </nav>
    );
}