import React, { Component } from 'react';

//Star Rating
import StarRatings from 'react-star-ratings';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

class ReviewSlider4 extends Component {
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
                                                <h6 className="text-light title-dark mt-1">{client.name}<small className="text-muted ml-1">{client.post}</small></h6>
                                                <img src={client.image} style={{height:65, width:65}} className="img-fluid avatar avatar-small rounded-pill mx-auto shadow" alt=""/>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default ReviewSlider4;