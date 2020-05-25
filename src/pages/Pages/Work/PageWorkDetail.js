// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Alert, Form, FormGroup, Input, Label, Button } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";
import CommentsBox from "../../../components/Shared/comments-box";

//Import Images
import singleImg from "../../../images/work/single.jpg";
import work2 from "../../../images/work/2.jpg";
import work3 from "../../../images/work/3.jpg";
import work6 from '../../../images/work/6.jpg';

// Client Images
import client1 from '../../../images/client/01.jpg';
import client2 from '../../../images/client/02.jpg';
import client3 from '../../../images/client/03.jpg';
import client4 from '../../../images/client/04.jpg';

class PageWorkDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Portfolio", link : "#" },
                { id : 4, name : "Work Detail" },
            ],
            comments : [
                { id : 1, image: client1, name : "Lorenzo Peterson", date : "15th August, 2019", time : "01:25 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                { id : 1, image: client2, name : "Tammy Camacho", date : "16th August, 2019", time : "02:05 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                { id : 1, image: client3, name : "Tammy Camacho", date : "17th August, 2019", time : "04:03 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
                    replies : [
                        { id : 1, image: client4, name : "Calvin Camacho", date : "18th August, 2019", time : "05:55 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                        { id : 1, image: client2, name : "Tammy Camacho", date : "19th August, 2019", time : "05:44 pm", desc : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" },
                    ]
                },
            ],
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  


    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
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
                <PageBreadcrumb pathItems = {this.state.pathItems}>
                    <h4 className="title"> New Trends in SEO </h4>
                    <ul className="list-unstyled mt-4">
                        <li className="list-inline-item h6 user text-muted mr-2"> <span className="text-dark">Client :</span> Calvin Carlo</li>
                        <li className="list-inline-item h6 date text-muted"> <span className="text-dark">Date :</span> 23th Sep, 2019</li>
                    </ul>
                </PageBreadcrumb>

                    <div className="position-relative">
                        <div className="shape overflow-hidden text-white">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>

                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <img src={singleImg} className="img-fluid rounded" alt="" />
                            </Col>

                            <Col md={10} className="mt-4 pt-2">
                                <div className="bg-light rounded p-4">
                                    <p className="text-muted font-italic mb-0">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language. "</p>
                                </div>

                                <Row>
                                    <Col md={6} className="mt-4 pt-2">
                                        <img src={work2} className="img-fluid rounded" alt="" />
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <img src={work3} className="img-fluid rounded" alt="" />
                                    </Col>
                                </Row>

                                <div className="bg-light rounded p-4 mt-4 pt-2">
                                    <p className="text-muted font-italic mb-0">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classNameic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>

                                    <ul className="list-unstyled feature-list text-muted mt-4">
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success mdi-18px h5 mr-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success mdi-18px h5 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success mdi-18px h5 mr-2"></i>Create your own skin to match your brand</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success mdi-18px h5 mr-22"></i>Digital Marketing Solutions for Tomorrow</li>
                                        <li><i className="mdi mdi-checkbox-marked-circle text-success mdi-18px h5 mr-2"></i>Our Talented & Experienced Marketing Agency</li>
                                    </ul>
                                </div>

                                <Row>
                                    <Col md={6} className="mt-4 pt-2">
                                        <div className="work-details rounded bg-light p-4">
                                            <h5 className="title border-bottom pb-3 mb-3">Project Info :</h5>
                                            <dl className="row mb-0">
                                                <dt className="col-md-4 col-5">Client :</dt>
                                                <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                                                <dt className="col-md-4 col-5">Category :</dt>
                                                <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                                                <dt className="col-md-4 col-5">Date :</dt>
                                                <dd className="col-md-8 col-7 text-muted">23rd Sep, 2019</dd>

                                                <dt className="col-md-4 col-5">Website :</dt>
                                                <dd className="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                                                <dt className="col-md-4 col-5">Location :</dt>
                                                <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                            </dl>
                                        </div>
                                    </Col>

                                    <Col md={6} className="mt-4 pt-2">
                                        <img src={work6} className="img-fluid rounded" alt="" />
                                    </Col>
                                </Row>

                                {/* comments */}
                                <CommentsBox comments={this.state.comments} />

                                <div className="mt-4 pt-2 p-4 shadow rounded">
                                    <h4 className="page-title pb-3">Leave A Comment :</h4>
                                    <Alert color="info" isOpen={this.state.Contactvisible} toggle={()=>{ this.setState({Contactvisible : !this.state.Contactvisible}) }}>
                                           Data Sended Successfully.
                                         </Alert>
                                    <Form  onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col md={12}>
                                                <FormGroup className="position-relative">
                                                    <Label>Your Comment</Label>
                                                    <i className="mdi mdi-comment-outline ml-3 icons"></i>
                                                    <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control pl-5" required></textarea>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup className="position-relative">
                                                    <Label>Name <span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-account ml-3 icons"></i>
                                                    <Input id="name" name="name" type="text" placeholder="Name" className="form-control pl-5" required />
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup className="position-relative">
                                                    <Label>Your Email <span className="text-danger">*</span></Label>
                                                    <i className="mdi mdi-email ml-3 icons"></i>
                                                    <Input id="email" type="email" placeholder="Email" name="email" className="form-control pl-5" required />
                                                </FormGroup>
                                            </Col>

                                            <Col md={12}>
                                                <div className="send">
                                                    <Button color="primary" type="submit" className="w-100">Send Message</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageWorkDetail;
