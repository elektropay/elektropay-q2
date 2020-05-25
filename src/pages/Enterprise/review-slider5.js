import React, { Component } from 'react';

//Star Rating
import StarRatings from 'react-star-ratings';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

class ReviewSlider5 extends Component {
    render() {
        return (
            <React.Fragment>
                                <OwlCarousel
                                    className="owl-theme"
                                    items={this.props.items}
                                    loop
                                    margin={1}
                                    autoplay = {true}
                                >
                                    {
                                        this.props.clients.map((client, key) =>
                                            <div key={key} className="customer-testi text-center mx-4">
                                                <img src={client.image} style={{height:65, width:65}} className="img-fluid avatar avatar-small rounded-pill mx-auto shadow" alt=""/>
                                                <p className="text-light para-dark h5 font-weight-normal font-italic mt-4">" {client.desc} "</p>
                                                <StarRatings
                                                    rating={client.rating}
                                                    starRatedColor="#F17425"
                                                    numberOfStars={5}
                                                    name='rating'
                                                    starDimension = "15px"
                                                    className="list-unstyled mb-0"
                                                />
                                                <h6 className="text-light title-dark mt-1">{client.name}<small className="text-muted ml-1">{client.post}</small></h6>
                                                
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default ReviewSlider5;