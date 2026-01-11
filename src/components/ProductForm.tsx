import { useState } from 'react'
import type { ProductInterface } from '../types/product.intarface.ts';
import type { FormEvent } from 'react';
import { PRODUCT_CATEGORIES } from '../data/mockData.ts';
import InputField from './InputField.tsx';
import SelectField from './SelectField.tsx';



interface ProductFormProps {
    onSubmit: (product: Partial<ProductInterface>) => void;
    product: Partial<ProductInterface>;
}
const ProductForm = ({ onSubmit, product }: ProductFormProps) => {
    const [name, setName] = useState(product.name as string);
    const [description, setDescription] = useState( product.description as string);
    const [price, setPrice] = useState(product.price as number);
    const [image, setImage] = useState(product.image as string);
    const [category, setCategory] = useState(product.category as string);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const returnedProduct: Partial<ProductInterface> = {
            name,
            description,
            price,
            image,
            category
        };

            if (product.id) {
                returnedProduct.id = product.id;
            }
        onSubmit(returnedProduct);
    }

  return (
      <form onSubmit={handleSubmit}>
          <InputField
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='e.g. "Lamp"' />
          
          <InputField
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}  
              placeholder='e.g. "A beautiful lamp"' />
          
          <InputField
              id='price'
              type='number'
              value={`${price}`}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder='e.g. 100' />
          
          <InputField
              id='image'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder='e.g. "https://image-url.com/lamp.jpg"' />

          <SelectField
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={PRODUCT_CATEGORIES} />

          <div className='form-group'>
              <button className='form-button' type='submit'>Submit</button>
            </div>  
    </form>
  )
}

export default ProductForm