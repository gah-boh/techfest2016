import React from 'react';
import ReactDOM from 'react-dom';

import AppNavbar from './containers/app-navbar';
import CSSSelectors from './components/css-selectors';

class App extends React.Component {
    render() {
        return (
            <div>
                <AppNavbar />
                <div className="container">
                    <CSSSelectors />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
