import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
} from './components';

function App() {
  return (
    <section className="app">
      <Example />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))