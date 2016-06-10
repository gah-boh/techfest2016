import React from 'react';

export default class Sources extends React.Component {
    state = {
        currentRealName: '',
        currentHeroName: ''
    };
    constructor(props) {
        super(props);
        this.onDebuggerClick = this.onDebuggerClick.bind(this);
        this.onConditionalClick = this.onConditionalClick.bind(this);
    }
    onDebuggerClick() {
        const names = ['Bob Parr', 'Helen Parr', 'Lucius Best', 'Buddy Pine'];
        const currentRealName = names[Math.floor(Math.random() * names.length)];
        debugger;
        this.setState({ currentRealName });
    }
    onConditionalClick() {
        const heroNames = ['Mr. Incredible', 'Elastigirl', 'Frozone', 'Syndrome'];
        const currentHeroName = heroNames[Math.floor(Math.random() * heroNames.length)];
        this.setState({ currentHeroName });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>debugger statement</h2>
                        <div className="row">
                            <div className="col-xs-4">
                                <button onClick={this.onDebuggerClick} className="form-control">Random Secret Identity</button>
                            </div>
                            <div className="col-xs-4">
                                {this.state.currentRealName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>conditional breakpoints</h2>
                        <div className="row">
                            <div className="col-xs-4">
                                <button onClick={this.onConditionalClick} className="form-control">Random Hero Name</button>
                            </div>
                            <div className="col-xs-4">
                                {this.state.currentHeroName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
