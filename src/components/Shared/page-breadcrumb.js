import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// import images
import bg1 from '../../images/hosting/bg1.png';


class PageBreadcrumb extends Component {
    render() {
        const length = this.props.pathItems.length;
        return (
            <React.Fragment>
                <section className="bg-half-170 bg-light d-table w-100" style={{ background: `url(${bg1}) center center` }}>
   <div className="bg-overlay-white"></div>                  
                     <Container>
                        <Row className="justify-content-center">
                            <Col lg="12" className="text-left">
                                <div className="page-next-level">
                                    { this.props.title ? <h1 className="jumbo pl-1 text-muted font-weight-bold"> {this.props.title}</h1> : null }
                                    { this.props.children ? this.props.children : null }
                                    <ul className="page-next d-none bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                        {
                                            this.props.pathItems.map((item, key) =>
                                                item.id !== length
                                                ? <li key={key}><Link to={item.link} className="text-normal font-weight-bold text-dark">{item.name}</Link></li>
                                                : <li key={key}>
                                                    <span className="text-normal text-primary font-weight-bold">{item.name}</span> 
                                                  </li>
                                            )
                                        }
                                         
                                    </ul>
                                </div>
                            </Col>  
                        </Row>
                    </Container> 
                </section>
            </React.Fragment>
        );
    }
}

export default PageBreadcrumb;