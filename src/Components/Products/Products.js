import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Products = () => {

    const [posts, setPosts] = useState([]);
    const [Modelshow, setModelShow] = useState(false);

    const handleClose = () => setModelShow(false);
    const handleShow = () => setModelShow(true);

    const apiEndPoint = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        const getPosts = async () => {
            const { data: res } = await axios.get(apiEndPoint);
            setPosts(res);
        };
        getPosts();
    }, []);

    // const handleDelete = async (post) => {
    //     await axios.delete(apiEndPoint + "/" + post.id + post);
    //     setPosts(posts.filter((p) => p.id !== post.id));
    // };


    return (
        <div id='product'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col m-5'>
                        <h3 className='product-heading-txt'>Products</h3>
                        <div className="product-add-part">
                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input
                                type="text"
                                placeholder="Search here"
                                className="form-control w-75 me-3"
                            // value={search}
                            // onChange={(e) => setPosts(e.target.value.toLowerCase())}
                            />
                            <button className="btn btn-secondary" onClick={(e) => {
                                e.preventDefault()
                                handleShow()
                            }}>Add Product</button>
                        </div>

                        <div className='row product-content'>
                            {posts.map((product) => (
                                <div className='col-lg-4 col-md-6 col-sm-12 product-outer-content'>
                                    <div className='product-inner-content'>
                                        <h5 className='product-name'>{product.name}</h5>
                                        <p className='product-varient'>Total Varient : {product.username}</p>
                                        <p className='product-stock'>Stock : {product.address.suite}</p>
                                        <p className='product-desp'>Description : {product.company.catchPhrase}</p>
                                        <div className='product-btn-part'>
                                            <Link
                                                to="/varient"
                                                className="btn btn-outline-dark me-2"
                                            >
                                                Varient
                                            </Link>
                                            <button
                                                // onClick={() => handleUpdate(post)}
                                                className="btn btn-outline-dark me-2"
                                            >
                                                Update
                                            </button>
                                            <button
                                                // onClick={() => handleDelete(post)}
                                                className="btn btn-primary"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Modal show={Modelshow} onHide={handleClose} backdrop="static" keyboard={false}>
                                <Modal.Header>
                                    <Modal.Title>Add Product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='model-form-group'>
                                        <label className='model-label-txt'>Product Name</label>
                                        <input className='model-input-txt' type="text" />
                                    </div>
                                    <div className='d-flex'>
                                        <div className='model-form-group me-3'>
                                            <label className='model-label-txt'>Varient</label>
                                            <input className='model-input-txt' type="text" />
                                        </div>
                                        <div className='model-form-group'>
                                            <label className='model-label-txt'>Stock</label>
                                            <input className='model-input-txt' type="text" />
                                        </div>
                                    </div>
                                    <div className='model-form-group'>
                                        <label className='model-label-txt'>Description</label>
                                        <input className='model-input-txt' type="text" />
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className='model-close-btn' type='submit' onClick={handleClose}>Close</button>
                                    <button className='model-save-btn' type='submit' onClick={handleClose}>Save Changes</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
