import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Global } from './styled/global';
import Navbar from './components/Navbar';
import SubmissionPage from './components/SubmissionPage';
import AccountsList from './components/AccountsList';
import ReadingsList from './components/ReadingsList';
import UpdateAccount from './components/UpdateAccount';
import My404Component from './components/My404Component';
function App() {
  return (
    <Router>
      <Navbar />
      <Global>
        <Switch>
          <Route exact path="/" component={SubmissionPage} />
          <Route exact path="/accounts" component={AccountsList} />
          <Route exact path="/readings" component={ReadingsList} />
          <Route exact path="/accounts/:account_id" component={UpdateAccount} />
          <Route component={My404Component} />
        </Switch>
      </Global>
    </Router>
  );
}

export default App;
