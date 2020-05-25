import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Input, Button  } from 'reactstrap';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

//Import Images
import modern01 from '../../images/modern01.jpg';
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            Contactvisible : false
        }
        this.openModal = this.openModal.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" style={{ background: `url(${modern01})center center` }} id="home">
                        <div className="bg-overlay"></div>
                            <Container>
                                <Row className="align-items-center mt-md-5">
                                    <Col lg={4} md={{size:6, order:1}} xs={{order:2}} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <div className="login_page bg-white shadow rounded p-4">
                                            <h5 className="mb-4">Register Now</h5>
                                                <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                                    Registration Done Successfully.
                                                </Alert>
                                            <Form onSubmit={this.handleSubmit} className="login-form">
                                                <Row>
                                                    <Col md={12}>
                                                        <FormGroup className="position-relative">
                                                            <Label>First name <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <Input type="text" className="form-control pl-5" placeholder="First Name" name="s" required />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup className="position-relative">
                                                            <Label>Your Email <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-email ml-3 icons"></i>
                                                            <Input type="email" className="form-control pl-5" placeholder="Email" name="email" required />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup className="position-relative">
                                                            <Label>Password <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <Input type="password" className="form-control pl-5" placeholder="Password" required />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <Label className="custom-control-label" htmlFor="customCheck1">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <Button color="success" className="w-100">Register</Button>
                                                    </Col>
                                                    <Col lg={12} className="mt-4 text-center">
                                                        <h6>Or Signup With</h6>
                                                        <ul className="list-unstyled social-icon mb-0 mt-3">
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google"></i></Link></li>
                                                            <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-github-circle" title="Github"></i></Link></li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>

                                    <Col lg={{size:7, offset:1}} md={{size:6, order:2}} xs={{order:1}}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading title-dark text-white mb-3">Powerful Solution For Your Startup Business </h1>
                                            <p className="para-desc para-dark text-light">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to="#"  className="btn btn-primary mb-2 mr-2">Get Started</Link>
                                                <Link  to="#" onClick={this.openModal} className="video-play-icon watch title-dark text-light mb-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white title-dark position-relative play play-iconbar"></i> WATCH VIDEO</Link>
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

export default Section;