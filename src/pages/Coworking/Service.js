// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import ServiceBox from "./service-box";
import SectionTitle from "../../components/Shared/section-title";

//import images
import wifi from '../../images/icon/wifi.svg';
import printer from '../../images/icon/printer.svg';
import servingDish from '../../images/icon/serving-dish.svg';
import hours24 from '../../images/icon/24-hours.svg';
import calendarB from '../../images/icon/calendar_b.svg';
import mail2 from '../../images/icon/mail2.svg';
import question from '../../images/icon/question.svg';
import coffee_cup from '../../images/icon/coffee-cup.svg';

class Service extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services : [
                { image : wifi, title : "Fast Internet" },
                { image : printer, title : "Printer & Fax" },
                { image : servingDish, title : "Modern Kitchen" },
                { image : hours24, title : "24 Hr Access" },
                { image : mail2, title : "Mail Service" },
                { image : calendarB, title : "Events Space" },
                { image : question, title : "Conference Rooms" },
                { image : coffee_cup, title : "Organic Tea & Coffee" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>

                        {/* section title */}
                        <SectionTitle title="Your Comfort is Our Priority" desc=" that can provide everything you need to generate awareness, drive traffic, connect." />

                        <Row>
                            {/* services box */}
                            <ServiceBox services={this.state.services} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Service;