// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import comingsoon from '../../../images/comingsoon.jpg';

//CountDown
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return <React.Fragment>
            <div className="count-down">
                <span className="count-number">45</span>
                <span className="count-head position-relative d-block">Days</span></div>
            <div className="count-down">
                <span className="count-number">{hours}</span>
                <span className="count-head position-relative d-block">Hours</span>
            </div> <div className="count-down">
                <span className="count-number">{minutes}</span>
                <span className="count-head position-relative d-block">Minutes</span>
            </div> <div className="count-down">
                <span className="count-number">{seconds}</span>
                <span className="count-head position-relative d-block">Seconds</span>
            </div>
        </React.Fragment>
    }
};


class PageComingSoon extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {

        return (
            <React.Fragment>
                <div className="back-to-home rounded d-none d-sm-block">
                    <Link to="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></Link>
                </div>
                <section className="bg-home d-flex align-items-center" style={{ backgroundImage: `url(${comingsoon})` }}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="8" md="12" className="text-center">
                                <Link to="#" className="text-white title-dark logo h5">Landrick<span className="text-primary">.</span></Link>
                                <div className="text-uppercase title-dark text-white mt-2 mb-4 coming-soon">We're Coming soon...</div>
                                <p className="text-light para-desc para-dark mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" className="text-center">
                                <div id="countdown">
                                    <Countdown
                                        date={Date.now() + 1199658655000}
                                        renderer={renderer}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" className="text-center">  
                                <Link to="/index" className="btn btn-primary mt-4"><i className="mdi mdi-backup-restore"></i> Go Back Home</Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageComingSoon;
