import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="about">

            <div className="about-image">
                <img src="https://images.unsplash.com/photo-1539036776273-021ec1d78bec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="about-details">
                <div>
                    <h5 className="text-primary ">About Us</h5>
                    <h2>We Are Caring For <br /> Your Eye Health Hospital</h2>
                    <p>To put our mission objectives into practice and contribute <br /> towards future growth and development; <br /> we believe –every brick has to add up and is equally important to build a building.</p>

                    <ul>
                        <li>Conducts eye health checkups</li>
                        <li>Treats minor illnesses</li>
                        <li>Best lasik treatment</li>
                        <li>Special Retina exam</li>
                    </ul>
                    <button className="bg-primary text-white">More About Us</button>
                </div>

            </div>

        </div>
    );
};

export default About;