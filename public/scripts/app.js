'use strict';

var count = 0;

var user = {
    name: 'Anand Raja',
    age: 27,
    location: 'India'
};

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var resetCounter = function resetCounter() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            user.name.toUpperCase()
        ),
        React.createElement(
            'p',
            null,
            user.location
        ),
        user.age >= 18 && React.createElement(
            'p',
            null,
            'Age: ' + user.age
        ),
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: resetCounter },
            'reset'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderCounterApp();
