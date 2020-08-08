// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Lightbox from 'react-image-lightbox';
import '../../../node_modules/react-image-lightbox/style.css';


// Import images
import img13 from '../../images/work/13.jpg';
import img14 from '../../images/work/14.jpg';
import img15 from '../../images/work/15.jpg';
import img16 from '../../images/work/16.jpg';
import img17 from '../../images/work/17.jpg';
import img18 from '../../images/work/18.jpg';
import img19 from '../../images/work/19.jpg';
import img20 from '../../images/work/20.jpg';

//creating array of images for image portfolio
const images = [
    img13, img14, img15, img16, img17, img18, img19, img20
];

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : [
                { image : img13, title : "Shifting Perspective", author : "Thomas Brewer", date : "13th August, 2019", category : "Designing" },
                { image : img14, title : "Colors Magazine", author : "Thomas Brewer", date : "13th August, 2019", category : "Photography" },
                { image : img15, title : "Spa Cosmetics", author : "Thomas Brewer", date : "13th August, 2019", category : "Designing" },
                { image : img16, title : "Riser Coffee", author : "Thomas Brewer", date : "13th August, 2019", category : "Designing" },
                { image : img17, title : "Dancing With My Self", author : "Thomas Brewer", date : "13th August, 2019", category : "Branding" },
                { image : img18, title : "New Trends in SEO", author : "Thomas Brewer", date : "13th August, 2019", category : "Development" },
                { image : img19, title : "Spa Cosmetics", author : "Thomas Brewer", date : "13th August, 2019", category : "Branding" },
                { image : img20, title : "Riser Coffee", author : "Thomas Brewer", date : "13th August, 2019", category : "Development" },
            ],
            displayCategory: "All",
            photoIndex: 0,
            isOpen: false,
        }
        this.setCategory.bind(this);
    }

    setCategory(category) {
        this.setState({
          displayCategory: category
        });
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <Row>
                            <ul className="col container-filter list-unstyled categories-filter text-center" id="filter">
                                <li className="list-inline-item"><Link  to="#" onClick={() => this.setCategory("All")} className={this.state.displayCategory === "All" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" }>All</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Branding")} className={this.state.displayCategory === "Branding" ? "categories border d-block text-dark rounded active" : "categories border d-block text-dark rounded" } >Branding</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Designing")} className={this.state.displayCategory === "Designing" ? "categories border d-block text-dark rounded active" :"categories border d-block text-dark rounded"  }>Designing</Link></li>
                                <li className="list-inline-item"><Link  to="#" onClick={() => this.setCategory("Photography")} className={this.state.displayCategory === "Photography" ?  "categories border d-block text-dark rounded active" :  "categories border d-block text-dark rounded" } >Photography</Link></li>
                                <li className="list-inline-item"><Link to="#" onClick={() => this.setCategory("Development")} className={this.state.displayCategory === "Development" ?"categories border d-block text-dark rounded active"  : "categories border d-block text-dark rounded" } >Development</Link></li>
                            </ul>
                        </Row>
                    </Container>
                    
                    <Container fluid>
                        <Row className="container-grid projects-wrapper">
                        { this.state.projects
                            .filter(
                                ({ category }) =>
                                this.state.displayCategory === category || this.state.displayCategory === "All"
                            )
                            .map(({ category, title, image, author, date }, key) => (
                                <Col lg={3} md={6} key={key} className="spacing designing">
                                    <div className="work-container position-relative d-block overflow-hidden rounded mt-3">
                                        <Link className="mfp-image d-inline-block" to="#" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}} title="" >
                                            <img src={image} className="img-fluid rounded" alt="work" />
                                            <div className="overlay-work"></div>
                                        </Link>
                                        <div className="content personal-port">
                                            <Link to="/page-work-detail" className="title text-white d-block font-weight-bold">{title}</Link>
                                            <small className="text-light">{category}</small>
                                        </div>
                                        <div className="client personal-port">
                                            <small className="text-light user d-block"><i className="mdi mdi-account"></i> {author}</small>
                                            <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {date}</small>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                                
                         </Row>
                         {/* lightbox for portfolio images */}
                         { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={100}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                    />
                                    ) }
                    </Container>
                    <Container className="mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Let's talk about your portfolio</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Elektropay</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary">Get Started Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Work;