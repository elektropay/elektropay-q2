import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';
import logoWhite from '../../images/logo_white.png';
class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "Card Processing", link : "/page-aboutus" },
            { title : "Omni Commerce", link : "/page-services" },
            { title : "Crypto Processing", link : "/page-team" },
            { title : "Tasket", link : "/page-pricing" },
            { title : "ElektroPOS", link : "/page-work" },
            { title : "Marketplace", link : "/page-jobs" },
            { title : "SugarBiller", link : "/page-blog" },
            { title : "KardIssue", link : "/page-cover-login" },
        ],
        grid2 : [
            { title : "Payment Methods", link : "/page-aboutus" },
            { title : "InStore Payments", link : "/page-services" },
            { title : "Fraud Prevention", link : "/page-team" },
            { title : "Payouts", link : "/page-pricing" },
            { title : "Global Reach", link : "/page-work" },
            { title : "Analytics Engine", link : "/page-jobs" },
            { title : "Serverless Stack", link : "/page-blog" },
            { title : "Risk Management", link : "/page-cover-login" },
        ],
      
        grid3 : [
            { title : "Contact us", link : "/contact-us" },
            { title : "About us", link : "/about-us" },
            { title : "Our Team", link : "/page-team" },
            { title : "Careers", link : "/page-jobs" },
            { title : "Partners", link : "/page-work" },
            { title : "Pricing & Plans", link : "/plans" },
        ],
        grid4 : [
            { title : "Our Blog", link : "/elektrobytes" },
            { title : "Help & Support", link : "/support" },
            { title : "Sandbox API", link : "//sandbox.elektropay.com" },
            { title : "Documentation", link : "//docs.elektropay.com" },
            { title : "Github Repo", link : "//github.com/elektropay" },
            { title : "Developer Portal", link : "//developers.elektropay.com" },
        ]
    };
  }

  render() {
    return (
      <React.Fragment>


        <footer className={this.props.isLight ? "footer bg-black" : "footer"}>

            <Container>
                <Row>
                <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">	                    
                        <Link className={this.props.isLight ? "logo-footer" : "logo-footer"} to="#"><img src={logoWhite} className="" width="180" alt=""/></Link>	                       
                        <p className={ this.props.isLight ? "mt-4 text-white small" : "mt-4"}>Elektropay is an Open Payments Platform that enables customers to manage payments, transfer money, connect thier personal, business and payment accounts</p>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-instagram" title="Linkedin"></i></Link></li>
                            <li className="list-inline-item mr-2"><Link to="" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                            <li className="list-inline-item mr-2"><Link to="" className="rounded"><i className="mdi mdi-slack" title="Slack"></i></Link></li>
                        </ul>
                    </Col>
                    <Col lg="2" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Platform</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid1.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}>{grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col lg="2" md="2" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Features</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid2.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col lg="2" md="2" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Company</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid3.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                    
                    <Col lg="2" md="2" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Resources</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid4.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
        <footer className="footer footer-bar">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col md="4" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="text-sm-left small">
                           <ul className="list-unstyled mb-0">
                            <li className="list-inline-item mr-0 text-muted">Elektropay is a service of EverPay. &copy; 2020 Elektropay. </li>
                        </ul>
                        </div>
                    </Col>
                 <Col md="4" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled text-sm-right text-muted mb-0 small">
                            <li className="list-inline-item mr-1 text-muted small"><Link to="/privacy-policy">Privacy&nbsp; | </Link></li>
                            <li className="list-inline-item mr-1 text-muted small"><Link to="/terms">Terms&nbsp; | </Link></li>
                            <li className="list-inline-item mr-1 text-muted small"><Link to="/security-policy">Security&nbsp; | </Link></li>
                            <li className="list-inline-item mr-1 text-muted small"><Link to="//status.elektropay.com"> Status </Link></li>
                        </ul>
                    </Col>

                    <Col md="4" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled text-sm-right mb-0">
                            <li className="list-inline-item mr-1"><Link to=""><img src={americanEx} className="avatar avatar-ex-sm" title="American Express" alt=""/></Link></li>
                            <li className="list-inline-item mr-1"><Link to=""><img src={discover} className="avatar avatar-ex-sm" title="Discover" alt=""/></Link></li>
                            <li className="list-inline-item mr-1"><Link to=""><img src={masterCard} className="avatar avatar-ex-sm" title="Master Card" alt=""/></Link></li>
                            <li className="list-inline-item mr-1"><Link to=""><img src={paypal} className="avatar avatar-ex-sm" title="Paypal" alt=""/></Link></li>
                            <li className="list-inline-item mr-1"><Link to=""><img src={visa} className="avatar avatar-ex-sm" title="Visa" alt=""/></Link></li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </footer>        
      </React.Fragment>
    );
  }
}

export default Footer;
