import React,{Component} from 'react';
import {variables} from './Variables.js';
import './Mechanic.css';
export class Mechanic extends Component{

    constructor(props){
        super(props);
        
        this.state={
            mechanics:[],

        MechanicDistrictFilter:"",
        MechanicNameFilter:"",
        MechanicsWithoutFilter:[],
        }
    }

    FilterFn(){
        var MechanicDistrictFilter=this.state.MechanicDistrictFilter;
        var MechanicNameFilter=this.state.MechanicNameFilter;

        var filteredData = this.state.MechanicsWithoutFilter.filter(
            function(el){
                return el.District.toString().toLowerCase().includes(
                    MechanicDistrictFilter.toString().trim().toLowerCase()
                ) &&
                el.Name.toString().toLowerCase().includes(
                    MechanicNameFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({mechanics:filteredData});
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

    changeMechanicDistrictFilter= (e)=>{
        this.state.MechanicDistrictFilter=e.target.value;
        this.FilterFn();
    }

    changeMechanicNameFilter= (e)=>{
        this.state.MechanicNameFilter=e.target.value;
        this.FilterFn();
    }
    refreshList(){
        fetch(variables.API_URL+'mechanic')
        .then(response=>response.json())
        .then(data=>{
            this.setState({mechanics:data, MechanicsWithoutFilter:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    render(){
        const{
            mechanics 
        } = this.state;
        return(
            
            <div className="SearchElements" >
                <div className="d-flex flex-row justify-content-center">
                <div className="searchoption">
                <form className="row g-3">
                <div className="col-auto">
                <input className="form-control m-1" type="Search" 
                onChange={this.changeMechanicNameFilter}
                placeholder="Search Name"/>
                
                </div>
                
                <div className="col-auto">
                <input className="form-control m-1" type="Search" 
                onChange={this.changeMechanicDistrictFilter}
                placeholder="Filter Division"/>
                </div>

                <div className="col-auto">
                <input className="form-control m-1" type="Search" 
                onChange={this.changeMechanicDistrictFilter}
                placeholder="Filter Division"/>
                </div>
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
                {mechanics.map((items)=> {
                    return (
                        <div className="cardElements">
                        <div class="card text-dark bg- mb-3" >
                        <div class="card-header">{items.District}</div>
                        <div class="card-body">
                        <h5 class="card-title">{items.Name}</h5>
                        <h5 class="card-title">{items.Contact}</h5>
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
            

        )
    }
}