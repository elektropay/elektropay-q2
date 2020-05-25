// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import SectionTitleLeft from "../../components/Shared/section-title-left";
import Feature from "../../components/Shared/Feature";

// Import images;
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';
import MobileNotificationSVG from '../../images/illustrator/Mobile_notification_SVG.svg';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : pen, title : "Design & Development", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 2, imgUrl : video, title : "Management & Marketing", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 3, imgUrl : intellectual, title : "Stratagy & Research", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
                { id : 4, imgUrl : user, title : "Easy To Use", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 5, imgUrl : calendar, title : "Daily Reports", description : "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word." },
                { id : 6, imgUrl : sandClock, title : "Real Time Zone", description : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today." },
            ],
            features_lines : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var featureboxes = document.getElementsByName("featurebox");
        for(var i=0; i<featureboxes.length; i++) {
            featureboxes[i].classList.add("mt-5");
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="What We Do ?" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />

                        {/* feature box */}
                        <Feature featureArray={this.state.features} isCenter={true}/>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="7" md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title">
                                    <SectionTitleLeft
                                        desc = "Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier."
                                        features = {this.state.features_lines}
                                        class = "h4 mr-2"
                                    >
                                        <h4 className="title mb-4">Speed up your development <br /> with <span className="text-primary">Landrick.</span></h4>
                                    </SectionTitleLeft>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>

                            <Col lg="5" md={{size:6, order:2}} xs={{order:1}}>
                                <div className="p-4 rounded bg-white feature-form shadow ml-lg-5">
                                    <img src={MobileNotificationSVG} alt="" />

                                    <div className="content mt-4 pt-2">
                                        <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Contact details send successfully.
                                         </Alert>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col lg="12">
                                                    <FormGroup className="position-relative">
                                                        <Label>Name : <span className="text-danger">*</span></Label>
                                                        <i className="mdi mdi-account ml-3 icons"></i>
                                                        <Input type="text" className="form-control pl-5" placeholder="Name" name="name" required />
                                                    </FormGroup>
                                                </Col>

                                                <Col lg="12">
                                                    <FormGroup className="position-relative">
                                                        <Label>Email : <span className="text-danger">*</span></Label>
                                                        <i className="mdi mdi-email ml-3 icons"></i>
                                                        <Input type="email" className="form-control pl-5" placeholder="Email" name="email" required />
                                                    </FormGroup>
                                                </Col>

                                                <Col lg="12">
                                                    <FormGroup className="position-relative">
                                                        <Label>Password : <span className="text-danger">*</span></Label>
                                                        <i className="mdi mdi-key ml-3 icons"></i>
                                                        <Input type="password" className="form-control pl-5" placeholder="Password" required />
                                                    </FormGroup>
                                                </Col>

                                                <Col lg="12" className="mt-3 mb-0">
                                                    <Button color="primary" type="submit" className="w-100">Login</Button>
                                                </Col>
                                            </Row>
                                        </Form>
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

export default Features;