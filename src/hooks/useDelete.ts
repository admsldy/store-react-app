import axios from "axios";

export const useDelete = (baseUrl: string) => {
    const deleteProduct = async (id: string) => {
        try {
            const response = await axios.delete(`${baseUrl}/${id}`);
            console.log('Delete response: ', response.data);
            return response.data;

        } catch (error) {
            console.error('Error deleting item:', (error as Error).message);
            throw error
        }
    };

    return { deleteProduct };
}