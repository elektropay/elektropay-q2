// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// import images
import recoveryimg from '../../../images/user/recovery.png';

class PageRecoveryPassword extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>
                <section className="bg-home d-flex align-items-center">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <div className="mr-lg-5">   
                                    <img src={recoveryimg} className="img-fluid d-block mx-auto" alt=""/>
                                </div>
                            </Col>
                            <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="login-page bg-white shadow rounded p-4">
                                    <div className="text-center">
                                        <h4 className="mb-4">Recover Account</h4>  
                                    </div>
                                    <AvForm className="login-form">
                                        <Row>
                                            <Col lg="12">
                                            <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                <AvGroup className="form-group position-relative">
                                                    <Label for="email">Email address <span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <AvField type="text" className="form-control pl-5" name="email" id="email" placeholder="Enter Your Email Address" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter your email"},
                                                            pattern: {value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', errorMessage: 'E-Mail is not valid!'},
                                                        }}
                                                    />
                                                </AvGroup>
                                            </Col>
                                            <Col lg="12">
                                                <Button color="primary" className="w-100">Send</Button>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageRecoveryPassword;