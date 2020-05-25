import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class CTA extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                
                                    <div className="mt-5">
                                        <Link to="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary">Get Started <span className="badge badge-danger rounded ml-2">v2.0</span></Link>
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

export default CTA;