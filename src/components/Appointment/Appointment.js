import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Appointment.css'
const Appointment = () => {
    return (
        <div className="appointment">

            <div className="appointment-image">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="appointment-details">
                <div>
                    <h5 className="text-primary ">Book An Appointment</h5>
                    <p>Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.viverra maecenas accumsan lacus vel facilisis</p>

                    <div class="input-group">

                        <input type="text" aria-label="First name" className="form-control " placeholder="Name" />
                        <input type="text" aria-label="Phone number" className="form-control " placeholder="Phone Number" />
                    </div>
                    <div class="input-group">

                        <input type="text" aria-label="Subject" className="form-control" placeholder="Subject" />
                        <input type="text" aria-label="Appointment" className="form-control" placeholder="Appointment" />
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Something:</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button as="input" type="submit" value="Submit" />








                </div>

            </div>

        </div>
    );
};

export default Appointment;