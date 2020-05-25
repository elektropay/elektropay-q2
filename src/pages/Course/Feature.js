// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import insurance from "../../images/icon/insurance.svg";
import graduationHat from "../../images/icon/graduation-hat.svg";
import ai from "../../images/icon/ai.svg";

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { icon : insurance, title : "Unlimited Access", desc : "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.", link : "#" },
                { icon : graduationHat, title : "Our Courses", desc : "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.", link : "#" },
                { icon : ai, title : "Expert Teachers", desc : "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout.", link : "#" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            {
                                this.state.features.map((feature, key) =>
                                    <Col md={4} key={key}>
                                        <div className="course-feature text-center position-relative d-block overflow-hidden bg-white rounded p-4 pt-5 pb-5">
                                            <div className="icon">
                                                <img src={feature.icon} className="avatar avatar-small" height="55" alt="" />
                                            </div>
                                            <h4 className="mt-3"><Link to={feature.link} className="title text-dark"> {feature.title}</Link></h4>
                                            <p className="text-muted">{feature.desc} </p>
                                            <Link to={feature.link} className="text-primary read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <img src={feature.icon} className="full-img" height="300" alt="" />
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;