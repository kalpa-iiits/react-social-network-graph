import getFriendList from "./getFriendList";

function getRecommandations(graph, key){
    var people = Object.keys(graph.friends);
    var friends = getFriendList(graph, key)
    var nonFriends = people.filter(el => !friends.includes(el))
    let index = nonFriends.indexOf(key)
    nonFriends.splice(index, 1)
    
    return nonFriends;
}

export default getRecommandations;