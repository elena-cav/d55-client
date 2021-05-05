import './App.css';
import SubmissionPage from './components/submissionPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccountsList from './components/accountsList';

function App() {
  return (
    <Router>
      <Route exact path="/" component={SubmissionPage} />
      <Route exact path="/accounts" component={AccountsList} />
    </Router>
  );
}

export default App;
