import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {

    useEffect(() => {
        getProducts();
    }, []);

    const [productData, setProductData] = useState([]);
    const [deleteId, setDeleteId] = useState(null);

    const getProducts = async () => {
        try {
            const res = await fetch("http://localhost:3001/products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();

            if (res.status === 201) {
                console.log("Data Retrieved.");
                setProductData(data);
            } else {
                console.log("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        const response = await fetch(`http://localhost:3001/deleteproduct/${deleteId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await response.json();

        if (response.status === 422 || !deletedata) {
            console.log("Error");
        } else {
            console.log("Product deleted");
            toast.success("Item deleted successfully!", {
                progressClassName: 'toastProgress'
            });
            getProducts();
        }
        setDeleteId(null);
        closeModal();
    };

    const closeModal = () => {
        document.getElementById('deleteModal').style.display = 'none';
    };

    const openModal = (id) => {
        setDeleteId(id);
        document.getElementById('deleteModal').style.display = 'block';
    };

    return (
        <>
            <div className='container-fluid p-5'>
                <h1>Products Store</h1>
                <div className='add_button'>
                    <NavLink to="/insertproduct" className='btn btn-primary fs-5'> + Add New Product</NavLink>
                </div>
                <div className="overflow-auto mt-3" style={{ maxHeight: "38rem" }}>
                    <table className="table table-striped table-hover mt-3 fs-5"  >
                        <thead>
                            <tr className="tr_color">
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Barcode</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productData.map((element, id) => (
                                    <tr key={id}>
                                        <th scope="row">{id + 1}</th>
                                        <td>{element.ProductName}</td>
                                        <td>{element.ProductPrice}</td>
                                        <td>{element.ProductBarcode}</td>
                                        <td><NavLink to={`/updateproduct/${element._id}`} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></NavLink></td>
                                        <td><button className="btn btn-danger" onClick={() => openModal(element._id)}><i className="fa-solid fa-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <div id="deleteModal" className="modal" tabIndex="-1" role="dialog" style={{ display: 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Delete</h5>
                            <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Do you really want to delete this item?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>No</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer 
                position="bottom-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick 
                rtl={false} 
                 
                 
                 
                />
        </>
    );
}
