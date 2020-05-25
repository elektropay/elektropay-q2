// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import KeyFeatureBox from "../../components/Shared/key-feature-box";
import SectionTitleLeft from "../../components/Shared/section-title-left";
import ReviewsSlider from "../../components/Shared/reviews-slider";

// Import images
import youtubeMedia from '../../images/illustrator/youtube-media.svg';
import img1 from "../../images/client/01.jpg";
import img2 from "../../images/client/02.jpg";
import img3 from "../../images/client/03.jpg";
import img4 from "../../images/client/04.jpg";
import img5 from "../../images/client/05.jpg";
import img6 from "../../images/client/06.jpg";

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            features : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            reviews : [
                { id : 1, img : img1, name : "Thomas Israel", post : "C.E.O", desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.", rating : 5 },
                { id : 2, img : img2, name : "Barbara McIntosh", post : "M.D", desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.", rating : 4 },
                { id : 3, img : img3, name : "Carl Oliver", post : "P.A", desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.", rating : 3 },
                { id : 4, img : img4, name : "Christa Smith", post : "Manager", desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.", rating : 5 },
                { id : 5, img : img5, name : "Dean Tolle", post : "Developer", desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required.", rating : 5 },
                { id : 6, img : img6, name : "ill Webb", post : "Designer", desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.", rating : 4 },
            ],
        }
    }

    componentDidMount() {
        
        var sectionTitle = document.getElementsByName("maintitle");
        sectionTitle[1].classList.remove("mb-4");
        sectionTitle[1].classList.remove("pb-2");
        sectionTitle[1].classList.add("mb-60");
    }


    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                            {/* section title */}
                            <SectionTitle title="Sample Features" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />

                        <Row>
                            {/* key Features */}
                            <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
                        </Row>

                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="5" md="6">
                                <img src={youtubeMedia} alt="" />
                            </Col>

                            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <SectionTitleLeft
                                        title = "A better compose with landrick marketing"
                                        desc = "You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                                        features = {this.state.features}
                                        class = "mdi-18px h5 mr-2"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Our Valuable Clients" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />
                        
                        {/* clients slider */}
                        <ReviewsSlider reviews={this.state.reviews}/>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;