import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class ProcessBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((process, key) =>
                        <Col lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
                            <div className="bg-light p-3 py-5 rounded shadow">
                                <img src={process.icon} className="avatar avatar-md-sm" alt=""/>
                                <div className="mt-4">
                                    <h5><Link to="" className="text-primary"> {process.title}</Link></h5>
                                    <p className="text-muted mt-3 mb-0">{process.desc}</p>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ProcessBox;