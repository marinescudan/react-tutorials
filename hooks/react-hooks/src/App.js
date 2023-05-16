import logo from './logo.svg';
import './App.css';

import {PostList} from './components';
import {MemoizedCounter} from './components';
import {FibonacciSequence} from './components';
import {Counter} from './components';
import {Counter2} from './components';
import {FocusInput} from './components';
import {Button} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <PostList />
        <MemoizedCounter />
        <FibonacciSequence />
        <Counter />
        <Counter2 />
        <FocusInput />
        <Button />
      </section>
    </div>
  );
}

export default App;
