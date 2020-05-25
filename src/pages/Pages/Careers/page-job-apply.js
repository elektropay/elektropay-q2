// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Input, Label } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";

class PageJobApply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "CAREERS", link : "#" },
                { id : 4, name : "Job Apply" },
            ],
            jobDetails : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({jobDetails : true});
    }  

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }


    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb title="Job Apply Form" pathItems = {this.state.pathItems} />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={7}>
                                <div className="custom-form">
                                <Alert color="info" isOpen={this.state.jobDetails} toggle={()=>{ this.setState({jobDetails : !this.state.jobDetails}) }}>
                                    Job Details Send successfully.
                                </Alert>
                                <Form onSubmit={this.handleSubmit} className="rounded shadow p-4">
                                    <Row>
                                        <Col md="6" >
                                            <FormGroup className="position-relative">
                                                <Label>Your Name :<span className="text-danger">*</span></Label>
                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Your Email :<span className="text-danger">*</span></Label>
                                                <i className="mdi mdi-email ml-3 icons"></i>
                                                <Input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required/>
                                            </FormGroup> 
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Your Phone no. :<span className="text-danger">*</span></Label>
                                                <i className="mdi mdi-phone ml-3 icons"></i>
                                                <Input name="number" id="number" type="number" className="form-control pl-5" placeholder="Your phone no. :" required/>
                                            </FormGroup> 
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Job Title :</Label>
                                                <i className="mdi mdi-book ml-3 icons"></i>
                                                <Input name="subject" id="subject" className="form-control pl-5" placeholder="Title :"/>
                                            </FormGroup>                                                                               
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label>Types of jobs :</Label>
                                                <select className="form-control custom-select" id="Sortbylist-Shop">
                                                    <option>All Jobs</option>
                                                    <option>Full Time</option>
                                                    <option>Half Time</option>
                                                    <option>Remote</option>
                                                    <option>In Office</option>
                                                </select>
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <FormGroup className="position-relative">
                                                <Label>Description :</Label>
                                                <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Describe the job :"></textarea>
                                            </FormGroup>
                                        </Col>                                    
                                        <Col md="12">
                                            <FormGroup className="position-relative">
                                                <Label>Upload Your Cv / Resume :</Label>
                                                <Input type="file" className="form-control-file" id="fileupload"/>
                                            </FormGroup>                                                                               
                                        </Col>
                                        <Col md="12">
                                            <FormGroup>
                                                <div className="custom-control custom-checkbox">
                                                    <Input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                    <Label className="custom-control-label" for="customCheck1">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></Label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Apply Now"/>
                                        </Col>
                                    </Row>
                                </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageJobApply;
