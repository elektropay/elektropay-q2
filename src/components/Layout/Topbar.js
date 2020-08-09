import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { Container } from "reactstrap";

//Import Images
import logo from "../../images/logo_grey.png";

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen : false, 
            navLinks : [
                 { id : 1, title : "Platform", link : "/#", isMegaMenu : true, isOpenSubMenu : false,
                    child : [
                        { title : "Card Processing", link : "/index-payments" },
                        { title : "Omni-Commerce", link : "/index-business" },
                        { title : "Real-Time Payments", link : "/index-apps", isNew : true },
                        { title : "Bitcoin Payments", link : "/index-crypto" },
                        { title : "Mobile Payments", link : "/index-modern-business" },
                        { title : "Bank Payments", link : "/index-software", isNew : true },
                    ],
                    child2 : [
                        { title : "ElektroPos", link : "/index-course", isNew : true  },
                        { title : "Tasket", link : "/index-cloud-hosting" },
                        { title : "Marketplace", link : "/index-services" },
                        { title : "EAuth", link : "/index-personal" },
                        { title : "SugarBiller", link : "/index-single" },
                        { title : "KardIssue", link : "/index-portfolio", isNew : true },                       
                    ]
                },
                { id : 2, title : "Features", link : "/#", isMegaMenu : true, isOpenSubMenu : false,
                    child : [
                        { title : "Payment Methods", link : "/index-saas" },
                        { title : "Fraud Prevention", link : "/index-apps" },
                        { title : "Instore Payments", link : "/index-business" },
                        { title : "Risk Management", link : "/index-software", isNew : true  }, 
                    ],
                    child2 : [
                        { title : "Payouts", link : "/index-cloud-hosting" },
                        { title : "Global Reach", link : "/index-cloud-hosting" },
                        { title : "Analytics Engine", link : "/index-single" },
                        { title : "Serverless Stack", link : "/index-onepage"},                        
                    ]
                },

                { id : 3, title : "Plans", link : "/plans" },

                { id : 4, title : "Company", link : "/#", isOpenSubMenu : false,
                    child : [
                        { id : 1, title : "Contact Us", link : "/contact-us"},
                        { id : 3, title : "About Us", link : "/about-us"},
                        { id : 4, title : "Our Team", link : "/page-team"},
                        { id : 5, title : "Careers", link : "/index-job", isNowHiring : true },
                        { id : 6, title : "Partners", link : "/partners"},
                        ]
                },
             
                { id : 5, title : "Resources", link : "/#", isOpenSubMenu : false,
                child : [
                    { title : "Our Blog", link : "/elektrobytes"},
                    { title : "Help & Support", link : "/page-customer"},
                    { title : "Sandbox API", link : "//sandbox.elektropay.com"},
                    { title : "Documentation", link : "//docs.elektropay.com"},
                    { title : "Developer Portal", link : "//developers.elektropay.com"},
                    ]
                },
                   
            ]
         };



        this.toggleLine = this.toggleLine.bind(this);
        this.openBlock.bind(this);
        this.openNestedBlock.bind(this);
    }

    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }

    componentDidMount() {
         var matchingMenuItem = null;
         var ul = document.getElementById("top-menu");
         var items = ul.getElementsByTagName("a");
         for (var i = 0; i < items.length; ++i) {
             if (this.props.location.pathname === items[i].pathname) {
                 matchingMenuItem = items[i];
                 break;
             }
         }
         if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
         }
     }
 
    activateParentDropdown = (item) => {
          const parent = item.parentElement;
          if (parent) {
              parent.classList.add('active'); // li
              const parent1 = parent.parentElement;
              parent1.classList.add('active'); // li
              if (parent1) {
                  const parent2 = parent1.parentElement;
                  parent2.classList.add('active'); // li
                  if (parent2) {
                    const parent3 = parent2.parentElement;
                    parent3.classList.add('active'); // li
                    if (parent3) {
                        const parent4 = parent3.parentElement;
                        parent4.classList.add('active'); // li
                 }
             }
         }
    }
    }

    openBlock = (level2_id) => {
        //match level 2 id with current clicked id and if id is correct then update status and open level 2 submenu
        this.setState({
            navLinks: this.state.navLinks.map(navLink => (navLink.id === level2_id ? {...navLink, isOpenSubMenu : !navLink.isOpenSubMenu  } : navLink))
          });
    }

    openNestedBlock = (level2_id, level3_id) => {
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink) =>
        //Match level 2 id
           tmpLink.id === level2_id ?
                tmpLink.child.map((tmpchild) =>
                    //if level1 id is matched then match level 3 id
                    tmpchild.id === level3_id ?
                        //if id is matched then update status(level 3 sub menu will be open)
                        tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu
                    :
                        tmpchild.isOpenNestedSubMenu = false
                )
            :
                false 
            
        )
        this.setState({navLinks : tmpLinks});
    }

    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <Container>
                          <div>
                            <Link className="logo" to="/"><img src={logo} className="header_logo" width="180" alt=""/></Link>
                        </div>
                         <div className="buy-button">
                            <Link to="//app.elektropay.com/signup" id="signupButton" className="btn btn-outline-primary mt-3 d-none d-sm-block">Try It Free </Link>
                        </div>
                        <div className="buy-button login-btn-light">
                            <Link to="#" id="loginButton" className="btn btn-light mt-3 mr-2 d-none d-md-block">Login </Link>
                        </div>

                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link to="#" onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" } >
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                            <ul className="navigation-menu pt-1" id="top-menu">
                                {
                                    this.state.navLinks.map((navLink, key) => 
                                    navLink.child || navLink.child2 ?
                                        <li className="has-submenu" key={key}>
                                            {/* child item(menu Item) - Level 1 */}
                                            <Link to={navLink.link} onClick={(event) => {  event.preventDefault(); this.openBlock(navLink.id) } } >{navLink.title}</Link>
                                            
                                                {
                                                    navLink.isMegaMenu ?
                                                    // if menu is mega menu(2 columns grid)
                                                    <ul className={ navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu" }  >
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                        <li key={childKey}>
                                                                            <Link to={item.link}>{item.title}{item.isNew ? <span className="badge badge-danger rounded ml-2">v2.0</span> : null}</Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child2.map((item, childKey) =>
                                                                        <li key={childKey}>
                                                                            <Link to={item.link}>{item.title}{item.isNowHiring ? <span className="badge badge-success rounded ml-2">Now Hiring</span> : null}</Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                :
                                                    // if menu is not mega menu(1grid)
                                                    <ul  className={ navLink.isOpenSubMenu ? "submenu open" : "submenu" }  >
                                                            {
                                                                navLink.child.map((childArray, childKey) =>
                                                                    childArray.nestedChild ?
                                                                    // sub menu item - Level 2
                                                                        <li className="has-submenu" key={childKey}>
                                                                            <Link to={childArray.link} onClick={(event) => {  event.preventDefault(); this.openNestedBlock(navLink.id, childArray.id) } }> {childArray.title}{" "}{childArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null }</Link>
                                                                            <span className="submenu-arrow"></span>
                                                                            <ul className={ childArray.isOpenNestedSubMenu ? "submenu open" : "submenu" }>
                                                                                {
                                                                                    childArray.nestedChild.map((nestedChildArray, nestedKey) =>
                                                                                        // nested sub menu item - Level 3
                                                                                        <li key={nestedKey}><Link to={nestedChildArray.link}>{nestedChildArray.title}{" "}{nestedChildArray.isAdded ? <span className="badge badge-primary rounded">Added</span> : null }</Link></li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </li>
                                                                    :
                                                                        <li key={childKey}><Link to={childArray.link}>{childArray.title}</Link></li>
                                                                )
                                                            }
                                                    </ul>
                                                }
                                                
                                        </li>
                                    :
                                      <li key={key}><Link to={navLink.link}>{navLink.title}</Link></li>
                                    )
                                }
                                <li><Link to="/index-customer" id="supportButton" className="text-secondary mdi-20px profile-icons"><i className="mdi mdi-account rounded-pill p-1 bg-light shadow profile-icons" title="Contact Support +1 800-566-6003"></i></Link> </li>    
                            </ul>
                            <div className="buy-menu-btn ml-4">
                                <Link to="#" id="signupButton" target="_blank" className="btn btn-primary d-md-none">Get Started </Link>
                            </div>
                        <div className="buy-menu-btn ml-4 mt-2">
                            <Link to="#" id="loginButton" className="btn btn-success d-md-none mr-2">Login </Link>
                        </div>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Topbar);
