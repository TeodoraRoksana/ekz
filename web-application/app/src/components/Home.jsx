import React from "react";

import { Component } from "react";

// export default function Home(){
//     return(
//         <table class="table table-bordered">
//              <thead>
//                 <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Brand</th>
//                 <th scope="col">Year</th>
//                 <th scope="col">Size</th>
//                 <th scope="col">Number</th>
//                 <th scope="col">Discount</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {deps.map(item=>
//                             <tr>
//                                <td>
//                                     {item.id}
//                                 </td>
                                
//                                 <td>
//                                     {item.Name}
//                                 </td>

//                                 <td>
//                                     {item.Price}
//                                 </td>

//                                 <td>
//                                     {item.Brand}
//                                 </td>

//                                 <td>
//                                     {item.Year}
//                                 </td>

//                                 <td>
//                                     {item.Size}
//                                 </td>

//                                 <td>
//                                     {item.Number}
//                                 </td>

//                                 <td>
//                                     {item.Discount}
//                                 </td>
                                 
//                             </tr>)}
//             </tbody>
//         </table>
//     )
// }

export class Home extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false, comment:""}
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    refreshList(){
        fetch('http://localhost:53535/api/clothing/'+this.state.comment)
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({comment:event.target.Search.value})
    }

    render(){
        const {deps, phid,phtags, photo}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});


        return(
            <div >
            <table class="table table-bordered">
             <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Year</th>
                <th scope="col">Size</th>
                <th scope="col">Number</th>
                <th scope="col">Discount</th>
                </tr>
            </thead>
            <tbody>
                {deps.map(item=>
                            <tr>
                               <td>
                                    {item.id}
                                </td>
                                
                                <td>
                                    {item.Name}
                                </td>

                                <td>
                                    {item.Price}
                                </td>

                                <td>
                                    {item.Brand}
                                </td>

                                <td>
                                    {item.Year}
                                </td>

                                <td>
                                    {item.Size}
                                </td>

                                <td>
                                    {item.Number}
                                </td>

                                <td>
                                    {item.Discount}
                                </td>
                                 
                            </tr>)}
            </tbody>
        </table>

                
            </div>
        )
    }
}