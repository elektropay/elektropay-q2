import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container,Row, Col, UncontrolledTooltip } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import ProcessBox from "./process-box";

//Import Images
import discover from "../../images/payments/payment/discover.jpg";
import maestro from "../../images/payments/payment/maestro.jpg";
import paypal from "../../images/payments/payment/paypal.jpg";
import mastercard from "../../images/payments/payment/master-card.jpg";
import visa from "../../images/payments/payment/visa.jpg";
import amaricanExpress from "../../images/payments/payment/american-express.jpg";
import sellerOrder from "../../images/payments/payment/seller-order.png";
import rupee from "../../images/icon/rupee.svg";
import security from "../../images/icon/security.svg";
import online from "../../images/icon/online-payment.svg";
import payment from "../../images/icon/payment.svg";

class Process extends Component {
    state = {
        paymentMethods : [
            { method_id : 1, title : "Discover", id : "discover", icon : discover },
            { method_id : 2, title : "Maestro", id : "maestro", icon : maestro },
            { method_id : 3, title : "Paypal", id : "paypal", icon : paypal },
            { method_id : 4, title : "Master Card", id : "mastercard", icon : mastercard },
            { method_id : 5, title : "Visa", id : "visa", icon : visa },
            { method_id : 6, title : "Amarican Express", id : "amaricanExpress", icon : amaricanExpress },
        ],
        process : [
            { id: 1, icon : rupee, title : "Low Fees", desc : "If the distribution of letters and 'words' is random, the reader will not be distracted." },
            { id: 2, icon : security, title : "Safe & Secure", desc : "For this reason, dummy text usually consists of a more or less random series of words." },
            { id: 3, icon : online, title : "Amazing Support", desc : "This prevents repetitive patterns from impairing the overall visual impression." },
            { id: 4, icon : payment, title : "Convenient & Easy", desc : "It is advantageous when the dummy text is relatively realistic so that the layout." },
        ],
    }

    render() {
        return (
            <React.Fragment>
                <section className="section pb-0 border-top">
                
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" className="text-center">
                            <div className="section-title mb-60">
                                <h4 className="title mb-4">Easy payment processing for your business</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>

                            <div>
                                {
                                    this.state.paymentMethods.map((paymentMethod, key) =>
                                        <Link to="" key={key}>
                                            <img src={paymentMethod.icon} className="img-fluid avatar avatar-small mr-3 rounded-pill shadow" id={paymentMethod.id} alt=""/>
                                            <UncontrolledTooltip placement="top" target={paymentMethod.id}>
                                                {paymentMethod.title}
                                            </UncontrolledTooltip>
                                        </Link>                                     
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                <Container className="mt-100 mt-60">
                    <SectionTitle title="Payments Great Features" desc="that can provide everything you need to generate awareness, drive traffic, connect." />

                    <Row>
                        {/* Render Process Box */}
                        <ProcessBox data={this.state.process} />
                    </Row>
                </Container>

                <Container className="mt-100 mt-60">
                    <Row className="justify-content-center">
                        <Col xs="12" className="text-center">
                            <div className="section-title mb-60">
                                <h4 className="title mb-4">Transection Between Buyers and Seller</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                            <img src={sellerOrder} alt="" className="position-relative img-fluid mx-auto d-block" style={{ zIndex : "1"}}/>
                        </Col>
                    </Row>
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Process;