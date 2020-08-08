import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

// Import images
import homeImage from "../../images/app/home.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={6} md={7} >
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Manage all of you stuff using <span className="text-primary">Elektropay.</span> app</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4">
                                                <Link to="#" className="btn btn-primary mt-2 mr-2"><i className="mdi mdi-apple"></i> App Store</Link>
                                                <Link to="#" className="btn btn-outline-primary mt-2"><i className="mdi mdi-google-play"></i> Play Store</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                    <div className="text-md-right text-center">
                                        <img src={homeImage} className="img-fluid" alt="" />
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