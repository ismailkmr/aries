import React, { Component, useState, useEffect } from "react";
function Dashboard() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('users'));
        if (items) {
         setItems(items);
        }
        console.log(items)
        console.log('1234..Z')
      }, []);
    return(
        <div className="form">
            List
            <table>
       
            {items.map((item) =>( 
            <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                 </tr>
            )
            )}
       
        </table>
        </div>
       
    )       
}

export default Dashboard;