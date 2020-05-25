// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Import Generic components
import Section from "./section";
import About from './About';
import Testi from './Testi';
import Blog from './Blog';
import Partners from '../../components/Shared/Partners';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }  
    }
 
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>

                {/* Hero Start */}
                <Section/>

                {/* About */}
                <About />

                {/* Testi */}
                <Testi />

                {/* Partner */}
                <section className="pt-5 pb-5 border-bottom border-top">
                    <Container>
                        <Partners />
                    </Container>
                </section>

                {/* Blog */}
                <Blog />

            </React.Fragment>
        );
    }
}

export default Index;
