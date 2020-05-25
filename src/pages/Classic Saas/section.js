import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import img from "../../images/saas/classic01.png"

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100 overflow-hidden" id="home">
                    <Container>
                        <Row className="align-items-center pt-5">
                            <Col lg="7" md="6">
                                <div className="title-heading">
                                    <h1 className="heading mb-3">We help to build <br/> the project</h1>
                                    <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link to="https://1.envato.market/4n73n" target="_blank" className="btn btn-primary">Buy Now<span className="badge badge-danger rounded ml-2">v2.0</span></Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="5" md="6" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="classic-saas-image position-relative">
                                    <div className="bg-saas-shape position-relative">
                                        <img src={img} className="mx-auto d-block" alt=""/>
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