import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.blogs.map((blog, key) =>
                    <Col lg="4" md="6" className="mt-4 pt-2" key={key} name="blog">
                        <div className="blog position-relative overflow-hidden shadow rounded">
                            <div className="position-relative">
                                <img src={blog.image} className="img-fluid rounded-top" alt=""/>
                                <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="content p-4">
                                <h4><Link to="#" className="title text-dark">{blog.title}</Link></h4>
                                <div className="post-meta mt-3">
                                    <Link to="#" className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                    <ul className="list-unstyled mb-0">
                                        <li className="list-inline-item mr-2"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline mr-1"></i>{blog.like}</Link></li>
                                        <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline mr-1"></i>{blog.comment}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><i className="mdi mdi-account"></i> {blog.autor}</small>
                                <small className="text-light date"><i className="mdi mdi-calendar-check"></i> {blog.date}</small>
                            </div>
                        </div>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default BlogBox;