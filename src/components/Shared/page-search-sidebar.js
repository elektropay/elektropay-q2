import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, Input } from "reactstrap";


class PageSearchSidebar extends Component {
    render() {
        return (
            <React.Fragment>
                    <Col lg="4" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="sidebar p-4 rounded shadow">
                            
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Search</h4>
                                <div id="search2" className="widget-search mt-4 mb-0">
                                    <Form role="search" method="get" id="searchform" className="searchform">
                                        <div>
                                            <Input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..."/>
                                            <Input type="submit" id="searchsubmit" value="Search"/>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                           
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Catagories</h4>
                                <ul className="list-unstyled mt-4 mb-0 blog-catagories">
                                    <li><Link to="#">Finance</Link> <span className="float-right">13</span></li>
                                    <li><Link to="#">Business</Link> <span className="float-right">09</span></li>
                                    <li><Link to="#">Blog</Link> <span className="float-right">18</span></li>
                                    <li><Link to="#">Corporate</Link> <span className="float-right">20</span></li>
                                    <li><Link to="#">Investment</Link> <span className="float-right">22</span></li>
                                </ul>
                            </div>
                           
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Recent Post</h4>
                                <div className="mt-4">
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog07} className="img-fluid rounded"/></Link></div>
                                        <div className="post-recent-content float-left"><Link to="#">Consultant Business</Link><span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog08} className="img-fluid rounded"/></Link></div>
                                        <div className="post-recent-content float-left"><Link to="#">Look On The Glorious Balance</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                    <div className="clearfix post-recent">
                                        <div className="post-recent-thumb float-left"> <Link to="#"> <img alt="img" src={this.props.blog01} className="img-fluid rounded"/></Link></div>
                                        <div className="post-recent-content float-left"><Link to="#">Research Financial.</Link> <span className="text-muted mt-2">15th June, 2019</span></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="widget mb-4 pb-2">
                                <h4 className="widget-title">Tags Cloud</h4>
                                <div className="tagcloud mt-4">
                                    <Link to="#" className="rounded">Business</Link>
                                    <Link to="#" className="rounded">Finance</Link>
                                    <Link to="#" className="rounded">Marketing</Link>
                                    <Link to="#" className="rounded">Fashion</Link>
                                    <Link to="#" className="rounded">Bride</Link>
                                    <Link to="#" className="rounded">Lifestyle</Link>
                                    <Link to="#" className="rounded">Travel</Link>
                                    <Link to="#" className="rounded">Beauty</Link>
                                    <Link to="#" className="rounded">Video</Link>
                                    <Link to="#" className="rounded">Audio</Link>
                                </div>
                            </div>
                           
                            <div className="widget">
                                <h4 className="widget-title">Follow us</h4>
                                <ul className="list-unstyled social-icon mt-4 mb-0">
                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-facebook"></i></Link></li>
                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-instagram"></i></Link></li>
                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-twitter"></i></Link></li>
                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-vimeo"></i></Link></li>
                                    <li className="list-inline-item ml-1"><Link to="#" className="rounded"><i className="mdi mdi-dribbble"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
            </React.Fragment>
        );
    }
}

export default PageSearchSidebar;