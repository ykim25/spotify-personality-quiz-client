import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
import Loading from './pages/Loading';
import ResultConfirmation from './pages/ResultConfirmation';
import FinalResults from './pages/FinalResults';

import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" component={App} />
        <Route path="/loading" component={Loading} />
        <Route path="/result-confirmation" component={ResultConfirmation} />
        <Route path="/final-results" component={FinalResults} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
