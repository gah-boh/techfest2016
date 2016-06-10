import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppNavbar from './containers/app-navbar';
import Home from './components/home';
import CSSSelectors from './components/css-selectors';
import Sources from './containers/sources';

class App extends React.Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="selectors" component={CSSSelectors} />
            <Route path="sources" component={Sources} />
        </Route>
    </Router>
), document.getElementById('app'));
