import React, { useEffect, useState } from "react";

import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { Product } from "../../shared/Table/Table.mockdata";


interface InitialFormState {
  _id?: string
  name: string
  price: string
  stock: string
}


export interface ProductCreator {
    name: string
    price: number
    stock: number
}

interface ProductFormProps {
    form?:Product
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: Product) => void
}
function ProductForm({ form, onSubmit, onUpdate  }: ProductFormProps) {
  const initialFormState: InitialFormState = form ? 
  {
    _id: form._id,
    name: form.name,
    price: String(form.price),
    stock: String(form.stock),

  }
  
  :{
    name: '',
    price: '',
    stock: ''
}

  const [formState, setForm] = useState(initialFormState);

  useEffect(() => {
    setForm(initialFormState)
  },[form])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const updateProduct = (product: InitialFormState) =>{
    const productDto = {
      _id: String(product._id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    onUpdate && onUpdate(productDto)
  }

  const createProduct = (product: InitialFormState) =>{
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    onSubmit && onSubmit(productDto)
  }

  const handleFormSubmit = () => {
    formState._id ? updateProduct(formState)
    : createProduct(formState)
    
    setForm(initialFormState)
  }

  return (
    <Form title="Product form" onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        name="name"
        value={formState.name}
        label="Name"
        placeholder="E.g.: Cookie"
        required
      />

      <Input
        onChange={handleInputChange}
        name="price"
        value={formState.price}
        label="Price"
        type="number"
        step="0.01"
        min="0"
        placeholder="E.g.: $2.00"
        required
      />

      <Input
        onChange={handleInputChange}
        name="stock"
        value={formState.stock}
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 10"
        required
      />

      <Button>
        {
          formState._id ? 'Update' : 'Submit'
        }
      </Button>
    </Form>
  );
}

export default ProductForm;