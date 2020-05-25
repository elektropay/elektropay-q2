// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Card, CardBody, CardHeader, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Componenets
import Counter2 from "../../components/Shared/counter2";

//import images
import Asset190 from '../../images/illustrator/Asset190.svg';
import Asset189 from '../../images/illustrator/Asset189.svg';
import Asset192 from '../../images/illustrator/Asset192.svg';
import Asset187 from '../../images/illustrator/Asset187.svg';
import faq from '../../images/illustrator/faq.svg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Faqs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counters : [
                { title : "Happy Client", image : Asset190, start : 0, value : 97, postfix : "%" },
                { title : "Awards", image : Asset189, start : 0, value : 15, postfix : "+" },
                { title : "Job Placement", image : Asset192, start : 0, value : 2, postfix : "K" },
                { title : "Project Complete", image : Asset187, start : 0, value : 98, postfix : "%" },
            ],
            isOpen: false, 
            collapse1 : true
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">See everything about your <span className="text-primary">Landrick</span></h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>

                        <Row id="counter">
                            {/* counter */}
                            <Counter2 counters={this.state.counters} />
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="7" md="6">
                                <div className="faq-content mr-lg-5">
                                    <div className="accordion" id="accordionExample">
                                        <Card className="border rounded shadow mb-2">
                                            <Link  to="#" onClick={() => this.setState({collapse1 : !this.state.collapse1,collapse3 : false, collapse2 : false,collapse4 : false})} className={this.state.collapse1 ? "faq position-relative text-primary" :  "faq position-relative text-dark" } >
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> How our Landrick work ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse1}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                        <Card className="border rounded shadow mb-2">
                                        <Link  to="#" onClick={() => this.setState({collapse2 : !this.state.collapse2,collapse3 : false, collapse4 : false,collapse1 : false})} className={this.state.collapse2 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> How to make unlimited data entry ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse2}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority, by injected humour, or randomised words which don't look even slightly believable.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>

                                        <Card className="border rounded shadow mb-2">
                                        <Link  to="#" onClick={() => this.setState({collapse3 : !this.state.collapse3,collapse4 : false, collapse2 : false,collapse1 : false})} className={this.state.collapse3 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question">What is the main process open account ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse3}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which believable.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>

                                        <Card className="rounded shadow mb-0">
                                        <Link  to="#" onClick={() => this.setState({collapse4 : !this.state.collapse4, collapse3 : false, collapse2 : false,collapse1 : false})} className={this.state.collapse4 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> Is Landrick safer to use with my account ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse4}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which believable.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="5" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <img src={faq} alt="" />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Get Started</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="watch-video mt-4 pt-2">
                                        <Link to="#" className="btn btn-primary mb-2">Buy Now <Badge color="danger" className="rounded ml-2">v2.0</Badge></Link>
                                        <Link to="#" onClick={this.openModal} className="video-play-icon watch text-dark mb-2 ml-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
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

export default Faqs;