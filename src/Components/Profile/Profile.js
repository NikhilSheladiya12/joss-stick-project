import React, { useState } from 'react';
import './Profile.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Profile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div id="profile" className='profile-section'>
            <div className='container-fluid'>
                <div className='row main'>
                    <div className='col'>
                        <div>
                            <h3 className='profile-heading-txt'>Profile</h3>
                        </div>
                        <form className='form-information'>
                            <div className='row form-group'>
                                <label className='profile-label-txt'>First Name</label><br />
                                <div className='col-lg-10 col-md-9 col-8 pe-0'>
                                    <input type="text" className='profile-input-txt' />
                                </div>
                                <div className='col-lg-2 col-md-3 col-4'>
                                    <button type='submit' className='profile-update-btn' onClick={(e) => {
                                        e.preventDefault()
                                        handleShow()
                                    }} >Update</button>
                                </div>
                            </div>
                            <div className='row form-group'>
                                <label className='profile-label-txt'>County</label><br />
                                <div className='col-lg-10 col-md-9 col-8 pe-0'>
                                    <input type="text" className='profile-input-txt' />
                                </div>
                                <div className='col-lg-2 col-md-3 col-4'>
                                    <button type='submit' className='profile-update-btn'>Update</button>
                                </div>
                            </div>
                            <div className='row form-group'>
                                <label className='profile-label-txt'>District</label><br />
                                <div className='col-lg-10 col-md-9 col-8 pe-0'>
                                    <input type="text" className='profile-input-txt' />
                                </div>
                                <div className='col-lg-2 col-md-3 col-4'>
                                    <button type='submit' className='profile-update-btn'>Update</button>
                                </div>
                            </div>
                            <div className='row form-group'>
                                <label className='profile-label-txt'>Pincode</label><br />
                                <div className='col-lg-10 col-md-9 col-8 pe-0'>
                                    <input type="text" className='profile-input-txt' />
                                </div>
                                <div className='col-lg-2 col-md-3 col-4'>
                                    <button type='submit' className='profile-update-btn'>Update
                                    </button>
                                </div>
                            </div>
                            <div className='row form-group'>
                                <label className='profile-label-txt'>Mobile Number</label><br />
                                <div className='col-lg-10 col-md-9 col-8 pe-0'>
                                    <input type="text" className='profile-input-txt' />
                                </div>
                                <div className='col-lg-2 col-md-3 col-4'>
                                    <button type='submit' className='profile-update-btn'>Update</button>
                                </div>
                            </div>
                            <button className='profile-save-btn'>Save</button>
                        </form>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header>
                                <Modal.Title>Update Profile</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='model-form-group'>
                                    <label className='model-label-txt'>Your First Name</label>
                                    <input className='model-input-txt' value="name" type="text" />
                                </div>
                                <div className='model-form-group'>
                                    <label className='model-label-txt'>Update First Name</label>
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
    )
}

export default Profile;
