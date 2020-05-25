// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

// import images
import bg01 from '../../images/coworking/bg01.jpg';
import bg02 from '../../images/coworking/bg02.jpg';
import bg03 from '../../images/coworking/bg03.jpg';

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            items : [
                {
                    id : 1,
                    image : bg01,
                    subtitle : "Private office and Co-working space for $19",
                    title : "Coworking  Space For a Success",
                    desc : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                },
                {
                    id : 2,
                    image : bg02,
                    subtitle : "The Best Coworking in The City",
                    title : "Office Space in Vietnam",
                    desc : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                },
                {
                    id : 3,
                    image : bg03,
                    subtitle : "Our Space for You",
                    title : "Own Your Office For A Day",
                    desc : "At vero eos et accusamus et iusto odio dignissimos ducimus a qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint cupiditate.",
                }
            ],
        }
        this.openModal = this.openModal.bind(this);
    }
    
    openModal() {
        this.setState({ isOpen: true })
    }
    
    ele = (id) => {
        if(id === 1){
            return <React.Fragment>
                        <div className="mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                            <Link to="#" className="btn btn-primary mt-2"><i className="mdi mdi-email"></i>Get Started</Link>
                        </div>
                    </React.Fragment>
        }
        else if (id === 2){
            return <React.Fragment>
                        <div className="text-center subcribe-form mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                            <Form>
                                <FormGroup>
                                    <input type="email" id="email" name="email" className="rounded" placeholder="E-mail" required/>
                                    <Button type="submit" color="primary">Book Space</Button>
                                </FormGroup>
                            </Form>
                        </div>
            </React.Fragment>
        }
        else {
            return <React.Fragment>
                        <div className="watch-video mt-4 pt-2 animated fadeInUpBig animation-delay-11">
                            <Link to="#" onClick={() => this.setState({ isOpen: true })} id="playbtn" className="video-play-icon watch text-white title-dark mb-2 ml-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white title-dark position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                        </div>
            </React.Fragment>
        }
    }

    render() {
        return (
            <React.Fragment> 
                <section className="main-slider">
                        <OwlCarousel
                            className="slides"
                            items={1}
                            loop
                            dots={false}
                            autoplay = {true}
                        >
                                    {this.state.items.map((item, key) => 
                                        <div key={key} className="bg-slider d-flex align-items-center" style={{ backgroundImage: `url(${item.image})`}}>
                                            <div className="bg-overlay"></div>
                                                <Container>
                                                    <Row className="justify-content-center">
                                                        <Col lg="12" className="text-center">
                                                            <div className="title-heading mt-4">
                                                                <h6 className="text-light para-dark animated fadeInDownBig animation-delay-1">{item.subtitle}</h6>
                                                                <h1 className="heading mb-3 text-white title-dark animated fadeInUpBig animation-delay-3">{item.title}</h1>
                                                                <p className="para-desc text-light para-dark mx-auto animated fadeInUpBig animation-delay-7">{item.desc}</p>
                                                                {this.ele(item.id)}
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </div>
                                )}
                        </OwlCarousel>
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                </section>

            </React.Fragment>
        );
    }
}

export default Section;
