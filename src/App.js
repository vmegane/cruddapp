import React from 'react';
import './App.scss';
import Navbar from './components/layout/navbar';
import Listings from './components/listings/listings';
import CreateListing from './components/listings/createlisting';
import ManageListings from './components/listings/managelistings';
import EditListing from './components/listings/editlisting';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    this.updateAllData()
    
  }
  updateAllData = () => {
    axios.get(`https://alfa.propertygrouppoland.pl/q/paulinaopacka/getAll`)
    .then(res => {
      const listings = res.data.data;
      const prevState = this.state;
      this.setState({ ...prevState, listings: listings, lastid: listings[listings.length-1].id });
    })
  }


  handleCreation = (home) => {
    const data = home;
    const url = 'https://alfa.propertygrouppoland.pl/q/paulinaopacka/create'

    try {
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)
      })
    }
    catch (error) {
      console.error(error);
    }
    const prevState = this.state.listings;
    this.setState({
      listings: [
        ...prevState,
        data
      ]
    })

  }

  editListing = (homeid, homedata) => {
    const updatedData = homedata;
    const url = `https://alfa.propertygrouppoland.pl/q/paulinaopacka/update/${homeid}`;
    try {
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(updatedData)
      }).then( () => this.updateAllData() )
    }
    catch (error) {
      console.error(error);
    }

  }


  deleteListing = (homeid) => {
    const url = `https://alfa.propertygrouppoland.pl/q/paulinaopacka/delete/${homeid}`
    try {
     fetch(url, {
       method: 'DELETE'
     }).then((response) => console.log(response))
   }
   catch(error) {
     console.error(error);
   }

   const prevState = this.state.listings;
   console.log('prev state', prevState)
   const newState = prevState.filter( home => home.id !== homeid )
   console.log('new state', newState);
   this.setState({
     listings: newState
   })
 }

  render() {
    return (
      <div>
        <Router basename="{process.env.PUBLIC_URL}">
          <Navbar />
          <Switch>
            <Route exact path="/" render={props => <Listings
                                    {...props}
                                   listings={this.state.listings}
                                   lastid={this.state.lastid}
                                />}/>
            <Route path="/create" render={props => <CreateListing
                                    {...props}
                                    handleCreation={this.handleCreation}
                                   listings={this.state.listings}
                                />}/>
            <Route path="/manage" component={ManageListings} />
            <Route path="/edit/:home_id" render={props => <EditListing
                                    {...props}
                                    editListing={this.editListing}
                                    deleteListing={this.deleteListing}
                                />}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
