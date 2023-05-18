import React from 'react';
import './style.css';
//javascript xml language
// synthetic tags and sythentic events
//new ClassComponent().render()
// HooksApp()
import HooksApp from './ReactHooks.js';
import ClassComponent from './ClassExample.js';
export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {count < 5 ? <ClassComponent count /> : null}
      {count < 7 ? <HooksApp count /> : null}
    </div>
  );
}
