import React from 'react';

import Option from './Option';

const Options = (props) => {
    return(
        <div>
            <button onClick={props.onHandleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add some items to get started!</p>}
            {
                props.options.map((option) => {
                    return (
                        <Option key={option} optionText={option} 
                        onHandleDeleteOneOption={props.onHandleDeleteOption}/>
                    )
                })
            }
        </div>
    );
};

export default Options;