import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('main'));

class App extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Timer/>
            </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <h1>First React Timer</h1>
        );
    }
}

class Timer extends React.Component {
    render() {
        return (
            <h2>Time is : {new Date().toLocaleTimeString()}</h2>
        );
    }
}

const tick = () => {
    root.render(
        <App/>
    );
}

setInterval(()=>{

    tick();
},1000);
