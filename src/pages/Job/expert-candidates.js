import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import CandidateBox from "./candidate-box";

//Import Images
import image1 from "../../images/client/01.jpg";
import image2 from "../../images/client/02.jpg";
import image3 from "../../images/client/03.jpg";
import image4 from "../../images/client/04.jpg";

class ExpertCandidates extends Component {
    state = {
        candidates : [
            { id : 1, image : image1, name : "Ronny Jofra", designation : "Web Developer", salary : "2300", link : "",
                socialIds : [
                    { icon : "mdi-facebook", link : "#" },
                    { icon : "mdi-instagram", link : "#" },
                    { icon : "mdi-twitter", link : "#" },
                    { icon : "mdi-google-plus", link : "#" },
                ]
            },
            { id : 2, image : image2, name : "Micheal Carlo", designation : "Web Designer", salary : "1950", link : "",
                socialIds : [
                    { icon : "mdi-facebook", link : "#" },
                    { icon : "mdi-instagram", link : "#" },
                    { icon : "mdi-twitter", link : "#" },
                    { icon : "mdi-google-plus", link : "#" },
                ]
            },
            { id : 3, image : image3, name : "Aliana Rosy", designation : "IOS Developer", salary : "2540", link : "",
                socialIds : [
                    { icon : "mdi-facebook", link : "#" },
                    { icon : "mdi-instagram", link : "#" },
                    { icon : "mdi-twitter", link : "#" },
                    { icon : "mdi-google-plus", link : "#" },
                ]
            },
            { id : 4, image : image4, name : "Sofia Razaq", designation : "Php Developer", salary : "2190", link : "",
                socialIds : [
                    { icon : "mdi-facebook", link : "#" },
                    { icon : "mdi-instagram", link : "#" },
                    { icon : "mdi-twitter", link : "#" },
                    { icon : "mdi-google-plus", link : "#" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Expert Candidates" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* candidate box */}
                            <CandidateBox candidates={this.state.candidates} />
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default ExpertCandidates;