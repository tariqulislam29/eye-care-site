import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, []);

    return (
        <div>

            <Row xs={1} md={3} className="g-4 m-5 ">
                {
                    doctors.map(item => <Doctor
                        key={item.key}
                        item={item}
                    >
                    </Doctor>)
                }


            </Row>
        </div>
    );
};

export default Doctors;