import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/newsify_logo1.svg";
import Archive from "../views/archive";
import "./_header.scss";
import "./_layout.scss";
import HomeIcon from "./icons/home-icon";
import Settings from "./icons/setting";


export default function Layout() {
    const location = useLocation();
    const color = "#404040";

    useEffect(function () {
        console.log(location);
    }, [location])

    return (
        <>
            <header className="header">

                <section className="headline">
                    <h1>newsify</h1>
                    <img src={logo} alt="" className="logo" />
                </section>
                {location.pathname === "/settings" && <section>
                    <h2 className="headlines">
                        Settings
                    </h2>
                    <h3 className="headlines__categories">
                        Categories
                    </h3>
                </section>}
                {location.pathname === "/" && <input type="search" placeholder="Search news" className="search-input" />}
            </header>
            <Outlet />
            <nav className="navigation">
                <ul className="navigation__listings">
                    <li className="linkies">
                        <NavLink to="/" className={({ isActive }) => isActive ? "primary--active" : "primary"}>
                            < HomeIcon />
                            Home
                        </NavLink>
                    </li>
                    <li className="linkies">
                        <NavLink to="/archive" className={({ isActive }) => isActive ? "primary--active" : "primary"}>
                            <Archive />
                            Archive
                        </NavLink>
                    </li>
                    <li className="linkies">
                        <NavLink to="/popular" className={({ isActive }) => isActive ? "primary--active" : "primary"}>
                            {/* <Popular /> */}
                            Popular
                        </NavLink>
                    </li>
                    <li className="linkies">
                        <NavLink to="/settings" className={({ isActive }) => isActive ? "primary--active" : "primary"}>
                            <Settings />
                            Settings
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </>
    );
}