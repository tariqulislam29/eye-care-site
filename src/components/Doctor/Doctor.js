import React from 'react';
import { Card, Col } from 'react-bootstrap';

import './Doctor.css'
const Doctor = (props) => {
    const { name, img, specialist } = props.item;
    return (
        <div>
            <Col >

                <Card className="card card-design ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body className="text-center" >
                        <Card.Title className="card-title">{name}</Card.Title>
                        <p>{specialist}</p>
                    </Card.Body>



                </Card>
            </Col>
        </div>
    );
};

export default Doctor;