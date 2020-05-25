import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert, Form, FormGroup, Label, Input, Button } from "reactstrap";
import classnames from 'classnames';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            successMsg : false
        }
        this.toggleTab = this.toggleTab.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
              activeTab: tab
            });
          }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="4" md={{size:5, order:1}} xs={{order:2}} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="bg-white shadow rounded position-relative overflow-hidden">
                                    <div className="text-center">
                                        <Nav className="flex-sm-row mb-0" pills justified>
                                            <NavItem>
                                                <NavLink
                                                        className={classnames({active: this.state.activeTab === '1'},"py-2","rounded-0")}
                                                        onClick={() => { this.toggleTab('1'); }}
                                                >
                                                    <div className="text-center pt-1 pb-1">
                                                        <h4 className="title font-weight-normal mb-0">User</h4>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                            
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({active: this.state.activeTab === '2'},"py-2","rounded-0")}
                                                    onClick={() => { this.toggleTab('2'); }}
                                                >
                                                    <div className="text-center pt-1 pb-1">
                                                        <h4 className="title font-weight-normal mb-0">Driver</h4>
                                                    </div>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                        <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                            Data sended successfully.
                                        </Alert>
                                            <Form onSubmit={this.handleSubmit} className="p-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">                                               
                                                            <Label>First name <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <Input type="text" className="form-control pl-5" placeholder="First Name" name="s" required/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Your Email <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-email ml-3 icons"></i>
                                                            <Input type="email" className="form-control pl-5" placeholder="Email" name="email" required/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Password <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <Input type="password" className="form-control pl-5" placeholder="Password" required/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="user-check"/>
                                                                <Label className="custom-control-label" for="user-check">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <Button color="success" className="w-100">Signup</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>
                                        
                                        <TabPane tabId="2">
                                        <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                            Data sended successfully.
                                        </Alert>
                                            <Form onSubmit={this.handleSubmit} className="p-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">                                               
                                                            <Label>First name <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-account ml-3 icons"></i>
                                                            <Input type="text" className="form-control pl-5" placeholder="First Name" name="s" required/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Your Email <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-email ml-3 icons"></i>
                                                            <Input type="email" className="form-control pl-5" placeholder="Email" name="email" required/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Password <span className="text-danger">*</span></Label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <Input type="password" className="form-control pl-5" placeholder="Password" required/>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <div className="custom-control custom-checkbox">
                                                                <Input type="checkbox" className="custom-control-input" id="driver-check"/>
                                                                <Label className="custom-control-label" for="driver-check">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="12">
                                                        <Button color="success" className="w-100">Signup</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </Col>
                            
                            <Col lg={{size:7, offset:1}} md={{size:7, order:2}} xs={{order:1}}>
                                <div className="title-heading mt-4">
                                    <h1 className="display-4 font-weight-normal mb-3">Unbeatable Price & Expert Services</h1>
                                    <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                                    <div className="mt-4 pt-2">
                                        <Link to="" className="btn btn-primary mt-2 mr-2"><i className="mdi mdi-apple"></i> App Store</Link>
                                        <Link to="" className="btn btn-outline-primary mt-2"><i className="mdi mdi-google-play"></i> Play Store</Link>
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