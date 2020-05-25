import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Button, Badge } from "reactstrap";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-light d-table w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10">
                                <div className="title-heading text-center mt-5 pt-3">
                                    <div className="alert alert-light alert-pills" role="alert" data-aos="fade-up" data-aos-duration="1000">
                                        <Badge color="success" className="rounded mr-1">Support</Badge>
                                        <span className="content"> Customer Support 24/7</span>
                                    </div>
                                    <h1 className="heading mb-3" data-aos="fade-up" data-aos-duration="1400">How Can We Help You ?</h1>
                                    <p className="para-desc mx-auto text-muted" data-aos="fade-up" data-aos-duration="1800">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                    <div className="subcribe-form mt-4 pt-2" data-aos="fade-up" data-aos-duration="2200">
                                        <Form>
                                            <FormGroup className="mb-0">
                                                <input type="text" id="help" name="name" className="border bg-white rounded-pill shadow" required placeholder="Search the help center"/>
                                                <Button type="submit" color="primary" className="btn-pills">Search</Button>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container> 
                </section>
            </React.Fragment>
        );
    }
}

export default Section;