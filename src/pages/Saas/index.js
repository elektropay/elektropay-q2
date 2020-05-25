// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

// Import images
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';

// Import Generic Components
import Section from "./section";
import SectionTitle from "../../components/Shared/section-title";
import Partners from '../../components/Shared/Partners';
import Feature from '../../components/Shared/Feature';
import Start from './Start';
import Client from './Client';

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

        var featureBox = document.getElementsByClassName("features");
        for(var i=0; i<featureBox.length; i++){
            featureBox[i].classList.remove("mt-5");
        }

        var sectionTitles=document.getElementsByName("maintitle");
        sectionTitles[0].classList.remove("mb-4");
        sectionTitles[0].classList.remove("pb-2");
        sectionTitles[0].classList.add("mb-60");

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

        const featureArray = [
            { id: 1, title: "Easy To Use", description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper. ", imgUrl: user },
            { id: 2, title: "Daily Reports", description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.", imgUrl: calendar },
            { id: 3, title: "Real Time Zone", description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.", imgUrl: sandClock },
        ];

        return (
            <React.Fragment>
                {/* section */}
                <Section/>

                {/* Partner */}
                <section className="section bg-light mt-0 mt-md-5">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="Our Trusted Clients" desc="that can provide everything you need to generate awareness, drive traffic, connect."/>

                        {/* partners */}
                        <Partners/>
                    </Container>
                </section>


                {/* Feature */}
                <section className="section">
                    <Container>
                        <Feature featureArray={featureArray} isCenter={false} />
                    </Container>

                    {/* Start */}
                    <Start />

                    {/* Client */}
                    <Client />
                </section>
                
                <div className="position-relative">
                        <div className="shape overflow-hidden text-footer">
                            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                            </svg>
                        </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Index;
