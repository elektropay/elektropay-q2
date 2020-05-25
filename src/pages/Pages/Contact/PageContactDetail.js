// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

// import images
import contactDetail from '../../../images/contact-detail.jpg';
import  Topbar from '../../../components/Layout/Topbar';

class PageContactDetail extends Component {

    constructor(props) {
        super(props);
        this.sendMail.bind(this);
        this.callNumber.bind(this);
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
                 <Topbar />
               
                <section className="vh-100 d-flex align-items-center" style={{ background: `url(${contactDetail})`, backgroundPosition : "center center" }}>
                    <div className="bg-overlay bg-overlay-white"></div>
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={{size : 6, offset :6}} md={{size:7, offset:5}}>
                                        <div className="title-heading mt-5 pt-4">
                                            <h1 className="heading">Let's talk about your portfolio</h1>
                                            <p className="text-dark">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                            <div className="contact-detail mt-3">
                                                <div className="icon mt-3 float-left">
                                                    <i className="mdi mdi-email-variant text-dark mdi-36px mr-3"></i>
                                                </div>
                                                <div className="content mt-3 overflow-hidden d-block">
                                                    <h4 className="title font-weight-bold mb-0">Email</h4>
                                                    <Link to="#" onClick={this.sendMail} className="text-primary">contact@example.com</Link>
                                                </div>
                                            </div>

                                            <div className="contact-detail mt-3">
                                                <div className="icon mt-3 float-left">
                                                    <i className="mdi mdi-phone text-dark mdi-36px mr-3"></i>
                                                </div>
                                                <div className="content mt-3 overflow-hidden d-block">
                                                    <h4 className="title font-weight-bold mb-0">Phone</h4>
                                                    <Link to="#" onClick={this.callNumber} className="text-primary">+152 534-468-854</Link>
                                                </div>
                                            </div>

                                            <div className="contact-detail mt-3">
                                                <div className="icon mt-3 float-left">
                                                    <i className="mdi mdi-map-marker-outline text-dark mdi-36px mr-3"></i>
                                                </div>
                                                <div className="content mt-3 overflow-hidden d-block">
                                                    <h4 className="title font-weight-bold mb-0">Location</h4>
                                                    <Link to="#" className="video-play-icon text-primary">View on Google map</Link>
                                                </div>
                                            </div>
                                            
                                            <ul className="list-unstyled social-icon mb-0 mt-4">
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded mr-1"><i className="mdi mdi-linkedin" title="Linkedin"></i></Link></li>
                                                <li className="list-inline-item"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageContactDetail;
