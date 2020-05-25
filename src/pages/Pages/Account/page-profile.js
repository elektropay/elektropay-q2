import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip, Progress } from "reactstrap";

//Import Images
import imgbg from "../../../images/account/bg.jpg";
import profile from "../../../images/client/05.jpg";
import blog1 from "../../../images/blog/01.jpg";
import blog2 from "../../../images/blog/02.jpg";
import exp1 from "../../../images/job/Circleci.svg";
import exp2 from "../../../images/job/Codepen.svg";
import exp3 from "../../../images/job/Gitlab.svg";
import client1 from "../../../images/client/01.jpg";
import client2 from "../../../images/client/02.jpg";
import client3 from "../../../images/client/03.jpg";
import client4 from "../../../images/client/04.jpg";
import client5 from "../../../images/client/05.jpg";
import client6 from "../../../images/client/06.jpg";
import client7 from "../../../images/client/07.jpg";
import client8 from "../../../images/client/08.jpg";

class PageProfile extends Component {
    state = {
        blogs : [
            { id : 1, title : "Design your apps in your own way", image : blog1, likes : "33", blogComments :"08", author : "Krishta Joseph", date : "13th August, 2019" },
            { id : 2, title : "How apps is changing the IT world", image : blog2, likes : "33", blogComments :"08", author : "Krishta Joseph", date : "13th August, 2019" }
        ],
        experiences : [
            { id : 1, image : exp1, designation : "Senior Web Developer", duration : "3 Years", companyName : "", location : "London, UK"},
            { id : 2,image : exp2, designation : "Web Designer", duration : "2 Years", companyName : "CircleCi", location : "Washington D.C, USA"},
            { id : 3,image : exp3, designation : "UI Designer", duration : "2 Years", companyName : "Codepen", location : "Perth, Australia"},
        ],
        clients : [
            { id : 1, image : client1, name : "Calvin" },
            { id : 2, image : client2, name : "Meriam" },
            { id : 3, image : client3, name : "Janelia" },
            { id : 4, image : client4, name : "Cristino" },
            { id : 5, image : client5, name : "Rukshar" },
            { id : 6, image : client6, name : "Rambo" },
            { id : 7, image : client7, name : "Beardo" },
            { id : 8, image : client8, name : "Gogo" },
        ]
    }
    
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
       // Make sure to remove the DOM listener when the component is unmounted.
       componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }
  
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {
        return (
            <React.Fragment>
                <section className="bg-profile d-table w-100" style={{background: `url(${imgbg}) center center`}}>
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="public-profile position-relative p-4 bg-white overflow-hidden rounded shadow" style={{zIndex:"1"}}>
                                    <Row className="align-items-center">
                                        <Col lg="2" md="3" className="text-md-left text-center">
                                            <img src={profile} className="avatar avatar-medium rounded-pill shadow d-block mx-auto" alt=""/>
                                        </Col>

                                        <Col lg="10" md="9">
                                            <Row className="align-items-center">
                                                <Col md="7" className="text-md-left text-center mt-4 mt-sm-0">
                                                    <h3 className="title mb-0">Krista Joseph</h3>
                                                    <small className="text-muted h6 mr-2">Web Developer</small>
                                                    <ul className="list-inline mb-0 mt-3">
                                                        <li className="list-inline-item mr-2"><Link to="#" className="text-muted" title="Linkedin"><i className="mdi mdi-instagram mr-2"></i>krista_joseph</Link></li>
                                                        <li className="list-inline-item"><Link to="#" className="text-muted" title="Skype"><i className="mdi mdi-skype mr-2"></i>@krista_joseph</Link></li>
                                                    </ul>
                                                </Col>
                                                <Col md="5" className="text-md-right text-center">
                                                    <ul className="list-unstyled profile-icons mb-0 mt-4">
                                                        <li className="list-inline-item mr-1"><Link to="#" className="rounded-pill"><i className="mdi mdi-plus" title="Add Friend"></i></Link></li>
                                                        <li className="list-inline-item mr-1"><Link to="#" className="rounded-pill"><i className="mdi mdi-email" title="Messages"></i></Link></li>
                                                        <li className="list-inline-item mr-1"><Link to="#" className="rounded-pill"><i className="mdi mdi-bell" title="Notifications"></i></Link></li>
                                                        <li className="list-inline-item mr-1"><Link to="/page-profile-edit" className="rounded-pill bg-dark"><i className="mdi mdi-tools text-light" title="Edit Profile"></i></Link></li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                
                
                <section className="section mt-60">
                    <Container className="mt-lg-3">
                        <Row>
                            <Col lg="4" md="5" xs="12">
                                <div className="sidebar p-4 rounded shadow">
                                    <div className="widget">
                                        <h5 className="widget-title">Projects :</h5>
                                        <div className="progress-box mt-4">
                                            <h6 className="title text-muted">Progress</h6>
                                                <Progress className="position-relative" value={50} />
                                                <div className="progress-value d-block text-muted h6">24 / 48</div>
                                        </div>
                                    </div>
                                    
                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Members :</h5>
                                        <div className="text-center">
                                            {
                                                this.state.clients.map((client, key) =>
                                                    <Link to="#" key={key}>
                                                        <img src={client.image} className="avatar avatar-small rounded-pill mt-3 ml-1" id={"client" + client.id} alt=""/>
                                                        <UncontrolledTooltip placement="top" target={"client" + client.id}>
                                                            {client.name}
                                                        </UncontrolledTooltip>
                                                    </Link>
                                                )
                                            }                                            
                                        </div>
                                    </div>
                                    
                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Followers :</h5>
                                        <Row className="mt-4">
                                            <Col xs="6" className="text-center">
                                                <i className="mdi mdi-account-outline mdi-24px text-primary"></i>
                                                <h5 className="mb-0">2588</h5>
                                                <p className="text-muted mb-0">Followers</p>
                                            </Col>

                                            <Col xs="6" className="text-center">
                                                <i className="mdi mdi-account-plus-outline mdi-24px text-primary"></i>
                                                <h5 className="mb-0">454</h5>
                                                <p className="text-muted mb-0">Following</p>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="widget mt-4 pt-2">
                                        <h5 className="widget-title">Follow me :</h5>
                                        <ul className="list-unstyled social-icon mb-0 mt-4">
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></Link></li>
                                            <li className="list-inline-item mr-1"><Link to="#" className="rounded"><i className="mdi mdi-dribbble" title="Dribbble"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="ml-lg-3">
                                    <div className="border-bottom pb-4">
                                        <h5>Krista Joseph</h5>
                                        <p className="text-muted mb-0">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                                    </div>
                                    
                                    <div className="border-bottom pb-4">
                                        <Row>
                                            <Col lg="6" className="mt-4">
                                                <h5>Personal Details :</h5>
                                                <ul className="list-inline mb-0 mt-4">
                                                    <li>
                                                        <i className="mdi mdi-email float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Email :</h6>
                                                            <Link to="#" className="text-muted">kristajoseph0203@mail.com</Link>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="mt-3">
                                                        <i className="mdi mdi-book float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Skills :</h6>
                                                            <Link to="#" className="text-muted">html</Link>, <Link to="#" className="text-muted">css</Link>, <Link to="#" className="text-muted">js</Link>, <Link to="#" className="text-muted">mysql</Link>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="mt-3">
                                                        <i className="mdi mdi-google float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Language :</h6>
                                                            <Link to="#" className="text-muted">English</Link>, <Link to="#" className="text-muted">Japanese</Link>, <Link to="#" className="text-muted">Chinese</Link>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="mt-3">
                                                        <i className="mdi mdi-earth float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Website :</h6>
                                                            <Link to="#" className="text-muted">www.kristajoseph.com</Link>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="mt-3">
                                                        <i className="mdi mdi-cake-variant float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Birthday :</h6>
                                                            <p className="text-muted mb-0">2nd March, 1996</p>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="mt-3">
                                                        <i className="mdi mdi-map-marker float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Location :</h6>
                                                            <Link to="#" className="text-muted">Beijing, China</Link>
                                                        </div>
                                                    </li>
                                                    
                                                    <li className="mt-3">
                                                        <i className="mdi mdi-phone float-left text-muted mr-2"></i>
                                                        <div className="overflow-hidden d-block">
                                                            <h6 className="text-primary mb-0">Cell No :</h6>
                                                            <Link to="#" className="text-muted">(+12) 1254-56-4896</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Col>
            
                                            <Col lg="6" className="mt-4 pt-2 pt-sm-0">
                                                <h5>Experience :</h5>
            
                                                <ul className="list-inline mb-0 mt-4">
                                                    {
                                                        this.state.experiences.map((experience, key) =>
                                                            <li key={key} className={ experience.id === 1 ? "key-feature d-flex p-3 bg-white rounded shadow" : "key-feature d-flex p-3 bg-white rounded shadow mt-4"}>
                                                                <div className="icons text-center rounded-pill mr-3 mt-2">
                                                                    <img src={experience.image} className="avatar avatar-ex-sm" alt=""/>
                                                                </div>
                                                                <div className="content">
                                                                    <h4 className="title mb-0">{experience.designation}</h4>
                                                                    <p className="text-muted mb-0">{experience.duration} Experience</p>
                                                                    <p className="text-muted mb-0"><Link to="#" className="text-primary">{experience.companyName}</Link> @{experience.location}</p>    
                                                                </div>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>

                                    <h5 className="mt-4 mb-0">Posts & News :</h5>
                                    <Row>
                                        {
                                            this.state.blogs.map((blog, key) =>
                                                <Col lg="6" key={key} className="mt-4 pt-2">
                                                    <div className="blog position-relative overflow-hidden shadow rounded">
                                                        <div className="position-relative">
                                                            <img src={blog.image} className="img-fluid rounded-top" alt=""/>
                                                            <div className="overlay rounded-top bg-dark"></div>
                                                        </div>
                                                        <div className="content p-4">
                                                            <h4><Link to="#" className="title text-dark">{blog.title}</Link></h4>
                                                            <div className="post-meta mt-3">
                                                                <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                                                <ul className="list-unstyled mb-0">
                                                                    <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.likes}</Link></li>
                                                                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{blog.blogComments}</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="author">
                                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.author}</small>
                                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        }
                                        <Col xs="12" className="mt-4 pt-2">
                                            <Link to="/page-blog" className="btn btn-primary">See More <i className="mdi mdi-chevron-right"></i></Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default PageProfile;