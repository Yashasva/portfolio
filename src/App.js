import './scss/style.scss';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Blogs from './Pages/Blogs';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/projects' exact><Projects/></Route>
        <Route path='/blogs' exact><Blogs/></Route>
        <Route path='/' exact><Home/></Route>      
      </Switch>
    </div>
  );
}

export default App;
