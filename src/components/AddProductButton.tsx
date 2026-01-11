import { useState } from 'react'
import Modal from '../modals/Modal.tsx';
import { useAdd } from '../hooks/useAdd.ts';
import { API_URL } from '../utils/mockapi.ts';
import type { ProductInterface } from '../types/product.intarface.ts';
import ProductForm from './ProductForm.tsx';
import { INITIAL_PRODUCT } from '../data/mockData.ts';

const AddProductButton = () => {
    const [showModal, setShowModal] = useState(false);
    const {addProduct} = useAdd(API_URL);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleSubmit = async (product: Partial<ProductInterface>) => {
        try {
            const newProduct = await addProduct(product);
            console.log('New product: ', newProduct);
            handleCloseModal();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <>
        <button className="add-product-btn" onClick={handleOpenModal}>Add Product</button>
            {showModal &&
                <Modal onClose={handleCloseModal}>
                <h2 className="modal__title">Add a new product</h2>
                <ProductForm onSubmit={handleSubmit} product={INITIAL_PRODUCT} />
            </Modal>}
        </>
    )
}

export default AddProductButton