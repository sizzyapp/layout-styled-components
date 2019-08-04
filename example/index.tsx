import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Horizontal, Vertical } from '../.';

const App = () => {
  return (
    <div>
      <Horizontal>
        <div>Hello</div>
        <div>World</div>
      </Horizontal>

      <hr />

      <Vertical>
        <div>Goodbye</div>
        <div>World</div>
      </Vertical>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
