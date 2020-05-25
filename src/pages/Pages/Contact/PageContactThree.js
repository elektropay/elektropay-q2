// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, Input, Label } from 'reactstrap';

// import images
import contactImg from '../../../images/contact-detail.jpg';
import bitcoin from '../../../images/icon/bitcoin.svg'
import email from '../../../images/icon/Email.svg';
import location from '../../../images/icon/location.svg';

class PageContactThree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Contact Us" },
            ],
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMail.bind(this);
        this.callNumber.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
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

    sendMail(){
        window.location.href="mailto:contact@example.com";
    }

    callNumber(){
        window.location.href="tel:+152534-468-854";
    }

    render() {

        return (
            <React.Fragment>
                <section className="bg-half bg-light d-table w-100" style={{ background: `url(${contactImg}) center center`}} >
                    <div className="bg-overlay bg-overlay-white"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12" className="text-center">
                                <div className="page-next-level">
                                    <h4 className="title">Contact Us</h4>
                                    <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                        <li><Link to="/index" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                        <li>
                                            <span className="text-uppercase text-primary font-weight-bold">Contact us</span> 
                                        </li> 
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container> 
                </section>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg={4} md={6} className="mt-4 pt-2">
                                <div className="pt-5 pb-5 p-4 bg-white rounded shadow">
                                    <h4>Get In Touch !</h4>
                                    <div className="custom-form mt-4">
                                        <div id="message"></div>
                                        <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                            Contact details send successfully.
                                         </Alert>
                                        <Form method="post" onSubmit={this.handleSubmit}  name="contact-form" id="contact-form">
                                            <Row>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <Label>Your Name <span className="text-danger">*</span></Label>
                                                        <i className="mdi mdi-account ml-3 icons"></i>
                                                        <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" required/>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <Label>Your Email <span className="text-danger">*</span></Label>
                                                        <i className="mdi mdi-email ml-3 icons"></i>
                                                        <Input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" required/>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="form-group position-relative">
                                                        <Label>Comments</Label>
                                                        <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                        <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={12} className="text-center">
                                                    <Input type="submit" id="submit" name="send" className="submitBnt btn btn-primary btn-block" value="Send Message" />
                                                    <div id="simple-msg"></div>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} md={6} className="pl-md-3 pr-md-3 mt-4 pt-2">
                                <div className="map map-height-two rounded map-gray">
                                    <iframe  title="test" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border : 0 }} className="rounded" allowFullScreen=""></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row>
                            <Col md={4}>
                                <div className="contact-detail text-center">
                                    <div className="icon">
                                        <img src={bitcoin} className="avatar avatar-small" alt="" />
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Phone</h4>
                                        <p className="text-muted">Start working with Landrick that can provide everything</p>
                                        <Link to="#" onClick={this.callNumber} className="text-primary">+152 534-468-854</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="contact-detail text-center">
                                    <div className="icon">
                                        <img src={email} className="avatar avatar-small" alt="" />
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Email</h4>
                                        <p className="text-muted">Start working with Landrick that can provide everything</p>
                                        <Link to="#" onClick={this.sendMail} className="text-primary">contact@example.com</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="contact-detail text-center">
                                    <div className="icon">
                                        <img src={location} className="avatar avatar-small" alt="" />
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Location</h4>
                                        <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                                        <Link to="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon h6 text-primary">View on Google map</Link>
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
export default PageContactThree;
