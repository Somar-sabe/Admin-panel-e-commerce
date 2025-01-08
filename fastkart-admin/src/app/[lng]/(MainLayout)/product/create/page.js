"use client";
import { useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    thumbnail: "",
    pCate: "",
    cate: "",
    price: "",
    productType: "",
    shortDes: {
      text: "",
      listItem: "",
    },
    description: {
      textDesc: {
        title: "",
        text: "",
      },
      listDesc: [
        { title: "", text: "" },
        { title: "", text: "" },
        { title: "", text: "" },
        { title: "", text: "" },
        { title: "", text: "" },
      ],
    },
    addInfo: [],
  });

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;

    if (dataset.section) {
      setProduct((prev) => ({
        ...prev,
        [dataset.section]: {
          ...prev[dataset.section],
          [name]: value,
        },
      }));
    } else if (dataset.listItemIndex !== undefined) {
      const updatedListDesc = [...product.description.listDesc];
      updatedListDesc[dataset.listItemIndex][name] = value;
      setProduct((prev) => ({
        ...prev,
        description: { ...prev.description, listDesc: updatedListDesc },
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const result = await response.json();
    if (result.success) {
      alert("Product added successfully!");
    } else {
      alert("Failed to add product!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product ID</label>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Thumbnail (Image URL)</label>
        <input
          type="text"
          name="thumbnail"
          value={product.thumbnail}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Primary Category</label>
        <input
          type="text"
          name="pCate"
          value={product.pCate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Category</label>
        <input
          type="text"
          name="cate"
          value={product.cate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Product Type</label>
        <input
          type="text"
          name="productType"
          value={product.productType}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Short Description Text</label>
        <textarea
          name="text"
          value={product.shortDes.text}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Short Description List Items</label>
        <textarea
          name="listItem"
          data-section="shortDes"
          value={product.shortDes.listItem}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Product Description Title</label>
        <input
          type="text"
          name="title"
          data-section="description.textDesc"
          value={product.description.textDesc.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Product Description Text</label>
        <textarea
          name="text"
          data-section="description.textDesc"
          value={product.description.textDesc.text}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>List Description Items</label>
        {product.description.listDesc.map((item, index) => (
          <div key={index}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              data-list-item-index={index}
              value={item.title}
              onChange={handleChange}
            />
            <label>Text</label>
            <input
              type="text"
              name="text"
              data-list-item-index={index}
              value={item.text}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div>
        <label>Additional Information</label>
        <textarea
          name="addInfo"
          value={product.addInfo}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
