import React from 'react';
import './App.scss';
import Navbar from './components/layout/navbar';
//import Header from './components/layout/header';
import Listings from './components/listings/listings';
import CreateListing from './components/listings/createlisting';
import ManageListings from './components/listings/managelistings';
import EditListing from './components/listings/editlisting';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        {/* <Header/> */}
        <Navbar />
        <Switch>
        <Route exact path="/" component={Listings} />
        <Route path="/create" component={CreateListing} />
        <Route path="/manage" component={ManageListings} />
        <Route path="/edit/:home_id" component={EditListing} />

        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
