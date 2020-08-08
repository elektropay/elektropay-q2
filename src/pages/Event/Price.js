// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import ReviewSlider3 from "../../components/Shared/review-slider3";

//Import Images
import client1 from "../../images/client/01.jpg";
import client2 from "../../images/client/02.jpg";
import client3 from "../../images/client/03.jpg";
import client4 from "../../images/client/04.jpg";
import client5 from "../../images/client/05.jpg";
import client6 from "../../images/client/06.jpg";

//import images
import ticket1 from '../../images/icon/ticket1.svg';
import ticket2 from '../../images/icon/ticket2.svg';
import ticket3 from '../../images/icon/ticket3.svg';

class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pricings : [
                { id : 1, title : "MEMBER", image : ticket1, price : "19", duration : "Day", desc : "Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect." },
                { id : 2, title : "DESK", image : ticket2, price : "39", duration : "Full", desc : "Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect.", isActive : true },
                { id : 3, title : "DEDICATED", image : ticket3, price : "49", duration : "Day", desc : "Start working with Elektropay that can provide everything you need to generate awareness, drive traffic, connect." },
            ],
            clients : [
                { id : 1, image : client1, name : "Thomas Israel" , post : "C.E.O", rating : 5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
                { id : 2, image : client2, name : "Carl Oliver" , post : "P.A", rating : 4, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.." },
                { id : 3, image : client3, name : "Barbara McIntosh" , post : "M.D", rating : 3.5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century." },
                { id : 4, image : client4, name : "Jill Webb" , post : "Manager", rating : 4.5, desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find" },
                { id : 5, image : client5, name : " Dean Tolle" , post : "Developer", rating : 5, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories." },
                { id : 6, image : client6, name : "Christa Smith" , post : "Designer", rating : 5, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text." },
            ],
            autoplay: true
        }
    }

    componentDidMount(){
        var sectionTitles = document.getElementsByName("maintitle");
        sectionTitles[4].classList.remove("mb-4");
        sectionTitles[4].classList.remove("pb-2");
        sectionTitles[4].classList.add("mb-60");
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="tickets">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Our Tickets Rates" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="align-items-center">
                            {
                                this.state.pricings.map((pricing, key) =>
                                    <Col md="4" xs="12" key={key} className="mt-4 pt-2">
                                        <div className={pricing.isActive ? "pricing-rates best-plan position-relative overflow-hidden shadow bg-white pt-5 pb-5 p-4 rounded text-center" : "pricing-rates best-plan bg-light pt-5 pb-5 p-4 rounded text-center"}>
                                            {
                                                pricing.isActive ?
                                                <div className="lable text-center bg-primary pt-2 pb-2">
                                                    <h6 className="best text-white title-dark mb-0 text-uppercase">Full</h6>
                                                </div> : null
                                            }
                                            <img src={pricing.image} className="mb-4" height="50" alt="" />
                                            <h2 className="title text-uppercase mb-4">{pricing.title}</h2>
                                            <div className="d-flex justify-content-center mb-4">
                                                <span className="h4 mb-0 mt-2">$</span>
                                                <span className="price display-4 mb-0">{pricing.price}</span>
                                                <span className="h4 align-self-end mb-1">/{pricing.duration}</span>
                                            </div>

                                            <p className="text-muted">{pricing.desc}</p>
                                            <Link to="#" className="btn btn-outline-primary btn-sm mt-4">Buy Tickets</Link>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Events Review" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center">
                            <Col lg={9} className="text-center">
                                {/* review-slider */}
                                <ReviewSlider3 clients={this.state.clients} items={1} />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Price;