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
            { title : "Fully White labeled to match your brand" },
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
                                    title = "Maximizing Your Revenue Channels"
                                    desc = "Connect with more customers and increase your bottom line with Elektropay's Open Commerce platform that connects all major payment processors, credit, gift and debit cards, Echecks, and most popular digital wallets in a single, seamless integration."
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
