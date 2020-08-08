// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../components/Shared/page-breadcrumb";
import SectionTitle from "../../components/Shared/section-title";
import KeyFeatureBox from "../../components/Shared/key-feature-box";
import TeamBox from "../../components/Shared/team-box";

// import images
import about from '../../images/about.jpg';
import team1 from '../../images/team/1.jpg';
import team2 from '../../images/team/2.jpg';
import team3 from '../../images/team/3.jpg';
import team4 from '../../images/team/4.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class PageAboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "About Us" },
            ],
            keyfeatures : [
                { icon : "mdi-responsive", title : "Fully Responsive" },
                { icon : "mdi-internet-explorer", title : "Browser Compatibility" },
                { icon : "mdi-cryengine", title : "Retina Ready" },
                { icon : "mdi-bootstrap", title : "Based On Bootstrap 4" },
                { icon : "mdi-cube-outline", title : "Material Design Icon" },
                { icon : "mdi-sass", title : "Built With SASS" },
                { icon : "mdi-check-decagram", title : "W3c Valid Code" },
                { icon : "mdi-vector-bezier", title : "Flaticon Icon" },
                { icon : "mdi-settings-outline", title : "Easy to customize" },
            ],
            candidates : [
                { id : 1, image : team1, name : "Ronny Jofra", designation : "Organizer", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 2, image : team2, name : "Micheal Carlo", designation : "Event Manager", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 3, image : team3, name : "Aliana Rosy", designation : "Motivator", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 4, image : team4, name : "Sofia Razaq", designation : "Speaker", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
            ],
            isOpen: false, 
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

        var teambox = document.getElementsByName("team");
        for ( var i=0; i<teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }
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
                <PageBreadcrumb
                    title="About Us"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                    
                <section className="section">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <Link onClick={this.openModal}  to="#" className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4">Our Story</h4>
                                    <p className="text-muted">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                    <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                    {/* Render Section Title */}
                    <SectionTitle title="Key Features" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* key features */}
                            <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
                        </Row>

                        <Row className="justify-content-center">
                            <Col className="text-center mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="section bg-light">
                    <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Our Greatest Minds" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* teambox */}
                            <TeamBox candidates={this.state.candidates} />
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">See everything about your employee at one place.</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 mr-2">Get Started Now</Link>&nbsp;
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
export default PageAboutUs;
