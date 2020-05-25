// React basic and bootstrap
import React, { Component, Suspense } from 'react';

// Scroll up button
import { TinyButton as ScrollUpButton} from "react-scroll-up-button";

// Import css
import './css/demo.css';

// Import sub components
const Home = React.lazy(() => import('./Home'));
const Demo = React.lazy(() => import('./Demo'));
const Feature = React.lazy(() => import('./Feature'));
const Footer = React.lazy(() => import('./Footer'));

class IndexRoot extends Component {

    Loader = () => {
        return (
          <div id="preloader">
              <div id="status">
                  <div className="spinner">
                      <div className="double-bounce1"></div>
                      <div className="double-bounce2"></div>
                  </div>
              </div>
          </div>
        );
    }
    
    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >
                    <Home />
                    <Demo />
                    <Feature />
                    <Footer />

                    <div id="bottomIcon">
                    {/* scrollup button */}
                    <ScrollUpButton className="bottomIcon"/>
                    </div>
                </Suspense>
            </React.Fragment>
        );
    }
}

export default IndexRoot;




