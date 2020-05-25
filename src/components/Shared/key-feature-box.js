import React, { Component } from 'react';
import { Col } from 'reactstrap';

class KeyFeatureBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.keyfeatures.map((feature, key) =>
                    <Col lg="4" md="6" key={key} className="mt-4 pt-2" name="keyfeature">
                                <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                    <div className="icon text-center rounded-pill mr-3">
                                        <i className={"mdi "+ feature.icon + " text-primary"}></i>
                                    </div>
                                    <div className="content mt-2">
                                        <h4 className="title mb-0">{feature.title}</h4>
                                    </div>
                                </div>
                    </Col>
                    )
                }
                            
            </React.Fragment>
        );
    }
}

export default KeyFeatureBox;