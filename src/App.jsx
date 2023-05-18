import './App.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Banner />
        <Router>
            <Switch>
                <Route strict exact path="/" component={TodoPage}/>
                <Route strict exact path="/followers" component={FollowersPage}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
