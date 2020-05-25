import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label } from "reactstrap";


//Import Image
import mobileNotification from "../../images/illustrator/Mobile_notification_SVG.svg";

class BlockContainer extends Component {
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
            <Container className="mt-100 mt-60">
                <div className="p-4 rounded bg-light shadow" data-aos="fade-up" data-aos-duration="1800">
                    <Row className="align-items-center">
                        <Col sm="7">
                            <div className="text-sm-left">
                                <h5 className="mb-0">Start building beautiful block-based websites.</h5>
                            </div>
                        </Col>
    
                        <Col sm="5" className="mt-4 mt-sm-0">
                            <div className="text-sm-right">
                                <Link to="#" onClick={this.togglemodal} className="btn btn-outline-primary">Free Trial <Badge color="danger" className="rounded ml-2">v2.0</Badge> </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            
            <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} id="trialform" tabindex="-1">
                
                    <div className="modal-content rounded shadow border-0">
                        <ModalHeader toggle={this.togglemodal}>
                            14 Days Free Trial
                        </ModalHeader>
                        <ModalBody>
                            <div className="feature-form">
                                <img src={mobileNotification} alt=""/>
    
                                <div className="content mt-4 pt-2">
                                    <Form>
                                        <Row>
                                            <Col lg="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Name : <span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <Input type="text" className="form-control pl-5" placeholder="Name" name="name" required=""/>
                                                </FormGroup>
                                            </Col>
    
                                            <Col lg="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Email : <span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-email ml-3 icons"></i>
                                                    <Input type="email" className="form-control pl-5" placeholder="Email" name="email" required=""/>
                                                </FormGroup>
                                            </Col>
    
                                            <Col lg="12">
                                                <FormGroup className="position-relative">
                                                    <Label>Password : <span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-key ml-3 icons"></i>
                                                    <Input type="password" className="form-control pl-5" placeholder="Password" required=""/>
                                                </FormGroup>
                                            </Col>
    
                                            <Col lg="12" className="mt-2 mb-0">
                                                <Button color="primary" className="w-100">Login</Button>
                                            </Col>
                                        </Row>
                                    </Form>                                    
                                </div>
                            </div>
                        </ModalBody>
                    </div>
                
            </Modal>
            </React.Fragment>
        );
    }
}

export default BlockContainer;