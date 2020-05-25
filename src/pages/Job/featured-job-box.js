import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import { Col } from "reactstrap";

class FeaturedJobBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.jobs.map((job, key) =>
                    <Col lg="4" md="6" xs="12" key={key} className="mt-4 pt-2">
                        <Link to={"/page-job-detail/"+ job.id} className="text-dark">
                            <div className="key-feature d-flex p-3 bg-white rounded shadow">
                                <div className="icons text-center rounded-pill mr-3 mt-2">
                                    <img src={job.image} className="avatar avatar-ex-sm" alt=""/>
                                </div>
                                <div className="content">
                                    <h4 className="title mb-0">{job.title}</h4>
                                    <p className="text-muted mb-0">{job.city}, {job.country}</p>    
                                </div>
                            </div>
                        </Link>
                    </Col>
                    )
                }

            </React.Fragment>
        );
    }
}

export default FeaturedJobBox;