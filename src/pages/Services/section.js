import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import services from "../../images/illustrator/services.svg";

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={7} md={7}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Build Anything <br />For Your Project</h1>
                                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to="page-services" className="btn btn-primary mb-2 mr-2">Our Services</Link>
                                                <Link  onClick={this.openModal} to="#" className="video-play-icon watch text-dark mb-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill title-dark text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={services} alt="" />
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;