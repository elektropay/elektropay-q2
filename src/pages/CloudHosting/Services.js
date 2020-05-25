// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import computer from '../../images/icon/computer.svg';
import cloud from '../../images/icon/cloud.svg';
import server from '../../images/icon/server.svg';
import big from '../../images/icon/big.svg';
import database from '../../images/icon/database.svg';
import refresh from '../../images/icon/refresh.svg';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { image : computer, title : "Domain Name", desc : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.", link : "#" },
                { image : cloud, title : "Cloud Hosting", desc : "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.", link : "#" },
                { image : server, title : "Shared Hosting", desc : "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.", link : "#" },
                { image : big, title : "VPS Hosting", desc : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.", link : "#" },
                { image : database, title : "Reseller Hosting", desc : "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.", link : "#" },
                { image : refresh, title : "Web Hosting", desc : "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.", link : "#" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container className="pb-lg-4 mb-md-5 mb-4">
                        <Row className="align-items-center mb-4">
                            <Col lg="9" md="8" className="text-sm-left">
                                <div className="section-title">
                                    <h4 className="title mb-4">Cloud Hosting Services</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>

                            <Col lg="3" md="4" className="mt-4 mt-sm-0 text-sm-right pt-2 pt-sm-0">
                                <Link to="#" className="btn btn-outline-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>

                        <Row>
                            {
                                this.state.features.map((feature, key) =>
                                    <Col lg="4" md="6" xs="12" className="mt-5 pt-3" key={key}>
                                        <div className="features">
                                            <div className="image position-relative d-inline-block">
                                                <img src={feature.image} className="avatar avatar-small" alt="" />
                                            </div>

                                            <div className="content mt-4">
                                                <h4 className="title-2">{feature.title}</h4>
                                                <p className="text-muted">{feature.desc}</p>
                                                <Link to={feature.link} className="text-success">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
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

export default Services;