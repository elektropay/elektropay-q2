import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../components/Shared/page-breadcrumb";

//Import Images
import user from "../../images/icon/user.svg";
import insurance from "../../images/icon/insurance.svg";
import rupee from "../../images/icon/rupee.svg";
import bitcoin from "../../images/icon/bitcoin.svg";
import client4 from "../../images/client/04.jpg";
import lenovo from "../../images/client/lenovo.svg";
import client3 from "../../images/client/03.jpg";
import client2 from "../../images/client/02.jpg";
import client6 from "../../images/client/06.jpg";
import blog1 from "../../images/blog/01.jpg";
import course1 from "../../images/course/1.jpg";
import work1 from "../../images/work/1.jpg";
import hotel2 from "../../images/hotel/02.jpg";
import master from "../../images/payments/payment/master.png";
import full from "../../images/job/full.jpg";
import Eslint from "../../images/job/Eslint.svg";


class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Docs", link : "#" },
                { id : 3, name : "Widget" },
            ],
        }
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

    render() {
        return (
            <React.Fragment>
                <PageBreadcrumb
                    title="Widget"
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
                        <Row>
                            
                            <Col lg="4" md="6" xs="12" className="cmt-4 pt-2">
                                <div className="features">
                                    <div className="image position-relative d-inline-block">
                                        <img src={user} className="avatar avatar-small" alt=""/>
                                    </div>

                                    <div className="content mt-4">
                                        <h4 className="title-2">Easy To Use</h4>
                                        <p className="text-muted mb-0">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="cmt-4 pt-2">
                                <div className="features p-1 pt-4 pb-4">
                                    <i className="mdi mdi-monitor-cellphone-star icon text-center rounded-pill text-primary mr-3 mt-2 float-left"></i>

                                    <div className="content d-block overflow-hidden">
                                        <h4 className="title">Use On Any Device</h4>
                                        <p className="text-muted para mb-0">composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="work-process p-3 rounded shadow">
                                    <h4 className="title">Discuss The Project</h4>
                                    <p className="text-muted para">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.</p>
                                    <Link to="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                    <ul className="list-unstyled mb-0 mt-2">
                                        <li className="step-icon float-right"><i className="mdi mdi-chevron-double-right"></i></li>
                                        <li className="step font-weight-bold">Step 01.</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="course-feature text-center position-relative d-block overflow-hidden bg-white rounded p-4 pt-5 pb-5" style={{margin: "0"}}>
                                    <div className="icon">
                                        <img src={insurance} className="avatar avatar-small" alt=""/>
                                    </div>
                                    
                                    <h4 className="mt-3"><Link to="#" className="title text-dark"> Unlimited Access</Link></h4>
                                    <p className="text-muted">It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout. </p>
                                    <Link to="#" className="text-primary read-more">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                    <img src={insurance} className="full-img" height="300" alt=""/>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="bg-light p-3 py-5 rounded shadow">
                                    <img src={rupee} className="avatar avatar-md-sm" alt=""/>
                                    <div className="mt-4">
                                        <h5><Link to="#" className="text-primary"> Low Fees</Link></h5>
                                        <p className="text-muted mt-3 mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted.</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="contact-detail text-center">
                                    <div className="icon">
                                        <img src={bitcoin} className="avatar avatar-small" alt=""/>
                                    </div>
                                    <div className="content mt-3">
                                        <h4 className="title font-weight-bold">Phone</h4>
                                        <p className="text-muted">Start working with Elektropay that can provide everything</p>
                                        <Link to="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                                    </div>  
                                </div>
                            </Col>
                            
                            
                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="media customer-testi">
                                    <img src={client4} className="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                    <div className="media-body content p-3 shadow rounded bg-white position-relative">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        </ul>
                                        <p className="text-muted mt-2">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
                                        <h6 className="text-primary">- Christa Smith <small className="text-muted">Manager</small></h6>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="customer-testi text-center p-4 rounded border">
                                    <img src={lenovo} className="img-fluid avatar avatar-ex-sm mx-auto" alt=""/>
                                    <p className="text-muted mt-4">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                    <h6 className="text-primary">- Barbara McIntosh</h6>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="customer-testi m-2 bg-white text-center p-4 rounded shadow">
                                    <p className="text-muted h6 font-italic">" There is now an abundance of readableives to the classNameic and tell short, funny or nonsensical stories. "</p>
                                    <img src={client3} className="img-fluid avatar avatar-small mt-3 rounded-pill mx-auto shadow" alt=""/>
                                    <ul className="list-unstyled mb-0 mt-3">
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <h6 className="text-primary">- Barbara McIntosh <small className="text-muted">M.D</small></h6>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="customer-testi p-3 text-center">
                                    <img src={client2} className="img-fluid avatar avatar-small rounded-pill mx-auto shadow" alt=""/>
                                    <p className="text-muted mt-4">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                    <h6 className="text-primary">- Carl Oliver</h6>
                                </div>
                            </Col>

                            <Col lg="8" xs="12" className="mt-4">
                                <div className="bg-light rounded position-relative overflow-hidden m-2">
                                    <Row className="align-items-center">
                                        <Col lg="5" md="4">
                                            <img src={client6} className="img-fluid" alt=""/>
                                        </Col>

                                        <Col lg="7" md="8" className="mt-2 mt-sm-0">
                                            <div className="customer-testi p-4">
                                                <h6 className="text-primary font-weight-bold">Dean Tolle <small className="text-muted d-block">User</small></h6>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                </ul>
                                                <p className="text-muted h6 mb-0 font-italic">" It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century. "</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            
                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="blog position-relative overflow-hidden shadow rounded">
                                    <div className="position-relative">
                                        <img src={blog1} className="img-fluid rounded-top" alt=""/>
                                        <div className="overlay rounded-top bg-dark"></div>
                                    </div>
                                    <div className="content p-4">
                                        <h4><Link to="#" className="title text-dark">Design your apps in your own way</Link></h4>
                                        <div className="post-meta mt-3">
                                            <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>33</Link></li>
                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>08</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="author">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="courses-desc position-relative overflow-hidden rounded border">
                                    <div className="position-relative d-block overflow-hidden">
                                        <img src={course1} className="img-fluid rounded-top mx-auto" alt=""/>
                                        <div className="overlay-work"></div>
                                        <Link to="#" className="text-white h6 preview">Preview Now <i className="mdi mdi-chevron-right"></i></Link>
                                    </div>
                                    <div className="content p-3">
                                        <h5><Link to="#" className="title text-dark">Program for Missionaries</Link></h5>
                                        <div className="rating">
                                            <ul className="list-unstyled mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star h5 mb-0 text-warning"></i></li>
                                                <li className="list-inline-item">5 Star (3<i className="mdi mdi-account text-muted"></i>)</li>
                                            </ul>
                                        </div>
                                        <div className="fees">
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="h3"><span className="h6">$</span>75</li>
                                            </ul>
                                            <ul className="list-unstyled mb-0 numbers">
                                                <li><i className="mdi mdi-school text-muted"></i> 30 Students</li>
                                                <li><i className="mdi mdi-book text-muted"></i> 5 Lession</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collection">
                                        <Link to="#"><i className="mdi mdi-heart h5"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        
                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <img src={work1} className="img-fluid rounded" alt="work"/>
                                    <div className="overlay-work"></div>
                                    <div className="content">
                                        <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                        <small className="text-light">Studio</small>
                                    </div>
                                    <div className="client">
                                        <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                        <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <img src={hotel2} className="img-fluid rounded" alt="work"/>
                                    <div className="overlay-work"></div>
                                    <div className="content">
                                        <Link to="#" className="title text-white pb-2 border-bottom">Regular Big Room</Link>
                                        <ul className="post-meta mb-0 mt-2 text-white list-unstyled">
                                            <li className="list-inline-item mr-3"><i className="mdi mdi-bed-empty mdi-24px mr-2"></i>1 Bed</li>
                                            <li className="list-inline-item"><i className="mdi mdi-scale-bathroom mdi-24px mr-2"></i>1 Bathrooms</li>
                                        </ul>
                                        <p className="text-white d-block mb-0">Rent <span className="text-success">$800</span> /Night</p>
                                    </div>
                                    <div className="read_more bg-primary text-center rounded-pill">
                                        <Link to="#" className="text-light d-block"><i className="mdi mdi-chevron-right title-dark mdi-18px"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        
                        
                            <Col lg="4" md="6" className="mt-4 pt-2">
                                <div className="catagories border rounded">
                                    <img src={work1} className="img-fluid rounded-top" alt=""/>
                                    <div className="bg-white rounded-bottom p-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="float-right h6 jobs">125 Jobs</li>
                                            <li><Link to="#" className="title h6 text-dark">Communications</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        
                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="pricing-rates business-rate shadow bg-light pt-5 pb-5 p-4 rounded text-center">
                                    <h2 className="title text-uppercase mb-4">Free</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">0</span>
                                        <span className="h4 align-self-end mb-1">/mo</span>
                                    </div>

                                    <ul className="feature list-unstyled pl-0">
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Full Access</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Enhanced Security</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>Source Files</li>
                                        <li className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>1 Domain Free</li>
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">Buy Now</Link>
                                </div>
                            </Col>
                            
                            <Col lg="5" md="6" className="col-lg-5 col-md-6 mt-4 pt-2">
                                <div className="bg-light p-4 py-5 rounded shadow d-block">
                                    <img src={master} height="60" className="text-right" alt=""/>
                                    <div className="mt-4">
                                        <h5 className="">•••• •••• •••• 4559</h5>
                                        <div>
                                            <h6 className="mb-0 float-right">Exp: <span className="text-muted">10/22</span></h6>
                                            <p className="h6 text-muted mb-0">Cristino Murfy</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        
                        
                            <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                                <div className="job-box rounded shadow position-relative overflow-hidden">
                                    <div className="border-bottom">
                                        <div className="position-relative">
                                            <img src={full} className="img-fluid" alt=""/>
                                            <div className="job-overlay bg-white"></div>
                                        </div>
                                        <h5 className="mb-0 position"><Link to="/page-job-detail" className="text-dark">UI Designer</Link>
                                            <ul className="list-unstyled h6 mb-0 text-warning">
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>                                    
                                                <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </h5>
                                        <ul className="list-unstyled head mb-0">
                                            <li className="badge badge-success badge-pill">Full Time</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="content position-relative p-4">
                                        <div className="firm-logo rounded-pill shadow bg-light text-center">
                                            <img src={Eslint} className="avatar avatar-md-sm" alt=""/>
                                        </div>
                                        <div className="company-detail text-center mt-3">
                                            <h5 className="mb-0"><Link to="/page-job-company" className="text-dark company-name">Eslint</Link></h5>
                                            <p className="text-muted"><Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="video-play-icon text-muted"><i className="mdi mdi-map-marker"></i> San Francisco</Link></p>
                                        </div>
                                        <ul className="job-facts list-unstyled">
                                            <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> 2 Year Expirence</li>
                                            <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Working Hours- 6hr</li>
                                            <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Information strategy</li>
                                        </ul>
                                        <Link to="/page-job-detail" className="btn btn-outline-primary btn-block">Apply Now</Link>
                                    </div>
                                </div>
                            </Col>
                            
                            
                            <Col lg="5" className="mt-4 pt-2">
                                <div className="event-schedule d-flex bg-white rounded p-3 border">
                                    <div className="float-left">
                                        <ul className="date text-center text-primary mr-md-4 mr-3 mb-0 list-unstyled">
                                            <li className="day font-weight-bold mb-2">11</li>
                                            <li className="month font-weight-bold">OCT</li>
                                        </ul>
                                    </div>
                                    <div className="content">
                                        <h4><Link to="#" className="text-dark title">Digital Conference Event Intro</Link></h4>
                                        <p className="text-muted location-time"><span className="text-dark h6">Address:</span> Hall 3, Sinchang-dong, Kwangju, <span className="text-danger">South Korea</span> <br/> <span className="text-dark h6">Time:</span> 10:30AM to 11:15AM</p>
                                        <Link to="#" className="btn btn-sm btn-outline-primary mouse-down">Buy Ticket</Link>
                                    </div>
                                </div>
                            </Col>
                            
                            
                            <Col md="6" xs="12" className="mt-4 pt-2">
                                <div className="faq-container">
                                    <h4 className="question"><i className="mdi mdi-help-circle text-primary mr-2 h4"></i> How our <span className="text-primary">Elektropay</span> work ?</h4>
                                    <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Widget;