import React from 'react';

export default function CSSSelectors() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h2>Finding with selectors</h2>
                    <div className="red-container">
                        <div className="blue-container">
                            <div className="green-container">
                                <div className="cover-squares"></div>
                                <div className="cover-squares"></div>
                                <div className="cover-squares"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <h2>Element States</h2>
                    <div className="text-center">
                        <button className="states-button">Show States</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <h2>Chrome Last Selection</h2>
                    <div className="last-selection-container">
                        <div className="last-selection text-center">$0</div>
                        <div className="last-selection text-center">$1</div>
                        <div className="last-selection text-center">$2</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <h2>Adding a class</h2>
                    <div className="add-class-to-me"></div>
                </div>
            </div>
        </div>
    );
}
