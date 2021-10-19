import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (

        <div>
            <div className="footer ">




                <div>
                    <h3 className="text-primary" >Contact</h3>
                    <h5>Phone</h5>
                    <p>882-569-756</p>
                    <h5>Email</h5>
                    <p>eyecare@gmail.com</p>
                    <h5>Address</h5>
                    <p>123,westeen Road, Bangladesh</p>
                </div>

                <div className="explore">
                    <h3 className="text-primary">Explore</h3>
                    <Link to='/Services' className="p-3 text-light footer-link" >Services</Link>
                    <br />
                    <Link to='/appointment' className="p-3 text-light footer-link">Appointment</Link>
                    <br />
                    <Link to='/doctors' className="p-3 text-light footer-link">Doctors</Link>
                    <br />
                    <Link to='/shop' className="p-3 text-light footer-link">Glass Shop</Link>

                </div>

                <div>

                    <h3 className="text-primary">Support</h3>
                    <h5>Online Support</h5>
                    <h5>Free Consultancy</h5>
                    <h5>24/7 Service</h5>
                    <h5>Make Call</h5>
                    <h5>Contact Support</h5>
                    <h5>Opening Hours</h5>

                </div>


            </div>
            <p className="text-center bg-light"> Copyright &copy;2021 Eye Care. Designed By Mohammad Tariqul Islam</p>
        </div>

    );
};

export default Footer;