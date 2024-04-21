
import ProductCard from './components/productCard';
import { Provider,useSelector } from 'react-redux';
import store from './components/store/store';


const App = () => {


  return (
    <Provider store={store}>
      <div className="container">
        <Headings />
        <ProductList />
      </div>
    </Provider>
  );
};

const ProductList = () => {
  const products = useSelector(state => state.products.products);

  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

const Headings = () => {
  const totalQuantity = useSelector(state => state.products.totalQuantity);
  const totalAmount = useSelector(state => state.products.totalAmount);

  
  const confirmButton = () => {
    if (totalQuantity > 0) {
      confirm(`The customer purchased ${totalQuantity} items for a total amount of $${totalAmount}. Proceed to pay?`);
    } else {
      alert("Please add items to the cart before proceeding to pay.");
    }
  };

  return (
    <div>
    <div className="Headings">
    <h1 className='text-center'>Shopping Cart
    <div className='text-center cart'>Total Quantity: {totalQuantity} , Total Amount: ${totalAmount}</div></h1>
     <button onClick={confirmButton} className="Paybtn">Proceed To Pay</button>
   </div>
    </div>
  );
};

export default App;
