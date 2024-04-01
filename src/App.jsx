import { createContext, useState } from 'react';
import productData from './assets/product.json';
import ProductCard from './components/productCard';

export const ProductDetailsContext = createContext();

const App = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const updateTotal = (quantity, amount) => {
    setTotalQuantity(quantity);
    setTotalAmount(amount);
  };

    const confirmButton = () => {
    if (totalQuantity > 0) {
      confirm(`The customer purchased ${totalQuantity} items for a total amount of $${totalAmount}. Proceed to pay?`);
    } else {
      alert("Please add items to the cart before proceeding to pay.");
    }
  };
  
  return (
    <div>
      <h1 className='text-center'>Shopping Cart
      <div className='text-center cart'>Total Quantity: {totalQuantity} , Total Amount: ${totalAmount}</div></h1>
      <div className="cards-container">
      <ProductDetailsContext.Provider value={productData.products}>
        <ProductCard updateTotal={updateTotal} />
      </ProductDetailsContext.Provider>
    </div>
    </div>
  );
}

export default App;
