import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel  >
                <Carousel.Item >
                    <img
                        className="d-block res-image "
                        src="https://images.unsplash.com/photo-1628719749669-44015c344fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Professional Eye Care</h3>
                        <p>"Amazing hospital with great, caring staff" </p>
                        <button>Learn More &#8594;</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  res-image"
                        src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3> Eye Specialist Doctors</h3>
                        <p>"This hospital has neat & clean atmosphere."</p>
                        <button>Learn More &#8594;</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block res-image"
                        src="https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> We only give best care for your eyes</h3>
                        <p>"excellent eye hospitals in Bangladesh."</p>
                        <button>Learn More &#8594;</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;