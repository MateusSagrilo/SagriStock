import React, { useState } from "react";

import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

interface ProductFormProps {
    onSubmit: (product: ProductCreator) => void
}
function ProductForm({ onSubmit }: ProductFormProps) {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }



  const handleFormSubmit = () => {
    const productDto = {
        name: String(form.name),
        price: parseFloat(form.price),
        stock: Number(form.stock)
    }

    onSubmit(productDto)
    setForm(initialFormState)
  }

  return (
    <Form title="Product" onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        name="name"
        value={form.name}
        label="Name"
        placeholder="E.g.: Cookie"
        required
      />

      <Input
        onChange={handleInputChange}
        name="price"
        value={form.price}
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
        value={form.stock}
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 10"
        required
      />

      <Button>Submit</Button>
    </Form>
  );
}

export default ProductForm;