import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

// Import images
import bg01 from '../../images/hotel/bg01.jpg';
import bg02 from '../../images/hotel/bg02.jpg';
import bg03 from '../../images/hotel/bg03.jpg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            items : [
                {
                    id : 1,
                    image : bg01,
                    h1 : "Enjoy Better Holidays <br /> With Landrick Resort",
                    p : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    btnclass : "video-play-icon watch text-dark",
                    btntext : "WATCH VIDEO",
                    link : "#",
                    iClass : "mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white title-dark position-relative play play-iconbar"
                },
                {
                    id : 2,
                    image : bg02,
                    h1 : "Enjoy The World <br /> of Relaxation",
                    p : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    btnclass : "btn btn-primary",
                    btntext : "ABOUT US",
                    link : "/page-aboutus",
                    iClass : "mdi mdi-briefcase"
                },
                {
                    id : 3,
                    image : bg03,
                    h1 : "Welcome Landrick, <br /> A Stunning Hotel",
                    p : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    btnclass : "btn btn-primary mouse-down",
                    btntext : "BOOK NOW",
                    link : "#",
                    iClass : "mdi mdi-home-assistant"
                }
            ],
        }
        this.openModal.bind(this);
    }
    
    openModal() {
        this.setState({ isOpen: true });
    }

    componentDidMount(){
        document.getElementById("btn1").addEventListener("click", () => this.setState({ isOpen: true }));
    }

    render() {
        const slides = this.state.items.map((item, key) => {
            return(
                <li
                    className = "bg-slider bg-animation-left d-flex align-items-center"
                    //tag = "div"
                    key = {key}
                    style={{ backgroundImage: `url(${item.image})`}}
                >
                            <Container>
                                <Row className="align-items-center">
                                    <Col>
                                        <div className="title-heading position-relative mt-4" style={{zIndex:"1"}}>
                                            <h1 className="heading mb-3" dangerouslySetInnerHTML={{__html: item.h1}}></h1>
                                            <p>{item.p}</p>
                                            <div className="watch-video mt-4 pt-2">
                                                <Link to={item.link} id={"btn"+ item.id } className={item.btnclass}><i className={item.iClass}></i> {item.btntext}</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                </li>
        )}
        );
        return (
            <React.Fragment>
                <section className="main-slider">
                    <OwlCarousel
                            className="slides"
                            items={1}
                            loop
                            dots={false}
                            autoplay = {true}
                            margin = {0}
                        >
                        {slides}
                    </OwlCarousel>
                </section>

                <ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='99025203' onClose={() => this.setState({ isOpen: false })} />
            </React.Fragment>
        );
    }
}

export default Section;