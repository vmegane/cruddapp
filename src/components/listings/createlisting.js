import React from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';

class CreateListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      description: '',
      price: '',
      property: '',
      street: '',
      type: '',
      apartment: ''
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Create new listing</span>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">location_city</i>
                    <input id="city" type="text" className="validate" value={this.state.value} onChange={this.handleChange}></input>
                    <label htmlFor="city">City</label>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m6 l6">
                      <i className="material-icons prefix">location_on</i>
                      <input id="street" type="text" className="validate" value={this.state.value} onChange={this.handleChange}></input>
                      <label htmlFor="street" >Street</label>
                    </div>
                    <div className="input-field col s2">
                      <input id="property" type="number" className="validate" value={this.state.value} onChange={this.handleChange}></input>
                      <label htmlFor="property" className="hide-on-small-only">Property</label>
                    </div>
                    <div className="input-field col s2">
                      <input id="apartment" type="number" className="validate" size="3" value={this.state.value} onChange={this.handleChange}></input>
                      <label htmlFor="apartment" className="hide-on-small-only">Apartment</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">local_atm</i>
                      <input id="price" type="number" className="validate" value={this.state.value} onChange={this.handleChange}></input>
                      <label htmlFor="price">Price</label>
                    </div>
                    <div className="input-field col s2">
                      <i className="material-icons prefix">line_weight</i>
                      <input id="type" type="number" className="validate" value={this.state.value} onChange={this.handleChange}></input>
                      <label htmlFor="type">Type</label>
                    </div>
                  </div>

                </div>
                <div className="input-field">
                  <i className="material-icons prefix">info</i>
                  <textarea id="description" className="materialize-textarea" value={this.state.value} onChange={this.handleChange}></textarea>
                  <label htmlFor="description">Description</label>
                </div>
                <Link to='/' className="btn-floating btn-large red lighten-2 pulse right" onClick={() => this.props.handleCreation(this.state)}>
                  <i className="material-icons">add</i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateListing;
