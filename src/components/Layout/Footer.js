import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// import images
import americanEx from '../../images/payments/american-ex.png';
import discover from '../../images/payments/discover.png';
import masterCard from '../../images/payments/master-card.png';
import paypal from '../../images/payments/paypal.png';
import visa from '../../images/payments/visa.png';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "About us", link : "/page-aboutus" },
            { title : "Services", link : "/page-services" },
            { title : "Team", link : "/page-team" },
            { title : "Pricing", link : "/page-pricing" },
            { title : "Project", link : "/page-work" },
            { title : "Careers", link : "/page-jobs" },
            { title : "Blog", link : "/page-blog" },
            { title : "Login", link : "/page-cover-login" },
        ],
        grid2 : [
            { title : "About us", link : "/page-aboutus" },
            { title : "Services", link : "/page-services" },
            { title : "Team", link : "/page-team" },
            { title : "Pricing", link : "/page-pricing" },
            { title : "Project", link : "/page-work" },
            { title : "Careers", link : "/page-jobs" },
            { title : "Blog", link : "/page-blog" },
            { title : "Login", link : "/page-cover-login" },
        ],
        grid3 : [
            { title : "About us", link : "/page-aboutus" },
            { title : "Services", link : "/page-services" },
            { title : "Team", link : "/page-team" },
            { title : "Pricing", link : "/page-pricing" },
            { title : "Project", link : "/page-work" },
            { title : "Careers", link : "/page-jobs" },
            { title : "Blog", link : "/page-blog" },
            { title : "Login", link : "/page-cover-login" },
        ],
        grid4 : [
            { title : "Terms of Services", link : "/terms" },
            { title : "Privacy Policy", link : "/privacy-policy" },
            { title : "Documentation", link : "/documentation" },
            { title : "Changelog", link : "/changelog" },
            { title : "Components", link : "/components" },
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
                        <Link className={this.props.isLight ? "logo-footer text-dark" : "logo-footer"} to="#">Elektropay<span className="text-primary">.</span></Link>	                       
                        <p className={ this.props.isLight ? "mt-4 text-muted small" : "mt-4"}>Elektropay is an Open Payments Platform that enables customers to manage payments, transfer money, connect thier personal, business and payment accounts</p>
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
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
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
