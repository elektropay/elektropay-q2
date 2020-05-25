// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Label, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// import images
import loginImg from '../../../images/user/login.png';

class PageLogin extends Component {
    
    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>
                <section className="bg-home d-flex align-items-center">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <div className="mr-lg-5">   
                                    <img src={loginImg} className="img-fluid d-block mx-auto" alt=""/>
                                </div>
                            </Col>
                            <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="login-page bg-white shadow rounded p-4">
                                    <div className="text-center">
                                        <h4 className="mb-4">Login</h4>  
                                    </div>
                                    <AvForm className="login-form">
                                        <Row>
                                            <Col lg="12">
                                                <AvGroup className="form-group position-relative">
                                                    <Label for="email">Your Email <span className="text-danger">*</span></Label>
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
                                                <AvGroup className="form-group position-relative">
                                                    <Label for="password">Password<span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-key ml-3 icons"></i>
                                                    <AvField type="text" className="form-control pl-5" name="password" id="password" placeholder="Enter password" required
                                                        errorMessage=""
                                                        validate={{
                                                            required: {value: true, errorMessage: "Please enter Password"},
                                                            minLength: {value: 6, errorMessage: 'Your password must be between 6 and 8 characters'},
                                                            maxLength: {value: 16, errorMessage: 'Your password must be between 6 and 8 characters'}
                                                        }}
                                                    />
                                                </AvGroup>
                                            </Col>

                                            <Col lg="12">
                                                <p className="float-right forgot-pass"><Link to="page-recovery-password.html" className="text-dark font-weight-bold">Forgot password ?</Link></p>
                                                <FormGroup>
                                                    <div className="custom-control custom-checkbox">
                                                        <Input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                        <Label className="custom-control-label" for="customCheck1">Remember me</Label>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="12" className="mb-0">
                                                <Button className="btn btn-primary w-100">Sign in</Button>
                                            </Col>
                                            <Col lg="12" className="mt-4 text-center">
                                                <h6>Or Login With</h6>
                                                <ul className="list-unstyled social-icon mb-0 mt-3">
                                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google"></i></Link></li>
                                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-github-circle" title="Github"></i></Link></li>
                                                </ul>
                                            </Col>
                                            <Col xs="12" className="text-center">
                                                <p className="mb-0 mt-3"><small className="text-dark mr-2">Don't have an account ?</small> <Link to="/page-signup" className="text-dark font-weight-bold">Sign Up</Link></p>
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
export default PageLogin;