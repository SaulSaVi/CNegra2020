import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

// const ProductsList = () => {
//   return ( 
//     <React.Fragment>
//       <h2>Products</h2>
//       <Product
//         name="Sopa Nissin"
//         price={10.50} />
//     </React.Fragment>
//   );
// }
 
// export default ProductsList;

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4040/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [])

  return ( 
    <React.Fragment>
      <h2>Products</h2>
      { products.map(product => <Product key={product._id} name={product.name} price={product.price} />) }
    </React.Fragment>
  );
}
 
export default ProductsList;