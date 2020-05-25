// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Import Generic components
import Section from "./section";
import Partners from '../../components/Shared/Partners';
import About from './About';
import Service from './Service';
import Cta from './Cta';
import ClientBlog from './ClientBlog';
import ContactForm from './ContactForm';

class Index extends Component {

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        window.addEventListener("scroll", this.scrollNavigation, true);
        document.getElementById("partners").classList.add("mt-5");
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
                {/* Hero Start */}    
                <Section/>
                
                {/* Partners */}
                <section className="pt-5 pb-5 border-bottom border-top">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <h5>Trusted client by over 10,000+ of the world’s</h5>
                            </Col>
                        </Row>
                        <Partners />
                    </Container>
                </section>

                {/* About */}
                <About />

                {/* Service */}
                <Service />

                {/* Cta */}
                <Cta />

                {/* ClientBlog */}
                <ClientBlog />

                {/* ContactForm */}
                <ContactForm />

            </React.Fragment>
        );
    }
}

export default Index;
