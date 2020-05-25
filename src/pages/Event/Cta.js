// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Parallax
import { Parallax } from 'react-parallax';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Cta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true });
    }

    render() {
        return (
            <React.Fragment>
                <Parallax
                    bgImage={require("../../images/event/cta.jpg")}
                    strength={400}
                 >
                <section className="section bg-cta"  id="cta">
                    <div className="bg-overlay bg-overlay-gradient"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title title-dark text-white mb-4">Digital International Conference 2019</h4>
                                    <p className="text-light para-desc para-dark mx-auto">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <Link to="#" onClick={this.openModal} className="play-btn border border-light mt-2 video-play-icon">
                                        <i className="mdi mdi-play title-dark text-white"></i>
                                    </Link>
                                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='12022651' onClose={() => this.setState({ isOpen: false })} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </section>
                </Parallax>

            </React.Fragment>
        );
    }
}

export default Cta;