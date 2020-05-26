import React, { Component } from 'react';
import { Container, Row, Col, Badge } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Feature from "../../components/Shared/Feature";

//Import Images
import pen from "../../images/icon/pen.svg";
import video from "../../images/icon/video.svg";
import intellectual from "../../images/icon/intellectual.svg";
import user from "../../images/icon/user.svg";
import calendar from "../../images/icon/calendar.svg";
import sandClock from "../../images/icon/sand-clock.svg";
import mobile from "../../images/software/mobile-hori.png";


class Features extends Component {
    state = {
        features : [
            { id : 1, imgUrl : pen, title : "Seo Services", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
            { id : 2, imgUrl : video, title : "Email Marketing", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
            { id : 3, imgUrl : intellectual, title : "Data Analysis", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
            { id : 4, imgUrl : user, title : "Digital Marketing", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
            { id : 5, imgUrl : calendar, title : "Social Media Marketing", description : "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word." },
            { id : 6, imgUrl : sandClock, title : "Link Building", description : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today." },
        ]
    }

    componentDidMount(){
        var featureboxes = document.getElementsByName("featurebox");
        for( var i=0; i<featureboxes.length ; i++) {
            featureboxes[i].classList.add("mt-5");
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Why Us" desc=" can provide everything you need to conduct commerce, pay suppliers, subscription billing." />

                    {/* feature box */}
                    <Feature featureArray={this.state.features} isCenter={true} />

                    <Row className="justify-content-center mt-5 pt-4">
                        <Col lg="10" md="12">
                            <img src={mobile} className="img-fluid d-block mx-auto" alt=""/>
                        </Col>
                        <Col xs="12" className="text-center pt-2">
                            <div className="alert alert-light alert-pills shadow" role="alert">
                                <Badge color="primary" className="rounded mr-1">Download</Badge>
                                <span className="content"> Trusted by the world's best <i className="mdi mdi-download"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Features;