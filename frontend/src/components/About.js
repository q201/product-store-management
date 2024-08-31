// import React from 'react'

// export default function About() {
//   return (
//     <div className='container-fluid p-5'>
//         <h1>Inventory Management System - MERN CRUD App</h1>
        
//     </div>
//   )
// }

import React from 'react';

export default function About() {
  return (
    <div className='container-fluid p-5'>
      <h1 className='mb-4 text-center'>Product Store - Inventory Management System</h1>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <p className='lead'>
            Welcome to Product Store, a comprehensive inventory management system designed to streamline the process of storing and managing your products. Built with the MERN stack (MongoDB, Express, React.js, and Node.js), this application allows you to easily manage product details such as name, price, and barcode with a simple and intuitive user interface.
          </p>
          <p>
            Whether you're managing a small business or handling a large inventory, Product Store provides the tools you need to efficiently keep track of your stock. With seamless CRUD (Create, Read, Update, Delete) operations, you can quickly add new products, view detailed information, update existing items, and remove products that are no longer in your inventory.
          </p>
          <p>
            Our system is built to scale with your needs, offering flexibility and reliability. We leverage the power of MongoDB for a robust database solution, Express and Node.js for a powerful backend, and React.js for a dynamic and responsive frontend experience.
          </p>
          <p className='text-center'>
            <strong>Start managing your inventory with ease today!</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
