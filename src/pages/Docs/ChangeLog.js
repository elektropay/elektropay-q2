// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../components/Shared/page-breadcrumb";

class ChangeLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Docs", link : "#" },
                { id : 3, name : "Changelog" },
            ],
        }
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
      
        // Make sure to remove the DOM listener when the component is unmounted.
        componentWillUnmount() {
            window.removeEventListener("scroll",this.scrollNavigation, true);
         }
  
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          }
          else
          {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {

        return (
            <React.Fragment>
                <PageBreadcrumb
                    title="Changelog"
                    pathItems = {this.state.pathItems}
                />
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="9">
                                <div className="p-4 shadow rounded border">

                                    <h5>Version <span className="text-success">2.0.0</span> - 18th April, 2020 <span className="badge badge-danger rounded ml-2">Latest</span></h5>
                                    <ul className="list-unstyled">
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Updated full Code structure and removed unnecessary pacakges.</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Classic Application Landing Page <Link to="/index-classic-app" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Classic Saas Landing Page <Link to="/index-classic-saas" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Car Ride Landing Page <Link to="/index-car-riding" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Add New Job page in Careers pages</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added new components in Components Page</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New <span className="font-weight-bold text-primary">RTL </span> Version (Only CSS Base)</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New <span className="font-weight-bold text-primary">Dark </span> Version (Only CSS Base)</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New <span className="font-weight-bold text-primary">Dark RTL </span> Version (Only CSS Base)</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Fixed couple of issues in One Page Menu</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Fixed couple of issues in mega Menu</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Job Landing Page <Link to="/index-job" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Customer Support Landing Page <Link to="/index-customer" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Onpage Landing Page <Link to="/index-onepage" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Account Pages
                                            <ul className="list-unstyled">
                                                <li className="text-muted my-2 ml-3"><i className="mdi mdi-chevron-right mr-2"></i>User Profile <Link to="/page-profile" className="h6 text-danger">Live Preview</Link></li>
                                                <li className="text-muted my-2 ml-3"><i className="mdi mdi-chevron-right mr-2"></i>Profile Setting <Link to="/page-profile-edit" className="h6 text-danger">Live Preview</Link></li>
                                                <li className="text-muted my-2 ml-3"><i className="mdi mdi-chevron-right mr-2"></i>Bill / Invoice <Link to="/page-invoice" className="h6 text-danger">Live Preview</Link></li>
                                            </ul>
                                        </li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>New Widget Page <Link to="/widget" className="h6 text-danger">Live Preview</Link></li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added Careers Pages
                                            <ul className="list-unstyled">
                                                <li className="text-muted my-2 ml-3"><i className="mdi mdi-chevron-right mr-2"></i>Candidate Profile <Link to="/page-job-candidate" className="h6 text-danger">Live Preview</Link></li>
                                                <li className="text-muted my-2 ml-3"><i className="mdi mdi-chevron-right mr-2"></i>Company Profile <Link to="/page-job-company" className="h6 text-danger">Live Preview</Link></li>
                                            </ul>
                                        </li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Fixed Responsive Issue</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added RTL Supported Version</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added Payments Landing Page</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added Cryptocurrency Landing Page</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added Software Landing Page</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Added Comingsoon Page</li>
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Fixed Responsive and Menu Issue</li>
                                    </ul>
                                
                                    <h5 className="mt-4">Version <span className="text-success">1.0.0</span> - 15th November 2019</h5>
                                    <ul className="list-unstyled">
                                        <li className="text-muted my-2 ml-3"><i className="mdi mdi-circle-medium mr-2"></i>Initial Released</li>
                                    </ul>
                                    

                                    <div className="mt-4">
                                        <a href="https://1.envato.market/Elektropayreactjs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Purchase Now</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default ChangeLog;
