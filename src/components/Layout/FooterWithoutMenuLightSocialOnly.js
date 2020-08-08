import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

class FooterWithoutMenuLightSocialOnly extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <footer className={"footer footer-bar " + this.props.class}>
                    <Container className="text-center">
                        <Row className="align-items-center">
                            <Col sm="6">
                                <div className="text-sm-left">
                                    <p className="mb-0">© 2019-20 Elektropay. Develop by <Link to="#" target="_blank" className="text-success">Themesbrand</Link>.</p>
                                </div>
                            </Col>

                            <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i className="mdi mdi-skype" title="SKYPE"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1"><i className="mdi mdi-google-plus" title="GOOGLE +"></i></Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterWithoutMenuLightSocialOnly;
