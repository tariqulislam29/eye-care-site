import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);

    return (
        <div>
            <h4 className="mt-5 text-primary fw-bold text-center">OUR SERVICES</h4>
            <hr className="container" />
            <Row xs={1} md={3} className="g-4 m-5 ">
                {
                    services.map(item => <Service
                        key={item.key}
                        item={item}
                    >
                    </Service>)
                }


            </Row>
        </div>
    );
};

export default Services;