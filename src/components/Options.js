import React from 'react';

import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header--title">Your Options</h3>
                <button 
                    className="button button--link"
                    onClick={props.onHandleDeleteOptions}>Remove all
                </button>
            </div>
            
            {props.options.length === 0 && <p className="widget__message">Please add some items to get started!</p>}
            {
                props.options.map((option, index) => {
                    return (
                        <Option key={option} optionText={option} 
                        count={index+1}
                        onHandleDeleteOneOption={props.onHandleDeleteOption}/>
                    )
                })
            }
        </div>
    );

export default Options;