import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
// import Projects from './pages/Projects/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          {/* <Route path="/projects" component={ Projects } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
