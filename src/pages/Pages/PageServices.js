// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../components/Shared/page-breadcrumb";
import SectionTitle from "../../components/Shared/section-title";
import ReviewsSlider from "../../components/Shared/reviews-slider";
import Feature from "../../components/Shared/Feature";

// import images
import pen from "../../images/icon/pen.svg";
import video from "../../images/icon/video.svg";
import intellectual from "../../images/icon/intellectual.svg";
import user from "../../images/icon/user.svg";
import calendar from "../../images/icon/calendar.svg";
import sandClock from "../../images/icon/sand-clock.svg";

//Import Images
import img1 from "../../images/client/01.jpg";
import img2 from "../../images/client/02.jpg";
import img3 from "../../images/client/03.jpg";
import img4 from "../../images/client/04.jpg";
import img5 from "../../images/client/05.jpg";
import img6 from "../../images/client/06.jpg";


import work1 from "../../images/work/1.jpg";
import work2 from "../../images/work/2.jpg";
import work3 from "../../images/work/3.jpg";
import work4 from "../../images/work/4.jpg";


class PageServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Services" },
            ],
            reviews : [
                { id : 1, img : img1, name : "Thomas Israel", post : "C.E.O", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating : 5 },
                { id : 2, img : img2, name : "Barbara McIntosh", post : "M.D", desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating : 4 },
                { id : 3, img : img3, name : "Carl Oliver", post : "P.A", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating : 3 },
                { id : 4, img : img4, name : "Christa Smith", post : "Manager", desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating : 5 },
                { id : 5, img : img5, name : "Dean Tolle", post : "Developer", desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating : 5 },
                { id : 6, img : img6, name : "ill Webb", post : "Designer", desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating : 4 },
            ],
            features : [
                { id : 1, imgUrl : pen, title : "Design & Development", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 2, imgUrl : video, title : "Management & Marketing", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 3, imgUrl : intellectual, title : "Stratagy & Research", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
                { id : 4, imgUrl : user, title : "Easy To Use", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 5, imgUrl : calendar, title : "Daily Reports", description : "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word." },
                { id : 6, imgUrl : sandClock, title : "Real Time Zone", description : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today." },
            ]
        }
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


    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Services"
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
                        {/* feature box */}
                        <Feature featureArray={this.state.features}/>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* Render Section Title */}
                        <SectionTitle title="Client Reviews" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        {/* clients slider */}
                        <ReviewsSlider reviews={this.state.reviews}/>
                    </Container>
                </section>

                <section className="section bg-light">
                    <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Out Latest Projects" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work1} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Shifting Perspective</Link>
                                            <small className="text-light">Studio</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work2} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Colors Magazine</Link>
                                            <small className="text-light">Web Design</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work3} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Spa Cosmetics</Link>
                                            <small className="text-light">Developing</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={6} className="mt-4 pt-2">
                                <div className="work-container position-relative shadow rounded">
                                    <div className="position-relative overflow-hidden">
                                        <img src={work4} className="img-fluid rounded" alt="work" />
                                        <div className="overlay-work"></div>
                                        <div className="content">
                                            <Link to="#" className="title text-white d-block font-weight-bold">Riser Coffee</Link>
                                            <small className="text-light">Branding</small>
                                        </div>
                                        <div className="client">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> Calvin Carlo</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started Now</Link>
                                        <Link to="#" className="btn btn-outline-primary mt-2">Free Trial</Link>
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
export default PageServices;
