import React, { Component } from "react";
import { variables } from "./Variables.js";
import "./Mechanic.css";
export class Mechanic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mechanics: [],

      MechanicDistrictFilter: "",
      MechanicNameFilter: "",
      MechanicAreaFilter: "",
      MechanicsWithoutFilter: [],
    };
  }

  FilterFn() {
    var MechanicDistrictFilter = this.state.MechanicDistrictFilter;
    var MechanicNameFilter = this.state.MechanicNameFilter;
    var MechanicAreaFilter = this.state.MechanicAreaFilter;

    var filteredData = this.state.MechanicsWithoutFilter.filter(function (el) {
      return (
        el.District.toString()
          .toLowerCase()
          .includes(MechanicDistrictFilter.toString().trim().toLowerCase()) &&
        el.Name.toString()
          .toLowerCase()
          .includes(MechanicNameFilter.toString().trim().toLowerCase()) &&
        el.Address.toString().toLowerCase().includes(MechanicAreaFilter.toString().trim().toLowerCase())
      );
    });

    this.setState({ mechanics: filteredData });
  }
  /* Will need this when I add the rating option */
  /* sortResult(prop, asc){
        var sortedData=this.state.MechanicsWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        });

        this.setState({mechanics:sortedData});
    }*/

  changeMechanicDistrictFilter = (e) => {
    this.state.MechanicDistrictFilter = e.target.value;
    this.FilterFn();
  };

  changeMechanicNameFilter = (e) => {
    this.state.MechanicNameFilter = e.target.value;
    this.FilterFn();
  };

  changeMechanicAreaFilter = (e) => {
      this.state.MechanicAreaFilter = e.target.value;
      this.FilterFn();
  }
  refreshList() {
    fetch(variables.API_URL + "mechanic")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ mechanics: data, MechanicsWithoutFilter: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { mechanics } = this.state;
    return (
      <div className="SearchElements">
        <div className="d-flex flex-row justify-content-center">
          <div className="searchoption">
            <form className="row g-3">
              {/* <div className="col-auto">
                <input className="form-control m-1" type="Search" 
                onChange={this.changeMechanicNameFilter}
                
                placeholder="Search Name"/>
                
                </div> */}

              <div>
                <div className="input-group">
                  <span class="input-group-text">Search</span>
                  <input
                    type="search"
                    aria-label="First name"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.changeMechanicNameFilter}
                  />
                  <input
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                    placeholder="District"
                    onChange={this.changeMechanicDistrictFilter}
                  />
                  <input
                    type="text"
                    aria-label="Last name"
                    className="form-control"
                    placeholder="Area"
                    onChange={this.changeMechanicAreaFilter}
                  />
                </div>
              </div>

              {/* <div className="col-auto">
                <input className="form-control m-1" type="Search" 
                onChange={this.changeMechanicDistrictFilter}
                placeholder="Filter Division"/>
                </div> */}

              {/* <div className="col-auto">
                <input className="form-control m-1" type="Search" 
                onChange={this.changeMechanicDistrictFilter}
                placeholder="Filter Area"/>
                </div> */}
            </form>
          </div>
        </div>

        {/* <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            
                        <th>
                            No.
                            </th>
                            <th>
                            Name
                            </th>
                            <th>
                            Contact
                            </th>
                            <th>
                            Address
                            </th> 
                            <th>
                            District
                            </th>
                           
                        </tr>
                    </thead>
                
                <tbody>
                    {
                        mechanics.map(dep=>
                            <tr key = {dep.MechanicID}>
                                <td></td>
                                <td>{dep.Name}</td>
                                <td>{dep.Contact}</td>
                                <td>{dep.Address}</td>
                                <td>{dep.District}</td>
                                

                            </tr> )
                    }
                </tbody>
                </table> */}
        <div className="card-container">
          <div className="row row-cols-1 row-cols-md-3 g-2">
            {mechanics.map((items) => {
              return (
                <div className="cardElements">
                  <div class="card text-dark bg- mb-3">
                    <div class="card-header">{items.District}</div>
                    <div class="card-body">
                      <h5 class="card-title">{items.Name}</h5>
                      <h5 class="card-title">{items.Contact}</h5>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
                      <p class="card-text">{items.Address}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*Ending Div */}
      </div>
    );
  }
}
