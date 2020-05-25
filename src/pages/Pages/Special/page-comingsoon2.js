import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, InputGroup,InputGroupAddon, Button } from 'reactstrap';

//React Typist
import Typist from 'react-typist';

// import images
import comingsoon from '../../../images/comingsoon2.jpg';

//CountDown
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return <React.Fragment>
            <div className="count-down">
                <span className="count-number">45</span>
                <span className="count-head position-relative d-block">Days</span></div>
            <div className="count-down">
                <span className="count-number">{hours}</span>
                <span className="count-head position-relative d-block">Hours</span>
            </div> <div className="count-down">
                <span className="count-number">{minutes}</span>
                <span className="count-head position-relative d-block">Minutes</span>
            </div> <div className="count-down">
                <span className="count-number">{seconds}</span>
                <span className="count-head position-relative d-block">Seconds</span>
            </div>
        </React.Fragment>
    }
};

class PageComingsoon2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal : false,
        }
        this.togglemodal.bind(this);
    }
    
    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>
                <section className="bg-home bg-animation-left dark-left d-flex align-items-center" style={{ backgroundImage: `url(${comingsoon})`}} id="home">
                    <Container className="position-relative text-md-left text-center" style={{zIndex:"1"}}>
                        <Row>
                            <Col md="12">
                                <Link to="#" className="text-white title-dark logo h5">Landrick<span className="text-primary">.</span></Link>
                                <h1 className="text-uppercase text-white title-dark mt-2 mb-4 coming-soon">
                                    <Typist>
                                                <span className="element">We're Coming soon...</span>
                                                <Typist.Backspace count={20} delay={400} />
                                                <span className="element">We're Be Ready to</span>
                                                <Typist.Backspace count={17} delay={400} />
                                                <span className="element">We're Connected with us</span>
                                                <Typist.Backspace count={23} delay={500} />
                                    </Typist>
                                </h1>
                                <p className="text-light para-dark para-desc">Start working with <span className="font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12">
                                <div id="countdown">
                                    <Countdown
                                        date={Date.now() + 1199658655000}
                                        renderer={renderer}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">  
                                <Link to="#" onClick={this.togglemodal} className="btn btn-primary mt-4 mr-2"><i className="mdi mdi-check"></i> Notify Me</Link>
                                <Link to="/index" className="btn btn-outline-primary mt-4"><i className="mdi mdi-backup-restore"></i> Go Back Home</Link>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Modal isOpen={this.state.modal} role="dialog" centered={true} id="trialform" tabindex="-1">
                        <div className="modal-content rounded shadow border-0">
                            <ModalHeader toggle={this.togglemodal}>
                                Subscribe Me
                            </ModalHeader>
                            <ModalBody>
                                <div className="bg-white p-3 rounded box-shadow">
                                        <p>We are comingsoon. Please, Enter your mail id and subscribe.</p>
                                        <Form>
                                            <FormGroup className="mb-0">
                                                <InputGroup>
                                                    <Input name="email" id="email" type="email" className="form-control" placeholder="Your Email :" required="" aria-describedby="newssubscribebtn"/>
                                                    <InputGroupAddon addonType="append"><Button color="primary" className="submitBnt" type="submit" id="paypalmail">Subscribe</Button></InputGroupAddon>
                                                </InputGroup>
                                            </FormGroup>
                                        </Form>
                                </div>
                            </ModalBody>
                        </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default PageComingsoon2;