console.log("App is running");

var template = (
<div>
    <h1>This is sample jsx text!</h1>
    <p>Well done!</p> 
</div>
);

var template2 = (
    <div>
        <h1>Anand</h1>
        <p>India</p>
    </div>
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot);