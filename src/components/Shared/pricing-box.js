import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                    {
                        this.props.pricings.map((pricing, key) =>
                            <Col name="pricing" lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
                                <div name="pricingbox" className={ pricing.isActive ? "pricing-rates business-rate shadow bg-white p-4 rounded" : "pricing-rates business-rate shadow bg-light p-4 rounded"}>
                                    <h2 className={pricing.isActive ? "title text-uppercase text-primary mb-4" : "title text-uppercase mb-4"}>{pricing.title}</h2>
                                    <div className="d-flex mb-4" name="pricingsection">
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
                                    <Link to="" className="btn btn-primary mt-4">{pricing.buttonText}</Link>
                                </div>
                            </Col>                        
                        )
                    }
            </React.Fragment>

        );
    }
}

export default Pricing;