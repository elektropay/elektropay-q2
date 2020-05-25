// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import FeatureBox from "./feature-box";

//import images
import featureImg from '../../images/app/feature.png';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { icon : "mdi-monitor-cellphone-star", title : "Use On Any Device", desc : "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds." },
                { icon : "mdi-cube-outline", title : "Material Design Icon", desc : "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds." },
                { icon : "mdi-cryengine", title : "Retina Ready", desc : "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds." },
                { icon : "mdi-check-decagram", title : "W3c Valid Code", desc : "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds." },
                { icon : "mdi-responsive", title : "Fully Responsive", desc : "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds." },
                { icon : "mdi-cards-heart", title : "Browser Compatibility", desc : "composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds." },
            ]
        }
    }

    componentDidMount(){
        var sectionTitles=document.getElementsByName("maintitle");
        sectionTitles[0].classList.remove("mb-4");
        sectionTitles[0].classList.remove("pb-2");
        sectionTitles[0].classList.add("mb-60");
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="App Features" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center align-items-center">
                            <Col lg="8" md="8">
                                <Row>
                                    <FeatureBox features={this.state.features} />
                                </Row>
                            </Col>
                            <Col lg="4" md="4" xs="12" className="pt-2 pt-sm-0 text-center text-md-right">
                                <img src={featureImg} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;
