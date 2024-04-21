

import { increaseQuantity, decreaseQuantity } from './store/store';
import "./productCard.css";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const Increasequantity = () => {
    dispatch(increaseQuantity({ productId: product.id }));
  };

  const DecreaseQuantity = () => {
    dispatch(decreaseQuantity({ productId: product.id }));
  };

  return (
    <div className="cards">
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
              onClick={Increasequantity}
            >
              +
            </button>
            <input
              type="number"
              value={product.quantity}
              min={0}
              max={product.stock}
              className="Input"
              readOnly
            />
            <button
              className="btn decrement"
              onClick={DecreaseQuantity}
            >
              -
            </button>
            
          </div>
        </div>
   

    </div>
  );
};

export default ProductCard;
