import React from 'react'
import { Link } from 'react-router-dom';

import Profile1 from './Profile1.js';


function Cards(props){
    var user = props.user
    var graph = props.graph
    return (
    props.friends.map(el => {
        var link = "/?source=" + props.user + "&target=" + el
        return (
            <div class = "col-md-2">
                <img src = "https://i.imgur.com/EUPCHUW.png" alt = "profileimage" class = "friendimage"/>
                <h3>{el}</h3>
                <button className=" btn-success " onClick={() => window.location.reload(false)} ><Link to = {link}>Add Friend</Link></button>
            </div>
        )
    }));
}

function Recommandations(props) {
    var friends = props.recommandations;
    var user = props.user;
    var graph = props.graph;
    return (
        <div className= "container-fluid">
            <h2> Recommandations List </h2>
            <div className = "row">
                <Cards friends = {friends} user = {props.user} graph = {graph}/>
            </div>
        </div>
    )
}

export default Recommandations
