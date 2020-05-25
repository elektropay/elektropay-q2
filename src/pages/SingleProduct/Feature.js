// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

///Import Components
import FeatureBoxSmall from "./feature-box-small";
import SectionTitleLeft from "../../components/Shared/section-title-left";

// Import images
import cameraImg from '../../images/icon/camera.svg';
import speedometer from '../../images/icon/speedometer.svg';
import lowBattery from '../../images/icon/low-battery.svg';
import game from '../../images/icon/game.svg';
import cameraSingle from '../../images/single/camera.png';

class Feature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { image : cameraImg, title : "Camera", desc : "48 mp at 60mtr" },
                { image : speedometer, title : "Speed", desc : "50 kph" },
                { image : lowBattery, title : "Battery", desc : "1 hour and 30 min" },
                { image : game, title : "Control", desc : "20 km Range" },
            ],
            features_lines : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Create your own skin to match your brand" },
            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row>
                            {
                                <FeatureBoxSmall features={this.state.features} />
                            }
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={cameraSingle} className="img-fluid" alt="" />
                            </Col>

                            <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-3">
                                <SectionTitleLeft
                                    title = "DJI 48MP Camera"
                                    desc = "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact."
                                    features = {this.state.features_lines}
                                    class = "mdi-18px h5 mr-2"
                                />
                                    <Link to="#" className="mt-3 text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Feature;
