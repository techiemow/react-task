
import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://images.livemint.com/img/2020/02/01/1600x900/iPhone_2_1578467223331_1580553395967.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ],
        "quantity": 0,
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqefkOFXIsNoWwmhrjs07TV9iFuqpNRGmSg&usqp=CAU",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ],
        "quantity": 0,
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://www.jiomart.com/images/product/original/rvldsj6qb1/gadgetswrap-printed-vinyl-skin-sticker-for-samsung-galaxy-note-9-planets-universe-6-product-images-orvldsj6qb1-p603876032-0-202308141701.jpg?im=Resize=(1000,1000)"
        ],
       "quantity": 0,
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSwhTr1yg6noJw3puBiY_tWvUkC8QurQtKA&usqp=CAU",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ],
        "quantity": 0,
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HIV6fftc8sFQibSlLhSPrNqZhO-OSc0Kww",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ],
        "quantity": 0,
    }
],
  
  totalQuantity: 0,
  totalAmount: 0
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increaseQuantity(state, action) {
      const { productId } = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product && product.stock > product.quantity) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += product.price;
      }
    },
    decreaseQuantity(state, action) {
      const { productId } = action.payload;
      const product = state.products.find(product => product.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= product.price;
      }
    }
  }
});

export const { increaseQuantity, decreaseQuantity } = productSlice.actions;

export default configureStore({
  reducer: {
    products: productSlice.reducer
  }
});