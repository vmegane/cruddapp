import React from 'react'
import { Link } from 'react-router-dom';

class ManageListings extends React.Component {

  deleteAll = () => {
    const url = `https://alfa.propertygrouppoland.pl/q/paulinaopacka/deleteAll`
    try {
      fetch(url, {
        method: 'DELETE'
      }).then((response) => console.log(response))
    }
    catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <div className="card">
              <div className="card-content center-align">
                <span className="card-title center-align">
                  Manage your listings</span>
                <div className="row">
                  <div className="row">
                    <div className="col s12">
                      <div className="card red lighten-3">
                        <div className="card-content white-text">
                          <span className="card-title"> <i className="material-icons left">error</i>Danger zone</span>
                          <p>Click the button below to DELETE all your listings.</p>
                        </div>
                        <div className="card-action">
                          <Link to='/' className="waves-effect waves-light btn-large red" onClick={this.deleteAll}><i className="material-icons left">error</i>DELETE ALL</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default ManageListings;
