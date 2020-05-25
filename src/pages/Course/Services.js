// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import Components
import CourseBox from "./course-box";
import SectionTitle from "../../components/Shared/section-title";
import TeamBox from "../../components/Shared/team-box";

// import images
import course1 from '../../images/course/1.jpg';
import course2 from '../../images/course/2.jpg';
import course3 from '../../images/course/3.jpg';
import course4 from '../../images/course/4.jpg';
import course5 from '../../images/course/5.jpg';
import course6 from '../../images/course/6.jpg';
import course7 from '../../images/course/7.jpg';
import course8 from '../../images/course/8.jpg';
import course9 from '../../images/course/9.jpg';

import team01 from '../../images/team/1.jpg';
import team02 from '../../images/team/2.jpg';
import team03 from '../../images/team/3.jpg';
import team04 from '../../images/team/4.jpg';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses : [
                { id : 1, image : course1, title : "Program for Missionaries", price : 75, rating : 5, person : 5, students : 30, lession : 5 },
                { id : 2, image : course2, title : "Access to Higher Education", price : 150, rating : 4, person : 5, students : 30, lession : 5 },
                { id : 3, image : course3, title : "Course in TEFL Teacher Training", price : 130, rating : 4.7, person : 5, students : 30, lession : 5 },
                { id : 4, image : course4, title : "Educational Communication", price : 85, rating : 2.5, person : 3, students : 30, lession : 5 },
                { id : 5, image : course5, title : "Introduction to Epidemiology", price : 100, rating : 4.5, person : 3, students : 30, lession : 5 },
                { id : 6, image : course6, title : "Good Clinical Practice", price : 109, rating : 3, person : 2, students : 30, lession : 5 },
                { id : 7, image : course7, title : "Advanced Diagnostic Research", price : 55, rating : 4.5, person : 8, students : 30, lession : 5 },
                { id : 8, image : course8, title : "Skills Development Facilitation", price : 135, rating : 5, person : 3, students : 30, lession : 5 },
                { id : 9, image : course9, title : "PGCE Primary", price : 55, rating : 5, person : 3, students : 30, lession : 5 },
            ],
            candidates : [
                { id : 1, image : team01, name : "Ronny Jofra", designation : "Organizer", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 2, image : team02, name : "Micheal Carlo", designation : "Event Manager", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 3, image : team03, name : "Aliana Rosy", designation : "Motivator", link : "",
                    socialIds : [
                        { icon : "mdi-facebook", link : "#" },
                        { icon : "mdi-instagram", link : "#" },
                        { icon : "mdi-twitter", link : "#" },
                        { icon : "mdi-google-plus", link : "#" },
                    ]
                },
                { id : 4, image : team04, name : "Sofia Razaq", designation : "Speaker", link : "",
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
        var teambox = document.getElementsByName("teambox");
        for(var i=0; i<teambox.length; i++){
            teambox[i].classList.remove("rounded");
            teambox[i].classList.remove("bg-white");
            teambox[i].classList.remove("pt-3");
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="courses">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Explore Popular Courses" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* coursebox */}
                            <CourseBox courses={this.state.courses} />

                            <Col className="mt-4 pt-2 text-center">
                                <Link to="#" className="btn btn-primary">See More Courses <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60" id="instructors">
                        {/* section title */}
                        <SectionTitle title="Instructors" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

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

export default Services;