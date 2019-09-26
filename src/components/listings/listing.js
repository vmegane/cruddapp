import React from 'react'
import { Link } from 'react-router-dom';

class Listing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card horizontal hoverable">
          <div className="card-stacked">
            <div className="card-content">

              <ul className="listing">
                <li>
                  <i className="material-icons left"> location_city </i> <b>  {this.props.home.city} </b>
                </li>
                <li>
                  <i className="material-icons left"> location_on </i><b>{this.props.home.street} {this.props.home.property} {this.props.home.apartment ? `/ ${this.props.home.apartment}` : null}</b>
                </li>
                <li>
                  <i className="material-icons left"> local_atm </i>{this.props.home.price}
                </li>
              </ul>
              <p><i className="material-icons left"> info </i> {this.props.home.description} </p>
            </div>
            <div className="card-action center-align red-text">
            <Link to={`edit/${this.props.homeid}`} className="btn-small"> <i className="material-icons right">edit</i> Edit </Link>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Listing;
