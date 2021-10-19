import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DisplayService = () => {
    let { serviceKey } = useParams();
    const dServicekey = parseFloat(serviceKey);
    const [services, setServices] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);

    useEffect(() => {
        const findData = services.find(service => service.key === dServicekey)
        setDetails(findData);
    }, [services, dServicekey]);


    return (
        <div className="text-center">

            <img src={details?.img} alt="" className="w-50" />
            <br />
            <h2>{details?.name}</h2>
            <p>{details?.description}</p>
            <p>{details?.full_description}</p>




        </div >
    );
};

export default DisplayService;