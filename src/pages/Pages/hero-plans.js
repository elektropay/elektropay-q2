import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import bg1 from '../../images/hosting/bg1.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center margin-top-100" style={{ background: `url(${bg1}) center center` }} id="plans">
                    <div className="bg-overlay-white"></div>
                            <Container>
                                <Row className="mt-1 justify-content-center">
                                    <Col lg={12}>
                                        <div className="title-heading text-center mt-0 position-relative" style={{ zIndex: 1 }}>
                                            <h1 className="heading title-dark text-black mb-3">Perfect Plans for Any Business Types</h1>
                                            <p className="para-desc para-dark mx-auto text-black">Start today with one of our perfect plans and select the best set of tools for your business type.</p>
                                            <div className="mt-5 pt-2">
                                               
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
