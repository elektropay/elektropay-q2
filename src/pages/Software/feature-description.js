import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class FeatureDescription extends Component {
    render() {
        return (
            <React.Fragment>
            <Container className="pb-5 mb-md-5 mt-100 mt-60 mb-60">
                <Row className="align-items-center">
                    <Col lg="7">
                        <div className="saas-feature-shape-left position-relative">
                            <img src={this.props.image1} className="img-fluid mx-auto d-block rounded shadow" alt=""/>
                        </div>
                    </Col>

                    <Col lg="5" className="mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div className="section-title ml-lg-4">
                            <h1 className="title mb-3">Optimize Sales Conversions</h1>
                            <p className="para-desc text-muted">Launch your payments program quickly and benefit from our extensive expertise, deep relationships with financial institutions and leading technology companies.</p>
                            
                            <OwlCarousel
                                className="owl-theme"
                                items = {1}
                                loop
                                margin={10}
                            >
                                {
                                    this.props.testimonials.map((testimonial, key) =>
                                        <div key={key} className="customer-testi py-3">
                                            <img src={testimonial.image} style={{height:65, width:65}} className="img-fluid avatar avatar-small rounded-pill shadow" alt=""/>
                                            <p className="text-muted mt-4">" {testimonial.desc} "</p>
                                            <h6 className="text-primary">- {testimonial.name}</h6>
                                        </div>
                                    )
                                }
                            </OwlCarousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-100 mt-60 mb-100">
                <Row className="align-items-center">
                    <Col lg={{size :5, order :1}} xs={{order:2}}  className="mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div className="section-title mr-lg-4">
                            <h1 className="title mb-3">Reach more customers in more places</h1>
                            <p className="para-desc text-muted">Use our extensive global payments network and technologies to accesss the global market.</p>
                        
                            <Row>
                                {
                                    this.props.facilities.map((facility, key) =>
                                        <Col xs="12" key={key}>
                                            <div className="pb-0 pt-4">
                                                <h2><i className={"mdi "+ facility.icon + " float-left mr-3 mt-3 text-primary"}></i></h2>
                                                <div className="overflow-hidden d-block">
                                                    <h5> {facility.title} </h5>
                                                    <p className="text-muted mb-0">{facility.desc}</p>
                                                </div>
                                            </div>
                                        </Col>                                    
                                    )
                                }
    
                                <Col xs="12" className="pt-4">
                                    <Link to="" className="btn btn-outline-primary">Install Now <i className="mdi mdi-chevron-right"></i></Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    
                    <Col lg={{size:7, order:2}} xs={{order:1}}>
                        <div className="saas-feature-shape-right position-relative">
                            <img src={this.props.image1} className="img-fluid mx-auto d-block rounded shadow" alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default FeatureDescription;
