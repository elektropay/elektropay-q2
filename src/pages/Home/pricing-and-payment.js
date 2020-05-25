import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Input, FormGroup, Label } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";

class PricingAndPayment extends Component {
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
                <Container className="mt-100 mt-60">
                    {/* Render Section Title */}
                    <SectionTitle title="Pricing & Add Payment Card" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                    <Row>
                        <Col lg="5" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Payment plan</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="price text-primary font-weight-bold display-4 mb-0">2</span>
                                        <span className="h4 mb-0 mt-2 text-primary">%</span>
                                        <span className="h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2"> Per Transection</span>
                                    </div>

                                    <ul className="feature list-inline">
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Transparent payouts</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Deposit tagging</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Control payout timing</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>24×7 support</li>
                                    </ul>

                                    <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg="7" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded bg-white border shadow">
                                <div className="bg-light p-4 text-center rounded-top">
                                    <h4 className="mb-0 text-primary">Add a new card</h4>
                                </div>

                                <div className="p-4">
                                <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                    Card Added successfully.
                                </Alert>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <Label>Name of card holder : </Label>
                                                    <Input name="name" id="name" type="text" className="form-control font-weight-bold" required placeholder="Name"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md="12">
                                                <FormGroup>
                                                    <Label>Card Number :</Label>
                                                    <Input type="number" min="0" autoComplete="off" id="cardnumber" className="form-control font-weight-bold" required placeholder="0000 0000 0000 0000"/>
                                                </FormGroup>                                                                               
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label>Expires End :</Label>
                                                    <Input type="number" min="0" autoComplete="off" id="exdate" className="form-control font-weight-bold" required placeholder="MM/YY"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <Label>CVV :</Label>
                                                    <Input type="number" min="0" autoComplete="off" id="cvv" className="form-control font-weight-bold" required placeholder="CVV"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Add Card"/>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default PricingAndPayment;