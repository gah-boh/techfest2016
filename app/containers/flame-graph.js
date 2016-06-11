import React from 'react';

function fibRecursive(n) {
    if(n <= 2) {
        return 1;
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibLoop(n) {
    let a = 0;
    let b = 1;
    let f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}

export default class FlameGraph extends React.Component {
    state = {
        fibN: 10
    };
    constructor(props) {
        super(props);
        this.runFibRecursive = this.runFibRecursive.bind(this);
        this.runFibLoop = this.runFibLoop.bind(this);
        this.handleFibNChange = this.handleFibNChange.bind(this);
    }
    runFibRecursive() {
        const result = fibRecursive(this.state.fibN);
        console.log('fibonacci recursive result', result);
    }
    runFibLoop() {
        const result = fibLoop(this.state.fibN);
        console.log('fibonacci loop result', result);
    }
    handleFibNChange(event) {
        this.setState({
            fibN: event.target.value
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h2>flame graph</h2>
                    <div className="row">
                        <div className="col-xs-2">
                            <input className="form-control" value={this.state.fibN} onChange={this.handleFibNChange} />
                        </div>
                        <div className="col-xs-4">
                            <button className="form-control" onClick={this.runFibRecursive}>Fibonacci Sequence Recursion</button>
                        </div>
                        <div className="col-xs-4">
                            <button className="form-control" onClick={this.runFibLoop}>Fibonacci Sequence Loop</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
