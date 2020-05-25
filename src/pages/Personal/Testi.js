// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

//Star Rating
import StarRatings from 'react-star-ratings';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import bg02 from '../../images/personal/bg02.jpg';
import client1 from "../../images/client/01.jpg";
import client2 from "../../images/client/02.jpg";
import client3 from "../../images/client/03.jpg";
import client4 from "../../images/client/04.jpg";
import client5 from "../../images/client/05.jpg";
import client6 from "../../images/client/06.jpg";

class Testi extends Component {
    state = {
        clients : [
            { id : 1, image : client1, name : "Thomas Israel" , post : "C.E.O", rating : 5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
            { id : 2, image : client2, name : "Carl Oliver" , post : "P.A", rating : 4, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.." },
            { id : 3, image : client3, name : "Barbara McIntosh" , post : "M.D", rating : 3.5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
            { id : 4, image : client4, name : "Jill Webb" , post : "Manager", rating : 4.5, desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find" },
            { id : 5, image : client5, name : " Dean Tolle" , post : "Developer", rating : 5, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories." },
            { id : 6, image : client6, name : "Christa Smith" , post : "Designer", rating : 5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" style={{ background: `url(${bg02}) center center`}}>
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="7" className="text-center">
                            <OwlCarousel
                                    className="owl-theme"
                                    items={1}
                                    loop
                                    margin={1}
                                    autoplay = {true}
                                >
                                    {
                                        this.state.clients.map((client, key) =>
                                            <div key={key} className="customer-testi text-center">
                                                <p className="text-light para-dark h6 font-italic">" {client.desc} "</p>
                                                <StarRatings
                                                        rating={client.rating}
                                                        starRatedColor="#F17425"
                                                        numberOfStars={5}
                                                        name='rating'
                                                        starDimension = "15px"
                                                        className="list-unstyled mb-0 mt-3"
                                                    />
                                                <h6 className="text-light title-dark"> {client.name} </h6>
                                                <img src={client.image} style={{height:65, width:65}} className="img-fluid avatar avatar-small mt-3 rounded-pill mx-auto shadow" alt="testimonial"/>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Testi;