import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Components
import Section from "./section";
import Partners from "../../components/Shared/Partners";
import WebsiteDescription from "./website-description";
// import Feature from "../../components/Shared/Feature";
import FeatureDescription from "./feature-description";
import BlockContainer from "./block-container";

//Import Images
import user from "../../images/icon/user.svg";
import calendar from "../../images/icon/calendar.svg";
import sandclock from "../../images/icon/sand-clock.svg";
import app1 from "../../images/app/1.png";
import app2 from "../../images/app/2.png";
import client1 from "../../images/client/01.jpg";
import client2 from "../../images/client/02.jpg";
import client3 from "../../images/client/03.jpg";
import client4 from "../../images/client/04.jpg";
import client5 from "../../images/client/05.jpg";
import client6 from "../../images/client/06.jpg";

class IndexclassNameSoftware extends Component {
    state = {
        testimonials : [
            { id : 1, name : "Thomas Israel", image : client1, desc : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today."},
            { id : 2, name : "Carl Oliver", image : client2, desc : "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."},
            { id : 3, name : "Barbara McIntosh", image : client3, desc : "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."},
            { id : 4, name : "Jill Webb", image : client4, desc : "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."},
            { id : 5, name : "Dean Tolle", image : client5, desc : "There is now an abundance of readable dummy texts. These are usually used when a text is required."},
            { id : 6, name : "Christa Smith", image : client6, desc : "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero."},
        ],
        features : [
            { imgUrl : user, title : "Easy To Use", description : "Let your customers pay how they always paid before — with their payment method of choice." },
            { imgUrl : calendar, title : "Built To Scale", description : "Our full suite of solutions are designed to grow as your business needs to expand in new markets." },
            { imgUrl : sandclock, title : "Global Payments", description : "Experience how our platform can optimize your business, and can orchestrate your payments stack." },
        ],
        facilities : [
            { icon : "mdi-security" ,title : "Fully Secured", desc : "Our security first approcah are based on the highest international standards including PCI Level 1 & Level 2compliance."},
            { icon : "mdi-clock-check-outline", title : "Payments Orchestration", desc : "Customize your stack by using multiple PSPs and any payment service to create a frictionless checkout experience."},
        ],
    }
    

    componentDidMount() {
        document.body.classList = "";
        document.getElementById('topnav').classList.add('bg-white');
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
                {/* render section */}
                <Section/>

                   <Container>
                    {/* render partner */}
                    <Partners/>
                    </Container>

                    {/* wesite description */}
                    <WebsiteDescription/>

                    {/* block container */}
                    <BlockContainer/>

                    {/* Render Feature Description */}
                    <section className="pt-5 mb-60">
                    <FeatureDescription image1={app1} image2={app2} testimonials={this.state.testimonials} facilities={this.state.facilities} />
                    </section>
                                   
            </React.Fragment>
        );
    }
}

export default IndexclassNameSoftware;
