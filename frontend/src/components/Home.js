// import React from 'react'

// export default function Home() {
//   return (
//     <div className='container-fluid p-5'>
//         <h2>Go to Products Section.</h2>
//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container-fluid p-5 text-center bg-light'>
      <h1 className='display-4 mb-4'>Welcome to Product Store</h1>
      <p className='lead mb-4'>
        Your one-stop solution for managing products efficiently.
      </p>
      <p>
        Easily add, view, update, and delete product details including names, prices, and barcodes. 
        Navigate to the products section to manage your inventory seamlessly.
      </p>
      <Link to='/products' className='btn btn-primary btn-lg mt-3'>
        Go to Products Section
      </Link>
    </div>
  );
}
