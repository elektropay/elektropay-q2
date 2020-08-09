import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitleLeft from "../../components/Shared/section-title-left";

//Import Images
import mobile from "../../images/software/mobile01.png";

class WebsiteDescription extends Component {
    state = {
        features : [
            { title : "Scalable digital payment solutions for tomorrow." },
            { title : "Reach more buyers and drive higher conversions." },
            { title : "Leverage our extensive network to expand markets." },
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
                                    title = "Maximize Revenue Channels"
                                    desc = "Connect with more customers and increase your bottom line with Elektropay's Open Commerce platform, customize your account to connect and choose your payment processor or card acquirers, customize your alternative payment methods and you can also use the most popular digital wallets in a single, seamless integration."
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
