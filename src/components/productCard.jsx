
import { useContext, useState, useEffect } from "react";
import { ProductDetailsContext } from "../App";
import "./productCard.css";

const ProductCard = ({ updateTotal }) => {
  const products = useContext(ProductDetailsContext);

  // State to manage quantity for each product
  const [quantities, setQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, (prevQuantities[productId] || 0) - 1),
    }));
  };

  const handleIncrement = (productId, maxStock) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.min(maxStock, (prevQuantities[productId] || 0) + 1),
    }));
  };

  useEffect(() => {
    // Calculate total quantity and amount
    let totalQuantity = 0;
    let totalAmount = 0;

    products.forEach((product) => {
      const quantity = quantities[product.id] || 0;
      totalQuantity += quantity;
      totalAmount += quantity * product.price;
    });

    // Update total quantity and amount
    setTotalQuantity(totalQuantity);
    setTotalAmount(totalAmount);
    updateTotal(totalQuantity, totalAmount);
  }, [products, quantities, updateTotal]);

  return (
    <div className="cards">
      
      {products.map((product) => (
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <img src={product.images[0]} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="Description">{product.description}</p>
            <p className="price">${product.price}.00</p>
            <p className="stockStatus">Stock Status : {product.stock} available </p>
            <a href="#" className="text-center">
              Back to top
            </a>
            <p className="rating">
              <strong>{product.rating}</strong> out of 5 stars
            </p>
          </div>
          <div className="priceAndButton">
            <button
              className="btn increment"
              onClick={() => handleIncrement(product.id, product.stock)}
            >
              +
            </button>
            <input
              type="number"
              value={quantities[product.id] || 0}
              min={0}
              max={product.stock}
              className="Input"
              readOnly
            />
            <button
              className="btn decrement"
              onClick={() => handleDecrement(product.id)}
            >
              -
            </button>
            
          </div>
        </div>
      ))}

    </div>
  );
};

export default ProductCard;
