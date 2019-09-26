import React from 'react'
//import { Link } from 'react-router-dom';
import Listing from './listing';
import axios from 'axios';
import Search from './search';

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterby: ''
     
    }
  }

  componentDidMount() {
    axios.get(`https://alfa.propertygrouppoland.pl/q/paulinaopacka/getAll`)
      .then(res => {
        const listings = res.data.data;
        const prevState = this.setState;
        this.setState({ ...prevState, listings: listings });
      })
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

  handleSearch = (e) => {
        this.setState({ filterby: e.target.value })
  }

   

  render() {
    let filteredListings;    
    if (this.state.listings) {
      let query = this.state.filterby.toUpperCase(); 
       filteredListings = this.state.listings.filter( listing => {  return String(Object.values(listing)).toUpperCase().includes(query) } )
    }
    
    
    if (this.state.listings) {
      return (
        <div className="container">
          <Search handleSearch={this.handleSearch} filterby={this.state.filterby}/>

          <div className="row">
            <div className="col s12 m12">

              {filteredListings.map( home => {
                return <Listing key={`home-${home.id}`} home={home} delete={this.deleteListing}/>
              })}


            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
    
            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
          </div>
        </div>
      </div>
    )

  }

}

export default Listings;
