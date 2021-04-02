import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <Navigation />
         <Router>
            <Switch>
               <Route exact path="/">
                  <HomePage />
               </Route>
               <Route path="/login">
                  <LoginPage />
               </Route>
               <Route path="/register">
                  <RegisterPage />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
