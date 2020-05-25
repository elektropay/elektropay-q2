import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

import StarRatings from 'react-star-ratings';

//Import Components
import SectionTitle from "../../components/Shared/section-title";

//Import Images
import client1 from "../../images/client/01.jpg";
import client2 from "../../images/client/02.jpg";
import client3 from "../../images/client/03.jpg";
import client4 from "../../images/client/04.jpg";
import client5 from "../../images/client/05.jpg";
import client6 from "../../images/client/06.jpg";

class Testimonials extends Component {
    state = {
        testimonials : [
            { id : 1, name : "Thomas Israel", image : client1, post : "Driver", rating: 4 , desc : "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century." },
            { id : 1, name : "Barbara McIntosh", image : client2, post : "User", rating: 5 , desc : "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century." },
            { id : 1, name : "Christa Smith", image : client3, post : "Passenger", rating: 4 , desc : "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century." },
            { id : 1, name : "Carl Oliver", image : client4, post : "Driver", rating: 3 , desc : "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century." },
            { id : 1, name : "Jill Webb", image : client5, post : "Passenger", rating: 4 , desc : "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century." },
            { id : 1, name : "Dean Tolle", image : client6, post : "User", rating: 5 , desc : "It seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    
                    {/* Render Section Title */}
                    <SectionTitle title="What our customer says!" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                    <Row className="justify-content-center mt-4">
                        <Col lg="8" xs="12">
                        <OwlCarousel
                            className="owl-theme"
                            items={1}
                            loop
                            margin={1}
                            responsive = {this.state.responsive}
                        >
                            {
                                this.state.testimonials.map((testimonial, key) =>
                                    <div key={key} className="bg-light rounded position-relative overflow-hidden m-2">
                                        <Row className="align-items-center">
                                            <Col lg="5" md="4">
                                                <img src={testimonial.image} className="img-fluid" alt=""/>
                                            </Col>
            
                                            <Col lg="7" md="8" className="mt-2 mt-sm-0">
                                                <div className="customer-testi p-4">
                                                    <h6 className="text-primary font-weight-bold">{testimonial.name} <small className="text-muted d-block">{testimonial.post}</small></h6>
                                                    <StarRatings
                                                        rating={testimonial.rating}
                                                        starRatedColor="#F17425"
                                                        numberOfStars={5}
                                                        name='rating'
                                                        starDimension = "15px"
                                                    />
                                                    <p className="text-muted h6 mb-0 font-italic">" {testimonial.desc} "</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>                                
                                )
                            }

                             
                        </OwlCarousel> 
                            
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Testimonials;