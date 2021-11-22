import React from 'react'


function Cards(props){
    return (
    props.friends.map(el => {
        return (
            <div class = "col-md-2">
                <img src = "https://i.imgur.com/EUPCHUW.png" alt = "profileimage" class = "friendimage"/>
                <h3>{el}</h3>
            </div>
        )
    }));
}

function Friends(props) {
    var friends = props.friends;
    return (
        <div className= "container-fluid">
            <h2> Friends List </h2>
            <div className = "row">
                <Cards friends = {friends}/>
            </div>
        </div>
    )
}

export default Friends
