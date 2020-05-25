// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Feature from "../../components/Shared/Feature";

// Import images;
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : pen, title : "Design & Development", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 2, imgUrl : video, title : "Management & Marketing", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 3, imgUrl : intellectual, title : "Stratagy & Research", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
                { id : 4, imgUrl : user, title : "Easy To Use", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 5, imgUrl : calendar, title : "Daily Reports", description : "Allegedly, a Latin scholar established the origin of the text by compiling unusual established word." },
                { id : 6, imgUrl : sandClock, title : "Real Time Zone", description : "It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today." },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        {/* section title */}
                        <SectionTitle title="What We Do ?" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />

                        {/* feature box */}
                        <Feature featureArray={this.state.features}/>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;