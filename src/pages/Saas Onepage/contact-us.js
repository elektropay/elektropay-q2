import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert, Form, Label, Input, FormGroup } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }
    render() {
        return (
            <React.Fragment>
            <Container>
                {/* section title */}
                <SectionTitle title="Get In Touch !" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                <Row className="align-items-center">
                    <Col lg="5" md="6" className="mt-4 pt-2 order-2 order-md-1">
                        <div className="custom-form bg-white p-4 rounded shadow" data-aos="fade-up" data-aos-duration="1000">
                            <div id="message"></div>
                            <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                Data sended successfully.
                            </Alert>
                            <Form method="post" onSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                                <Row>
                                    <Col lg="6">
                                        <FormGroup className="position-relative">
                                            <Label>Your Name <span className="text-danger">*</span></Label>
                                            <i className="mdi mdi-account ml-3 icons"></i>
                                            <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :"/>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        <FormGroup className="position-relative">
                                            <Label>Your Email <span className="text-danger">*</span></Label>
                                            <i className="mdi mdi-email ml-3 icons"></i>
                                            <Input name="email" id="email2" type="email" className="form-control pl-5" placeholder="Your email :"/>
                                        </FormGroup> 
                                    </Col>
                                    <Col lg="12">
                                        <FormGroup className="position-relative">
                                            <Label>Comments</Label>
                                            <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                            <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="12" className="text-center">
                                        <Input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message"/>
                                        <div id="simple-msg"></div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>

                    <Col lg="7" md="6" className="mt-4 pt-2 order-1 order-md-2">
                        <div className="title-heading ml-lg-4">
                            <h4 className="mb-4" data-aos="fade-up" data-aos-duration="1000">Contact Details</h4>
                            <p className="text-muted" data-aos="fade-up" data-aos-duration="1400">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <div className="contact-detail mt-3" data-aos="fade-up" data-aos-duration="1800">
                                <div className="icon mt-3 float-left">
                                    <i className="mdi mdi-email-variant text-muted mdi-36px mr-3"></i>
                                </div>
                                <div className="content mt-3 overflow-hidden d-block">
                                    <h6 className="mb-0">Email</h6>
                                    <Link to="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                                </div>  
                            </div>

                            <div className="contact-detail mt-3" data-aos="fade-up" data-aos-duration="2200">
                                <div className="icon mt-3 float-left">
                                    <i className="mdi mdi-phone text-muted mdi-36px mr-3"></i>
                                </div>
                                <div className="content mt-3 overflow-hidden d-block">
                                    <h6 className="mb-0">Phone</h6>
                                    <Link to="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                                </div>  
                            </div>

                            <div className="contact-detail mt-3" data-aos="fade-up" data-aos-duration="2600">
                                <div className="icon mt-3 float-left">
                                    <i className="mdi mdi-map-marker-outline text-muted mdi-36px mr-3"></i>
                                </div>
                                <div className="content mt-3 overflow-hidden d-block">
                                    <h6 className="mb-0">Location</h6>
                                    <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon text-primary">View on Google map</Link>
                                </div>  
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default ContactUs;