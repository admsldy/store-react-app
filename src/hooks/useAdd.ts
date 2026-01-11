import axios from 'axios';
import type { ProductInterface } from '../types/product.intarface.ts';


export const useAdd = (url: string) => {
    const addProduct = async (product: Partial<ProductInterface>) => {
        try {
            const response = await axios.post(url, product);
            console.log('Add response: ', response.data);
            return response.data;

        } catch (error) {
            console.error('Error adding item:', (error as Error).message);
            throw error
        }
    }

    return { addProduct }
}