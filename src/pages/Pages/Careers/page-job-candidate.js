import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, Progress, Form, FormGroup, Input, Label } from "reactstrap";
import Lightbox from 'react-image-lightbox';
import '../../../../node_modules/react-image-lightbox/style.css';


//Import Images
import imgbg from "../../../images/job/candidate.jpg";
import profile from "../../../images/client/01.jpg";
import Circleci from "../../../images/job/Circleci.svg";
import Codepen from "../../../images/job/Codepen.svg";
import project1 from "../../../images/personal/1.jpg";
import project2 from "../../../images/personal/2.jpg";
import project3 from "../../../images/personal/3.jpg";
import project4 from "../../../images/personal/4.jpg";

//creating array of images for image portfolio
const images = [
    project1, project2, project3, project4
];

class PageJobCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences : [
                { title : "Back-end Developer", image : Codepen, cmpName : "Codepen", location : "CHINA", duration : "2017-18", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },
                { title : "Senior Web Designer", image : Circleci, cmpName : "CircleCi", location : "SAN FRANCISCO", duration : "2014-17", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },
            ],
            projects : [
                { image : project1, title : "Shifting Perspective", subject : "Studio", author : "Thomas Brewer", date : "13th August, 2019" },
                { image : project2, title : "Colors Magazine", subject : "Web Design", author : "Thomas Brewer", date : "13th August, 2019" },
                { image : project3, title : "Spa Cosmetics", subject : "Developing", author : "Thomas Brewer", date : "13th August, 2019" },
                { image : project4, title : "Riser Coffee", subject : "Branding", author : "Thomas Brewer", date : "13th August, 2019" },
            ],
            modal : false,
            photoIndex: 0,
            isOpen: false,
        }
        this.togglemodal.bind(this);
    }

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
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

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
        <section className="bg-half-260 d-table w-100" style={{background: `url(${imgbg}) center center`}}></section>

        <section className="section">
            <Container>
                <Row>
                    <Col lg="4" md="5" xs="12">
                        <div className="job-profile position-relative">
                            <div className="rounded shadow bg-white">
                                <div className="text-center py-5 border-bottom rounded-top">
                                    <img src={profile} className="avatar avatar-medium mx-auto rounded-pill shadow d-block" alt="profile"/>
                                    <h5 className="mt-3 mb-0">Thomas Brewer</h5>
                                    <p className="text-muted mb-0">Senior Web Developer</p>
                                </div>

                                <div className="p-4">
                                    <h5>Personal Details :</h5>
                                                                       
                                    <ul className="list-unstyled feature-list">
                                        <li className="h5"><i className="mdi mdi-email mdi-18px text-warning mr-2"></i><span className="text-muted">Email :</span> thomas@mail.com</li>
                                        <li className="h5"><i className="mdi mdi-baby mdi-18px text-warning mr-2"></i><span className="text-muted">D.O.B. :</span> 31st Dec, 1996</li>
                                        <li className="h5"><i className="mdi mdi-map-marker mdi-18px text-warning mr-2"></i><span className="text-muted">Address :</span> 15 Razy street</li>
                                        <li className="h5"><i className="mdi mdi-city mdi-18px text-warning mr-2"></i><span className="text-muted">City :</span> London</li>
                                        <li className="h5"><i className="mdi mdi-earth mdi-18px text-warning mr-2"></i><span className="text-muted">Country :</span> UK</li>
                                        <li className="h5"><i className="mdi mdi-qrcode mdi-18px text-warning mr-2"></i><span className="text-muted">Postal Code :</span> 521452</li>
                                        <li className="h5"><i className="mdi mdi-phone mdi-18px text-warning mr-2"></i><span className="text-muted">Mobile :</span> (+125) 1542-8452</li>
                                        
                                        <li>
                                            <ul className="list-unstyled social-icon mb-0 mt-4">
                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google+"></i></Link></li>
                                                <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <Link to="#" onClick={this.togglemodal} className="btn btn-block btn-primary"><i className="mdi mdi-email"></i> Contact Me</Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="ml-lg-4">
                            <h4>About us :</h4>
                            <p className="text-muted">Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <p className="text-muted mb-0">Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either taking too much time or taking too much space.</p>
                            
                            <h4 className="mt-lg-5 mt-4">Skills :</h4>
                            <div className="progress-box mt-4">
                                        <h6 className="title text-muted">WordPress</h6>
                                        <div className="progress-value d-block text-muted h6 text-right">84%</div>
                                        <Progress value="84" /> 
                            </div>
                            <div className="progress-box mt-4">
                                        <h6 className="title text-muted">PHP / MYSQL</h6>
                                        <div className="progress-value d-block text-muted h6 text-right">75%</div>
                                        <Progress value="75" /> 
                            </div>
                            <div className="progress-box mt-4">
                                        <h6 className="title text-muted">Angular / JavaScript</h6>
                                        <div className="progress-value d-block text-muted h6 text-right">79%</div>
                                        <Progress value="79" /> 
                            </div>
                            <div className="progress-box mt-4">
                                        <h6 className="title text-muted">HTML</h6>
                                        <div className="progress-value d-block text-muted h6 text-right progressbar-value">95%</div>
                                        <Progress value="95" /> 
                            </div>            
                            <h4 className="mt-lg-5 mt-4">Experience :</h4>
                            <Row>
                            {
                                this.state.experiences.map((exp, key) =>
                                    <Col key={key} lg="12" className="mt-4 pt-2">
                                        <div className="company-logo text-muted h6 mr-md-4 mt-md-2 float-left text-center">
                                            <img src={exp.image} className="avatar avatar-md-sm d-block mb-2" alt="experience"/>{exp.duration}
                                        </div>
                                        <div className="content d-block overflow-hidden mt-3 mt-sm-0">
                                            <h5 className="title mb-0">{exp.title}</h5>
                                            <small className="text-muted company-university">{exp.cmpName} - {exp.location}</small>
                                            <p className="text-muted mt-2 mb-0">{exp.desc}</p>
                                        </div>
                                    </Col>
                                )
                            }
                            </Row>
                            <h4 className="mt-lg-5 mt-4">Projects :</h4>
                            <Row>
                                {
                                    this.state.projects.map((project, key) =>
                                        <Col key={key} md="6" className="mt-4 pt-2">
                                            <div className="work-container position-relative d-block overflow-hidden rounded" >
                                                <Link className="mfp-image d-inline-block" to="#" title="" onClick={() => this.setState({ isOpen: true, photoIndex : key })} >
                                                    <img src={project.image} className="img-fluid rounded" alt="work"/>
                                                    <div className="overlay-work" ></div>
                                                </Link>
                                                <div className="content personal-port">
                                                    <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">{project.title}</Link>
                                                    <small className="text-light">{project.subject} </small>
                                                </div>
                                                <div className="client personal-port">
                                                    <small className="text-light user d-block"><i className="mdi mdi-account"></i> {project.author}</small>
                                                    <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {project.date}</small>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }
                                {/* lightbox for portfolio images */}
                                { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={30}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                    />
                                    ) }
                            </Row>

                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary mr-2"><i className="mdi mdi-account-check"></i> Hire me</Link>
                                <Link to="#" className="btn btn-outline-primary"><i className="mdi mdi-printer"></i> Print CV</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

            <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true} id="trialform" tabindex="-1">
                    
                    <div className="modal-content rounded shadow border-0">
                        <ModalHeader toggle={this.togglemodal}>
                            Apply now
                        </ModalHeader>
                        <ModalBody className="p-4">
                        <div className="custom-form">
                                <div id="message"></div>
                                <Form name="contact-form" id="contact-form">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Your Name <span className="text-danger">*</span></Label>
                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :"/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="position-relative">
                                                <Label>Your Email <span className="text-danger">*</span></Label>
                                                <i className="mdi mdi-email ml-3 icons"></i>
                                                <Input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :"/>
                                            </FormGroup> 
                                        </Col>
                                        <Col md="12">
                                            <FormGroup className="position-relative">
                                                <Label>Subject</Label>
                                                <i className="mdi mdi-book ml-3 icons"></i>
                                                <Input name="subject" id="subject" className="form-control pl-5" placeholder="Your subject :"/>
                                            </FormGroup>                                                                               
                                        </Col>
                                        <Col md="12">
                                            <FormGroup className="position-relative">
                                                <Label>Comments</Label>
                                                <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12" className="text-center">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message"/>
                                            <div id="simple-msg"></div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </ModalBody>
                    </div>
            </Modal>
            </React.Fragment>
        );
    }
}

export default PageJobCandidate;