import Signup from './components/pages/Signup'
import Home from './components/pages/Home'
import "./App.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
 

  

  return (
    <div className="App" id="#home">
    
      <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signup" exact component={Signup} />
       
            </Switch>
         </BrowserRouter>
      
     
    </div>
  );
}

export default App;