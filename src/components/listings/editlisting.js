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

  saveChanges = (homeid) => {
    //console.log('new data', this.state.listing)
    this.editListing(homeid);
    this.props.history.push('/')
  }

  editListing = (homeid) => {
    const updatedData = JSON.stringify(this.state.listing);
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
        body: updatedData
      }).then((response) => console.log(response))
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.state)
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
                  <Link onClick={() => this.saveChanges(this.state.listing.id)} className="teal-text text-lighten-1"> Save </Link>
                  <Link to='/' className="text-lighten-1"> Cancel </Link>
                  <Link onClick={() => this.props.delete(this.props.home.id)} className="red-text text-lighten-1"> Delete </Link>
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
