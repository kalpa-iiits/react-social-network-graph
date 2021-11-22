import React from 'react'
import { Link } from 'react-router-dom'
import AddNodes from './AddNodes'


function Cards(props){
    return (
    props.friends.map(el => {
        var link = '/?user=' + el 
        return (
            <li className="liPeople">
                <button onClick={() => window.location.reload(false)} className="btn-1 btn"><Link to = {link}>{el}</Link></button>
            </li>
                
        )
    }))
}

function UserList(props) {
    var graph = AddNodes()
    var friends = Object.keys(graph.friends);
    return (
        <div className= "container">
         <ul>
          
                <Cards friends = {friends}/>
        </ul>
    </div>
    )
}
export default UserList

