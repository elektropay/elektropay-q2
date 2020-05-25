import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, FormGroup, Label, Alert } from "reactstrap";

//Import Containers
import SectionTitle from "../../components/Shared/section-title";

//Import Images
import customer from "../../images/customer/customer.png";

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticketVisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ticketVisible : true})
    }  

    render() {
        console.log(this.state.ticketVisible)
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60">

            {/* section title */}
            <SectionTitle title="Submit A Ticket" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                <Row className="align-items-center">
                    <Col lg="6" md="5" xs="12" className="mt-4 pt-2">
                        <img src={customer} data-aos="fade-up" data-aos-duration="1400" className="img-fluid" alt=""/>
                    </Col>

                    <Col lg="6" md="7" xs="12" className="mt-4 pt-2">
                        <Alert color="info" isOpen={this.state.ticketVisible} toggle={()=>{ this.setState({ticketVisible : !this.state.ticketVisible}) }}>
                            Ticket details send successfully.
                        </Alert>
                        <Form onSubmit={this.handleSubmit} className="rounded shadow p-4 ml-lg-4" data-aos="fade-up" data-aos-duration="1400">
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Your Name :</Label>
                                        <Input name="name" id="name" type="text" className="form-control" placeholder="First Name :" required/>
                                    </FormGroup>
                                </Col>

                                <Col md="6">
                                    <FormGroup>
                                        <Label>Your Email :</Label>
                                        <Input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required/>
                                    </FormGroup> 
                                </Col> 

                                <Col md="12">
                                    <FormGroup>
                                        <Label>Reasons / Catagories :</Label>
                                        <select className="form-control custom-select" id="Sortbylist-Shop">
                                            <option>Catagories</option>
                                            <option>General Question</option>
                                            <option>Bugs</option>
                                            <option>Remote</option>
                                        </select>
                                    </FormGroup>
                                </Col>
                                
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Subject :</Label>
                                        <Input name="subject" id="subject" className="form-control" placeholder="Your subject :" required/>
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup>
                                        <Label>Url :</Label>
                                        <Input name="url" id="url" type="url" className="form-control" placeholder="Url :" required/>
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <FormGroup className="position-relative">
                                        <Label>Description :</Label>
                                        <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                        <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Describe your problem :"></textarea>
                                    </FormGroup>
                                </Col>
                                <Col md="12">
                                    <FormGroup>
                                        <div className="custom-control custom-checkbox">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                            <Label className="custom-control-label" for="customCheck1">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm="12">
                                    <Input type="submit" id="submit" name="send" className="btn btn-primary" value="Submit"/>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Ticket;