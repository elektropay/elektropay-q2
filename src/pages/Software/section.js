import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import classic02 from "../../images/saas/classic02.png";

class Section extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-white d-table w-100">
                    <Container>
                        <Row className="align-items-center position-relative mt-5" style={{zIndex: "1"}}>
                            <Col lg="6" md="12">
                                <div className="title-heading mt-4 text-center text-lg-left">
                                    <h1 className="heading mb-3 text-dark text-hero">Monetize Your Commerce Channels</h1>
                                    <p className="lead text-muted">Elektropay is a commerce as service management platform that delivers innovative payment solutions for start-ups and enterprise businesses alike.</p>
                                    <div className="mt-4">
                                         <Link to="" className="btn btn-light mt-1 mr-2 mouse-down"> Request A Demo</Link>
                                      
  <Link to="" className="btn btn-outline-primary mt-1 mr-2 mouse-down"><i className="mdi mdi-download"></i> Get Started</Link>
                                     
                                             </div>
                                </div>
                            </Col>

                            <Col lg="6" md="12" className="mt-4 pt-2">
                                <div className="position-relative">
                                    <div className="software_hero">
                                        <img src={classic02} className="img-fluid d-block" alt=""/>
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
