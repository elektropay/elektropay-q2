// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Pricing from "../../components/Shared/pricing-box";

class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pricings1 : [
                { id : 1, title : "CLOUD HOSTING", price : 0, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                },
                { id : 2, title : "DEDICATED HOSTING", price : 39, duration : "mo", buttonText: "Get Started", btnLink: "", isActive : true,
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                },
                { id : 3, title : "VPS HOSTING", price : 59, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                },
                { id : 4, title : "SHARED HOSTING", price : 79, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                }
            ],
            pricings2 : [
                { id : 1, title : "CLOUD HOSTING", price : 0, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                },
                { id : 2, title : "DEDICATED HOSTING", price : 139, duration : "mo", buttonText: "Get Started", btnLink: "", isActive : true,
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                },
                { id : 3, title : "VPS HOSTING", price : 259, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                },
                { id : 4, title : "SHARED HOSTING", price : 379, duration : "mo", buttonText: "Buy Now", btnLink: "",
                    features : [
                        {title : "2 GB Memory"},
                        {title : "10 Free Optimization"},
                        {title : "24/7 support"},
                        {title : "Content Optimization"},
                    ]
                }
            ],
            activeTab: '1',
            activeIndex1 : 1,
            activeIndex2 : 5,
        }
        this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
              activeTab: tab
            });
          }
    }

    componentDidMount(){
        var pricingboxes = document.getElementsByName("pricingbox");
        for ( var i=0; i<pricingboxes.length; i++){
            pricingboxes[i].classList.remove("business-rate");
            pricingboxes[i].classList.remove("shadow");

            pricingboxes[i].classList.add("pt-5");
            pricingboxes[i].classList.add("pb-5");
            pricingboxes[i].classList.add("text-center");

                if(i === this.state.activeIndex1 || i === this.state.activeIndex2)
                {
                    pricingboxes[i].classList.add("starter-plan");
                    pricingboxes[i].classList.add("shadow");
                }
        }
        var pricingsections = document.getElementsByName("pricingsection");
        for ( var j=0; j<pricingsections.length; j++){
            pricingsections[j].classList.add("justify-content-center");
        }
    }
    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Our Hosting Rates" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row className="align-items-center">
                            <Col xs="12" className="mt-4 pt-2">
                                <div className="text-center">
                                        <Nav pills justified className="rounded-pill justify-content-center d-inline-block border py-1 px-2">
                                            <NavItem className="d-inline-block mr-1">
                                                <NavLink
                                                    className={classnames({active: this.state.activeTab === '1'},'px-3','rounded-pill','monthly')}
                                                    onClick={() => { this.toggleTab('1'); }}
                                                >
                                                    Monthly
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="d-inline-block">
                                                <NavLink
                                                    className={classnames({active: this.state.activeTab === '2'},'px-3','rounded-pill','yearly')}
                                                    onClick={() => { this.toggleTab('2'); }}
                                                >
                                                    Yearly <span className="badge badge-success rounded">15% Off </span>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                </div>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">    
                                        <Row>
                                            <Pricing pricings={this.state.pricings1} />
                                        </Row>
                                    </TabPane>
            
                                    <TabPane tabId="2">
                                        <Row>
                                            <Pricing pricings={this.state.pricings2} />
                                        </Row>
                                    </TabPane>    
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Price;