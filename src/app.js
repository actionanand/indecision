class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        };
    };

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    };

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };

    handleAddOption(option) {
        if(!option) {
            return 'Enter a valid option to add!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Action hasOptions={this.state.options.length > 0}
                onHandlePick={this.handlePick}/>
                <Options options={this.state.options} 
                onHandleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption onHandleAddOption={this.handleAddOption}/>
            </div>
        );
    };
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return(
        <div>
            <button disabled={!props.hasOptions} 
            onClick={props.onHandlePick}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return(
        <div>
            <button onClick={props.onHandleDeleteOptions}>Remove all</button>
            {
                props.options.map((option) => {
                    return (
                        <Option key={option} optionText={option} />
                    )
                })
            }
        </div>
    );
};

const Option = (props) => {
    return(
        <div>
            <p>{props.optionText}</p>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        let error = this.props.onHandleAddOption(option);

        this.setState(() => {
            return {
                error
            }
        });

        e.target.elements.option.value = '';
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


ReactDOM.render(<Indecision/>, document.getElementById('app'));