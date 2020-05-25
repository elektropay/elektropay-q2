// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

// import images
import bg01 from '../../images/course/bg01.jpg';
import bg04 from '../../images/course/bg04.jpg';
import bg05 from '../../images/course/bg05.jpg';

class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [
                { image : bg01, title : "You Can Learn Anything With Us", desc : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.", btnText : "Find Courses", btnLink : "#", icon : "mdi-book-open-variant" },
                { image : bg04, title : "Better Education For A Better Future", desc : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.", btnText : "Admission Now", btnLink : "#", icon : "mdi-school" },
                { image : bg05, title : "Education Is The Key of Success", desc : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.", btnText : "Instructors", btnLink : "#", icon : "mdi-account" },
            ],
            autoplay: true
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
                            {
                                this.state.items.map((item, key) =>
                                    <li key={key} className="bg-slider d-flex align-items-center" style={{ backgroundImage: `url(${item.image})` }}>
                                        <div className="bg-overlay"></div>
                                                <Container>
                                                    <Row className="justify-content-center">
                                                        <Col xs="12" className="text-center">
                                                            <div className="title-heading text-white mt-4">
                                                                <h1 className="display-4 title-dark font-weight-bold mb-3">{item.title}</h1>
                                                                <p className="para-desc para-dark mx-auto text-light">{item.desc}</p>
                                                                <div className="mt-4">
                                                                    <Link to={item.btnLink} className="btn btn-primary mt-2 mouse-down"><i className={"mdi " + item.icon}></i> {item.btnText}</Link>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                    </li>
                                )
                            }
                        </OwlCarousel>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;