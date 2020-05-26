class Indecision extends React.Component {
    
    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in the hands of a computer';
        const options = ['First thing', 'Second thing', 'Fourth thing']
        return(
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Action/>
                <Options options={options} />
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
    handlePick() {
        alert('Handled picked!');
    }

    render() {
        return(
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    };
};

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
        alert('Removed');
    }

    render() {
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => {
                        return (
                            <Option key={option} key optionText={option} />
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