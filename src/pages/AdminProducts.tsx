import { useState} from "react";
import { useFetch } from "../hooks/useFetch";
import type { ProductInterface } from "../types/product.intarface";
import { createUrl } from "../utils/mockapi";
import Product from "../components/Product";
import AddProductButton from "../components/AddProductButton";
import ProductsFilter from "../components/ProductsFilter";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import useProductsFilters from "../hooks/useProductsFilters";

const AdminProducts = () => {
    const [name, setName] = useState("");
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("asc");
    const [reloadTrigger, setReloadTrigger] = useState<string | null>(null);

    const {
        page,
        setPage,
        totalPages,
        resetPage,
    } = usePagination({
        name,
        sort,
        order,
        reloadTrigger,
    });

    const {
        data: products,
        isLoading,
        error,
    } = useFetch<ProductInterface>(
        createUrl(page, name, sort, order),
        undefined,
        reloadTrigger
    );

    const { handleSetName, handleSetSort, handleSetOrder } = useProductsFilters(
        {
            setName,
            setSort,
            setOrder,
            resetPage,
        }
    );



    return (
        <div>
            <h1>Admin: Products</h1>

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
                        <AddProductButton />

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
                                isAdmin
                                reload={() => setReloadTrigger(product.id)}
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

export default AdminProducts;
