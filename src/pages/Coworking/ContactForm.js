// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Alert, Form, FormGroup, Button, Input, Label } from 'reactstrap';

//import images
import bg04 from '../../images/coworking/bg04.jpg';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    render() {
        return (
            <React.Fragment>
                <section className="section" style={{ background: `url(${bg04}) center center` }}>
                <div className="bg-overlay"></div>
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="8" md="7">
                                <div className="section-title mr-lg-4">
                                    <h4 className="title title-dark text-light mb-4">We are Built for Business – Explore Us Today !</h4>
                                    <p className="text-light para-dark para-desc mb-0">Start working with <span className="text-success font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>

                            <Col lg="4" md="5" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="bg-white rounded p-4 shadow">
                                    <h5 className="text-capitalize text-center">Become A Member</h5>
                                        <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Data sended successfully.
                                        </Alert>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row className="mt-4">
                                            <Col lg="12">
                                                <FormGroup className="mb-3">
                                                    <Label>Your Name <span className="text-danger">*</span></Label>
                                                    <Input name="name" id="name3" type="text" className="form-control" placeholder="Name" required />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12">
                                                <FormGroup className="mb-3">
                                                    <Label>Your Email <span className="text-danger">*</span></Label>
                                                    <Input type="email" id="email3" className="form-control" placeholder="Email" name="email" required />
                                                </FormGroup>
                                            </Col>

                                            <Col md="12">
                                                <FormGroup>
                                                    <Label>Your Phone no. :<span className="text-danger">*</span></Label>
                                                    <Input name="number" id="number" type="number" className="form-control" placeholder="phone no. :" required />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12" className="mb-0">
                                                <Button color="primary" block>Started now</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default ContactForm;