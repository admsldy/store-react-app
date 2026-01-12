import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";
import type { ProductInterface } from "../types/product.intarface";
import { createUrl } from "../utils/mockapi";
import Product from "../components/Product";
import ProductsFilter from "../components/ProductsFilter";
import Pagination from "../components/Pagination";
import useProductsFilters from "../hooks/useProductsFilters";

const Products = () => {
    const [name, setName] = useState("");
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("asc");

     const { page, setPage, totalPages, resetPage } = usePagination({
         name,
         sort,
         order,
     });

    const {
        data: products,
        isLoading,
        error,
    } = useFetch<ProductInterface>(createUrl(page, name, sort, order));

const { handleSetName, handleSetSort, handleSetOrder } = useProductsFilters({
    setName,
    setSort,
    setOrder,
    resetPage,
});

    return (
        <div>
            <h1>Products</h1>

            <ProductsFilter
                name={name}
                setName={handleSetName}
                sort={sort}
                setSort={handleSetSort}
                order={order}
                setOrder={handleSetOrder}
            />

            {isLoading && <h2 className="loading">Loading products...</h2>}
            {error && <h2 className="error">{error}</h2>}

            {!isLoading && !error && (
                <div className="content">
                    <div className="buttons-group">
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
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

                    {products.length === 0 && (
                        <p className="products-empty">
                            No products found for this search
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
