import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


export default class Indecision extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);

    //     this.state = {
    //         options: []
    //          };
    // };

        state = {
            options: [],
            isSelected: undefined
        };


    componentDidMount() {
        try {
            const indecisionOptions = localStorage.getItem('options');
            const options = JSON.parse(indecisionOptions);
    
            if(options) {
                this.setState(() => ({ options }));
            }  
        } catch (e) {
            // Do nothing at all :)
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length != this.state.options.length){
            const indecisionOptions = JSON.stringify(this.state.options);
            localStorage.setItem('options', indecisionOptions);
        }
    }

    componnetWillUnmount() {
        console.log('Unmounted!');
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (toBeRemoved) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => toBeRemoved != option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            isSelected: option
        }));
    };

    handleClearSelection = () => {
        this.setState(() => ({
            isSelected: undefined
        }));
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid option to add!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header subTitle={subTitle}></Header>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                    onHandlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options} 
                        onHandleDeleteOptions={this.handleDeleteOptions}
                        onHandleDeleteOption={this.handleDeleteOption} />
                        <AddOption onHandleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.isSelected} 
                onHandleClearSelection={ this.handleClearSelection } />
            </div>
        );
    };
};