// import './App.css'

// function App() {

//   return (
//     <>
//       <h1>testing</h1>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
