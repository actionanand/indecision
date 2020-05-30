import React from 'react';

const Action = (props) => (
        <div>
            <button disabled={!props.hasOptions} 
            className="big_button"
            onClick={props.onHandlePick}>What should I do?</button>
        </div>
    );

export default Action;