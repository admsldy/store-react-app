import { useRef, useState, useEffect } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { MdRefresh } from "react-icons/md";
import { SORT_BY_LIST, ORDER_BY_LIST } from "../data/mockData";
import { debounce } from "../utils/debounce.ts";

interface ProductsFilterProps {
    name: string;
    setName: (value: string) => void;
    sort: string;
    setSort: (value: string) => void;
    order: string;
    setOrder: (value: string) => void;
}

const ProductsFilter = ({
    name,
    setName,
    sort,
    setSort,
    order,
    setOrder,
}: ProductsFilterProps) => {
    const [inputValue, setInputValue] = useState(name);
    const debouncedSetNameRef = useRef(debounce(setName, 1000));


    useEffect(() => {
        setInputValue(name);
    }, [name]);

    const resetFilters = () => {
        setName("");
        setSort("");
        setOrder("asc");

    };

    return (
        <div className="products-filter">
            <InputField
                id="filter"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    debouncedSetNameRef.current(e.target.value);
                }}
                placeholder="Filter products by name..."
            />

            <SelectField
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                options={SORT_BY_LIST}
            />

            <SelectField
                id="order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                options={ORDER_BY_LIST}
            />

            <button onClick={resetFilters}>
                <MdRefresh />
            </button>
        </div>
    );
};

export default ProductsFilter;
