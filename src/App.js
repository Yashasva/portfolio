import './App.css';
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
        <Route path='/' exact><Home/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/blogs'><Blogs/></Route>
      </Switch>
    </div>
  );
}

export default App;
