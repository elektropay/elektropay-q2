import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Alert, Form, Input, FormGroup, Button, Label } from "reactstrap";

//Import Profile Picture edit functionality
// import ReactAvatarEditor from 'react-avatar-editor';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";

import profile from "../../../images/client/05.jpg";

class PageProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Account", link : "/page-profile" },
                { id : 4, name : "Edit Account" },
            ],
            successMsg : false,
            successMsg2 : false,
            successMsg3 : false
            // image: profile,
            // allowZoomOut: false,
            // preview: null,
            // position: { x: 0.5, y: 0.5 },
            // scale: 1,
            // rotate: 0,
            // src : null,
            // width: 110,
            // height: 110,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    handleSubmit2(event) {
        event.preventDefault();
        this.setState({successMsg2 : true});
    }

    handleSubmit3(event) {
        event.preventDefault();
        this.setState({successMsg3 : true});
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
       // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
    }
  
    scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
    }

    handleNewImage = e => {
        this.setState({ image: e.target.files[0] })
      }

    handlePositionChange = position => {
        this.setState({ position })
    }

    render() {
        return (
            <React.Fragment>

                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Account Setting"
                    pathItems = {this.state.pathItems}
                />

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
                            <Col lg="10">
                                <div className="p-4 rounded shadow">
                                    <h5 className="text-md-left text-center">Personal Detail :</h5>

                                    <div className="mt-3 text-md-left text-center d-sm-flex">
                                    {/* <ReactAvatarEditor
                                        scale={parseFloat(this.state.scale)}
                                        position={this.state.position}
                                        onPositionChange={this.handlePositionChange}
                                        rotate={parseFloat(this.state.rotate)}
                                        image={this.state.image}
                                        className="avatar float-md-left avatar-medium rounded-pill shadow mr-md-4"
                                        height = {this.state.height}
                                        width={this.state.width}
                                        border={0}
                                    /> */}
                                        <img src={profile} className="avatar float-md-left avatar-medium rounded-pill shadow mr-md-4" alt=""/>
                                        <div className="mt-md-4 mt-3 mt-sm-0">
                                            <Link to="#" className="btn btn-primary mt-2"> Change Picture </Link>
                                            <Link to="#" className="btn btn-outline-primary mt-2 ml-2">Delete</Link> 
                                        </div>
                                    </div>
                                    <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                        Data sended successfully.
                                    </Alert>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row className="mt-4">
                                            <Col md="6">
                                                <FormGroup className="position-relative">
                                                    <Label>First Name</Label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <Input name="name" id="first" type="text" className="form-control pl-5" placeholder="First Name :"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup className="position-relative">
                                                    <Label>Last Name</Label>
                                                    <i className="mdi mdi-account-plus ml-3 icons"></i>
                                                    <Input name="name" id="last" type="text" className="form-control pl-5" placeholder="Last Name :"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup className="position-relative">
                                                    <Label>Your Email</Label>
                                                    <i className="mdi mdi-email ml-3 icons"></i>
                                                    <Input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :"/>
                                                </FormGroup> 
                                            </Col>
                                            <Col md="6">
                                                <FormGroup className="position-relative">
                                                    <Label>Occupation</Label>
                                                    <i className="mdi mdi-fountain-pen-tip ml-3 icons"></i>
                                                    <Input name="name" id="occupation" type="text" className="form-control pl-5" placeholder="Occupation :"/>
                                                </FormGroup> 
                                            </Col>
                                            <Col md="12">
                                                <FormGroup className="fposition-relative">
                                                    <Label>Description</Label>
                                                    <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                    <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Description :"></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save Changes"/>
                                            </Col>
                                        </Row>
                                    </Form>

                                    
                                    <Row>
                                        <Col md="6" className="mt-4 pt-2">
                                            <h5>Contact Info :</h5>
                                            <Alert color="info" isOpen={this.state.successMsg2} toggle={()=>{ this.setState({successMsg2 : !this.state.successMsg2}) }}>
                                                Data sended successfully.
                                            </Alert>

                                            <Form onSubmit={this.handleSubmit2}>
                                                <Row className="mt-4">
                                                    <Col lg="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Phone No. :</Label>
                                                            <i className="mdi mdi-phone ml-3 icons"></i>
                                                            <Input name="number" id="number" type="number" className="form-control pl-5" placeholder="Phone :"/>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col lg="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Website :</Label>
                                                            <i className="mdi mdi-earth ml-3 icons"></i>
                                                            <Input name="url" id="url" type="url" className="form-control pl-5" placeholder="Url :"/>
                                                        </FormGroup>
                                                    </Col>

                                                    <Col lg="12" className="mt-2 mb-0">
                                                        <Button color="primary">Add</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                        
                                        <Col md="6" className="mt-4 pt-2"> 
                                            <h5>Change password :</h5>
                                            <Alert color="info" isOpen={this.state.successMsg3} toggle={()=>{ this.setState({successMsg3 : !this.state.successMsg3}) }}>
                                                Data sended successfully.
                                            </Alert>
                                            <Form onSubmit={this.handleSubmit3}>
                                                <Row className="mt-4">
                                                    <Col lg="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Old password :</Label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <Input type="password" className="form-control pl-5" placeholder="Old password" required/>
                                                        </FormGroup>
                                                    </Col>
                
                                                    <Col lg="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>New password :</Label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <Input type="password" className="form-control pl-5" placeholder="New password" required/>
                                                        </FormGroup>
                                                    </Col>
                
                                                    <Col lg="12">
                                                        <FormGroup className="position-relative">
                                                            <Label>Re-type New password :</Label>
                                                            <i className="mdi mdi-key ml-3 icons"></i>
                                                            <Input type="password" className="form-control pl-5" placeholder="Re-type New password" required/>
                                                        </FormGroup>
                                                    </Col>
                
                                                    <Col lg="12" className="t-2 mb-0">
                                                        <Button color="primary">Save password</Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default PageProfileEdit;