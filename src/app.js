class Header extends React.Component {
    render() {
        return (
            <h1>Header Component from react!</h1>
        );
    };
};

class Action extends React.Component {
    render() {
        return(
            <p>Action</p>
        );
    };
};

class Options extends React.Component {
    render() {
        return(
            <p>Options</p>
        );
    };
};

class AddOptions extends React.Component {
    render() {
        return(
            <p>Add Options</p>
        );
    };
};

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options></Options>
        <AddOptions/>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));