import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
