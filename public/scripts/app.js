"use strict";

console.log("App is running");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is sample jsx text!"
    ),
    React.createElement(
        "p",
        null,
        "Well done!"
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Anand"
    ),
    React.createElement(
        "p",
        null,
        "India"
    )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot);
