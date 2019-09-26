import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


class EditListing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeid: this.props.match.params.home_id,
      listing: {}
    }
  }

  componentDidMount() {
    axios.get(`https://alfa.propertygrouppoland.pl/q/paulinaopacka/get/${this.state.homeid}`)
      .then(res => {
        const listing = res.data.data;
        this.setState({ listing: listing });
      })
  }
  handleChange = (e) => {
    e.preventDefault();
    const prevState = this.state.listing;
    this.setState({
      listing: {
        ...prevState,
        [e.target.id]: e.target.value
      }
    })
  }

  saveChanges = (homeid, homedata) => {
    this.props.editListing(homeid, homedata);
    this.props.history.push('/')
  }

  handleDelete = (homeid) => {
    this.props.deleteListing(homeid);
    this.props.history.push('/')
  }

  render() {
    if (this.state.listing) {
      return (
        <div className="container">
          <div className="col s12 m6 l6">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">location_city</i>
                      <input id="city" type="text" value={this.state.listing.city} onChange={this.handleChange}></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">location_on</i>
                      <input id="street" type="text" value={this.state.listing.street} onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field col s2">
                      <input id="property" type="number" value={this.state.listing.property} onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field col s2">
                      <input id="apartment" type="number" value={this.state.listing.apartment} onChange={this.handleChange}></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <i className="material-icons prefix">local_atm</i>
                      <input id="price" type="text" className="validate" value={this.state.listing.price} onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field col s2">
                      <i className="material-icons prefix">line_weight</i>
                      <input id="type" type="number" value={this.state.listing.type} onChange={this.handleChange}></input>
                    </div>
                  </div>
                  <div className="input-field col s6">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="description" className="materialize-textarea" value={this.state.listing.description} onChange={this.handleChange}></textarea>
                  </div>
                </div>
                <div className="card-action center-align red-text">
                  <Link onClick={() => this.saveChanges(this.state.listing.id, this.state.listing)} className=" btn teal white-text edit-button">                
                   <i className="material-icons left">save</i>
                  Save </Link>
                  <Link to='/' className="btn amber white-text edit-button"> 
                    <i className="material-icons left">cancel</i>
                    Cancel </Link>
                  <Link onClick={() => this.handleDelete(this.state.homeid)} className="btn red white-text lighten-2 edit-button"> 
                    <i className="material-icons right">delete</i>
                    Delete </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12">
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
        </div>
      </div>
    )
  }
}

export default EditListing;
