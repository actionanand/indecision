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
    render() {
        return(
            <div>
                Action
            </div>
        );
    };
};

class Options extends React.Component {
    render() {
        return(
            <div>
                <p>Options are below.</p>
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
    render() {
        return(
            <div>
                Add Option
            </div>
        );
    };
};


ReactDOM.render(<Indecision/>, document.getElementById('app'));