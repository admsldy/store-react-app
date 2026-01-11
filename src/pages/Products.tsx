import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import type { ProductInterface } from "../types/product.intarface";
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from "../utils/mockapi";
import Product from "../components/Product";
import ProductsFilter from "../components/ProductsFilter";

const Products = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("asc");

    const {
        data: products,
        isLoading,
        error,
    } = useFetch<ProductInterface>(createUrl(page, name, sort, order));

    return (
        <div>
            <h1>Products</h1>

            <ProductsFilter
                name={name}
                setName={setName}
                sort={sort}
                setSort={setSort}
                order={order}
                setOrder={setOrder}
            />

            {isLoading && <h2 className="loading">Loading products...</h2>}
            {error && <h2 className="error">{error}</h2>}

            {!isLoading && !error && (
                <div className="content">
                    <div className="buttons-group">
                        <div className="pagination">
                            <button
                                className="pagination__btn"
                                disabled={page === 1}
                                onClick={() => setPage((prev) => prev - 1)}
                            >
                                Previous
                            </button>
                            <button
                                className="pagination__btn"
                                disabled={
                                    products.length < API_ITEMS_PER_PAGE_LIMIT
                                }
                                onClick={() => setPage((prev) => prev + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    <ul className="products-list">
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                isAdmin={false}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Products;
