import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class ProcessBox extends Component {
    render() {
        var length = this.props.processes.length;
        return (
            <React.Fragment>
                {
                    this.props.processes.map((process, key) =>
                        <Col md="4" className="mt-4 pt-2" key={key}>
                            <div className="work-process p-lg-4 p-3 rounded shadow">
                                <h4 className="title">{process.title}</h4>
                                <p className="text-muted para">{process.desc}</p>
                                <Link to={process.link} className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                                <ul className="list-unstyled mb-0 mt-2">
                                    <li className="step-icon float-right"><i className={ key+1 === length ? "mdi mdi-check-all" : "mdi mdi-chevron-double-right"}></i></li>
                                    <li className="step font-weight-bold">Step {key+1}.</li>
                                </ul>
                            </div>
                        </Col>
                    )
                }        
            </React.Fragment>
        );
    }
}

export default ProcessBox;