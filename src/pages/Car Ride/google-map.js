import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


class GoogleMap extends Component {

    render() {
        return (
            <React.Fragment>
                <Container>
                    <div className="bg-light rounded position-relative overflow-hidden">
                        <Row className="align-items-center">
                            <Col md={{size:6, order:1}} xs={{order:2}} className="mt-2 mt-sm-0">
                                <div className="section-title py-lg-5 pl-lg-5 p-4">
                                    <h2 className="mb-4 font-weight-normal">Request a ride now</h2>
                                    <Form>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Choose Starting Point</Label>
                                                    <i className="mdi mdi-map-marker text-success ml-3 icons"></i>
                                                    <Input name="name" id="location1" type="text" className="form-control pl-5" placeholder="Choose starting point..."/>
                                                </FormGroup>
                                            </Col>

                                            <Col md="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Choose Your Destination</Label>
                                                    <i className="mdi mdi-map-marker text-danger ml-3 icons"></i>
                                                    <Input name="name" id="location2" type="text" className="form-control pl-5" placeholder="Choose your destination..."/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Link to="" className="btn btn-primary">Request Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </Form>
                                </div>
                            </Col>

                            <Col md={{size:6, order:2}} xs={{order:1}}>
                                <div className="map">
                                <iframe title="uniqueTitle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} allowFullScreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

export default GoogleMap