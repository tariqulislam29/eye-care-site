import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';
const Faq = () => {
    return (
        <div>
            <div className="faq">

                <div className="faq-image">
                    <img src="https://templates.hibootstrap.com/opnix/default/assets/images/faq-main.png" alt="" />
                </div>
                <div className="faq-details">
                    <div>
                        <h2 className="text-center">FAQ</h2>
                        <hr />
                        <Accordion defaultActiveKey="0" className="w-100 ">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is Cataract?</Accordion.Header>
                                <Accordion.Body>
                                    A cataract is a clouding of the eyes natural crystalline lens that may affect one or both eyes. When left untreated, cataracts can progress over time and lead to severe loss of vision.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What are the problems associated with Cataract?</Accordion.Header>
                                <Accordion.Body>
                                    There is a painless progressive diminution of vision. Initially some help is achieved by changing the spectacle number, but in advance cases the spectacles also prove to be ineffective.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What is glaucoma?</Accordion.Header>
                                <Accordion.Body>
                                    Glaucoma is a group of eye diseases involving progressive damage to the optic nerve accompanied by a build up of pressure inside the eye. It is a sight threatening and often symptom less diseases and has a strong family history. If left untreated, glaucoma can result in significant vision loss and even blindness.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is retina?</Accordion.Header>
                                <Accordion.Body>
                                    The retina is a very thin layer of tissue that lines the inner part of the back of the eye and functions like the film of a camera. It captures light like camera film and then transmits that image to the brain so that it can be processed into a visual image. The macula is the most specialized area of this retina tissue and allows us to see detailed, central vision. This is the vision that allows us to read, watch television, and recognize faces.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is diabetic eye disease?</Accordion.Header>
                                <Accordion.Body>
                                    Diabetic eye disease refers to a group of eye problems that people with diabetes may face as a complication of this disease. All can cause severe vision loss or even blindness. Diabetic eye disease includes:

                                    Diabetic retinopathy: Damage to the blood vessels in the retina.
                                    Cataract: Clouding of the lens of the eye.
                                    Glaucoma: Increase in fluid pressure inside the eye that leads to optic nerve damage and loss of vision.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What is macular degeneration?</Accordion.Header>
                                <Accordion.Body>
                                    Macula is the most sensitive part of the retina and its degration results in loss of vision. It may present as a decrease in vision, distortion of objects or impaired colour vision. There are two types of macualr degeneration: wet and dry.Regular eye exams are recommended to detect macular degeneration the early stage.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Can I have LASIK surgery if I have glaucoma?</Accordion.Header>
                                <Accordion.Body>
                                    People being treated for glaucoma typically are not good candidates for LASIK. This is because a suction device is used on the eye during the creation of the corneal flap during LASIK surgery, and this briefly causes a significant increase in IOP.
                                </Accordion.Body>
                            </Accordion.Item>





                        </Accordion>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Faq;