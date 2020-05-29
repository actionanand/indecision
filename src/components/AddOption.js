import React from 'react';

export default class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        let error = this.props.onHandleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
            </div>
        );
    };
};

// old method : without using transform-class-properties
// no need to use constructor and bind this reference

// export default class AddOption extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.state = {
//             error: undefined
//         };
//     }

//     handleAddOption(e){
//         e.preventDefault();
//         let option = e.target.elements.option.value.trim();
//         let error = this.props.onHandleAddOption(option);

//         this.setState(() => ({ error }));
//         console.log('Hello there');

//         if(!error) {
//             e.target.elements.option.value = '';
//         }
//     }

//     render() {
//         return(
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>
//                 <input type="text" name="option" />
//                 <button>Add Option</button>
//                 </form>
//             </div>
//         );
//     };
// };