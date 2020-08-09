import React, { Component, Suspense } from 'react';
import Layout from './components/Layout/';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';

// Import Css
import './Apps.scss';
import './css/materialdesignicons.min.css';
import './css/colors/default.css';

// Include Routes 
import routes from './routes';

function withLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {  
    render() {
      return <Layout>
        <WrappedComponent></WrappedComponent>
      </Layout>
    }
  };
}

class App extends Component {

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
      <Router>
        <Suspense fallback = {this.Loader()} >
            <Switch>
            {routes.map((route, idx) =>
                route.isWithoutLayout ?
                  <Route path={route.path} component={route.component} key={idx} />
                :
                  <Route path={route.path} component={withLayout(route.component)} key={idx} />
            )}
            </Switch>
            </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
