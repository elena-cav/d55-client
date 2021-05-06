import './App.css';
import SubmissionPage from './components/submissionPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccountsList from './components/accountsList';
import { Global } from './styled/global';
import Navbar from './components/Navbar';
import ReadingsList from './components/readingsList';

function App() {
  return (
    <Router>
      <Navbar />
      <Global>
        <Route exact path="/" component={SubmissionPage} />
        <Route exact path="/accounts" component={AccountsList} />
        <Route exact path="/readings" component={ReadingsList} />
      </Global>
    </Router>
  );
}

export default App;
