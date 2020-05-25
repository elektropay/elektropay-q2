// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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

class Testi extends Component {

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
            }
        }
    }

    componentDidMount(){
        var sectiontitles = document.getElementsByName("maintitle");
        sectiontitles[1].classList.remove("mb-4");
        sectiontitles[1].classList.remove("pb-2");
        sectiontitles[1].classList.add("mb-60");
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pb-0">
                    <Container>
                        {/* render Section title */}
                        <SectionTitle title="Our Happy Customers" desc=" that can provide everything you need to generate awareness, drive traffic, connect."/>

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
                </section>
            </React.Fragment>
        );
    }
}

export default Testi;
