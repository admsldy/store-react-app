import type { ProductInterface } from "../types/product.intarface";
import { FaTrash, FaEdit } from "react-icons/fa";
import { API_URL } from "../utils/mockapi";
import { useDelete } from "../hooks/useDelete";
import EditProductButton from "./EditProductButton";


interface ProductProps {
    product: ProductInterface;
    reload?: () => void;
    isAdmin?: boolean;
}

const Product = ({ product, reload, isAdmin = false }: ProductProps) => {
    const { deleteProduct } = useDelete(API_URL);

    const handleDelete = async () => {
        await deleteProduct(product.id);
        reload?.();
    };

    return (
        <li className="product-item">
            <img
                className="product-item__image"
                src={product.image}
                alt={product.name}
            />
            <h2 className="product-item__title">{product.name}</h2>
            <p className="product-item__category">{product.category}</p>
            <p className="product-item__price">${product.price}</p>
            <p className="product-item__description">{product.description}</p>
            {isAdmin && (
                <div className="product-item__actions">
                    <button
                        className="product-item__delete"
                        onClick={handleDelete}
                    >
                        <FaTrash />
                    </button>

                    <EditProductButton
                        product={product}
                        reload={reload ?? (() => {})}
                    >
                        <FaEdit />
                    </EditProductButton>
                </div>
            )}
        </li>
    );
};

export default Product;
