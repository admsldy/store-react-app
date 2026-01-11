import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store.ts";
import { login, logout } from "../redux/authSlice.ts";

interface LinkInterface {
    path: string;
    label: string;
}

const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const handleLogin = () => {
        dispatch( login());
    }

    const handleLogout = () => {
        dispatch(logout());
    }

const navLinks: LinkInterface[] = [
    { path: "/", label: "Products" },

    ...(isAuthenticated ? [{ path: "/admin/products", label: "Admin" }] : []),

    { path: "/users", label: "Users" },
    { path: "/posts", label: "Posts" },
    { path: "/todos", label: "Todos" },
];



    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar__list">
                    {navLinks.map((link) => (
                        <li className="navbar__item" key={link.path}>
                            <NavLink className="navbar__link" to={link.path}>{link.label}</NavLink>
                        </li>
                    ))}
                    {isAuthenticated ? (
                        <li>
                            <button className="navbar__link" onClick={handleLogout}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <button className="navbar__link" onClick={handleLogin}
                            >
                                Login
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;