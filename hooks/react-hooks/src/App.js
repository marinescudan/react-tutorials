import './App.css';

import {PostList} from './components';
import {MemoizedCounter} from './components';
import {FibonacciSequence} from './components';
import {Counter} from './components';
import {Counter2} from './components';
import {FocusInput} from './components';
import {Button} from './components';
import {NameInput} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
        <p>React Hooks are a way to make using React easier and more fun! Think of it like a toolbox with lots of cool tools inside. These tools help you build your very own toy or game!</p>
        <p>Each tool has a special job it can do, just like how you might have a hammer to nail things, or a screwdriver to screw things in place. React Hooks work the same way, they have a special job they can do to help you build your toy or game.</p>
        <p>For example, one tool called useState helps you keep track of things that change when you play your game. Another tool called useEffect helps you do something special when something in your game changes, like showing a message when you win the game!</p>
        <p>Using React Hooks is like playing with Legos. You can take different pieces and snap them together to build something cool and unique. You can use different tools together to make your game more awesome!</p>
        <p>So, React Hooks are just special tools you can use to build fun games or apps with React. They make building things easier and more fun!</p>
      </header>
      <section>
        <h2>UseRef</h2>
        <p>This hook gives you a way to refer to a specific element or value in your component. It's useful for accessing DOM elements, managing focus, or keeping values between renders.</p>
        <FocusInput />
        <hr/>
        <NameInput />
        <h2>UseCallback</h2>
        <p>This hook helps you optimize your components by memoizing functions. It's useful when you have expensive computations or when you want to prevent unnecessary re-renders.</p>
        <MemoizedCounter />
        <h2>UseMemo</h2>
        <p>This hook memoizes the result of a function so that it's only recomputed when its dependencies change. It's helpful for optimizing performance when you have expensive calculations.</p>
        <FibonacciSequence n={3} />
        <h2>UseState</h2>
        <p>This hook helps you add state to your functional components. It allows you to keep track of and update values that can change over time.</p>
        <Counter />
        <h2>UseReducer</h2>
        <p>This hook is an alternative to useState and helps you manage complex state logic. It's useful when you have state that depends on previous state or when you have multiple values that need to be updated together.</p>
        <Counter2 />
        <h2>UseContext</h2>
        <p>This hook allows you to access the value of a context in your components. Context is a way to share data across many components without having to pass props manually.</p>
        <Button />
        <h2>UseEffect</h2>
        <p>This hook lets you perform side effects in your components. Side effects can be things like fetching data from a server, subscribing to events, or updating the document title.</p>
        <PostList />
      </section>
    </div>
  );
}

export default App;
