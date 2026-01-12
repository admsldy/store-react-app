import { useState, useEffect } from "react";
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from "../utils/mockapi";

interface UsePaginationParams {
    name: string;
    sort: string;
    order: string;
    reloadTrigger?: string | null;
}

const usePagination = ({
    name,
    sort,
    order,
    reloadTrigger,
}: UsePaginationParams) => {
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);

    const totalPages = Math.ceil(totalItems / API_ITEMS_PER_PAGE_LIMIT);

    useEffect(() => {
        const fetchTotalItems = async () => {
            try {
                const url = createUrl(1, name, sort, order).replace(
                    `page=1&limit=${API_ITEMS_PER_PAGE_LIMIT}`,
                    ""
                );

                const response = await fetch(url);
                const data = await response.json();

                setTotalItems(data.length);
            } catch {
                setTotalItems(0);
            }
        };

        fetchTotalItems();
    }, [name, sort, order, reloadTrigger]);

    const resetPage = () => setPage(1);

    return {
        page,
        setPage,
        totalPages,
        resetPage,
    };
};

export default usePagination;