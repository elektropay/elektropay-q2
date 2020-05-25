// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import Feature from "../../components/Shared/Feature";

// Import images
import wifi from "../../images/icon/wifi.svg";
import gameController from "../../images/icon/game-controller.svg";
import weightlifter from "../../images/icon/weightlifter.svg";
import servingDish from "../../images/icon/serving-dish.svg";
import cardiogram from "../../images/icon/cardiogram.svg";
import bed from "../../images/icon/bed.svg";

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { id : 1, imgUrl : wifi, title : "Free WIFI", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 2, imgUrl : gameController, title : "Relaxation", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 3, imgUrl : weightlifter, title : "Spa & Fitness", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
                { id : 4, imgUrl : servingDish, title : "Restaurant", description : "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper." },
                { id : 5, imgUrl : cardiogram, title : "Smooth Parallax", description : "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word." },
                { id : 6, imgUrl : bed, title : "Bedrooms", description : "It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today." },
            ],
        }
    }
    
    componentDidMount(){
        var featureboxes = document.getElementsByName("featurebox");
        for(var i=0; i<featureboxes.length; i++) {
            featureboxes[i].classList.add("mt-5");
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container className="pb-lg-4 mb-md-5 mb-4">
                        {/* section title */}
                        <SectionTitle title="Best Services for you" desc=" that can provide everything you need to generate awareness, drive traffic, connect" />

                        {/* feature box */}
                        <Feature featureArray={this.state.features} isCenter={true} /> 
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;