import './App.css';
import SubmissionPage from './components/submissionPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccountsList from './components/accountsList';
import { Global } from './styled/global';

function App() {
  return (
    <Router>
      <Global>
        <Route exact path="/" component={SubmissionPage} />
        <Route exact path="/accounts" component={AccountsList} />
      </Global>
    </Router>
  );
}

export default App;
