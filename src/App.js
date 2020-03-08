import React from 'react';
import './App.scss';

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import ComponentFour from './components/ComponentFour';

const App = () => {
  const tabMenu = [
    {linkText: 'Component One', component: <ComponentOne />},
    {linkText: 'Component Two', component: <ComponentTwo />},
    {linkText: 'Component Three', component: <ComponentThree />},
    {linkText: 'Component Four', component: <ComponentFour />},
  ];

  return (
    <div className="App">
      <nav>
        <ul>
          {tabMenu.map((props, i) => (
            <li key={i} className="link">
              {props.linkText}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
