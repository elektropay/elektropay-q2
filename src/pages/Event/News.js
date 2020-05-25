// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, Button, Alert } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import BlogBox from "../../components/Shared/blog-box";

// Blog Images
import blog1 from '../../images/event/b01.jpg';
import blog2 from '../../images/event/b02.jpg';
import blog3 from '../../images/event/b03.jpg';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs : [
                { id : 1, image : blog1, title : "Unique Digital Ideas to Learn Business", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 2, image : blog3, title : "Connecting People for Digital Summit", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                { id : 3, image : blog2, title : "Houston Event Planning Management", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
            ],
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Event Blog & Latest News" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* blog box */}
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        {/* section title */}
                        <SectionTitle title="Sign up for our Newsletter" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="justify-content-center mt-4 pt-2">
                            <Col lg={7} md={10}>
                                <Alert color="info" isOpen={this.state.successMsg} toggle={()=>{ this.setState({successMsg : !this.state.successMsg}) }}>
                                    Data sended successfully.
                                </Alert>
                                <Form >
                                    <FormGroup>
                                        <InputGroup className="mb-3">
                                            <Input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                            <InputGroupAddon addonType="append">
                                                <Button onClick={this.handleSubmit} color="primary" className="submitBnt" type="button" id="newssubscribebtn">Subscribe</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-footer">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default News;