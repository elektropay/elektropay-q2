// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Pricing from "../../components/Shared/pricing-box";
import SectionTitleLeft from "../../components/Shared/section-title-left";
import ReviewSlider3 from "../../components/Shared/review-slider3";

//Import Images
import client1 from "../../images/client/01.jpg";
import client2 from "../../images/client/02.jpg";
import client3 from "../../images/client/03.jpg";
import client4 from "../../images/client/04.jpg";
import client5 from "../../images/client/05.jpg";
import client6 from "../../images/client/06.jpg";

import StartupSVG from '../../images/illustrator/Startup_SVG.svg';


class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pricings : [
                { id : 1, title : "Free", price : 0, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "Full Access"},
                        {title : "Source Files"},
                    ]
                },
                { id : 2, title : "Starter", price : 39, duration : "mo", buttonText: "Get Started", btnLink: "", isActive : true,
                    features : [
                        {title : "Full Access"},
                        {title : "Source Files"},
                        {title : "Free Appointments"},
                    ]
                },
                { id : 3, title : "PROFESSIONAL", price : 59, duration : "mo", buttonText: "Try It Now", btnLink: "",
                    features : [
                        {title : "Full Access"},
                        {title : "Source Files"},
                        {title : "1 Domain Free"},
                        {title : "Enhanced Security"},
                    ]
                },
                { id : 4, title : "ULTIMATE", price : 79, duration : "mo", buttonText: "Started Now", btnLink: "",
                    features : [
                        {title : "Full Access"},
                        {title : "Enhanced Security"},
                        {title : "Source Files"},
                        {title : "1 Domain Free"},
                        {title : "Free Installment"},
                    ]
                }
            ],
            features_Line : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            clients : [
                { id : 1, image : client1, name : "Thomas Israel" , post : "C.E.O", rating : 5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
                { id : 2, image : client2, name : "Carl Oliver" , post : "P.A", rating : 4, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.." },
                { id : 3, image : client3, name : "Barbara McIntosh" , post : "M.D", rating : 3.5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
                { id : 4, image : client4, name : "Jill Webb" , post : "Manager", rating : 4.5, desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find" },
                { id : 5, image : client5, name : " Dean Tolle" , post : "Developer", rating : 5, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories." },
                { id : 6, image : client6, name : "Christa Smith" , post : "Designer", rating : 5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },
            ]
        }
    }

    componentDidMount(){
        var sectionTitles=document.getElementsByName("maintitle");
        sectionTitles[2].classList.remove("mb-4");
        sectionTitles[2].classList.remove("pb-2");
        sectionTitles[2].classList.add("mb-60");
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Charge your creative inspiration" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row id="pricing">
                            <Pricing pricings={this.state.pricings} />
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="5" md="6">
                                <img src={StartupSVG} className="img-fluid" alt="" />
                            </Col>
                            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <SectionTitleLeft
                                        title = "Startup Business Solution"
                                        desc = "You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
                                        features = {this.state.features_Line}
                                        class = "mdi-18px h5 mr-2"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Important Clients Review" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center">
                            <Col lg="9" className="text-center">
                                {/* review-slider */}
                                <ReviewSlider3 clients={this.state.clients} items={1} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Price;