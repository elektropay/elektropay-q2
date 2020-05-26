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
                { id : 1, title : "Home", link : "/index" },
                { id : 2, title : "Landing", link : "/#", isMegaMenu : true, isOpenSubMenu : false,
                    child : [
                        { title : "Saas", link : "/index-saas" },
                        { title : "Agency", link : "/index-agency" },
                        { title : "Application", link : "/index-apps" },
                        { title : "Studio", link : "/index-studio" },
                        { title : "Business", link : "/index-business" },
                        { title : "Modern Business", link : "/index-modern-business" },
                        { title : "Hotel", link : "/index-hotel" },
                        { title : "Marketing", link : "/index-marketing" },
                        { title : "Enterprise", link : "/index-enterprise" },
                        { title : "Coworking", link : "/index-coworking" },
                        { title : "Classic Application", link : "/index-classic-app", isNew : true },
                        { title : "Classic Saas", link : "/index-classic-saas", isNew : true },
                        { title : "Car Ride", link : "/index-car-riding", isNew : true },
                    ],
                    child2 : [
                        { title : "Cloud Hosting", link : "/index-cloud-hosting" },
                        { title : "Event", link : "/index-event" },
                        { title : "Course", link : "/index-course" },
                        { title : "Personal", link : "/index-personal" },
                        { title : "Product", link : "/index-single" },
                        { title : "Portfolio", link : "/index-portfolio" },
                        { title : "Service", link : "/index-services" },
                        { title : "Payments", link : "/index-payments" },
                        { title : "Cryptocurrency", link : "/index-crypto" },
                        { title : "Software", link : "/index-software" },
                        { title : "Job", link : "/index-job" },
                        { title : "Customer", link : "/index-customer" },
                        { title : "Saas", link : "/index-onepage", isOnePage : true },                        
                    ]
                },
                { id : 3, title : "Pages", link : "/#", isOpenSubMenu : false,
                    child : [
                        { id : 1, title : "About Us", link : "/page-aboutus"},
                        { id : 2, title : "Services", link : "page-services"},
                        { id : 3, title : "Pricing", link : "/page-pricing"},
                        { id : 4, title : "Team", link : "/page-team"},
                        { id : 5, title : "Account", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Profile", link : "/page-profile"},
                                { title : "Account Setting", link : "/page-profile-edit"},
                                { title : "Invoice", link : "/page-invoice"},
                            ]
                        },
                        { id : 6, title : "Careers", link : "/#", isAdded : true, isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Jobs", link : "/page-job"},
                                { title : "Jobs - Sidebar", link : "/page-jobs-sidebar", isAdded : true },
                                { title : "Job Detail", link : "/page-job-detail"},
                                { title : "Job Apply", link : "/page-job-apply"},
                                { title : "Company", link : "/page-job-company"},
                                { title : "Candidate", link : "/page-job-candidate"},
                            ]
                        },
                        { id : 7, title : "Blog", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Blog Grid", link : "/page-blog"},
                                { title : "Blog with Sidebar", link : "/page-blog-sidebar"},
                                { title : "Blog Detail", link : "/page-blog-detail"},
                            ]
                        },
                        { id : 8, title : "Works", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Works Grid", link : "/page-work"},
                                { title : "Work Detail", link : "/page-work-detail"},
                            ]
                        },
                        { id : 9, title : "User", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Login", link : "/page-login"},
                                { title : "Signup", link : "/page-signup"},
                                { title : "Recovery Password", link : "/page-recovery-password"},
                                { title : "Login 2", link : "/page-cover-login"},
                                { title : "Signup 2", link : "/page-cover-signup"},
                                { title : "Recovery Password 2", link : "/page-cover-re-password"},
                            ]
                        },
                        { id : 10, title : "Utility", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Terms of Services", link : "/page-terms"},
                                { title : "Privacy Policy", link : "/page-privacy"},
                            ]
                        },
                        { id : 11, title : "Special", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Coming Soon", link : "/page-comingsoon"},
                                { title : "Coming Soon Two", link : "/page-comingsoon2"},
                                { title : "Maintenance", link : "/page-maintenance"},
                                { title : "Error", link : "/page-error"},
                            ]
                        },
                        { id : 12, title : "Contact", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Contact Detail", link : "/page-contact-detail"},
                                { title : "Contact One", link : "/page-contact-one"},
                                { title : "Contact Two", link : "/page-contact-two"},
                                { title : "Contact Three", link : "/page-contact-three"},
                            ]
                        },
                    ]
                },
                { id : 4, title : "Docs", link : "/#", isOpenSubMenu : false,
                child : [
                    { title : "Documentations", link : "/documentation"},
                    { title : "Changelog", link : "/changelog"},
                    { title : "Components", link : "/components"},
                    { title : "Widget", link : "/widget"},
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
                            <Link className="logo" to="/"><img src={logo} className="header_logo" width="175" alt=""/></Link>
                        </div>
                        <div className="buy-button">
                            <Link to="#" id="loginButton" className="btn btn-outline-success d-md-block mt-3">Login</Link>
                        </div>
                        <div className="buy-button">
                            <Link to="#" id="buyButton" className="btn btn-primary d-md-block mt-3 mr-2">Try It Free</Link>
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
                                            <span className="menu-arrow"></span>
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
                                                                            <Link to={item.link}>{item.title}{item.isOnePage ? <span className="badge badge-warning rounded ml-2">Onepage</span> : null}</Link>
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
                            </ul>
                            <div className="buy-menu-btn ml-4">
                                <Link to="#" id="signupButton" target="_blank" className="btn btn-primary d-md-none">Get Started</Link>
                            </div>
                        <div className="buy-menu-btn ml-4 mt-2">
                            <Link to="#" id="loginButton" className="btn btn-outline-success d-md-none mr-2">Login</Link>
                        </div>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Topbar);