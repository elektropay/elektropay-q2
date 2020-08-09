import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Images
import software from "../../images/software/software.png";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }   
    
    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-white d-table w-100">
                    <Container>
                        <Row className="align-items-center position-relative mt-2" style={{zIndex: "1"}}>
                            <Col lg="6" md="12">
                                <div className="title-heading mt-4 text-center text-lg-left">
                                    <h1 className="heading mb-3 text-dark">Monetize Your Commerce Channels</h1>
                                    <p className="para-desc text-muted">The commerce as service management platform delivering unmatched solutions for start-up and enterprise businesses.</p>
                                    <div className="mt-4">
                                         <Link to="" className="btn btn-light mt-1 mr-2 mouse-down"> Request A Demo</Link>
                                      
  <Link to="" className="btn btn-outline-primary mt-1 mr-2 mouse-down"><i className="mdi mdi-download"></i> Get Started</Link>
                                     
                                             </div>
                                </div>
                            </Col>

                            <Col lg="6" md="12" className="mt-4 pt-2">
                                <div className="position-relative">
                                    <div className="software_hero">
                                        <img src={software} className="img-fluid d-block" alt=""/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='287684225' onClose={() => this.setState({ isOpen: false })} />
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
