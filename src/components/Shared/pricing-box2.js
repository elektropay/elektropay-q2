import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class PricingBox2 extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                            <Col md="4" xs="12" key={key} className={ pricing.id === 1 ? "" : "mt-4 pt-2 mt-sm-0 pt-sm-0"}>
                                <div className={ pricing.isActive ? "pricing-rates starter-plan shadow bg-white pt-5 pb-5 p-4 rounded text-center" : "pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center"}>
                                    <h2 className={pricing.isActive ? "title text-uppercase text-primary mb-4" : "title text-uppercase mb-4"}>{pricing.title}</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">{pricing.price}</span>
                                        <span className="h4 align-self-end mb-1">/{pricing.duration}</span>
                                    </div>
                                    <ul className="feature list-unstyled pl-0">
                                        {
                                            pricing.features.map((feature, key) =>
                                                <li key={key} className="feature-list"><i className="mdi mdi-check text-success h5 mr-1"></i>{feature.title}</li>
                                            )
                                        }
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">{pricing.buttonText}</Link>
                                </div>
                            </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox2;