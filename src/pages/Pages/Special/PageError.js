// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import img404 from '../../../images/404.png';

class PageError extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>

                <section className="bg-home d-flex align-items-center">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={8} md={12} className="text-center">
                                        <img src={img404} className="img-fluid" alt="" />
                                        <div className="text-uppercase mt-4 display-3">Oh ! no</div>
                                        <div className="text-capitalize text-dark mb-4 error-page">Page Not Found</div>
                                        <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12" className="text-center">
                                        <Link to="/index" className="btn btn-outline-primary mt-4">Go Back</Link>
                                        <Link to="/index" className="btn btn-primary mt-4 ml-2">Go To Home</Link>
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageError;
