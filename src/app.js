let count = 0;

const user = {
    name: 'Anand Raja',
    age: 27,
    location: 'India'
};

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const resetCounter = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{user.name.toUpperCase()}</h1>
            <p>{user.location}</p>
            {user.age >= 18 && <p>{'Age: ' + user.age}</p>}
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderCounterApp();



