import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Pages/Home';
import Intro from './components/Pages/Intro';
import LogIn from './components/Pages/LogIn';
import SignUp from './components/Pages/SignUp';
import Recomendations from './components/Pages/Recomendations';
import Reviewed from './components/Pages/Reviewed';
import AboutUs from './components/Pages/AboutUs';
import Bookmarks from './components/Pages/Bookmarks';
import Error from './components/Pages/Error';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
     <Router>
          
          <Navbar />
           <Switch>
            <Route exact path='/'  component={Intro} />
            <Route path='/home'  component={Home} />
            <Route path='/error'  component={Error} />
            <Route path='/bookmarks'  component={Bookmarks} />
            <Route path='/reviewed'  component={Reviewed} />
            <Route path='/aboutus'  component={AboutUs} />
            <Route path='/recomendations'  component={Recomendations} />
            <Route path='/signup'  component={SignUp} />
            <Route path='/login'  component={LogIn} />
            <Route path='/intro'  component={Intro} />
            <Route path='/'  component={Error} />
          </Switch> 
        </Router>
    </div>
  );
}

export default App;
