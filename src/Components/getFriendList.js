function getFriendList(graph, key) {
    var friendList = [];
    Object.values(graph.friends[key]).forEach(friend =>
        friendList.push(friend)
    )
    return friendList;
}

export default getFriendList;