// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import TeamBox from "../../components/Shared/team-box";

//Import Images
import image1 from "../../images/client/01.jpg";
import image2 from "../../images/client/02.jpg";
import image3 from "../../images/client/03.jpg";
import image4 from "../../images/client/04.jpg";

// Partners
import Partners from '../../components/Shared/Partners';

class Speakers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidates : [
                { id : 1, image : image1, name : "Ronny Jofra", designation : "Organizer", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 2, image : image2, name : "Micheal Carlo", designation : "Event Manager", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 3, image : image3, name : "Aliana Rosy", designation : "Motivator", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 4, image : image4, name : "Sofia Razaq", designation : "Speaker", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
            ]
        }
    }

    componentDidMount(){
        for(var i=1; i<=6; i++){
            document.getElementById("partner"+i).classList.remove("mt-sm-0");
            document.getElementById("partner"+i).classList.add("mt-4");
            document.getElementById("partner"+i).classList.add("pt-2");
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Our Speakers" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* teambox */}
                            <TeamBox candidates={this.state.candidates} />
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-50">
                        {/* section title */}
                        <SectionTitle title="Event Sponsors" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                            {/* Partners */}
                            <Partners />
                    </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Speakers;