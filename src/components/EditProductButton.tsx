import type { ProductInterface } from "../types/product.intarface";
import { type ReactNode, useState } from "react";
import { API_URL } from "../utils/mockapi";
import { useUpdate } from "../hooks/useUpdate";
import Modal from "../modals/Modal";
import ProductForm from "./ProductForm";



interface EditProductButtonProps {
    children?: ReactNode;
    product?: ProductInterface;
    reload: () => void
}
const EditProductButton = ({ children, product, reload }: EditProductButtonProps) => {
    const [showModal, setShowModal] = useState(false);

const {updateProduct} = useUpdate(API_URL);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleSubmit = async (product: Partial<ProductInterface>) => {
        try {
            const updatedProduct = await updateProduct(product as ProductInterface);
            console.log('Updated product: ', updatedProduct);
            handleCloseModal();
            reload();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };


  return (
            <>
        <button className="product-item__edit" onClick={handleOpenModal}>{children}</button>
            {showModal &&
                <Modal onClose={handleCloseModal}>
                <h2 className="modal__title">Edit product</h2>
                <ProductForm onSubmit={handleSubmit} product={product as Partial<ProductInterface>} />
            </Modal>}
        </>
  )
}

export default EditProductButton