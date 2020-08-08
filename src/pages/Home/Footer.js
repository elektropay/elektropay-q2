// React basic and bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="footer-three bg-dark">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <div className="copy-rights text-center">
                                    <p className="mb-0">© {new Date().getFullYear()}-{new Date().getFullYear() + 1} Elektropay. Design by Themesbrand</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Footer;
