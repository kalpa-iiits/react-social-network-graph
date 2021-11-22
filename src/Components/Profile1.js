import React from 'react'
import AddFriend from './AddFriend.js';
import Friends from './Friends.js'
import getFriendList from './getFriendList.js';
import getRecommandations from './getRecommandations.js';
import Recommandations from './Recommandations.js'





function Profile1(props) {
    
    var graph = props.graph
    var user = props.user
    var target = props.el
    graph = AddFriend(graph, user, target)
    var friends = getFriendList(graph, user);
    var recommandations = getRecommandations(graph, user);
    return (
        <>
            <div className= "container-fluid">
                <div className = "row">
                    <div className = "col-md-2">
                        <img src = "https://i.imgur.com/FMlmyY3.png" alt = "profileimage" className = "profile"/>
                        <h2>{props.user}</h2>
                    </div>
                </div>
            </div>
            <Friends friends = {friends} user = {user} />
            <Recommandations recommandations = {recommandations} user = {props.user} graph = {graph}/>
        </>
    )
}

export default Profile1





    

