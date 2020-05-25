// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// import generic component
import Partners  from '../../components/Shared/Partners';
import WorkProcess from './WorkProcess';
import Section from "./section";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
        window.addEventListener("scroll", this.scrollNavigation, true);
      }
       // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
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

                {/* section */}
                <Section/>

               {/* partner */}
                <section className="pt-5 pb-5 bg-light">
                    <Container>
                        <Partners />
                    </Container>
                </section>

                {/* WorkProcess */}
                <WorkProcess />
            </React.Fragment>
        );
    }
}

export default Index;
