import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('main'));

const tick = () => {
  const elem = (
      <div>
          <h1>First React Timer</h1>
          <h2>Time is : {new Date().toLocaleTimeString()}</h2>
      </div>
  );
    root.render(
        elem
    );
}
setInterval(()=>{

    tick();
},1000);
