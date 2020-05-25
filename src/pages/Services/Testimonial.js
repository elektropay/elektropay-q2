// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Alert, FormGroup, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import client1 from "../../images/client/amazon.svg";
import client2 from "../../images/client/google.svg";
import client3 from "../../images/client/lenovo.svg";
import client4 from "../../images/client/paypal.svg";
import client5 from "../../images/client/shopify.svg";
import client6 from "../../images/client/shopify.svg";
import analyzeReport4 from '../../images/illustrator/analyze_report_4.svg';

class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clients : [
                { id : 1, image : client1, name : "Thomas Israel" , desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today." },
                { id : 2, image : client2, name : "Carl Oliver" , desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
                { id : 3, image : client3, name : "Barbara McIntosh" , desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others." },
                { id : 4, image : client4, name : "Jill Webb" , desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts." },
                { id : 5, image : client5, name : " Dean Tolle" , desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required." },
                { id : 6, image : client6, name : "Christa Smith" , desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero." },
            ],
            responsive: {
                0: {
                    items: 1,
                },
                550: {
                    items: 1,
                },
                650: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        var sectiontitles = document.getElementsByName("maintitle");
        sectiontitles[0].classList.remove("mb-4");
        sectiontitles[0].classList.remove("pb-2");
        sectiontitles[0].classList.add("mb-60");
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md="6">
                                <img src={analyzeReport4} className="mr-md-4" alt="" />
                            </Col>

                            <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                    <h4 className="title mb-4">Clean And Modern Code</h4>
                                    <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.</p>
                                    <Link to="#" className="btn btn-outline-primary">Start Now <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Our Happy Customers" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            <Col xs="12">
                            <OwlCarousel
                                    className="owl-theme"
                                    items={3}
                                    loop
                                    margin={1}
                                    responsive = { this.state.responsive }
                                    autoplay = {true}
                                >
                                    {
                                        this.state.clients.map((client, key) =>
                                            <div key={key} className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                                                <img src={client.image} className="img-fluid avatar avatar-ex-sm mx-auto" alt=""/>
                                                <p className="text-muted mt-4">" {client.desc} "</p>
                                                <h6 className="text-primary">- {client.name}</h6>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Subscribe for our Latest Newsletter" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10}>
                            <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                Data sended successfully.
                            </Alert>
                                <Form>
                                    <FormGroup>
                                        <InputGroup className="mb-3">
                                            <Input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required/>
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary" onClick={this.handleSubmit} className="submitBnt" type="button" id="newssubscribebtn">Subscribe</Button>
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

export default Testimonial;
