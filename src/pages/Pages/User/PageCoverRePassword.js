// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Label } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// import images
import user03 from '../../../images/user/03.jpg';

class PageCoverRePassword extends Component {

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
                                                    <h4 className="mb-4">Recover Account</h4>
                                                </div>
                                                <AvForm className="login-form">
                                                    <Row>
                                                        <Col lg="12">
                                                        <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                                            <AvGroup className="form-group position-relative">
                                                                <Label for="email">Email address <span className="text-danger">*</span></Label>
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
                                                            <Button color="primary" className="w-100">Send</Button>
                                                        </Col>
                                                    </Row>
                                                </AvForm>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={8} className="offset-lg-4 padding-less img order-1" style={{ backgroundImage: `url(${user03})` }} ></Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageCoverRePassword;
