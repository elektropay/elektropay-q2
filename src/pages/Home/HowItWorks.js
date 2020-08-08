// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Alert, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import SectionTitleLeft from "../../components/Shared/section-title-left";

// Import Images 
import seoSVG from '../../images/illustrator/SEO_SVG.svg';
import mobileNotificationSVG from '../../images/illustrator/Mobile_notification_SVG.svg';

class HowItWorks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            features1 : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  

    componentDidMount(){
        var sectiontitles = document.getElementsByName("maintitle");
            sectiontitles[0].classList.remove('mb-4');
            sectiontitles[0].classList.remove('pb-2');
            sectiontitles[0].classList.add('mb-60');
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light border-bottom">
                    <Container>
                        {/* render Section title */}
                        <SectionTitle title="How It Work ?" desc=" that can provide everything you need to generate awareness, drive traffic, connect."/>

                        <Row className="align-items-center">
                            <Col lg="5" md="6">
                                <img src={seoSVG} alt="" />
                            </Col>

                            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                <SectionTitleLeft
                                    title = "Change the way you build websites"
                                    desc = "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website."
                                    features = {this.state.features}
                                    class = "mdi-18px h5 mr-2"
                                />
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="7" md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title">
                                    <SectionTitleLeft
                                        desc = "Using Elektropay to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier."
                                        features = {this.state.features1}
                                        class = "mdi-18px h5 mr-2"
                                    >
                                        <h4 className="title mb-4">Speed up your development <br /> with <span className="text-primary">Elektropay.</span></h4>
                                    </SectionTitleLeft>
                                    <Link to="#" className="mt-3 text-primary">Find Out More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>

                            <Col lg="5" md={{size :6, order:2}} xs={{order:1}}>
                                <div className="p-4 rounded bg-white feature-form border ml-lg-5">
                                    <img src={mobileNotificationSVG} alt="" />

                                    <div className="content mt-4 pt-2">
                                                <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                                    Download Successfully.
                                                </Alert>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Row>
                                                <Col lg="12">
                                                    <FormGroup className="position-relative">
                                                        <Label>Name : <span className="text-danger">*</span></Label>
                                                        <i className="mdi mdi-account ml-3 icons"></i>
                                                        <Input type="text" className="form-control pl-5" placeholder="Name" name="name" required="" />
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
                                                    <Button color="primary" type="submit" className="w-100">Download</Button>
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

export default HowItWorks;
