import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip, Progress, Collapse, Card, CardBody, CardHeader } from "reactstrap";

//Import Images
import litecoin from "../../images/crypto/litecoin.png";
import bitcoin from "../../images/crypto/bitcoin.png";
import auroracoin from "../../images/crypto/auroracoin.png";
import coinye from "../../images/crypto/coinye.png";
import ethereum from "../../images/crypto/ethereum.png";
import potcoin from "../../images/crypto/potcoin.png";
import zcash from "../../images/crypto/zcash.png";
import monero from "../../images/crypto/monero.png";

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coins : [
                { name : "Bitcoin", image : bitcoin, id : "Bitcoin", link : "" },
                { name : "coinye", image : coinye, id : "coinye", link : "" },
                { name : "ethereum", image : ethereum, id : "ethereum", link : "" },
                { name : "litecoin", image : litecoin, id : "litecoin", link : "" },
                { name : "monero", image : monero, id : "monero", link : "" },
                { name : "auroracoin", image : auroracoin, id : "auroracoin", link : "" },
                { name : "potcoin", image : potcoin, id : "potcoin", link : "" },
                { name : "zcash", image : zcash, id : "zcash", link : "" },
            ],
            collapse1 : true
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    <Row className="align-items-center">
                        <Col lg="5" md="6" xs="12">
                            <div className="p-4 text-center rounded bg-light shadow">
                                <h4 className="mb-0"><span className="text-warning">1 BTC</span> = $ 8654.32</h4>
                            </div>

                            <div className="mt-4 pt-2 text-center">
                                {
                                    this.state.coins.map((coin, key) =>
                                        <Link to={coin.link} key={key}>
                                            <img src={coin.image} className="img-fluid avatar avatar-small m-2 p-2 rounded-pill shadow" id={coin.id} alt=""/>
                                            <UncontrolledTooltip placement="top" target={coin.id}>
                                                {coin.name}
                                            </UncontrolledTooltip>
                                        </Link>
                                    )
                                }
                            </div>

                            <div className="mt-4 pt-2">
                                <div className="p-4 rounded shadow">
                                    <h5>Open Cryptocurrency</h5>
                                    <div className="progress-box mt-4">
                                        <Progress animated value={67} />
                                    </div>
                                    <p className="text-muted mt-4 mb-0">Build on the Cryptocurrency platform for free and make use of an array of tools created by our community.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="7" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="ml-lg-4">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">Frequently asked questions</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>

                                <div className="faq-content mt-4">
                                    <div className="accordion" id="accordionExample">
                                    <Card className="border rounded shadow mb-2">
                                            <Link  to="#" onClick={() => this.setState({collapse1 : !this.state.collapse1,collapse3 : false, collapse2 : false,collapse4 : false})} className={this.state.collapse1 ? "faq position-relative text-primary" :  "faq position-relative text-dark" } >
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> How does Cryptocurrency make money ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse1}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                        <Card className="border rounded shadow mb-2">
                                        <Link  to="#" onClick={() => this.setState({collapse2 : !this.state.collapse2,collapse3 : false, collapse4 : false,collapse1 : false})} className={this.state.collapse2 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> Can I trust the prices you show ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse2}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>

                                        <Card className="border rounded shadow mb-2">
                                        <Link  to="#" onClick={() => this.setState({collapse3 : !this.state.collapse3,collapse4 : false, collapse2 : false,collapse1 : false})} className={this.state.collapse3 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question">Should I just buy direct from providers ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse3}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>

                                        <Card className="rounded shadow mb-0">
                                        <Link  to="#" onClick={() => this.setState({collapse4 : !this.state.collapse4, collapse3 : false, collapse2 : false,collapse1 : false})} className={this.state.collapse4 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <CardHeader className="bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> How often do you update prices and terms ? </h4>
                                                </CardHeader>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse4}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Faq;