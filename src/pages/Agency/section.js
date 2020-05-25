import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Import Images
import workingWithComputerImg from '../../images/illustrator/working_with_computer.svg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 border-bottom agency-wrapper d-table w-100" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={7} md={{size:7, order:2}} xs={{order:1}}>
                                        <div className="title-heading mt-4 ml-lg-5">
                                            <h1 className="heading mb-3">We are Startup Creative <span className="text-primary">Landrick</span> Agency</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary">Learn More <i className="mdi mdi-chevron-right"></i></Link>
                                                <Link to="#" onClick={this.openModal} className="video-play-icon watch text-dark mb-2 ml-3"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 ml-1 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={{size:5, order:1}} xs={{order:2}} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={workingWithComputerImg} className="img-fluid" alt="" />
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;