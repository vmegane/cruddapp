import React from 'react'

function Search(props) {
  return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Search</span>
              <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                  <input id="search" type="text" className="validate" onChange={props.handleSearch} value={props.filterby}></input>
                  <label htmlFor="search">Search</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Search;
