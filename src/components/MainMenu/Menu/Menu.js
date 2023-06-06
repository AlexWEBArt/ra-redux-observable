import { NavLink } from "react-router-dom";
import './menu.css'

export default function Menu() {
    return (
        <nav className="menu">
            <NavLink className="menu-item" to="/ra-redux-observable/skills">SkillsApp</NavLink>
            <NavLink className="menu-item" to="/ra-redux-observable/main-details">MainDetailsApp</NavLink>
            <NavLink className="menu-item" to="/ra-redux-observable/news-feed">NewsFeedApp</NavLink>
        </nav>
    );
}