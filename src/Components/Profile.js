import React from 'react'
import Friends from './Friends.js'
import getFriendList from './getFriendList.js';
import getRecommandations from './getRecommandations.js';
import Recommandations from './Recommandations.js'
import AddNodes from './AddNodes.js';
import AddFriend from './AddFriend.js'
import UserList from './UserList.js';



function Profile(props) {
    var graph = AddNodes();

    var queryParams = new URLSearchParams(window.location.search);
    var source = queryParams.get('source');
    var target = queryParams.get('target');

    if(target){
        graph.sendFriend(source, target);
    }
    
    var friends = getFriendList(graph, props.user);
    var recommandations = getRecommandations(graph, props.user);
    return (
        <>
            <UserList/>
            <div className= "container-fluid">
                <div className = "row">
                    <div className = "col-md-2">
                        <img src = "https://i.imgur.com/FMlmyY3.png" alt = "profileimage" className = "profile"/>
                        <h2>{props.user}</h2>
                    </div>
                </div>
            </div>
            <Friends friends = {friends} user = {props.user} />
            <Recommandations recommandations = {recommandations} user = {props.user} graph = {graph}/>
        </>
    )
}

export default Profile


