// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import PricingBox2 from "../../components/Shared/pricing-box2";
import SectionTitleLeft from "../../components/Shared/section-title-left";
import Counter from "../../components/Shared/counter";

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pricings : [
                { id : 1, title : "Free", price : 0, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "Full Access"},
                        {title : "Enhanced Security"},
                        {title : "Source Files"},
                        {title : "1 Domain Free"},
                    ]
                },
                { id : 2, title : "Starter", price : 39, duration : "mo", buttonText: "Get Started", btnLink: "", isActive : true,
                    features : [
                        {title : "Full Access"},
                        {title : "Source Files"},
                        {title : "Free Appointments"},
                        {title : "Enhanced Security"},
                    ]
                },
                { id : 3, title : "PROFESSIONAL", price : 59, duration : "mo", buttonText: "Try It Now", btnLink: "",
                    features : [
                        {title : "Full Access"},
                        {title : "Enhanced Security"},
                        {title : "Source Files"},
                        {title : "1 Domain Free"},
                    ]
                }
            ],
            features : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            counter : [ 97, 15, 2, 98 ]
        }
    }

    componentDidMount(){
        var sectionsTitles=document.getElementsByName("maintitle");
        for(var i=1; i<sectionsTitles.length-1; i++) {
            sectionsTitles[i].classList.remove('mb-4');
            sectionsTitles[i].classList.remove('pb-2');
            sectionsTitles[i].classList.add('mb-60');
        }
        
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Choose Simple Pricing" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />


                        <Row className="align-items-center">
                            {/* pricing */}
                            <PricingBox2 pricings={this.state.pricings} />
                        </Row>
                    </Container>


                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="6">
                                <div className="section-title">
                                    <SectionTitleLeft
                                    desc = "You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website."
                                    features = {this.state.features}
                                    class = "mdi-18px h5 mr-2"
                                    >
                                        <h4 className="title mb-4">See everything about your <span className="text-primary">Elektropay</span> Business</h4>
                                    </SectionTitleLeft>
                                </div>
                            </Col>

                            <Col lg="6">
                                <Counter countervalue={this.state.counter} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;