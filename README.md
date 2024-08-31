Product Store Management
========================

Overview
--------

**Product Store Management** is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage products in an inventory system. Users can add, view, update, and delete products, with each product having a name, price, and barcode. The application features a responsive UI and interactive elements such as modals and toast notifications.

Features
--------

-   **Add New Products**: Insert new products into the inventory with a name, price, and barcode.
-   **View Products**: Browse the list of products stored in the inventory.
-   **Update Products**: Modify the details of existing products.
-   **Delete Products**: Remove products from the inventory with confirmation via modal dialogs.
-   **Responsive Design**: The application is fully responsive and works well on desktops, tablets, and mobile devices.
-   **User Notifications**: Toast notifications provide feedback to users about their actions.

Technologies Used
-----------------

-   **Frontend**:

    -   React.js: A JavaScript library for building user interfaces.
    -   Bootstrap: A CSS framework for responsive and modern web design.
    -   React Router: For navigation within the application.
    -   React Toastify: For toast notifications.
-   **Backend**:

    -   Node.js: A JavaScript runtime for building scalable network applications.
    -   Express.js: A web framework for Node.js.
    -   Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
-   **Database**:

    -   MongoDB: A NoSQL database for storing product information.

Installation
------------

### Prerequisites

-   Node.js (v14 or later)
-   MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Clone the Repository

bash

Copy code

`git clone https://github.com/q201/product-store-management.git
cd product-store-management`

### Backend Setup

1.  **Install Backend Dependencies:**

    bash

    Copy code

    `cd backend
    npm install`

2.  **Configure MongoDB:**

    -   Create a `.env` file in the `backend` directory.
    -   Add the following environment variable:

        bash

        Copy code

        `MONGO_URI=<Your MongoDB connection string>`

3.  **Run the Backend Server:**

    bash

    Copy code

    `npm start`

### Frontend Setup

1.  **Install Frontend Dependencies:**

    bash

    Copy code

    `cd frontend
    npm install`

2.  **Run the Frontend Server:**

    bash

    Copy code

    `npm start`

    The frontend server will start on `http://localhost:3000`.

Usage
-----

1.  Open your browser and go to `http://localhost:3000`.
2.  Navigate to the **Products** section to view, add, update, or delete products.
3.  Add a new product by clicking the **Add New Product** button.
4.  To delete a product, click the delete button, confirm your choice in the modal, and observe the toast notification.

Project Structure
-----------------

### Backend

-   **`/backend`**: Contains all the server-side code.
    -   **`server.js`**: The entry point for the Express server.
    -   **`/models`**: Mongoose models for defining the database schema.
    -   **`/routes`**: API routes for handling CRUD operations.

### Frontend

-   **`/frontend`**: Contains all the client-side code.
    -   **`src/App.js`**: The main entry point for the React application.
    -   **`/components`**: React components such as Home, About, and Products.
    -   **`/styles`**: Custom CSS and styling for the application.

Contributing
------------

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature-name`).
6.  Create a new Pull Request.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

Contact
-------

For any inquiries or feedback, feel free to contact me:

-   **Name**: Quasim
-   **GitHub**: [q201](https://github.com/q201)
