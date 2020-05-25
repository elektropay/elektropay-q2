// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../components/Shared/page-breadcrumb";
import SectionTitle from "../../components/Shared/section-title";
import TeamBox from "../../components/Shared/team-box";

// import images
import team1 from '../../images/team/1.jpg';
import team2 from '../../images/team/2.jpg';
import team3 from '../../images/team/3.jpg';
import team4 from '../../images/team/4.jpg';
import team5 from '../../images/team/5.jpg';
import team6 from '../../images/team/6.jpg';
import team7 from '../../images/team/7.jpg';
import team8 from '../../images/team/8.jpg';

class PageTeam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Team" },

            ],
            candidates : [
                { id : 1, image : team1, name : "Ronny Jofra", designation : "Web Developer", salary : "2300", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 2, image : team2, name : "Micheal Carlo", designation : "Web Designer", salary : "1950", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 3, image : team3, name : "Aliana Rosy", designation : "IOS Developer", salary : "2540", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 4, image : team4, name : "Sofia Razaq", designation : "Php Developer", salary : "2190", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 5, image : team5, name : "Calvin Carlo", designation : "C.E.O", salary : "2190", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id :6, image : team6, name : "Juhi Chawla", designation : "Director", salary : "2190", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 7, image : team7, name : "Arlo Walker", designation : "Manager", salary : "2190", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 8, image : team8, name : "Randeep Huda", designation : "Developer", salary : "2190", link : "",
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
    
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);

        var teambox = document.getElementsByName("team");
        for ( var i=0; i<teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }


    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb
                    title="Team Members"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                    {/* Render Section Title */}
                    <SectionTitle title="Our Greatest Minds" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

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
export default PageTeam;
