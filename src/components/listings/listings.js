import React from 'react'
//import { Link } from 'react-router-dom';
import Listing from './listing';
import Search from './search';

class Listings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterby: ''
     
    }
  }

  

  handleSearch = (e) => {
        this.setState({ filterby: e.target.value })
  }

  render() {
    let filteredListings = this.props.listings;
    if (this.props.listings) {
       let query = this.state.filterby.toUpperCase(); 
       filteredListings = this.props.listings.filter( listing => {  return String(Object.values(listing)).toUpperCase().includes(query) } )
     }
    
    
    if (this.props.listings) {
      return (
        <div className="container">
          <Search handleSearch={this.handleSearch} filterby={this.state.filterby}/>

          <div className="row">
            <div className="col s12 m12">

              {filteredListings.map( home => {
                return <Listing key={ home.id ? `home-${home.id}` : `home-${parseInt(this.props.lastid)+1}` } 
                                home={home} 
                                delete={this.deleteListing}
                                homeid={ home.id ? home.id : parseInt(this.props.lastid)+1 }
                                />
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
