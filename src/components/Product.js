import React from "react";
import "./css/Product.css";

function Product({ item }) {
  const {
    productImg,
    productName,
    productDescription,
    productRating,
    productPrice,
  } = item;
  return (
    <div className="product">
      <div className="product_img">
        <img src={productImg} alt="Product image" className="image" />
      </div>
      <div className="product_details">
        <p className="product_name">{productName}</p>
        <span className="product_rating">⭐⭐⭐⭐⭐</span>

        <p className="product_price">{productPrice}</p>
        <p className="product_description">{productDescription}</p>
        <button className="button">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
