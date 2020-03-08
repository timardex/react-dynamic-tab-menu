import React, {useState} from 'react';
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

  const [page, setPage] = useState(0);
  const getPage = tabMenu[page] ? tabMenu[page].component : null;

  return (
    <div className="App">
      <nav>
        <ul>
          {tabMenu.map((props, i) => (
            <li className={`link ${i === page ? 'active' : ''}`} key={i} onClick={() => setPage(i)}>
              {props.linkText}
            </li>
          ))}
        </ul>
      </nav>

      <div className="container">{getPage}</div>
    </div>
  );
}

export default App;
