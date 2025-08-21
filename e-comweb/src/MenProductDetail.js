// src/components/KidProductDetail.js
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import Dataproduct from './AllData/Data';
import Button from '@mui/material/Button';
import Header from './header';

const MenProductDetail = () => {
  // 1. Get the productId from the URL
  const { productId } = useParams();

  // 2. Access all products from the context
  const Data = useContext(Dataproduct);
  const all_products=Data.AllDataKids;

  // Handle loading state for products from context
  if (!all_products) {
    return <div>Loading product details...</div>;
  }

  // 3. Find the specific product.
  // IMPORTANT: Convert productId to a number because useParams returns a string,
  // and your product IDs are likely numbers.
  const product = all_products.find((e) => e.id === Number(productId));

  // 4. Handle case where product is not found (e.g., invalid ID in URL)
  if (!product) {
    return <div>Product not found.</div>;
  }

  // 5. Display product details
  return (
    <>
      <Header/>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '20px auto', border: '1px solid #eee', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>{product.name}</h2>
        <img 
          src={product.image}
          alt={product.name} 
          style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', marginBottom: '20px' }} 
        />
      
      <p><strong>Price:</strong> ${product.lowPrice}</p>
      <p><strong>Price:</strong> ${product.heightPrice}</p>
      <p><strong>Description:</strong> {product.name}</p>
      {/* Add more product details as needed */}
    </div>
    </>
    

  );
};

export default MenProductDetail;