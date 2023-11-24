import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import "./index.css"


export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // console.log(name,address,pincode,phoneNumber)
    return (
        <>
            <div style={{margin:"0 auto" }}>
                <button
                    type="button"
                    onClick={openModal}
                    className="modal-button"
                >
                    Buy Now
                </button>
            </div>

            {isOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="modal-dialog">
                            <form className="modal-form" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="name"
                                        name="name"
                                        id="name"
                                        className="modal-input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        type="text"
                                        name="address"
                                        id="address"
                                        className="modal-input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
                                    <input
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        type="text"
                                        name="pincode"
                                        id="pincode"
                                        className="modal-input"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
                                    <input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        type="text"
                                        name="mobileNumber"
                                        id="mobileNumber"
                                        className="modal-input"
                                        required
                                    />
                                </div>
                                <button
                                    onClick={() => { buyNow(); closeModal(); }}
                                    type="button"
                                    className="modal-button-submit"
                                >
                                    Order Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}