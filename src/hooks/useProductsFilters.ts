interface UseProductsFiltersParams {
    setName: (value: string) => void;
    setSort: (value: string) => void;
    setOrder: (value: string) => void;
    resetPage: () => void;
}

const useProductsFilters = ({
    setName,
    setSort,
    setOrder,
    resetPage,
}: UseProductsFiltersParams) => {
    const handleSetName = (value: string) => {
        setName(value);
        resetPage();
    };

    const handleSetSort = (value: string) => {
        setSort(value);
        resetPage();
    };

    const handleSetOrder = (value: string) => {
        setOrder(value);
        resetPage();
    };

    return {
        handleSetName,
        handleSetSort,
        handleSetOrder,
    };
};
export default useProductsFilters;