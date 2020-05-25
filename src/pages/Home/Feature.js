// React basic and bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import KeyFeatureBox from "../../components/Shared/key-feature-box";

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
                { icon : "mdi-file-image", title : "Free Illustrator Image" },
                { icon : "mdi-camera", title : "Free Images" },
                { icon : "mdi-google-glass", title : "Free Google Fonts" },
                { icon : "mdi-source-commit", title : "Well Commented Code" },
                { icon : "mdi-code-tags", title : "Clean Code" },
                { icon : "mdi-update", title : "Free Updates" },
                { icon : "mdi-account-heart-outline", title : "Developer Friendly" },
                { icon : "mdi-alpha-f-circle-outline", title : "Flatpickr" },
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-two">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <div className="section-title text-center">
                                    <h3 className="mb-4">Template Features</h3>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <KeyFeatureBox keyfeatures={this.state.keyfeatures} />
                            {/* <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="key-feature d-flex p-3 rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className="mdi mdi-responsive text-custom"></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">Fully Responsive</h4>
                                    </div>
                                </div>
                            </div> */}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Feature;
