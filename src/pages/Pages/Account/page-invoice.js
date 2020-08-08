import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";

class PageInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [
                { id : 1, name : "Inclusive Insights", qty : 2, rate : 2600 },
                { id : 2, name : "Handy Guide", qty : 2, rate : 2600 },
                { id : 3, name : "Premiere Product", qty : 2, rate : 2600 },
            ],
        }
        this.sendMail.bind(this);
        this.callNumber.bind(this);
    }

    sendMail(){
        window.location.href="mailto:contact@example.com";
    }

    callNumber(){
        window.location.href="tel:+152534-468-854";
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
                <section className="bg-invoice bg-light">
                    <Container>
                        <Row className="mt-5 pt-4 pt-sm-0 justify-content-center">
                            <Col lg="10">
                                <div className="p-4 shadow rounded bg-white">
                                    <div className="invoice-top pb-4 border-bottom">
                                        <Row>
                                            <Col md="8">
                                                <div className="logo-invoice mb-2">Elektropay<span className="text-primary">.</span></div>
                                                <Link to="#" className="text-primary h6"><i className="mdi mdi-link-variant text-muted mr-2"></i>www.Elektropay.corp</Link>
                                            </Col>

                                            <Col md="4" className="mt-4 mt-sm-0">
                                                <h5>Address :</h5>
                                                <dl className="row mb-0">
                                                    <dt className="col-2 text-muted"><i className="mdi mdi-map-marker"></i></dt>
                                                    <dd className="col-10 text-muted">
                                                        <Link to="#" className="video-play-icon text-muted">
                                                            <p className="mb-0">1419 Riverwood Drive,</p>
                                                            <p className="mb-0">Redding, CA 96001</p>
                                                        </Link>
                                                    </dd>

                                                    <dt className="col-2 text-muted"><i className="mdi mdi-email"></i></dt>
                                                    <dd className="col-10 text-muted">
                                                        <Link to="#" id="mail" onClick={this.sendMail} className="text-muted">info@Elektropay.com</Link>
                                                    </dd>

                                                    <dt className="col-2 text-muted"><i className="mdi mdi-phone"></i></dt>
                                                    <dd className="col-10 text-muted">
                                                        <Link to="#" id="call" onClick={this.callNumber} className="text-muted">(+12) 1546-456-856</Link>
                                                    </dd>
                                                </dl>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="invoice-middle py-4">
                                        <h5>Invoice Details :</h5>
                                        <Row className="mb-0">
                                            <Col md={{size:8, order:1}} xs={{order:2}}>
                                                <dl className="row">
                                                    <dt className="col-md-3 col-5 font-weight-normal">Invoice No. :</dt>
                                                    <dd className="col-md-9 col-7 text-muted">land45845621</dd>
                                                    
                                                    <dt className="col-md-3 col-5 font-weight-normal">Name :</dt>
                                                    <dd className="col-md-9 col-7 text-muted">Calvin Carlo</dd>
                                                    
                                                    <dt className="col-md-3 col-5 font-weight-normal">Address :</dt>
                                                    <dd className="col-md-9 col-7 text-muted">
                                                        <p className="mb-0">1962 Pike Street,</p>
                                                        <p>Diego, CA 92123</p>
                                                    </dd>
                                                    
                                                    <dt className="col-md-3 col-5 font-weight-normal">Phone :</dt>
                                                    <dd className="col-md-9 col-7 text-muted">(+45) 4584-458-695</dd>
                                                </dl>
                                            </Col>

                                            <Col md={{size:4, order:2}} xs={{order:1}} className="mt-2 mt-sm-0">
                                                <dl className="row mb-0">
                                                    <dt className="col-md-4 col-5 font-weight-normal">Date :</dt>
                                                    <dd className="col-md-8 col-7 text-muted">15th Oct, 2019</dd>
                                                </dl>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="invoice-table pb-4">
                                        <div className="table-responsive bg-white shadow rounded">
                                            <Table className="mb-0 table-center invoice-tb">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th scope="col" className="text-left">No.</th>
                                                        <th scope="col" className="text-left">Item</th>
                                                        <th scope="col">Qty</th>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.items.map((item,key) =>
                                                            <tr key={key}>
                                                                <th scope="row" className="text-left">{key}</th>
                                                                <td className="text-left">{item.name}</td>
                                                                <td>{item.qty}</td>
                                                                <td>$ {item.rate}</td>
                                                                <td>$ {item.qty*item.rate}</td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>

                                        <Row>
                                            <Col lg="4" md="5" className="ml-auto">
                                                <ul className="list-unstyled h5 font-weight-normal mt-4 mb-0">
                                                    <li className="text-muted">Subtotal :<span className="float-right">$ 22600</span></li>
                                                    <li className="text-muted">Taxes :<span className="float-right"> 0</span></li>
                                                    <li>Total :<span className="float-right">$ 22600</span></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="invoice-footer border-top pt-4">
                                        <Row>
                                            <Col sm="6">
                                                <div className="text-sm-left text-muted text-center">
                                                    <h6 className="mb-0">Customer Services : <Link to="#" onClick={this.callNumber} className="text-warning">(+12) 1546-456-856</Link></h6>
                                                </div>
                                            </Col>

                                            <Col sm="6">
                                                <div className="text-sm-right text-muted text-center">
                                                    <h6 className="mb-0"><Link to="/page-terms" target="_blank" className="text-primary">Terms & Conditions</Link></h6>
                                                </div>
                                            </Col>
                                        </Row>
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

export default PageInvoice