class Indecision extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: ['First thing', 'Second thing', 'Fourth thing']
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
        alert('Handle picked!');
    };

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
                <AddOption/>
            </div>
        );
    };
};

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    };
};

class Action extends React.Component {
    
    render() {
        return(
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.onHandlePick}>What should I do?</button>
            </div>
        );
    };
};

class Options extends React.Component {

    render() {
        return(
            <div>
                <button onClick={this.props.onHandleDeleteOptions}>Remove all</button>
                {
                    this.props.options.map((option) => {
                        return (
                            <Option key={option} optionText={option} />
                        )
                    })
                }
            </div>
        );
    };
};

class Option extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    };
};

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        if(option){
            alert(`Submitted.. Value is ${option}`);
        }
        e.target.elements.option.value = '';
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
            </div>
        );
    };
};


ReactDOM.render(<Indecision/>, document.getElementById('app'));