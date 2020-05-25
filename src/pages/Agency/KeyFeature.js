// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


//Import Components
import SectionTitle from "../../components/Shared/section-title";
import KeyFeatureBox from "../../components/Shared/key-feature-box";

class KeyFeature extends Component {

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
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Template Key Feature" desc="that can provide everything you need to generate awareness, drive traffic, connect" />
                        
                        <Row>
                            <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
                        </Row>

                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default KeyFeature;
