// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Feature from "../../components/Shared/Feature";
import SectionTitleLeft from "../../components/Shared/section-title-left";
import KeyFeatureBox from "../../components/Shared/key-feature-box";
import Counter2 from "../../components/Shared/counter2";

// Modal Video 
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

// import images
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';
import about from '../../images/about.jpg';

import Asset190 from '../../images/illustrator/Asset190.svg';
import Asset189 from '../../images/illustrator/Asset189.svg';
import Asset186 from '../../images/illustrator/Asset186.svg';
import Asset187 from '../../images/illustrator/Asset187.svg';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : pen, title : "Design & Development", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 2, imgUrl : video, title : "Management & Marketing", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 3, imgUrl : intellectual, title : "Stratagy & Research", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
            ],
            features_Line : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
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
            counters : [
                { title : "Investment", image : Asset190, start : 11000, value : 45000, postfix : "$" },
                { title : "Awards", image : Asset189, start : 0, value : 9, postfix : "+" },
                { title : "Profitability", image : Asset186, start : 12050, value : 48002, postfix : "$" },
                { title : "Growth", image : Asset187, start : 0, value : 11, postfix : "%" },
            ],
            isOpen: false,
        }
        this.openModal = this.openModal.bind(this); 
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount(){
        var featureboxes = document.getElementsByName("featurebox");
        for(var i=0; i<featureboxes.length; i++) {
            featureboxes[i].classList.add("mt-5");
        }

        var keyfeatures = document.getElementsByName("keyfeature");
        for(var j=0; j<keyfeatures.length; j++) {
            keyfeatures[j].classList.remove("mt-4");
            keyfeatures[j].classList.remove("pt-2");
            keyfeatures[j].classList.add("mb-4");
            keyfeatures[j].classList.add("pb-2");
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Beautiful & Creative Interfaces" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />

                        {/* feature box */}
                        <Feature featureArray={this.state.features} isCenter={true} /> 
                    </Container>

                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                
                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="5" md="5">
                                <div className="position-relative">
                                    <img src={about} className="rounded img-fluid mx-auto d-block" alt="" />
                                    <div className="play-icon">
                                        <Link to="#" onClick={this.openModal} className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="7" md="7" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                <SectionTitleLeft
                                    title = "Startup Business Solution"
                                    desc = "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website."
                                    features = {this.state.features_Line}
                                    class = "mdi-18px h4 mr-2"
                                />
                                    <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row>
                            {/* keyfeatures */}
                            <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
                        </Row>

                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">See everything about your <span className="text-primary">Elektropay</span></h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row id="counter">
                            {/* counter */}
                            <Counter2 counters={this.state.counters} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;