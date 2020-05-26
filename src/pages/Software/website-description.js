import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitleLeft from "../../components/Shared/section-title-left";

//Import Images
import mobile from "../../images/software/mobile01.png";

class WebsiteDescription extends Component {
    state = {
        features : [
            { title : "Digital Payment Solutions for Tomorrow" },
            { title : "Our Secure & Experienced Marketing Agency" },
            { title : "Fully Whitelabeled to match your brand" },
        ],
    }

    componentDidMount(){
        var featurelines=document.getElementsByName("featurelines");
        featurelines[0].classList.add("mb-0");
    }

    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg="5" md="6">
                                <img src={mobile} className="img-fluid" alt=""/>
                            </Col>

                            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                <SectionTitleLeft
                                    title = "Maximizing Revenue Channels"
                                    desc = "Every business encounters credit card declines. In subscription commerce, declines increase subscriber churn and reduce revenue. This means you can focus on growing your subscriber base while we work to maximize your revenue."
                                    features = {this.state.features}
                                    class = "mdi-18px h5 mr-2"
                                />
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default WebsiteDescription;