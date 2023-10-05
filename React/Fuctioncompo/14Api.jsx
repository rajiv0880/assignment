

// appplication programing interface

// 2 types of api = private and rest(local)

//  api ne leva mate 3 type
            // fetch , asyncedaway , exhust


// get   - levi
// post  - moklvi
// put   - edit karvu 

import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
// import Apichild from "./Apichild";
import { useEffect, useState } from "react";


const Api = () => {

    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
            data.json().then((resp) => {
                // console.log(resp);
                setUser(resp)
            })
        })
    })

    return (
        <>

            {/* <div className="card">
                <h1>API</h1>
                <DataTable value={user} stripedRows tableStyle={{ minWidth: '50rem' }}>
                    <Column field="userId" header="USERID"></Column>
                    <Column field="id" header="ID"></Column>
                    <Column field="title" header="TITLE"></Column>
                    <Column field="completed" header="COMPLETED"></Column>
                </DataTable>
            </div> */}
            <table border="1" width="70%" align="center">
            <tr border="1">
                <td>userId</td>
                <td>id</td>
                <td>title</td>
                <td>completed</td>
            </tr>
            {
                user.map((item)=>
                <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed == true ? "yes" : "no"}</td>


                </tr>
                )
            }
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    );
}

export default Api;
