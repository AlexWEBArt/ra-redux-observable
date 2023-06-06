import { Outlet, Route, Routes } from "react-router";
import Skills from "../SkillsApp";
import MainDetails from "../MainDetailsApp";
import ServiceDetails from "../MainDetailsApp/ServiceDetails/ServiceDetails";
import Menu from "./Menu/Menu";
import NewsFeed from "../NewsFeedApp";

export default function MainMenu() {
    return (
        <div className="main-menu">
            <Menu />
            <Routes>
                <Route path="/ra-redux-observable" element={null}></Route>
                <Route path="/ra-redux-observable/skills" element={<Skills />}></Route>
                <Route path="/ra-redux-observable/main-details/*" element={<><MainDetails /><Outlet /></>}>
                    <Route path=':id/details' element={<ServiceDetails />}></Route>
                </Route>
                <Route path="/ra-redux-observable/news-feed" element={<NewsFeed />}></Route>
            </Routes>
        </div>
    )
}