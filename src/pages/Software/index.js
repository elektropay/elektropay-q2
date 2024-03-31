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
            { id : 1, name : "Thomas Israel", image : client1, desc : "Their prompt responses and professional support is top-notch, even on a Sunday."},
            { id : 2, name : "Dan Oliver", image : client2, desc : "With a wide range of options and competitive rates that make it possible for you to manage your payments more effectively."},
            { id : 3, name : "Jill Stetnascewski", image : client3, desc : "We always recieved our payments on time and their platform simplifies the tracking of it all under one roof."},
            { id : 4, name : "Barbara Webb", image : client4, desc : "Simply the best! Being a customer for over a year now, it seems that their customer service is always quick and round the clock."},
            { id : 5, name : "Dean Tolle", image : client5, desc : "Embedding Elektropay into our products through their API has empowered us to sell to more markets"},
            { id : 6, name : "Christa Smith", image : client6, desc : "Our customer pays in GBP that converts to USD that settles in our account in Hong Kong. Elektropay pricing was the best that found."},
        ],
        features : [
            { imgUrl : user, title : "Easy To Use", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper." },
            { imgUrl : calendar, title : "Daily Reports", description : "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word" },
            { imgUrl : sandclock, title : "Real Time Zone", description : "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today." },
        ],
        facilities : [
            { icon : "mdi-security" ,title : "Fully Secured", desc : "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."},
            { icon : "mdi-clock-check-outline", title : "Best Performance", desc : "Moreover, in Latin only words at the beginning of sentences are capitalized."},
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
