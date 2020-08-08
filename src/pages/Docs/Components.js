// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row, 
    Col, 
    Collapse,
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    UncontrolledTooltip, 
    Progress, 
    Pagination, 
    PaginationItem, 
    PaginationLink, 
    Badge, 
    UncontrolledDropdown, 
    DropdownToggle,
    DropdownMenu, 
    DropdownItem, 
    Alert, 
    UncontrolledAlert, 
    Form, 
    FormGroup, 
    Input, 
    Label, 
    CustomInput, 
    InputGroup, 
    InputGroupAddon, 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody,
    ModalFooter,
    Table
} from 'reactstrap';
import classnames from 'classnames';

//Import components
import PageBreadcrumb from "../../components/Shared/page-breadcrumb"

// import images
import client05 from "../../images/client/05.jpg";
import Email from "../../images/icon/Email.svg";
import bitcoin from "../../images/icon/bitcoin.svg";
import calendar from "../../images/icon/calendar.svg";
import location from "../../images/icon/location.svg";

class Components extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Docs", link : "#" },
                { id : 3, name : "Components" },
            ],
            col1: true,
            col2: false,
            col3: false,
            activeTab : "1",
            modal : false,
        }
        this.toggle = this.toggle.bind(this);
        this.togglemodal.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
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
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var topnav = document.getElementById('topnav');
        if (top > 80 && topnav) {
            topnav.classList.add('nav-sticky');
        }
        else if(topnav) {
            topnav.classList.remove('nav-sticky');
        }
    }

    render() {
        return (
            <React.Fragment>
                <PageBreadcrumb
                    title="Components"
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
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    {/* Headings */}
                                    <Col lg={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Typography </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;h1&gt; H1. Bootstrap heading &lt;/h1&gt;</code></h6>
                                                <h1>H1. Bootstrap heading</h1>
                                                <h2>H2. Bootstrap heading</h2>
                                                <h3>H3. Bootstrap heading</h3>
                                                <h4>H4. Bootstrap heading</h4>
                                                <h5>H5. Bootstrap heading</h5>
                                                <h6>H6. Bootstrap heading</h6>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Display */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Display Heading </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;p className="display-1"&gt; Display 1 &lt;/p&gt;</code></h6>
                                                <p className="display-1">Display 1</p>
                                                <p className="display-2">Display 2</p>
                                                <p className="display-3">Display 3</p>
                                                <p className="display-4">Display 4</p>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Background Colors */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Background Color </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="bg-primary"&gt; Elektropay Saas & Software Template &lt;/div&gt;</code></h6>
                                                
                                                <div className="d-inline-block mr-1" id="bgprimary">
                                                    <p className="avatar avatar-small bg-primary rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgprimary">
                                                    .bg-primary
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bgsecondary">
                                                    <p className="avatar avatar-small bg-secondary rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgsecondary">
                                                    .bg-secondary
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bgsuccess">
                                                    <p className="avatar avatar-small bg-success rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgsuccess">
                                                    .bg-success
                                                </UncontrolledTooltip>
                                                
                                                <div className="d-inline-block mr-1" id="bgdanger">
                                                    <p className="avatar avatar-small bg-danger rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgdanger">
                                                    .bg-danger
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bgwarning">
                                                    <p className="avatar avatar-small bg-warning rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgwarning">
                                                    .bg-warning
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bginfo">
                                                    <p className="avatar avatar-small bg-info rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bginfo">
                                                    .bg-info
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bglight">
                                                    <p className="avatar avatar-small bg-light rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bglight">
                                                    .bg-light
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bgwhite">
                                                    <p className="avatar avatar-small bg-white rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgwhite">
                                                    .bg-white
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bgdark">
                                                    <p className="avatar avatar-small bg-dark rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgdark">
                                                    .bg-dark
                                                </UncontrolledTooltip>

                                                <div className="d-inline-block mr-1" id="bgmuted">
                                                    <p className="avatar avatar-small bg-muted rounded bg-white border"></p>
                                                </div>
                                                <UncontrolledTooltip placement="top" target="bgmuted">
                                                    .bg-muted
                                                </UncontrolledTooltip>
                                            </div>
                                        </div>
                                    </Col>
                                
                                    {/* text color */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Text Color </h4>
                                            </div>
                
                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;div className="text-primary"&gt; Elektropay Saas & Software Template &lt;/div&gt;</code></h6>

                                                <h6 className="text-primary">.text-primary</h6>
                                                <h6 className="text-secondary">.text-secondary</h6>
                                                <h6 className="text-success">.text-success</h6>
                                                <h6 className="text-danger">.text-danger</h6>
                                                <h6 className="text-warning">.text-warning</h6>
                                                <h6 className="text-info">.text-info</h6>
                                                <h6 className="text-light bg-dark">.text-light</h6>
                                                <h6 className="text-white bg-dark">.text-white</h6>
                                                <h6 className="text-white-50 bg-dark">.text-white-50</h6>
                                                <h6 className="text-dark">.text-dark</h6>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Buttons */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-primary"&gt; Primary &lt;/Link&gt;</code></h6>
                                                <Link to="#" className="btn btn-primary mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-secondary mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-success mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-danger mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-info mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-warning mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-light mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-dark mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Button Pill */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons Pill</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-primary rounded-pill"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-primary rounded-pill mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-secondary rounded-pill mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-success rounded-pill mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-danger rounded-pill mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-info rounded-pill mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-warning rounded-pill mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-light rounded-pill mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-dark rounded-pill mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Button Outline */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons Outline</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-outline-primary"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-outline-primary mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-outline-secondary mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-outline-success mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-outline-danger mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-outline-info mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-outline-warning mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-outline-light mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-outline-dark mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Button Pill Outline */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Buttons Pill Outline</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-outline-primary rounded-pill"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-outline-primary rounded-pill mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-outline-secondary rounded-pill mb-3 mr-2">Secondary</Link>
                                                <Link to="#" className="btn btn-outline-success rounded-pill mb-3 mr-2">Success</Link>
                                                <Link to="#" className="btn btn-outline-danger rounded-pill mb-3 mr-2">Danger</Link>
                                                <Link to="#" className="btn btn-outline-info rounded-pill mb-3 mr-2">Info</Link>
                                                <Link to="#" className="btn btn-outline-warning rounded-pill mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-outline-light rounded-pill mb-3 mr-2">Light</Link>
                                                <Link to="#" className="btn btn-outline-dark rounded-pill mb-3 mr-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Button Sizing */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Button Sizing</h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="btn btn-primary btn-sm"&gt; Primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="btn btn-primary btn-sm mb-3 mr-2">Primary</Link>
                                                <Link to="#" className="btn btn-warning mb-3 mr-2">Warning</Link>
                                                <Link to="#" className="btn btn-success btn-lg mb-3 mr-2">Success</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Accordians */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0">Accordions</h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="faq-content">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="card border rounded shadow mb-2">

                                                            <Link to="#collapseOne" className={ this.state.col1 ? "faq position-relative collapsed text-primary" : "faq position-relative collapsed text-dark"  } onClick={() => this.setState({ col1: !this.state.col1, col2 : false, col3 : false })}>
                                                                <div className="card-header bg-light p-3" id="headingOne">
                                                                    <h4 className="title mb-0 faq-question"> Accordion #1 </h4>
                                                                </div>
                                                            </Link>
                                                            <Collapse isOpen={this.state.col1}>
                                                                <div className="card-body">
                                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </Collapse>
                                                        </div>

                                                        <div className="card border rounded shadow mb-2">
                                                            <Link to="#collapseTwo" onClick={() => this.setState({ col2: !this.state.col2,col1 : false, col3 : false })} className={ this.state.col2 ? "faq position-relative collapsed text-primary" : "faq position-relative collapsed text-dark"  }>
                                                                <div className="card-header bg-light p-3" id="headingTwo">
                                                                    <h4 className="title mb-0 faq-question"> Accordion #2 </h4>
                                                                </div>
                                                            </Link>
                                                            <Collapse isOpen={this.state.col2}>
                                                                <div className="card-body">
                                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </Collapse>
                                                        </div>

                                                        <div className="card rounded shadow mb-0">
                                                            <Link to="#" onClick={() => this.setState({ col3: !this.state.col3,col2 : false, col1 : false })}  className={ this.state.col3 ? "faq position-relative collapsed text-primary" : "faq position-relative collapsed text-dark"  }>
                                                                <div className="card-header bg-light p-3" id="headingfive">
                                                                    <h4 className="title mb-0 faq-question"> Accordion #3 </h4>
                                                                </div>
                                                            </Link>
                                                            <Collapse isOpen={this.state.col3}>
                                                                <div className="card-body">
                                                                    <p className="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                </div>
                                                            </Collapse>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* default avatars */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Default Avatars </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src="images/home/01.jpg" className="img-fluid avatar avatar-ex-sm rounded"&gt;</code></h6>

                                                <img src={client05} className="img-fluid avatar avatar-ex-sm mr-2 rounded" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-md-sm mr-2 rounded" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-small mr-2 rounded" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-medium mr-2 rounded" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-large mt-3 mt-sm-0 mr-2 rounded" alt=""/>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Circle avatars */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Circle Avatars </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;img src="images/home/01.jpg" className="img-fluid avatar avatar-ex-sm rounded-pill"&gt;</code></h6>

                                                <img src={client05} className="img-fluid avatar avatar-ex-sm mr-2 rounded-pill" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-md-sm mr-2 rounded-pill" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-small mr-2 rounded-pill" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-medium mr-2 rounded-pill" alt=""/>
                                                <img src={client05} className="img-fluid avatar avatar-large mt-3 mt-sm-0 mr-2 rounded-pill" alt=""/>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* google map */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Google Map </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="map map-gray">
                                                    <iframe title="Elektropay" src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="rounded" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Nav Tabs */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Nav Tabs </h4>
                                            </div>

                                            <div className="p-4">
                                                <Row>
                                                    <Col lg={12}>

                                                        <Nav pills className="nav-justified flex-column flex-sm-row">
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: this.state.activeTab === '1' }) +" rounded"}
                                                                    onClick={() => { this.toggle('1'); }}
                                                                >
                                                                    <div className="text-center pt-1 pb-1">
                                                                        <h4 className="title font-weight-normal mb-0">Home</h4>
                                                                    </div>
                                                                </NavLink>
                                                            </NavItem>

                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: this.state.activeTab === '2' }) +" rounded"}
                                                                    onClick={() => { this.toggle('2'); }}
                                                                >
                                                                    <div className="text-center pt-1 pb-1">
                                                                        <h4 className="title font-weight-normal mb-0">About</h4>
                                                                    </div>
                                                                </NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    className={classnames({ active: this.state.activeTab === '3' }) +" rounded"}
                                                                    onClick={() => { this.toggle('3'); }}
                                                                >
                                                                    <div className="text-center pt-1 pb-1">
                                                                        <h4 className="title font-weight-normal mb-0">Service</h4>
                                                                    </div>
                                                                </NavLink>
                                                            </NavItem>
                                                        </Nav>
                                                    </Col>
                                                </Row>

                                                <Row className="pt-2">
                                                    <Col>
                                                        <TabContent activeTab={this.state.activeTab}>
                                                            <TabPane tabId="1" className="p-3">
                                                            <p className="text-muted mb-0">You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                            </TabPane>
                                                            <TabPane tabId="2" className="p-3">
                                                            <p className="text-muted mb-0">Can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                            </TabPane>
                                                            <TabPane tabId="3" className="p-3">
                                                            <p className="text-muted mb-0">You can combine all the Elektropay templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                                                            </TabPane>
                                                        </TabContent>
                                                     
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* breadccrumbs */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Breadcrumb </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <br /> 
                                             <code className="text-danger">&lt;div className="page-next-level"&gt; 
                                            <br /> &nbsp; &lt;ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0"&gt; 
                                            <br /> &nbsp; &nbsp; &lt;li className="list-inline-item"&gt; &lt;Link to="index" className="text-uppercase font-weight-bold text-dark"&gt; Home &lt;/Link&gt; &lt;/li&gt; 
                                            <br /> &nbsp; &nbsp; &lt;li className="list-inline-item"&gt; &lt;Link to="pages" className="text-uppercase font-weight-bold text-dark"&gt; Pages &lt;/Link&gt; &lt;/lt&gt; 
                                            <br /> &nbsp; &nbsp; &lt;li className="list-inline-item"&gt;<br /> &nbsp; &nbsp; &nbsp;  &lt;span className="text-uppercase text-primary font-weight-bold"&gt;Components &lt;/span&gt; 
                                            <br /> &nbsp; &nbsp; &lt;/li&gt; 
                                            <br /> &nbsp; &lt;/ul&gt; 
                                            <br /> &lt;/div&gt;
                                            </code></h6>

                                                <div className="page-next-level">
                                                    <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0" style={{ top: "0" }}>
                                                        <li className="list-inline-item"><Link to="/" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                        <li className="list-inline-item"><Link to="#" className="text-uppercase font-weight-bold text-dark">Pages</Link></li>
                                                        <li className="list-inline-item">
                                                            <span className="text-uppercase text-primary font-weight-bold">Components</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Pagination */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Pagination </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <br /> 
                                             <code className="text-danger">
                                            <br /> &nbsp; &lt;Pagination className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0"&gt; 
                                            <br /> &nbsp; &nbsp; &lt;PaginationItem&gt; &lt;PaginationLink href="index" className="pr-3 pl-3 pt-2 pb-2"&gt; Prev &lt;/PaginationLink&gt; &lt;/PaginationItem&gt;
                                            <br /> &nbsp; &nbsp; &lt;PaginationItem&gt; &lt;PaginationLink href="index" className="pr-3 pl-3 pt-2 pb-2"&gt; 1 &lt;/PaginationLink&gt; &lt;/PaginationItem&gt;
                                            <br /> &nbsp; &nbsp; &lt;PaginationItem&gt; &lt;PaginationLink href="index" className="pr-3 pl-3 pt-2 pb-2"&gt; 2 &lt;/PaginationLink&gt; &lt;/PaginationItem&gt;
                                            <br /> &nbsp; &nbsp; &lt;PaginationItem&gt; &lt;PaginationLink href="index" className="pr-3 pl-3 pt-2 pb-2"&gt; 3 &lt;/PaginationLink&gt; &lt;/PaginationItem&gt;
                                            <br /> &nbsp; &nbsp; &lt;PaginationItem&gt; &lt;PaginationLink href="index" className="pr-3 pl-3 pt-2 pb-2"&gt; Next &lt;/PaginationLink&gt; &lt;/PaginationItem&gt;
                                            <br /> &nbsp; &lt;/Pagination&gt; 
                                            </code></h6>

                                                    <Pagination className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                        <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">Prev</PaginationLink></PaginationItem>
                                                        <PaginationItem active><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">1</PaginationLink></PaginationItem>
                                                        <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">2</PaginationLink></PaginationItem>
                                                        <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">3</PaginationLink></PaginationItem>
                                                        <PaginationItem><PaginationLink href="#" className="pr-3 pl-3 pt-2 pb-2">Next</PaginationLink></PaginationItem>
                                                    </Pagination>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Progressbar */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Progressbar </h4>
                                            </div>
                                            <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br /> 
                                             <code className="text-danger">
                                            <br /> &nbsp; &lt;div className="progress-box mt-4"&gt; 
                                            <br /> &nbsp; &nbsp; &lt;h6 className="title text-muted"&gt; Progress &lt;/h6&gt;
                                            <br /> &nbsp; &lt;Progress value="84" /&gt; 
                                            </code></h6>
                                                <div className="progress-box mt-4">
                                                            <h6 className="title text-muted">WordPress</h6>
                                                            <div className="progress-value d-block text-muted h6">84%</div>
                                                            <Progress value="84" /> 
                                                </div>
                                                <div className="progress-box mt-4">
                                                            <h6 className="title text-muted">PHP / MYSQL</h6>
                                                            <div className="progress-value d-block text-muted h6">75%</div>
                                                            <Progress value="75" /> 
                                                </div>
                                                <div className="progress-box mt-4">
                                                            <h6 className="title text-muted">Angular / JavaScript</h6>
                                                            <div className="progress-value d-block text-muted h6">79%</div>
                                                            <Progress value="79" /> 
                                                </div>
                                                <div className="progress-box mt-4">
                                                            <h6 className="title text-muted">HTML</h6>
                                                            <div className="progress-value d-block text-muted h6" style={{ fontSize:"13px", textAlign:"right", lineHeight : "5px",marginTop : "-12px", marginBottom : "6px" }}>95%</div>
                                                            <Progress value="95" /> 
                                                </div> 
                                            </div>
                                        </div>
                                    </Col>

                                    {/* ToolTip */}
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> ToolTip </h4>
                                            </div>
                                            <div className="p-4">
                                            <h6 className="text-muted mb-4 pb-2">Ex. <br /> 
                                             <code className="text-danger">
                                            <br /> &nbsp; &lt;Link to="#" className="btn btn-primary mr-2 mb-2" id="tooltipExample"&gt; Top ToolTip &lt;/h6&gt;
                                            <br /> &nbsp; &nbsp; &lt;UncontrolledTooltip placement="top" target="tooltipExample"&gt; Top ToolTip &lt;/UncontrolledTooltip&gt;
                                            </code></h6>

                                            <Link to="#" className="btn btn-primary mr-2 mb-2" id="tooltipTop">Top ToolTip</Link>
                                                <UncontrolledTooltip placement="top" target="tooltipTop">
                                                    Top
                                                </UncontrolledTooltip>

                                            <Link to="#" className="btn btn-primary mr-2 mb-2" id="tooltipLeft">Left ToolTip</Link>
                                                <UncontrolledTooltip placement="left" target="tooltipLeft">
                                                    Left
                                                </UncontrolledTooltip>

                                            <Link to="#" className="btn btn-primary mr-2 mb-2" id="tooltipBottom">Bottom ToolTip</Link>
                                                <UncontrolledTooltip placement="bottom" target="tooltipBottom">
                                                    Bottom
                                                </UncontrolledTooltip>

                                            <Link to="#" className="btn btn-primary mr-2 mb-2" id="tooltipRight">Right ToolTip</Link>
                                                <UncontrolledTooltip placement="right" target="tooltipRight">
                                                    Right
                                                </UncontrolledTooltip>
                                        
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6}>
                                <Row>
                                    <Col lg={12}>
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Badge color="primary" &gt; primary &lt;/Badge&gt;</code></h6>

                                                <Badge color="primary" className="mr-2 mb-2">Primary</Badge>
                                                <Badge color="secondary" className="mr-2 mb-2">Secondary</Badge>
                                                <Badge color="success" className="mr-2 mb-2">Success</Badge>
                                                <Badge color="danger" className="mr-2 mb-2">Danger</Badge>
                                                <Badge color="warning" className="mr-2 mb-2">Warning</Badge>
                                                <Badge color="info" className="bmr-2 mb-2">Info</Badge>
                                                <Badge color="light" className="mr-2 mb-2">Light</Badge>
                                                <Badge color="dark" className="mr-2 mb-2">Dark</Badge>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Pill Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Badge color="primary" pill&gt; primary &lt;/Badge&gt;</code></h6>

                                                <Badge color="primary" className="mr-2 mb-2" pill>Primary</Badge>
                                                <Badge color="secondary" className="mr-2 mb-2" pill>Secondary</Badge>
                                                <Badge color="success" className="mr-2 mb-2" pill>Success</Badge>
                                                <Badge color="danger" className="mr-2 mb-2" pill>Danger</Badge>
                                                <Badge color="warning" className="mr-2 mb-2" pill>Warning</Badge>
                                                <Badge color="info" className="bmr-2 mb-2" pill>Info</Badge>
                                                <Badge color="light" className="mr-2 mb-2" pill>Light</Badge>
                                                <Badge color="dark" className="mr-2 mb-2" pill>Dark</Badge>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Outline Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Badge className="badge-outline-primary" pill&gt; primary &lt;/Badge&gt;</code></h6>
                                                <Badge color="light" outline className="badge-outline-primary mr-2 mb-2" pill>Primary</Badge>
                                                <Badge className="badge-outline-secondary mr-2 mb-2" pill>Secondary</Badge>
                                                <Badge className="badge-outline-success mr-2 mb-2" pill>Success</Badge>
                                                <Badge className="badge-outline-danger mr-2 mb-2" pill>Danger</Badge>
                                                <Badge className="badge-outline-warning mr-2 mb-2" pill>Warning</Badge>
                                                <Badge className="badge-outline-info mr-2 mb-2" pill>Info</Badge>
                                                <Badge className="badge-outline-light mr-2 mb-2" pill>Light</Badge>
                                                <Badge className="badge-outline-dark mr-2 mb-2" pill>Dark</Badge>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Link Badges </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Link to="index" className="badge badge-primary"&gt; primary &lt;/Link&gt;</code></h6>

                                                <Link to="#" className="badge badge-primary mr-2 mb-2">Primary</Link>
                                                <Link to="#" className="badge badge-secondary mr-2 mb-2">Secondary</Link>
                                                <Link to="#" className="badge badge-success mr-2 mb-2">Success</Link>
                                                <Link to="#" className="badge badge-danger mr-2 mb-2">Danger</Link>
                                                <Link to="#" className="badge badge-warning mr-2 mb-2">Warning</Link>
                                                <Link to="#" className="badge badge-info mr-2 mb-2">Info</Link>
                                                <Link to="#" className="badge badge-light mr-2 mb-2">Light</Link>
                                                <Link to="#" className="badge badge-dark mr-2 mb-2">Dark</Link>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Dropdown </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex.
                                                <code className="text-danger">
                                                    <br/>&lt;UncontrolledDropdown&gt; primary
                                                    <br/>&lt;DropdownToggle color="primary" caret&gt;
                                                    <br/>Primary
                                                    <br/>&lt;/DropdownToggle&gt;
                                                    <br/> &lt;DropdownMenu&gt;
                                                    <br/>&lt;DropdownItem header&gt; Header &lt;/DropdownItem&gt;
                                                    <br/>&lt;DropdownItem disabled&gt; Action &lt;/DropdownItem&gt;
                                                    <br/>&lt;DropdownItem&gt; Another Action &lt;/DropdownItem&gt;
                                                    <br/>&lt;DropdownItem divider /&gt;
                                                    <br/>&lt;DropdownItem&gt; Another Action &lt;/DropdownItem&gt;
                                                    <br/>&lt;/DropdownMenu&gt;

                                                </code></h6>
                                                <Row>
                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="primary" caret>
                                                        Primary
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>

                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="secondary" caret>
                                                        Secondary
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>

                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="success" caret>
                                                        Success
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>

                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="warning" caret>
                                                        Warning
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>

                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="info" caret>
                                                        Info
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>

                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="danger" caret>
                                                        Danger
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>

                                                <UncontrolledDropdown className="mr-1 mt-1"> 
                                                    <DropdownToggle color="dark" caret>
                                                        Dark
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Header</DropdownItem>
                                                        <DropdownItem disabled>Action</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem divider />
                                                        <DropdownItem>Another Action</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Alert </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Alert color="primary"&gt; A simple primary alert—check it out! &lt;/Alert&gt;</code></h6>

                                                <Alert color="primary"> A simple primary alert—check it out!</Alert >
                                                <Alert color="secondary"> A simple secondary alert—check it out!</Alert >
                                                <Alert color="success"> A simple success alert—check it out!</Alert >
                                                <Alert color="danger"> A simple danger alert—check it out!</Alert >
                                                <Alert color="warning"> A simple warning alert—check it out!</Alert >
                                                <Alert color="info"> A simple info alert—check it out!</Alert >
                                                <Alert color="light"> A simple light alert—check it out!</Alert >
                                                <Alert color="dark"> A simple dark alert—check it out!</Alert >
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Alert Links </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;Alert color="primary"&gt; A simple primary alert with &lt;Link to="#" className="alert-link"&gt;&lt;/Link&gt;. &lt;/Alert&gt;</code></h6>

                                                <Alert color="primary"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="secondary"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="success"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="danger"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="warning"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="info"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="light"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                                <Alert color="dark"> A simple primary alert with <Link to="#" className="alert-link">an link</Link>.</Alert >
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Additional Content </h4>
                                            </div>

                                            <div className="p-4">
                                            <Alert color="success">
                                                <h4 className="alert-heading">Well done!</h4>
                                                <p>
                                                Aww yeah, you successfully read this important alert message. This example text is going
                                                to run a bit longer so that you can see how spacing within an alert works with this kind
                                                of content.
                                                </p>
                                                <hr />
                                                <p className="mb-0">
                                                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                                </p>
                                            </Alert>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Dismissing Alert </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;UncontrolledAlert color="success"&gt; &lt;strong&gt;Well done!&lt;/strong&gt; You successfully read this important alert message. &lt; &lt;/UncontrolledAlert&gt;</code></h6>

                                                <UncontrolledAlert color="success"> <strong>Well done!</strong> You successfully read this important alert message. </UncontrolledAlert>
                                                <UncontrolledAlert color="info"> <strong>Heads up!</strong> This alert needs your attention, but it's not super important. </UncontrolledAlert>
                                                <UncontrolledAlert color="warning"> <strong>Warning!</strong> Better check yourself, you're not looking too good. </UncontrolledAlert>
                                                <UncontrolledAlert color="danger"> <strong>Oh snap! </strong> Change a few things up and try submitting again. </UncontrolledAlert>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Advanced Alert </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <br/>
                                                    <code className="text-danger">&lt;Alert color="primary" className="alert-pills"&gt; <br/>&nbsp;&nbsp;
                                                        &lt;Badge color="info" pill className="mr-1"&gt; New &lt;/Badge&gt; <br/>&nbsp;&nbsp;
                                                        &lt;span className="content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br/>
                                                        &lt;/Alert&gt;
                                                    </code>
                                                </h6>

                                                <div className="d-block">
                                                    <Alert color="primary" className="alert-pills">
                                                        <Badge color="info" pill className="mr-1">New</Badge>
                                                        <span className="content"> A Modern primary alert—check it out! <i className="mdi mdi-chevron-right"></i></span>
                                                    </Alert>
                                                </div>

                                                <div className="d-block">
                                                    <Alert color="danger" className="alert-pills">
                                                        <Badge color="info" pill className="mr-1">New</Badge>
                                                        <span className="content"> A Modern danger alert—check it out! <i className="mdi mdi-chevron-right"></i></span>
                                                    </Alert>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Advanced Outline Alert </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6 className="text-muted mb-4 pb-2">Ex. <br/>
                                                    <code className="text-danger">&lt;Alert color="fade" className="alert-outline-primary alert-pills""&gt; <br/>&nbsp;&nbsp;
                                                        &lt;Badge color="primary" pill className="mr-1"&gt; New &lt;/Badge&gt; <br/>&nbsp;&nbsp;
                                                        &lt;span className="content"&gt; A Modern primary alert—check it out! &lt;/span&gt; <br/>
                                                        &lt;/Alert&gt;
                                                    </code>
                                                </h6>

                                                <div className="d-block">
                                                    <Alert color="fade" className="alert-outline-primary alert-pills">
                                                        <Badge color="primary" pill className="mr-1">New</Badge>
                                                        <span className="content"> A Modern primary alert—check it out! <i className="mdi mdi-chevron-right"></i></span>
                                                    </Alert>
                                                </div>

                                                <div className="d-block">
                                                    <Alert color="fade" className="alert-outline-danger alert-pills">
                                                        <Badge color="danger" pill className="mr-1">New</Badge>
                                                        <span className="content"> A Modern danger alert—check it out! <i className="mdi mdi-chevron-right"></i></span>
                                                    </Alert>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Forms </h4>
                                            </div>

                                            <div className="p-4">
                                                <Form>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="form-group position-relative">
                                                                <Label>Your Name <span className="text-danger">*</span></Label>
                                                                <i className="mdi mdi-account ml-3 icons"></i>
                                                                <Input name="name" id="name" type="text" className="form-control pl-5" placeholder="First Name :" />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <FormGroup className="position-relative">
                                                                <Label>Your Email <span className="text-danger">*</span></Label>
                                                                <i className="mdi mdi-email ml-3 icons"></i>
                                                                <Input name="email" id="email" type="email" className="form-control pl-5" placeholder="Your email :" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={12}>
                                                            <FormGroup className="position-relative">
                                                                <Label>Subject</Label>
                                                                <i className="mdi mdi-book ml-3 icons"></i>
                                                                <Input name="subject" id="subject" className="form-control pl-5" placeholder="Your subject :" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md={12}>
                                                            <FormGroup className="position-relative">
                                                                <Label>Comments</Label>
                                                                <i className="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                                <textarea name="comments" id="comments" rows="4" className="form-control pl-5" placeholder="Your Message :"></textarea>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={12} className="text-center">
                                                            <input type="button" id="submit" name="send" className="btn btn-primary" value="Send Message" />
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>


                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Checkboxes </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="form-check form-check-inline">
                                                    <FormGroup>
                                                        <div className="custom-control custom-checkbox">
                                                            <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <Label className="custom-control-label" htmlFor="customCheck1">One</Label>
                                                        </div>
                                                    </FormGroup>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <FormGroup>
                                                        <div className="custom-control custom-checkbox">
                                                            <Input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                            <Label className="custom-control-label" htmlFor="customCheck2">Two</Label>
                                                        </div>
                                                    </FormGroup>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <FormGroup>
                                                        <div className="custom-control custom-checkbox">
                                                            <Input type="checkbox" className="custom-control-input" disabled id="customCheck3" />
                                                            <Label className="custom-control-label" htmlFor="customCheck3">Disabled</Label>
                                                        </div>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Radio Buttons </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <FormGroup>
                                                        <Input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <Label className="custom-control-label" htmlFor="customRadio1">Yes</Label>
                                                    </FormGroup>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <FormGroup>
                                                        <Input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <Label className="custom-control-label" htmlFor="customRadio2">No</Label>
                                                    </FormGroup>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <FormGroup>
                                                        <Input type="radio" id="customRadio3" name="customRadio" disabled className="custom-control-input" />
                                                        <Label className="custom-control-label" htmlFor="customRadio3">Disabled</Label>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Switches Button </h4>
                                            </div>

                                            <div className="p-4">
                                                <div className="custom-control custom-switch">
                                                    <FormGroup>
                                                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Toggle this switch element" />
                                                    </FormGroup>
                                                </div>
                                                <div className="custom-control custom-switch">
                                                    <FormGroup>
                                                        <CustomInput type="switch" id="exampleCustomSwitch1" name="customSwitch1" label="Disabled switch element" disabled />
                                                    </FormGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Subscribe Form </h4>
                                            </div>

                                            <div className="p-4">
                                                <Form>
                                                    <FormGroup>
                                                        <InputGroup className="mb-3">
                                                            <Input name="email" id="email2" type="email" className="form-control" placeholder="Your email :" required aria-describedby="newssubscribebtn" />
                                                            <InputGroupAddon addonType="append">
                                                                <Button color="primary" className="submitBnt" type="submit" id="newssubscribebtn">Subscribe</Button>
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Form>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Modal </h4>
                                            </div>

                                            <div className="p-4">
                                            <Button color="primary" onClick={this.togglemodal}>Click here</Button>
                                                <Modal isOpen={this.state.modal} role="dialog" autoFocus={true} centered={true}>  
                                                    <ModalHeader toggle={this.togglemodal}>Modal title</ModalHeader>
                                                    <ModalBody>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                    </ModalBody>
                                                    <ModalFooter>
                                                    <Button color="primary">Do Something</Button>{' '}
                                                    <Button color="secondary" onClick={this.togglemodal}>Cancel</Button>
                                                    </ModalFooter>
                                                </Modal>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Table </h4>
                                            </div>

                                            <div className="p-4">
                                            <div className="table-responsive bg-white shadow rounded">
                                                <Table className="mb-0 table-center">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Harry</td>
                                                            <td>Potter</td>
                                                            <td>@hpt</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Blockquotes </h4>
                                            </div>

                                            <div className="p-4">
                                                <blockquote className="blockquote p-3">
                                                    <p className="text-muted mb-0 font-italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={12} className="mt-4 pt-2">
                                        <div className="component-wrapper rounded shadow">
                                            <div className="p-4 border-bottom">
                                                <h4 className="title mb-0"> Icons </h4>
                                            </div>

                                            <div className="p-4">
                                                <h6>Material Design Icons</h6>
                                                <p className="text-muted">There are 4400+ Material Design icons and you can get all icons info from here: <Link to="//materialdesignicons.com/" target="_blank"><code className="text-primary">https://materialdesignicons.com/</code></Link></p>
                                                <h6 className="text-muted mb-4 pb-2">Ex. <code className="text-danger">&lt;i className="mdi mdi-home"&gt; &lt;/i&gt;</code></h6>

                                                <i className="mdi mdi-home h4 mr-2"></i>
                                                <i className="mdi mdi-facebook h4 mr-2"></i>
                                                <i className="mdi mdi-chevron-tight h4 mr-2"></i>
                                                <i className="mdi mdi-camera-image h4 mr-2"></i>
                                                <i className="mdi mdi-car-light-high h4 mr-2"></i>
                                                <i className="mdi mdi-silverware-fork-knife h4 mr-2"></i>

                                                <h6 className="mt-4">Flaticon Icons</h6>
                                                <p><Link to="//www.flaticon.com/packs/basic-icon" target="_blank"><code className="text-primary">https://www.flaticon.com/packs/basic-icon</code></Link></p>

                                                <img src={Email} height="50" className="mr-3" alt="" />
                                                <img src={bitcoin} height="50" className="mr-3" alt="" />
                                                <img src={calendar} height="50" className="mr-3" alt="" />
                                                <img src={location} height="50" className="mr-3" alt="" />

                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default Components;
