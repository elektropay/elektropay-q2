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


        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>

            <Container>
                <Row>
                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Platform</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid1.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Features</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid2.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                
                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Company</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid3.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>
                    
                    <Col lg="3" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
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
                    <Col md="4" sm="6">
                      <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></Link></li>
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                            <li className="list-inline-item mr-1"><Link to="" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></Link></li>
                        </ul>
                        <div className="text-sm-left small">
                            <p className="mb-0 small">Elektropay is a service of EverPay. &copy; 2020 EverPay.</p>
                        </div>
                    </Col>
                 <Col md="4" sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled text-sm-right text-muted mb-0 small">
                            <li className="list-inline-item mr-2 text-muted small"><Link to="">Privacy Statement&nbsp; | </Link></li>
                            <li className="list-inline-item mr-2 text-muted small"><Link to="">Terms&nbsp; | </Link></li>
                            <li className="list-inline-item mr-2 text-muted small"><Link to="">Security&nbsp; | </Link></li>
                            <li className="list-inline-item mr-2 text-muted small"><Link to=""> Status  </Link></li>
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
