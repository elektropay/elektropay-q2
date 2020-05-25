// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Label, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// import images
import user02 from '../../../images/user/02.jpg';

class PageCoverSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>
                <section className="cover-user bg-white">
                    <Container fluid>
                        <Row className="position-relative">
                            <Col lg={4} className="cover-my-30 order-2">
                                <div className="cover-user-img d-flex align-items-center">
                                    <Row>
                                        <Col>
                                            <div className="login_page">
                                                <div className="text-center">
                                                    <h4 className="mb-4">Signup</h4>
                                                </div>
                                                <AvForm className="login-form">
                                                    <Row>
                                                    <Col md="6">
                                                            <AvGroup className="form-group position-relative">
                                                                <Label for="firstname">First name <span className="text-danger">*</span></Label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <AvField type="text" className="form-control pl-5" name="firstname" id="firstname" placeholder="First Name" required
                                                                    errorMessage=""
                                                                    validate={{
                                                                        required: {value: true, errorMessage: "Please enter first name"},
                                                                    }}
                                                                />
                                                            </AvGroup>
                                                        </Col>
                                                        <Col md="6">
                                                            <AvGroup className="form-group position-relative">
                                                                <Label for="lastname">Last name <span className="text-danger">*</span></Label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <AvField type="text" className="form-control pl-5" name="lastname" id="lastname" placeholder="Last Name" required
                                                                    errorMessage=""
                                                                    validate={{
                                                                        required: {value: true, errorMessage: "Please enter first name"},
                                                                    }}
                                                                />
                                                            </AvGroup>
                                                        </Col>
                                                        <Col lg="12">
                                                            <AvGroup className="form-group position-relative">
                                                                <Label for="email">Your Email <span className="text-danger">*</span></Label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <AvField type="text" className="form-control pl-5" name="email" id="email" placeholder="Enter Email" required
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
                                                                <AvField type="password" className="form-control pl-5" name="password" id="password" placeholder="Enter password" required
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
                                                            <AvGroup className="form-group position-relative">
                                                                <Label for="confirmpassword">Confirm Password<span className="text-danger">*</span></Label>
                                                                <i className="mdi mdi-key ml-3 icons"></i>
                                                                <AvField type="password" className="form-control pl-5" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required
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
                                                            <FormGroup>
                                                                <div className="custom-control custom-checkbox">
                                                                    <Input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                                    <Label className="custom-control-label" for="customCheck1">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                                                </div>
                                                            </FormGroup>
                                                        </Col>
                                                        <Col lg="12" className="mb-0">
                                                            <Button className="btn btn-primary w-100">Register</Button>
                                                        </Col>
                                                        <Col lg="12" className="mt-4 text-center">
                                                            <h6>Or Signup With</h6>
                                                            <ul className="list-unstyled social-icon mb-0 mt-3">
                                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google"></i></Link></li>
                                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-github-circle" title="Github"></i></Link></li>
                                                            </ul>
                                                        </Col>
                                                        <Col xs="12" className="text-center">
                                                            <p className="mb-0 mt-3"><small className="text-dark mr-2">Already have an account ?</small> <Link to="/page-login" className="text-dark font-weight-bold">Sign Up</Link></p>
                                                        </Col>
                                                    </Row>
                                                </AvForm>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={8} className="offset-lg-4 padding-less img order-1" style={{ backgroundImage: `url(${user02})` }} ></Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageCoverSignup;
