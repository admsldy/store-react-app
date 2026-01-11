import type { ProductInterface } from "../types/product.intarface";

export interface SelectOption {
  value: string;
  text: string;
}

export const PRODUCT_CATEGORIES: SelectOption[] = [
  { value: 'furniture', text: 'Furniture' },
  { value: 'lamps', text: 'Lamps' },
  { value: 'decor', text: 'Decor' },
  { value: 'kitchen', text: 'Kitchen' }
];

export const INITIAL_PRODUCT: ProductInterface = {
  id: '0',
  name: '',
  description: '',
  price: undefined as unknown as number,
  image: '',
  category: 'furniture'
};


export const SORT_BY_LIST: SelectOption[] = [
  { value: '', text: 'Default order' },
  { value: 'name', text: 'Name' },
  { value: 'price', text: 'Price' },
  { value: 'category', text: 'Category' }
];



export const ORDER_BY_LIST: SelectOption[] = [
  { value: 'asc', text: 'Ascending' },
  { value: 'desc', text: 'Descending' }
];