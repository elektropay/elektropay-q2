import React, { Component } from 'react';
//Star Rating
import StarRatings from 'react-star-ratings';

//Slider
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

class ReviewSlider3 extends Component {
    state = {
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
        }
    }
    render() {
        return (
            <React.Fragment>
                                <OwlCarousel
                                    className="owl-theme"
                                    items={this.props.items}
                                    loop
                                    margin={1}
                                    responsive = { this.props.items !== 1 ? this.state.responsive : null }
                                    autoplay = {true}
                                >
                                    {
                                        this.props.clients.map((client, key) =>
                                            <div key={key} className={ this.props.isBgWhite ? "customer-testi m-2 bg-white text-center p-4 rounded shadow" : "customer-testi text-center"}>
                                                <p className="text-muted h6 font-italic">" {client.desc} "</p>
                                                <img src={client.image} style={{height:65, width:65}} className={this.props.isBgWhite ? "img-fluid avatar avatar-small mt-3 rounded-pill mx-auto shadow" : "img-fluid avatar avatar-small rounded-pill mx-auto shadow"} alt=""/>
                                                <StarRatings
                                                    rating={client.rating}
                                                    starRatedColor="#F17425"
                                                    numberOfStars={5}
                                                    name='rating'
                                                    starDimension = "15px"
                                                    starSpacing="5px"
                                                    className="list-unstyled mb-0 mt-3"
                                                />
                                                <h6 className="text-primary mt-1">- {client.name}<small className="text-muted ml-1">{client.post}</small></h6>
                                            </div>
                                        )
                                    }
                                </OwlCarousel>
            </React.Fragment>
        );
    }
}

export default ReviewSlider3;