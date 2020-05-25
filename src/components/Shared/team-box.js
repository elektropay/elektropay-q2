import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class TeamBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.candidates.map((candidate, key) =>
                        <Col lg="3" md="6" key={key} className="mt-4 pt-2">
                            <div className="team text-center rounded bg-white pt-3" name="team" id="teambox">
                                <div className="position-relative">
                                    <img src={candidate.image} className="img-fluid avatar avatar-ex-large rounded-pill shadow" alt=""/>
                                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                                        {
                                            candidate.socialIds.map((id, key) =>
                                                <li key={key} className="list-inline-item mr-1"><Link to={id.link} className="rounded"><i className={"mdi " + id.icon}></i></Link></li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="content pt-3 pb-3">
                                    <h5 className="mb-0"><Link to={candidate.link} className="name text-dark">{candidate.name}</Link></h5>
                                    <small className="designation text-muted">{candidate.designation}</small>
                                </div>
                            </div>
                        </Col>
                    )
                }          
            </React.Fragment>
        );
    }
}

export default TeamBox;