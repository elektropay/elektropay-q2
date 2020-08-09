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
import classic02 from "../../images/saas/classic02.png";
import mobile from "../../images/software/mobile01.png";
import app1 from '../../images/app/1.png';
import app2 from '../../images/app/2.png';
import app3 from '../../images/app/3.png';
import app4 from '../../images/app/4.png';
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
                    <section className="pt-5 pb-5">
                    <FeatureDescription image1={mobile} image2={classic02} testimonials={this.state.testimonials} facilities={this.state.facilities} />
                    </section>
                                   
            </React.Fragment>
        );
    }
}

export default IndexclassNameSoftware;
