// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import ProcessBox from "../../components/Shared/process-box";

// Import images
import img1 from '../../images/work/1.jpg';
import img2 from '../../images/work/2.jpg';
import img3 from '../../images/work/3.jpg';
import img4 from '../../images/work/4.jpg';
import img5 from '../../images/work/5.jpg';
import img6 from '../../images/work/6.jpg';

class WorkProcess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            processes : [
                { id : 1, title : "Discuss The Project", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", link : "#" },
                { id : 2, title : "Develop & Elaborate", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", link : "#" },
                { id : 3, title : "Final Approvement", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", link : "#" },
            ],
            works : [
                { imageUrl : img1, title : "Shifting Perspective", field : "Studio", author : "Calvin Carlo", date : "13th August, 2019" },
                { imageUrl : img2, title : "Colors Magazine", field : "Web Design", author : "Calvin Carlo", date : "13th August, 2019" },
                { imageUrl : img3, title : "Spa Cosmetics", field : "Developing", author : "Calvin Carlo", date : "13th August, 2019" },
                { imageUrl : img4, title : "Riser Coffee", field : "Branding", author : "Calvin Carlo", date : "13th August, 2019" },
                { imageUrl : img5, title : "Dancing With Myself", field : "Photography", author : "Calvin Carlo", date : "13th August, 2019" },
                { imageUrl : img6, title : "New trends in SEO", field : "Business", author : "Calvin Carlo", date : "13th August, 2019" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Work Progress" desc="that can provide everything you need to generate awareness, drive traffic, connect" />

                        <Row>
                            {/* process box */}
                            <ProcessBox processes={this.state.processes} />
                        </Row>
                    </Container>

                    <Container className="mt-100 pt-50">
                        {/* section title */}
                        <SectionTitle title="Our Latest Projects" desc="that can provide everything you need to generate awareness, drive traffic, connect" />

                        <Row>
                            {
                                this.state.works.map((work, key) =>
                                    <Col lg="6" md="6" key={key} className="mt-4 pt-2">
                                        <div className="work-container position-relative rounded">
                                                <img src={work.imageUrl} className="img-fluid rounded"  alt="work" />
                                                <div className="overlay-work"></div>
                                                <div className="content">
                                                    <Link to="page-work-detail" className="title text-white d-block font-weight-bold">{work.title}</Link>
                                                    <small className="text-light">{work.field}</small>
                                                </div>
                                                <div className="client">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {work.author}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {work.date}</small>
                                                </div>
                                        </div>
                                    </Col>
                                )
                            } 
                        </Row>

                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center mt-4 pt-2">
                                <Link to="page-work" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your workplace</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Buy Now<span className="badge badge-danger rounded ml-2">v2.0</span></Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2"><i className="mdi mdi-account-check-outline"></i>Free Trial</Link>
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

export default WorkProcess;