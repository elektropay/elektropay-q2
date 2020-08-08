import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Import images
import img3 from '../../images/3.jpg';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Hero Start */}
                <section className="bg-half-170 d-table w-100" style={{ background: `url(${img3}) center center` }} id="home">
                            <Container>
                                <Row className="position-relative align-items-center pt-4">
                                    <Col lg={{size:7, offset:5}}>
                                        <div className="title-heading studio-home bg-white shadow mt-5">
                                            <h1 className="heading mb-3">Present Your Work With <span className="text-primary">Elektropay</span> Studio</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4">
                                                <Link to="/page-contact-one" className="btn btn-primary mt-2 mr-2"><i className="mdi mdi-phone"></i>Get Started</Link>
                                                <Link to="/documentation" className="btn btn-outline-primary mt-2 ml-1"><i className="mdi mdi-book-outline"></i>Documentation</Link>
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