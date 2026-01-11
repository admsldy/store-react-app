import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import AdminProducts from "./pages/AdminProducts";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";

const App = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Products />} />

                    <Route
                        path="/admin/products"
                        element={
                            isAuthenticated ? (
                                <AdminProducts />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route path="/users" element={<Users />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/todos" element={<Todos />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
