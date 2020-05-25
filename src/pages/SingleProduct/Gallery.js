// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input, InputGroup, Alert, InputGroupAddon, Button } from 'reactstrap';

//Import Slick Slider
import Slider from "react-slick";

//Import Components
import SectionTitle from "../../components/Shared/section-title";

//Import Slick Slider CSS
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

// import images
import single01 from '../../images/single/01.jpg';
import single02 from '../../images/single/02.jpg';
import single03 from '../../images/single/03.jpg';
import single04 from '../../images/single/04.jpg';
import single05 from '../../images/single/05.jpg';
import single06 from '../../images/single/06.jpg';
import single07 from '../../images/single/07.jpg';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

    render() {
        var settings = {
            autoplay:true,
            infinite: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade : true,
            draggable : true,
            pauseOnHover: true
          };
          
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md="6">
                                {/* main slider */}
                                <Slider
                                    {...settings}
                                    asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}
                                >
                                    <div><img src={single01} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single02} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single03} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single04} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single05} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single06} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                    <div><img src={single07} id="main_src" className="img-fluid rounded" alt="alt" /></div>
                                </Slider>

                                {/* Slider thumbnails */}
                                <Slider
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={3}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                <div><img src={single01} className="img-fluid" alt=""/></div>
                                <div><img src={single02}  className="img-fluid" alt=""/></div>
                                <div><img src={single03}  className="img-fluid" alt=""/></div>
                                <div><img src={single04}  className="img-fluid" alt=""/></div>
                                <div><img src={single05} className="img-fluid" alt=""/></div>
                                <div><img src={single06} className="img-fluid" alt=""/></div>
                                <div><img src={single07}  className="img-fluid" alt=""/></div>
                                </Slider>
                            </Col>

                            <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-md-4">
                                    <h4 className="title mb-4">DJI Spark Drone</h4>
                                    <div className="mt-4">
                                        <div className="float-right text-warning">
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star"></span>
                                            <span className="mdi mdi-star-half"></span>
                                            <span className="text-muted pl-3">23 Reviews</span>
                                        </div>
                                        <h4 className="mt-4"><b>$ 1800</b></h4>
                                    </div>
                                    <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-check mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-check mr-2"></i>Create your own skin to match your brand</li>
                                        <li><i className="mdi mdi-check mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-check mr-2"></i>Create your own skin to match your brand</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-primary">Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Sign up for our Newsletter" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg="7" md="10" >
                                <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                    Data sended successfully.
                                </Alert>
                                <Form>
                                    <FormGroup>
                                        <InputGroup className="mb-3">
                                            <Input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required="" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary" className="submitBnt" onClick={this.handleSubmit} type="button" id="newssubscribebtn">Subscribe</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Gallery;