import React, { Component } from 'react';
import { Col } from 'reactstrap';

class FeatureBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.features.map((feature, key) =>
                                    <Col key={key} md="6" xs="12">
                                        <div className="features pt-4 pb-4">
                                            <i className={"mdi " + feature.icon +" icon text-center rounded-pill text-primary mr-3 mt-2 float-left"}></i>

                                            <div className="content d-block overflow-hidden">
                                                <h4 className="title">{feature.title}</h4>
                                                <p className="text-muted para mb-0">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default FeatureBox;