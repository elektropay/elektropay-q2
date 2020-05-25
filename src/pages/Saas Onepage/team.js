import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import TeamBox from "../../components/Shared/team-box";

//Import Images
import image1 from "../../images/client/01.jpg";
import image2 from "../../images/client/01.jpg";
import image3 from "../../images/client/01.jpg";
import image4 from "../../images/client/01.jpg";

class Team extends Component {
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

    componentDidMount(){
        var teambox = document.getElementsByName("team");
        for ( var i=0; i<teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Our Team Member" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* teambox */}
                            <TeamBox candidates={this.state.candidates} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Team;