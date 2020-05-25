import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import bg1 from '../../images/hosting/bg1.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home bg-primary d-flex align-items-center" style={{ background: `url(${bg1}) center center` }} id="home">
                    <div className="bg-overlay"></div>
                            <Container>
                                <Row className="margin-top-100 justify-content-center">
                                    <Col lg={12}>
                                        <div className="title-heading text-center mt-5 position-relative" style={{ zIndex: 1 }}>
                                            <h1 className="heading title-dark text-white mb-3">Cloud Services & Web Hosting Solution</h1>
                                            <p className="para-desc para-dark mx-auto text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-success">Get Started</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Section;